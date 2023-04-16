import React, { useState, useEffect, SyntheticEvent } from "react";
import { BsCheckCircle } from "react-icons/bs";
import { Form, SupportContainer } from "./style";
import { contactUs } from "../../utils/api/account";
import { useSelector } from "react-redux";
import { IRootState } from "../../redux/store";

const ContactUs = () => {
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [message, setMessage] = useState("Hi, I'd like to get a TapIt Account");

  const onNameChangeHandler = (event: any) => {
    setEmailInput(event.target.value);
  };

  const onMessageChangeHandler = (event: any) => {
    setMessage(event.target.value);
  };

  const handleSend = async (e: any) => {
    e.preventDefault();
    if (emailInput !== "") {
      setLoading(true);
      setSuccess(true);
      await contactUs(emailInput, message, emailInput, setSuccess);
      setSuccess(true);
      setLoading(false);
    } else {
      setErrorMsg("PLEASE INPUT YOUR EMAIL");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        width: "100vw",
      }}
      id="Contact"
    >
      <SupportContainer>
        <h3>Send Us A Message</h3>
        <Form
          action="#"
          method="post"
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "20px",
          }}
        >
          {!success ? (
            <>
              {errorMsg && (
                <span style={{ fontSize: "13px", color: "red" }}>
                  {errorMsg}
                </span>
              )}
              <label style={{ flexBasis: "unset" }} htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                style={{ height: "40px", padding: "5px" }}
                value={emailInput}
                onChange={onNameChangeHandler}
              />
              <label
                htmlFor="message"
                style={{ flexBasis: "unset", marginTop: "10px" }}
              >
                Message
              </label>
              <textarea
                name="message"
                id=""
                cols={50}
                rows={15}
                style={{ padding: "10px", margin: "20px 0px" }}
                onChange={onMessageChangeHandler}
                value={message}
              />
              <button
                className="bg-[#4f46e5] text-white border border-orange w-full rounded-md px-3 sm:px-5 py-3 font-bold  justify-center text-center md:text-sm cursor-pointer text-xs  hover:opacity-80 flex items-center space-x-2"
                onClick={(e) => handleSend(e)}
              >
                Submit
              </button>
            </>
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span>SUCCESS! THANKS FOR CONTACTING US</span>
              <BsCheckCircle size={"200px"} color={"green"} />
              <a
                style={{ cursor: "pointer", color: "blue" }}
                onClick={() => setSuccess(false)}
              >
                Continue
              </a>
            </div>
          )}
        </Form>

        {/* <span
          style={{ textAlign: "center", color: "#A0A0A0", fontSize: "14px" }}
        >
          Contact Us Directly -
          <a
            style={{ fontWeight: "700", margin: "0px 5px" }}
            target="_blank"
            href="mailto:uprosal.services@gmail.com"
            rel="noreferrer"
          >
            Mail
          </a>
        </span> */}
      </SupportContainer>
    </div>
  );
};

export default ContactUs;
