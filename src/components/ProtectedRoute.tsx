import { redirect } from "next/navigation";
import { toast } from "sonner";
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

const ProtectedRoute = ({
    children,token
  }: Readonly<{
    children: React.ReactNode,
    token : string | null
  }>) => {
    let isVerified = false;

      try {
          if(!token){
            toast('You currently don\'t have access to the admin page');
            redirect('/admin/login');
          }
          const verifiedAdmin = jwt.verify(token as string,JWT_SECRET as string);
          if(verifiedAdmin){
            isVerified = true;
          }
        } catch (error) {
            toast('some error occured while verifying the token');
          console.log(error);
          redirect('/admin/login');
        }

  return (    
    <>
        {/* {children} */}
        This is protected route 
    </>
  )
}

export default ProtectedRoute