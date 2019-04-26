var express = require('express');
var mysql = require('mysql');
var router = express.Router();


var data = mysql.createConnection({
    host: 'localhost',
    user : 'root',
    password: 'root',
    database: 'PlayerInfo'
});
data.connect();

/* GET home page. */
router.get('/', function(request, response) {
    console.log("It did it!")
})
router.post('/', function(req, res) {
    var latitude=req.body.latitude;
    var longitude=req.body.longitude;
    data.query("INSERT INTO `PlayerLocation` (latitude,longitude) VALUES (?)", latitude.toString(), longitude.toString(), function(err, result){
        //if(err) throw err;
        console.log("1 location recorded");
    });
    if (req.body.impacts != null) {
        var impact = req.body.impacts;
        data.query("INSERT INTO `playerImpacts` (impact) VALUES (?)", impact.toString(), function (err, result) {
            console.log("1 impact recorded");
        });
    }
    res.end("Data Received!");
})

module.exports = router;