import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ContactForm } from "../_components/ContactForm";
import { IoLocationSharp } from "react-icons/io5";
import { BiPhone } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";
import { LocationCard } from "../_components/LocationCard";

const CardOptionUs = [
    {
        img: "/img/New-Jersey.png",
        heading: "New Jersey",
        address: "10 Woodbridge Center Drive, Suite 425, Woodbridge, NJ 07095.",
        phone1: "732-596-0110 Ext.216",
        phone2: "732-596-0114"
    },
    {
        img: "/img/New-Jersey.png",
        heading: "New Jersey",
        address: "10 Woodbridge Center Drive, Suite 425, Woodbridge, NJ 07095.",
        phone1: "732-596-0110 Ext.216",
        phone2: "732-596-0114"
    },
    {
        img: "/img/New-Jersey.png",
        heading: "New Jersey",
        address: "10 Woodbridge Center Drive, Suite 425, Woodbridge, NJ 07095.",
        phone1: "732-596-0110 Ext.216",
        phone2: "732-596-0114"
    },
    {
        img: "/img/New-Jersey.png",
        heading: "New Jersey",
        address: "10 Woodbridge Center Drive, Suite 425, Woodbridge, NJ 07095.",
        phone1: "732-596-0110 Ext.216",
        phone2: "732-596-0114"
    }
]

export default function ContactUs() {
    return (
        <div className="2xl:container 2xl:mx-auto">
            <div className="md:px-10 px-3 bg-[url('/img/bg_contact_us.png')] bg-cover bg-center md:py-10 py-5">
                <div className="lg:grid lg:grid-cols-2 md:rounded-3xl rounded-lg shadow-[rgba(0,0,0,0.24)_0px_3px_8px] text-white overflow-hidden">
                    <div className="sm:p-9 p-3 bg-[#004366]">
                        <h1 className="text-4xl font-semibold">Get In Touch With Us</h1>
                        <p className="text-gray-400 my-3">Fill out the form and a Knack expert will get in touch about your practice assessment. </p>
                        <div className="flex gap-6 my-10">
                            <div className="bg-gray-800 content-center px-3 rounded-full">
                                <MdEmail className="text-2xl text-white" />
                            </div>
                            <div>
                                <h6 className="font-semibold text-gray-400">EMAIL US</h6>
                                <p>example@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex gap-6 my-10">
                            <div className="bg-gray-800 content-center px-3 rounded-full">
                                <BiPhone className="text-2xl text-white" />
                            </div>
                            <div>
                                <h6 className="font-semibold text-gray-400">Phone number</h6>
                                <p>+1 732-596-0110</p>
                            </div>
                        </div>
                        <div className="flex gap-6 my-10">
                            <div>
                                <div className="bg-gray-800 content-center px-3 py-3 rounded-full">
                                    <IoLocationSharp className="text-2xl text-white" />
                                </div>
                            </div>
                            <div>
                                <h6 className="font-semibold text-gray-400">Address</h6>
                                <p>10 Woodbridge Center Drive,
                                    Suite 425 Woodbridge, NJ 07095</p>
                            </div>
                        </div>
                        <div className="flex gap-5 items-center my-5">
                            <div className="bg-white h-[3px] w-[40px]"></div>
                            <div>
                                <h5 className="font-semibold">Connect with us:</h5>
                            </div>
                        </div>
                        <div className="flex gap-5 my-5">
                            <Link href={'/'} className="px-3 py-3 rounded-lg transition-all duration-800 ease-linear bg-gray-800 hover:bg-white hover:text-blue-950">
                                <FaFacebook className="text-2xl" />
                            </Link>
                            <Link href={'/'} className="px-3 py-3 rounded-lg transition-all duration-800 ease-linear bg-gray-800 hover:bg-white hover:text-blue-950">
                                <BsTwitter className="text-2xl" />
                            </Link>
                            <Link href={'/'} className="px-3 py-3 rounded-lg transition-all duration-800 ease-linear bg-gray-800 hover:bg-white hover:text-blue-950">
                                <BsLinkedin className="text-2xl" />
                            </Link>
                        </div>
                    </div>
                    <div className="bg-white sm:p-9 p-3">
                        <ContactForm />
                    </div>
                </div>
            </div>
            <div className="py-10">
                <h1 className="sm:text-5xl text-2xl font-bold my-4 text-center">Our Global Presence</h1>
                <div className="flex justify-center my-8">
                    <Image src={'/img/global.png'} alt="..." height={1200} width={1200} />
                </div>
            </div>
            <div >
                <h1 className="sm:text-5xl text-2xl font-bold text-center my-4">Our Knack Global Team</h1>
                <div className="sm:mb-32 mb-20">
                    <h3 className="sm:text-4xl text-2xl font-semibold text-center text-blue-900">US Locations</h3>
                    <div className="grid lg:grid-cols-4 sm:grid-cols-2 gird-cols-1 lg:px-16 sm:px-12 px-3 gap-4 my-10">
                        {CardOptionUs.map((card) => <LocationCard key={card.heading} heading={card.heading} img={card.img} address={card.address} phone1={card.phone1} phone2={card.phone2} />)}
                    </div>
                </div>
                <div className="my-8">
                    <h3 className="sm:text-4xl text-2xl font-semibold text-center text-blue-900">India Locations</h3>
                    <div className="grid lg:grid-cols-4 sm:grid-cols-2 gird-cols-1 lg:px-20 sm:px-12 px-3 gap-4 my-10">
                        {CardOptionUs.map((card) => <LocationCard key={card.heading} heading={card.heading} img={card.img} address={card.address} phone1={card.phone1} phone2={card.phone2} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}