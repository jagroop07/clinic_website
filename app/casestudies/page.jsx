import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import Heading from '../_components/Heading';

// Async function to fetch case studies using axios
async function getCaseStudies() {
  try {
    const response = await axios.get('http://localhost:3000/api/blogs');
    return response.data.caseStudy; // Adjust according to your API structure
  } catch (error) {
    console.error('Error fetching case studies:', error);
    throw new Error('Failed to fetch case studies');
  }
}

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies();
  return (
    <>
      <div className='bg-blue-50'>
        <Heading 
          link={"/casestudies"} 
          linktext={"VIEW MORE"} 
          heading={"Case Studies"} 
          subheading={"Dive into success stories that showcase how our tailored strategies and innovative technologies have transformed healthcare organizations."} 
          imagelink={"/img/hero-image-1536x1159.png"}
        />
      </div>
      <div className='flex flex-col gap-10'>
        {caseStudies.map((e, index) => (
          <div
            key={e._id}
            className={`flex p-3 flex-col ${index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} justify-center gap-5 align-middle`}
          >
            <div className='flex justify-center align-center'>
              <Image 
                className='lg:w-[500px] mt-7' 
                width={500} 
                height={500} 
                alt={e.case_title} 
                src={e.case_coverImage}
              />
            </div>
            <div className='content-center lg:w-[40%]'>
              <h1 className='font-black text-3xl'>{e.case_title}</h1>
              <div className='mt-6 text-xl'>
                {e.case_description}
              </div>
              <Link href={`/casestudies/${e._id}`} className="bg-blue-900 mt-4 py-2 px-6 w-[160px] flex gap-2 rounded-lg text-white">
                Read more
                <span className="ms-2 mt-1"><FaArrowAltCircleRight /></span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
