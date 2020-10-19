//import express from ('express');
//import {} from './routes';
const express = require('express')
const routes = require('./routes')

const app = express();

app.use(routes);
app.use(express.json());


app.listen(3000, () =>  console.log('Server is running'))