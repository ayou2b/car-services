import React, { Fragment } from "react";
import Image from "next/image";

import image_1 from "/./public/single_blog/sea-men-ERd52c7VSrc-unsplash.jpg";
import image_2 from "/./public/single_blog/jannis-lucas-oN661Kw9ZOY-unsplash.jpg";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";

export const metadata = {
  title: "Blog Post",
};

function page() {
  return (
    <Fragment>
      <Header></Header>
      <section className=" mt-14 gap-3 w-full flex items-center justify-center  text-center lg:text-start px-14 sm:px-16 md:px-36 lg:px-40 xl:px-44">
        <div className="w-full 2xl:max-w-[1300px] flex flex-col items-center lg:items-start">
          <span className="text-[#939191]">Posted on October 6th 2021</span>
          <h2 className="text-[25px] font-semibold">
            Should I Buy a New Car or Lease a New Car in 2021?
          </h2>
          <p className="text-[#939191] leading-7">
            We provide a full range of front end mechanical repairs for all
            makes and models of cars, no matter the cause. This includes, We
            provide a full range of front end mechanical{" "}
          </p>
        </div>
      </section>

      <section className="w-full flex items-center justify-center">
        <Image
          src={image_1}
          alt=""
          className="h-60 w-full 2xl:max-w-[1300px] object-cover px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 mt-14 mb-14"
        ></Image>
      </section>

      <section className="px-14 mb-20 sm:px-16 md:px-36 lg:px-40 xl:px-44 flex items-center justify-center text-center lg:text-start">
        <div className="w-full 2xl:max-w-[1300px] flex flex-col gap-5">
          <h3 className="text-[20px] font-semibold">
            This is a blog post headline
          </h3>

          <p className="text-[#939191] leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            dignissim dolor et dui bibendum aliquam. Mauris a quam sit amet dui
            auctor dictum eget a elit. Pellentesque varius diam risus, ut
            condimentum lorem volutpat vel. Nam vel orci pharetra eros pulvinar
            cursus nec quis tellus. Quisque feugiat tortor lectus, pretium
            interdum justo tincidunt a. Donec at congue lectus. Nulla facilisi.
            Phasellus consectetur sapien accumsan lectus tincidunt placerat.
            Etiam ornare nibh vel dui egestas, eu posuere metus convallis.
          </p>

          <p className="text-[#939191] leading-7">
            Ut non urna a odio condimentum dictum. Proin egestas erat a orci
            ultrices, vitae bibendum libero posuere. Quisque laoreet tincidunt
            justo. Vestibulum congue dictum libero finibus vehicula. Aliquam
            nisi velit, ultricies eget enim vel, venenatis mollis ante. Maecenas
            sodales tristique quam. Suspendisse fringilla massa vel dolor ornare
            rhoncus. Nullam ut orci mattis leo varius laoreet sed mollis dui.
            Aenean placerat nec enim ut finibus. Maecenas suscipit nibh eu neque
            egestas, non condimentum mi bibendum. Sed est eros, molestie
            consectetur auctor non, lobortis quis tortor. Nam cursus imperdiet
            massa volutpat hendrerit. Sed suscipit ligula iaculis lorem sagittis
            tincidunt. Etiam pellentesque metus vel enim iaculis aliquam. Mauris
            at nisi sed elit gravida malesuada.
          </p>

          <Image
            src={image_2}
            alt=""
            className="object-cover w-full h-60"
          ></Image>

          <h3 className="text-[20px] font-semibold">
            This is a small blog post headline
          </h3>

          <p className="text-[#939191] leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            dignissim dolor et dui bibendum aliquam. Mauris a quam sit amet dui
            auctor dictum eget a elit. Pellentesque varius diam risus, ut
            condimentum lorem volutpat vel. Nam vel orci pharetra eros pulvinar
            cursus nec quis tellus. Quisque feugiat tortor lectus, pretium
            interdum justo tincidunt a. Donec at congue lectus. Nulla facilisi.
            Phasellus consectetur sapien accumsan lectus tincidunt placerat.
            Etiam ornare nibh vel dui egestas, eu posuere metus convallis.
          </p>

          <p className="text-[#939191] leading-7 pl-4 border-l-[4px] border-[#1E1B1B]">
            Ut non urna a odio condimentum dictum. Proin egestas erat a orci
            ultrices, vitae bibendum libero posuere. Quisque laoreet tincidunt
            justo. Vestibulum congue dictum libero finibus vehicula. Aliquam
            nisi velit, ultricies eget enim vel, venenatis mollis ante.
          </p>

          <p className="text-[#939191] leading-7">
            Ut non urna a odio condimentum dictum. Proin egestas erat a orci
            ultrices, vitae bibendum libero posuere. Quisque laoreet tincidunt
            justo. Vestibulum congue dictum libero finibus vehicula. Aliquam
            nisi velit, ultricies eget enim vel, venenatis mollis ante. Maecenas
            sodales tristique quam. Suspendisse fringilla massa vel dolor ornare
            rhoncus. Nullam ut orci mattis leo varius laoreet sed mollis dui.
            Aenean placerat nec enim ut finibus. Maecenas suscipit nibh eu neque
            egestas, non condimentum mi bibendum. Sed est eros, molestie
            consectetur auctor non, lobortis quis tortor. Nam cursus imperdiet
            massa volutpat hendrerit. Sed suscipit ligula iaculis lorem sagittis
            tincidunt. Etiam pellentesque metus vel enim iaculis aliquam. Mauris
            at nisi sed elit gravida malesuada.
          </p>
        </div>
      </section>

      <Footer></Footer>
    </Fragment>
  );
}

export default page;
