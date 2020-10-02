import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const notifySuccess = (text) => {
  toast.success(text, {
    position: toast.POSITION.TOP_CENTER,
    className: "success-toast",
  });
};

export const notifyFailure = (text) => {
  toast.error(text, {
    position: toast.POSITION.TOP_CENTER,
    className: "error-toast ",
  });
};
