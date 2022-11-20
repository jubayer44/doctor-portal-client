import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Context/AuthProvider';
import toast from 'react-hot-toast';
import useToken from '../../hooks/useToken';

const SignUp = () => {
    const {register, handleSubmit, formState: { errors }} = useForm();
    const {signUp, profileUpdate} = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const [createdEmail, setCreatedEmail] = useState('');
    const [token] = useToken(createdEmail);
    const navigate = useNavigate();

    if(token){
      navigate('/')
    }

    const handleSignUp = (data) => {
      setSignUpError('');
      signUp(data.email, data.password)
      .then(result => {
        profileUpdate(data.name)
        .then(res => {
          addUser(data.name, data.email)
          
        })
        .catch(err => console.error(err));
        toast.success('sign up success')
      })
      .catch(err => setSignUpError(err.message))
    };


    const addUser = (name, email) =>{
      const user = {name, email};
      fetch(`${process.env.REACT_APP_URL}/users`, {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(user)
      })
      .then(res => res.json())
      .then(data => {
        setCreatedEmail(email)
        
      })
    };



    return (
        <div className="flex justify-center items-center h-[80vh]">
      <div className="w-96 shadow-lg p-7 rounded-md">
        <h2 className="text-xl text-center font-semibold mb-9">Sign Up</h2>
        <form 
        onSubmit={handleSubmit(handleSignUp)}
        >
          <div className="form-control w-full mb-2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="name"
              className="input input-bordered w-full "
              {...register("name", {required: 'name is required'})}
            />
                {errors.name && <p className='text-red-500'>{errors.name?.message}</p>}
          </div>
          <div className="form-control w-full mb-2">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              className="input input-bordered w-full "
              {...register("email", {required: 'email is required'})}
            />
            {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
          </div>
          <div className="form-control w-full mb-2">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              className="input input-bordered w-full "
              {...register("password", {required: 'password is required',
            minLength: {value: 6, message: 'Password must be at least 6 characters'},
            pattern: {value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z].*[a-z])/, message: 'password must be strong'}
            })}
            />
            {errors.password && <p className='text-red-500'>{errors.password?.message}</p>}
          </div>
          {signUpError && <p className='text-red-500'><small>{signUpError}</small></p>}
          <button className="btn btn-accent w-full my-2" type='submit'>Sign Up</button>
          <p>
            Already Have an Account?{" "}
            <Link to="/login" className="text-primary">
              Login
            </Link>
          </p>
        </form>
        <div className="flex flex-col w-full border-opacity-50">
          <div className="divider">OR</div>
        </div>
        <button className="btn btn-outline w-full mt-6">
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
    );
};

export default SignUp;