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

export const getAllNotices = async() => {
    try {
        const res = await prisma.notice.findMany();
        if(!res) return{
            success : false,
            message : "Failed to fetch notices from database"
        }
        return {
            success : true,
            notices : res
        }
    } catch (error) {
        console.log(error);
        return{
            success : false,
            message : "Error in fetching notices"
        }
    }
}

export const deleteNotice = async(id: number) => {
    try {
        const res = await prisma.notice.delete({
            where : {
                id
            }
        });
        if(!res) return{
            success : false,
            message : "Failed to delete notice"
        }
        return {
            success : true,
            message : "Notice deleted successfully"
        }
    } catch (error) {
        console.log(error);
        return {
            success : false,
            message : "Error in deleting notice"
        }
    }
}

export const updateNotice = async(id:number,notice: {title:string,imageUrl:string,content:string})=>{
    try {
        const res = await prisma.notice.update({
            where : {
                id
            },
            data : notice
        });
        if(!res) return{
            success : false,
            message : "Failed to update notice"
        }
        return {
            success : true,
            message : "Notice updated successfully",
            notice : res
        }

    } catch (error) {
        console.log(error);
        return {
            success : false,
            message : "Error in updating notice"
        }
    }
}
