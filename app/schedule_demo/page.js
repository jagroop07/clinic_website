import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { DemoForm } from "../_components/DemoForm";
import { Solutions } from "../_components/Solutions";
import { TrustedBy } from "../_components/TrustedBy";
import { TrustedAndClients } from "../_components/TrustedAndClients";

export default function ScheduleDemo() {
    return (
        <div className="2xl:container 2xl:mx-auto">
            <div className="lg:grid lg:grid-cols-2 sm:px-10 px-3 gap-5 text-white sm:py-16 py-10 bg-gray-200 bg-[url('/img/demo_background.png')] bg-cover bg-center">
                <div className="sm:p-6 p-3">
                    <h1 className="text-4xl font-semibold">Interested in learning more about AI.BOT Technology?</h1>
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
                    <div className="flex gap-5 items-center my-5">
                        <div className="bg-white h-[3px] w-[40px]"></div>
                        <div className="">
                            <h5 className="font-semibold">Connect with us:</h5>
                        </div>
                    </div>
                    <div className="flex gap-5 my-5">
                        <div className="px-3 py-3 rounded-lg transition-all duration-800 ease-linear bg-gray-800 hover:bg-white hover:text-blue-950">
                            <FaFacebook className="text-2xl" />
                        </div>
                        <div className="px-3 py-3 rounded-lg transition-all duration-800 ease-linear bg-gray-800 hover:bg-white hover:text-blue-950">
                            <BsTwitter className="text-2xl" />
                        </div>
                        <div className="px-3 py-3 rounded-lg transition-all duration-800 ease-linear bg-gray-800 hover:bg-white hover:text-blue-950">
                            <BsLinkedin className="text-2xl" />
                        </div>
                    </div>
                </div>
                <div className="bg-white sm:p-7 p-3 rounded-lg">
                    <DemoForm/>
                </div>
            </div>
            <TrustedAndClients/>
            <TrustedBy/>
            <Solutions/>
        </div>
    )
}