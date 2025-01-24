'use server'
import { prisma } from "@/lib/prisma";

export const addPhoto = async(photo: {url:string,category:string}) => {
    try {
        const newPhoto = await prisma.image.create({
            data : photo
        });
        if(!newPhoto) return{
            success : false,
            message : "Failed to add photo to database"
        }

        return {
            success : true,
            message : "Photo added successfully",
            image : newPhoto
        }
        
    } catch (error) {
        console.log(error);
        return {
            success : false,
            message : "Error in adding photo"
        }
    }
}

export const getAllPhotos = async() => {
    try {
        const res = await prisma.image.findMany({
            orderBy: {
              createdAt: 'desc', // Sort by createdAt in descending order
            },
          });
        if(!res) return{
            success : false,
            message : "Failed to fetch photos from database"
        }
        return {
            success : true,
            images : res
        }
    } catch (error) {
        console.log(error);
        return{
            success : false,
            message : "Error in fetching photos"
        }
    }
}

export const deletePhoto = async(id:number) => {
    try {
        const res = await prisma.image.delete({
            where : {
                id
            }
        });
        if(!res) return{
            success : false,
            message : "Failed to delete photo"
        }
        return {
            success : true,
            message : "Photo deleted successfully"
        }
    } catch (error) {
        console.log(error);
        return {
            success : false,
            message : "Error in deleting photo"
        }
    }
}