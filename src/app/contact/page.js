import React, { Fragment } from "react";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export const metadata = {
  title: "Contact",
};

function Page() {
  return (
    <Fragment>
      <Header></Header>

      <section className="px-14 mt-5 sm:px-16 md:px-20 lg:px-24 xl:px-28 mb-20 w-full flex items-center justify-center ">
        <div className="w-full 2xl:max-w-[1300px] flex flex-col items-center gap-8 lg:items-start lg:justify-between">
          <h1 className="text-[30px] font-bold">
            Get in touch
            <br /> with our experts
          </h1>

          <div className="flex flex-col items-center text-center lg:text-start lg:flex-row lg:items-start gap-10 lg:gap-20 w-full">
            <form className="flex flex-col gap-4 max-w-lg w-full transition-all">
              <input
                placeholder="Your full Name"
                className="bg-[#F2F2F2] px-10 py-3 outline-none placeholder:text-center placeholder:text-black lg:placeholder:text-start"
              ></input>

              <input
                placeholder="Your Email"
                className="bg-[#F2F2F2] px-10 py-3 outline-none placeholder:text-center placeholder:text-black lg:placeholder:text-start"
              ></input>

              <input
                placeholder="Select service type"
                className="bg-[#F2F2F2] px-10 py-3 outline-none placeholder:text-center placeholder:text-black lg:placeholder:text-start"
              ></input>

              <input
                placeholder="Message"
                className="bg-[#F2F2F2] px-10 py-3 outline-none placeholder:text-center placeholder:text-black lg:placeholder:text-start"
              ></input>
              <button className="px-8 py-3 rounded-lg bg-[#FF6433] hover:scale-95 duration-200 text-white w-full lg:w-fit">
                Send message
              </button>
            </form>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-[#656565]">Address</span>
                <p className="font-medium">
                  NH 234 Public Square San Francisco 65368
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[#656565]">Contact Details</span>
                <p className="font-medium">1800 265 24 52</p>
                <p className="font-medium">Finsweet@gmail.com</p>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[#656565]">Opening Hours</span>
                <p className="font-medium">
                  Monday to Friday 9:00 AM to 10:00 AM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </Fragment>
  );
}

export default Page;
