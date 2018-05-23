const express = require('express');
const router = express.Router();
var mysql = require('mysql')
var db = mysql.createConnection({
    host: 'mydb.tamk.fi',
    user: 'c6joryyn',
    password: 'Mixedbag1',
    database: 'dbc6joryyn1'
});

router.get('/artists', function (req, res, next) {
    db.query("SELECT * FROM artists", function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });
});

router.get('/artists/albums', function (req, res, next) {
    db.query("SELECT * FROM albums", function (err, result, fields) {
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

    db.query("INSERT INTO artists (name, spotifyid) VALUES ('" + name + "', '" + id + "')", function (err, result, fields) {
        if (err) throw err;
        res.send(true);
    });
});

router.post('/artists/albums', function (req, res, next) {
    var intel = req.body.package;
    let values = [];
    for (const b of intel) {
        let albumName = b['name'];
        let releaseDate = b['release_date'];
        let spotifyid = b['id'];
        let artist = b['artists'][0]['id'];
        let list = [artist, albumName, releaseDate, 0, spotifyid];
        values.push(list);
    }
    var sql = "INSERT INTO albums (artist, name, released, tracks, spotifyid) VALUES ?";
    db.query(sql, [values],
        function (err, result, fields) {
            if (err) throw err;
            res.send(true);
        });

});

router.delete('/artists/albums', function (req, res, next) {
    var id = req.query.id;
    db.query("DELETE FROM  albums WHERE albums.id = " + id + "", function (err, result, fields) {
        if (err) throw err;
        res.send(true);
    });
});

router.delete('/artists', function (req, res, next) {
    var id = req.query.id;
    db.query("DELETE FROM  artists WHERE artists.id = " + id + "", function (err, result, fields) {
        if (err) throw err;
        res.send(true);
    });
});



module.exports = router;