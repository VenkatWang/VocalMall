import axios from 'axios'

//1.使用回调函数的方式进行网络请求
// export function request(config, success, failure) {
//   const instance1 = axios.create({
//     baseURL: 'http://152.136.185.210:8000/api/z8',
//     timeout: 5000
//   })
//   instance1(config)
//     .then(res => {
//       success(res)
//     })
//     .catch(err => {
//       failure(err)
//     })
// }

//2.
// export function request(config) {
//   const instance2 = axios.create({
//     baseURL: 'http://152.136.185.210:8000/api/z8',
//     timeout: 5000
//   })
//
//   instance2(config.baseConfig)
//     .then(res => {
//       config.success(res)
//     })
//     .catch(err => {
//       config.faliure(err)
//     })
// }

//3.使用Promise来进行网络请求
// export function request(config){
//   return new Promise((resolve, reject) =>{
//     const instance3=axios.create({
//       baseURL:'http://152.136.185.210:8000/api/z8',
//       timeout:5000
//     })
//       instance3(config)
//         .then(res=>{
//           resolve(res)
//         })
//         .catch(err=>{
//           reject(err)
//       })
//   } )
// }

//4.
export function request(config) {
  const instance4 = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/w6',
    timeout: 5000
  })
  //1.请求时拦截
  instance4.interceptors.request.use(config => {
    // console.log(config);
    return config;
  }, err => {
    console.log(err);
  })
  //2.响应式拦截
  instance4.interceptors.response.use(res=>{
    // console.log(res);
    return res.data
  },err=>{
    console.log(err);
  })

  return instance4(config)
}

