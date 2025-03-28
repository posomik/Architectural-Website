"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

// Replace with your actual project data
const projects = [
  {
    id: 1,
    title: "Azure Residence",
    category: "Residential",
    location: "NAIROBI",
    year: "2023",
    slug: "azure-residence",
    // Replace with your project image
    image: "/images/A.jpg",
  },
  {
    id: 2,
    title: "Vertex Office Tower",
    category: "Commercial",
    location: "New York, NY",
    year: "2022",
    slug: "vertex-office-tower",
    // Replace with your project image
    image: "/images/B.jpg",
  },
  {
    id: 3,
    title: "Harmony Public Library",
    category: "Public",
    location: "Kisumu",
    year: "2021",
    slug: "harmony-public-library",
    // Replace with your project image
    image: "/images/F.jpg",
  },
  {
    id: 4,
    title: "Solstice Pavilion",
    category: "Cultural",
    location: "Malindi",
    year: "2023",
    slug: "solstice-pavilion",
    // Replace with your project image
    image: "/images/C.jpg",
  },
  {
    id: 5,
    title: "Cascade Apartments",
    category: "Residential",
    location: "Voi",
    year: "2022",
    slug: "cascade-apartments",
    // Replace with your project image
    image: "/images/E.jpg",
  },
]

export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const maxIndex = Math.max(0, projects.length - (isMobile() ? 1 : 3))
  const containerRef = useRef<HTMLDivElement>(null)

  function isMobile() {
    if (typeof window === "undefined") return false
    return window.innerWidth < 768
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))
  }

  useEffect(() => {
    const handleResize = () => {
      setCurrentIndex((prev) => Math.min(prev, Math.max(0, projects.length - (isMobile() ? 1 : 3))))
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="relative">
      <div className="flex justify-end space-x-2 mb-4">
        <Button
          variant="outline"
          size="icon"
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="rounded-full"
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Previous</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={handleNext}
          disabled={currentIndex >= maxIndex}
          className="rounded-full"
        >
          <ChevronRight className="h-5 w-5" />
          <span className="sr-only">Next</span>
        </Button>
      </div>

      <div className="overflow-hidden" ref={containerRef}>
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / (isMobile() ? 1 : 3))}%)`,
            width: `${projects.length * (100 / (isMobile() ? 1 : 3))}%`,
          }}
        >
          {projects.map((project) => (
            <div key={project.id} className={cn("px-2", isMobile() ? "w-full" : "w-1/3")}>
              <Link href={`/projects/${project.slug}`}>
                <Card className="overflow-hidden h-full border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-64 w-full">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>{project.category}</span>
                      <span>{project.year}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

