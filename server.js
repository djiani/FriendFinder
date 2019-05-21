const express = require('express');
const path = require('path');
const Friends = require('./app/data/friends');



const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const htmlRoutes = require('./app/routing/htmlRoutes');
htmlRoutes(app);

app.get('/api/friends', function(req, res){
    res.json(Friends);
})

app.post('/api/friends', function(req, res){
    console.log(req.body);
    res.end();
    //return best match friend!
})


app.listen(PORT, function(){
    console.log('app is listening to localhost:'+PORT);
});








