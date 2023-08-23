import React, { Fragment } from "react";
import Image from "next/image";

import hero_image from "/./public/about_page/kenny-eliason-ZSz1m4JPDqU-unsplash.jpg";
import image_1 from "/./public/about_page/pexels-andrea-piacquadio-3807649.jpg";

import image_2 from "/./public/about_page/nina-mercado-Y_t0n-T4H5M-unsplash.jpg";
import image_3 from "/./public/about_page/aarron-norcott-gD1HU_XU5aE-unsplash.jpg";
import image_4 from "/./public/about_page/enis-yavuz-tZtgozUpZZc-unsplash.jpg";

import icon_1 from "/./public/about_page/icon_1.png";
import icon_2 from "/./public/about_page/icon_2.png";
import icon_3 from "/./public/about_page/icon_3.png";

import profile_1 from "/./public/about_page/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg";
import profile_2 from "/./public/about_page/jurica-koletic-7YVZYZeITc8-unsplash.jpg";
import profile_3 from "/./public/about_page/luis-villasmil-Z4rqvRpRj38-unsplash.jpg";
import profile_4 from "/./public/about_page/podpros-GEnCnYhA1J4-unsplash.jpg";

import profile_5 from "/./public/about_page/zoe-fernandez--zqoE7jnQgw-unsplash.jpg";
import profile_6 from "/./public/about_page/leah-hetteberg-cUKy1J3wzqg-unsplash.jpg";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import AboveFooter from "../../../components/AboveFooter";

export const metadata = {
  title: "About Us",
};

function Page() {
  return (
    <Fragment>
      <Header></Header>

      <section className="px-14  w-full mt-5 flex flex-col justify-center sm:px-16 md:px-20 lg:px-24 xl:px-28 mb-20">
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
              <h1 className="text-white text-[30px] font-bold">About us</h1>
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

      <section className="px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 mb-20 flex flex-col text-center lg:text-start items-center gap-10 lg:flex-row lg:justify-between w-full">
        <div className="w-full max-w-lg">
          <h2 className="text-[25px] font-semibold mb-2">
            We Provide Expert Service and aim to have a long term with you
          </h2>
          <p className="leading-7 text-[#232536]">
            We provide a full range of front end mechanical repairs for all
            makes and models of cars, no matter
          </p>
          <div className="flex flex-col items-center gap-5 lg:items-start mt-5">
            <div className="flex flex-col items-center gap-4 lg:flex-row lg:items-start">
              <div className="w-[40px] h-[40px] rounded-full bg-[#661CE7] flex items-center justify-center font-bold p-2 text-white">
                01
              </div>
              <div className="max-w-sm">
                <h4 className="text-[18px] font-semibold">Get a Quote</h4>
                <p className="leading-7 text-gray-500">
                  Through True Rich Attended does no end it his mother since
                  real had half every{" "}
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 lg:flex-row lg:items-start">
              <div className="w-[40px] h-[40px] rounded-full bg-[#661CE7] flex items-center justify-center font-bold p-2 text-white">
                02
              </div>
              <div className="max-w-sm">
                <h4 className="text-[18px] font-semibold">Get a Quote</h4>
                <p className="leading-7 text-gray-500">
                  Through True Rich Attended does no end it his mother since
                  real had half every{" "}
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 lg:flex-row lg:items-start">
              <div className="w-[40px] h-[40px] rounded-full bg-[#661CE7] flex items-center justify-center font-bold p-2 text-white">
                03
              </div>
              <div className="max-w-sm">
                <h4 className="text-[18px] font-semibold">Get a Quote</h4>
                <p className="leading-7 text-gray-500">
                  Through True Rich Attended does no end it his mother since
                  real had half every{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <Image src={image_1} alt="" className="max-w-[400px] w-full"></Image>
      </section>

      <section className="px-14 lg:p-0 w-full flex flex-col text-center lg:text-start items-center md:p-0   md:grid md:grid-cols-3">
        <div
          style={{
            backgroundImage: `url(${image_2.src})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="w-full h-80 relative"
        >
          <div className="w-full h-full top-0 left-0 absolute bg-[rgb(248,91,41,70%)] flex items-center justify-center text-white p-10">
            <div className="flex flex-col items-center gap-2 lg:items-start">
              <h4 className="text-[18px] font-semibold">
                Serve our customers and always deliver the customer service
              </h4>
              <p>
                We provide a full range of front end mechanical repairs for all
                makes and models of cars, no matter the cause. This includes
              </p>
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundImage: `url(${image_3.src})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="w-full h-80 relative"
        >
          <div className="w-full h-full top-0 left-0 absolute bg-[rgb(0,0,0,70%)] flex items-center justify-center text-white p-10">
            <div className="flex flex-col items-center gap-2 lg:items-start">
              <h4 className="text-[18px] font-semibold">
                To be the world’s most eader in automotive business solutions.
              </h4>
              <p>
                We provide a full range of front end mechanical repairs for all
                makes and models of cars, no matter the cause. This includes
              </p>
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundImage: `url(${image_4.src})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="w-full h-80 relative"
        >
          <div className="w-full h-full top-0 left-0 absolute bg-[rgb(116,67,202,70%)] flex items-center justify-center text-white p-10">
            <div className="flex flex-col items-center gap-2 lg:items-start">
              <h4 className="text-[18px] font-semibold">
                We value the service we provide and our loyal returning
                customers
              </h4>
              <p>
                We provide a full range of front end mechanical repairs for all
                makes and models of cars, no matter the cause. This includes
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 mb-20 py-14 bg-[#F8F8F8] text-center flex flex-col items-center gap-10">
        <h2 className="text-[25px] font-semibold">
          Services we provide to our
          <br /> valued customers
        </h2>

        <div className="flex flex-col items-center gap-5 md:grid md:grid-cols-3">
          <div className="bg-white p-4 flex flex-col items-center gap-3">
            <div className="bg-[#FFDACE] w-[40px] h-[40px] rounded-full flex items-center justify-center">
              <Image src={icon_1} width={20} alt=""></Image>
            </div>
            <h3 className="text-[20px] font-semibold">Convenient Service</h3>
            <p className="leading-7 text-[#232536]">
              Through True Rich Attended does no end it his mother since real
              had half every him end it his mother
            </p>
          </div>

          <div className="bg-white p-4 flex flex-col items-center gap-3">
            <div className="bg-[#FFDACE] w-[40px] h-[40px] rounded-full flex items-center justify-center">
              <Image src={icon_2} width={20} alt=""></Image>
            </div>
            <h3 className="text-[20px] font-semibold">Convenient Service</h3>
            <p className="leading-7 text-[#232536]">
              Through True Rich Attended does no end it his mother since real
              had half every him end it his mother
            </p>
          </div>

          <div className="bg-white p-4 flex flex-col items-center gap-3">
            <div className="bg-[#FFDACE] w-[40px] h-[40px] rounded-full flex items-center justify-center">
              <Image src={icon_3} width={20} alt=""></Image>
            </div>
            <h3 className="text-[20px] font-semibold">Convenient Service</h3>
            <p className="leading-7 text-[#232536]">
              Through True Rich Attended does no end it his mother since real
              had half every him end it his mother
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col items-center gap-10 md:grid md:grid-cols-2 lg:flex lg:flex-row lg:justify-between">
          <div className="flex flex-col items-center gap-1">
            <h1 className="text-[#661CE7] font-bold text-[30px]">20+</h1>
            <p>Proffesional</p>
          </div>

          <div className="flex flex-col items-center gap-1">
            <h1 className="text-[#661CE7] font-bold text-[30px]">10+</h1>
            <p>Years Eperience</p>
          </div>

          <div className="flex flex-col items-center gap-1">
            <h1 className="text-[#661CE7] font-bold text-[30px]">12K+</h1>
            <p>Service Closed</p>
          </div>

          <div className="flex flex-col items-center gap-1">
            <h1 className="text-[#661CE7] font-bold text-[30px]">100%</h1>
            <p>Customer Satisfaction</p>
          </div>
        </div>
      </section>

      <section className="px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 mb-20 flex flex-col items-center gap-10">
        <h2 className="text-[25px] font-semibold">Meet our Team</h2>

        <div className="flex flex-col items-center gap-10 md:grid md:grid-cols-2 lg:grid-cols-3 w-full">
          <div className="flex flex-col items-center">
            <Image src={profile_1} alt="" className="h-48 object-cover"></Image>
            <div className="bg-black text-white p-3 flex flex-col items-center w-full">
              <p>Javena Melo</p>
              <span className="text-[rgb(255,255,255,70%)]">
                Founder, Director
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <Image src={profile_2} alt="" className="h-48 object-cover"></Image>
            <div className="bg-black text-white p-3 flex flex-col items-center w-full">
              <p>Paul Honson</p>
              <span className="text-[rgb(255,255,255,70%)]">
                Head Technician
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <Image src={profile_3} alt="" className="h-48 object-cover"></Image>
            <div className="bg-black text-white p-3 flex flex-col items-center w-full">
              <p>Devon Lane</p>
              <span className="text-[rgb(255,255,255,70%)]">Technician</span>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <Image src={profile_4} alt="" className="h-48 object-cover"></Image>
            <div className="bg-black text-white p-3 flex flex-col items-center w-full">
              <p>Jalen Davies</p>
              <span className="text-[rgb(255,255,255,70%)]">
                Marketing Manager
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <Image src={profile_5} alt="" className="h-48 object-cover"></Image>
            <div className="bg-black text-white p-3 flex flex-col items-center w-full">
              <p>Kylee Danford</p>
              <span className="text-[rgb(255,255,255,70%)]">Sales Manager</span>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <Image src={profile_6} alt="" className="h-48 object-cover"></Image>
            <div className="bg-black text-white p-3 flex flex-col items-center w-full">
              <p>Luisa Wilson</p>
              <span className="text-[rgb(255,255,255,70%)]">
                Support Assistant
              </span>
            </div>
          </div>
        </div>
      </section>

      <AboveFooter></AboveFooter>

      <Footer></Footer>
    </Fragment>
  );
}

export default Page;
