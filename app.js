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

app.use('./node_modules',express.static('./node_modules'));
app.use('/public',express.static('./public'));
// 配置body-parser
app.use(bodyParser.urlencoded({
    extended:false
}));



// 使用router
app.use(router);


// 4绑定端口
app.listen(12347,() => {
    console.log('run it');
});
