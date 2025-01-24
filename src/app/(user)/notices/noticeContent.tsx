"use client"

import Image from "next/image"
import { useState } from "react"

interface NoticesContentProps {
  notices: Notice[]
}

interface Notice {
  id: number
  title: string
  content: string
  imageUrl?: string
  createdAt: Date
  updatedAt: Date
}


function NoticesContent({ notices }: NoticesContentProps) {
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(notices[0] || null)

  return (
    <div className="flex flex-col-reverse lg:flex-row h-full w-full bg-gray-50">
      {/* Main Notice Content */}
      <div className="w-full lg:w-[70%] h-full bg-gray-50 p-4 sm:p-6">
        {selectedNotice ? (
          <div className="h-full">
            {/* Title and Date */}
            <div className="mb-6">
              <h1 className="mb-2 text-2xl sm:text-3xl font-bold text-gray-800">
                {selectedNotice.title}
              </h1>
              <p className="text-sm text-gray-500">
                Posted on {new Date(selectedNotice.createdAt).toLocaleDateString()}
              </p>
            </div>
  
            {/* Image Section */}
            {selectedNotice.imageUrl && (
              <div className="mb-6 flex justify-center items-center">
                <Image
                  width={600}
                  height={400}
                  src={selectedNotice.imageUrl || "/placeholder.svg"}
                  alt={selectedNotice.title}
                  className="w-full sm:w-4/5 rounded-lg object-cover shadow-md"
                />
              </div>
            )}
  
            {/* Content */}
            <div className="flex items-center justify-center w-full px-4 sm:px-20 text-base sm:text-xl text-gray-700">
              <p>{selectedNotice.content}</p>
            </div>
          </div>
        ) : (
          <div className="flex h-full items-center justify-center text-center">
            <p className="text-gray-500 text-lg">Select a notice to view</p>
          </div>
        )}
      </div>
  
      {/* Sidebar Notices */}
      <div className="w-full lg:w-[30%] bg-gray-100 h-full border-t lg:border-t-0 lg:border-l shadow-md p-4">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Notices</h2>
        <div className="flex flex-col gap-2">
          {notices.map((notice) => (
            <button
              key={`${notice.id}`}
              onClick={() => setSelectedNotice(notice)}
              className={`p-4 text-left rounded-lg hover:bg-blue-100 hover:text-black transition duration-200 ${
                selectedNotice?.id === notice.id
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white text-gray-700 border border-gray-200"
              }`}
            >
              <h3 className="font-medium">{notice.title}</h3>
              <p className="text-sm text-gray-700">
                {new Date(notice.createdAt).toLocaleDateString()}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
  
}

export default NoticesContent;