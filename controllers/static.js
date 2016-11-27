var express = require('express');
var path = require('path');
var router = express.Router();


// router.get('/', function(req, res) {
//   res.sendFile(path.resolve(__dirname + '/../views/index.html'));
// });

router.get('/', function(req, res) {
  res.render('pages/index');
});

router.get('/page1', function(req, res) {
  res.render('pages/page1');
});

router.get('/page2', function(req, res) {
  res.render('pages/page2');
});

router.get('/page3', function(req, res) {
  res.render('pages/page3');
});

router.get('/page4', function(req, res) {
  res.render('pages/page4');
});

router.get('/page5', function(req, res) {
  res.render('pages/page5');
});


router.use(express.static(__dirname + '/../assets'));

module.exports = router;
