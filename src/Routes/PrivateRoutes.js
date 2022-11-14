import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const PrivateRoutes = ({children}) => {
    const {loading, user} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-green-500"></div>
    }

    if(user){
        return children;
    }

    return (
        <Navigate to='/login' state={{from: location}} replace/>
    );
};

export default PrivateRoutes;