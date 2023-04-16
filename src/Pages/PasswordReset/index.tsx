import React, { useState } from "react";
import { Oval } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  ResetBtn,
  ResetBtnDiv,
  ResetDiv,
  ResetInput,
  TopDiv,
  BotDiv2,
  PassDiv,
  Container,
  ModalCon,
} from "./style";
import { resetPassword } from "../../utils/api/account";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { IRootState } from "../../redux/store";

const ResetPasswordConfrim = () => {
  const { loading } = useSelector((store: IRootState) => store.user);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pwError, setPwError] = useState<string | null>(null);
  const [apiError, setApiError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { token } = useParams();
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const runResetPassword = () => {
    if (password === confirmPassword && token) {
      dispatch(
        resetPassword({
          token,
          password,
          password_confirm: confirmPassword,
        })
      ).then((res) => {
        if (res.payload === "success") {
          setApiError("Success! Redirecting...");
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        } else {
          setApiError(res.payload);
        }
      });
    }
  };

  return (
    <Container>
      <ModalCon>
        {apiError ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <h1>{apiError}</h1>
          </div>
        ) : (
          <ResetDiv>
            <TopDiv>
              <h1>Reset Your Password</h1>
              <p>Enter a new password for your account</p>
            </TopDiv>
            <BotDiv2>
              <PassDiv>
                <label> New Password*</label>
                <ResetInput
                  placeholder="*******"
                  type={"password"}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (e.target.value !== password) {
                      setPwError("Passwords don't match");
                    } else {
                      setPwError(null);
                    }
                  }}
                  value={password}
                />
              </PassDiv>
              <PassDiv>
                <label> Confirm Password*</label>
                <small style={{ fontSize: "9px", color: "red" }}>
                  {pwError ? pwError : null}
                </small>
                <ResetInput
                  placeholder="*******"
                  type={"password"}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    if (e.target.value !== password) {
                      setPwError("Passwords don't match");
                    } else {
                      setPwError(null);
                    }
                  }}
                  value={confirmPassword}
                />
              </PassDiv>
            </BotDiv2>
            <ResetBtnDiv>
              <ResetBtn
                onClick={runResetPassword}
                style={{
                  pointerEvents: loading ? "none" : "auto",
                  disabled: loading ? true : false,
                }}
              >
                Reset Password
                {loading && (
                  <Oval
                    height={20}
                    width={30}
                    color="#fff"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel="oval-loading"
                    secondaryColor="black"
                    strokeWidth={6}
                    strokeWidthSecondary={6}
                  />
                )}
              </ResetBtn>
            </ResetBtnDiv>
          </ResetDiv>
        )}
      </ModalCon>
    </Container>
  );
};

export default ResetPasswordConfrim;
