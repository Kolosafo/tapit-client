import { ThunkDispatch } from "@reduxjs/toolkit";
import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { updateSocialLink } from "../../utils/api/dataApi";

type Props = {
  title: string;
  url: string;
  id: number;
};
const SocialCard: FC<Props> = ({ title, url, id }) => {
  const [inputVal, setInput] = useState(url);
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const runUpdateLink = () => {
    const key = title;
    const data: any = {};
    data[key] = inputVal;
    data["id"] = id;
    dispatch(updateSocialLink(data));
  };

  const runDeleteLink = () => {
    const key = title;
    const data: any = {};
    data[key] = "";
    data["id"] = id;
    setInput("");
    dispatch(updateSocialLink(data));
  };
  return (
    <div className="flex items-center justify-between px-3 pt-4 pb-3 my-3 space-x-3 bg-white rounded ">
      <div className="w-11/12 ">
        <div className="relative mb-2 text-dark bg-[#EFF0EC] border-opacity-25 rounded">
          <input
            className="outline-none w-full rounded bg-transparent text-sm transition-all duration-200 ease-in-out pt-5 p-3 "
            type="text"
            onChange={(e) => setInput(e.target.value)}
            value={inputVal}
          />
          <label className="absolute -top-4 left-0 flex items-center text-dark text-opacity-50 px-3 pt-5 transition-all duration-200 ease-in-out text-sm">
            <p className="capitalize">{title}</p>
          </label>
        </div>
      </div>
      <div className="flex mb-2 space-x-3">
        <span
          className="text-sm cursor-pointer hover:text-orange"
          onClick={runUpdateLink}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            className="iconify iconify--material-symbols"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z"
            ></path>
          </svg>
        </span>
        <span
          className="cursor-pointer hover:text-orange"
          onClick={runDeleteLink}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            className="iconify iconify--fluent"
            width="20"
            height="20"
            viewBox="0 0 12 12"
          >
            <path
              fill="currentColor"
              d="M5 3h2a1 1 0 0 0-2 0ZM4 3a2 2 0 1 1 4 0h2.5a.5.5 0 0 1 0 1h-.441l-.443 5.17A2 2 0 0 1 7.623 11H4.377a2 2 0 0 1-1.993-1.83L1.941 4H1.5a.5.5 0 0 1 0-1H4Zm3.5 3a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0V6ZM5 5.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5ZM3.38 9.085a1 1 0 0 0 .997.915h3.246a1 1 0 0 0 .996-.915L9.055 4h-6.11l.436 5.085Z"
            ></path>
          </svg>
        </span>
      </div>
    </div>
  );
};

export default SocialCard;
