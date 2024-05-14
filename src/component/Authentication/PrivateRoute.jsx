import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider";


const PrivateRoute = ({children}) => {
    const {person} = useContext(AuthContext)
    const location = useLocation()

    
  if (person) {
    return children;
  }

    return <Navigate to={'/login'} state={location.pathname}></Navigate>

    
};

export default PrivateRoute;