const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const appRoutes = require('./routes/user')

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.listen(app.get('port'),()=>{
    console.log('Servidor en el puerto 3000')
})

// app.use('/resources', express.static())
app.use(morgan('dev'));
app.use(myConnection(mysql,{
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'plmform'
}))
app.use(express.urlencoded({extended:false}));
app.use(express.json())
app.use('/', appRoutes);

app.use(express.static(path.join(__dirname, 'public')));


