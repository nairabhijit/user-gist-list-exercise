import axios, { AxiosInstance } from "axios";
let axiosInstance: AxiosInstance | null = null;
export const getAxiosInstance = () => {
  if (!axiosInstance) {
    const baseURL = process.env.REACT_APP_GITHUB_API_BASEURL;
    axiosInstance = axios.create({
      baseURL,
    });
    axiosInstance.defaults.headers.common["Authorization"] =
      `token ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`;
  }
  return axiosInstance;
};
