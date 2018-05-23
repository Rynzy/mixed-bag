const express = require('express');
var cors = require('cors')
const path = require('path');
const bodyParser = require('body-parser');
const api = require('./server/routes/api');
const app = express();
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(express.static(path.join(__dirname, 'dist'))); // Point static path to dist
app.use(cors())
 
app.use('/api', api); // Set our api routes 
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
}); //Catch all other routes and return the index file


app.post('/artists', function(req, res) {
  res.send(req.body);
});
 
const port = process.env.PORT || '8080';  //port setting
app.set('port', port);
app.listen(port, ()=> console.log(`Listening at localhost:${port}`));