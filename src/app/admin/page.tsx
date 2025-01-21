'use client'
import { useRouter } from 'next/navigation';

const page = () => {

  const router = useRouter();

    // get token from the localStorage
    // jwt.verify the token 
    
    // if !verify router.push('/admin/login') toast message ('You currently don't have access to the admin page')
    // else router.push('/admin/notice')


  return (
    <div>admin page </div>
  )
}

export default page