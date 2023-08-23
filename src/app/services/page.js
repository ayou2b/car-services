import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

import { UilCheck } from "@iconscout/react-unicons";

import hero_image from "/./public/services_page/oli-woodman-oZOb6z2hWTU-unsplash.jpg";
import image_1 from "/./public/services_page/maxim-hopman-s4d_ESS0ylA-unsplash.jpg";
import arrow from "/./public/landing_page/arrow.png";

import icon_1 from "/./public/services_page/Group_1.png";
import icon_2 from "/./public/services_page/Group_2.png";
import icon_3 from "/./public/services_page/Group_3.png";
import icon_4 from "/./public/services_page/Group_4.png";
import icon_5 from "/./public/services_page/Group_5.png";
import icon_6 from "/./public/services_page/Group_6.png";

import image_2 from "/./public/services_page/jimmy-nilsson-masth-FHrxSBfNzLw-unsplash.jpg";
import image_3 from "/./public/services_page/jimmy-nilsson-masth-jL9zfzTVSwY-unsplash.jpg";
import image_4 from "/./public/services_page/jimmy-nilsson-masth-uhuTo7u8VXk-unsplash.jpg";
import image_5 from "/./public/services_page/erik-mclean-3uHlGFnzPDU-unsplash.jpg";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import AboveFooter from "../../../components/AboveFooter";

export const metadata = {
  title: "Services",
};

function Page() {
  return (
    <Fragment>
      <Header></Header>

      <section className="px-14 mt-5  w-full flex flex-col justify-center sm:px-16 md:px-20 lg:px-24 xl:px-28 mb-20">
        <div className=" lg:relative">
          <div
            style={{
              backgroundImage: `url(${hero_image.src})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="w-full h-80 object-cover"
          ></div>

          <div className="w-full bg-[#1E1B1B] lg:absolute lg:top-0 lg:right-0 lg:h-full lg:w-[70%] transition-all text-center lg:text-start p-4  flex items-center justify-center">
            <div className="flex flex-col items-center gap-4  max-w-lg lg:items-start">
              <h1 className="text-white text-[30px] font-bold">Our services</h1>
              <p className="text-[#F2F2F2] leading-7">
                Through True Rich Attended does no end it his mother since real
                had half every him case in packages enquire we up ecstatic
                unsatiable saw Through True Rich Attended does{" "}
              </p>
              <button className="bg-[#FF6433] text-white px-7 py-3 rounded-lg hover:scale-95 duration-200">
                Book a service
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 mb-20 bg-[#F5F5F5] py-12 flex flex-col items-center lg:flex-row lg:justify-center gap-10">
        <div className="bg-white p-6 max-w-lg lg:max-h-[550px] w-full h-full flex flex-col gap-10">
          <Image
            src={image_1}
            alt=""
            className="object-cover w-full h-64"
          ></Image>
          <div className="flex flex-col transition-all items-center lg:items-start gap-2">
            <h3 className="text-[20px] font-semibold">Auto Diagnostics</h3>
            <p className="leading-7 text-[#232536]">
              Through True Rich Attended does no end it his mother since
              favourable real had half every him case in packages enquire we up
              ecstatic. Through True Rich Attended does no end it his mother.
            </p>
            <Link
              href="/single-service"
              className="flex flex-col items-center gap-3 lg:flex-row font-medium hover:gap-4 duration-200 cursor-pointer"
            >
              See service details
              <Image src={arrow} alt="" width={30} objectFit="cover"></Image>
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center gap-10 md:grid md:grid-cols-2">
          <Link
            href="/single-service"
            className="flex items-center justify-center h-full p-10 bg-[#FF6433] w-full text-white"
          >
            <div className="flex items-center justify-center flex-col gap-2">
              <Image src={icon_1} alt="" width={25}></Image>
              <p>Auto Dignostics</p>
            </div>
          </Link>

          <Link
            href="/single-service"
            className="flex items-center justify-center p-10 bg-white w-full text-black"
          >
            <div className="flex items-center justify-center flex-col gap-2">
              <Image src={icon_2} alt="" width={25}></Image>
              <p>Engin Repair</p>
            </div>
          </Link>

          <Link
            href="/single-service"
            className="flex items-center justify-center p-10 bg-white w-full text-black"
          >
            <div className="flex items-center justify-center flex-col gap-2">
              <Image src={icon_3} alt="" width={25}></Image>
              <p>Body Work</p>
            </div>
          </Link>

          <Link
            href="/single-service"
            className="flex items-center justify-center p-10 bg-white w-full text-black"
          >
            <div className="flex items-center justify-center flex-col gap-2">
              <Image src={icon_4} alt="" width={25}></Image>
              <p>Batteries</p>
            </div>
          </Link>

          <Link
            href="/single-service"
            className="flex items-center justify-center p-10 bg-white w-full text-black"
          >
            <div className="flex items-center justify-center flex-col gap-2">
              <Image src={icon_5} alt="" width={25}></Image>
              <p>Car wash</p>
            </div>
          </Link>

          <Link
            href="/single-service"
            className="flex items-center justify-center p-10 bg-white w-full text-black"
          >
            <div className="flex items-center justify-center flex-col gap-2">
              <Image src={icon_6} alt="" width={25}></Image>
              <p>AC Repair</p>
            </div>
          </Link>
        </div>
      </section>

      <section className="px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 mb-20 text-center lg:text-start flex flex-col items-center lg:flex-row lg:justify-between gap-10">
        <div className=" max-w-md w-full flex flex-col lg:justify-start  items-center lg:items-start gap-8">
          <h2 className="text-[25px] font-semibold">
            How we work and the
            <br /> process we follow
          </h2>

          <div className="flex flex-col items-center gap-6 lg:items-start">
            <div className="flex flex-col items-center gap-4 lg:flex-row lg:items-start">
              <div className="w-[35px] p-1 h-[35px] bg-[#00D289] text-white rounded-full max-w-sm flex items-center justify-center">
                <UilCheck></UilCheck>
              </div>
              <p className="leading-7 max-w-sm font-medium">
                Through True Rich Attended does no end it his mother since
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 lg:flex-row lg:items-start">
              <div className="w-[35px] p-1 h-[35px] bg-[#00D289] text-white rounded-full max-w-sm flex items-center justify-center">
                <UilCheck></UilCheck>
              </div>
              <p className="leading-7 max-w-sm font-medium">
                Through True Rich Attended does no end it his mother since
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 lg:flex-row lg:items-start">
              <div className="w-[35px] p-1 h-[35px] bg-[#00D289] text-white rounded-full max-w-sm flex items-center justify-center">
                <UilCheck></UilCheck>
              </div>
              <p className="leading-7 max-w-sm font-medium">
                Through True Rich Attended does no end it his mother since
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center md:flex-row gap-10">
          <Image
            src={image_2}
            alt=""
            className="max-w-[250px] w-full object-cover"
          ></Image>
          <Image
            src={image_3}
            alt=""
            className="max-w-[250px] w-full object-cover"
          ></Image>
        </div>
      </section>

      <section className="px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 mb-20 text-center lg:text-start flex flex-col items-center gap-10 lg:flex-row lg:justify-between w-full">
        <div className="flex flex-col items-center md:flex-row gap-10">
          <Image
            src={image_4}
            alt=""
            className="max-w-[250px] w-full object-cover"
          ></Image>
          <Image
            src={image_5}
            alt=""
            className="max-w-[250px] w-full object-cover"
          ></Image>
        </div>

        <div className="max-w-md w-full flex flex-col items-center lg:items-start gap-3 transition-all">
          <h2 className="text-[25px] font-semibold">
            Diagnose Car Problems If You Don’t Know Much About Cars
          </h2>
          <p className="text-[#232536] leading-7">
            We provide a full range of front end mechanical repairs for all
            makes and models of cars, no matter the cause. This includes
            everything from struts, shocks, and tie rod ends to ball joints,
            springs everything from struts, shocks, and tie rod ends to ball
            joints, springs
          </p>
          <button className="px-8 py-3 rounded-lg bg-[#FF6433] text-white w-fit hover:scale-95 duration-200">
            Book a service
          </button>
        </div>
      </section>

      <AboveFooter></AboveFooter>

      <Footer></Footer>
    </Fragment>
  );
}

export default Page;
