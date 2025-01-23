"use client"

import { useEffect, useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import ProtectedRoute from "@/components/ProtectedRoute"
import { getAllMessages } from "@/actions/message"
import { toast } from "sonner"

interface Message {
  id: number
  firstName: string
  lastName : string
  email: string
  message: string
  createdAt: Date
  updatedAt: Date
}

export default function MessagesPage() {
  const [messages,setMessages] = useState<Message[]>([])

  const fetchMessages = async () => {
    try {
      const res = await getAllMessages();
      if (res.success && res.messages)
        setMessages(res.messages);
      else return toast.message(res.message);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchMessages();
  },[]);


  return (
    <ProtectedRoute>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Received Messages</h1>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Sender</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Message</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {messages.map((message) => (
              <TableRow key={message.id}>
                <TableCell>{`${message.firstName} ${message.lastName}`}</TableCell>
                <TableCell>{message.email}</TableCell>
                <TableCell>{message.message}</TableCell>
                <TableCell>{`${message.createdAt.toLocaleDateString()} `}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </ProtectedRoute>
  )
}

