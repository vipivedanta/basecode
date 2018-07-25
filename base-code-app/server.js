const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
const server = http.createServer(app);
const router = express.Router();
app.use('/',router);

server.listen(3000,function(){
	console.log('Listens to 3000');
});

router.get('/',function(request,response){
	response.send('Hi My nodejs !');
});