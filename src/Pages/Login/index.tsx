/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState, useEffect, SyntheticEvent } from "react";
import LoginImg from "../../assets/img/login_img.jpg";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { IRootState } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { forgotPassword, loginUser } from "../../utils/api/account";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Login = () => {
  // REDUX
  const { isLogged, loading } = useSelector((store: IRootState) => store.user);
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  // STATE
  const [resetPassword, setResetPassword] = useState<boolean>(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleLogin = (e: SyntheticEvent) => {
    setErrorMsg(null);
    e.preventDefault();
    if (email && password) {
      dispatch(
        loginUser({
          email,
          password,
        })
      )
        .then((e) => (e.payload.refresh ? navigate("/admin") : null))
        .catch((e) => {
          setErrorMsg("Email or Password Not Correct");
        });
    }
  };
  useEffect(() => {
    isLogged ? navigate("/admin") : null;
  }, [isLogged]);
  return (
    <div id="__next">
      <div className="flex items-center justify-center h-screen overflow-hidden md:justify-between authlayout">
        <div className="w-full lg:basis-1/2">
          <h1 className="text-3xl font-bold text-center ">
            <a href="/">Tap It</a>
          </h1>
          {!resetPassword ? (
            <div className="pt-10">
              <div className="px-10 w-full md:w-[42rem]">
                {errorMsg && (
                  <span className="text-red-600 text-sm"> {errorMsg} </span>
                )}
                <h2 className="pb-10 font-bold md:text-2xl text-dark">
                  Log In
                </h2>
                <form className="w-full">
                  <div className="space-y-7">
                    <div className="text-left">
                      <div className="space-y-2">
                        <label className="mb-2 text-sm md:text-base text-primary">
                          Email
                        </label>
                        <input
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                          type="email"
                          placeholder="Enter your email address"
                          name="email"
                          className="w-full px-3 py-4 text-sm bg-white border rounded focus:border-orange text-customgray600 focus:outline-none border-primary"
                        />
                      </div>
                    </div>
                    <div className="text-left">
                      <div className="space-y-2 relative">
                        <label className="mb-2 text-sm md:text-base text-primary">
                          Password
                        </label>
                        <input
                          onChange={(e) => setPassword(e.target.value)}
                          value={password}
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          name="password"
                          className="w-full px-3 py-4 text-sm bg-white border rounded focus:border-orange text-customgray600 focus:outline-none border-primary"
                        />
                        {showPassword ? (
                          <AiOutlineEyeInvisible
                            style={{
                              position: "absolute",
                              top: "40",
                              right: "20",
                              cursor: "pointer",
                            }}
                            size={25}
                            onClick={() => setShowPassword((show) => !show)}
                          />
                        ) : (
                          <AiOutlineEye
                            style={{
                              position: "absolute",
                              top: "40",
                              right: "20",
                              cursor: "pointer",
                            }}
                            onClick={() => setShowPassword((show) => !show)}
                            size={25}
                          />
                        )}
                      </div>
                    </div>
                    <button
                      className="bg-[#4f46e5] text-white border border-orange w-full rounded-md px-3 sm:px-5 py-3 font-bold  justify-center text-center md:text-sm cursor-pointer text-xs  hover:opacity-80 flex items-center space-x-2"
                      type="submit"
                      onClick={handleLogin}
                    >
                      {loading && !errorMsg ? "Logging you in" : "Log in"}
                    </button>
                  </div>
                  <div className="py-2 text-sm text-red-500"></div>
                </form>
                <div className="mt-4 space-y-3">
                  <p className="text-sm text-right text-primary">
                    <a
                      onClick={() => {
                        setResetPassword(true);
                        setEmail("");
                      }}
                      className="cursor-pointer"
                    >
                      Forgot Password?
                    </a>
                  </p>
                  <p className="text-sm text-center">
                    Don’t have an account yet?
                    <span className="pl-2 cursor-pointer text-[#4f46e5]">
                      Contact Us to get your card
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="px-10 w-full md:w-[42rem]">
              {errorMsg && (
                <span className="text-red-600 text-sm"> {errorMsg} </span>
              )}
              {success ? (
                <div className="self-center text-center p-5 bg-orange rounded-md text-white my-5">
                  Please check your email to continue resetting your password{" "}
                </div>
              ) : (
                <>
                  <h2 className="pb-10 font-bold md:text-2xl text-gray-700">
                    Forgot Password
                  </h2>

                  <form action="#" className="w-full">
                    <div className="space-y-7">
                      <div className="text-left">
                        <div className="space-y-2">
                          <label
                            htmlFor="emailInp"
                            className="mb-2 text-sm md:text-base text-primary"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            name="emailInp"
                            id=""
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email address to retrieve your account password"
                            className="w-full px-3 py-4 text-sm bg-white border rounded focus:border-orange text-gray-600 focus:outline-none border-primary"
                          />
                        </div>
                      </div>
                      <button
                        className="bg-[#4f46e5] text-white border border-orange w-full rounded-md px-3 sm:px-5 py-3 font-bold  justify-center text-center md:text-sm cursor-pointer text-xs  hover:opacity-80 flex items-center space-x-2"
                        onClick={(e: SyntheticEvent) => {
                          e.preventDefault();
                          setErrorMsg(null);
                          dispatch(forgotPassword({ email })).then((e) =>
                            e.payload === "Success"
                              ? setSuccess(true)
                              : setErrorMsg(
                                  "Something went wrong, please check your input"
                                )
                          );
                        }}
                      >
                        {loading && !errorMsg ? "Loading..." : "Reset Password"}
                      </button>
                    </div>
                  </form>
                </>
              )}

              <div className="mt-4 space-y-3 ">
                <p className="text-sm text-center">
                  <a
                    href="#"
                    onClick={() => {
                      setResetPassword(false);
                      setEmail("");
                    }}
                  >
                    Go Back To Login
                  </a>
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="h-screen overflow-hidden hidden lg:flex md:w-3/6">
          <img
            alt="background"
            src={LoginImg}
            width="5472"
            height="3648"
            decoding="async"
            data-nimg="1"
            className="object-cover"
            loading="lazy"
            style={{ color: "transparent" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
