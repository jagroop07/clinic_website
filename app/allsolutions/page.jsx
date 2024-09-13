import React from 'react'
import Heading from '../_components/Heading'
import OurSolutions from '../_components/OurSolutions'
import Revenuecycle from '../_components/Revenuecycle'
import { AwardsandReco } from '../_components/AwardsandReco'
import GetanExpert from '../_components/GetanExpert'

const page = () => {
  const expertData = {
    backgroundImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    title: 'Get an Expert Assessment',
    description: 'Unlock the full potential of your medical practice. We understand the challenges you face in today\'s healthcare landscape, and we\'re here to help. Take the first step towards optimizing your medical practice today.',
    link: '/expert-assessment',
  };
  return (
    <>
    <div className=''><Heading/>
    <OurSolutions/>
    <Revenuecycle/>
    <AwardsandReco/>
    <GetanExpert 
        backgroundImage={expertData.backgroundImage} 
        title={expertData.title} 
        description={expertData.description} 
        link={expertData.link} 
      />
    </div>
  
    </>
  )
}

export default page