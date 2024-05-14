const express = require('express');
const path = require('path')
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();

const PORT = process.env.PORT || 9000;

const conectarDB = require('./models/conexion');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen(PORT, () =>{
  console.log(`Server listening en new file 'Server' on http://localhost:${PORT}`);
});
