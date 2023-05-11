import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { IRootState } from "../../redux/store";
import { logout } from "../../redux/user/userSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const { isLogged, user } = useSelector((store: IRootState) => store.user);
  const dispatch = useDispatch();

  const [lightUp, setLightUp] = useState<string>("links");

  return (
    <nav
      id="navbar"
      className={`${
        !isLogged
          ? "fixed left-0 top-0 z-50 flex items-center justify-between w-full px-3 py-4 md:px-20 flex-nowrap bg-white"
          : "flex items-center justify-between p-2 bg-white shadow-xl rounded-2xl"
      }`}
    >
      <div className="flex items-center space-x-4 sm:space-x-8">
        <Link to={"/"} onClick={() => setLightUp("")}>
          <p className="font-bold cursor-pointer md:text-2xl">Tap It</p>
        </Link>
        {isLogged && (
          <>
            <Link to={"/admin"}>
              <p
                className={`flex text-xs md:text-base  flex-col sm:flex-row items-center cursor-pointer ${
                  lightUp === "links" ? "text-orange" : null
                } false`}
                onClick={() => setLightUp("links")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--ri"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m13.06 8.11l1.415 1.415a7 7 0 0 1 0 9.9l-.354.353a7 7 0 1 1-9.9-9.9l1.415 1.415a5 5 0 0 0 7.07 7.07l.354-.353a5 5 0 0 0 0-7.07l-1.414-1.415L13.06 8.11Zm6.718 6.011l-1.414-1.414a5 5 0 0 0-7.071-7.071l-.354.353a5 5 0 0 0 0 7.071l1.414 1.415l-1.414 1.414l-1.414-1.414a7 7 0 0 1 0-9.9l.353-.353a7 7 0 0 1 9.9 9.9Z"
                  ></path>
                </svg>
                <span className="pl-2"> Links</span>
              </p>
            </Link>
            <Link to={"/profile"}>
              <p
                className={`text-xs md:text-base  flex-col sm:flex-row flex items-center cursor-pointer ${
                  lightUp === "profile" ? "text-orange" : null
                } false`}
                onClick={() => setLightUp("profile")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--fluent"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    d="M5.5 2A3.5 3.5 0 0 0 5 8.965v1.008A4.5 4.5 0 1 1 9.973 5H8.965A3.5 3.5 0 0 0 5.5 2Zm3 4A2.5 2.5 0 0 0 6 8.5v4A2.5 2.5 0 0 0 8.5 15h4a2.5 2.5 0 0 0 2.5-2.5v-4A2.5 2.5 0 0 0 12.5 6h-4ZM7 8.5A1.5 1.5 0 0 1 8.5 7h4A1.5 1.5 0 0 1 14 8.5v4a1.5 1.5 0 0 1-1.5 1.5h-4A1.5 1.5 0 0 1 7 12.5v-4Z"
                  ></path>
                </svg>
                <span className="pl-2"> Profile</span>
              </p>
            </Link>
            <Link to={"/share"}>
              <p
                className={`text-xs md:text-base flex flex-col sm:flex-row items-center cursor-pointer justify-center ${
                  lightUp === "share" ? "text-orange" : null
                } font-semibold`}
                onClick={() => setLightUp("share")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--material-symbols"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M6 23q-.825 0-1.413-.588T4 21V10q0-.825.588-1.413T6 8h3v2H6v11h12V10h-3V8h3q.825 0 1.413.588T20 10v11q0 .825-.588 1.413T18 23H6Zm5-7V4.825l-1.6 1.6L8 5l4-4l4 4l-1.4 1.425l-1.6-1.6V16h-2Z"
                  ></path>
                </svg>
                <span className="pl-2 "> Share</span>
              </p>
            </Link>
          </>
        )}
      </div>
      {isLogged && user ? (
        <div className="flex">
          <span className="flex mx-5 base_bg text-black border border-orange undefined rounded-full px-3 sm:px-5 py-3 font-bold  justify-center text-center md:text-sm cursor-pointer text-xs  hover:opacity-80  items-center space-x-2">
            {user.username[0]}
          </span>

          <button
            className="bg-orange text-light border border-orange undefined rounded-md px-3 sm:px-5 py-3 font-bold  justify-center text-center md:text-sm cursor-pointer text-xs  hover:opacity-80 flex items-center space-x-2"
            type="button"
            onClick={() => {
              dispatch(logout());
              navigate("/");
            }}
          >
            Log Out
          </button>
        </div>
      ) : (
        <button
          className="bg-orange text-light border border-orange undefined rounded-md px-3 sm:px-5 py-3 font-bold  justify-center text-center md:text-sm cursor-pointer text-xs  hover:opacity-80 flex items-center space-x-2"
          type="button"
          onClick={() => navigate("/login")}
        >
          Log In
        </button>
      )}
    </nav>
  );
};

export default Navbar;
