import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useAdmin from '../../hooks/useAdmin';

const AdminRoutes = ({children}) => {
    const {loading, user} = useContext(AuthContext);
    const [isAdmin, isLoading] = useAdmin(user?.email);
    const location = useLocation();
    if(loading || isLoading){
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-green-500 mx-auto"></div>
    }

    if(user && isAdmin){
        return children;
    }

    return (
        <Navigate to='/login' state={{from: location}} replace/>
    );
};

export default AdminRoutes;