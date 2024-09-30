import AboutSlider from "../_components/AboutSlider";
import { GoDotFill } from "react-icons/go";
import { GiJourney } from "react-icons/gi";
import { GoGoal } from "react-icons/go";
import Clients from "../_components/Clients";
import Link from "next/link";
import { AwardsandReco } from "../_components/AwardsandReco";
import GetanExpert from "../_components/GetanExpert";
import { BiSolidArrowFromLeft } from "react-icons/bi";
import { AboutCard } from "../_components/AboutCard";

const expertData = {
    backgroundImage: '/img/photo-1576091160399-112ba8d25d1d.avif',
    title: 'Get an Expert Assessment',
    description: 'Unlock the full potential of your medical practice. We understand the challenges you face in today\'s healthcare landscape, and we\'re here to help. Take the first step towards optimizing your medical practice today.',
    link: '/expert-assessment',
};

const aboutData = [
    {
        img: '/img/rajiv-about.png',
        description: 'Arvind drives overall company strategy and ensures high-quality client delivery',
        designation: 'President',
        name: "Arvind Ramakrishnan"
    },
    {
        img: '/img/rajiv-about.png',
        description: 'Anurag leads all aspects of Knack’s India operations',
        designation: 'Head of Knack India',
        name: "Anurag Wahi"
    },
    {
        img: '/img/rajiv-about.png',
        description: 'Jon is responsible for Knack’s sales strategy into diverse practice groups',
        designation: 'Chief Sales Officer',
        name: "Jon Weeding"
    },
    {
        img: '/img/rajiv-about.png',
        description: 'Laurie leads global delivery operations and acquisition integration',
        designation: 'Chief Operations Officer',
        name: "Laurie Zabel"
    }
]

export default function AboutUs() {
    return (
        <div className="2xl:container 2xl:mx-auto">
            <div className="py-14 px-3">
                <AboutSlider />
            </div>
            <div className="bg-[#004366] text-white sm:p-16 p-4">
                <h4 className="text-sm font-semibold">Knack Global</h4>
                <h1 className="sm:text-4xl text-2xl font-semibold">About Knack Global</h1>
                <div className="flex sm:items-center items-start gap-5 my-7">
                    <div className="sm:mt-0 mt-1">
                        <GoDotFill />
                    </div>
                    <div>
                        <p>Knack empowers leading healthcare delivery organizations with end-to-end revenue cycle services and provider solutions that generate efficiencies, accelerate payments, and deliver operational insights, freeing caregivers to focus on high-quality patient care.</p>
                    </div>
                </div>
                <div className="flex sm:items-center items-start gap-5">
                    <div className="sm:mt-0 mt-1">
                        <GoDotFill />
                    </div>
                    <div>
                        <p>Knack empowers leading healthcare delivery organizations with end-to-end revenue cycle services and provider solutions that generate efficiencies, accelerate payments, and deliver operational insights, freeing caregivers to focus on high-quality patient care.</p>
                    </div>
                </div>
            </div>
            <div className="md:px-8 px-3 py-16 grid md:grid-cols-2 grid-cols-1 gap-8 bg-gray-100">
                <div className="sm:p-7 p-3 border-b-8 rounded-t-xl border-blue-900 bg-white">
                    <div className="flex items-center gap-5">
                        <div className="bg-gray-200 rounded-xl px-4 py-4">
                            <GiJourney className="text-3xl text-blue-900" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold">Our Journey</h2>
                        </div>
                    </div>
                    <p className="my-5 text-gray-700 text-lg">Knack Global began offering core revenue cycle management services in 2007. Since then, Knack has rapidly expanded, developing a full end-to-end RCM solution and adding IT solutions, software, and workforce management services.</p>
                </div>
                <div className="sm:p-7 p-3 border-b-8 rounded-t-xl border-blue-900 bg-white">
                    <div className="flex items-center gap-5">
                        <div className="bg-gray-200 rounded-xl px-4 py-4">
                            <GoGoal className="text-3xl text-blue-900" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold">Our Goals and Values</h2>
                        </div>
                    </div>
                    <p className="my-5 text-gray-700 text-lg">Our Values are guiding principles that determine the way we function, collaborate, transact and serve businesses. They have been the crux of our existence and business functionality.</p>
                </div>
            </div>
            <div className="bg-[#004366] grid md:grid-cols-2 grid-cols-1">
                <div className="text-white flex flex-col items-start md:p-24 p-6">
                    <h4 className="text-sm font-semibold">Knack Global</h4>
                    <h2 className="text-5xl font-semibold my-5 pb-4">Our new Jaipur Location</h2>
                    <Link href={'/contact'} className="flex items-center gap-5 px-5 py-3 my-3 font-semibold rounded-lg bg-white text-blue-900">Contact Us <span><BiSolidArrowFromLeft /></span></Link>
                </div>
                <div className="md:h-auto h-[300px]">
                    <iframe height={"100%"} width={"100%"} src="https://www.youtube.com/embed/rNCfjOH8Nvc?si=wR2a-DcaDfzNgLbF" frameborder="0" allow="encrypted-media; gyroscope;" referrerpolicy="strict-origin-when-cross-origin"></iframe>
                </div>
            </div>
            <div className="p-10">
                <Clients />
            </div>
            <div className="bg-[#004366] py-16 px-2 sm:px-7">
                <div className="text-white text-center">
                    <h1 className="sm:text-5xl text-3xl font-semibold">Our Knack Global Team</h1>
                    <p className="my-5 sm:text-lg text-sm">Introducing the brilliant minds behind our company’s success – our exceptional team!  With a diverse range of expertise and unwavering dedication, they are the driving force behind our achievements. Each member brings unique talents, experience, and a shared passion for delivering excellence</p>
                </div>
                <div className="flex justify-center my-8">
                    <AboutCard img={'/img/rajiv-about.png'} name={"Rajiv Sharma"} designation={'Founder, CEO'} description={'Rajiv founded Knack and leads all aspects of the company’s strategy'}/>
                </div>
                <div className="grid lg:grid-cols-4 justify-items-center sm:grid-cols-2 grid-cols-1 gap-5">
                    {aboutData.map((about) => <AboutCard img={about.img} name={about.name} designation={about.designation} description={about.description}/>)}
                </div>
            </div>
            <div className="sm:px-10 sm:py-16 py-8 px-3">
                <h6 className="my-3 font-semibold text-red-700">Knack Global</h6>
                <h1 className="sm:text-4xl text-3xl font-semibold mb-5">Learn More About Knack Global</h1>
                <p className="text-gray-700">With our deep industry knowledge, cutting-edge technology, and personalized solutions, we empower healthcare providers to thrive in today’s challenging landscape.  Discover the advantages of partnering with us for your revenue cycle management needs.</p>
                <div className="flex md:flex-row flex-col gap-7 my-6">
                    <div className="bg-gray-100 sm:px-5 px-2 py-3 rounded-xl">
                        <h3 className="font-semibold text-3xl my-4">Our Solutions</h3>
                        <p className="mb-4">From claims processing and denial management to accurate coding and efficient billing, our solutions are tailored to optimize your financial performance. Additionally, our provider credentialing services ensure that your healthcare organization meets all regulatory requirements, enabling smooth operations and enhanced credibility.</p>
                    </div>
                    <div className="bg-gray-100 px-5 py-3 rounded-xl">
                        <h3 className="text-3xl font-semibold my-4">Who we serve</h3>
                        <p className="mb-4">We proudly serve a diverse range of healthcare organizations for their Revenue Cycle Management (RCM) and provider credentialing needs. Whether you’re a hospital, medical practice, healthcare facility, or billing company, our tailored solutions are designed to meet your unique requirements. Partner with us today and experience the difference!</p>
                    </div>
                </div>
            </div>
            <AwardsandReco />
            <GetanExpert
                backgroundImage={expertData.backgroundImage}
                title={expertData.title}
                description={expertData.description}
                link={expertData.link}
            />
        </div>
    )
}