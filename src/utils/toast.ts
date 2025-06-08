// src/utils/toast.ts
import { toast } from "react-toastify";

const ToastUtils = {
  success: (message: string) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 3000,
      className: "bg-success-100 rounded-xl  text-white text-center",

    });
  },
  error: (message: string) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 3000,
      
      className: "bg-danger-200 rounded-xl  text-white text-center ",
    });
  },

  errorStop: (message: string) => {
    toast.error(message, {
      position: "top-right",
      autoClose: false,
      
      className: "bg-danger-200 rounded-xl  text-white text-center ",
    });
  },
  info: (message: string) => {
    toast.info(message, {
      position: "top-right",
      autoClose: 3000,
    });
  },
  warn: (message: string) => {
    toast.warn(message, {
      position: "top-right",
      autoClose: 3000,
    });
  },
};

export default ToastUtils;
