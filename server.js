const dotenv = require('dotenv');
const express = require('express');
const app = express();
const errorHandler = require('./middlewares/errorHandler');
dotenv.config({path:'./config/config.env'});
PORT = process.env.PORT;
app.use(express.json());
const auth = require('./routes/users');
app.use('/api/auth',auth);
const products = require('./routes/product');
app.use('/api/products',products);

app.use(errorHandler);

app.listen(PORT,()=>{console.log(`The Server Runs On ${PORT} port in ${process.env.NODE_ENV} Environment`)});
