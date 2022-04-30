require('dotenv').config();
const express = require('express');
const cors = require('cors')
const app = express ();
const path = require('path');
const passport = require('passport');
const authRoutes = require('./routes/auth');

require('./config/passport')(passport);
app.use(passport.initialize());
//settings
app.set('port',process.env.PORT || 4000)

//midelwares
app.use(cors());
app.use(express.json());

//routes
app.use('/auth', authRoutes)
app.use('/refresh', require('./routes/refresh'))
//app.use('/logout', require('./routes/logout'))
app.use('/api/users',require('./routes/users'))
app.use('/api/notes',require('./routes/notes'))


module.exports = app;