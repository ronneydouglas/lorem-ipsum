const express = require('express');
const path = require('path');
const app = express();


app.use('/lorem', express.static(path.join(__dirname, 'public')))

app.get('/', function (req, res) {
  res.send('text here???')
})


app.listen(3000, function(){
  console.log('Hey, it works!')
});
