var express = require('express');
var router = express.Router();

function fibonacci(num) {
	var answer = 0;
	if( num <= 1 ) {
		return num;
	}
	else if( num > 1 ) {
		answer = fibonacci(num-1) + fibonacci(num-2);
	}
	return answer;
}
 
router.get('/', function(req, res, next) {
		var msg=Math.random();
		res.render('ajax',{msg:"34"+msg,title:'Express'});
})

/* POST 호출 처리 */
router.post('/', function(req, res, next) {
    var msg = req.body.msg;
	res.send({result:true, msg:"피보나치 수열 "+msg+"번째 값 : "+fibonacci(msg)});

});
 
module.exports = router;