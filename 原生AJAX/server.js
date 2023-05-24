//1.引入express
const express = require('express');

//2.创建应用对象
const app = express();

//3.创建路由规则
//request 是对请求报文的封装
//response 是对响应报文的封装
app.get('/server',(request,response)=>{
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    
    //设置响应
    response.send('HELLO AJAX');
});
//延迟响应：请求超时与网络异常
app.get('/delay',(request,response)=>{
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    
    //设置响应
    setTimeout(()=>{

        response.send('HELLO DELAY');

    },1000);
    
});
app.get('/json-server',(request,response)=>{
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //响应一个数据
    const data = {
        name:'jiaxinke'
    }
    //对对象进行字符串转换
    let str = JSON.stringify(data);
    //设置响应
    response.send(str);

});
app.post('/server',(request,response)=>{
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //响应头
    // response.setHeader('Access-Control-Allow-Headers','*');
    //设置响应
    response.send('HELLO AJAX POST');
});

app.all('/axios-server',(request,response)=>{
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //响应头
    response.setHeader('Access-Control-Allow-Headers','*');
    //设置响应
    const data = {name :jiaxinke};
    response.send(JSON.stringify(data));
});

//4.监听端口启动服务
app.listen(8000,()=>{
    console.log("服务已经启动，8000 端口监听中....");
})
 