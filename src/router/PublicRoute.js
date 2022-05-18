import { Navigate, useLocation } from 'react-router-dom';
import { getToken } from './../Helper'

const PublicRoute = ({ component: children }) => {
    const auth = getToken() ? true : false;
    let pathname = useLocation().pathname;
    if(!auth && pathname !== '/login'){
        return <Navigate to="/login" />
    }else if (auth && pathname === '/login') {
        return <Navigate to="/home" />
    }
    return children;
}
export default PublicRoute;
