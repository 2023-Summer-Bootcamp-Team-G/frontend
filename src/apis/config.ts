import axios from 'axios';

export default axios.create({
  baseURL: 'http://3.35.88.150:8080', // 기본 URL 설정
});

//axios 대신 api 사용하면 됩니다.
