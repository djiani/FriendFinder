const Friends = require('../data/friends');

function apiRoutes(app){
    app.get('/api/friends', function(req, res){
        res.json(Friends);
    })
    
    app.post('/api/friends', function(req, res){
        console.log(req.body);
        console.log(Friends);
        const sumArray = Friends.map(function(data){
           return  data.scores.reduce(function(sum, val, index){
               return  sum + Math.abs(parseInt(val)- parseInt(req.body.scores[index]));
            }, 0);
        });
        console.log(sumArray);
        let indexBestMatch = sumArray.indexOf(Math.min(...sumArray));
        console.log(indexBestMatch);
        Friends.push(req.body);
        res.json(Friends[indexBestMatch]);
        //return best match friend!
    })
}

module.exports = apiRoutes;
