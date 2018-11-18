const express = require('express'),
      http = require('http');
const morgan = require('morgan');
const hostname = 'localhost';
const port = 3000;
const dishRouter = require('./routes/dishRouter');
const promRouter = require('./routes/promRouter');

const app = express();
app.use('/dishes', dishRouter);
app.use('/prom', promRouter);
app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'))

const server = http.createServer(app);
server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
})