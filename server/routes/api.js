const express = require('express');
const router = express.Router();
var mysql = require('mysql')
var db = mysql.createConnection({
    host: 'mydb.tamk.fi',
    user: 'c6joryyn',
    password: 'Mixedbag1',
    database: 'dbc6joryyn1'
});
/* GET api listing. */

router.get('/', (req, res) => {
    res.send('api works');
});




router.get('/artists', function (req, res, next) {
    db.query("SELECT * FROM artists", function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });
});

router.get('/artists/single', function (req, res, next) {
    var id = req.query.id;
    db.query("SELECT * FROM artists WHERE artists.spotifyid = '" + id + "'", function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });
});


router.post('/artists', function (req, res, next) {
    var name = req.body.name;
    var id = req.body.spotifyid;
    
    db.query("INSERT INTO artists (name, spotifyid) VALUES ('" + name +"', '" + id +"')", function (err, result, fields) {
        if (err) throw err;
        res.send(true);
    });
});

module.exports = router;