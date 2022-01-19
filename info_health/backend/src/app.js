const express = require('express');
const cors = require('cors')
const app = express ();
const authRoutes = require('./routes/auth');
//settings
app.set('port',process.env.PORT || 4000)

//midelwares
app.use(cors());
app.use(express.json());

//routes
app.use('/api/users',require('./routes/users'))
app.use('/api/notes',require('./routes/notes'))
app.use('/auth', authRoutes)

module.exports = app;