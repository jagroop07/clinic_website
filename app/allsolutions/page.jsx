import React from 'react'
import Heading from '../_components/Heading'
import OurSolutions from '../_components/OurSolutions'
import Revenuecycle from '../_components/Revenuecycle'
import { AwardsandReco } from '../_components/AwardsandReco'
import GetanExpert from '../_components/GetanExpert'

const page = () => {
  const expertData = {
    backgroundImage: '/img/photo-1576091160399-112ba8d25d1d.avif',
    title: 'Get an Expert Assessment',
    description: 'Unlock the full potential of your medical practice. We understand the challenges you face in today\'s healthcare landscape, and we\'re here to help. Take the first step towards optimizing your medical practice today.',
    link: '/expert-assessment',
  };
  return (
    <>
    <div>
      <div className='bg-blue-50'>
        <Heading heading="	
Comprehensive Revenue Cycle Management" subheading={"We provide comprehensive technical and staffing solutions for streamlined revenue cycle management and credentialing."} link={"/"} linktext={"contact us"} imagelink="/img/hero-image-1536x1159.png"/>
      </div>
      <div className='2xl:container 2xl:mx-auto'>
      <OurSolutions/>
      <div className='sm:px-6'>
        <Revenuecycle/>
      </div>
      <AwardsandReco/>
      <GetanExpert 
          backgroundImage={expertData.backgroundImage} 
          title={expertData.title} 
          description={expertData.description} 
          link={expertData.link} 
        />
      </div>
    </div>
  
    </>
  )
}

export default page