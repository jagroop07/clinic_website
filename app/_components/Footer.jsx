"use client";

import Image from "next/image";
import Link from "next/link";
import { GoDotFill } from "react-icons/go";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaChevronRight } from "react-icons/fa6";
import axios from "axios";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const Footer = () => {
  const [solutions, setsolutions] = useState([]);
  
  const pathname = usePathname();
  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/solutions");
      setsolutions(response?.data?.solutions || []);
    } catch (error) {
      console.error("Error fetching solutions:", error);
      throw new Error("Failed to fetch solutions");
    }
  };

  useEffect(() => {
    getData();
  }, []);
  
  return (
    !pathname.startsWith("/admin") && (
      <div className="bg-[#004366] sm:px-10 px-2 2xl:px-0 pt-14 pb-7">
        <div className="2xl:container 2xl:mx-auto grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-5">
          <div className="lg:col-span-2">
            <div className="flex mb-8 gap-5 items-center">
              <Image
                src={"/img/logo-no-background.png"}
                alt="..."
                height={200}
                width={200}
              />
            </div>
            <p className="text-gray-400 text-sm my-3">
              Our activities in the oil and petrochemical sector, engineering,
              construction, and production of lubricants date back to 25 years
              ago An activity that continues to grow and develop through the
              design and implementation of various projects
            </p>
            <hr className="mt-8 opacity-[0.3]" />
            <div className="grid grid-cols-5 gap-4 mt-8 text-white">
              <div className="sm:w-[50px] sm:h-[50px] w-[40px] h-[40px] flex items-center justify-center border border-white rounded-lg">
                <FaFacebook className="text-2xl" />
              </div>
              <div className="sm:w-[50px] sm:h-[50px] w-[40px] h-[40px] flex items-center justify-center border border-white rounded-lg">
                <FaInstagram className="text-2xl" />
              </div>
              <div className="sm:w-[50px] sm:h-[50px] w-[40px] h-[40px] flex items-center justify-center border border-white rounded-lg">
                <FaWhatsapp className="text-2xl" />
              </div>
              <div className="sm:w-[50px] sm:h-[50px] w-[40px] h-[40px] flex items-center justify-center border border-white rounded-lg">
                <FaTelegram className="text-2xl" />
              </div>
              <div className="sm:w-[50px] sm:h-[50px] w-[40px] h-[40px] flex items-center justify-center border border-white rounded-lg">
                <BsTwitterX className="text-2xl" />
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center">
              <div className="h-[5px] w-[16px] rounded-lg bg-primary"></div>
              <h2 className="text-white font-semibold ms-3 mt-4 sm:mt-0">
                Our solutions
              </h2>
            </div>
            <div className="text-gray-400 text-sm">
              {solutions.map((e, i) => (
                <Link
                  href={`/allsolutions/${e._id}`}
                  className="flex items-center my-3"
                >
                  <span className="me-3">
                    <FaChevronRight />
                  </span>{" "}
                  {e.solution_title}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center">
              <div className="h-[5px] w-[16px] rounded-lg bg-primary"></div>
              <h2 className="text-white font-semibold ms-3">Usefull Links</h2>
            </div>
            <div className="text-gray-400 text-sm">
              <Link href={"/scheduleDemo"} className="flex items-center my-3">
                <span className="me-3">
                  <FaChevronRight />
                </span>{" "}
                Schedule a demo
              </Link>
              <Link href={"/about"} className="flex items-center my-3">
                <span className="me-3">
                  <FaChevronRight />
                </span>{" "}
                Company
              </Link>
              <Link href={"/contact"} className="flex items-center my-3">
                <span className="me-3">
                  <FaChevronRight />
                </span>{" "}
                Contact Us
              </Link>
              <Link href={"/"} className="flex items-center my-3">
                <span className="me-3">
                  <FaChevronRight />
                </span>{" "}
                Terms & Conditions
              </Link>
              <Link href={"/"} className="flex items-center my-3">
                <span className="me-3">
                  <FaChevronRight />
                </span>{" "}
                Privacy Policy
              </Link>
            </div>
          </div>
          <div>
            <div className="flex items-center">
              <div className="h-[5px] w-[16px] rounded-lg bg-primary"></div>
              <h2 className="text-white font-semibold ms-3">Contact Us</h2>
            </div>
            <div className="text-gray-400 text-sm my-5">
              <h3 className="text-white flex items-center">
                <span className="text-primary me-2">
                  <GoDotFill />
                </span>
                Address
              </h3>
              <div className="my-3">
                <p className="text-sm px-4 border-l border-white ">
                  Empire State Building, 350 5th Ave, New York, NY 10118
                </p>
              </div>
            </div>
            <div className="text-gray-400 text-sm my-5">
              <h3 className="text-white flex items-center">
                <span className="text-primary me-2">
                  <GoDotFill />
                </span>
                Contact
              </h3>
              <div className="mt-3 mb-2">
                <p className="text-sm px-4 border-l border-white ">
                  70504617000
                </p>
              </div>
              <div className="my-1">
                <p className="text-sm px-4 border-l border-white ">
                  contact@company.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="2xl:container 2xl:mx-auto relative mt-12 bg-red-100">
          <div>
            <hr className="w-[100%] text-gray-50 sm:block hidden" />
          </div>
          <div className="absolute bg-[#004366] text-center sm:top-[-10px] top-[-40px] left-[50%] translate-x-[-50%] lg:w-[45%] md:w-[80%] sm:w-[90%] w-[100%]">
            <p className="text-gray-400 text-sm lg:text-base">
              © 2024 | All Rights Reserved | Powered by Global Tech Solutions
            </p>
          </div>
        </div>
      </div>
    )
  );
};
