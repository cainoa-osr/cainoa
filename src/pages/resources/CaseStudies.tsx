import { motion } from "framer-motion"
import PageHero from "../../components/shared/PageHero"
import SectionHeading from "../../components/shared/SectionHeading"
import CTASection from "../../components/shared/CTASection"
import { Button } from "../../components/ui/button"
import {
  Building2, Landmark, GraduationCap, Heart, TrendingUp,
  CheckCircle, Quote, ArrowRight, BarChart3, Users,
} from "lucide-react"
import { useNavigate } from "react-router-dom"

interface Metric {
  label: string
  value: string
}

interface Testimonial {
  text: string
  author: string
  role: string
}

interface CaseStudy {
  id: string
  icon: React.ElementType
  client: string
  industry: string
  region: string
  challenge: string
  solution: string
  tech: string[]
  results: Metric[]
  testimonial: Testimonial
  featured?: boolean
}

const caseStudies: CaseStudy[] = [
  {
    id: "government",
    icon: Building2,
    client: "Kaduna State Government",
    industry: "Government",
    region: "North-West Nigeria",
    challenge:
      "The Kaduna State Government needed a unified digital infrastructure to streamline citizen services, digitize land records, automate internal workflows, and establish a secure data center — all while complying with Nigeria's data protection regulations. Legacy paper-based systems caused delays of weeks for routine requests.",
    solution:
      "Cainoa designed and deployed a comprehensive smart governance platform including a centralized citizen portal, blockchain-verified land registry, automated workflow engine for 15 ministries, and a tier-III compliant data center with full disaster recovery. The system serves all 23 local government areas.",
    tech: [
      "Custom GovStack Platform",
      "Blockchain Ledger",
      "Zero-Trust Architecture",
      "Oracle DB / PostgreSQL",
      "React / Node.js",
      "Kubernetes / Docker",
    ],
    results: [
      { label: "Service Delivery Time", value: "89% Faster" },
      { label: "Annual Cost Savings", value: "₦2.4B" },
      { label: "Citizens Served", value: "4.2M+" },
      { label: "Data Sovereignty", value: "100%" },
    ],
    testimonial: {
      text: "Cainoa didn't just build us software — they built us a digital backbone. Our citizens now access services in minutes that used to take weeks. This is what true technology partnership looks like.",
      author: "Dr. Abdulkadir Abubakar",
      role: "Honourable Commissioner, Ministry of Planning & Budget",
    },
    featured: true,
  },
  {
    id: "banking",
    icon: Landmark,
    client: "First Trust Microfinance Bank",
    industry: "Financial Institutions",
    region: "North-Central Nigeria",
    challenge:
      "First Trust Microfinance Bank operated on legacy core banking infrastructure that couldn't support mobile banking, real-time transfers, or agency banking. With 80% of their customer base in rural areas, the bank needed a digital leap to remain competitive and meet CBN financial inclusion targets.",
    solution:
      "We implemented a cloud-native core banking platform with USSD mobile banking, agent banking module, real-time NIBSS integration, automated loan origination, and AI-powered credit scoring. The solution included offline-capable POS terminals for rural agents.",
    tech: [
      "Cloud-Native Core Banking",
      "USSD / Mobile API Gateway",
      "NIBSS NIP Integration",
      "AI Credit Scoring Engine",
      "PostgreSQL / Redis",
      "AWS Infrastructure",
    ],
    results: [
      { label: "Transaction Volume", value: "340% Growth" },
      { label: "Agent Network", value: "1,200+" },
      { label: "Loan Processing", value: "24x Faster" },
      { label: "Financial Inclusion", value: "65K New Accounts" },
    ],
    testimonial: {
      text: "Our partnership with Cainoa transformed us from a traditional brick-and-mortar bank into a digital financial powerhouse. We went from 50,000 to 215,000 customers in 18 months.",
      author: "Maryam Ibrahim-Okene",
      role: "Managing Director, First Trust Microfinance Bank",
    },
  },
  {
    id: "cooperatives",
    icon: Users,
    client: "ANAN Cooperative Federation",
    industry: "Cooperatives",
    region: "North-East Nigeria",
    challenge:
      "The ANAN Cooperative Federation managed 340 member cooperatives with over 200,000 members using manual ledgers and spreadsheets. Reconciliation took weeks, loan disbursement cycles were slow, and members had no visibility into their savings and contributions.",
    solution:
      "Cainoa developed a cooperative digital banking platform featuring a member-facing mobile app, automated savings/contribution tracking, instant loan disbursement, group accounting engine, and consolidated federation-level dashboards. The platform integrates with major mobile money operators.",
    tech: [
      "CoopCore Engine",
      "Mobile App (React Native)",
      "Instant Payment Gateway",
      "Group Accounting Module",
      "Firebase / Cloud Functions",
      "Data Analytics Dashboard",
    ],
    results: [
      { label: "Members Onboarded", value: "185,000+" },
      { label: "Loan Turnaround", value: "62 Hours" },
      { label: "Monthly Transactions", value: "₦1.8B" },
      { label: "Default Rate Reduction", value: "42%" },
    ],
    testimonial: {
      text: "For the first time, our cooperative members can check their savings, apply for loans, and receive disbursements from their phones. Cainoa brought us into the digital age without losing the human touch that defines cooperatives.",
      author: "Alhaji Musa Garba",
      role: "President, ANAN Cooperative Federation",
    },
  },
  {
    id: "healthcare",
    icon: Heart,
    client: "Federal Medical Centre, Gombe",
    industry: "Healthcare",
    region: "North-East Nigeria",
    challenge:
      "FMC Gombe, a 450-bed tertiary hospital, relied on paper-based records across 30+ departments. Patient records were frequently lost, wait times averaged 4+ hours, drug inventory mismanagement led to stockouts, and regulatory reporting was a manual nightmare.",
    solution:
      "We deployed a comprehensive health tech infrastructure: an integrated EMR/EHR system, RFID patient tracking, automated pharmacy inventory with expiry alerts, telemedicine module, and HIPAA-compliant data storage. All systems were built with offline-first capability for intermittent power scenarios.",
    tech: [
      "Custom EHR / EMR System",
      "RFID Patient Tracking",
      "Telemedicine Platform",
      "Pharmacy Automation",
      "MySQL / HL7 FHIR",
      "Solar-Powered Backup",
    ],
    results: [
      { label: "Patient Wait Time", value: "78% Reduction" },
      { label: "Records Digitized", value: "320,000+" },
      { label: "Drug Stockouts", value: "Eliminated" },
      { label: "Staff Productivity", value: "+54%" },
    ],
    testimonial: {
      text: "Cainoa understood that healthcare digitization in Africa requires resilience. Their offline-first architecture means our doctors never lose access to patient data, even during power outages. Lives have literally been saved because of this system.",
      author: "Dr. Aisha Muhammad",
      role: "Chief Medical Director, FMC Gombe",
    },
  },
  {
    id: "education",
    icon: GraduationCap,
    client: "University of Maiduguri",
    industry: "Educational Institutions",
    region: "North-East Nigeria",
    challenge:
      "The University of Maiduguri needed to modernize its academic infrastructure across 12 faculties and 68 departments serving over 45,000 students. The existing system couldn't handle online admissions, e-learning, digital examinations, or automated transcript generation.",
    solution:
      "Cainoa built an integrated EdTech platform including an AI-powered learning management system, automated admission and clearance portal, digital examination suite with plagiarism detection, secure transcript blockchain, and a smart campus IoT layer for attendance and facility management.",
    tech: [
      "AI Learning Management System",
      "Blockchain Transcripts",
      "Digital Exam Suite",
      "Smart Campus IoT",
      "Python / Django",
      "TensorFlow / NLP",
    ],
    results: [
      { label: "Students Served", value: "45,000+" },
      { label: "Admission Processing", value: "6 Weeks → 3 Days" },
      { label: "Examination Cost", value: "74% Reduction" },
      { label: "Transcript Issuance", value: "Instant On-Chain" },
    ],
    testimonial: {
      text: "What Cainoa delivered goes far beyond an LMS. They created a complete digital academic ecosystem. Our students across conflict-affected areas can now continue their education uninterrupted through the platform.",
      author: "Prof. Aliyu Usman El-Nafaty",
      role: "Vice-Chancellor, University of Maiduguri",
    },
  },
]

const globalMetrics: Metric[] = [
  { label: "Enterprises Served", value: "50+" },
  { label: "System Uptime", value: "99.99%" },
  { label: "Systems Deployed", value: "200+" },
  { label: "Industries Covered", value: "10+" },
]

function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  const Icon = study.icon

  if (study.featured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="rounded-3xl bg-gradient-to-br from-primary via-primary/95 to-primary overflow-hidden border border-accent/10"
      >
        <div className="grid lg:grid-cols-5">
          <div className="lg:col-span-3 p-8 lg:p-12 xl:p-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/15 border border-accent/25 text-accent text-xs font-semibold tracking-wider uppercase">
                <TrendingUp size={14} />
                Featured Case Study
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white/70 text-xs font-semibold tracking-wider uppercase">
                {study.region}
              </span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-accent/15 flex items-center justify-center">
                <Icon size={28} className="text-accent" />
              </div>
              <div>
                <p className="text-sm text-accent font-semibold">{study.industry}</p>
                <h3 className="font-heading text-2xl lg:text-3xl font-bold text-white">{study.client}</h3>
              </div>
            </div>

            <div className="space-y-6 text-white/80 leading-relaxed">
              <div>
                <h4 className="font-heading text-sm font-bold text-white/50 uppercase tracking-wider mb-2">The Challenge</h4>
                <p>{study.challenge}</p>
              </div>
              <div>
                <h4 className="font-heading text-sm font-bold text-white/50 uppercase tracking-wider mb-2">Our Solution</h4>
                <p>{study.solution}</p>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-heading text-sm font-bold text-white/50 uppercase tracking-wider mb-3">Technology Stack</h4>
              <div className="flex flex-wrap gap-2">
                {study.tech.map((t) => (
                  <span key={t} className="px-3 py-1.5 rounded-lg bg-white/10 text-white/70 text-xs font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {study.results.map((r) => (
                <div key={r.label} className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-1.5 mb-1">
                    <CheckCircle size={14} className="text-accent" />
                    <p className="text-accent font-heading text-xl font-bold">{r.value}</p>
                  </div>
                  <p className="text-white/50 text-xs">{r.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-2 text-accent font-heading text-sm font-bold">
                  <BarChart3 size={18} />
                  <span>Key Results</span>
                </div>

                <div className="mt-8 p-6 rounded-2xl bg-white/5 border border-white/10 relative">
              <Quote size={24} className="text-accent/40 absolute top-4 left-4" />
              <blockquote className="pl-8 text-white/80 italic leading-relaxed">
                &ldquo;{study.testimonial.text}&rdquo;
              </blockquote>
              <div className="mt-4 pl-8">
                <p className="text-white font-semibold">{study.testimonial.author}</p>
                <p className="text-white/50 text-sm">{study.testimonial.role}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 rounded-full bg-accent/10 blur-3xl" />
            </div>
            <div className="relative h-full flex flex-col items-center justify-center p-12 text-center">
              <div className="w-24 h-24 rounded-3xl bg-accent/15 flex items-center justify-center mb-6">
                <Icon size={48} className="text-accent" />
              </div>
              <h4 className="font-heading text-2xl font-bold text-white mb-2">{study.client}</h4>
              <p className="text-white/60">{study.industry}</p>
              <div className="mt-8 space-y-4 w-full">
                {study.results.slice(0, 2).map((r) => (
                  <div key={r.label} className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-accent font-heading text-2xl font-bold">{r.value}</p>
                    <p className="text-white/50 text-sm">{r.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="rounded-3xl bg-white border border-border overflow-hidden group hover:border-accent/20 hover:shadow-xl hover:shadow-accent/5 transition-all duration-500"
    >
      <div className="p-8 lg:p-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center">
            <Icon size={24} className="text-accent" />
          </div>
          <div>
            <p className="text-xs text-accent font-semibold tracking-wider uppercase">{study.industry}</p>
            <h3 className="font-heading text-xl font-bold text-primary">{study.client}</h3>
          </div>
        </div>

        <div className="space-y-4 text-muted-text leading-relaxed text-sm">
          <div>
            <h4 className="font-heading text-xs font-bold text-primary/60 uppercase tracking-wider mb-1">Challenge</h4>
            <p>{study.challenge}</p>
          </div>
          <div>
            <h4 className="font-heading text-xs font-bold text-primary/60 uppercase tracking-wider mb-1">Solution</h4>
            <p>{study.solution}</p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {study.results.map((r) => (
            <div key={r.label} className="p-3 rounded-xl bg-primary/5 border border-primary/10 text-center">
              <div className="flex items-center justify-center gap-1 mb-0.5">
                <CheckCircle size={12} className="text-accent" />
                <p className="text-accent font-heading text-lg font-bold">{r.value}</p>
              </div>
              <p className="text-muted-text text-xs">{r.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 p-5 rounded-2xl bg-primary/5 border border-primary/10 relative">
          <Quote size={18} className="text-accent/30 absolute top-3 left-3" />
          <blockquote className="pl-6 text-muted-text text-sm italic leading-relaxed">
            &ldquo;{study.testimonial.text}&rdquo;
          </blockquote>
          <div className="mt-3 pl-6">
            <p className="text-primary text-sm font-semibold">{study.testimonial.author}</p>
            <p className="text-muted-text text-xs">{study.testimonial.role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function CaseStudies() {
  const navigate = useNavigate()
  return (
    <main>
      <PageHero
        badge="Resources / Case Studies"
        title="Real Impact. Real Transformation."
        subtitle="Discover how Cainoa has delivered measurable results for governments, financial institutions, cooperatives, and educational institutions across Africa."
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="Featured Case Study"
            subtitle="A deep dive into one of our most impactful engagements."
            badge="Government"
          />
          <div className="mt-12">
            {caseStudies.filter((s) => s.featured).map((study, i) => (
              <CaseStudyCard key={study.id} study={study} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-secondary-bg/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="More Success Stories"
            subtitle="From fintech to healthcare to education — see how we deliver results across industries."
            align="center"
          />
          <div className="mt-16 space-y-8">
            {caseStudies.filter((s) => !s.featured).map((study, i) => (
              <CaseStudyCard key={study.id} study={study} index={i} />
            ))}
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
            className="rounded-3xl bg-gradient-to-br from-primary to-primary/95 border border-accent/10 p-10 lg:p-16"
          >
              <SectionHeading
              title="Cainoa by the Numbers"
              subtitle="Our track record speaks through the scale and reliability of our deployments."
              badge="Metrics"
            />
            <div className="mt-6 flex items-center justify-center gap-2 text-white/40">
              <BarChart3 size={20} />
              <span className="text-sm font-medium tracking-wider uppercase">Performance Highlights</span>
            </div>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {globalMetrics.map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-white/5 border border-white/10"
                >
                  <p className="font-heading text-4xl lg:text-5xl font-bold text-accent">{m.value}</p>
                  <p className="text-white/60 text-sm mt-2">{m.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Button
              size="lg"
              className="rounded-full gap-2 group"
              onClick={() => navigate("/contact")}
            >
              Start Your Transformation
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </main>
  )
}
