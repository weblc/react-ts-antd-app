import Mock from 'mockjs'

const userLogin = Mock.mock('/mock/api/user/login','post',(option)=>{

     return {
        success:true,
        message:'登陆成功！',
        data:{
            role:'superAdmin',
            sex:1,
            age:20,
            name:'大番薯',
            token:Mock.Random.string(10,16 ),
            img:"@img(100x100,'#4A7BF7')",
        }
    }
 })

const userInfo = Mock.mock('/mock/api/user/getUserInfo','post',(option)=>{

     return {
        success:true,
        message:'获取成功！',
        data:{
            role:'superAdmin',
            sex:1,
            age:20,
            name:'大番薯',
            token:Mock.Random.string(10,16 ),
            img:Mock.Random.dataImage()

        }
    }
 })

export default{
    userLogin,
    userInfo
}
