"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface GalleryImage {
    id: number
    url: string
    category: string
    createdAt: Date
    updatedAt: Date
}

interface GalleryContentProps {
    images: GalleryImage[]
}

function GalleryContent({ images }: GalleryContentProps) {
    const [currentCategory, setCurrentCategory] = useState("All")
    const [zoomedImage, setZoomedImage] = useState<GalleryImage | null>(null)

    const categories = ["All", ...new Set(images.map((image) => image.category))]

    const filteredImages =
        currentCategory === "All" ? images : images.filter((image) => image.category === currentCategory)

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="mb-8 text-3xl font-bold">Gallery</h1>

            <div className="mb-6 flex flex-wrap gap-2">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setCurrentCategory(category)}
                        className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${currentCategory === category
                                ? "bg-primary text-primary-foreground"
                                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {filteredImages.map((image) => (
                    <div
                        key={image.id}
                        className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg"
                        onClick={() => setZoomedImage(image)}
                    >
                        <Image
                            src={image.url || "/placeholder.svg"}
                            alt={`Gallery image - ${image.category}`}
                            layout="fill"
                            objectFit="cover"
                            className="transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute bottom-2 left-2 rounded bg-black bg-opacity-50 px-2 py-1 text-sm text-white">
                            {image.category}
                        </div>
                    </div>
                ))}
            </div>

            <Dialog open={!!zoomedImage} onOpenChange={() => setZoomedImage(null)}>
                <DialogHeader>
                    <DialogTitle>{zoomedImage?.category}</DialogTitle>
                </DialogHeader>
                <DialogContent className="max-w-3xl">
                    {zoomedImage && (
                        <div className="relative aspect-square w-full">
                            <Image
                                src={zoomedImage.url || "/placeholder.svg"}
                                alt={`Zoomed gallery image - ${zoomedImage.category}`}
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default GalleryContent;