import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import toast from 'react-hot-toast';

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { logIn, signInGoogle } = useContext(AuthContext);
  const [loginError, setLoginError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';

  const handleLogin = (data) => {
    setLoginError('');
    logIn(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        toast.success('login success')
        navigate(from, {replace: true});
      })
      .catch((err) => setLoginError(err.message));
  };

  const handleGoogleLogin = () => {
    setLoginError('');
    signInGoogle()
    .then(result => {console.log(result.user)})
    .catch(err => setLoginError(err.message))
  };

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div className="w-96 shadow-lg p-7 rounded-md">
        <h2 className="text-xl text-center font-semibold mb-9">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full mb-2">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              className="input input-bordered w-full "
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full mb-2">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              className="input input-bordered w-full "
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters or longer ",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password?.message}</p>
            )}
            <label className="label">
              <span className="label-text-alt">Forgat Password</span>
            </label>
              {loginError && <p className="text-red-500"><small>{loginError}</small></p>}
          </div>
          <button className="btn btn-accent w-full mb-2" type="submit">
            Login
          </button>
          <div>
            New to Doctors Portal?{" "}
            <Link to="/sign-up" className="text-primary">
              Create an account
            </Link>
          </div>
        </form>
        <div className="flex flex-col w-full border-opacity-50">
          <div className="divider">OR</div>
        </div>
        <button
        onClick={handleGoogleLogin}
        className="btn btn-outline w-full mt-6">
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Login;
