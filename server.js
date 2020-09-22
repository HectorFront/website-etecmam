const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('./backend/config/cors');
const router = require('./backend/routes/routes');

require('hbs');
app.set('views', path.join(__dirname + '/frontend/pages'));

//config cors
app.use(cors);
app.use(morgan('dev'));

//bodyParser
app.use(bodyParser({limit: '50mb'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//config hbs
app.set('view engine', 'hbs');
app.use('/assets', express.static(__dirname + '/frontend/public'));

app.use('/', router);

app.listen(80, () => {
  console.log({ success: "NodeJS - Server online" });
});
