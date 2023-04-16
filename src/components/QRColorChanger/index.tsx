import React, { FC } from "react";

type Props = {
  setQrColor: (color: string) => void;
};
const ColorChanger: FC<Props> = ({ setQrColor }) => {
  return (
    <div className="my-10">
      <h2 className="text-base font-semibold">Pick a Color for the QR Code</h2>
      <div className="flex space-x-3">
        <div
          className="w-4 h-4 p-3 bg-red-500 rounded-full cursor-pointer"
          onClick={() => setQrColor("red")}
        ></div>
        <div
          className="w-4 h-4 p-3 bg-purple-500 rounded-full cursor-pointer"
          onClick={() => setQrColor("purple")}
        ></div>
        <div
          className="w-4 h-4 p-3 rounded-full cursor-pointer bg-orange"
          onClick={() => setQrColor("#4f46e5")}
        ></div>
        <div
          className="w-4 h-4 p-3 bg-black rounded-full cursor-pointer"
          onClick={() => setQrColor("black")}
        ></div>
        <div
          className="w-4 h-4 p-3 bg-green-500 rounded-full cursor-pointer"
          onClick={() => setQrColor("green")}
        ></div>
      </div>
    </div>
  );
};

export default ColorChanger;
