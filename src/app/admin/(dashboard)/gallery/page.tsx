"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Trash } from "lucide-react"

interface Photo {
  id: number
  url: string
}

export default function GalleryPage() {
  const [photos, setPhotos] = useState<Photo[]>([
    { id: 1, url: "/assets/images/image.png" },
    { id: 2, url: "/assets/images/image.png" },
  ])
  const [newPhotoUrl, setNewPhotoUrl] = useState("")

  const handleAddPhoto = (e: React.FormEvent) => {
    e.preventDefault()
    if (newPhotoUrl) {
      setPhotos([...photos, { id: Date.now(), url: newPhotoUrl }])
      setNewPhotoUrl("")
    }
  }

  const handleDeletePhoto = (id: number) => {
    setPhotos(photos.filter((photo) => photo.id !== id))
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Manage Gallery</h1>
      <form onSubmit={handleAddPhoto} className="flex gap-4">
        <Input
          type="url"
          placeholder="Enter photo URL"
          value={newPhotoUrl}
          onChange={(e) => setNewPhotoUrl(e.target.value)}
          required
        />
        <Button type="submit">Add Photo</Button>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {photos.map((photo) => (
          <div key={photo.id} className="relative group">
            <img
              src={photo.url || "/placeholder.svg"}
              alt="Gallery item"
              className="w-full h-48 object-cover rounded-lg"
            />
            <Button
              variant="destructive"
              size="icon"
              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => handleDeletePhoto(photo.id)}
            >
              <Trash className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}

