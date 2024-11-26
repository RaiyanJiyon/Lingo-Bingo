import { toast } from "react-toastify";

const ErrorToaster = (message) => {
    toast.error(message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        zIndex: 9999,
    })
};

export default ErrorToaster;