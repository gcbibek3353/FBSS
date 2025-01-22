'use server'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET;

const loginAction = async (userName : string,password : string)=>{
    if(password === process.env.PASSWORD && userName === process.env.USER_NAME){
        const token = jwt.sign({userName,password},JWT_SECRET as string);
        // localStorage.setItem('token',token);
        return {isAuthenticated:true,token};
    }
    return {isAuthenticated:false};
}

export default loginAction;