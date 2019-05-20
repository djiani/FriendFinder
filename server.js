const express = require('express');
const path = require('path');


const app = express();
const PORT = 3000;

const htmlRoutes = require('./app/routing/htmlRoutes');
htmlRoutes(app);





app.listen(PORT, function(){
    console.log('app is listening to localhost:'+PORT);
});








