export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h1 className="text-4xl font-bold mb-8">About Our Studio</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2005, our studio brings together a diverse team of architects, designers, and thinkers who
                are passionate about creating spaces that enhance the human experience.
              </p>
              <p className="text-lg text-muted-foreground">
                We believe architecture should be both beautiful and functional, responding to the needs of people while
                respecting the environment and cultural context.
              </p>
            </div>
            <div className="h-[400px] bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg"></div>
          </div>
        </div>
      </section>
    </main>
  )
} 