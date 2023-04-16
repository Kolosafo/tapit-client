import React, { useState, FC, SyntheticEvent } from "react";
import { GiFireball } from "react-icons/gi";
import { AiOutlineCheck } from "react-icons/ai";
import { HiOutlinePencil } from "react-icons/hi";
import { RiDeleteBinLine } from "react-icons/ri";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { deleteLink, saveLink, updateLink } from "../../utils/api/dataApi";
import { useDispatch } from "react-redux";
import { Oval } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
type Props = {
  id?: number;
  _title: string;
  _url: string;
  saveProject?: boolean;
  username?: string;
  reload: React.Dispatch<React.SetStateAction<string>>;
};
const LinkCard: FC<Props> = ({
  _title,
  _url,
  id,
  saveProject,
  username,
  reload,
}) => {
  const [title, setTitle] = useState(_title);
  const [url, setUrl] = useState(_url);
  const [disableTitle, setDisableTitle] = useState(true);
  const [disableUrl, setDisableUrl] = useState(true);
  const [loading, setLoading] = useState(false);
  const [updateNum, setUpdateNum] = useState(0);
  const [isSaveProject, setIsSaveProject] = useState(saveProject);
  const [deleteDisplay, setDeleted] = useState(false);

  const notify = (arg: string) => toast(arg);

  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const runSaveNewLink = (e: string) => {
    setLoading(true);
    dispatch(saveLink({ user: username, title, url })).then(() => {
      setIsSaveProject(false);
      reload(e);
      setLoading(false);
      notify("New Link Saved!");
    });
  };
  return (
    <div
      className="flex items-center justify-between p-2 bg-white shadow-xl sm:p-5 rounded-2xl"
      style={{ display: !deleteDisplay ? "flex" : "none" }}
    >
      <div className="flex items-center space-x-5">
        <span className="text-orange">
          <GiFireball size={25} color="" />
        </span>
        <div className="flex justify-between">
          <div className="space-y-2">
            <div className="flex items-center cursor-pointer">
              <input
                type="text"
                className="w-auto outline-none cursor-text font-semibold text-main"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                disabled={isSaveProject ? false : disableTitle}
              />
              <span className="text-gray-300 hover:text-primary">
                <HiOutlinePencil
                  onClick={() => setDisableTitle((state) => !state)}
                />
              </span>
            </div>
            <div className="flex items-center cursor-pointer">
              <input
                type="text"
                className="w-auto outline-none cursor-text font-semibold text-main"
                onChange={(e) => setUrl(e.target.value)}
                value={url}
                disabled={isSaveProject ? false : disableUrl}
              />
              <span className="text-gray-300 hover:text-primary">
                <HiOutlinePencil
                  onClick={() => setDisableUrl((state) => !state)}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end flex-col space-x-6">
        <div className="space-x-3 items-center flex">
          <span className="text:sm cursor-pointer hover:text-primary">
            {!loading ? (
              <AiOutlineCheck
                onClick={() => {
                  setUpdateNum((num) => num + 1);
                  if (!isSaveProject) {
                    id
                      ? (setLoading(true),
                        dispatch(updateLink({ id, title, url })).then(() => {
                          reload(`${updateNum + 1}`);
                          setDisableUrl(true);
                          setDisableTitle(true);
                          setLoading(false);
                          notify("Updated!");
                        }))
                      : null;
                  } else {
                    runSaveNewLink(`${updateNum + 1}`);
                  }
                }}
              />
            ) : (
              <Oval
                height={20}
                width={20}
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
          </span>
          <span className="text:sm cursor-pointer hover:text-primary">
            {!loading ? (
              <RiDeleteBinLine
                size={18}
                onClick={() => {
                  setDeleted(true);
                  setUpdateNum((num) => num + 1);
                  id
                    ? dispatch(deleteLink({ id })).then(() => {
                        notify("Deleted!");
                        reload(`${updateNum + 1}`);
                      })
                    : reload(`${updateNum + 1}`);
                }}
              />
            ) : (
              <Oval
                height={20}
                width={20}
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
          </span>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default LinkCard;
