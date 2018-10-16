// 路由模块
// 作用：处理分发找到这个请求对应的处理函数

// 1 导包
const express = require('express');
const c_user = require('./controllers/c_user');
const c_topic = require('./controllers/c_topic');

// 2.获取路由对象express.Router
const router = express.Router();

// 3 router.get()
// 渲染登录页面的请求
router.get('/sigin',c_user.showSignin)
        .post('./signin',c_user.handleSigin)
        .get('/',c_topic.showTopic);

// 4导出router
module.exports = router;
