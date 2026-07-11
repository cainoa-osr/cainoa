import { Button } from "./ui/button"
import { ArrowUpRight } from "lucide-react"
import logo from "../assets/cainoa logo.png"

const footerLinks = {
  Company: ["About", "Careers", "Leadership", "Press"],
  Solutions: ["AI Platform", "Fintech", "Cybersecurity", "Infrastructure"],
  Resources: ["Documentation", "Research", "Blog", "Case Studies"],
  Legal: ["Privacy", "Terms", "Security", "Compliance"],
}

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-primary text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="py-20 lg:py-28 border-b border-white/10">
          <div className="max-w-3xl">
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Ready to build the
              <br />
              <span className="text-accent">future of Africa?</span>
            </h2>
            <p className="mt-6 text-lg text-white/60 max-w-xl leading-relaxed">
              Partner with Cainoa to deploy world-class AI infrastructure and
              enterprise solutions across the continent.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-80 h-14 px-5 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-white/30 focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/20 transition-all duration-300 text-base"
                aria-label="Email address"
              />
              <Button
                size="lg"
                className="rounded-full gap-2 group bg-accent hover:bg-accent/90 text-white"
              >
                Get in Touch
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Button>
            </div>
          </div>
        </div>

        <div className="py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading text-sm font-semibold text-white/40 tracking-wider uppercase mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/70 hover:text-accent transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="py-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Cainoa" className="h-7 w-auto brightness-0 invert" />
          </div>
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Cainoa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
