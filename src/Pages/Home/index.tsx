import React from "react";
import AboutUS from "../../assets/img/aboutus.png";
import PhoneImg from "../../assets/img/singlePhone.png";
import { useNavigate } from "react-router-dom";

const IndexHtml = () => {
  const navigate = useNavigate()
  return (
    <div id="__next">
      <div className="text-[#484646]">
        {/* <nav className=" fixed left-0 top-0 z-50 flex items-center justify-between w-full px-3 py-4 md:px-20 flex-nowrap bg-white">
                      <div className="flex items-center ">
                        <a href="/">
                          <p className="font-bold cursor-pointer md:text-2xl">Tap It</p>
                        </a>
                      </div>
                      <div className="flex items-center space-x-5 md:space-x-10">
                        <p className="text-sm cursor-pointer md:text-base md:flex">About</p>
                        <button
                          className="bg-[#4f46e5] text-white text-light border border-orange undefined rounded-md px-3 sm:px-5 py-3 font-bold  justify-center text-center md:text-sm cursor-pointer text-xs  hover:opacity-80 flex items-center space-x-2"
                          type="button"
                        >
                          Log In
                        </button>
                      </div>
                    </nav> */}
        <div className="">
          <section className="relative px-5 py-32 mx-auto overflow-hidden md:py-24 e md:px-20 bg-[#ededed]">
            <div className="">
              <div className="flex flex-col -m-8 md:flex-row lg:items-center">
                <div className="w-full p-8 md:w-1/2 flex">
                  <div className="flex items-center h-full md:max-w-2xl">
                    <div className="flex flex-col lg:mb-0 md:mb-10">
                      <h2 className="mb-8 text-4xl font-bold leading-none md:text-6xl lg:text-8xl xl:text-10xl font-heading tracking-px-n">
                        Everything about you with a simple tap of a card
                      </h2>
                      <p className="pl-2 mb-10 text-lg font-medium leading-normal text-gray-600 md:max-w-md">
                        Nfc cards for sharing contact information and social
                        media content.
                      </p>
                      <button className="p-2 text-xl font-semibold rounded-md text-white px-20 lg:self-start md:self-center bg-green-600" onClick={() => navigate("/contactUs")}>
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
                <div className="self-end w-full md:p-8 md:w-1/2">
                  <div className="flex justify-around md:my-20">
                    <img
                      src={PhoneImg}
                      className="object-contain h-[34rem]"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section className="pt-24 pb-32 overflow-hidden bg-white">
          <div className="px-5 mx-auto md:px-20">
            <div className="mb-10 md:mb-28">
              <h2 className="text-4xl font-bold leading-tight md:text-7xl font-heading tracking-px-n m">
                OWN THE NOW
              </h2>
              <p className="py-2 text-2xl md:pl-2">
                Go contactless in three simple steps!
              </p>
            </div>
            <div className="flex flex-wrap -m-8">
              <div className="w-full p-8 md:w-1/2 lg:w-1/3">
                <div className="flex flex-wrap items-center -m-2 mb-7">
                  <div className="w-auto p-2">
                    <div className="relative text-2xl font-bold bg-indigo-100 rounded-full w-14 h-14 font-heading">
                      <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        1
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 p-2">
                    <div className="w-full h-px bg-gray-200"></div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold leading-normal md:max-w-xs">
                  Purchase Your Card
                </h3>
                <p>
                  After placing your order, you will receive instructions on how
                  to provide us with your logo or design for on the card.
                </p>
              </div>
              <div className="w-full p-8 md:w-1/2 lg:w-1/3">
                <div className="flex flex-wrap items-center -m-2 mb-7">
                  <div className="w-auto p-2">
                    <div className="relative text-2xl font-bold text-white bg-indigo-600 rounded-full w-14 h-14">
                      <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        2
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 p-2">
                    <div className="w-full h-px bg-gray-200"></div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold leading-normal md:max-w-xs">
                  Create Your Profile
                </h3>
                <p>
                  Here you can add, edit &amp;enable what you would like to
                  share with your contactless card.
                </p>
              </div>
              <div className="w-full p-8 md:w-1/2 lg:w-1/3">
                <div className="flex flex-wrap items-center -m-2 mb-7">
                  <div className="w-auto p-2">
                    <div className="relative text-2xl font-bold bg-indigo-100 rounded-full w-14 h-14 font-heading">
                      <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        3
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 p-2">
                    <div className="w-full h-px bg-gray-200"></div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold leading-normal md:max-w-xs">
                  Tap, Share &amp;Go
                </h3>
                <p>
                  It`s that simple! Share who you are and what you do with with
                  one quick tap.
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="px-4 py-24 mx-auto overflow-hidden bg-[#ededed]">
          <div className="flex flex-col items-center justify-between px-5 mx-auto overflow-hidden md:flex-row md:space-x-7 e md:px-20">
            <div className="md:w-9/12">
              <h2 className="mb-5 text-4xl font-bold leading-none md:text-8xl xl:text-10xl font-heading tracking-px-n">
                About Us
              </h2>
              <div className="w-full mx-auto mb-20 text-lg font-medium leading-normal text-gray-600">
                <p className="py-3">
                  Tap It is a company that provides Nfc cards for sharing
                  contact information and social media content.
                </p>
                <p className="py-3">
                  Our cards are designed to be easy to use, so users can share
                  content with fewer steps and fewer distractions.
                </p>
                <p className="py-3">
                  We believe that communication is at the heart of our lives. So
                  we`ve made it our mission to make sure you never have to worry
                  about losing track of who you`re talking to or what you`re
                  saying.
                </p>
                <p className="py-3">
                  Our product allows people to share contact information and
                  social media posts easily and efficiently, without having to
                  worry about getting distracted or leaving a note behind
                  somewhere. It`s a simple way for home or on the go.
                </p>
              </div>
            </div>
            <div className="md:w-5/12">
              <div className="self-end inline-block mb-20">
                <img
                  alt="about us here"
                  src={AboutUS}
                  width="5184"
                  height="3888"
                  decoding="async"
                  data-nimg="1"
                  loading="lazy"
                  style={{ color: "transparent" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-300">
          <section className="relative pt-24 overflow-hidden pb-28 bg-blueGray-50">
            <div className="container relative z-10 px-4 mx-auto">
              <div className="mx-auto md:max-w-4xl">
                <p className="text-sm font-semibold text-center text-indigo-600 uppercase mb-7 tracking-px">
                  Have any questions?
                </p>
                <h2 className="mb-16 text-4xl font-bold leading-none text-center md:text-8xl xl:text-10xl font-heading tracking-px-n">
                  Frequently Asked Questions
                </h2>
                <div className="flex flex-wrap -m-1 space-y-5 mb-11">
                  <div className="w-full p-">
                    <div className="px-4 py-5 bg-gray-100 border-2 border-indigo-600 first-letter:md:px-8 md:py-7 bg-opacity-60 rounded-2xl shadow-10xl">
                      <div className="flex flex-wrap justify-between -m-2">
                        <div className="flex-1">
                          <div className="flex justify-between w-full p-2 cursor-pointer">
                            <h3 className="font-semibold leading-normal uppercase md:text-lg ">
                              HOW DOES THIS WORK?
                            </h3>
                            <span className="text-blue">
                              <span></span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full p-">
                    <div className="px-4 py-5 bg-gray-100 border-2 border-indigo-600 first-letter:md:px-8 md:py-7 bg-opacity-60 rounded-2xl shadow-10xl">
                      <div className="flex flex-wrap justify-between -m-2">
                        <div className="flex-1">
                          <div className="flex justify-between w-full p-2 cursor-pointer">
                            <h3 className="font-semibold leading-normal uppercase md:text-lg ">
                              WHAT CAN I DO WITH MY TAP IT CARD?
                            </h3>
                            <span className="text-blue">
                              <span></span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full p-">
                    <div className="px-4 py-5 bg-gray-100 border-2 border-indigo-600 first-letter:md:px-8 md:py-7 bg-opacity-60 rounded-2xl shadow-10xl">
                      <div className="flex flex-wrap justify-between -m-2">
                        <div className="flex-1">
                          <div className="flex justify-between w-full p-2 cursor-pointer">
                            <h3 className="font-semibold leading-normal uppercase md:text-lg ">
                              HOW DO I ADD MY DETAILS?
                            </h3>
                            <span className="text-blue">
                              <span></span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full p-">
                    <div className="px-4 py-5 bg-gray-100 border-2 border-indigo-600 first-letter:md:px-8 md:py-7 bg-opacity-60 rounded-2xl shadow-10xl">
                      <div className="flex flex-wrap justify-between -m-2">
                        <div className="flex-1">
                          <div className="flex justify-between w-full p-2 cursor-pointer">
                            <h3 className="font-semibold leading-normal uppercase md:text-lg ">
                              HOW DO I CHANGE MY DETAILS?
                            </h3>
                            <span className="text-blue">
                              <span></span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full p-">
                    <div className="px-4 py-5 bg-gray-100 border-2 border-indigo-600 first-letter:md:px-8 md:py-7 bg-opacity-60 rounded-2xl shadow-10xl">
                      <div className="flex flex-wrap justify-between -m-2">
                        <div className="flex-1">
                          <div className="flex justify-between w-full p-2 cursor-pointer">
                            <h3 className="font-semibold leading-normal uppercase md:text-lg ">
                              DO SMARTPHONES NEED AN APP TO USE THIS TECHNOLOGY?
                            </h3>
                            <span className="text-blue">
                              <span></span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full p-">
                    <div className="px-4 py-5 bg-gray-100 border-2 border-indigo-600 first-letter:md:px-8 md:py-7 bg-opacity-60 rounded-2xl shadow-10xl">
                      <div className="flex flex-wrap justify-between -m-2">
                        <div className="flex-1">
                          <div className="flex justify-between w-full p-2 cursor-pointer">
                            <h3 className="font-semibold leading-normal uppercase md:text-lg ">
                              What phones will it work with?
                            </h3>
                            <span className="text-blue">
                              <span></span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full p-">
                    <div className="px-4 py-5 bg-gray-100 border-2 border-indigo-600 first-letter:md:px-8 md:py-7 bg-opacity-60 rounded-2xl shadow-10xl">
                      <div className="flex flex-wrap justify-between -m-2">
                        <div className="flex-1">
                          <div className="flex justify-between w-full p-2 cursor-pointer">
                            <h3 className="font-semibold leading-normal uppercase md:text-lg ">
                              WHAT PHONES ARE COMPATIBLE?
                            </h3>
                            <span className="text-blue">
                              <span></span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full p-">
                    <div className="px-4 py-5 bg-gray-100 border-2 border-indigo-600 first-letter:md:px-8 md:py-7 bg-opacity-60 rounded-2xl shadow-10xl">
                      <div className="flex flex-wrap justify-between -m-2">
                        <div className="flex-1">
                          <div className="flex justify-between w-full p-2 cursor-pointer">
                            <h3 className="font-semibold leading-normal uppercase md:text-lg ">
                              IS Tap it SECURE?
                            </h3>
                            <span className="text-blue">
                              <span></span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full p-">
                    <div className="px-4 py-5 bg-gray-100 border-2 border-indigo-600 first-letter:md:px-8 md:py-7 bg-opacity-60 rounded-2xl shadow-10xl">
                      <div className="flex flex-wrap justify-between -m-2">
                        <div className="flex-1">
                          <div className="flex justify-between w-full p-2 cursor-pointer">
                            <h3 className="font-semibold leading-normal uppercase md:text-lg ">
                              IS THERE A MONTHLY SUBSCRIPTION FEE?
                            </h3>
                            <span className="text-blue">
                              <span></span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="font-medium text-center text-gray-600">
                  <span>Still have any questions?</span>
                  <a
                    className="pl-2 font-semibold text-indigo-600 hover:text-indigo-700"
                    href="#"
                  >
                    Contact us
                  </a>
                </p>
              </div>
            </div>
          </section>
        </div>
        <div>
          <section className="relative pt-24 overflow-hidden bg-white pb-36">
            <div className="container relative z-10 px-4 mx-auto">
              <h2 className="mb-5 text-4xl font-bold leading-none text-center md:text-8xl xl:text-10xl font-heading tracking-px-n">
                Contact Us
              </h2>
              <p className="mx-auto mb-20 text-lg font-medium leading-normal text-center text-gray-600 md:max-w-lg">
                Feel free to connect with us on the following sites
              </p>
              <div className="flex flex-wrap -m-3">
                <div className="w-full p-3 md:w-1/3">
                  <div className="h-full text-center bg-white border p-11 bg-opacity-90 border-blueGray-100 rounded-xl shadow-11xl">
                    <div className="relative w-16 h-16 mx-auto mb-6 bg-indigo-600 rounded-full">
                      <div className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                        <svg
                          width="32"
                          height="33"
                          viewBox="0 0 32 33"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4 11.1666L14.5208 18.1805C15.4165 18.7776 16.5835 18.7776 17.4792 18.1805L28 11.1666M6.66667 25.8333H25.3333C26.8061 25.8333 28 24.6394 28 23.1666V9.83329C28 8.36053 26.8061 7.16663 25.3333 7.16663H6.66667C5.19391 7.16663 4 8.36053 4 9.83329V23.1666C4 24.6394 5.19391 25.8333 6.66667 25.8333Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <h3 className="mb-3 text-xl font-bold leading-snug font-heading">
                      Send Email
                    </h3>
                    <p className="font-medium leading-relaxed">info@mail.com</p>
                    <p className="font-medium leading-relaxed">
                      support@mail.com
                    </p>
                  </div>
                </div>
                <div className="w-full p-3 md:w-1/3">
                  <div className="h-full text-center bg-white border p-11 bg-opacity-90 border-blueGray-100 rounded-xl shadow-11xl">
                    <div className="relative w-16 h-16 mx-auto mb-6 bg-white border rounded-full border-blueGray-200">
                      <div className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                        <svg
                          width="32"
                          height="33"
                          viewBox="0 0 32 33"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4 7.16667C4 5.69391 5.19391 4.5 6.66667 4.5H11.039C11.6129 4.5 12.1224 4.86724 12.3039 5.4117L14.301 11.4029C14.5108 12.0324 14.2258 12.7204 13.6324 13.0172L10.6227 14.522C12.0923 17.7816 14.7184 20.4077 17.978 21.8773L19.4828 18.8676C19.7796 18.2742 20.4676 17.9892 21.0971 18.199L27.0883 20.1961C27.6328 20.3776 28 20.8871 28 21.461V25.8333C28 27.3061 26.8061 28.5 25.3333 28.5H24C12.9543 28.5 4 19.5457 4 8.5V7.16667Z"
                            stroke="#4F46E5"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <h3 className="mb-3 text-xl font-bold leading-snug font-heading">
                      Call Us
                    </h3>
                    <p className="font-medium leading-relaxed">
                      ‭+234 816 445 6587‬
                    </p>
                    <p className="font-medium leading-relaxed">
                      ‭+234 816 445 6587‬
                    </p>
                  </div>
                </div>
                <div className="w-full p-3 md:w-1/3">
                  <div className="h-full text-center bg-white border p-11 bg-opacity-90 border-blueGray-100 rounded-xl shadow-11xl">
                    <div className="relative w-16 h-16 mx-auto mb-6 bg-white border rounded-full border-blueGray-200">
                      <div className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                        <svg
                          width="32"
                          height="33"
                          viewBox="0 0 32 33"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M23.5431 22.7091C22.1797 24.0725 19.192 27.0602 17.4133 28.8389C16.6323 29.62 15.3693 29.6203 14.5883 28.8392C12.8393 27.0903 9.91373 24.1647 8.45818 22.7091C4.29259 18.5435 4.29259 11.7898 8.45818 7.62419C12.6238 3.4586 19.3775 3.4586 23.5431 7.62419C27.7087 11.7898 27.7087 18.5435 23.5431 22.7091Z"
                            stroke="#4F46E5"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M20.0007 15.1667C20.0007 17.3758 18.2098 19.1667 16.0007 19.1667C13.7915 19.1667 12.0007 17.3758 12.0007 15.1667C12.0007 12.9575 13.7915 11.1667 16.0007 11.1667C18.2098 11.1667 20.0007 12.9575 20.0007 15.1667Z"
                            stroke="#4F46E5"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <h3 className="mb-3 text-xl font-bold leading-snug font-heading">
                      Address
                    </h3>
                    <p className="max-w-xs mx-auto font-medium leading-relaxed">
                      Apo, Abuja. Nigeria
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div>
          <section className="pt-24 overflow-hidden bg-gray-100">
            <div className="px-5 mx-auto md:px-20">
              <div className="pb-20 border-b">
                <div className="grid grid-cols-2 -m-8 md:grid-cols-3">
                  <div className="w-full p-8 sm:w-1/2 lg:w-3/12">
                    <h3 className="mb-6 font-semibold leading-normal">
                      Company
                    </h3>
                    <ul>
                      <li className="mb-3.5 whitespace-nowrap">About Us</li>
                      <li className="mb-3.5 whitespace-nowrap">FAQ</li>
                    </ul>
                  </div>
                  <div className="w-full p-8 sm:w-1/2 lg:w-2/12">
                    <h3 className="mb-6 font-semibold leading-normal">Legal</h3>
                    <ul>
                      <li className="mb-3.5 whitespace-nowrap">Terms</li>
                      <li className="mb-3.5 whitespace-nowrap">About Us</li>
                      <li className="mb-3.5 whitespace-nowrap">Team</li>
                      <li>Privacy</li>
                    </ul>
                  </div>
                  <div className="w-full p-8 sm:w-1/2 lg:w-2/12">
                    <h3 className="mb-6 font-semibold leading-normal">
                      Resources
                    </h3>
                    <ul>
                      <li className="mb-3.5 whitespace-nowrap">Service</li>
                      <li className="mb-3.5 whitespace-nowrap">Product</li>
                      <li>Pricing</li>
                    </ul>
                  </div>
                  <div className="w-full col-span-2 p-8 md:col-span-8 lg:w-4/12">
                    <div className="lg:max-w-sm">
                      <h3 className="mb-6 font-semibold leading-normal">
                        Subscribe
                      </h3>
                      <p className="mb-5 font-sans leading-relaxed text-gray-600">
                        Subscribe to our newsletter to get updated on new
                        services and features.
                      </p>
                      <div className="inline-block w-full mb-3 overflow-hidden border border-gray-300 xl:pl-6 md:max-w-xl rounded-xl focus-within:ring focus-within:ring-indigo-300">
                        <div className="flex flex-wrap items-center">
                          <div className="w-full xl:flex-1">
                            <input
                              className="w-full p-3 font-medium text-gray-500 placeholder-gray-500 bg-transparent outline-none xl:p-0 xl:pr-6"
                              id="footerInput1-1"
                              type="text"
                              placeholder="Type your e-mail"
                            />
                          </div>
                          <div className="w-full xl:w-auto">
                            <div className="block">
                              <button
                                className="w-full px-8 py-4 font-semibold text-white transition duration-200 ease-in-out bg-indigo-600 border border-indigo-700 focus:ring focus:ring-indigo-300 hover:bg-indigo-700"
                                type="button"
                              >
                                Subscribe
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between py-6 -m-4">
                <div className="w-auto p-4">
                  <a href="/">
                    <p className="font-bold cursor-pointer md:text-2xl">
                      Tap It
                    </p>
                  </a>
                </div>
                <div className="w-auto p-4">
                  <p className="text-sm font-medium text-gray-600">
                    Copyright © 2022 Tap It. All Rights Reserved
                  </p>
                </div>
                <div className="w-auto p-4">
                  <div className="flex flex-wrap -m-4">
                    <div className="w-auto p-4">
                      <a
                        className="text-blueGray-400 hover:text-blueGray-500"
                        href="#"
                      >
                        <svg
                          width="9"
                          height="16"
                          viewBox="0 0 9 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.68503 5.32446L5.68503 3.82446C5.68503 3.17446 5.84293 2.82446 6.94819 2.82446H8.31661V0.324463L6.21135 0.324463C3.57977 0.324463 2.52714 1.97446 2.52714 3.82446V5.32446H0.421875L0.421875 7.82446H2.52714L2.52714 15.3245H5.68503L5.68503 7.82446H8.00082L8.31661 5.32446H5.68503Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </a>
                    </div>
                    <div className="w-auto p-4">
                      <a
                        className="text-indigo-600 hover:text-indigo-700"
                        href="#"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.81641 0.324463C5.78109 0.324463 5.52516 0.333838 4.72547 0.369463C3.92578 0.406963 3.38109 0.532588 2.90391 0.718213C2.40337 0.906481 1.94999 1.2018 1.57547 1.58353C1.19398 1.95824 0.898694 2.41156 0.710156 2.91196C0.524531 3.38821 0.397969 3.93384 0.361406 4.73071C0.325781 5.53228 0.316406 5.78728 0.316406 7.8254C0.316406 9.86165 0.325781 10.1167 0.361406 10.9163C0.398906 11.7151 0.524531 12.2598 0.710156 12.737C0.902344 13.2301 1.15828 13.6482 1.57547 14.0654C1.99172 14.4826 2.40984 14.7395 2.90297 14.9307C3.38109 15.1163 3.92484 15.2429 4.72359 15.2795C5.52422 15.3151 5.77922 15.3245 7.81641 15.3245C9.85359 15.3245 10.1077 15.3151 10.9083 15.2795C11.7061 15.242 12.2527 15.1163 12.7298 14.9307C13.2301 14.7424 13.6831 14.447 14.0573 14.0654C14.4745 13.6482 14.7305 13.2301 14.9227 12.737C15.1073 12.2598 15.2339 11.7151 15.2714 10.9163C15.307 10.1167 15.3164 9.86165 15.3164 7.82446C15.3164 5.78728 15.307 5.53228 15.2714 4.73165C15.2339 3.93384 15.1073 3.38821 14.9227 2.91196C14.7341 2.41155 14.4389 1.95822 14.0573 1.58353C13.6829 1.20166 13.2295 0.906318 12.7289 0.718213C12.2508 0.532588 11.7052 0.406025 10.9073 0.369463C10.1067 0.333838 9.85266 0.324463 7.81453 0.324463H7.81734H7.81641ZM7.14422 1.67634H7.81734C9.81984 1.67634 10.057 1.6829 10.8473 1.71946C11.5786 1.75228 11.9761 1.87509 12.2405 1.97728C12.5902 2.11321 12.8405 2.27634 13.103 2.53884C13.3655 2.80134 13.5277 3.05071 13.6636 3.40134C13.7667 3.66478 13.8886 4.06228 13.9214 4.79353C13.958 5.58384 13.9655 5.82103 13.9655 7.82259C13.9655 9.82415 13.958 10.0623 13.9214 10.8526C13.8886 11.5838 13.7658 11.9804 13.6636 12.2448C13.5434 12.5704 13.3514 12.8649 13.102 13.1063C12.8395 13.3688 12.5902 13.531 12.2395 13.667C11.977 13.7701 11.5795 13.892 10.8473 13.9257C10.057 13.9613 9.81984 13.9698 7.81734 13.9698C5.81484 13.9698 5.57672 13.9613 4.78641 13.9257C4.05516 13.892 3.65859 13.7701 3.39422 13.667C3.06844 13.5469 2.77371 13.3553 2.53172 13.1063C2.28211 12.8645 2.0899 12.5698 1.96922 12.2438C1.86703 11.9804 1.74422 11.5829 1.71141 10.8517C1.67578 10.0613 1.66828 9.82415 1.66828 7.82071C1.66828 5.81821 1.67578 5.58196 1.71141 4.79165C1.74516 4.0604 1.86703 3.6629 1.97016 3.39853C2.10609 3.04884 2.26922 2.79853 2.53172 2.53603C2.79422 2.27353 3.04359 2.11134 3.39422 1.9754C3.65859 1.87228 4.05516 1.7504 4.78641 1.71665C5.47828 1.68478 5.74641 1.6754 7.14422 1.67446V1.67634ZM11.8205 2.92134C11.7023 2.92134 11.5852 2.94462 11.4761 2.98985C11.3669 3.03508 11.2676 3.10137 11.1841 3.18494C11.1005 3.26851 11.0342 3.36773 10.989 3.47692C10.9437 3.58612 10.9205 3.70315 10.9205 3.82134C10.9205 3.93953 10.9437 4.05656 10.989 4.16575C11.0342 4.27495 11.1005 4.37416 11.1841 4.45773C11.2676 4.54131 11.3669 4.6076 11.4761 4.65283C11.5852 4.69806 11.7023 4.72134 11.8205 4.72134C12.0592 4.72134 12.2881 4.62652 12.4569 4.45773C12.6256 4.28895 12.7205 4.06003 12.7205 3.82134C12.7205 3.58264 12.6256 3.35372 12.4569 3.18494C12.2881 3.01616 12.0592 2.92134 11.8205 2.92134ZM7.81734 3.97321C7.30647 3.96524 6.79912 4.05898 6.32482 4.24897C5.85053 4.43896 5.41876 4.7214 5.05467 5.07986C4.69058 5.43832 4.40143 5.86562 4.20407 6.33689C4.0067 6.80817 3.90506 7.314 3.90506 7.82493C3.90506 8.33587 4.0067 8.84169 4.20407 9.31297C4.40143 9.78424 4.69058 10.2115 5.05467 10.57C5.41876 10.9285 5.85053 11.2109 6.32482 11.4009C6.79912 11.5909 7.30647 11.6846 7.81734 11.6767C8.82848 11.6609 9.79286 11.2481 10.5023 10.5275C11.2118 9.80689 11.6094 8.83619 11.6094 7.82493C11.6094 6.81368 11.2118 5.84297 10.5023 5.12235C9.79286 4.40173 8.82848 3.98899 7.81734 3.97321ZM7.81734 5.32415C8.48047 5.32415 9.11643 5.58758 9.58533 6.05648C10.0542 6.52537 10.3177 7.16134 10.3177 7.82446C10.3177 8.48759 10.0542 9.12355 9.58533 9.59245C9.11643 10.0613 8.48047 10.3248 7.81734 10.3248C7.15422 10.3248 6.51826 10.0613 6.04936 9.59245C5.58046 9.12355 5.31703 8.48759 5.31703 7.82446C5.31703 7.16134 5.58046 6.52537 6.04936 6.05648C6.51826 5.58758 7.15422 5.32415 7.81734 5.32415Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </a>
                    </div>
                    <div className="w-auto p-4">
                      <a
                        className="text-blueGray-400 hover:text-blueGray-500"
                        href="#"
                      >
                        <svg
                          width="16"
                          height="15"
                          viewBox="0 0 16 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.67326 14.8544H0.564368L0.564368 5.46737H3.67326L3.67326 14.8544ZM2.11694 4.18691C1.12295 4.18691 0.316406 3.41461 0.316406 2.48264C0.316406 2.0349 0.506105 1.6055 0.84377 1.2889C1.18144 0.972297 1.63941 0.794434 2.11694 0.794434C2.59447 0.794434 3.05244 0.972297 3.39011 1.2889C3.72778 1.6055 3.91747 2.0349 3.91747 2.48264C3.91747 3.41461 3.11093 4.18691 2.11694 4.18691ZM15.3087 14.8544H12.2068V10.2849C12.2068 9.19579 12.1832 7.79933 10.5905 7.79933C8.97418 7.79933 8.72622 8.98237 8.72622 10.2066V14.8544L5.62054 14.8544L5.62054 5.46737H8.60197V6.74784H8.64535C9.0604 6.01019 10.0742 5.23187 11.5866 5.23187C14.733 5.23187 15.3114 7.17466 15.3114 9.69793V14.8544H15.3087Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </a>
                    </div>
                    <div className="w-auto p-4">
                      <a
                        className="text-blueGray-400 hover:text-blueGray-500"
                        href="#"
                      >
                        <svg
                          width="15"
                          height="13"
                          viewBox="0 0 15 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.0005 2.27494C14.4603 2.50797 13.8724 2.67569 13.2669 2.74101C13.8956 2.36751 14.3664 1.77744 14.591 1.08151C14.001 1.43246 13.3547 1.67855 12.6808 1.80887C12.3991 1.50773 12.0584 1.26784 11.68 1.10413C11.3015 0.940414 10.8934 0.856396 10.4811 0.857307C8.81277 0.857307 7.47106 2.20962 7.47106 3.86911C7.47106 4.10214 7.49931 4.33518 7.54521 4.55938C5.04715 4.42874 2.8192 3.23532 1.33802 1.40812C1.06813 1.86909 0.9267 2.39397 0.928441 2.92814C0.928441 3.97327 1.45983 4.89481 2.27015 5.4368C1.79262 5.41799 1.32626 5.28673 0.909022 5.0537V5.09077C0.909022 6.5543 1.94355 7.76714 3.32234 8.04608C3.06346 8.11332 2.79714 8.14773 2.52967 8.14847C2.33371 8.14847 2.14834 8.12905 1.96121 8.10257C2.34254 9.29599 3.45298 10.1628 4.77528 10.1911C3.74074 11.0014 2.44493 11.478 1.0379 11.478C0.785443 11.478 0.552408 11.4692 0.310547 11.441C1.6452 12.2972 3.22877 12.7915 4.93416 12.7915C10.4705 12.7915 13.4999 8.20497 13.4999 4.22395C13.4999 4.09331 13.4999 3.96267 13.4911 3.83203C14.0772 3.40304 14.591 2.87165 15.0005 2.27494Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default IndexHtml;
