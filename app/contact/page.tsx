import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-muted-foreground mb-8">
                Let's collaborate to bring your architectural vision to life. Contact us to schedule a consultation.
              </p>
              <div className="space-y-4">
                <p className="text-lg">
                  <strong>Address:</strong><br />
                  123 Architecture Avenue<br />
                  NAIROBI, NRB 00100
                </p>
                <p className="text-lg">
                  <strong>Phone:</strong><br />
                  +254719327265
                </p>
                <p className="text-lg">
                  <strong>Email:</strong><br />
                  info@archstudio.com
                </p>
              </div>
            </div>
            <div className="h-[400px] bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg"></div>
          </div>
        </div>
      </section>
    </main>
  )
} 