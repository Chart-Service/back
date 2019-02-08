module.exports = function(){
    const express = require('express');
    const session = require('express-session');
    const MySQLStore = require('express-mysql-session')(session);
    const bodyParser = require('body-parser');
    const app = express();

    app.set('views', './views/');
    app.set('view engine', 'pug');
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(session({
      secret: '1234DSFs@adf1234!@#$asd',
      resave: false,
      saveUninitialized: true,
      store:new MySQLStore({
        port     : 3306,
        host     : process.env.DB_HOST,
        user     : process.env.DB_USER,
        password : process.env.DB_PASS,
        database : process.env.DB_NAME
      })
    }));
    return app;
  }