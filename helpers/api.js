import axios from "axios";
import { getCookie } from "cookies-next";
const BaseAPIURL = process.env.NEXT_PUBLIC_BASE_API_URL;

const API = axios.create({
  baseURL: BaseAPIURL,
});

const HeaderConf = (params) => {
  const config = {
    Authorization: {
      token: `Bearer ${getCookie("accessToken")}`,
      "Content-Type": "multipart/form-data",
    },
    params: params && {
      column: params,
    },
  };
  return config;
};

const GET = (url, req, config) =>
  API.get(url, req, config).then((res) => res.data);

const POST = (url, data, config) =>
  API.post(url, data, config).then((res) => res.data);

const PUT = (url, data, config) =>
  API.put(url, data, config).then((res) => res.data);

const PATCH = (url, data, config) =>
  API.patch(url, data, config).then((res) => res.data);

const DESTROY = (url, data, config) =>
  API.delete(url, data, config).then((res) => res.data);


API.interceptors.request.use(
  (config) => {
    const token = getCookie("accessToken");
    if (token) {
      config.headers.token = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { API, GET, POST, PUT, PATCH, DESTROY, HeaderConf, BaseAPIURL };
