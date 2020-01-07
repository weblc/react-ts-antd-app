import xhr from './config'


export const getTest = ()=>{
    return xhr.get
    ('/api/v2/movie/top250')
}
