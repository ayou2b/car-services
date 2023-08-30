import React, { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";

import image_1 from "/./public/landing_page/oli-woodman-oZOb6z2hWTU-unsplash.jpg";
import image_2 from "/./public/landing_page/laurel-and-michael-evans-c-KDq7nxVdQ-unsplash.jpg";

function AboveFooter() {
  return (
    <Fragment>
      <section className="text-center transition-all flex items-center justify-center  lg:text-start">
        <div className="w-full 2xl:max-w-[1300px] flex flex-col items-center lg:flex-row">
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
        </div>
      </section>
    </Fragment>
  );
}

export default AboveFooter;
