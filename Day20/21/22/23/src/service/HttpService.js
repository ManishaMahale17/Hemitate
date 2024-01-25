import axios from "axios";
export const axiosHttp = axios.create({
  baseURL: "http://localhost:2222",
});

//Global request for Http Request

export const Get = (url) => {
  return axiosHttp.get(url);
};

export const Post = (url, payload) => {
  return axiosHttp.post(url, payload);
};

export const Put = (url, payload) => {
  return axiosHttp.put(url, payload);
};

export const Delete = (url) => {
  return axiosHttp.delete(url);
};
