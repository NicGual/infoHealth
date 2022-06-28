const verifyRoles = (...allowedRoles) => {
    return (req, res, next) => {
        if (!req?.role) return res.sendStatus(401);
        const rolesArray = [...allowedRoles];
        const userRole = req.role; // i have defined user as an array in Signin componente(frontend) isnt necessary [req.role]
        console.log(rolesArray);
        console.log(req.role);
        const result = userRole.map(role => rolesArray.includes(role)).find(val => val === true);
        if (!result) return res.sendStatus(401);
        next();
    }
}

module.exports = verifyRoles