import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authContext } from "../contexts/AuthProvider";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(authContext);

    const location = useLocation();

    if (loading) {
        <div className="flex justify-center items-center h-screen">
            <span className="loading loading-dots loading-lg text-[#4F95FF]"></span>
        </div>
    };

    if (user) {
        return children;
    };

    return <Navigate to={"/auth/login"} state={location.pathname} replace />
};

export default PrivateRoute;