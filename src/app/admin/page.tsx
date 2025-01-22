import { redirect } from 'next/navigation';
import React from 'react'

const admin = () => {
    redirect('/admin/login');
  return (
    <div>admin</div>
  )
}

export default admin