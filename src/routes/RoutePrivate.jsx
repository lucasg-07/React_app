import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import Layout from "../layouts/Layout";

function RoutePrivate({children}){
    const {isLogged} = useContext(AuthContext)
    if(isLogged){
        return(
        <Layout>
             {children}
        </Layout>
        )
    }
    return <Navigate to="/login"/> 
}

export default RoutePrivate