"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Pencil, Trash } from "lucide-react"
import Image from "next/image"

interface Notice {
  id: number
  title: string
  imageUrl : string
  content: string
}

export default function NoticesPage() {
  const [notices, setNotices] = useState<Notice[]>([
    { id: 1, title: "School Closure", imageUrl : "/assets/images/image.png", content: "School will be closed on Monday due to maintenance." },
    { id: 2, title: "Parent-Teacher Meeting", imageUrl : "/assets/images/image.png", content: "Parent-Teacher meeting scheduled for next Friday." },
  ])
  const [title, setTitle] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [content, setContent] = useState("")
  const [editingId, setEditingId] = useState<number | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (editingId) {
      setNotices(notices.map((notice) => (notice.id === editingId ? { ...notice, title, content } : notice)))
      setEditingId(null)
    } else {
      setNotices([...notices, { id: Date.now(), title, imageUrl , content }])
    }
    setTitle("")
    setImageUrl("")
    setContent("")
  }

  const handleEdit = (notice: Notice) => {
    setTitle(notice.title)
    setImageUrl(notice.imageUrl)
    setContent(notice.content)
    setEditingId(notice.id)
  }

  const handleDelete = (id: number) => {
    setNotices(notices.filter((notice) => notice.id !== id))
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Manage Notices</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input placeholder="Notice Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <Input placeholder="Image Url" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required />
        <Textarea placeholder="Notice Content" value={content} onChange={(e) => setContent(e.target.value)} required />
        <Button type="submit">{editingId ? "Update Notice" : "Add Notice"}</Button>
      </form>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Image</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Content</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {notices.map((notice) => (
            <TableRow key={notice.id}>
              <TableCell><Image src={notice.imageUrl} alt={notice.title} height={20} width={20} /></TableCell>
              <TableCell>{notice.title}</TableCell>
              <TableCell>{notice.content}</TableCell>
              <TableCell>
                <Button variant="ghost" onClick={() => handleEdit(notice)}>
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button variant="ghost" onClick={() => handleDelete(notice.id)}>
                  <Trash className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

