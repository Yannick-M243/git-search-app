const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const helmet = require("helmet"); 
const port = process.env.PORT || 8080;
const api = require('./routes/api');
const cors = require('cors');

app.use(bodyParser.json());
app.use(helmet());

//setting header parameters
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

//linking the /api parameter to its route file
app.use('/api', api);
app.get('/', function (req, res) {
    res.send('Server is running');
})

app.listen(port, () => console.log('Server is running on port ' + port))