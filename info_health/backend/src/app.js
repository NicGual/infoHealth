require('dotenv').config();
const express = require('express');
const cors = require('cors')
const app = express ();
const path = require('path');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const authRoutes = require('./routes/auth');
const corsOptions = require('./config/corsOptions');
const credentials = require('./middleware/credentials')

require('./config/passport')(passport);
app.use(passport.initialize());
//settings
app.set('port',process.env.PORT || 4000)

//midelwares
app.use(credentials);
app.use(cors(corsOptions));         
app.use(express.json());
app.use(cookieParser());

//routes
app.use('/auth', authRoutes)
app.use('/refresh', require('./routes/refresh'));
app.use('/logout', require('./routes/logout'));
//app.use('/logout', require('./routes/logout'))
app.use('/api/users',require('./routes/users'));
app.use('/api/appointments',require('./routes/appointments'));



module.exports = app;