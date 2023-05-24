function template(id,data){
    // 定义变量接收模板
    var str = document.getElementById(id).innerHTML

    console.log(str);
    // 对模板文本进行处理找到占位符
    var pattern = /{{\s*([a-zA-Z]+)\s*}}/

    var pattResult = null
    // 循环使用exec()函数进行处理
    // exec()函数对字符串进行正则匹配，可以用来匹配字符串，如果字符串中有匹配的值，就返回该值
    while((pattResult = pattern.exec(str))){

        // 对正则匹配的值进行交换，将字符串中的值更改为真值
        str  = str.replace(pattResult[0],data[pattResult[1]])
    }

    return str
}