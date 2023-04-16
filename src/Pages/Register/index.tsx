import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import LoginImg from "../../assets/img/login_img.jpg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../redux/store";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { registerUser } from "../../utils/api/account";

interface Values {
  name: string;
  email: string;
  password: string;
  phone: string;
}

function Register(): JSX.Element {
  const { isLogged, loading } = useSelector((store: IRootState) => store.user);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [pwError, setPwError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const runRegister = (e: any) => {
    setErrorMsg(null);
    e.preventDefault();
    if (
      firstName &&
      lastName &&
      email &&
      password &&
      confirmPassword &&
      username
    ) {
      dispatch(
        registerUser({
          first_name: firstName,
          last_name: lastName,
          email,
          username,
          password,
          password_confirm: confirmPassword,
        })
      ).then((e) => {
        if (e.payload === "already exists") {
          setErrorMsg("THIS ACCOUNT ALREADY EXISTS, TRY LOG IN");
        }
        if (e.payload === "User with this email already exists") {
          setErrorMsg("User with this email already exists, TRY LOG IN");
        }
        if (e.payload === "This username is already taken") {
          setErrorMsg("This username is already taken");
          console.log(e, "TAKENNN");
        } else {
          console.log(e.payload);
          navigate("/login");
        }
      });
    } else {
      setErrorMsg("Please fill the form correctly");
    }
  };
  return (
    <div id="__next">
      <div className="flex items-center justify-center md:justify-between authlayout mt-10">
        <div className="w-full lg:basis-1/2">
          <div className="pt-10">
            <div className="px-10 w-full md:w-[42rem]">
              <h2 className="pb-10 font-bold md:text-2xl text-dark">
                Register
              </h2>
              <form className="w-full">
                <div className="space-y-7">
                  {errorMsg && (
                    <span className="text-red-600 text-sm"> {errorMsg} </span>
                  )}
                  <div className="text-left flex justify-between">
                    <div className="space-y-2">
                      <label className="mb-2 text-sm md:text-base text-primary">
                        First Name
                      </label>
                      <input
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName}
                        type="text"
                        placeholder="John"
                        name="firstName"
                        className="w-full px-3 py-4 text-sm bg-white border rounded focus:border-orange text-customgray600 focus:outline-none border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="mb-2 text-sm md:text-base text-primary">
                        Last Name
                      </label>
                      <input
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                        type="text"
                        placeholder="Doe"
                        name="lastName"
                        className="w-full px-3 py-4 text-sm bg-white border rounded focus:border-orange text-customgray600 focus:outline-none border-primary"
                      />
                    </div>
                  </div>
                  <div className="text-left">
                    <div className="space-y-2">
                      <label className="mb-2 text-sm md:text-base text-primary">
                        Username
                      </label>
                      <input
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        type="text"
                        placeholder="Enter your username"
                        name="username"
                        className="w-full px-3 py-4 text-sm bg-white border rounded focus:border-orange text-customgray600 focus:outline-none border-primary"
                      />
                    </div>
                  </div>
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
                        onChange={(e) => {
                          setPassword(e.target.value);
                          if (e.target.value !== password) {
                            setPwError("Passwords don't match");
                          } else {
                            setPwError(null);
                          }
                        }}
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
                    <div className="space-y-2 relative">
                      <label className="mb-2 text-sm md:text-base text-primary">
                        Confirm Password
                      </label>{" "}
                      <small style={{ fontSize: "9px", color: "red" }}>
                        {pwError ? pwError : null}
                      </small>
                      <input
                        onChange={(e) => {
                          setConfirmPassword(e.target.value);
                          if (e.target.value !== password) {
                            setPwError("Passwords don't match");
                          } else {
                            setPwError(null);
                          }
                        }}
                        value={confirmPassword}
                        type={showPassword ? "text" : "password"}
                        placeholder="Confirm Password"
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
                    onClick={runRegister}
                  >
                    {loading ? "Creating your account" : "Register"}
                  </button>
                </div>
                <div className="py-2 text-sm text-red-500"></div>
              </form>
              <div className="mt-4 space-y-3">
                <p className="text-sm text-right text-primary">
                  <a
                    onClick={() => navigate("/login")}
                    className="cursor-pointer"
                  >
                    Already have an account?
                  </a>
                </p>
              </div>
            </div>
          </div>
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
}

export default Register;
