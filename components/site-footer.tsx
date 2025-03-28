import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function SiteFooter() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold">
                ARCH<span className="text-primary">STUDIO</span>
              </span>
            </Link>
            <p className="text-slate-400 mb-4">
              Creating innovative architectural solutions for modern living and working spaces.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-slate-400 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-slate-400 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-slate-400 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-slate-400 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/projects" className="text-slate-400 hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-400 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#residential" className="text-slate-400 hover:text-primary transition-colors">
                  Residential Design
                </Link>
              </li>
              <li>
                <Link href="/services#commercial" className="text-slate-400 hover:text-primary transition-colors">
                  Commercial Architecture
                </Link>
              </li>
              <li>
                <Link href="/services#interior" className="text-slate-400 hover:text-primary transition-colors">
                  Interior Design
                </Link>
              </li>
              <li>
                <Link href="/services#urban" className="text-slate-400 hover:text-primary transition-colors">
                  Urban Planning
                </Link>
              </li>
              <li>
                <Link href="/services#renovation" className="text-slate-400 hover:text-primary transition-colors">
                  Renovation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <address className="not-italic text-slate-400 space-y-2">
              <p>123 Architecture Avenue</p>
              <p>NAIROBI, P.O BOX 10001</p>
              <p className="mt-4">
                <a href="tel:+12125551234" className="hover:text-primary transition-colors">
                  +254726548921
                </a>
              </p>
              <p>
                <a href="mailto:info@archstudio.com" className="hover:text-primary transition-colors">
                  info@archstudio.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} ARCHSTUDIO. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6 text-sm">
            <Link href="/privacy" className="text-slate-400 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-slate-400 hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

