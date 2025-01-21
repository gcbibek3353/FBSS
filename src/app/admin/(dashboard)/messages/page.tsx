"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface Message {
  id: number
  sender: string
  email: string
  content: string
  date: string
}

export default function MessagesPage() {
  const [messages] = useState<Message[]>([
    {
      id: 1,
      sender: "John Doe",
      email: "john@example.com",
      content: "Regarding the upcoming school event...",
      date: "2023-05-15",
    },
    {
      id: 2,
      sender: "Jane Smith",
      email: "jane@example.com",
      content: "Question about the new curriculum...",
      date: "2023-05-14",
    },
  ])

  return (
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
              <TableCell>{message.sender}</TableCell>
              <TableCell>{message.email}</TableCell>
              <TableCell>{message.content}</TableCell>
              <TableCell>{message.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

