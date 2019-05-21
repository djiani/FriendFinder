

function apiRoutes(app){
    app.get('/api/friends', function(req, res){
        res.json(Friends);
    })
    
    app.post('/api/friends', function(req, res){
        console.log(req.body);
        res.end();
        //return best match friend!
    })
}

module.exports = apiRoutes;
