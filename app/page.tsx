import Link from "next/link"
import { ArrowRight, Award, Building2, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ProjectCarousel from "@/components/project-carousel"
import TestimonialSlider from "@/components/testimonial-slider"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        {/* Hero Image - Replace with your featured project image */}
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/F.jpg')" }}
        />

        <div className="relative z-20 container mx-auto h-full flex flex-col justify-center px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
            Crafting Spaces
            <br />
            Shaping Experiences
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mb-8">
            Award-winning architectural studio creating innovative and sustainable designs for modern living and
            working.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/projects">Explore Our Work</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white/20"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Studio Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">We Design Spaces That Inspire</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2005, our studio brings together a diverse team of architects, designers, and thinkers who
                are passionate about creating spaces that enhance the human experience.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We believe architecture should be both beautiful and functional, responding to the needs of people while
                respecting the environment and cultural context.
              </p>
              <Button asChild>
                <Link href="/about" className="flex items-center">
                  About Our Studio
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              {/* Studio Image - Replace with your studio image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/F.jpg')" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Innovative Design</h3>
                <p className="text-muted-foreground">
                  We push boundaries with forward-thinking architectural solutions that balance aesthetics,
                  functionality, and sustainability.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Collaborative Approach</h3>
                <p className="text-muted-foreground">
                  We work closely with clients, engineers, and contractors to ensure seamless execution from concept to
                  completion.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Award-Winning Projects</h3>
                <p className="text-muted-foreground">
                  Our work has been recognized internationally for excellence in design, innovation, and environmental
                  responsibility.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Project Highlights Carousel */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Explore our most notable works spanning residential, commercial, and public spaces.
              </p>
            </div>
            <Button asChild variant="outline" className="mt-4 md:mt-0">
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>

          <ProjectCarousel />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What Our Clients Say</h2>
          <TestimonialSlider />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's collaborate to bring your architectural vision to life. Contact us to schedule a consultation.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

