"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Trash } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import ProtectedRoute from "@/components/ProtectedRoute"
import { addPhoto, deletePhoto, getAllPhotos } from "@/actions/gallery"
import { toast } from "sonner"

interface Photo {
  id: number
  url: string
  category: string
}

export default function GalleryPage() {
  const [photos, setPhotos] = useState<Photo[]>([])
  const [newPhotoUrl, setNewPhotoUrl] = useState("")
  const [newPhotoCategory, setNewPhotoCategory] = useState("")
  const [currentCategory, setCurrentCategory] = useState("All")
  const [isLoading, setIsLoading] = useState(false);


  const fetchImages = async () => {
    try {
      const res = await getAllPhotos();
      if (res.success && res.images)
        setPhotos(res?.images);
      else return toast.message(res.message);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchImages();
  }, [isLoading]);

  const categories = ["All", ...new Set(photos.map((photo) => photo.category))].filter(
    (category, index, self) => self.indexOf(category) === index,
  )

  const handleAddPhoto = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true);
    try {
      if (newPhotoUrl && newPhotoCategory) {
        setPhotos([...photos, { id: Date.now(), url: newPhotoUrl, category: newPhotoCategory }]);
        const res = await addPhoto({ url: newPhotoUrl, category: newPhotoCategory });
        if (res.success) {
          toast.success(res.message);
          fetchImages();
        }
        else return toast.error(res.message);
        setNewPhotoUrl("")
        setNewPhotoCategory("")
      }

    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }

  const handleDeletePhoto = async (id: number) => {
    try {
      setPhotos(photos.filter((photo) => photo.id !== id))
      const res = await deletePhoto(id);
      if (res.success) {
        toast.success(res.message);
        fetchImages();
      }
      else return toast.error(res.message);
    } catch (error) {
      console.log(error);
    }
  }

  const filteredPhotos =
    currentCategory === "All" ? photos : photos.filter((photo) => photo.category === currentCategory)

  return (
    <ProtectedRoute>
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
          <Input
            type="text"
            placeholder="Enter category"
            value={newPhotoCategory}
            onChange={(e) => setNewPhotoCategory(e.target.value)}
            required
          />
          <Button type="submit">Add Photo</Button>
        </form>
        <div className="flex justify-start space-x-2">
          <div className="flex space-x-4 mb-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setCurrentCategory(category)}
                className={`px-4 py-2 rounded-md ${currentCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPhotos.map((photo) => (
            <div key={photo.id} className="relative group">
              <img
                src={photo.url || "/placeholder.svg"}
                alt={`Gallery item - ${photo.category}`}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded">
                {photo.category}
              </div>
              <Button
                variant="destructive"
                size="icon"
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => handleDeletePhoto(photo.id)}
              >
                <Trash className="h-4 w-4" />
                {/* <Dialog>
                  <DialogTrigger asChild>
                <Trash className="h-4 w-4" />
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    hello hello 
                  </DialogContent>
                </Dialog> */}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </ProtectedRoute>
  )
}

