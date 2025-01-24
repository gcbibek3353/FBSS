'use server'
import { prisma } from "@/lib/prisma";

interface Message {
    firstName: string,
    lastName: string,
    email: string,
    message: string,
}

export const addMessage = async (message: Message) => {
    try {
        const res = await prisma.message.create({
            data: message
        });
        if (!res) return {
            success: false,
            message: "Failed to add message to database"
        }
        return {
            success: true,
            message: "Message added successfully",
        }
    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: "Error in adding message"
        }
    }
}

export const getAllMessages = async () => {
    try {
        const res = await prisma.message.findMany({
            orderBy: {
              createdAt: 'desc', // Sort by createdAt in descending order
            },
          });
        if (!res) return {
            success: false,
            message: "Failed to fetch messages from database"
        }
        return {
            success: true,
            message : "Messages fetched successfully",
            messages: res
        }
    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: "Error in fetching messages"
        }
    }
}