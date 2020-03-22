import xhr from './config'


// export const getTest = ()=>{
//     return xhr.get
//     ('/api/v2/movie/top250')
// }
interface user {
    user:string,
    password:string
} 
export const userLogin = (params:user)=>{
    return xhr.post('/api/user/login',params)
}
 