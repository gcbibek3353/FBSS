import Link from "next/link"
import { Bell, Image, MessageSquare } from "lucide-react"

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen shadow-lg bg-gray-100">
      <div className="p-4">
        <h1 className="text-2xl font-bold">School Admin</h1>
      </div>
      <nav className="mt-8">
        <Link href="/admin/notice" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
          <Bell className="mr-2" />
          Notices
        </Link>
        <Link href="/admin/gallery" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
          <Image className="mr-2" />
          Gallery
        </Link>
        <Link href="/admin/messages" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
          <MessageSquare className="mr-2" />
          Messages
        </Link>
      </nav>
    </aside>
  )
}

export default Sidebar
