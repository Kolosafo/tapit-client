import React, { useEffect, useState } from "react";
import LinkCard from "../LinkCard";
import { IRootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { getLinks } from "../../utils/api/dataApi";
import { ThunkDispatch } from "@reduxjs/toolkit";

const Links = () => {
  const { user } = useSelector((store: IRootState) => store.user);
  const { links } = useSelector((store: IRootState) => store.data);
  const [addLink, setAddLink] = useState(false);
  const [reload, setReload] = useState("");

  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  useEffect(() => {
    user ? dispatch(getLinks({ username: user.username })) : null;
    setAddLink(false);
  }, [user, reload]);
  return (
    <div>
      <div>
        <div>
          <div className="flex justify-start mb-8">
            <button
              className="customBtn"
              type="button"
              onClick={() => setAddLink(true)}
            >
              <span></span>
              Add a new link
            </button>
          </div>
          <div className="h-[70vh] sm:p-5 overflow-scroll no-scrollbar">
            <div className="space-y-4">
              {links &&
                links.map((link) => {
                  return (
                    <LinkCard
                      key={link.id}
                      _title={link.title}
                      _url={link.url}
                      id={link.id}
                      reload={setReload}
                    />
                  );
                })}
              {addLink && user && (
                <LinkCard
                  _title={"title"}
                  _url={"url"}
                  saveProject={true}
                  username={user.username}
                  reload={setReload}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Links;
