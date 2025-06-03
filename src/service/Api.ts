import axios, {
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from "axios";
import axiosRetry from "axios-retry";
import ToastUtils from "../components/ui/Toast/toast";

const apiBaseUrl = import.meta.env.VITE_API_URL;
const apiurl = import.meta.env.DEV 
  ? '/api' // Use proxy in development
  : apiBaseUrl; // Direct API calls in production
const baseURL = import.meta.env.VITE_BASE_URL;
console.log(import.meta.env);
const BackEndReq = axios.create({
  baseURL: apiurl,
  timeout: 2500000, // Corrected the env variable name
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
    "access-control-allow-credentials": true,
    host: baseURL,
  },
  withCredentials: true,
});

// Retry logic for transient errors
axiosRetry(BackEndReq, {
  retries: 3,
  retryDelay: (retryCount: any) => {
    console.log(`Retry attempt: ${retryCount}`);
    return retryCount * 1000; // 1 second delay between retries
  },
  retryCondition: (error: any) => {
    // Retry on network errors or 5xx status codes
    return error.response?.status >= 500 || error.code === "ECONNABORTED";
  },
});

// Request interceptor for adding authorization headers
BackEndReq.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = localStorage.getItem("token") || null;

    if (token) {
      (
        config as InternalAxiosRequestConfig
      ).headers.Authorization = `Bearer ${token}`;
    }

    return config as InternalAxiosRequestConfig;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for handling errors globally
BackEndReq.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: any) => {
    if (error?.response?.data?.suggestion) {
      if (error.response.status !== 409)
        ToastUtils.error(error?.response?.data?.suggestion);
      return "";
    } else if (error.response) {
      // Handle HTTP errors
      switch (error.response.status) {
        case 401:
          // Unauthorized, redirect to login or refresh token
          // console.error("Unauthorized! Redirecting to login.");
          // ToastUtils.error("Unauthorized! Redirecting to login.");
          window.location.href = baseURL + "/login";
          break;
        case 403:
          // Unauthorized, redirect to login or refresh token
          console.error("Permission! Redirecting to login.");
          ToastUtils.errorStop("You dont have this access.");
          break;
        case 404:
          // Not found, maybe display a specific error message
          console.error("The requested resource was not found.");
          ToastUtils.error("The requested resource was not found.");
          break;
        case 500:
          // Server error, maybe display a "try again later" message
          console.error("Internal server error. Please try again later.");
          ToastUtils.error("Internal server error. Please try again later.");
          break;
        case 503:
          // Service unavailable, maybe retry or notify the user
          console.error("Service is currently unavailable.");
          ToastUtils.error("Service is currently unavailable.");
          break;
        default:
          console.error("An error occurred:", error.response.status);
          ToastUtils.error("An error occurred:" + error.response.status);
      }
    } else if (error.request) {
      // No response was received
      console.error(
        "No response received from the server. Please check your network connection."
      );
      ToastUtils.error(
        "No response received from the server. Please check your network connection."
      );
    } else {
      // Something else caused the error
      console.error("Error in request setup:", error.message);
      ToastUtils.error("Error in request setup:" + error.message);
    }

    return Promise.reject(error);
  }
);

export default BackEndReq;
