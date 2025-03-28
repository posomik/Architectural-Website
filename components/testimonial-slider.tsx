"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Replace with your actual testimonial data
const testimonials = [
  {
    id: 1,
    quote:
      "Working with this studio was a revelation. They transformed our vision into a space that exceeds our expectations in every way.",
    author: "Sarah Johnson",
    role: "Homeowner, Azure Residence",
    // Replace with client avatar image
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    quote:
      "Their innovative approach to our office redesign has completely transformed our company culture and productivity.",
    author: "Michael Chen",
    role: "CEO, Vertex Technologies",
    // Replace with client avatar image
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    quote:
      "The attention to detail and commitment to sustainability made them the perfect partner for our public library project.",
    author: "Emily Rodriguez",
    role: "Director, Harmony Public Library",
    // Replace with client avatar image
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            width: `${testimonials.length * 100}%`,
          }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full px-4">
              <Card className="border-none bg-transparent shadow-none">
                <CardContent className="p-0 text-center">
                  <div className="mb-6 mx-auto bg-primary/20 rounded-full p-3 w-fit">
                    <Quote className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <p className="text-xl md:text-2xl mb-8 italic">"{testimonial.quote}"</p>
                  <Avatar className="h-16 w-16 mx-auto mb-4">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                    <AvatarFallback>
                      {testimonial.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <h4 className="font-bold text-lg">{testimonial.author}</h4>
                  <p className="text-primary-foreground/70">{testimonial.role}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8 space-x-2">
        <Button
          variant="outline"
          size="icon"
          onClick={handlePrev}
          className="rounded-full bg-white/10 border-white/20 hover:bg-white/20 text-white"
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Previous</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={handleNext}
          className="rounded-full bg-white/10 border-white/20 hover:bg-white/20 text-white"
        >
          <ChevronRight className="h-5 w-5" />
          <span className="sr-only">Next</span>
        </Button>
      </div>
    </div>
  )
}

