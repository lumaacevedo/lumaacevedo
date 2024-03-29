const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();

// importing routes
const indexRoutes = require('./routes/index2');

// setting
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

// routes
app.use('/', indexRoutes);
// starting the server

app.listen(app.get('port'), () =>{
    console.log(`Server on port ${app.get('port')}`);
});
