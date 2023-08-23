"use client";
import { Fragment, useState, useEffect } from "react";
import { UilBars, UilTimes } from "@iconscout/react-unicons";
import { usePathname } from "next/navigation";
import Link from "next/link";

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowY = "scroll	";
    }
  }, [mobileMenu]);

  return (
    <Fragment>
      <header className="flex items-center justify-between h-[10vh] w-full px-14  sm:px-16 md:px-20 lg:px-24 xl:px-28  py-10">
        <h1 className="text-[20px] font-bold text-[#FF6433]">
          <Link href="/">Extra Mile</Link>
        </h1>

        <ul className=" items-center hidden md:flex gap-14 text-[18px] font-normal">
          <li>
            <Link
              href="/"
              className={`${
                pathname === "/" ? "text-[#FF6433]" : "text-black"
              } hover:text-[#FF6433]`}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              className={`${
                pathname === "/about" ? "text-[#FF6433]" : "text-black"
              } hover:text-[#FF6433]`}
            >
              About us
            </Link>
          </li>

          <li>
            <Link
              href="/services"
              className={`${
                pathname === "/services" ? "text-[#FF6433]" : "text-black"
              } hover:text-[#FF6433]`}
            >
              Services
            </Link>
          </li>

          <li>
            <Link
              href="/blog"
              className={`${
                pathname === "/blog" ? "text-[#FF6433]" : "text-black"
              } hover:text-[#FF6433]`}
            >
              Blog
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className={`${
                pathname === "/contact" ? "text-[#FF6433]" : "text-black"
              } hover:text-[#FF6433]`}
            >
              Contact
            </Link>
          </li>
        </ul>

        <UilBars
          onClick={() => {
            setMobileMenu(true);
          }}
          className="block md:hidden"
        ></UilBars>

        <div
          className={`${
            mobileMenu === true ? "test block" : "hidden"
          } w-full h-[100vh] absolute top-0 left-0  bg-white p-14 z-50`}
        >
          <ul className="flex flex-col items-start gap-14">
            <li
              onClick={() => {
                setMobileMenu(false);
              }}
            >
              <Link
                href="/"
                className={`${
                  pathname === "/" ? "text-[#FF6433]" : "text-black"
                }`}
              >
                Home
              </Link>
            </li>

            <li
              onClick={() => {
                setMobileMenu(false);
              }}
            >
              <Link
                href="/about"
                className={`${
                  pathname === "/about" ? "text-[#FF6433]" : "text-black"
                }`}
              >
                About us
              </Link>
            </li>

            <li
              onClick={() => {
                setMobileMenu(false);
              }}
            >
              <Link
                href="/services"
                className={`${
                  pathname === "/services" ? "text-[#FF6433]" : "text-black"
                }`}
              >
                Services
              </Link>
            </li>

            <li
              onClick={() => {
                setMobileMenu(false);
              }}
            >
              <Link
                href="/blog"
                className={`${
                  pathname === "/blog" ? "text-[#FF6433]" : "text-black"
                }`}
              >
                Blog
              </Link>
            </li>

            <li
              onClick={() => {
                setMobileMenu(false);
              }}
            >
              <Link
                href="/contact"
                className={`${
                  pathname === "/contact" ? "text-[#FF6433]" : "text-black"
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>

          <UilTimes
            onClick={() => {
              setMobileMenu(false);
            }}
            className={`right-10 top-10 absolute`}
          ></UilTimes>
        </div>
      </header>
    </Fragment>
  );
}

export default Header;
