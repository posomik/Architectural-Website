import { Building2, Home, Lightbulb, Map, PenTool, Ruler } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Home,
    title: "Residential Design",
    description: "Custom home design, renovations, and interior architecture for private residences."
  },
  {
    icon: Building2,
    title: "Commercial Architecture",
    description: "Office buildings, retail spaces, and mixed-use developments designed for modern business needs."
  },
  {
    icon: PenTool,
    title: "Interior Design",
    description: "Comprehensive interior design services that blend aesthetics with functionality."
  },
  {
    icon: Map,
    title: "Urban Planning",
    description: "Master planning and urban design solutions for sustainable community development."
  },
  {
    icon: Ruler,
    title: "Renovation",
    description: "Thoughtful renovation and restoration of existing structures, preserving architectural heritage."
  },
  {
    icon: Lightbulb,
    title: "Sustainable Design",
    description: "Eco-friendly architectural solutions that minimize environmental impact."
  }
]

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h1 className="text-4xl font-bold mb-6">Our Services</h1>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
            We offer a comprehensive range of architectural services, tailored to meet the unique needs of each project
            and client.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="border-none shadow-lg">
                  <CardContent className="pt-6">
                    <div className="mb-4 p-3 bg-primary/10 rounded-full w-fit">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
} 