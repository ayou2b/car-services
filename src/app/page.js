"use client";
import { Fragment, useRef, useState, useEffect } from "react";

import { UilBars, UilTimes } from "@iconscout/react-unicons";
import { usePathname } from "next/navigation";

import Image from "next/image";
import Link from "next/link";
import { UilClockThree } from "@iconscout/react-unicons";

import { UilArrowLeft, UilArrowRight } from "@iconscout/react-unicons";
import { UilPlus, UilMinus } from "@iconscout/react-unicons";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import hero_image from "/./public/landing_page/sten-rademaker-UZUzvJEvKnI-unsplash.jpg";
import image_1 from "/./public/landing_page/oli-woodman-oZOb6z2hWTU-unsplash.jpg";
import image_2 from "/./public/landing_page/laurel-and-michael-evans-c-KDq7nxVdQ-unsplash.jpg";

import icon_1 from "/./public/landing_page/Icon.png";
import icon_2 from "/./public/landing_page/Icon_1.png";
import icon_3 from "/./public/landing_page/Icon_2.png";

import icon_4 from "/./public/landing_page/Icon_3.png";
import icon_5 from "/./public/landing_page/Icon_4.png";
import icon_6 from "/./public/landing_page/Icon_5.png";
import icon_7 from "/./public/landing_page/Icon_6.png";
import icon_8 from "/./public/landing_page/Icon_7.png";
import icon_9 from "/./public/landing_page/Icon_8.png";
import icon_10 from "/./public/landing_page/Icon_9.png";
import icon_11 from "/./public/landing_page/Icon_10.png";

import arrow from "/./public/landing_page/arrow.png";

import logo_1 from "/./public/landing_page/logo_1.png";
import logo_2 from "/./public/landing_page/logo_2.png";
import logo_3 from "/./public/landing_page/logo_3.png";
import logo_4 from "/./public/landing_page/logo_4.png";
import logo_5 from "/./public/landing_page/logo_5.png";

import profile_1 from "/./public/landing_page/linkedin-sales-solutions-pAtA8xe_iVM-unsplash.jpg";
import profile_2 from "/./public/landing_page/charlesdeluvio-kVg2DQTAK7c-unsplash.jpg";

const faqs = [
  {
    question: "How long should a car repair take ?",
    answer:
      "I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car.",
  },
  {
    question: "How do I schedule my car's appointment ?",
    answer:
      "I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car.",
  },

  {
    question: "What are the repair services provided ?",
    answer:
      "I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car.",
  },

  {
    question: "How do I find auto body shops near me ?",
    answer:
      "I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car.",
  },

  {
    question: "Genuine spare parts during car repair ?",
    answer:
      "I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car.",
  },
];

import {
  UilFacebook,
  UilInstagram,
  UilTwitter,
  UilLinkedin,
} from "@iconscout/react-unicons";

export default function Home() {
  const swiperRef = useRef();

  const [isOpen, setIsOpen] = useState(null);

  const toggle = (i) => {
    if (isOpen === i) {
      return setIsOpen(null);
    }

    setIsOpen(i);
  };

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

      <section className="px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 mb-20 mt-5 transition-all text-center lg:text-start w-full flex flex-col items-center gap-12 lg:flex-row lg:justify-between">
        <div className="flex flex-col items-center gap-5 lg:items-start transition-all max-w-lg">
          <h1 className="text-[35px] font-bold">
            Get your vehicle service done online at one place
          </h1>
          <Link
            href="/services"
            className="bg-[#FF6433] text-white rounded-lg px-8 py-3 hover:scale-95 duration-200"
          >
            Book a service
          </Link>
          <div className="flex flex-col items-center gap-4 lg:flex-row">
            <UilClockThree className="text-[#939191]"></UilClockThree>
            <div className="flex flex-col gap-2">
              <p className="text-[#939191]">We are open</p>
              <span className="font-semibold">
                Monday to Friday 9:00 AM to 10:00 AM
              </span>
            </div>
          </div>
        </div>

        <Image
          src={hero_image}
          alt=""
          className="max-h-[400px] w-full object-cover"
        ></Image>
      </section>

      <section className="px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 text-center lg:text-start w-full bg-[#E2E6E9] py-16 flex flex-col items-center gap-12 lg:gap-28 lg:flex-row lg:justify-between lg:items-start mb-20">
        <div className="flex flex-col items-center lg:items-start  gap-8 w-full">
          <h2 className="font-bold text-[25px]">
            We are taking car
            <br /> servicing seriously
          </h2>
          <div className="flex items-center flex-col lg:items-start gap-8">
            <div className="flex flex-col items-center lg:flex-row  lg:items-start gap-4">
              <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-white">
                <Image
                  src={icon_1}
                  alt=""
                  width={15}
                  className=" object-cover"
                ></Image>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <h3 className="text-[20px] font-semibold">
                  Convenient service
                </h3>
                <p className="leading-7">
                  Through True Rich Attended does no end it his mother since
                  real had half every him.
                </p>
              </div>
            </div>

            <div className="flex flex-col  items-center lg:flex-row lg:items-start gap-4">
              <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-white">
                <Image
                  src={icon_2}
                  alt=""
                  width={15}
                  className=" object-cover"
                ></Image>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <h3 className="text-[20px] font-semibold">Expert mechanics</h3>
                <p className="leading-7">
                  Through True Rich Attended does no end it his mother since
                  real had half every him.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center lg:flex-row lg:items-start gap-4">
              <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-white">
                <Image
                  src={icon_3}
                  alt=""
                  width={15}
                  className=" object-cover"
                ></Image>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <h3 className="text-[20px] font-semibold">
                  Transparent pricing
                </h3>
                <p className="leading-7">
                  Through True Rich Attended does no end it his mother since
                  real had half every him.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col  items-center gap-8 lg:items-start w-full max-w-sm">
          <h3 className="text-[20px] font-semibold">
            Get a quote for the car
            <br /> service
          </h3>
          <form className="flex flex-col w-full items-center gap-5 lg:items-start">
            <input
              placeholder="Full Name"
              className="bg-white px-10 py-3 placeholder:text-center lg:placeholder:text-start outline-none w-full"
            ></input>
            <input
              placeholder="Email"
              className="bg-white px-10 py-3 placeholder:text-center lg:placeholder:text-start outline-none w-full"
            ></input>
            <input
              placeholder="Phone Number"
              className="bg-white px-10 py-3 placeholder:text-center lg:placeholder:text-start outline-none w-full"
            ></input>
            <input
              placeholder="Address"
              className="bg-white px-10 py-3 placeholder:text-center lg:placeholder:text-start outline-none w-full"
            ></input>
            <button className="bg-[#FF6433] hover:scale-95 duration-200 rounded-lg text-white px-8 py-3 w-full lg:w-fit">
              Get your quote
            </button>
          </form>
        </div>
      </section>

      <section className="px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 text-center lg:text-start w-full mb-20 flex flex-col items-center gap-12 lg:flex-row lg:justify-between lg:items-start">
        <div className="flex flex-col items-center gap-7 lg:items-start max-w-lg">
          <h2 className="font-semibold text-[25px]">
            We follow a clear process
            <br /> to help you out.
          </h2>
          <p className="text-[#939191] leading-7">
            Through True Rich Attended does no end it his mother since real had
            half every him case in packages enquire
          </p>
          <button className="bg-[#FF6433] hover:scale-95 duration-200 rounded-lg text-white px-8 py-3 ">
            Learn more
          </button>
        </div>

        <div className="flex flex-col items-center gap-8 lg:items-start max-w-lg">
          <div className="flex flex-col items-center gap-3 lg:flex-row lg:items-start">
            <div className="bg-[#661CE7] text-white p-2 rounded-full w-[50px] h-[50px] flex items-center justify-center font-bold text-[20px]">
              01
            </div>
            <div className="flex flex-col items-center lg:items-start gap-1">
              <h4 className="text-[18px] font-semibold">Get a Quote</h4>
              <p className="text-[#939191] leading-7">
                Through True Rich Attended does no end it his mother since real
                had half every.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 lg:flex-row lg:items-start">
            <div className="bg-[#661CE7] text-white p-2 rounded-full w-[50px] h-[50px] flex items-center justify-center font-bold text-[20px]">
              02
            </div>
            <div className="flex flex-col items-center lg:items-start gap-1">
              <h4 className="text-[18px] font-semibold">Book an Appointment</h4>
              <p className="text-[#939191] leading-7">
                Through True Rich Attended does no end it his mother since real
                had half every.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 lg:flex-row lg:items-start">
            <div className="bg-[#661CE7] text-white p-2 rounded-full w-[50px] h-[50px] flex items-center justify-center font-bold text-[20px]">
              03
            </div>
            <div className="flex flex-col items-center lg:items-start gap-1">
              <h4 className="text-[18px] font-semibold">
                Get your Service Done
              </h4>
              <p className="text-[#939191] leading-7">
                Through True Rich Attended does no end it his mother since real
                had half every.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F2F2F2] transition-all py-16 px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 text-center w-full flex flex-col gap-10">
        <div className="flex flex-col items-center gap-2">
          <span className="font-semibold">What we Offer</span>
          <h2 className="font-semibold text-[25px]">
            We offer full service auto repair
            <br /> & maintenance
          </h2>
        </div>

        <div className="flex flex-col items-center gap-8 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <Link href="/single-service" className="bg-white p-10 w-full">
            <div className="flex flex-col items-center gap-2">
              <Image src={icon_4} width={20} alt=""></Image>
              <p className="font-semibold">Diagnostics</p>
            </div>
          </Link>

          <Link href="/single-service" className="bg-white p-10 w-full">
            <div className="flex flex-col items-center gap-2">
              <Image src={icon_5} width={20} alt=""></Image>
              <p className="font-semibold">Engine Repair</p>
            </div>
          </Link>

          <Link
            href="/single-service"
            className="bg-[#FF6433] text-white p-10  w-full"
          >
            <div className="flex flex-col items-center gap-2">
              <Image src={icon_6} width={20} alt=""></Image>
              <p className="font-semibold">Wheel Repair</p>
            </div>
          </Link>

          <Link href="/single-service" className="bg-white p-10  w-full">
            <div className="flex flex-col items-center gap-2">
              <Image src={icon_7} width={20} alt=""></Image>
              <p className="font-semibold">Oil Filter</p>
            </div>
          </Link>

          <Link href="/single-service" className="bg-white p-10  w-full">
            <div className="flex flex-col items-center gap-2">
              <Image src={icon_8} width={20} alt=""></Image>
              <p className="font-semibold">Body Work</p>
            </div>
          </Link>

          <Link href="/single-service" className="bg-white p-10  w-full">
            <div className="flex flex-col items-center gap-2">
              <Image src={icon_9} width={20} alt=""></Image>
              <p className="font-semibold">Batteries</p>
            </div>
          </Link>

          <Link href="/single-service" className="bg-white p-10  w-full">
            <div className="flex flex-col items-center gap-2">
              <Image src={icon_10} width={20} alt=""></Image>
              <p className="font-semibold">Insurance Claim</p>
            </div>
          </Link>

          <Link href="/single-service" className="bg-white p-10  w-full">
            <div className="flex flex-col items-center gap-2">
              <Image src={icon_11} width={20} alt=""></Image>
              <p className="font-semibold">Custom Service</p>
            </div>
          </Link>
        </div>

        <Link
          href="/services"
          className="flex flex-col items-center lg:flex-row gap-3 hover:gap-5 duration-200 justify-center"
        >
          Learn about services <Image src={arrow} alt="" width={40}></Image>
        </Link>
      </section>

      <section className="text-center transition-all flex flex-col items-center lg:flex-row lg:text-start">
        <div
          style={{
            backgroundImage: `url(${image_1.src})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="w-full lg:w-[50%] h-72 relative"
        >
          <div className="w-[70%] absolute right-0 h-full bg-[#FF6433] text-white px-8 py-4 flex items-center">
            <div className="gap-3 flex flex-col items-center lg:items-start">
              <h3 className="text-[20px] font-semibold">
                Get in touch with us for your service related query
              </h3>
              <Link
                href="/contact"
                className="rounded-lg px-6 py-3 hover:scale-95 duration-200 bg-black text-white"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${image_2.src})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="w-full lg:w-[50%] h-72"
        ></div>
      </section>

      <section className="bg-[#F2F2F2] mb-20 py-5 px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 text-center flex flex-col items-center gap-10 md:grid md:grid-cols-2 lg:flex lg:flex-row lg:justify-between">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-[#661CE7] font-bold text-[35px]">20+</h1>
          <p>Proffesional</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <h1 className="text-[#661CE7] font-bold text-[35px]">10+</h1>
          <p>Years Eperience</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <h1 className="text-[#661CE7] font-bold text-[35px]">12K+</h1>
          <p>Service Closed</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <h1 className="text-[#661CE7] font-bold text-[35px]">100%</h1>
          <p>Customer Satisfaction</p>
        </div>
      </section>

      <section className="px-14 mb-20 sm:px-16 md:px-20 w-full lg:px-24 xl:px-28 flex flex-col items-center gap-6 text-center">
        <h2 className="text-[25px] font-semibold">Brands we Serve</h2>
        <div className="flex flex-col items-center w-full gap-10 flex-wrap md:flex-row lg:justify-between">
          <Image src={logo_1} alt="" width={130} objectFit="cover"></Image>
          <Image src={logo_2} alt="" width={130} objectFit="cover"></Image>
          <Image src={logo_3} alt="" width={130} objectFit="cover"></Image>
          <Image src={logo_4} alt="" width={130} objectFit="cover"></Image>
          <Image src={logo_5} alt="" width={130} objectFit="cover"></Image>
        </div>
      </section>

      <section className="bg-[#F2F2F2] py-12 px-14 sm:px-16 md:px-20 w-full lg:px-24 xl:px-28 flex flex-col gap-10">
        <h2 className="text-[25px] font-semibold text-center">
          Our customers say the nicest things
          <br /> about our service
        </h2>

        <div className="px-16 sm:px-20 md:px-28 lg:px-36 xl:px-40">
          <Swiper
            spaceBetween={40}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              576: {
                slidesPerView: 1,
              },

              768: {
                slidesPerView: 2,
              },

              1024: {
                slidesPerView: 2,
              },
              1280: {
                slidesPerView: 2,
              },
            }}
          >
            <SwiperSlide className="flex flex-col p-5  bg-white items-center md:items-start">
              <div className="flex flex-col lg:flex-row text-center lg:text-start items-center mb-3 gap-4">
                <Image
                  src={profile_1}
                  alt=""
                  className="w-[50px] h-[50px] rounded-full object-cover"
                ></Image>
                <div className="flex-col flex">
                  <p className="font-medium">Eve Madien</p>
                  <span className="text-[#939191]">New york</span>
                </div>
              </div>

              <p className="text-[14px] text-center lg:text-start leading-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                eget condimentum enim libero ultricies amet odio fringilla. Ut
                nibh morbi augue porta aliquet commodo. Fermentum auctor lacus
                eget in ut integer viverra sed. Penatibus tortor consequat.
              </p>
            </SwiperSlide>

            <SwiperSlide className="flex flex-col p-5  bg-white items-center md:items-start">
              <div className="flex  flex-col lg:flex-row text-center lg:text-start items-center mb-3  gap-4">
                <Image
                  src={profile_2}
                  alt=""
                  className="w-[50px] h-[50px] rounded-full object-cover"
                ></Image>
                <div className="flex-col flex">
                  <p className="font-medium">Smith Johnson</p>
                  <span className="text-[#939191]">New york</span>
                </div>
              </div>
              <p className="text-[14px] text-center lg:text-start leading-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                eget condimentum enim libero ultricies amet odio fringilla. Ut
                nibh morbi augue porta aliquet commodo. Fermentum auctor lacus
                eget in ut integer viverra sed. Penatibus tortor consequat.
              </p>
            </SwiperSlide>

            <SwiperSlide className="flex flex-col p-5  bg-white items-center md:items-start">
              <div className="flex  flex-col lg:flex-row text-center lg:text-start items-center mb-3  gap-4">
                <Image
                  src={profile_1}
                  alt=""
                  className="w-[50px] h-[50px] rounded-full object-cover"
                ></Image>
                <div className="flex-col flex">
                  <p className="font-medium">Eve Madien</p>
                  <span className="text-[#939191]">New york</span>
                </div>
              </div>
              <p className="text-[14px] text-center lg:text-start leading-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                eget condimentum enim libero ultricies amet odio fringilla. Ut
                nibh morbi augue porta aliquet commodo. Fermentum auctor lacus
                eget in ut integer viverra sed. Penatibus tortor consequat.
              </p>
            </SwiperSlide>

            <SwiperSlide className="flex flex-col p-5  bg-white items-center md:items-start">
              <div className="flex  flex-col lg:flex-row text-center lg:text-start items-center mb-3  gap-4">
                <Image
                  src={profile_2}
                  alt=""
                  className="w-[50px] h-[50px] rounded-full object-cover"
                ></Image>
                <div className="flex-col flex">
                  <p className="font-medium">Smith Johnson</p>
                  <span className="text-[#939191]">New york</span>
                </div>
              </div>
              <p className="text-[14px] text-center lg:text-start leading-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                eget condimentum enim libero ultricies amet odio fringilla. Ut
                nibh morbi augue porta aliquet commodo. Fermentum auctor lacus
                eget in ut integer viverra sed. Penatibus tortor consequat.
              </p>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="flex items-center gap-10 px-16 sm:px-20 md:px-28 lg:px-36 xl:px-40 justify-center lg:justify-end">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="w-[40px] h-[40px] rounded-full
              hover:bg-black hover:text-white bg-white text-black
            items-center justify-center flex"
          >
            <UilArrowLeft></UilArrowLeft>
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="w-[40px] h-[40px] rounded-full
              hover:bg-black hover:text-white bg-white text-black
            items-center justify-center flex"
          >
            <UilArrowRight></UilArrowRight>
          </button>
        </div>
      </section>

      <section className="py-12 px-14 sm:px-16 md:px-20 flex flex-col items-center lg:justify-center gap-10 w-full lg:px-24 xl:px-28 bg-[#E2E6E9]">
        <h2 className="text-[25px] font-semibold">
          Frequently Asked Questions
        </h2>

        <div className="flex flex-col items-center gap-8 text-center lg:text-start max-w-xl w-full">
          {faqs.map((faq, idx) => {
            return (
              <div
                key={idx}
                className="bg-white p-3 px-4 flex flex-col items-center gap-3 lg:items-start w-full"
              >
                <h3
                  onClick={() => {
                    toggle(idx);
                  }}
                  className=" text-[18px] font-medium cursor-pointer flex items-center justify-between w-full"
                >
                  {faq.question}{" "}
                  <div className="w-[30px] h-[30px] bg-[#FF6433] text-white flex items-center justify-center p-1 rounded-md">
                    {isOpen === idx ? (
                      <UilMinus></UilMinus>
                    ) : (
                      <UilPlus></UilPlus>
                    )}
                  </div>
                </h3>
                <p
                  className={`${
                    isOpen === idx ? "block" : "hidden"
                  } text-[#939191]`}
                >
                  {faq.answer}
                </p>
              </div>
            );
          })}
        </div>
      </section>

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
