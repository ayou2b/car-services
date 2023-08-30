import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

import icon_1 from "/./public/single_services/Group_1.png";
import icon_2 from "/./public/single_services/Group_2.png";
import icon_3 from "/./public/single_services/Group_3.png";

import icon_4 from "/./public/single_services/Icon.png";
import icon_5 from "/./public/single_services/Icon_1.png";
import icon_6 from "/./public/single_services/Icon_2.png";

import image_1 from "/./public/single_services/maxim-hopman-s4d_ESS0ylA-unsplash.jpg";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export const metadata = {
  title: "Service",
};

function Page() {
  return (
    <Fragment>
      <Header></Header>
      <section className="text-center mb-20 mt-14 lg:text-start px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 flex items-center justify-center w-full">
        <div className="w-full 2xl:max-w-[1300px] flex flex-col items-center gap-10 lg:flex-row lg:items-start">
          <div className="flex flex-col  gap-10">
            <div className="bg-[#F5F5F5] p-6 flex items-center flex-col gap-3">
              <h3 className="text-[20px] font-semibold">Other services</h3>

              <Link
                href="/single-service"
                className="bg-white flex flex-col gap-1 p-5 w-full items-center"
              >
                <Image src={icon_1} alt="" width={25}></Image>
                <p className="font-medium">Engine Repair</p>
              </Link>

              <Link
                href="/single-service"
                className="bg-white flex flex-col gap-1 p-5 w-full items-center"
              >
                <Image src={icon_2} alt="" width={25}></Image>
                <p className="font-medium">Car wash</p>
              </Link>

              <Link
                href="/single-service"
                className="bg-white flex flex-col gap-1 p-5 w-full items-center"
              >
                <Image src={icon_3} alt="" width={25}></Image>
                <p className="font-medium">Batteries</p>
              </Link>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col items-center gap-4 lg:items-start lg:flex-row">
                <div className="bg-[#F5F5F5] p-2 rounded-full flex items-center justify-center">
                  <Image src={icon_4} alt="" width={30}></Image>
                </div>

                <div className="flex flex-col items-center lg:items-start gap-2">
                  <h4 className="text-[18px] font-medium">
                    Convenient service
                  </h4>
                  <p className="text-[#939191] text-[14px]">
                    Through True Rich Attended does no end it his mother since
                    real had half every him.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4 lg:items-start lg:flex-row">
                <div className="bg-[#F5F5F5] p-2 rounded-full flex items-center justify-center">
                  <Image src={icon_5} alt="" width={30}></Image>
                </div>

                <div className="flex flex-col items-center lg:items-start gap-2">
                  <h4 className="text-[18px] font-medium">Expert mechanics</h4>
                  <p className="text-[#939191] text-[14px]">
                    Through True Rich Attended does no end it his mother since
                    real had half every him.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4 lg:items-start lg:flex-row">
                <div className="bg-[#F5F5F5] p-2 rounded-full flex items-center justify-center">
                  <Image src={icon_6} alt="" width={30}></Image>
                </div>

                <div className="flex flex-col items-center lg:items-start gap-2">
                  <h4 className="text-[18px] font-medium">
                    Transparent pricing
                  </h4>
                  <p className="text-[#939191] text-[14px]">
                    Through True Rich Attended does no end it his mother since
                    real had half every him.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start gap-7 max-w-2xl">
            <Image
              src={image_1}
              alt=""
              className="object-cover h-60 w-full"
            ></Image>

            <h3 className="text-[20px] font-semibold">
              The warning lights on your dashboard are the most obvious starting
              point.
            </h3>

            <p className="leading-7 text-[#232536]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              dignissim dolor et dui bibendum aliquam. Mauris a quam sit amet
              dui auctor dictum eget a elit. Pellentesque varius diam risus, ut
              condimentum lorem volutpat vel. Nam vel orci pharetra eros
              pulvinar cursus nec quis tellus. Quisque feugiat tortor lectus,
              pretium interdum justo tincidunt a. Donec at congue lectus. Nulla
              facilisi. Phasellus consectetur sapien accumsan lectus tincidunt
              placerat. Etiam ornare nibh vel dui egestas, eu posuere metus
              convallis.
            </p>

            <p className="leading-7 text-[#232536]">
              Ut non urna a odio condimentum dictum. Proin egestas erat a orci
              ultrices, vitae bibendum libero posuere. Quisque laoreet tincidunt
              justo. Vestibulum congue dictum libero finibus vehicula. Aliquam
              nisi velit, ultricies eget enim vel, venenatis mollis ante.
              Maecenas sodales tristique quam. Suspendisse fringilla massa vel
              dolor ornare rhoncus. Nullam ut orci mattis leo varius laoreet sed
              mollis dui. Aenean placerat nec enim ut finibus. Maecenas suscipit
              nibh eu neque egestas, non condimentum mi bibendum. Sed est eros,
              molestie consectetur auctor non, lobortis quis tortor. Nam cursus
              imperdiet massa volutpat hendrerit. Sed suscipit ligula iaculis
              lorem sagittis tincidunt. Etiam pellentesque metus vel enim
              iaculis aliquam. Mauris at nisi sed elit gravida malesuada.
            </p>

            <h3 className="text-[20px] font-semibold">
              Delaying a diagnosis and repair could lead to even bigger problems
              down the road.
            </h3>
            <p className="leading-7 text-[#232536]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              dignissim dolor et dui bibendum aliquam. Mauris a quam sit amet
              dui auctor dictum eget a elit. Pellentesque varius diam risus, ut
              condimentum lorem volutpat vel. Nam vel orci pharetra eros
              pulvinar cursus nec quis tellus. Quisque feugiat tortor lectus,
              pretium interdum justo tincidunt a. Donec at congue lectus. Nulla
              facilisi. Phasellus consectetur sapien accumsan lectus tincidunt
              placerat. Etiam ornare nibh vel dui egestas, eu posuere metus
              convallis.
            </p>

            <p className="leading-7 text-[#232536] pl-4 border-l-[3px] border-[#1E1B1B]">
              Ut non urna a odio condimentum dictum. Proin egestas erat a orci
              ultrices, vitae bibendum libero posuere. Quisque laoreet tincidunt
              justo. Vestibulum congue dictum libero finibus vehicula. Aliquam
              nisi velit, ultricies eget enim vel, venenatis mollis ante.
            </p>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </Fragment>
  );
}

export default Page;
