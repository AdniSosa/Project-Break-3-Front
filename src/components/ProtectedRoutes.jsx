import useLoggedUser from "../hooks/useLoggedUser"
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
    const { userLogged } = useLoggedUser();
console.log(userLogged)
    if (!userLogged) {
        return <Navigate to="/login" replace />;
    }

    return children;
}

export default ProtectedRoutes