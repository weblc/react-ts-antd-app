import Mock from 'mockjs'

const userLogin = Mock.mock('/mock/api/user/login', 'post', (option) => {

    return {
        success: true,
        message: '登陆成功！',
        data: {
            role: 'superAdmin',
            sex: 1,
            age: 20,
            name: '大番薯',
            token: Mock.Random.string(10, 16),
            avatar: Mock.Random.dataImage()
        }
    }
})

const userInfo = Mock.mock('/mock/api/user/getUserInfo', 'post', (option) => {

    return {
        success: true,
        message: '获取成功！',
        data: {
            role: 'superAdmin',
            sex: 1,
            age: 20,
            name: '大番薯',
            token: Mock.Random.string(10, 16),
            avatar: Mock.Random.dataImage()

        }
    }
})

const userAnalysisData = Mock.mock('/mock/api/user/getAnalysisData', 'get', (option) => {
    return {
        success: true,
        message: '获取成功！',
        data: {
            landData: Mock.mock({
                'list|1-10': [{
                    // 属性 id 是一个自增数，起始值为 1，每次增 1
                    'account|50-200': 200,
                    "dateTime": Mock.Random.datetime()
                }]
            })


        }

    }
})

export default {
    userLogin,
    userInfo,
    userAnalysisData,
}
