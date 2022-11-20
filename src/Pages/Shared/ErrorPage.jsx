import React from 'react';
import { useContext } from 'react';
import { useRouteError } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const ErrorPage = () => {
    const error = useRouteError();
    const {logOut} = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
          .then(() => {
            localStorage.removeItem("access_token");
          })
          .catch((err) => console.error(err));
      };

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='flex flex-col gap-3'>
            <p className='text-red-500'>Something went wrong</p>
            <p>Please <button onClick={handleLogout} to="">Sign Out</button>and Login back</p>
            <h3 className="text-3xl font-bold">{error?.message}</h3>
        </div>
        </div>
    );
};

export default ErrorPage;