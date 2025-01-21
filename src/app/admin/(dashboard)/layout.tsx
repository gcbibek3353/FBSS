import Sidebar from '@/components/SideBar';
import React from 'react'

const dashboard = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div className='flex gap-10 items-center'>
        <Sidebar />
        {children}
    </div>
  )
}

export default dashboard