const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.listen(3000, function () {
  console.log('servidor en puerto 3000');
});
