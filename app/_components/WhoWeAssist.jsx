import Link from "next/link"
import Image from "next/image"
import { FaArrowCircleRight } from "react-icons/fa";

export const WhoWeAssist = () => {
    return (
        <>
            <div className="md:flex py-16 bg-blue-100 md:px-6 px-2">
                <div className="md:max-w-[50%] md:mt-0 mt-10 sm:px-8">
                    <h5 className="text-base font-semibold text-red-600 my-4">Knack Global</h5>
                    <h1 className="text-4xl font-bold">Who We Assist​</h1>
                    <p className="mt-6 text-gray-600">Knack Global is a comprehensive solution provider for Revenue Cycle Management, Technology and Staffing solutions for healthcare providers. From expansive hospital systems to specialized outpatient care, we have the expertise you can trust to simplify your billing process and get paid you faster.</p>
                    <Link href={"/"} className="bg-blue-900 mt-6 py-2 px-6 w-[180px] flex rounded-xl text-white">Learn More <span className="ms-2 mt-1"><FaArrowCircleRight /></span></Link>
                </div>
                <div className="md:mt-0 mt-8">
                    <Image src={'/img/Who-we-assist-1-1536x901.png'} alt="..." height={1000} width={1000} />
                </div>
            </div>
        </>
    )
}