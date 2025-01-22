'use client'
import Sidebar from '@/components/SideBar';
import { redirect } from 'next/navigation';
import React from 'react'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.NEXT_PUBLIC_JWT_SECRET;

const dashboard = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {

    // get token from the localStorage
    try {
      const token = localStorage.getItem('token');
      if(!token){
        redirect('/admin/login');
      }
      const verifiedAdmin = jwt.verify(token as string,JWT_SECRET as string);
      if(verifiedAdmin){
        redirect('/admin/notice');
      }
    } catch (error) {
      console.log(error);
    }
    // if !verify router.push('/admin/login') toast message ('You currently don't have access to the admin page')
    // else router.push('/admin/notice')



  return (
    <div className='flex gap-10 items-center'>
        <Sidebar />
        {children}
    </div>
  )
}

export default dashboard