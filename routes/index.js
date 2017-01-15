

router.get('/*', function(req, res){
  var file = req.params[0] || './views/index.html';
  res.sendFile(path.join(__dirname, '../public/', file));
});

module.exports = router;

// ---------------------------------------------------------------------------

var index = require('./routes/index');

function (req, res) {
  res.sendFile(path.resolve('./server/public/views/index.html'));
}

app.get('/', index);
