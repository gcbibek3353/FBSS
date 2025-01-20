"use client"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from "./ui/card";
import Image from "next/image";

const Alumni = () => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  const alumniData = [
    {
      name: "Sarah Johnson",
      year: "2020",
      achievement: "Software Engineer at Google",
      image: "/assets/images/image.png",
    },
    {
      name: "Michael Chen",
      year: "2019",
      achievement: "Founded Tech Startup",
      image: "/assets/images/image.png",
    },
    {
      name: "Emily Rodriguez",
      year: "2021",
      achievement: "AI Researcher at MIT",
      image: "/assets/images/image.png",
    },
    {
      name: "David Kim",
      year: "2018",
      achievement: "Senior Data Scientist at Amazon",
      image: "/assets/images/image.png",
    },
    {
      name: "Lisa Patel",
      year: "2020",
      achievement: "Product Manager at Microsoft",
      image: "/assets/images/image.png",
    },
    {
      name: "James Wilson",
      year: "2019",
      achievement: "PhD Candidate in Computer Science",
      image: "/assets/images/image.png",
    },
  ]

  useEffect(() => {
    if (!api) {
      return
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])


  return (
    <div className="w-screen bg-white flex items-center justify-center p-4 sm:p-6 lg:p-8">
    <div className="w-full max-w-screen-xl">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
        setApi={setApi}
        className="w-full"
      >
        <CarouselContent className="flex gap-4">
          {alumniData.map((alumni, index) => (
            <CarouselItem key={index} className="basis-full md:basis-1/3 lg:basis-1/3">
              <Card className="overflow-hidden border rounded-lg shadow-md">
                <CardContent className="p-0">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={alumni.image || "/placeholder.svg"}
                      alt={`${alumni.name}'s photo`}
                      fill
                      className="object-cover transition-transform hover:scale-105 duration-300"
                    />
                  </div>
                  <div className="p-4 space-y-2">
                    <h3 className="font-semibold text-lg">{alumni.name}</h3>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>Class of {alumni.year}</span>
                      <span className="inline-flex items-center rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-600">
                        Alumni
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">{alumni.achievement}</p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex items-center justify-center gap-2 mt-4">
          <CarouselPrevious />
          <span className="text-sm text-gray-500">
            {current + 1} / {alumniData.length}
          </span>
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  </div>
  
  )
};

export default Alumni;