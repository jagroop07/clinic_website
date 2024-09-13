import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import Clients from "./_components/Clients";
import GetanExpert from "./_components/GetanExpert";

export default function Home() {
  const expertData = {
    backgroundImage: '/img/photo-1576091160399-112ba8d25d1d.avif',
    title: 'Get an Expert Assessment',
    description: 'Unlock the full potential of your medical practice. We understand the challenges you face in today\'s healthcare landscape, and we\'re here to help. Take the first step towards optimizing your medical practice today.',
    link: '/expert-assessment',
  };

  return (<>
    <div className="md:flex gap-4 py-4 md:px-10 bg-blue-50">
      <div className="content-center sm:px-8 px-4">
        <h1 className="text-4xl font-bold my-10">Medical Billing Solutions for Healthcare Providers</h1>
        <p className="pb-4">We provide comprehensive technical and staffing solutions for streamlined revenue cycle management and credentialing.</p>
        <Link href={"/"} className="bg-blue-900 mt-2 py-2 px-6 w-[200px] flex rounded-lg text-white">Schedule a Demo <span className="ms-2 mt-1"><FaArrowCircleRight /></span></Link>
      </div>
      <div className="md:mt-0 md:content-center mt-8">
        <Image src={"/img/Baner-Image-1000px.webp"} alt="..." height={1100} width={1100} />
      </div>
    </div>
    <div>
      <div className="text-blue-900 md:flex md:justify-center text-center py-14">
        <div className="md:w-[30%] md:mt-0 mt-10">
          <h1 className="flex-grow md:text-5xl text-3xl font-normal tracking-[1px] mb-4">750+</h1>
          <p className="md:text-xl text-base">Medical Practices Served</p>
        </div>
        <div className="md:w-[30%] md:mt-0 mt-10">
          <h1 className="flex-grow md:text-5xl text-3xl font-normal tracking-[1px] mb-4">125M</h1>
          <p className="md:text-xl text-base">Transactions Per Year</p>
        </div>
        <div className="md:w-[30%] md:mt-0 mt-10">
          <h1 className="flex-grow md:text-5xl text-3xl font-normal tracking-[1px] mb-4">95%</h1>
          <p className="md:text-xl text-base">Collection Rate</p>
        </div>
      </div>
      <div className="px-6 py-14">
        <Clients />
      </div>
      <div className="md:flex py-10 sm:px-6 px-3">
        <div className="sm:p-6 p-1 md:max-w-[30%]">
          <h5 className="text-base font-semibold text-red-600">Knack Global</h5>
          <h1 className="text-4xl font-bold">Why Knack</h1>
          <p className="mt-6 text-gray-500">Knack helps healthcare organizations to optimize their revenue streams while minimizing administrative costs and improving patient satisfaction. Our experienced team of professionals understand the complexities of healthcare billing, Payer policies and reimbursement processes, this helps in improving our Healthcare Partner’s financial performance.</p>
          <Link href={"/"} className="bg-blue-900 mt-6 py-2 px-6 w-[200px] flex rounded-sm text-white">Schedule a Demo <span className="ms-2 mt-1"><FaArrowCircleRight /></span></Link>
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
      <div className="md:flex md:items-start bg-gray-100 py-12 sm:px-6 px-4 relative">
        <div className="grid md:grid-cols-2 md:gap-7">
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
        <div className="md:max-w-[40%] md:mt-0 mt-10 sticky top-2 sm:px-8 ">
          <h5 className="text-base font-semibold text-red-600">Knack Global</h5>
          <h1 className="text-4xl font-bold">Our Solutions</h1>
          <p className="mt-6 text-gray-600">From claims processing and denial management to accurate coding and efficient billing, our solutions are tailored to optimize your financial performance. Additionally, our provider credentialing services ensure that your healthcare organization meets all regulatory requirements, enabling smooth operations and enhanced credibility.</p>
          <Link href={"/"} className="bg-blue-900 mt-6 py-2 ps-3 w-[200px] flex rounded-sm text-white">Browse our Solutions <span className="ms-2 mt-1"><FaArrowCircleRight /></span></Link>
        </div>
      </div>
      <div className="md:flex py-16 px-6">
        <div className="md:max-w-[50%] md:mt-0 mt-10 sm:px-8">
          <h5 className="text-base font-semibold text-red-600 my-4">Knack Global</h5>
          <h1 className="text-4xl font-bold">Who We Assist​</h1>
          <p className="mt-6 text-gray-600">Knack Global is a comprehensive solution provider for Revenue Cycle Management, Technology and Staffing solutions for healthcare providers. From expansive hospital systems to specialized outpatient care, we have the expertise you can trust to simplify your billing process and get paid you faster.</p>
          <Link href={"/"} className="bg-blue-900 mt-6 py-2 px-6 w-[180px] flex rounded-sm text-white">Learn More <span className="ms-2 mt-1"><FaArrowCircleRight /></span></Link>
        </div>
        <div className="md:mt-0 mt-8">
          <Image src={'/img/Who-we-assist-1-1536x901.png'} alt="..." height={1000} width={1000} />
        </div>
      </div>
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
      <div className="py-12 bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold">TRUSTED BY</h1>
          <h5 className="text-sm text-gray-700 my-3">750+ MEDICAL PRACTICES SERVED</h5>
        </div>
        <div className="grid md:grid-cols-3 gap-6 sm:px-10 px-3 mt-12">
          <div className="p-6 flex flex-col shadow-[rgba(0,0,0,0.24)_0px_3px_8px] bg-white rounded-lg items-center">
            <Image src={"/img/testi-2-1.webp"} alt="..." height={150} width={150} />
            <p className="text-center my-3 text-gray-600">During this pandemic and period of lockdown, Knack not only demonstrated their proactive approach to ensuring uninterrupted service delivery but also provide transparency in communication throughout, a true testament to the partnership we have built with Knack over the years.</p>
            <h4 className="font-semibold my-8">VP, RCM Operations</h4>
            <p className="text-sm text-gray-400">@publicly traded EMR software provider</p>
          </div>
          <div className="p-6 flex flex-col shadow-[rgba(0,0,0,0.24)_0px_3px_8px] bg-white rounded-lg items-center">
            <Image src={"/img/testi-1.webp"} alt="..." height={150} width={150} />
            <p className="text-center my-3 text-gray-600">I am really excited about our partnership in Accounts Receivable and I believe we are making the right decision to contribute to our success in Accounts Receivable.</p>
            <h4 className="font-semibold my-8">VP, RCM Operations</h4>
            <p className="text-sm text-gray-400">@publicly traded EMR software provider</p>
          </div>
          <div className="p-6 flex flex-col shadow-[rgba(0,0,0,0.24)_0px_3px_8px] bg-white rounded-lg items-center">
            <Image src={"/img/testi-2.webp"} alt="..." height={150} width={150} />
            <p className="text-center my-3 text-gray-600">The Knack team is an asset to our organization. Thanks again for being great partners, and a huge thank you to the teams for working endlessly.</p>
            <h4 className="font-semibold my-8">Sr Director of Operations</h4>
            <p className="text-sm text-gray-400">@publicly traded EMR software provider</p>
          </div>
        </div>
      </div>
      <div>
        <GetanExpert
          backgroundImage={expertData.backgroundImage}
          title={expertData.title}
          description={expertData.description}
          link={expertData.link}
        />
      </div>
    </div>
  </>
  );
}
