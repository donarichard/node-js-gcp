const functions = require('@google-cloud/functions-framework');

functions.http('home', (req, res) => {
  res.send('hello this my cloud function');
});
