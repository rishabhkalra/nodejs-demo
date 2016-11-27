var express = require('express');
var path = require('path');
var router = express.Router();


router.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname + '/../views/index.html'));
});

router.use(express.static(__dirname + '/../assets'));

module.exports = router;
