"use client"

import React from "react"
import { use, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ChevronLeft, ChevronRight, MapPin, Calendar, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ThreeDModelViewer from "@/components/three-d-model-viewer"

// Project interface for type safety
interface Project {
  id: number
  title: string
  category: string
  location: string
  year: string
  client: string
  area: string
  status: string
  description: string
  longDescription: string
  images: string[]
  modelPath: string
  blueprintPath: string
  relatedProjects: number[]
}

// Mock project data (replace with actual database/CMS integration)
const projectData: Record<string, Project> = {
  "azure-residence": {
    id: 1,
    title: "Azure Residence",
    category: "Residential",
    location: "Los Angeles, CA",
    year: "2023",
    client: "Private Client",
    area: "4,500 sq ft",
    status: "Completed",
    description: "A modern coastal home designed to maximize ocean views while providing privacy and comfort.",
    longDescription: `Perched on a hillside overlooking the Pacific Ocean, the Azure Residence was designed to create a seamless connection between indoor and outdoor living. 

The design features a series of stacked volumes that step down the hillside, with each level offering unique perspectives of the surrounding landscape. The main living areas are oriented toward the ocean, with retractable glass walls that open to expansive terraces.

Sustainability was a key consideration, with solar panels, rainwater harvesting, and passive cooling systems integrated into the design.`,
    images: [
      "/images/1.jpg",
      "/images/2.jpg",
      "/images/3.jpg",
      "/images/F.jpg",
      "/images/G.jpg",
      "/images/H.jpg",
    ],
    modelPath: "/assets/3d/duck.glb",
    blueprintPath: "/placeholder.svg?height=1200&width=1600",
    relatedProjects: [2, 5]
  }
}

// Function to fetch project by slug
const getProjectBySlug = (slug: string): Project | null => {
  return projectData[slug] || null
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  // Safely unwrap params
  const slug = use(Promise.resolve(params.slug))
  
  // Fetch project data
  const project = getProjectBySlug(slug)
  
  // Image gallery state
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Handle project not found
  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Button asChild>
            <Link href="/projects">Back to Projects</Link>
          </Button>
        </div>
      </div>
    )
  }

  // Image navigation handlers
  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    )
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    )
  }

  return (
    <main className="flex min-h-screen flex-col pt-16">
      {/* Hero Image Section */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url(${project.images[0]})` }} 
        />

        <div className="relative z-20 container mx-auto h-full flex flex-col justify-end px-4 sm:px-6 pb-12">
          <Button
            asChild
            variant="outline"
            className="w-fit mb-6 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white/20"
          >
            <Link href="/projects" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            {project.description}
          </p>
        </div>
      </section>

      {/* Project Details Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Project Info Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Project Details</h2>
                  <dl className="space-y-4">
                    {[
                      { icon: Building2, label: "Category", value: project.category },
                      { icon: MapPin, label: "Location", value: project.location },
                      { icon: Calendar, label: "Year", value: project.year },
                      { label: "Client", value: project.client },
                      { label: "Area", value: project.area },
                      { label: "Status", value: project.status }
                    ].map((detail, index) => (
                      <div key={index} className="flex items-start">
                        <dt className="w-1/3 flex items-center text-muted-foreground">
                          {detail.icon && <detail.icon className="h-4 w-4 mr-2" />}
                          {detail.label}
                        </dt>
                        <dd className="w-2/3 font-medium">{detail.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Interested in this project?</h3>
                  <Button asChild className="w-full">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Project Content */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="gallery" className="w-full">
                <TabsList className="mb-8">
                  <TabsTrigger value="gallery">Gallery</TabsTrigger>
                  <TabsTrigger value="description">Description</TabsTrigger>
                  <TabsTrigger value="3d-model">3D Model</TabsTrigger>
                  <TabsTrigger value="blueprint">Blueprint</TabsTrigger>
                </TabsList>

                <TabsContent value="gallery" className="mt-0">
                  <div className="space-y-8">
                    {/* Main Image */}
                    <div className="relative">
                      <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
                        <Image
                          src={project.images[currentImageIndex] || "/placeholder.svg"}
                          alt={`${project.title} - Image ${currentImageIndex + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Image Navigation Buttons */}
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={handlePrevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white"
                      >
                        <ChevronLeft className="h-5 w-5" />
                        <span className="sr-only">Previous image</span>
                      </Button>

                      <Button
                        variant="outline"
                        size="icon"
                        onClick={handleNextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white"
                      >
                        <ChevronRight className="h-5 w-5" />
                        <span className="sr-only">Next image</span>
                      </Button>

                      {/* Image Counter */}
                      <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                        {currentImageIndex + 1} / {project.images.length}
                      </div>
                    </div>

                    {/* Image Thumbnails */}
                    <div className="grid grid-cols-6 gap-2">
                      {project.images.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`relative aspect-square overflow-hidden rounded-md ${
                            index === currentImageIndex ? "ring-2 ring-primary" : ""
                          }`}
                        >
                          <Image
                            src={image || "/placeholder.svg"}
                            alt={`${project.title} - Thumbnail ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                {/* Description Tab */}
                <TabsContent value="description" className="mt-0">
                  <div className="prose max-w-none">
                    <p className="text-lg mb-6">{project.description}</p>
                    {project.longDescription.split("\n\n").map((paragraph, index) => (
                      <p key={index} className="mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </TabsContent>

                {/* 3D Model Tab */}
                <TabsContent value="3d-model" className="mt-0">
                  <div className="aspect-[16/9] bg-slate-100 rounded-lg overflow-hidden">
                    <ThreeDModelViewer modelPath={project.modelPath} />
                  </div>
                </TabsContent>

                {/* Blueprint Tab */}
                <TabsContent value="blueprint" className="mt-0">
                  <div className="aspect-[16/9] bg-slate-100 rounded-lg overflow-hidden">
                    <Image
                      src={project.blueprintPath || "/placeholder.svg"}
                      alt={`${project.title} - Blueprint`}
                      width={1600}
                      height={1200}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}