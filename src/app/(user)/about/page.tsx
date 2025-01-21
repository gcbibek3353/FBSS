import AboutSchool from '@/components/AboutSchool'
import Facilities from '@/components/Facilities'
import StaffMembers from '@/components/StaffMembers'
import WrapperCard from '@/components/WrapperCard'
import React from 'react'

const about = () => {
  return (
    <div>
       <WrapperCard title='about' />
      <AboutSchool />
      <Facilities />
      <StaffMembers />
    </div>
  )
}

export default about;