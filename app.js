// 程序入口函数
//  1 导包
const express = require('express');
const router = require('./router');
const bodyParser = require('body-parser');
// 2 返回app对象
const app = express();
// 配置包
app.engine('html',require('express-art-template'));
// 处理静态资源




// 使用router
app.use(router);


// 4绑定端口
app.listen(12347,() => {
    console.log('run it');
})
