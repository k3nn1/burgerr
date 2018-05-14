var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

// EXPRESS GET
router.get('/', function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    // console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

// EXPRESS POST
router.post('/burgers', function(req, res) {
  burger.insertOne([
    'burger_name'
  ], [
    req.body.burger_name
  ], function(result) {
    res.redirect('/');
  });
});

// EXPRESS PUT
router.put('/burgers/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;
//   console.log("condition: ", condition);

  burger.updateOne({
    devoured: true
  }, condition, function(result) {
    res.redirect('/');
  });
});

//Experts routes for server.js to use. 
module.exports = router;
