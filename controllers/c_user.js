// 控制器的职责
// 实现了cd函数
// 要的结果就是数据操作返回的结果
const m_user = require('../node_modules/m_user');

// 渲染登录页
exports.showSignin = (req,res) => {
    res.render('sigin.html');
};
// 登录表单请求
exports.handleSigin = (rea,res) =>{
    // 获取表单数据
    const body = req.body;
    // console.log(body)
    m_user.checkEmaill(body.email,(err,data)=>{
        if(err){
            return res.send({
                code:500,
                message:'服务器错误'
            });
        }
        // 如果邮箱不存在、
        if(!data[0]){
            return res.send({
                code:1,
                message:'邮箱不存在'
            });

        }
        // 在验证密码
        if(data[0].password != body.password){
            return ress.send({
                cedo:2,
                message:'密码错误 再想想'
            });
        }
        // 邮箱和密码都正确 验证通过
        res.send({
            code:200,
            message:'验证通过'
        });
    });
}