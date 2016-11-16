var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/ChatPanel',function (req,res,next) {
  res.render('ChatPanel/app')
});

router.get('/LeaveMsg',function (req,res,next) {
  res.render('LeaveMsg-easy/app')
});



module.exports = router;
