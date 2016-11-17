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

router.get('/home',function (req,res,next) {
  res.writeHead(302,{
    'Location':'http://wwww.improvecfan.cn'
  });
  res.end();
});

router.get('/goany',function (req,res,next) {
  var url = [
    'http://www.baidu.com',
      'http://www.improvecfan.cn',
      'http://blog.improvecfan.cn',
      'https://github.com',
      'https://github.com/CleverFan',
      'http://blog.csdn.net/qq_31655965',
      'https://www.google.com.hk/?gws_rd=ssl',
      'http://www.htmleaf.com/',
      'https://www.zhihu.com',
      'http://www.runoob.com/nodejs/nodejs-tutorial.html'
  ]
  var randomNum = parseInt(10*Math.random());
  res.writeHead(302,{
    'Location': url[randomNum]
  });
  res.end();
});



module.exports = router;
