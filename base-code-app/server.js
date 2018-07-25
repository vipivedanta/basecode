const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
const server = http.createServer(app);
const router = express.Router();
app.use('/',router);
app.use(express.static(path.join(__dirname, 'dist')));

server.listen(3000,function(){
	console.log( path.join(__dirname) );	
});

router.get('/test',function(request,response){
	response.send('Hi My nodejs !');
});

router.get('/home',function(request,response){
	response.sendFile(path.join(__dirname, 'dist/index.html'));
});