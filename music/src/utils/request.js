// 对axios封住
import axios from 'axios';

// axios.defaults.baseURL = "http://localhost:3000";
// export default axios;
// axios.create({}) ==> axios 的实例
const request = axios.create({
  // 配置项可以写在一起  // 可以配置生成不一样 request
  baseURL: 'http://43.142.37.253:8080',
});

export default request;
