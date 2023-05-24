$(function(){
    // zero()函数为补零函数，对数据进行两位美观处理
    function zero(h){
        if(h <10){
            return '0' + h
        }else{
            return h
        }
    }
    //定义格式时间事件的过滤器
    // 对时间按进行过滤处理 template.defaults.imports.(自定义)
    template.defaults.imports.dateFormat = function(dtStr){
        var dt = new Date(dtStr)

        var y = dt.getFullYear()
        var m = zero(dt.getMonth() + 1)
        var d = zero(dt.getDay())

        var h = zero(dt.getHours())
        var mm  = zero(dt.getMinutes())
        var ss = zero(dt.getSeconds())

         return y +'-' + m +'-'+ d +'  '+ h +':'+ mm + ':' + ss 
    }
    // 定义函数获取新闻列表信息
    function getNewsList(){
        $.get('http://www.liulongbin.top:3006/api/news',
        function(res){
            if(res.status !== 200){
                return alert('获取新闻列表失败！')
            }
            console.log(res);
            // 将tags信息字符串变为以逗号隔开的字符串数组
            for(var i=0; i< res.data.length; i++){
                res.data[i].tags = res.data[i].tags.split(',')
            }
            // 将数据传到模板引擎中，再将模板渲染到页面中
            const htmlStr = template('tpl_news',res)
            $('#news-list').html(htmlStr)
        })

    }
    getNewsList()
})