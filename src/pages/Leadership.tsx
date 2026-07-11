import { motion } from "framer-motion"
import PageHero from "../components/shared/PageHero"
import SectionHeading from "../components/shared/SectionHeading"
import CTASection from "../components/shared/CTASection"
import { Button } from "../components/ui/button"
import { ExternalLink, ArrowRight, Users, Cpu, Building2, Star } from "lucide-react"
import { useNavigate } from "react-router-dom"

const executiveTeam = [
  {
    initials: "AS",
    name: "Abdullahi Suleiman",
    title: "CEO & Co-Founder",
    bio: "Abdullahi founded Cainoa with a mission to build Africa's sovereign AI infrastructure. With over 15 years in enterprise technology, he has led digital transformation programs for governments and financial institutions across Northern Nigeria.",
    gradient: "from-blue-600 to-indigo-600",
  },
  {
    initials: "AY",
    name: "Amina Yusuf",
    title: "Chief Technology Officer",
    bio: "Amina architects Cainoa's entire technology stack, from cloud infrastructure to AI deployment pipelines. She brings deep expertise in distributed systems, machine learning operations, and zero-trust security frameworks.",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    initials: "IM",
    name: "Ibrahim Musa",
    title: "Chief Operating Officer",
    bio: "Ibrahim ensures Cainoa delivers on every commitment with operational excellence. He oversees project delivery, client relationships, and the company's growing footprint across multiple African markets.",
    gradient: "from-purple-600 to-pink-600",
  },
  {
    initials: "FU",
    name: "Fatima Usman",
    title: "Chief Information Security Officer",
    bio: "Fatima leads Cainoa's cybersecurity practice, building military-grade defense systems for enterprise clients. She previously headed security operations for a leading fintech platform serving millions across West Africa.",
    gradient: "from-orange-500 to-red-600",
  },
]

const engineeringLeaders = [
  {
    initials: "ZI",
    name: "Zaynab Ibrahim",
    title: "VP of Engineering",
    bio: "Zaynab leads a world-class engineering organization spanning full-stack development, DevOps, and platform engineering. She champions engineering rigor and technical mentorship across the team.",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    initials: "MG",
    name: "Mohammed Garba",
    title: "Head of AI",
    bio: "Mohammed drives Cainoa's AI strategy, including LLM deployment, computer vision systems, and predictive analytics. His research background bridges cutting-edge AI research with real-world enterprise applications.",
    gradient: "from-violet-600 to-indigo-700",
  },
  {
    initials: "AB",
    name: "Aisha Bello",
    title: "Head of Infrastructure",
    bio: "Aisha architects the cloud and on-premise infrastructure powering Cainoa's enterprise deployments. She specializes in high-availability systems, edge computing, and scalable network architecture.",
    gradient: "from-green-600 to-emerald-700",
  },
]

const productLeaders = [
  {
    initials: "HI",
    name: "Hassan Idris",
    title: "Chief Product Officer",
    bio: "Hassan translates complex technical capabilities into intuitive enterprise products. He oversees the product lifecycle from discovery through delivery, ensuring every solution solves real market needs.",
    gradient: "from-rose-600 to-pink-700",
  },
  {
    initials: "KS",
    name: "Khadija Sani",
    title: "Head of Product Design",
    bio: "Khadija leads product design with a human-centered approach, crafting interfaces that make powerful AI systems accessible. Her team sets the standard for enterprise UX across all Cainoa platforms.",
    gradient: "from-amber-500 to-orange-600",
  },
]

const advisoryBoard = [
  {
    initials: "JO",
    name: "Dr. James Okafor",
    title: "AI Research Advisor",
    bio: "Dr. Okafor is a leading AI researcher with publications in natural language processing and machine learning. He advises Cainoa on research direction and emerging AI capabilities for the African context.",
    gradient: "from-sky-600 to-blue-700",
  },
  {
    initials: "SN",
    name: "Sarah Ngozi",
    title: "Fintech Strategy Advisor",
    bio: "Sarah brings decades of experience in African financial services and digital banking. She guides Cainoa's fintech strategy and regulatory approach across multiple jurisdictions.",
    gradient: "from-teal-600 to-cyan-700",
  },
  {
    initials: "PE",
    name: "Paul Eze",
    title: "Cybersecurity Advisor",
    bio: "Paul is a cybersecurity veteran who has built security programs for global enterprises. He advises Cainoa's security framework and helps maintain the highest standards of data protection.",
    gradient: "from-slate-700 to-gray-800",
  },
]

const principles = [
  {
    icon: Users,
    title: "Lead with Impact",
    desc: "Every decision we make is measured by its impact on Africa's technological sovereignty and the communities we serve.",
  },
  {
    icon: Star,
    title: "Engineer Trust",
    desc: "Trust is our most valuable asset. We earn it through transparency, security, and unwavering reliability in everything we build.",
  },
  {
    icon: Building2,
    title: "Think Long-Term",
    desc: "We build infrastructure that lasts decades, not quarters. Sustainable systems require patient capital and enduring vision.",
  },
  {
    icon: Cpu,
    title: "Empower Teams",
    desc: "Great leaders build great teams. We invest in our people, foster ownership, and create environments where talent thrives.",
  },
]

function LeaderCard({ person, index }: { person: typeof executiveTeam[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="p-8 rounded-3xl border border-border bg-white hover:border-accent/20 hover:shadow-xl hover:shadow-accent/5 transition-all duration-500"
    >
      <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${person.gradient} flex items-center justify-center mb-6`}>
        <span className="text-white text-xl font-bold">{person.initials}</span>
      </div>
      <h3 className="font-heading text-xl font-bold text-primary">{person.name}</h3>
      <p className="text-accent font-semibold text-sm mt-1">{person.title}</p>
      <p className="mt-4 text-muted-text text-sm leading-relaxed">{person.bio}</p>
      <button className="mt-6 inline-flex items-center gap-2 text-sm text-muted-text hover:text-accent transition-colors">
        <ExternalLink size={16} /> LinkedIn
      </button>
    </motion.div>
  )
}

export default function Leadership() {
  const navigate = useNavigate()

  return (
    <main>
      <PageHero
        badge="Leadership"
        title="Meet the Leaders Behind Cainoa"
        subtitle="The visionaries and engineers driving Africa's AI infrastructure revolution."
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title="Executive Team" subtitle="The leadership steering Cainoa's mission and vision across Africa." />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {executiveTeam.map((person, i) => (
              <LeaderCard key={person.name} person={person} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-secondary-bg/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title="Engineering Leadership" subtitle="The technical minds building Africa's most advanced AI infrastructure." />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {engineeringLeaders.map((person, i) => (
              <LeaderCard key={person.name} person={person} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title="Product Leadership" subtitle="The team shaping Cainoa's product vision and user experience." />
          <div className="mt-16 grid sm:grid-cols-2 max-w-2xl gap-6">
            {productLeaders.map((person, i) => (
              <LeaderCard key={person.name} person={person} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-secondary-bg/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title="Advisory Board" subtitle="Trusted experts guiding Cainoa's strategy, research, and security." />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advisoryBoard.map((person, i) => (
              <LeaderCard key={person.name} person={person} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title="Our Leadership Principles" subtitle="The values that define how we lead, build, and grow." align="center" />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-8 rounded-3xl border border-border bg-white hover:border-accent/20 hover:shadow-xl hover:shadow-accent/5 transition-all duration-500"
              >
                <p.icon size={28} className="text-accent mb-5" />
                <h3 className="font-heading text-lg font-bold text-primary mb-2">{p.title}</h3>
                <p className="text-sm text-muted-text leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-secondary-bg/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              title="Join the Team"
              subtitle="We are always looking for exceptional leaders and engineers who share our vision for Africa's digital future."
              align="center"
            />
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Button size="lg" className="rounded-full gap-2 group mt-8" onClick={() => navigate("/careers")}>
                View Open Positions <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  )
}
