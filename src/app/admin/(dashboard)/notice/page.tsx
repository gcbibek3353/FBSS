"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Pencil, Trash } from "lucide-react"
import Image from "next/image"
import ProtectedRoute from "@/components/ProtectedRoute"
import { addNotice, deleteNotice, getAllNotices, updateNotice } from "@/actions/notice"
import { toast } from "sonner"

interface Notice {
  id: number
  title: string
  imageUrl: string
  content: string
}

export default function NoticesPage() {
  const [isLoading, setIsLoading] = useState(false);
  // const [notices, setNotices] = useState<Notice[]>([
  //   { id: 1, title: "School Closure", imageUrl: "/assets/images/image.png", content: "School will be closed on Monday due to maintenance." },
  //   { id: 2, title: "Parent-Teacher Meeting", imageUrl: "/assets/images/image.png", content: "Parent-Teacher meeting scheduled for next Friday." },
  // ])
  const [notices, setNotices] = useState<Notice[]>([]);

  const [title, setTitle] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [content, setContent] = useState("")
  const [editingId, setEditingId] = useState<number | null>(null)

  const fetchNotices = async () => {
    try {
      const res = await getAllNotices();
      if (res.success && res.notices)
        setNotices(res?.notices);
      else return toast.message(res.message);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchNotices();
  }, [isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    setIsLoading(true);
    e.preventDefault()
    if (editingId) {
      try {
        const res = await updateNotice(editingId, { title, imageUrl, content });
        if (res.success && res.notice) {
          setNotices(notices.map((notice) => (notice.id === editingId ? res.notice : notice)));
          toast.success(res.message);
        }
        else return toast.error(res.message);
      } catch (error) {
        console.log(error);
      }
      setEditingId(null);
    } else {
      try {
        const res = await addNotice({ title, imageUrl, content });
        if (res.success && res.notice) {
          setNotices([...notices, res.notice]);
          toast.success(res.message);
        }
        else return toast.error(res.message);
      } catch (error) {
        console.log(error);
      }
    }
    console.log('control here');
    setTitle("")
    setImageUrl("")
    setContent("")
    setIsLoading(false);
  }

  const handleEdit = (notice: Notice) => {
    setTitle(notice.title)
    setImageUrl(notice.imageUrl)
    setContent(notice.content)
    setEditingId(notice.id)
  }

  const handleDelete = async (id: number) => {
    try {
      const res = await deleteNotice(id);
      if (res.success) {
        toast.success(res.message);
      }
      else return toast.error(res.message);
    } catch (error) {
      console.log(error);
    }
    setNotices(notices.filter((notice) => notice.id !== id))
  }

  return (
    <ProtectedRoute>
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
    </ProtectedRoute>
  )
}

