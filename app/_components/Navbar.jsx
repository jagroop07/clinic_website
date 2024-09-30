"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowBigDownDash, ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import { FaArrowCircleRight } from "react-icons/fa";
import { usePathname } from "next/navigation";
import NavbarProductsList from "./NavbarProductsList";
const navItems = [
  //   { name: 'Home', href: '/' },
  { name: "Solutions", href: "/allsolutions", hover: true },
  { name: "Case Studies", href: "/casestudies" },
  //   { name: 'Printing', href: '/services' },
  { name: "Company", href: "/about" },
  { name: "Contact us", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);
  return (
    !pathname.startsWith("/admin") && (
      <nav className={` bg-white relative   shadow-xl z-50 w-full md:px-16 h-[70px]`}>
        <div className="container mx-auto px-2 2xl:px-0 h-full relative">
          <div className="flex items-center justify-between h-full">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0 flex items-center">
                <Image
                  width={400}
                  height={60}
                  className="w-auto h-[60px]"
                  src={"/img/Final-Logo-2.svg"}
                  alt="Global Tech Solution"
                />
              </Link>
            </div>
            <div className="hidden lg:ml-6 lg:flex lg:space-x-8 items-center">
              {navItems.map((item) => {
                return item?.hover ? (
                  <div
                    key={item.name}
                    className={`text-black flex items-center text-sm font-medium group h-[70px]`}
                  >
                    <Link
                      href={item.href}
                      className={`${
                        item?.href == pathname
                          ? "border-primary"
                          : "border-transparent hover:border-gray-300"
                      } border-b-2 p-2 flex items-center gap-1 cursor-pointer`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown size={"20"} className="mt-[2px]" />
                    </Link>

                    {item?.hover && (
                      <div className="rounded-b-xl h-0 group-hover:h-auto group-hover:animate-openWithBottomSlide w-full bg-white text-black absolute left-0 top-[100%] transition-all duration-500 shadow-xl overflow-hidden">
                        <div className="hidden group-hover:block h-full">
                          <NavbarProductsList />
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center text-sm font-medium group h-[70px]`}
                  >
                    <div
                      className={`${
                        item?.href == pathname
                          ? "border-primary"
                          : "border-transparent hover:border-gray-300"
                      } border-b-2 p-2`}
                    >
                      {item.name}
                    </div>

                    {item?.hover && (
                      <div className="rounded-xl h-0 group-hover:h-auto group-hover:animate-openWithBottomSlide w-full text-black absolute left-0 top-[100%] transition-all duration-500 shadow-xl overflow-hidden z-50">
                        <div className="hidden group-hover:block relative">
                          <NavbarProductsList />
                        </div>
                      </div>
                    )}
                  </Link>
                );
              })}
            </div>
            <div className="-mr-2 flex items-center lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
            <div className="hidden lg:ml-6 lg:flex lg:items-center">
              <Link
                href={"/scheduleDemo"}
                className="bg-blue-900 hover:bg-blue-900-dark  py-2 px-6  flex  gap-2 rounded-full text-white"
              >
                Schedule a Demo
                <span className="ms-2 mt-1">
                  <FaArrowCircleRight />
                </span>
              </Link>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden relative bg-white">
            <div className="pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                    item?.href === pathname
                      ? "bg-blue-50 border-primary text-primary"
                      : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="mt-3 space-y-1">
                <Link
                  href={"scheduleDemo"}
                  className="block w-full text-left px-4 py-2 text-base font-medium text-white bg-blue-900 hover:bg-blue-900-dark"
                >
                  Schedule a Demo
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* {
        <div className={`w-full h-0 bg-white shadow-xl ${hoverLink ? "navbar-dropdown-active" : ""}`}>
          {hoverLink}
        </div>
      } */}
      </nav>
    )
  );
}
