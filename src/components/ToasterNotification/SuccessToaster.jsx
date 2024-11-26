import { toast } from "react-toastify";

const SuccessToaster = (message) => {
    toast.success(message, {
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

export default SuccessToaster;