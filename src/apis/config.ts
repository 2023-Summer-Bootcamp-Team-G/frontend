import axios from 'axios';

const BASE_URL = 'http://3.35.88.150:8000/api';

export const baseInstance = axios.create({
  baseURL: BASE_URL, // 기본 URL 설정
});

//axios대신 baseInstance

//authInstance
