const User = require('../models/User');
const jwt = require('jsonwebtoken');

const handleRefreshToken = async (req, res) => {
    const cookies = req.cookies;
    console.log(cookies);
    if (!cookies?.jwt) return res.sendStatus(401);
    const refreshToken = cookies.jwt;
    console.log(refreshToken);
    const foundUser = await User.findOne({ refreshToken }).exec();
    console.log(foundUser);
    if (!foundUser) return res.sendStatus(403); //Forbidden 
    // evaluate jwt 
    jwt.verify(
        refreshToken.split(" ")[1],
        process.env.REFRESH_TOKEN_SECRET,
        (err, decoded) => { 
            console.log(err);           
            if (err || foundUser.name !== decoded.userInfo.name) return res.sendStatus(403);
            console.log(decoded);
            const role = [foundUser.role];
            const userInfo = {"id": decoded.userInfo.id, "name": decoded.userInfo.name,"role": decoded.userInfo.role};
            const accessToken = jwt.sign(
                {
                    "userInfo": userInfo
                },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: '60s' }
            );
            res.json({ accessToken, role, userInfo, isAuthenticated: true})
        }
    );
}

module.exports = { handleRefreshToken }