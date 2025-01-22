'use server'
import { prisma } from "@/lib/prisma";

export const addNotice = async(notice: {title:string,imageUrl:string,content:string}) => {
    try {
        const newNotice = await prisma.notice.create({
            data : notice
        });
        if(!newNotice) return{
            success : false,
            message : "Failed to add notice to database"
        }

        return {
            success : true,
            message : "Notice added successfully",
            notice : newNotice
        }
        
    } catch (error) {
        console.log(error);
        return {
            success : false,
            message : "Error in adding notice"
        }
    }
}

// addNotice({title:"New Notice",imageUrl:"https://i.ibb.co/Y0LQq68/image.png",content:"This is a new notice"}).then(res => console.log(res));