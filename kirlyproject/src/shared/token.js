import axios from "axios";

export const gettoken = axios.interceptors.request.use(
  function (config) {
    // 요청이 전달되기 전에 작업 수행
    return {
      ...config,
      headers: { authorization: localStorage.getItem("authorization") },
    };
  },
  function (error) {
    // 요청 오류가 있는 작업 수행
    return Promise.reject(error);
  }
);

// instance.interceptors.request.use( function (config)
// { config.headers["Content-Type"] = "application/json; charset=utf-8";
// config.headers["Authorization"] = " 토큰 값";
// return config; },
// function (error) { console.log(error); return Promise.reject(error); } );
