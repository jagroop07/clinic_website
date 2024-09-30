import { FaArrowCircleRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import GetanExpert from "./_components/GetanExpert";
import { TrustedBy } from "./_components/TrustedBy";
import { Solutions } from "./_components/Solutions";
import { WhoWeAssist } from "./_components/WhoWeAssist";
import Heading from "./_components/Heading";
import { TrustedAndClients } from "./_components/TrustedAndClients";

export default function Home() {
  const expertData = {
    backgroundImage: '/img/photo-1576091160399-112ba8d25d1d.avif',
    title: 'Get an Expert Assessment',
    description: 'Unlock the full potential of your medical practice. We understand the challenges you face in today\'s healthcare landscape, and we\'re here to help. Take the first step towards optimizing your medical practice today.',
  };

  const headingInfo = {
    heading: "Medical Billing Solutions for Healthcare Providers",
    subheading: "We provide comprehensive technical and staffing solutions for streamlined revenue cycle management and credentialing.",
    link: '/scheduleDemo',
    linktext: 'Schedule a Demo',
    imagelink: '/img/Baner-Image-1000px.webp'
  }

  return (<>
    <div className="bg-blue-50">
      <Heading heading={headingInfo.heading} subheading={headingInfo.subheading} link={headingInfo.link} linktext={headingInfo.linktext} imagelink={headingInfo.imagelink}/>
    </div>
    <div className="2xl:container 2xl:mx-auto">
      <TrustedAndClients/>
      <div className="md:flex py-10 sm:px-6 px-3">
        <div className="sm:p-6 p-1 md:max-w-[30%]">
          <h5 className="text-base font-semibold text-red-600">Knack Global</h5>
          <h1 className="text-4xl font-bold">Why Knack</h1>
          <p className="mt-6 text-gray-500">Knack helps healthcare organizations to optimize their revenue streams while minimizing administrative costs and improving patient satisfaction. Our experienced team of professionals understand the complexities of healthcare billing, Payer policies and reimbursement processes, this helps in improving our Healthcare Partner’s financial performance.</p>
          <Link href={"/scheduleDemo"} className="bg-blue-900 mt-6 py-2 px-6 w-[200px] flex rounded-sm text-white">Schedule a Demo <span className="ms-2 mt-1"><FaArrowCircleRight /></span></Link>
        </div>
        <div className="md:grid md:grid-cols-2 md:gap-8">
          <div className="p-8 shadow-[rgba(0,0,0,0.24)_0px_3px_8px] rounded-lg md:mt-0 mt-7">
            <h2 className="text-5xl tracking-[2px] font-bold">01</h2>
            <h4 className="font-semibold text-xl text-gray-700 mt-5">Experienced</h4>
            <p className="mt-5 text-gray-400">Our experienced specialists understand your needs and are invested in helping your business run smoothly so you can focus on what matters: Your Patients.</p>
          </div>
          <div className="p-8 shadow-[rgba(0,0,0,0.24)_0px_3px_8px] rounded-lg md:mt-0 mt-7">
            <h2 className="text-5xl tracking-[2px] font-bold">02</h2>
            <h4 className="font-semibold text-xl text-gray-700 mt-5">Informed</h4>
            <p className="mt-5 text-gray-400">We adapt to changing industry standards and best practices, which translates to time and revenue savings for our clients</p>
          </div>
          <div className="p-8 shadow-[rgba(0,0,0,0.24)_0px_3px_8px] rounded-lg md:mt-0 mt-7">
            <h2 className="text-5xl tracking-[2px] font-bold">03</h2>
            <h4 className="font-semibold text-xl text-gray-700 mt-5">Reliable</h4>
            <p className="mt-5 text-gray-400">Our experienced specialists understand your needs and are invested in helping your business run smoothly so you can focus on what matters: Your Patients.</p>
          </div>
          <div className="p-8 shadow-[rgba(0,0,0,0.24)_0px_3px_8px] rounded-lg md:mt-0 mt-7">
            <h2 className="text-5xl tracking-[2px] font-bold">04</h2>
            <h4 className="font-semibold text-xl text-gray-700 mt-5">Dedicated</h4>
            <p className="mt-5 text-gray-400">We partner with you to identify savings and build scalable processes. Whether it's meeting your accounts receivable goals or reducing time spent on claim resubmissions, we're your ally.</p>
          </div>
        </div>
      </div>
      <Solutions/>
      <WhoWeAssist/>
      <div className="grid sm:grid-cols-3 sm:gap-8 px-6 py-4">
        <div>
          <Image src={'/img/service-1.png'} alt="..." height={600} width={800} />
          <h1 className="text-2xl font-semibold my-3">DME Suppliers</h1>
          <Link href={'/'} className="my-2 flex text-sm text-blue-800">Learn more <span className="ms-2 mt-1"><FaArrowCircleRight /></span></Link>
        </div>
        <div className="sm:mt-0 mt-7">
          <Image src={'/img/service-2.png'} alt="..." height={600} width={800} />
          <h1 className="text-2xl font-semibold my-3">Eye Care Providers</h1>
          <Link href={'/'} className="my-2 flex text-sm text-blue-800">Learn more <span className="ms-2 mt-1"><FaArrowCircleRight /></span></Link>
        </div>
        <div className="sm:mt-0 mt-7">
          <Image src={'/img/service-3.png'} alt="..." height={600} width={800} />
          <h1 className="text-2xl font-semibold my-3">EMR/EHR Software Providers</h1>
          <Link href={'/'} className="my-2 flex text-sm text-blue-800">Learn more <span className="ms-2 mt-1"><FaArrowCircleRight /></span></Link>
        </div>
        <div className="sm:mt-0 mt-7">
          <Image src={'/img/service-4.png'} alt="..." height={600} width={800} />
          <h1 className="text-2xl font-semibold my-3">Hospitals & Health Systems</h1>
          <Link href={'/'} className="my-2 flex text-sm text-blue-800">Learn more <span className="ms-2 mt-1"><FaArrowCircleRight /></span></Link>
        </div>
        <div className="sm:mt-0 mt-7">
          <Image src={'/img/service-5.png'} alt="..." height={600} width={800} />
          <h1 className="text-2xl font-semibold my-3">Specialist Physician Groups</h1>
          <Link href={'/'} className="my-2 flex text-sm text-blue-800">Learn more <span className="ms-2 mt-1"><FaArrowCircleRight /></span></Link>
        </div>
        <div className="sm:mt-0 mt-7">
          <Image src={'/img/service-6.png'} alt="..." height={600} width={800} />
          <h1 className="text-2xl font-semibold my-3">Medical Billing Service Providers</h1>
          <Link href={'/'} className="my-2 flex text-sm text-blue-800">Learn more <span className="ms-2 mt-1"><FaArrowCircleRight /></span></Link>
        </div>
      </div>
        <TrustedBy/>
      <div>
        <GetanExpert
          backgroundImage={expertData.backgroundImage}
          title={expertData.title}
          description={expertData.description}
        />
      </div>
    </div>
  </>
  );
}
