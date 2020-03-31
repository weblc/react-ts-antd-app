import Mock from 'mockjs'

 let userLogin = Mock.mock('/mock/api/user/login','post',(option)=>{

     return {
        success:true,
        message:'请求成功！',
        data:{
            role:'superAdmin',
            sex:1,
            age:20,
            name:'大番薯',
            token:Mock.Random.string(10,16 ),

        }
    }
 })

export default{
    userLogin
}
