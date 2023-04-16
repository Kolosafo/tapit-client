import React, { useState, useRef, useEffect } from "react";
import QRCode from "react-qr-code";
import ColorChanger from "../../components/QRColorChanger";
import { QRCodeCanvas } from "qrcode.react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../redux/store";
import { getLinks, getSocialLinks } from "../../utils/api/dataApi";
import { ThunkDispatch } from "@reduxjs/toolkit";
import PhoneLinksCard from "../../components/PhoneLinksCard";
import SocialIcons from "../../components/SocialIcons";
import Phone from "../../components/Phone";
const Share = () => {
  const [qrColor, setQrColor] = useState("black");
  const [copyLink, setCopiedLink] = useState("Copy Link");
  const [changeQrColor, setChangeQrColor] = useState(false);
  // REDUX
  const { isLogged, user } = useSelector((store: IRootState) => store.user);
  const { links, socialLinks } = useSelector((store: IRootState) => store.data);
  const navigate = useNavigate();
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const qrRef = useRef<any>();
  const downloadQR = () => {
    const canvas: any = document.getElementById("123456");
    const pngUrl = canvas
      ? canvas.toDataURL("image/png").replace("image/png", "image/octet-stream")
      : null;
    const downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "qr-code.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  const qrCodeValue = "www.tapitbydendo.com/" + user?.username;

  const copyQrLink = () => {
    navigator.clipboard.writeText(qrCodeValue);
    setCopiedLink("Copied!");
    setTimeout(() => {
      setCopiedLink("Copy Link");
    }, 2000);
  };
  useEffect(() => {
    !isLogged ? navigate("/") : null;
    user ? dispatch(getSocialLinks({ username: user.username })) : null;
  }, [user]);
  return (
    <>
      <div className="flex justify-between px-3 space-x-8 sm:px-10 md:px-20">
        <div className="w-full h-auto lg:p-10 lg:py-20  md:p-1 md:py-0 sm:p-0 my-5 overflow-scroll no-scrollbar">
          <div className="min-h-[60vh] my-5">
            <h1 className="py-3 font-semibold">
              Share these links to people to view your Tap It Profile
            </h1>
            <div className="flex items-center space-x-3">
              <button
                className="bg-light border border-dark text-dark undefined rounded-md px-3 sm:px-5 py-3 font-bold  justify-center text-center md:text-sm cursor-pointer text-xs  hover:opacity-80 flex items-center space-x-2"
                type="button"
                onClick={copyQrLink}
              >
                {copyLink}
              </button>
              <button
                className="bg-orange text-light border border-orange undefined rounded-md px-3 sm:px-5 py-3 font-bold  justify-center text-center md:text-sm cursor-pointer text-xs  hover:opacity-80 flex items-center space-x-2"
                type="button"
                onClick={() => setChangeQrColor(true)}
              >
                Change QR Code Color
              </button>
            </div>
            {changeQrColor && <ColorChanger setQrColor={setQrColor} />}
            <div className="flex flex-col my-10 lg:items-end md:items-end items-center lg:flex-row lg:space-x-10">
              <QRCodeCanvas
                size={300}
                id="123456"
                style={{
                  height: "auto",
                  // maxWidth: "50%",
                  // width: "50%",
                  padding: "20px",
                  backgroundColor: "white",
                }}
                fgColor={qrColor}
                value={qrCodeValue}
                className="mb-10 rounded-lg shadow-xl lg:mb-0"
              />

              <a
                onClick={downloadQR}
                className="cursor-pointer px-5 py-3 mt-10 lg:mt-0 text-white flex justify-center    bg-orange rounded hover:opacity-70"
              >
                Download QR Code
              </a>
              {/* <a
                download="qrcode.png"
                className="px-5 py-3 mt-10 lg:mt-0 text-white flex justify-center bg-orange rounded cursor-pointer hover:opacity-70"
                onClick={() => console.log("REF", qrRef.current.download())}
              >
                Download QR Code
              </a> */}
            </div>
          </div>
        </div>

        {socialLinks.length > 0 && links.length > 0 && (
          <Phone socialLinks={socialLinks} links={links} />
        )}
      </div>
    </>
  );
};

export default Share;
