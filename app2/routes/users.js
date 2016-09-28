var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('error',{message:'Not a valide page'});
});

router.get('/add',function(req,res,next){
	res.render('add',{title:'Express Entry'});
});

module.exports = router;
