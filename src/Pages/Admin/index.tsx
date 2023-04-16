import React, { useState, useEffect } from "react";
import LinkCard from "../../components/LinkCard";
import Links from "../../components/Links";
import Socials from "../../components/Socials";
import { useNavigate } from "react-router-dom";
import { IRootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { getLinks, getSocialLinks } from "../../utils/api/dataApi";
import { ThunkDispatch } from "@reduxjs/toolkit";
import Phone from "../../components/Phone";

const Admin = () => {
  const [view, setView] = useState("Links");
  const { isLogged, user } = useSelector((store: IRootState) => store.user);
  const { socialLinks, links } = useSelector((store: IRootState) => store.data);
  const nav = document.getElementById("normalNav");
  // nav?.style.display("none");
  const navigate = useNavigate();
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  useEffect(() => {
    !isLogged ? navigate("/") : null;
    user ? dispatch(getLinks({ username: user.username })) : null;
    user ? dispatch(getSocialLinks({ username: user.username })) : null;
  }, [user]);

  return (
    <>
      {/* <div className="flex items-center justify-between p-3 bg-white shadow-xl sm:p-5 rounded-2xl">
        <div className="flex items-center space-x-4 sm:space-x-8">
          <a href="/">
            <p className="font-bold cursor-pointer md:text-2xl">Tap It</p>
          </a>
          <a href="/admin">
            <p className="flex text-xs md:text-base  flex-col sm:flex-row items-center cursor-pointer text-orange font-semibold">
              <span></span>
              <span className="pl-2">Links</span>
            </p>
          </a>
          <a href="/admin/appearance">
            <p className="text-xs md:text-base  flex-col sm:flex-row flex items-center cursor-pointer false">
              <span></span>
              <span className="pl-2">Profile</span>
            </p>
          </a>
          <a href="/admin/links">
            <p className="text-xs md:text-base flex flex-col sm:flex-row items-center cursor-pointer justify-center false">
              <span></span>
              <span className="pl-2 ">Share</span>
            </p>
          </a>
        </div>
        <button
          className="bg-orange text-light border border-orange undefined rounded-md px-3 sm:px-5 py-3 font-bold  justify-center text-center md:text-sm cursor-pointer text-xs  hover:opacity-80 flex items-center space-x-2"
          type="button"
        >
          Log Out
        </button>
      </div> */}
      <div className="flex justify-between px-3 space-x-8 sm:px-10 md:px-20 no-scrollbar">
        <div className="w-full h-auto md:p-10 sm:p-0 py-20 my-10 overflow-scroll no-scrollbar scrollbar-hide">
          {/* <div className="flex items-center space-x-3">
            <div className="flex items-center text-xs  text-red-600 space-x-1 pt-1">
              <span className="text-red-600">
                <span></span>
              </span>
              <p>
                Your E-mail has not been verified. Check your email address to
                verify your mail to have full access to Tap It.
              </p>
            </div>
            <p className="pt-1 text-xs font-bold cursor-pointer">
              Resend verification
            </p>
          </div> */}
          <div className=" lg:pr-20">
            <div>
              <div className="flex items-center py-8 space-x-10">
                <p
                  className={` border-b-2 ${
                    view === "Links" ? "border-orange font-bold" : ""
                  } cursor-pointer`}
                  onClick={() => setView("Links")}
                >
                  Links
                </p>
                <p
                  className={`border-b-2 ${
                    view === "Social" ? "border-orange font-bold" : ""
                  } cursor-pointer`}
                  onClick={() => setView("Social")}
                >
                  Social Media Links
                </p>
              </div>
              {/*TODO: LINK CARD AREA */}
              {view === "Links" ? <Links /> : <Socials />}
            </div>
          </div>
        </div>
        {socialLinks.length > 0 && links.length > 0 && (
          <Phone socialLinks={socialLinks} links={links} />
        )}
        {/* <div className="mt-10 flex items-center justify-center  w-[40%] max-w-[320px] hidden lg:flex   item ">
          <div className="no-scrollbar overflow-y-scroll hidden lg:block fixed h-[65vh] w-[30vh] lg:w-[33vh] p-5 bg-gray-300 shadow-2xl border-8 border-black top-40 rounded-3xl  ">
            <div className="flex items-center justify-center">
              <div className="w-3/12">
                <img
                  alt="users profile picture"
                  srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftempimg.033b4167.png&amp;w=128&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftempimg.033b4167.png&amp;w=256&amp;q=75 2x"
                  src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftempimg.033b4167.png&amp;w=256&amp;q=75"
                  width="100"
                  height="100"
                  decoding="async"
                  data-nimg="1"
                  className="object-cover w-10 h-10 rounded-[50%]"
                  loading="lazy"
                  style={{ color: "transparent" }}
                />
              </div>
            </div>
            <div className="flex flex-col px-5 py-3 mt-5 space-y-1 rounded-lg bg-dark text-light ">
              <h3 className="text-sm font-semibold text-center">set title</h3>
              <p className="text-xs font-light text-center text-gray-300 ">
                set occupation
              </p>
            </div>
            <div className="pt-4 space-y-2">
              <section className="">
                <h2 className="font-bold">About</h2>
                <p className="mt-3 text-sm">
                  <span>No content set yet</span>
                </p>
              </section>
              <div>
                <h2 className="font-bold">Social Network</h2>
                <div className="flex items-center w-full pt-4 space-x-3 overflow-scroll no-scrollbar"></div>
              </div>
              <div>
                <h2 className="font-bold">Links</h2>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      {/* <div className="smallpreview">
        <div className="fixed bottom-0 flex w-full lg:hidden">
          <div className="flex items-center justify-center w-full px-4 py-2 space-x-3 text-sm bg-gray-200 border border-black cursor-pointer lg:hidden rounded-xl">
            <span></span>
            <span className="">Preview</span>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Admin;
