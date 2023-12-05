import Link from "next/link";
import React from "react";
import { IconInstagram } from "./icons/IconInstagram";
import { IconFacebook } from "./icons/IconFacebook";
import { IconTwitter } from "./icons/IconTwitter";
import { IconLinkedIn } from "./icons/IconLinkedIn";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full bg-gray-900  shrink-0 items-center px-4 md:px-6 border-t border-gray-800">
      <p className="text-xs text-gray-500 dark:text-gray-400">
        © Company Name. All rights reserved.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-xs hover:underline underline-offset-4 text-white"
          href="#"
        >
          Terms of Service
        </Link>
        <Link
          className="text-xs hover:underline underline-offset-4 text-white"
          href="#"
        >
          Privacy
        </Link>
        <Link target="_blank" href={"https://www.facebook.com/RiotGames/"}>
          <IconFacebook className="h-6 w-6 text-gray-500 mx-2" />
        </Link>
        <Link target="_blank" href={"https://twitter.com/riotgames"}>
          <IconTwitter className="h-6 w-6 text-gray-500 mx-2" />
        </Link>
        <Link target="_blank" href="https://www.instagram.com/riotgames/">
          <IconInstagram className="h-6 w-6 text-gray-500 mx-2" />
        </Link>
        
        <Link
          target="_blank"
          href="https://www.linkedin.com/company/riot-games"
          >
          <IconLinkedIn className="h-6 w-6 text-gray-500 mx-2" />
        </Link>
         
      </nav>
    </footer>
  );
};

export default Footer;
