import axios from 'axios'
import Vue from 'vue'

const http = axios.create({
  baseURL: 'http://localhost:3000/admin/api'
})

http.interceptors.response.use(res => {
  return res
}, err => {
  // console.log(err.response.data.message);// 打印响应体中的message错误信息
  if(err.response.data.message) {
    Vue.prototype.$message({ // elementui的message方法来显示
      type: 'error',
      message: err.response.data.message
    })
  }
  
  return new Promise.reject(err)
})

export default http