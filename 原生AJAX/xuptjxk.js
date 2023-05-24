// 将data参数转换为查询字符串
function xuptData(data){
    var arr = []
    for(var k in data){
        var str = k +'='+data[k]
        // console.log(k);
        arr.push(str)
    }
    return arr.join('&')
}
// var res = xuptJxk({name:'jxk',age:21})
// console.log(res)

// 创建xhr对象
function xuptJxk(options){
    var xhr = new XMLHttpRequest()
    // 拼接查询字符串
    var qs = xuptData(options.data)
    // 判断请求方式为POST还是GET
    if(options.method.toUpperCase() === 'GET'){

        xhr.open(options.method,options.url + '?' +qs)

        xhr.send()

    }else if(options.method.toUpperCase() ==='POST'){

        xhr.open(options.method,options.url)
        // 设置请求头
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')

        xhr.send(qs)
    }

    // 判断进程状态
    xhr.onreadystatechange = function(){
        if(xhr.readyState ===4 && xhr.status ===200){
            // 将服务器返回的数据变为对象格式
            var result = JSON.parse(xhr.responseText)
            options.success(result)
        }
    }
}