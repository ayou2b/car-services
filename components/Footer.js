import React, { Fragment } from "react";
import Link from "next/link";
import {
  UilFacebook,
  UilInstagram,
  UilTwitter,
  UilLinkedin,
} from "@iconscout/react-unicons";

function Footer() {
  return (
    <Fragment>
      <footer className="bg-[#1E1B1B] w-full text-white">
        <div className="flex flex-col items-center text-center lg:text-start lg:flex-row py-12 px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 gap-10 lg:gap-40 lg:justify-between w-full lg:items-start">
          <div className="flex flex-col items-center lg:items-start gap-5">
            <h2 className="text-[25px] font-semibold">
              Get in touch with us
              <br /> for your service
            </h2>

            <div className="flex items-center gap-5">
              <UilFacebook className="hover:text-[rgb(255,255,255,80%)] cursor-pointer"></UilFacebook>
              <UilInstagram className="hover:text-[rgb(255,255,255,80%)] cursor-pointer"></UilInstagram>
              <UilTwitter className="hover:text-[rgb(255,255,255,80%)] cursor-pointer"></UilTwitter>
              <UilLinkedin className="hover:text-[rgb(255,255,255,80%)] cursor-pointer"></UilLinkedin>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <span className="text-[rgb(255,255,255,80%)] text-[14px]">
                Help line Noumber
              </span>
              <p className="font-medium">1800 265 24 52</p>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-[rgb(255,255,255,80%)] text-[14px]">
                Address
              </span>
              <p className="font-medium">
                NH 234 Public Square San Francisco 65368
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-[rgb(255,255,255,80%)] text-[14px]">
                We are open
              </span>
              <p className="font-medium">
                Monday to Friday 9:00 AM to  10:00  AM
              </p>
            </div>
          </div>
        </div>

        <div className="w-full bg-black text-white flex flex-col px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 items-center gap-5 lg:flex-row lg:justify-between py-5">
          <h1 className="text-[20px] font-bold">
            <Link href="/">Extra Mile</Link>
          </h1>

          <ul className="flex flex-col items-center gap-3 lg:gap-7 lg:flex-row">
            <li className="hover:text-[rgb(255,255,255,80%)]">
              <Link href="/home">Home</Link>
            </li>

            <li className="hover:text-[rgb(255,255,255,80%)]">
              <Link href="/about">About us</Link>
            </li>

            <li className="hover:text-[rgb(255,255,255,80%)]">
              <Link href="/services">Services</Link>
            </li>

            <li className="hover:text-[rgb(255,255,255,80%)]">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="hover:text-[rgb(255,255,255,80%)]">
              <Link href="/contact">Contact us</Link>
            </li>
          </ul>

          <p className="text-[#939191]">@ Copyright Extra Mile 2023</p>
        </div>
      </footer>
    </Fragment>
  );
}

export default Footer;
