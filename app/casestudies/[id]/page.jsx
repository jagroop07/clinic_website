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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCaseStudy = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/blogs/${id}`);
        setCaseStudy(response.data.singleCase);
      } catch (err) {
        console.error('Error fetching case studies:', err);
        setError('Failed to fetch case studies');
      } finally {
        setLoading(false);
      }
    };

    fetchCaseStudy();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (<>   <div className='bg-blue-50'>
        <Heading link="/contactus" linktext={"Contact us"} heading={`Case Study:${caseStudy.case_title}`} subheading={caseStudy.case_description} imagelink={caseStudy.case_coverImage}/>
    </div>
    <div className='flex flex-col gap-10'>
        {caseStudy.case_section.map((e, index) => (
          <div
            key={e._id}
            className={`flex p-3 flex-col ${index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} justify-center gap-5 align-middle`}
          >
            <div className='flex justify-center align-center'>
              <Image
                className='lg:w-[500px] mt-7' 
                width={500} 
                height={500} 
                alt={e.section_title} 
                src={e.section_image}
              />
            </div>
            <div className='content-center lg:w-[40%]'>
              <h1 className='font-black underline underline-offset-8  text-blue-900 text-3xl'>{e.section_title}</h1>
              <div className='mt-6 text-xl'>
                {e.section_description}
              </div>
           
            </div>
          </div>
        ))}
      </div>
      <AwardsandReco/>
      <WhoWeAssist/>
    </>
 
    
  );
};

export default LoadingComponent;
