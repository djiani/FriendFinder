const express = require('express');
const path = require('path');
const Friends = require('./app/data/friends');



const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const htmlRoutes = require('./app/routing/htmlRoutes');
htmlRoutes(app);

const apiRoutes = require('./app/routing/apiRoutes');
apiRoutes(app);


app.listen(PORT, function(){
    console.log('app is listening to localhost:'+PORT);
});








