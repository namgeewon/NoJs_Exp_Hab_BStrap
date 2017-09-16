var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
		var msg=Math.random();
		res.render('home',{msg:"34"+msg,title:'Express'});
});

module.exports = router;
