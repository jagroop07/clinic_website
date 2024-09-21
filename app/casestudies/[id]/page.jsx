"use client";

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Heading from '@/app/_components/Heading';
import Image from 'next/image';
import { AwardsandReco } from '@/app/_components/AwardsandReco';
import { WhoWeAssist } from '@/app/_components/WhoWeAssist';

const LoadingComponent = () => {
  const { id } = useParams();
  const [caseStudy, setCaseStudy] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCaseStudy = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/blogs/${id}`);
        setCaseStudy(response.data?.singleCase);
      } catch (err) {
        console.error('Error fetching case studies:', err);
        setError('Failed to fetch case studies');
      }
    };

    fetchCaseStudy();
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
     caseStudy && <>  <div className='bg-gray-50'>
      <Heading link="/contactus" linktext={"Contact us"} heading={<h1><span className='text-blue-900 mb-3'>Case Study :</span> <span className='border-b-0 font-semibold'>{caseStudy.case_title}</span></h1>} subheading={caseStudy.case_description} imagelink={caseStudy.case_coverImage} />
    </div>
      <div className='flex flex-col px-2 py-16 gap-10'>
        {caseStudy.case_section.map((e, index) => (
          <div
            key={e._id}
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} justify-center gap-x-24 align-middle`}
          >
            <div className='content-center lg:text-start text-center lg:w-[40%]'>
              <h1 className='font-black underline underline-offset-8  text-blue-900 text-3xl'>{e.section_title}</h1>
              <div className='mt-6 text-md'>
                {e.section_description}
              </div>
            </div>
            <div className='flex justify-center align-center'>
              <Image
                className='lg:w-[500px] mt-7'
                width={500}
                height={500}
                alt={e.section_title}
                src={e.section_image}
              />
            </div>
          </div>
        ))}
      </div>
      <AwardsandReco color={"bg-gray-100"} />
      <WhoWeAssist /> </>
  );
};

export default LoadingComponent;
