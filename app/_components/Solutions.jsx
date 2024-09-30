import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import Link from "next/link";

export const Solutions = () => {
    return (
        <>
            <div className="flex md:flex-row flex-col md:items-start bg-gray-100 py-12 sm:px-6 px-4 relative">
                <div className="grid md:grid-cols-2 md:gap-7 md:order-1 order-2">
                    <div className="p-10 border border-1 border-white rounded-md md:mt-0 mt-6">
                        <BsGraphUpArrow className="text-3xl" />
                        <h2 className="text-xl mt-8">End-to-End Revenue Cycle Management</h2>
                        <Link href={'/'} className="flex text-sm mt-8">Learn more <span className="ms-2 mt-1"><FaArrowRight className="text-blue-900" /></span></Link>
                    </div>
                    <div className="p-10 border border-1 border-white rounded-md md:mt-0 mt-6">
                        <BsGraphUpArrow className="text-3xl" />
                        <h2 className="text-xl mt-8">Provider Credentialing Services</h2>
                        <Link href={'/'} className="flex text-sm mt-8">Learn more <span className="ms-2 mt-1"><FaArrowRight className="text-blue-900" /></span></Link>
                    </div>
                    <div className="p-10 border border-1 border-white rounded-md md:mt-0 mt-6">
                        <BsGraphUpArrow className="text-3xl" />
                        <h2 className="text-xl mt-8">Medical Coding Services</h2>
                        <Link href={'/'} className="flex text-sm mt-8">Learn more <span className="ms-2 mt-1"><FaArrowRight className="text-blue-900" /></span></Link>
                    </div>
                    <div className="p-10 border border-1 border-white rounded-md md:mt-0 mt-6">
                        <BsGraphUpArrow className="text-3xl" />
                        <h2 className="text-xl mt-8">Denial Management Services</h2>
                        <Link href={'/'} className="flex text-sm mt-8">Learn more <span className="ms-2 mt-1"><FaArrowRight className="text-blue-900" /></span></Link>
                    </div>
                    <div className="p-10 border border-1 border-white rounded-md md:mt-0 mt-6">
                        <BsGraphUpArrow className="text-3xl" />
                        <h2 className="text-xl mt-8">Charge Entry & Charge Audit</h2>
                        <Link href={'/'} className="flex text-sm mt-8">Learn more <span className="ms-2 mt-1"><FaArrowRight className="text-blue-900" /></span></Link>
                    </div>
                    <div className="p-10 border border-1 border-white rounded-md md:mt-0 mt-6">
                        <BsGraphUpArrow className="text-3xl" />
                        <h2 className="text-xl mt-8">Accounts Receivable Services</h2>
                        <Link href={'/'} className="flex text-sm mt-8">Learn more <span className="ms-2 mt-1"><FaArrowRight className="text-blue-900" /></span></Link>
                    </div>
                </div>
                <div className="md:max-w-[40%] md:mt-0 mt-10 md:order-2 order-1 md:sticky top-2 sm:px-8 ">
                    <h5 className="text-base font-semibold text-red-600">Knack Global</h5>
                    <h1 className="text-4xl font-bold">Our Solutions</h1>
                    <p className="mt-6 text-gray-600">From claims processing and denial management to accurate coding and efficient billing, our solutions are tailored to optimize your financial performance. Additionally, our provider credentialing services ensure that your healthcare organization meets all regulatory requirements, enabling smooth operations and enhanced credibility.</p>
                    <Link href={"/allsolutions"} className="bg-blue-900 mt-6 py-2 ps-3 w-[200px] flex rounded-sm text-white">Browse our Solutions <span className="ms-2 mt-1"><FaArrowCircleRight /></span></Link>
                </div>
            </div>
        </>
    )
}