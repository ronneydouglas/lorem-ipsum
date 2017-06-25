const express = require('express');
const app = express();
const loremIpsum = require('lorem-ipsum');



app.get('', function(req, res) {
    res.send(loremIpsum({count: 3, units: 'paragraphs', format: 'html'}));
});

app.listen(3000, function(){
  console.log('Hey, it works!')
});
