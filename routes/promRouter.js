const express = require("express");
const bodyParser = require("body-parser");

const promRouter = express.Router();

promRouter.use(bodyParser.json());

promRouter.route('/')
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next)=>{
    res.end("will send the entire list of promos to you");
})
.post((req,res,next)=>{
    res.end(`i am creating a new promo called: ${req.body.name} \n with description: ${req.body.description}`);

})
.put((req,res,next)=>{
    res.statusCode = 403;
    res.end('PUT operations are not supported in /prom/');
})
.delete((req,res,next)=>{
    res.end('deleting all promos, you will regret it');
});


promRouter.route('/:promId')
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next)=>{
    res.end(`you are trying to get info about this promo: ${req.params.promId}`);
})
.post((req,res,next)=>{
    res.statusCode = 403;
    res.end(`POST operations  are not supported in /prom/${req.params.promId}`);
})
.put((req,res,next)=>{
    res.write(`Updating  the prom: ${req.params.promId} \n`);
    res.end(`Will update the prom: ${req.body.name} with details ${req.body.details}`)
})
.delete((req, res, next)=>{
    res.end(`deleting the promo: ${req.params.promId}`);
});

module.exports = promRouter