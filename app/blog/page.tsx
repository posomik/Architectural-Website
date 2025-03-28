import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const blogPosts = [
  {
    title: "The Future of Sustainable Architecture",
    date: "March 15, 2024",
    excerpt: "Exploring innovative approaches to eco-friendly building design and sustainable urban development.",
    category: "Sustainability"
  },
  {
    title: "Blending Traditional and Modern Design",
    date: "March 10, 2024",
    excerpt: "How to harmoniously integrate contemporary elements with historical architectural features.",
    category: "Design Trends"
  },
  {
    title: "Smart Homes: Integration of Technology in Architecture",
    date: "March 5, 2024",
    excerpt: "The impact of smart technology on modern residential architecture and living spaces.",
    category: "Technology"
  }
]

export default function BlogPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h1 className="text-4xl font-bold mb-6">Our Blog</h1>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
            Insights, thoughts, and discussions about architecture, design, and sustainable building practices.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardHeader>
                  <div className="text-sm text-muted-foreground mb-2">{post.date}</div>
                  <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                  <div className="text-sm text-primary mb-4">{post.category}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
} 