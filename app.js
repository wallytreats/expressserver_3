const express = require('express');
const app = express();

app.use(express.static('./'));

app.get('/:id', function(req, res){
  if (req.params.id === 'api'){
    res.send('Hello from the API');
  }else{
    res.status(404);
    res.send('not found');
  }
});

app.listen(5000, function ( ) {
  console.log('listening on port 5000');
});
