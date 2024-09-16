import React from 'react'
import Heading from '../../_components/Heading'
import Solution from '../../_components/Solution'

const page = () => {
  return (
    <>
      <div className='bg-blue-50'>
        <Heading heading="Provider Enrollment & Credentialing Made Simple" subheading={"One Registration, Many Networks. Automated Renewal. Consistent Follow-Up. Faster Turnaround. "} link={"/"} linktext={"contact us"} imagelink="https://knackglobal.com/wp-content/uploads/2023/04/Header_Provider-Enrollment-Credentialing-Services-768x531.png" />    </div>
        <Solution heading={"Enrollment, Credentialing, & Contracting"} p2={"Our Expert A/R Team Serves You as a Revenue-Enhancing Partner"} imagelink="https://knackglobal.com/wp-content/uploads/2023/04/Enrollment-Credentialing-Contracting-1-1536x1536.png" p1={"Network enrollment processes are not standardized, they’re complicated and time-consuming. They require continual monitoring to make sure the approval goes through."} />
    </>

  )
}

export default page