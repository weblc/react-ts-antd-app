/*
 * @Description:
 * @Author: Lao_c
 * @Date: 2020-05-13 16:47:20
 */
import Mock from 'mockjs'
import * as dayjs from 'dayjs'
const Random = Mock.Random;

const getTaskList = Mock.mock('/mock/api/manager/taskList', 'post', ({body}) => {
    const {...options} = JSON.parse(body)
    console.log(options)
    let newMockArr = []
    for(let i=0;i<3;i++){
        let time = Random.date('yyyy-MM-dd')
        newMockArr.push(
            {
                "id":Random.id(),
                "name": Random.cname(),
                "title": Random.csentence(3,10),
                "content": Random.cparagraph(2,4),
                "startTime": time,
                "endTime":dayjs(new Date(new Date(time).getTime() + 24*60*60*1000*(Random.integer( 1, 10)))).format('YYYY-MM-DD') ,
            }
        )
    }


    return {
        success: true,
        message: '获取成功',
        data:{
            list:Mock.mock(newMockArr),
            pagination:{
                current:options.current,
                total:options.total===0?Random.integer(20,100):options.total,
                pageSize:options.pageSize,
            }
        },
        code:1,

    }
})
export default {
    getTaskList,

}

