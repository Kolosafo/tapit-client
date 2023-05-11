import React, { FC } from "react";

type Props = {
  socialLinks: SocialLinksType[];
};
const SocialIcons: FC<Props> = ({ socialLinks }) => {
  return (
    <>
      <a
        className="p-2  bg-white rounded cursor-pointer hover:text-orange"
        style={{
          color: "rgb(29, 161, 242)",
          display: socialLinks[0].twitter ? "block" : "none",
        }}
        href={
          socialLinks.length > 0
            ? `https://twitter.com/${socialLinks[0].twitter}`
            : "#"
        }
        target="_blank"
        rel="noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          className="iconify iconify--mdi"
          width="30"
          height="30"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z"
          ></path>
        </svg>
      </a>
      <a
        className="p-2  bg-white rounded cursor-pointer hover:text-orange"
        style={{
          color: "rgb(66, 103, 178)",
          display: socialLinks[0].facebook ? "block" : "none",
        }}
        href={
          socialLinks.length > 0
            ? `https://www.facebook.com/${socialLinks[0].facebook}`
            : "#"
        }
        target="_blank"
        rel="noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          className="iconify iconify--mdi"
          width="30"
          height="30"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z"
          ></path>
        </svg>
      </a>
      <a
        className="p-2  bg-white rounded cursor-pointer hover:text-orange"
        style={{
          color: "rgb(64, 120, 192)",
          display: socialLinks[0].github ? "block" : "none",
        }}
        href={
          socialLinks.length > 0
            ? `https://www.github.com/${socialLinks[0].github}`
            : "#"
        }
        target="_blank"
        rel="noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          className="iconify iconify--mdi"
          width="30"
          height="30"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
          ></path>
        </svg>
      </a>
      <a
        className="p-2  bg-white rounded cursor-pointer hover:text-orange"
        style={{
          color: "rgb(0, 119, 181)",
          display: socialLinks[0].linkedIn ? "block" : "none",
        }}
        href={
          socialLinks.length > 0
            ? `https://www.linkedin.com/in${socialLinks[0].linkedIn}`
            : "#"
        }
        target="_blank"
        rel="noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          className="iconify iconify--mdi"
          width="30"
          height="30"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"
          ></path>
        </svg>
      </a>
      <a
        className="p-2  bg-white rounded cursor-pointer hover:text-orange"
        style={{
          color: "rgb(131, 58, 180)",
          display: socialLinks[0].instagram ? "block" : "none",
        }}
        href={
          socialLinks.length > 0
            ? `https://instagram.com/${socialLinks[0].instagram}`
            : "#"
        }
        target="_blank"
        rel="noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          className="iconify iconify--mdi"
          width="30"
          height="30"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"
          ></path>
        </svg>
      </a>
      <a
        className="p-2  bg-white rounded cursor-pointer hover:text-orange"
        style={{
          color: "rgb(255, 67, 0);",
          display: socialLinks[0].redit ? "block" : "none",
        }}
        href={
          socialLinks.length > 0
            ? `https://www.reddit.com/user/${socialLinks[0].redit}`
            : "#"
        }
        target="_blank"
        rel="noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          className="iconify iconify--mdi"
          width="30"
          height="30"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M14.5 15.41c.08.09.08.28 0 .39c-.73.7-2.09.76-2.5.76c-.39 0-1.75-.06-2.46-.76c-.1-.11-.1-.3 0-.39c.11-.1.28-.1.38 0c.46.46 1.41.59 2.08.59c.69 0 1.66-.13 2.1-.59c.11-.1.28-.1.4 0m-3.75-2.37c0-.57-.47-1.04-1.04-1.04c-.57 0-1.04.47-1.04 1.04c0 .57.47 1.05 1.04 1.04c.57 0 1.04-.47 1.04-1.04M14.29 12c-.57 0-1.04.5-1.04 1.05s.47 1.04 1.04 1.04c.57 0 1.04-.48 1.04-1.04c0-.55-.47-1.05-1.04-1.05M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-3.33 0c0-.81-.67-1.46-1.45-1.46c-.4 0-.76.16-1.02.41c-1-.72-2.37-1.18-3.9-1.24l.67-3.13l2.17.47c.02.55.48.99 1.04.99c.57 0 1.04-.47 1.04-1.04c0-.57-.47-1.04-1.04-1.04c-.41 0-.77.24-.93.59l-2.43-.52c-.07-.03-.14 0-.19.04c-.06.04-.09.1-.1.17l-.74 3.48c-1.55.05-2.95.51-3.97 1.24c-.26-.25-.62-.4-1.01-.4c-.81 0-1.46.65-1.46 1.44c0 .61.36 1.11.86 1.34c-.02.16-.03.28-.03.44c0 2.22 2.61 4.07 5.82 4.07c3.23 0 5.85-1.82 5.85-4.07c0-.14-.01-.28-.04-.44c.5-.23.86-.74.86-1.34Z"
          ></path>
        </svg>
      </a>
      <a
        className="p-2  bg-white rounded cursor-pointer hover:text-orange"
        style={{
          color: "rgb(255, 252, 0)",
          display: socialLinks[0].snapchat ? "block" : "none",
        }}
        href={
          socialLinks.length > 0
            ? `https://snapchat.com/add/${socialLinks[0].snapchat}`
            : "#"
        }
        target="_blank"
        rel="noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          className="iconify iconify--mdi"
          width="30"
          height="30"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M21.93 16.56c-.14-.38-.43-.56-.71-.75c-.05-.03-.11-.06-.15-.08c-.07-.05-.18-.09-.27-.14c-.94-.5-1.68-1.13-2.19-1.87a6.15 6.15 0 0 1-.37-.66c-.04-.13-.04-.2-.01-.26c.03-.05.07-.1.12-.13c.15-.11.33-.21.44-.29c.21-.13.36-.23.46-.3c.39-.27.66-.58.83-.88c.24-.45.27-.98.08-1.45c-.25-.67-.89-1.09-1.66-1.09c-.16 0-.32.02-.5.05c0 .01-.06.02-.1.03c0-.46-.01-.94-.05-1.42c-.14-1.68-.73-2.56-1.35-3.26c-.39-.44-.85-.82-1.36-1.11c-.93-.53-1.99-.8-3.14-.8s-2.2.27-3.13.8c-.52.29-.98.67-1.37 1.11c-.62.7-1.2 1.58-1.35 3.26c-.04.48-.05.96-.04 1.42c-.05-.01-.11-.02-.11-.03c-.18-.03-.34-.05-.5-.05c-.77 0-1.41.42-1.66 1.09c-.19.47-.16 1 .08 1.45c.17.3.44.61.83.88c.1.07.25.17.46.31l.42.27c.06.04.1.09.14.14c.03.07.03.14-.02.27c-.1.23-.22.43-.36.65c-.5.73-1.21 1.35-2.12 1.84c-.49.26-.99.44-1.2 1c-.16.44-.07.94.35 1.35c.15.15.32.28.51.38c.4.21.82.39 1.25.5c.09.03.18.06.25.12c.15.12.13.32.33.59c.1.16.24.29.37.39c.41.29.87.3 1.37.32c.44.02.94.04 1.5.23c.26.06.5.23.79.41c.71.42 1.63 1 3.21 1c1.57 0 2.5-.58 3.22-1.01c.28-.17.53-.34.78-.4c.55-.19 1.06-.21 1.5-.23c.5-.01.96-.03 1.37-.32c.17-.12.31-.28.42-.46c.14-.24.14-.43.27-.52c.07-.05.15-.09.24-.11c.44-.12.86-.3 1.26-.51c.21-.11.39-.25.54-.42h.01c.39-.41.47-.87.32-1.31m-1.4.75c-.86.47-1.43.42-1.87.69c-.16.12-.21.28-.24.44l-.03.2c-.02.14-.05.26-.15.33c-.34.23-1.33-.02-2.61.4c-1.06.35-1.73 1.36-3.63 1.36s-2.55-1-3.63-1.36c-1.27-.42-2.27-.17-2.6-.4c-.27-.19-.05-.71-.43-.97c-.44-.27-1.01-.22-1.84-.69c-.31-.16-.36-.31-.32-.38c.04-.09.16-.16.24-.2c1.65-.79 2.58-1.82 3.05-2.63c.44-.72.53-1.27.56-1.35c.03-.21.06-.37-.17-.58c-.22-.21-1.2-.81-1.47-1c-.46-.32-.65-.63-.51-1.02c.12-.27.35-.37.62-.37c.08 0 .16.01.24.03c.5.1.98.35 1.26.42c.03.01.06.01.1.01c.09 0 .14-.03.17-.09c.01-.04.02-.09.02-.15c-.04-.54-.11-1.59-.03-2.58c.04-.42.11-.78.2-1.09c.2-.68.54-1.13.88-1.54c.25-.29 1.41-1.52 3.66-1.52c1.85 0 2.96.84 3.44 1.29c.1.1.18.18.22.23c.38.44.72.92.92 1.68c.07.27.13.59.16.95c.08.98.01 2.04-.03 2.58c0 .04 0 .08.01.11c.01.09.07.13.18.13c.04 0 .07 0 .1-.01c.28-.07.76-.32 1.26-.43c.08-.01.16-.02.24-.02c.25 0 .5.09.6.32l.01.04h.01v.01c.15.38-.05.7-.5 1.01c-.27.19-1.26.8-1.48 1c-.23.22-.2.38-.17.59c.03.1.21 1.05 1.11 2.11c.55.64 1.34 1.31 2.5 1.87c.07.03.16.08.21.14c.03.05.05.09.04.13c-.01.1-.1.2-.3.31Z"
          ></path>
        </svg>
      </a>
      <span
        className="p-2  bg-white rounded cursor-pointer hover:text-orange"
        style={{ color: "rgb(230, 0, 35);", display: "none" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          className="iconify iconify--mdi"
          width="30"
          height="30"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M9.04 21.54c.96.29 1.93.46 2.96.46a10 10 0 0 0 10-10A10 10 0 0 0 12 2A10 10 0 0 0 2 12c0 4.25 2.67 7.9 6.44 9.34c-.09-.78-.18-2.07 0-2.96l1.15-4.94s-.29-.58-.29-1.5c0-1.38.86-2.41 1.84-2.41c.86 0 1.26.63 1.26 1.44c0 .86-.57 2.09-.86 3.27c-.17.98.52 1.84 1.52 1.84c1.78 0 3.16-1.9 3.16-4.58c0-2.4-1.72-4.04-4.19-4.04c-2.82 0-4.48 2.1-4.48 4.31c0 .86.28 1.73.74 2.3c.09.06.09.14.06.29l-.29 1.09c0 .17-.11.23-.28.11c-1.28-.56-2.02-2.38-2.02-3.85c0-3.16 2.24-6.03 6.56-6.03c3.44 0 6.12 2.47 6.12 5.75c0 3.44-2.13 6.2-5.18 6.2c-.97 0-1.92-.52-2.26-1.13l-.67 2.37c-.23.86-.86 2.01-1.29 2.7v-.03Z"
          ></path>
        </svg>
      </span>
      <span
        className="p-2  bg-white rounded cursor-pointer hover:text-orange"
        style={{ color: "rgb(29, 185, 84)", display: "none" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          className="iconify iconify--mdi"
          width="30"
          height="30"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M17.9 10.9C14.7 9 9.35 8.8 6.3 9.75c-.5.15-1-.15-1.15-.6c-.15-.5.15-1 .6-1.15c3.55-1.05 9.4-.85 13.1 1.35c.45.25.6.85.35 1.3c-.25.35-.85.5-1.3.25m-.1 2.8c-.25.35-.7.5-1.05.25c-2.7-1.65-6.8-2.15-9.95-1.15c-.4.1-.85-.1-.95-.5c-.1-.4.1-.85.5-.95c3.65-1.1 8.15-.55 11.25 1.35c.3.15.45.65.2 1m-1.2 2.75c-.2.3-.55.4-.85.2c-2.35-1.45-5.3-1.75-8.8-.95c-.35.1-.65-.15-.75-.45c-.1-.35.15-.65.45-.75c3.8-.85 7.1-.5 9.7 1.1c.35.15.4.55.25.85M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"
          ></path>
        </svg>
      </span>
      <a
        className="p-2  bg-white rounded cursor-pointer hover:text-orange"
        style={{
          color: "rgb(255, 0, 80);",
          display: socialLinks[0].tiktok ? "block" : "none",
        }}
        href={
          socialLinks.length > 0
            ? `https://tiktok.com/${socialLinks[0].tiktok}`
            : "#"
        }
        target="_blank"
        rel="noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          className="iconify iconify--ic"
          width="30"
          height="30"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z"
          ></path>
        </svg>
      </a>
      <a
        className="p-2  bg-white rounded cursor-pointer hover:text-orange"
        style={{
          color: "rgb(0, 136, 204)",
          display: socialLinks[0].telegram ? "block" : "none",
        }}
        href={
          socialLinks.length > 0
            ? `https://t.me/${socialLinks[0].telegram}`
            : "#"
        }
        target="_blank"
        rel="noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          className="iconify iconify--ic"
          width="30"
          height="30"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19c-.14.75-.42 1-.68 1.03c-.58.05-1.02-.38-1.58-.75c-.88-.58-1.38-.94-2.23-1.5c-.99-.65-.35-1.01.22-1.59c.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02c-.09.02-1.49.95-4.22 2.79c-.4.27-.76.41-1.08.4c-.36-.01-1.04-.2-1.55-.37c-.63-.2-1.12-.31-1.08-.66c.02-.18.27-.36.74-.55c2.92-1.27 4.86-2.11 5.83-2.51c2.78-1.16 3.35-1.36 3.73-1.36c.08 0 .27.02.39.12c.1.08.13.19.14.27c-.01.06.01.24 0 .38z"
          ></path>
        </svg>
      </a>
      <a
        className="p-2  bg-white rounded cursor-pointer hover:text-orange"
        style={{
          color: "rgb(255, 0, 0);",
          display: socialLinks[0].youtube ? "block" : "none",
        }}
        href={
          socialLinks.length > 0
            ? `https://www.youtube.com/channel/${socialLinks[0].youtube}`
            : "#"
        }
        target="_blank"
        rel="noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          className="iconify iconify--mdi"
          width="30"
          height="30"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73Z"
          ></path>
        </svg>
      </a>
      <a
        className="p-2  bg-white rounded cursor-pointer hover:text-orange"
        style={{
          color: "rgb(37, 211, 102)",
          display: socialLinks[0].whatsapp ? "block" : "none",
        }}
        href={
          socialLinks.length > 0
            ? `https://wa.me/${socialLinks[0].whatsapp}`
            : "#"
        }
        target="_blank"
        rel="noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          className="iconify iconify--mdi"
          width="30"
          height="30"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23c-1.48 0-2.93-.39-4.19-1.15l-.3-.17l-3.12.82l.83-3.04l-.2-.32a8.188 8.188 0 0 1-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31c-.22.25-.87.86-.87 2.07c0 1.22.89 2.39 1 2.56c.14.17 1.76 2.67 4.25 3.73c.59.27 1.05.42 1.41.53c.59.19 1.13.16 1.56.1c.48-.07 1.46-.6 1.67-1.18c.21-.58.21-1.07.15-1.18c-.07-.1-.23-.16-.48-.27c-.25-.14-1.47-.74-1.69-.82c-.23-.08-.37-.12-.56.12c-.16.25-.64.81-.78.97c-.15.17-.29.19-.53.07c-.26-.13-1.06-.39-2-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.12-.24-.01-.39.11-.5c.11-.11.27-.29.37-.44c.13-.14.17-.25.25-.41c.08-.17.04-.31-.02-.43c-.06-.11-.56-1.35-.77-1.84c-.2-.48-.4-.42-.56-.43c-.14 0-.3-.01-.47-.01Z"
          ></path>
        </svg>
      </a>
      <a
        className="p-2  bg-white rounded cursor-pointer hover:text-orange"
        style={{
          color: "rgb(252, 60, 6)}}",
          display: socialLinks[0].apple_music ? "block" : "none",
        }}
        href={socialLinks.length > 0 ? `${socialLinks[0].apple_music}` : "#"}
        target="_blank"
        rel="noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          className="iconify iconify--cib"
          width="30"
          height="30"
          viewBox="0 0 32 32"
        >
          <path
            fill="currentColor"
            d="M31.995 8.167c0-.984-.083-1.964-.318-2.922c-.422-1.745-1.417-3.078-2.906-4.057c-.766-.5-1.609-.807-2.505-.969a13.353 13.353 0 0 0-2.083-.198c-.052-.005-.109-.016-.167-.021H7.985c-.203.016-.406.026-.609.036c-.995.057-1.984.161-2.922.536c-1.781.703-3.068 1.932-3.818 3.703c-.26.599-.391 1.234-.484 1.88c-.078.521-.12 1.047-.135 1.573c0 .042-.01.083-.01.125V24.15l.031.563c.068 1.089.208 2.167.667 3.167c.865 1.891 2.318 3.135 4.313 3.734c.557.172 1.141.25 1.724.302c.74.073 1.479.083 2.219.083h14.708c.698 0 1.396-.047 2.094-.135c1.099-.141 2.13-.464 3.063-1.078a6.74 6.74 0 0 0 2.505-2.943c.25-.563.391-1.161.495-1.766c.151-.901.182-1.813.182-2.724c-.005-5.063 0-10.125-.005-15.188zm-8.563 5.317v7.615c0 .557-.078 1.104-.328 1.609c-.385.786-1.01 1.281-1.849 1.521a6.038 6.038 0 0 1-1.427.229a2.48 2.48 0 0 1-2.589-2.047a2.502 2.502 0 0 1 1.385-2.698c.427-.208.891-.333 1.354-.427c.505-.109 1.01-.208 1.51-.323c.37-.083.609-.307.682-.688c.021-.083.026-.172.026-.255v-7.26a1 1 0 0 0-.036-.245c-.052-.203-.198-.323-.406-.313c-.214.01-.422.047-.63.089c-1.016.198-2.031.401-3.042.609l-4.932.995c-.021.005-.047.016-.068.016c-.37.104-.5.271-.516.656c-.005.057 0 .115 0 .172c-.005 3.469 0 6.938-.005 10.406c0 .563-.063 1.115-.286 1.635c-.37.854-1.026 1.391-1.911 1.646a5.825 5.825 0 0 1-1.438.229c-1.276.047-2.339-.802-2.557-2.057c-.188-1.083.307-2.25 1.536-2.771c.479-.198.974-.307 1.479-.411l1.146-.234c.51-.109.776-.432.802-.953V8.187c0-.167.021-.333.057-.495c.094-.38.365-.599.729-.688c.339-.089.688-.151 1.031-.224c.979-.198 1.953-.396 2.932-.589l3.026-.615c.896-.177 1.786-.359 2.682-.536c.292-.057.589-.12.885-.141c.411-.036.698.224.74.641c.01.099.016.198.016.297v7.641z"
          ></path>
        </svg>
      </a>
    </>
  );
};

export default SocialIcons;
