function getCommnetList(){
    $.ajax({
        type:'GET',
        url:'http://www.liulongbin.top:3006/api/cmtlist',
        success:function(res){
            console.log(res);
            if(res.status !== 200){
                return alert('获取评论列表失败！')
            }
            console.log('获取数据成功');
            const rows = []
            $.each(res.data,function(i,item){
                rows.push('<li class="list-group-item" ><span class="badge" style="background-color: #F0AD4E;">评论时间：'+ item.time +'</span><span class="badge" style="background-color: #5BC0DE;">评论人：'+ item.username +'</span>'+ item.content +'</li>')
            })
            $('#list-group').empty().append(rows.join(''))
        }
    })
}
getCommnetList()

//两种写法1 
// $(function(){
//     $('#btn').on('click',function(){
//         const username = $('#exampleInputAmount').val().trim() 
//         const content = $('#text').val().trim()
    
//         if(username.length <= 0 || content.length <= 0){
//         return alert('请同时输入评论信息或评论人！')
//         }
//         $('#exampleInputAmount').val('')
//         $('#text').val('')
//         $.ajax({
//             type:'POST',
//             url:'http://www.liulongbin.top:3006/api/addcmt',
//             data:{
//                 username:username,
//                 content:content
//             },
//             success:function(res){
//                 console.log(res)
//                 if(res.status !== 201){
//                     return alert('获取评论列表失败！')
//                 }
//                 getCommnetList()
//             }
//         })
//     })
// })


// 第二种写法
// 将评论部分改为form表单,收集数据更方便
$(function(){
    $('#form_cmt').submit(function(e){
        e.preventDefault()
        const data = $(this).serialize()
        console.log(data);
        $.post('http://www.liulongbin.top:3006/api/addcmt',data,function(res){
            if(res.status !== 201){
                return alert('获取列表失败!')
            }
            getCommnetList()
            $('#form_cmt')[0].reset()
        })
        // $.ajax({
        //     type:'POST',
        //     url:'http://www.liulongbin.top:3006/api/addcmt',
        //     data:data,
        //     success:function(res){
        //         if(res.status !== 201){
        //             return alert('获取列表失败!')
        //         }
        //         getCommnetList()
        //         $('#form_cmt')[0].reset()
        //     }
        // })
    })

})