/* Todo api ndoe server */

const express = require('express'),
      app = express(),
      bodyParser = require('body-parser')
      PORT = process.env.PORT || 8080;

/* so node won't yell at us */

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(express.static(__dirname + '/views'));

/* Routes */

/* API */

const todoRoutes = require('./routes/todos');

app.use('/api/todos', todoRoutes);

/* Root  */

app.get('/', (req, res) => {
  res.send('index.html');
});

app.get('/happy', (req, res) => {
  res.send(':)');
})


/* Start server */
app.listen(PORT, function() {
  console.log('Serving up some slick routes on ' + PORT);
});
