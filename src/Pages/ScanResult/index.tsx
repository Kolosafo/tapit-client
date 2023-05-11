import { ThunkDispatch } from "@reduxjs/toolkit";
import DummyImg from "../../assets/img/dummy_profile.jpg";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../redux/store";
import { useParams } from "react-router-dom";
import { getUserApi } from "../../utils/api/account";
import { getLinks, getSocialLinks } from "../../utils/api/dataApi";
import SocialIcons from "../../components/SocialIcons";
import { RotatingTriangles } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoIosCopy } from "react-icons/io";
import { AiFillCheckCircle } from "react-icons/ai";

const ScannedResult = () => {
  //REDUX
  const { socialLinks, links } = useSelector((store: IRootState) => store.data);
  const { loading } = useSelector((store: IRootState) => store.data);
  //STATE
  const display = document.getElementById("navbar")?.style.display;
  const { username } = useParams();
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const [notFound, setNotFound] = useState<null | string>(null);
  const [phoneCopied, setPhoneCopied] = useState("Public Number");
  const [privatePhone, setPrivatePhone] = useState("Private Number");
  const [privatePhoneCopied, setPrivatePhoneCopied] = useState(false);
  const [reload, setReload] = useState("Phone Number");
  const notify = (arg: string) => toast(arg);

  // DATA STATE
  const [userProfileData, setUserProfileData] = useState<IUser2 | null>(null);

  const downloadCV = () => {
    if (userProfileData) {
      const a = document.createElement("a");
      a.href = userProfileData.cv;
      a.download = `${userProfileData.first_name}-cv`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  const getPrivateContact = () => {
    navigator.clipboard.writeText(
      userProfileData ? userProfileData?.public_phone_number : ""
    );
    setPrivatePhone(
      userProfileData ? userProfileData.private_phone_number : ""
    );

    // DOWNLOAD AN COPY!
    makeVCard();
    setPrivatePhoneCopied(true);
    notify("Copied!");

    setTimeout(() => {
      setPrivatePhone("Private Number");
    }, 10000);
  };
  const getPrompt = () => {
    setPrivatePhoneCopied(false);
    const code = userProfileData?.passcode;
    const passcode = prompt("Enter passcode");
    if (code === passcode) {
      getPrivateContact();
    } else {
      notify("Incorrect Passcode");
    }
  };

  const setCopied = () => {
    navigator.clipboard.writeText(
      userProfileData ? userProfileData?.public_phone_number : ""
    );
    setPhoneCopied("Copied!");
    setTimeout(() => {
      setPhoneCopied("Public Number");
    }, 2000);
  };

  useEffect(() => {
    if (username) {
      dispatch(getLinks({ username: username }));
      dispatch(getSocialLinks({ username: username }));
      const getUser = async () => {
        const response: IUser2[] = await getUserApi({ username });
        // console.log("GOTTENT THE USER OO", response);
        setUserProfileData(response[0]);
      };
      getUser().catch(() => setNotFound("THIS USER WAS NOT FOUND"));
    }
    const nullFooter = document.getElementById("navbar")!;
    nullFooter.style.display = "none";
  }, [username]);
  console.log(socialLinks);

  // VC CARD SIDE

  function downloadToFile(content: any, filename: any, contentType: any) {
    const a = document.createElement("a");
    const file = new Blob([content], { type: contentType });

    document.location.href = URL.createObjectURL(file);
    // a.href = URL.createObjectURL(file);
    // a.download = filename;
    // a.click();

    URL.revokeObjectURL(a.href);
  }
  const makeVCardVersion = () => `VERSION:3.0`;
  const makeVCardFirstName = (firstName: string, lastName: string) =>
    `FN:${firstName} ${lastName}`;
  const makeVCardTel = (phone: string) => `TEL;TYPE=WORK,VOICE:${phone}`;
  const makeVCardTimeStamp = () => `REV:${new Date().toISOString()}`;

  function makeVCard() {
    const vcard = `BEGIN:VCARD
${makeVCardVersion()}
${makeVCardFirstName(
  userProfileData ? userProfileData.first_name : "",
  userProfileData ? userProfileData.last_name : ""
)}
${makeVCardTel(userProfileData ? userProfileData.private_phone_number : "")}

${makeVCardTimeStamp()}
END:VCARD`;
    downloadToFile(vcard, "vcard.vcf", "text/vcard");
  }

  // downloadEl.addEventListener("click", makeVCard);
  return (
    <div className="h-screen">
      {loading ? (
        <div className="flex justify-center items-center h-full">
          <RotatingTriangles
            visible={true}
            height="200"
            width="200"
            ariaLabel="rotating-triangels-loading"
            wrapperStyle={{}}
            wrapperClass="rotating-triangels-wrapper"
          />
        </div>
      ) : !userProfileData && socialLinks.length === 0 && links.length === 0 ? (
        <div className="flex justify-center items-center h-full">
          <h1 className="text-3xl">OOPS... This user was not found</h1>
        </div>
      ) : (
        <>
          {" "}
          <ToastContainer />
          <div className="flex items-center justify-center p-5 bg-gray-300">
            <a href="/">
              <p className="font-bold cursor-pointer md:text-2xl">Tap It</p>
            </a>
          </div>
          <div className="h-screen overflow-x-hidden overflow-y-auto bg-gray-300 no-scrollbar ">
            <div className="relative h-40 min-w-[20rem]">
              <div className="absolute inset-x-8 -bottom-10">
                <div className="flex justify-center">
                  <div className="">
                    <div className="flex justify-center">
                      <img
                        alt="users profile picture"
                        src={
                          userProfileData?.profile_pic
                            ? userProfileData?.profile_pic
                            : DummyImg
                        }
                        width="70"
                        height="70"
                        decoding="async"
                        data-nimg="1"
                        className="object-contain rounded-full"
                        loading="lazy"
                        style={{ color: "transparent" }}
                      />
                    </div>
                    <div className="flex flex-col px-10 py-3 mt-5 space-y-1 rounded-lg md:px-20 bg-gray-700 text-light w-50">
                      <h3 className="font-semibold text-center ">
                        {userProfileData?.first_name}{" "}
                        {userProfileData?.last_name}
                      </h3>
                      <p className="text-xs font-light text-center text-gray-300 ">
                        {userProfileData?.occupation}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex  items-center justify-center mt-20 mb-10 space-x-3">
              <a
                href={`tel:${userProfileData?.public_phone_number}`}
                onClick={setCopied}
                className="flex items-center justify-center px-3 py-3 space-x-2 text-xs font-bold text-center border rounded-md cursor-pointer bg-light border-dark text-dark sm:px-5 md:text-sm hover:opacity-80"
              >
                {phoneCopied}
              </a>
              <div className="relative">
                <button
                  className="bg-orange  text-light border border-orange undefined rounded-md px-3 sm:px-5 py-3 font-bold  justify-center text-center md:text-sm cursor-pointer text-xs  hover:opacity-80 flex items-center space-x-2"
                  type="button"
                  onClick={getPrompt}
                >
                  {privatePhone}{" "}
                </button>
                {privatePhone === userProfileData?.private_phone_number ? (
                  <>
                    {privatePhoneCopied ? (
                      <AiFillCheckCircle
                        style={{
                          position: "absolute",
                          top: "2px",
                          right: "-40px",
                          cursor: "pointer",
                          color: "green",
                        }}
                        size={40}
                      />
                    ) : (
                      <a href={"#z"}>
                        <IoIosCopy
                          style={{
                            position: "absolute",
                            top: "2px",
                            right: "-40px",
                            cursor: "pointer",
                            color: "red",
                          }}
                          size={40}
                          // onClick={() => {
                          //   // makeVCard();
                          //   // setPrivatePhoneCopied(true);
                          //   // notify("Copied!");
                          // }}
                        />
                      </a>
                    )}
                  </>
                ) : null}
              </div>
            </div>
            <div className="container pb-10 space-y-6 p-5">
              <section className="">
                <h2 className="font-bold">About</h2>
                <p className="mt-3 text-sm">{userProfileData?.bio}</p>
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
                <h2 className="font-bold">Contact</h2>
                <a
                  href={`mailto:${userProfileData?.email}`}
                  className="flex items-center my-3 space-x-2 text-sm "
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
                      d="M4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.588 1.413T20 20H4ZM20 8l-7.475 4.675q-.125.075-.263.113t-.262.037q-.125 0-.263-.037t-.262-.113L4 8v10h16V8Zm-8 3l8-5H4l8 5ZM4 8v.25v-1.475v.025V6v.8v-.012V8.25V8v10V8Z"
                    ></path>
                  </svg>
                  <p className="font-semibold">Email:</p>
                  <p>{userProfileData?.email}</p>
                </a>
                <a
                  href={`tel:${userProfileData?.public_phone_number}`}
                  className="flex items-center my-3 space-x-2 text-sm "
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
                      d="M4.05 21q-.25 0-.525-.013T3 20.95V15.1l5-1l2.9 2.9q1.9-1.15 3.488-2.725t2.637-3.375l-2.85-2.875L15.1 3h5.85q.05.25.05.525v.525q0 3.225-1.437 6.288t-3.8 5.437q-2.363 2.375-5.425 3.8T4.05 21Z"
                    ></path>
                  </svg>
                  <p className="font-semibold">Number:</p>
                  <p>{userProfileData?.public_phone_number}</p>
                </a>
                <div className="flex items-center my-3 space-x-2 text-sm cursor-pointer">
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
                      d="M12 15.575q-.2 0-.375-.062T11.3 15.3l-3.6-3.6q-.275-.275-.275-.7t.275-.7q.275-.275.713-.287t.712.262L11 12.15V5q0-.425.288-.713T12 4q.425 0 .713.288T13 5v7.15l1.875-1.875q.275-.275.713-.263t.712.288q.275.275.275.7t-.275.7l-3.6 3.6q-.15.15-.325.213t-.375.062ZM6 20q-.825 0-1.413-.588T4 18v-2q0-.425.288-.713T5 15q.425 0 .713.288T6 16v2h12v-2q0-.425.288-.713T19 15q.425 0 .713.288T20 16v2q0 .825-.588 1.413T18 20H6Z"
                    ></path>
                  </svg>
                  <p className="font-semibold" onClick={downloadCV}>
                    Download CV
                  </p>
                </div>
              </div>
              <section>
                <h2 className="font-bold">Links</h2>

                {links &&
                  links.map((link) => {
                    return (
                      <div key={link.id}>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="flex items-center w-full h-16 p-3 mt-4 bg-gray-100 rounded-lg shadow-xl cursor-pointer">
                            <p className="font-bold"> {link.title}</p>
                          </div>
                        </a>
                      </div>
                    );
                  })}
              </section>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ScannedResult;
