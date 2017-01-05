const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(__dirname));
mongoose.connect('mongodb://localhost:27017/olympic-events');



const hostname = 'localhost';
const port = 3001;
app.get('*', function(req, res) {
	    res.sendFile('./index.html', { root: __dirname });
});

const server = app.listen(port, hostname, () => {

	  console.log(`Server running at http://${hostname}:${port}/`);

});
