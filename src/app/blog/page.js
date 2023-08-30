import React, { Fragment } from "react";
import Image from "next/image";

import hero_image from "/./public/blog_page/matt-vanyek-iSVceHVGN8U-unsplash.jpg";
import Link from "next/link";

import image_1 from "/./public/blog_page/serjan-midili-qeyPtWw9_NY-unsplash.jpg";
import image_2 from "/./public/blog_page/john-vicente-zbwWLXUZGsc-unsplash.jpg";
import image_3 from "/./public/blog_page/jonathan-cooper-lihUu1kAbkQ-unsplash.jpg";
import image_4 from "/./public/blog_page/viktor-theo-1rw3l343EDM-unsplash.jpg";

import arrow from "/./public/landing_page/arrow.png";

import blog_1 from "/./public/blog_page/adrian-n-nD3xeeZTl84-unsplash.jpg";
import blog_2 from "/./public/blog_page/asdrubal-luna-GqbSYjxkWvk-unsplash.jpg";
import blog_3 from "/./public/blog_page/clement-m-Ng3xrviPrhk-unsplash.jpg";
import blog_4 from "/./public/blog_page/zero-take-t4yzxOtDZgQ-unsplash.jpg";
import blog_5 from "/./public/blog_page/morgan-edwards-x_iIsuTcmTM-unsplash.jpg";
import blog_6 from "/./public/blog_page/redcharlie-redcharlie1-mugDbuNnbd0-unsplash.jpg";

import Header from "../../../components/Header";

import Footer from "../../../components/Footer";
import AboveFooter from "../../../components/AboveFooter";

export const metadata = {
  title: "Blog",
};

function page() {
  return (
    <Fragment>
      <Header></Header>

      <section className="w-full flex mt-5 flex-col justify-center items-center  mb-20 ">
        <div className=" lg:relative 2xl:max-w-[1300px] w-full">
          <div
            style={{
              backgroundImage: `url(${hero_image.src})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="w-full relative h-96 object-cover"
          >
            <div className="top-0 left-0 h-full w-full lg:w-[40%] bg-[rgb(0,0,0,70%)] text-white flex items-center justify-center">
              <h1 className="text-[30px] font-bold">Our Blog</h1>
            </div>
          </div>

          <div className="w-full bg-[#1E1B1B] lg:absolute lg:top-0 lg:right-0 lg:h-full lg:w-[60%] transition-all text-center lg:text-start p-4  flex items-center justify-center">
            <div className="flex flex-col items-center gap-4  max-w-lg lg:items-start">
              <span className="text-[#FF6433]">TRENDING</span>
              <h2 className="text-white text-[25px] font-semibold">
                Diagnose Car Problems If You Don’t Know Much About Cars
              </h2>
              <p className="text-[#F2F2F2] leading-7">
                Through True Rich Attended does no end it his mother since real
                had half every him case in packages enquire we up ecstatic
                unsatiable saw Through True Rich Attended does
              </p>
              <div className="flex flex-col items-center lg:flex-row gap-5">
                <Link
                  href="/blog-post"
                  className="bg-[#FF6433] text-white px-7 py-3 rounded-lg hover:scale-95 duration-200"
                >
                  Read more
                </Link>

                <span className="text-[rgb(255,255,255,70%)]">
                  Posted on October 6th 2021
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 mb-20 py-14 bg-[#F5F5F5] flex items-center justify-center  text-center lg:text-start">
        <div className="w-full 2xl:max-w-[1300px] flex flex-col items-center gap-10 lg:gap-20 md:flex-row">
          <div className="bg-white p-5 max-w-md w-full flex flex-col items-center gap-4 lg:items-start transition-all">
            <Image src={image_1} alt="" className="object-cover h-52"></Image>

            <span className="text-[#939191] text-[14px]">
              Posted on October 6th 2021
            </span>
            <h3 className="text-[20px] font-semibold">
              Should I Buy a New Car or Lease a New Car in 2021?
            </h3>
            <p className="text-[#232536]">
              We provide a full range of front end mechanical repairs for all
              makes and models of cars, no matter the cause. This includes, We
              provide a full range of front end mechanical.
            </p>

            <Link
              href="/blog-post"
              className="flex items-center flex-col md:flex-row gap-3 font-medium hover:gap-4 duration-200"
            >
              Read more{" "}
              <Image src={arrow} alt="" objectFit="cover" width={30}></Image>
            </Link>
          </div>

          <div className=" w-full flex flex-col items-center lg:items-start gap-8">
            <Link
              href="/blog-post"
              className="flex flex-col w-full items-center md:flex-row gap-4"
            >
              <Image
                src={image_2}
                alt=""
                className="w-full h-36 lg:w-36 object-cover"
              ></Image>

              <div className="flex flex-col items-center lg:items-start gap-2">
                <h3 className="text-[18px] font-semibold">
                  Get an Awesome Number Plate for Your New Car
                </h3>
                <p className="text-[#939191]">Posted on October 6th 2021</p>
              </div>
            </Link>

            <Link
              href="/blog-post"
              className="flex flex-col w-full items-center md:flex-row gap-4"
            >
              <Image
                src={image_3}
                alt=""
                className="w-full h-36 lg:w-36 object-cover"
              ></Image>

              <div className="flex flex-col items-center lg:items-start gap-2">
                <h3 className="text-[18px] font-semibold">
                  Would you Let a Robot Drive your Car? Our AI Future
                </h3>
                <p className="text-[#939191]">Posted on October 6th 2021</p>
              </div>
            </Link>

            <Link
              href="/blog-post"
              className="flex flex-col w-full items-center md:flex-row gap-4"
            >
              <Image
                src={image_4}
                alt=""
                className="w-full h-36 lg:w-36 object-cover"
              ></Image>

              <div className="flex flex-col items-center lg:items-start gap-2">
                <h3 className="text-[18px] font-semibold">
                  Will Electric Technology Soon Rule The Road?
                </h3>
                <p className="text-[#939191]">Posted on October 6th 2021</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-14 sm:px-16 text-center lg:text-start md:px-20 lg:px-24 xl:px-28 mb-20 flex items-center justify-center w-full">
        <div className="w-full 2xl:max-w-[1300px] flex flex-col items-center gap-10 md:grid md:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/blog-post"
            className="flex flex-col items-center lg:items-start gap-3"
          >
            <Image
              src={blog_1}
              alt=""
              className="object-cover w-full h-40"
            ></Image>

            <span className="text-[#939191] text-[14px]">
              Posted on October 6th 2021
            </span>
            <h4 className="text-[18px] font-semibold">
              We provide blow straight past it with the wheels skidding
            </h4>
            <p className="leading-7 text-[#232536]">
              We provide a full range of front end mechanical repairs for all
              makes and models We provide a full range of front end mechanical
              repairs for all makes and models
            </p>
          </Link>

          <Link
            href="/blog-post"
            className="flex flex-col items-center lg:items-start gap-3"
          >
            <Image
              src={blog_2}
              alt=""
              className="object-cover w-full h-40"
            ></Image>

            <span className="text-[#939191] text-[14px]">
              Posted on October 6th 2021
            </span>
            <h4 className="text-[18px] font-semibold">
              5 Genius Car Accessories You Should Never Drive Without
            </h4>
            <p className="leading-7 text-[#232536]">
              We provide a full range of front end mechanical repairs for all
              makes and models We provide a full range of front end mechanical
              repairs for all makes and models
            </p>
          </Link>

          <Link
            href="/blog-post"
            className="flex flex-col items-center lg:items-start gap-3"
          >
            <Image
              src={blog_3}
              alt=""
              className="object-cover w-full h-40"
            ></Image>

            <span className="text-[#939191] text-[14px]">
              Posted on October 6th 2021
            </span>
            <h4 className="text-[18px] font-semibold">
              We provide blow straight past it with the wheels skidding
            </h4>
            <p className="leading-7 text-[#232536]">
              We provide a full range of front end mechanical repairs for all
              makes and models We provide a full range of front end mechanical
              repairs for all makes and models
            </p>
          </Link>

          <Link
            href="/blog-post"
            className="flex flex-col items-center lg:items-start gap-3"
          >
            <Image
              src={blog_4}
              alt=""
              className="object-cover w-full h-40"
            ></Image>

            <span className="text-[#939191] text-[14px]">
              Posted on October 6th 2021
            </span>
            <h4 className="text-[18px] font-semibold">
              We provide blow straight past it with the wheels skidding
            </h4>
            <p className="leading-7 text-[#232536]">
              We provide a full range of front end mechanical repairs for all
              makes and models We provide a full range of front end mechanical
              repairs for all makes and models
            </p>
          </Link>

          <Link
            href="/blog-post"
            className="flex flex-col items-center lg:items-start gap-3"
          >
            <Image
              src={blog_5}
              alt=""
              className="object-cover w-full h-40"
            ></Image>

            <span className="text-[#939191] text-[14px]">
              Posted on October 6th 2021
            </span>
            <h4 className="text-[18px] font-semibold">
              5 Genius Car Accessories You Should Never Drive Without
            </h4>
            <p className="leading-7 text-[#232536]">
              We provide a full range of front end mechanical repairs for all
              makes and models We provide a full range of front end mechanical
              repairs for all makes and models
            </p>
          </Link>

          <Link
            href="/blog-post"
            className="flex flex-col items-center lg:items-start gap-3"
          >
            <Image
              src={blog_6}
              alt=""
              className="object-cover w-full h-40"
            ></Image>

            <span className="text-[#939191] text-[14px]">
              Posted on October 6th 2021
            </span>
            <h4 className="text-[18px] font-semibold">
              We provide blow straight past it with the wheels skidding
            </h4>
            <p className="leading-7 text-[#232536]">
              We provide a full range of front end mechanical repairs for all
              makes and models We provide a full range of front end mechanical
              repairs for all makes and models
            </p>
          </Link>
        </div>
      </section>

      <AboveFooter></AboveFooter>

      <Footer></Footer>
    </Fragment>
  );
}

export default page;
