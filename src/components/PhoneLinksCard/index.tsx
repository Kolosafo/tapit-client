import React, { FC } from "react";

type Props = {
  title: string;
  url: string;
};
const PhoneLinksCard: FC<Props> = ({ title, url }) => {
  return (
    <div className="px-5 py-2 my-2 bg-white rounded-md shadow-xl cursor-pointer">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <p className="text-sm">{title}</p>
      </a>
    </div>
  );
};

export default PhoneLinksCard;
