/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useRef, useState, useEffect } from "react";
import DummyImg from "../../assets/img/dummy_profile.jpg";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { updateProfile } from "../../utils/api/account";
import Phone from "../../components/Phone";
import { getSocialLinks } from "../../utils/api/dataApi";
import { Oval } from "react-loader-spinner";
const Profile = () => {
  let cvRef = useRef<HTMLInputElement | HTMLButtonElement | null>(null);
  let profilePicRef = useRef<any>(null);
  const { isLogged, user } = useSelector((store: IRootState) => store.user);
  const { socialLinks, links } = useSelector((store: IRootState) => store.data);
  const navigate = useNavigate();
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const [cvName, setCvName] = useState<string | null>(null);
  const [saveProfile, setSaveProfile] = useState("Save Profile");
  const [profileImg, setProfileImg] = useState<string | undefined>(
    user?.profile_pic
  );
  const [saveLoading, setSaveLoading] = useState(false);
  const [userCv, setUserCv] = useState<string | undefined>(user?.cv);
  const [changeBio, setChangeBio] = useState<string | undefined>(user?.bio);

  const [occupation, setOccupation] = useState<string | undefined>(
    user?.occupation
  );
  const [publicNumber, setPublicNumber] = useState<string | undefined>(
    user?.public_phone_number
  );

  const profileSaved = () => {
    setSaveProfile("Saved!");
    setTimeout(() => {
      setSaveProfile("Save Profile");
    }, 2000);
  };

  const handleChange = async (file: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (reader.result) {
        setProfileImg(reader.result as string);
      }
    };
  };

  const convertPdf = async (file: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (reader.result) {
        setUserCv(reader.result as string);
      }
    };
  };

  const SaveProfileFunc = async () => {
    setSaveLoading(true);
    const data = {
      id: user?.id,
      profile_pic: profileImg,
      bio: changeBio,
      occupation,
      public_phone_number: publicNumber,
      cv: userCv,
    };
    const res = await updateProfile(data);
    res.status === 200 ? profileSaved() : setSaveProfile("Try Again");
    setSaveLoading(false);
  };
  useEffect(() => {
    !isLogged ? navigate("/") : null;
    user ? dispatch(getSocialLinks({ username: user.username })) : null;
    // updateProfile({ bio: changeBio , profileImg ? profile_img:ProfileImg : null })
  }, []);

  return (
    <>
      <div className="flex justify-between px-3 space-x-8 sm:px-10 md:px-20">
        <div className="w-full h-auto lg:p-10 lg:py-20  md:p-1 md:py-0 sm:p-0 my-5 overflow-scroll no-scrollbar">
          <div className="pt-10 font-bold md:text-lg">Profile</div>
          <div className="flex justify-between p-5 my-3 bg-white shadow-lg rounded-2xl">
            <div></div>{" "}
            <div className="">
              {cvName && (
                <span style={{ fontSize: "13px", color: "red" }}>{cvName}</span>
              )}
              <label
                className="block text-sm font-medium text-gray-900 cursor-pointer hover:opacity-75"
                // @ts-ignore
                onClick={() => cvRef.click()}
              >
                Upload CV {cvName}
              </label>
              <input
                type="file"
                accept=".xlsx,.xls,.doc, .docx,.ppt, .pptx,.txt,.pdf"
                hidden
                // @ts-ignore
                ref={(input) => (cvRef = input)}
                onChange={(e) => {
                  convertPdf(e.target.files ? e.target.files[0] : null);
                  e.target.files ? setCvName(e.target.files[0].name) : null;
                }}
              />
            </div>
          </div>
          <div className="py-10">
            <div className="p-5 bg-white shadow-xl rounded-2xl">
              <div className="flex items-center space-x-12 ">
                <div className="w-3/12 md:w-2/12">
                  <img
                    alt="users profile picture"
                    src={profileImg ? profileImg : DummyImg}
                    width="200"
                    height="200"
                    decoding="async"
                    data-nimg="1"
                    className="object-cover w-full md:w-auto rounded-[50%]"
                    loading="lazy"
                    style={{ color: "transparent" }}
                  />
                </div>
                <input
                  className="w-full "
                  id="file_input"
                  type="file"
                  accept="image/*"
                  hidden
                  // @ts-ignore
                  ref={(input) => (profilePicRef = input as HTMLInputElement)}
                  onChange={(e) =>
                    handleChange(e.target.files ? e.target.files[0] : null)
                  }
                />
                <div className="flex flex-col w-full space-y-4">
                  <button
                    className="bg-orange text-light border border-orange w-full rounded-3xl px-3 sm:px-5 py-3 font-bold  justify-center text-center md:text-sm cursor-pointer text-xs  hover:opacity-80 flex items-center space-x-2"
                    type="button"
                    // @ts-ignore
                    onClick={() => profilePicRef.click()}
                  >
                    Pick an Image
                  </button>
                  <button
                    className="bg-light border border-dark text-dark w-full rounded-3xl px-3 sm:px-5 py-3 font-bold  justify-center text-center md:text-sm cursor-pointer text-xs  hover:opacity-80 flex items-center space-x-2"
                    type="button"
                  >
                    Remove
                  </button>
                </div>
              </div>
              <div className="pt-8">
                <div className="relative mb-2 text-dark bg-[#EFF0EC] border-opacity-25 rounded">
                  <input
                    className="outline-none w-full rounded bg-transparent text-sm transition-all duration-200 ease-in-out pt-5 p-3 "
                    id="title"
                    name="title"
                    type="text"
                    disabled
                    value={`${user?.firstName} ${user?.lastName}`}
                  />
                  <label
                    className="absolute -top-4 left-0 flex items-center text-dark text-opacity-50 px-3 pt-5 transition-all duration-200 ease-in-out text-sm"
                    htmlFor="title"
                  >
                    Name
                  </label>
                </div>
                <div className="relative mb-2 text-dark bg-[#EFF0EC] border-opacity-25 rounded">
                  <input
                    className="outline-none w-full rounded bg-transparent text-sm transition-all duration-200 ease-in-out pt-5 p-3 "
                    id="number"
                    name="number"
                    type="text"
                    value={`${publicNumber ? publicNumber : ""}`}
                    onChange={(e) => setPublicNumber(e.target.value)}
                  />
                  <label
                    className="absolute -top-4 left-0 flex items-center text-dark text-opacity-50 px-3 pt-5 transition-all duration-200 ease-in-out text-sm"
                    htmlFor="number"
                  >
                    Public Phone Number
                  </label>
                </div>
                {/* <div className="flex items-center pt-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="iconify iconify--mdi"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M13 13h-2V7h2m0 10h-2v-2h2M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"
                    ></path>
                  </svg>
                  <p className="text-sm ">
                    Your private number is only visible to people who you share
                    your passcode with
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-full">
                    <div className="relative mb-2 text-dark bg-[#EFF0EC] border-opacity-25 rounded">
                      <input
                        className="outline-none w-full rounded bg-transparent text-sm transition-all duration-200 ease-in-out pt-5 p-3 "
                        id="number"
                        name="number"
                        type="text"
                        value="08164456587"
                      />
                      <label
                        className="absolute -top-4 left-0 flex items-center text-dark text-opacity-50 px-3 pt-5 transition-all duration-200 ease-in-out text-sm"
                        htmlFor="number"
                      >
                        Private Phone Number
                      </label>
                    </div>
                  </div>
                  <div>
                    <div className="relative mb-2 text-dark bg-[#EFF0EC] border-opacity-25 rounded">
                      <input
                        className="outline-none w-full rounded bg-transparent text-sm transition-all duration-200 ease-in-out pt-5 p-3 "
                        id="passcode"
                        name="passcode"
                        type="number"
                        maxLength="5"
                        value="1234"
                      />
                      <label
                        className="absolute -top-4 left-0 flex items-center text-dark text-opacity-50 px-3 pt-5 transition-all duration-200 ease-in-out text-sm"
                        htmlFor="passcode"
                      >
                        Passcode
                      </label>
                    </div>
                  </div>
                </div> */}
                <div className="relative mb-2 text-dark bg-[#EFF0EC] border-opacity-25 rounded">
                  <input
                    className="outline-none w-full rounded bg-transparent text-sm transition-all duration-200 ease-in-out pt-5 p-3 "
                    id="Occupation"
                    name="Occupation"
                    type="text"
                    value={`${occupation ? occupation : ""}`}
                    onChange={(e) => setOccupation(e.target.value)}
                  />
                  <label
                    className="absolute -top-4 left-0 flex items-center text-dark text-opacity-50 px-3 pt-5 transition-all duration-200 ease-in-out text-sm"
                    htmlFor="Occupation"
                  >
                    Occupation
                  </label>
                </div>
                <div className="relative mb-2 text-dark bg-[#EFF0EC] border-opacity-25 rounded">
                  <textarea
                    className="outline-none w-full rounded bg-transparent text-sm transition-all duration-200 ease-in-out  pt-5 p-3 "
                    cols={20}
                    rows={10}
                    onChange={(e) => setChangeBio(e.target.value)}
                  >
                    {`${changeBio ? changeBio : ""}`}
                  </textarea>
                  <label className="absolute -top-4 left-0 flex items-center text-dark text-opacity-50 px-3 pt-5 transition-all duration-200 ease-in-out text-sm">
                    Bio
                  </label>
                </div>
                <div className="flex justify-end mt-5">
                  <button
                    className="bg-orange text-light border border-orange undefined rounded-md px-3 sm:px-5 py-3 font-bold  justify-center text-center md:text-sm cursor-pointer text-xs  hover:opacity-80 flex items-center space-x-2"
                    type="button"
                    onClick={SaveProfileFunc}
                    disabled={saveLoading ? true : false}
                  >
                    {saveProfile}
                    {saveLoading && (
                      <Oval
                        height={20}
                        width={30}
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
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {socialLinks.length > 0 && links.length > 0 && (
          <Phone socialLinks={socialLinks} links={links} />
        )}
      </div>
      ;
    </>
  );
};

export default Profile;
