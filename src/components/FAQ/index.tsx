import React, { useState, FC } from "react";
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
} from "react-icons/io";

type Props = {
  questionText: string;
  answerText: string;
};
const FaqCard: FC<Props> = ({ questionText, answerText }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full p- transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300">
      <div className="px-4 py-5 bg-gray-100 border-2 border-indigo-600 first-letter:md:px-8 md:py-7 bg-opacity-60 rounded-2xl shadow-10xl">
        <div className="flex flex-wrap justify-between -m-2">
          <div className="flex-1 relative">
            <div className="flex justify-between w-full p-2 cursor-pointer">
              <h3 className="font-semibold leading-normal uppercase md:text-lg ">
                {questionText}
              </h3>
              <span className="text-blue">
                <span></span>
              </span>
            </div>
            {open && (
              <div className="p-3">
                <hr className="border-1 border-gray-500" />
                <div className="bg-gray-700 p-1 my-2 text-white">
                  <span>{answerText}</span>
                </div>
              </div>
            )}
            {!open ? (
              <IoIosArrowDropdownCircle
                size={30}
                className="absolute top-[-12px] right-0 cursor-pointer"
                onClick={() => setOpen((open) => !open)}
              />
            ) : (
              <IoIosArrowDropupCircle
                size={30}
                className="absolute top-[-12px] right-0 cursor-pointer"
                onClick={() => setOpen((open) => !open)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqCard;
