import { motion } from "framer-motion"
import PageHero from "../components/shared/PageHero"
import SectionHeading from "../components/shared/SectionHeading"
import CTASection from "../components/shared/CTASection"
import { Button } from "../components/ui/button"
import { ArrowRight, Newspaper, Award, Calendar, Download, Mic, ExternalLink } from "lucide-react"
import { useNavigate } from "react-router-dom"

const featured = [
  {
    category: "Fintech",
    date: "June 15, 2025",
    title: "Cainoa Deploys AI Infrastructure for Major Financial Institution",
    excerpt: "Cainoa has successfully deployed a comprehensive AI infrastructure suite for one of Nigeria's largest financial institutions, enabling real-time fraud detection, intelligent customer service automation, and predictive risk analytics across their entire banking network.",
  },
  {
    category: "Cybersecurity",
    date: "May 28, 2025",
    title: "Cainoa Launches Next-Gen Cybersecurity Platform",
    excerpt: "The new zero-trust security platform leverages machine learning to detect and neutralize threats in real time, setting a new standard for enterprise data protection across African financial and government institutions.",
  },
  {
    category: "Partnerships",
    date: "April 10, 2025",
    title: "Partnership Brings Enterprise AI to Cooperative Banking",
    excerpt: "A strategic collaboration with cooperative banking leaders will bring AI-powered member management, credit scoring, and digital banking solutions to thousands of cooperative societies across Northern Nigeria.",
  },
]

const releases = [
  {
    headline: "Cainoa Secures Series A Funding to Accelerate AI Infrastructure Expansion",
    date: "March 3, 2025",
    excerpt: "The funding round will fuel regional expansion and the development of new AI-powered enterprise solutions for African markets.",
  },
  {
    headline: "Cainoa Appoints New Chief Technology Officer",
    date: "January 20, 2025",
    excerpt: "Industry veteran joins Cainoa to lead engineering and product development as the company scales its technology operations.",
  },
  {
    headline: "Cainoa Opens New Innovation Hub in Abuja",
    date: "November 12, 2024",
    excerpt: "The state-of-the-art facility will house engineering teams, AI research labs, and a customer experience center.",
  },
  {
    headline: "Cainoa Achieves ISO 27001 Certification",
    date: "September 8, 2024",
    excerpt: "The internationally recognized certification underscores Cainoa's commitment to the highest standards of information security management.",
  },
]

const coverage = [
  {
    publication: "TechAfrica",
    quote: "Cainoa is emerging as a formidable force in Africa's AI infrastructure space, delivering enterprise-grade solutions that rival global competitors while maintaining a deeply local understanding of the market.",
    url: "#",
  },
  {
    publication: "Business Daily",
    quote: "The company's approach to building AI infrastructure specifically designed for African enterprise needs sets it apart in a rapidly evolving technology landscape.",
    url: "#",
  },
  {
    publication: "African Tech Review",
    quote: "With its combination of technical excellence and deep regional expertise, Cainoa represents a new wave of African technology companies building world-class infrastructure on the continent.",
    url: "#",
  },
]

const awards = [
  {
    title: "Best AI Infrastructure Company 2024",
    year: "2024",
    description: "Recognized at the Africa Technology Awards for outstanding contributions to AI infrastructure development across the continent.",
  },
  {
    title: "Innovation in Fintech Award",
    year: "2024",
    description: "Awarded for pioneering AI-powered cooperative banking and payment infrastructure solutions in underserved markets.",
  },
  {
    title: "Top Employer in Tech",
    year: "2025",
    description: "Named one of the best workplaces in African technology for engineering culture, professional development, and employee satisfaction.",
  },
  {
    title: "Cybersecurity Excellence Award",
    year: "2025",
    description: "Honored for the development of advanced zero-trust security frameworks and AI-driven threat detection systems.",
  },
]

const events = [
  {
    name: "African Tech Summit 2025",
    date: "October 15-17, 2025",
    location: "Nairobi, Kenya",
    description: "Cainoa's leadership team will present on AI infrastructure strategies for emerging markets and showcase our latest enterprise solutions.",
  },
  {
    name: "Fintech Innovation Forum",
    date: "November 5-6, 2025",
    location: "Lagos, Nigeria",
    description: "Join us for a deep dive into AI-powered fintech infrastructure, cooperative banking, and digital payment innovations.",
  },
  {
    name: "AI in Government Conference",
    date: "February 18-19, 2026",
    location: "Abuja, Nigeria",
    description: "Cainoa will demonstrate how government agencies can leverage AI infrastructure for public service transformation and digital governance.",
  },
]

export default function Press() {
  const navigate = useNavigate()

  return (
    <main>
      <PageHero
        badge="Press & Media"
        title="Latest News & Company Updates"
        subtitle="Stay informed about Cainoa's latest developments, partnerships, and innovations in AI infrastructure."
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title="Featured News" subtitle="Top stories from across our company and industry." />
          <div className="mt-16 grid lg:grid-cols-3 gap-8">
            {featured.map((article, i) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group rounded-3xl bg-white border border-border overflow-hidden hover:border-accent/20 hover:shadow-xl hover:shadow-accent/5 transition-all duration-500"
              >
                <div className="aspect-[16/10] bg-gradient-to-br from-accent/20 via-primary/10 to-accent/10 flex items-center justify-center">
                  <Newspaper size={48} className="text-accent/30 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 text-sm mb-4">
                    <span className="px-3 py-1 rounded-full bg-accent/10 text-accent font-semibold text-xs">{article.category}</span>
                    <span className="text-muted-text flex items-center gap-1.5"><Calendar size={14} />{article.date}</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-primary leading-tight mb-3 group-hover:text-accent transition-colors">{article.title}</h3>
                  <p className="text-muted-text text-sm leading-relaxed">{article.excerpt}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-secondary-bg/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title="Press Releases" subtitle="Official announcements and company updates." />
          <div className="mt-16 grid sm:grid-cols-2 gap-6">
            {releases.map((item, i) => (
              <motion.div
                key={item.headline}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-8 rounded-3xl bg-white border border-border hover:border-accent/20 hover:shadow-xl hover:shadow-accent/5 transition-all duration-500"
              >
                <div className="flex items-center gap-2 text-sm text-muted-text mb-3">
                  <Calendar size={14} />
                  {item.date}
                </div>
                <h3 className="font-heading text-lg font-bold text-primary mb-3 leading-snug">{item.headline}</h3>
                <p className="text-sm text-muted-text leading-relaxed">{item.excerpt}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title="Media Coverage" subtitle="What the press is saying about Cainoa." />
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {coverage.map((item, i) => (
              <motion.div
                key={item.publication}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-white border border-border relative group hover:border-accent/20 transition-all duration-500"
              >
                <Mic size={24} className="text-accent mb-5" />
                <blockquote className="text-muted-text text-sm leading-relaxed mb-6 italic">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <div className="flex items-center justify-between">
                  <span className="font-heading font-bold text-primary text-sm">{item.publication}</span>
                  <a href={item.url} className="text-accent hover:text-accent/80 transition-colors">
                    <ExternalLink size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-secondary-bg/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title="Awards & Recognition" subtitle="Milestones that reflect our commitment to excellence." />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-8 rounded-3xl bg-white border border-border text-center hover:border-accent/20 hover:shadow-xl hover:shadow-accent/5 transition-all duration-500"
              >
                <Award size={32} className="text-accent mx-auto mb-4" />
                <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold mb-3">{item.year}</span>
                <h3 className="font-heading text-base font-bold text-primary mb-3 leading-snug">{item.title}</h3>
                <p className="text-xs text-muted-text leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title="Events" subtitle="Meet us at upcoming conferences and industry gatherings." />
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {events.map((event, i) => (
              <motion.div
                key={event.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-8 rounded-3xl bg-white border border-border hover:border-accent/20 hover:shadow-xl hover:shadow-accent/5 transition-all duration-500"
              >
                <h3 className="font-heading text-lg font-bold text-primary mb-4">{event.name}</h3>
                <div className="space-y-2 text-sm text-muted-text mb-4">
                  <div className="flex items-center gap-2"><Calendar size={14} className="text-accent" />{event.date}</div>
                  <div className="flex items-center gap-2"><Mic size={14} className="text-accent" />{event.location}</div>
                </div>
                <p className="text-sm text-muted-text leading-relaxed">{event.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-secondary-bg/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <SectionHeading title="Brand Assets" subtitle="Download our official logos, brand guidelines, and media resources." />
              <p className="mt-6 text-muted-text leading-relaxed">
                Access Cainoa's official brand assets including company logos in various formats, brand style guide, product imagery, and executive headshots. These resources are available for media professionals and partners to use in accordance with our brand guidelines.
              </p>
              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
                <Button size="lg" className="rounded-full gap-2 group mt-8" onClick={() => {}}>
                  <Download size={18} className="transition-transform group-hover:translate-y-0.5" />
                  Download Press Kit
                </Button>
              </motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-accent/10 via-primary/5 to-accent/5 border border-accent/20 flex items-center justify-center p-12">
                <Newspaper size={100} className="text-accent/30" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <SectionHeading title="Contact Media Team" align="center" />
            <p className="mt-6 text-muted-text leading-relaxed">
              For press inquiries, interview requests, or media accreditation, our communications team is ready to assist.
              Reach us at <a href="mailto:media@cainoa.com" className="text-accent hover:underline font-medium">media@cainoa.com</a> or call <span className="text-accent font-medium">+234 800 CAINOA</span>.
            </p>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="mt-8">
              <Button size="lg" className="rounded-full gap-2 group" onClick={() => navigate("/contact")}>
                Get in Touch <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </main>
  )
}
