const express = require('express');
const app = express();

const helmet = require('helmet');


// Use Helmet to enhance API's security
app.use(helmet());

// Remove the X-Powered-By header
app.use(helmet.hidePoweredBy());

app.get('/', (req, res) => {
  res.send('Hello, secure world!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});














































module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
