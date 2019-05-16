const express = require('express');
const path = require('path');


const app = express();
const PORT = 3000;

app.get('/', function(req, res){
    res.sendFile(path.join(`${__dirname}/app/public/home.html`));
});







app.listen(PORT, function(){
    console.log('app is listening to localhost:'+PORT);
});








