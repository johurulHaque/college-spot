import React, { useContext, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const {passwordReset} = useContext(AuthContext);
  const emailRef = useRef();
  const [error,setError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [passwordType, setPasswordType] = useState("password");

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    signIn(data.email, data.password).then((result) => {
      const user = result.user;
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Successfully logged user.",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(from, { replace: true });
    });
  };

  const handlePasswordReset = (event)=>{
    const email = emailRef.current.value;
    if(!email){
      alert("Please provide your email address for password reset!")
    }
    passwordReset(email)
    .then(() => {
        alert("Please Check Your email");
    })
    .catch((error) => {
      setError(error.message)
    });
  }


  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col md:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left ">
            {/* <Lottie animationData={animateLogin} loop={true} />             */}
            <img src="./login.jpg" alt="" />
          </div>
          <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="email"
                  className="input input-bordered"
                  ref={emailRef}
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                  <span
                    onClick={togglePassword}
                    className="text-2xl text-accent"
                  >
                    {passwordType === "password" ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </label>
                <input
                  type={passwordType}
                  {...register("password", { required: true })}
                  placeholder="password"
                  className="input input-bordered"
                />

                {errors.password && (
                  <span className="text-red-600">Email is required</span>
                )}
                {/* <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label> */}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-accent text-white"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            {
              error && <p className="text-red-500">{error}</p>
            }
            <p className="text-end text-2xl">
              <u><button className="btn btn-link" onClick={handlePasswordReset}>Password Reset</button></u>
            </p>
            <p className="text-end text-2xl">
              <small>
                New Here?{" "}
                <Link to="/register">
                  <button className="btn btn-link"> Register</button>
                </Link>
              </small>
            </p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
