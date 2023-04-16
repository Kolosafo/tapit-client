import React, { FC } from "react";
import DummyImg from "../../assets/img/dummy_profile.jpg";

import SocialIcons from "../SocialIcons";
import PhoneLinksCard from "../PhoneLinksCard";
import { IRootState } from "../../redux/store";
import { useSelector } from "react-redux";

type Props = {
  links: LinksType[];
  socialLinks: SocialLinksType[];
};
const Phone: FC<Props> = ({ links, socialLinks }) => {
  const { user } = useSelector((store: IRootState) => store.user);

  return (
    <div className="mt-10  flex items-center justify-center  w-[40%] max-w-[320px] hidden lg:flex   item ">
      <div className="no-scrollbar overflow-y-scroll hidden lg:block fixed h-[65vh] w-[30vh] lg:w-[33vh] p-5 bg-gray-300 shadow-2xl border-8 border-black top-40 rounded-3xl  ">
        <div className="flex items-center justify-center">
          <div className="w-3/12">
            <img
              alt="users profile picture"
              src={user?.profile_pic ? user.profile_pic : DummyImg}
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
        <div className="flex flex-col px-5 py-3 mt-5 space-y-1 rounded-lg bg-gray-800 text-light ">
          <h3 className="text-sm font-semibold text-center">
            {user?.firstName} {user?.lastName}
          </h3>
          <p className="text-xs font-light text-center text-gray-300 ">
            {user?.occupation}
          </p>
        </div>
        <div className="pt-4 space-y-2">
          <section className="">
            <h2 className="font-bold">About</h2>
            <p className="mt-3 text-sm">{user?.bio}</p>
          </section>
          <div>
            <h2 className="font-bold">Social Network</h2>
            <div className="flex items-center w-full pt-4 space-x-3 overflow-scroll no-scrollbar">
              {socialLinks.length > 0 && (
                <SocialIcons socialLinks={socialLinks} />
              )}
            </div>
          </div>
          <div>
            <h2 className="font-bold">Links</h2>
            {links.map((link) => {
              return (
                <PhoneLinksCard
                  key={link.id}
                  title={link.title}
                  url={link.url}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phone;
