import { motion } from "framer-motion"
import PageHero from "../../components/shared/PageHero"
import SectionHeading from "../../components/shared/SectionHeading"
import CTASection from "../../components/shared/CTASection"
import { Button } from "../../components/ui/button"
import { FlaskConical, FileText, Bookmark, Microscope, Lightbulb, GraduationCap, ArrowRight, ExternalLink } from "lucide-react"
import { useNavigate } from "react-router-dom"

const aiResearch = [
  {
    icon: FlaskConical,
    title: "Low-Resource NLP for African Languages",
    authors: "Okafor, C., Abubakar, M., Eze, T.",
    venue: "International Conference on Learning Representations (ICLR), 2025",
    abstract: "We present a novel transfer-learning framework for natural language processing in low-resource African languages, achieving state-of-the-art results on Hausa, Igbo, and Yoruba text classification tasks. Our approach reduces the data requirement by 73% compared to traditional fine-tuning methods while maintaining 94% accuracy.",
    tags: ["Natural Language Processing", "African Languages", "Transfer Learning"],
  },
  {
    icon: FlaskConical,
    title: "Federated Learning for Financial Inclusion",
    authors: "Okafor, C., Adewale, K., Mohammed, S.",
    venue: "Neural Information Processing Systems (NeurIPS), 2025",
    abstract: "This paper introduces a privacy-preserving federated learning architecture designed for financial institutions in emerging markets. Our framework enables collaborative model training across multiple banks without sharing sensitive customer data, achieving 98% of centralized model performance while guaranteeing differential privacy guarantees.",
    tags: ["Federated Learning", "Financial Inclusion", "Privacy"],
  },
  {
    icon: FlaskConical,
    title: "Vision Transformers for Agricultural Yield Prediction",
    authors: "Nwachukwu, I., Okafor, C., Bello, A.",
    venue: "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), 2026",
    abstract: "We propose a novel vision transformer architecture optimized for satellite and drone imagery analysis in Sub-Saharan African agricultural contexts. Our model achieves 91% accuracy in predicting crop yields across diverse agro-ecological zones, enabling early intervention and food security planning.",
    tags: ["Computer Vision", "Agriculture", "Transformers"],
  },
]

const enterpriseTech = [
  {
    icon: Microscope,
    title: "Zero-Trust Architecture for African Government Systems",
    desc: "Developing a zero-trust security framework adapted for the unique infrastructure constraints and regulatory requirements of African government digital systems, including air-gapped deployments and legacy system integration.",
    findings: "93% reduction in attack surface with 40% lower operational overhead compared to traditional perimeter-based security models.",
  },
  {
    icon: Microscope,
    title: "Edge AI for Offline Enterprise Operations",
    desc: "Researching distributed AI inference at the edge for enterprises operating in connectivity-constrained environments. Our optimized model quantization techniques enable complex LLM inference on commodity hardware with intermittent network access.",
    findings: "Real-time AI capabilities maintained during 87% of connectivity outages with no data loss.",
  },
  {
    icon: Microscope,
    title: "Digital Identity Infrastructure for Underserved Populations",
    desc: "Building self-sovereign identity systems that leverage biometrics, blockchain, and decentralized identifiers to provide verifiable digital identities for the 500 million Africans without formal identification.",
    findings: "Successful pilot across three states enrolled 1.2 million users with 99.8% biometric match accuracy.",
  },
]

const fintechInsights = [
  {
    icon: Lightbulb,
    title: "Agentic AI for Micro-Lending",
    desc: "Autonomous AI agents that assess creditworthiness, disburse loans, and manage collections for micro-enterprises using alternative data sources including mobile money transactions, utility payments, and social credit scoring.",
    impact: "30% reduction in default rates and 3x increase in loan disbursement speed.",
  },
  {
    icon: Lightbulb,
    title: "Real-Time Fraud Detection at Scale",
    desc: "Graph neural network models that detect sophisticated fraud patterns across real-time payment rails, processing over 10,000 transactions per second with sub-100ms latency for instant decisioning.",
    impact: "False positive reduction of 65% while catching 99.2% of fraudulent transactions.",
  },
  {
    icon: Lightbulb,
    title: "Interoperable Payment Rail Architecture",
    desc: "Designing a unified payment infrastructure that seamlessly connects mobile money, bank transfers, USSD, and card networks into a single API layer with intelligent routing and settlement optimization.",
    impact: "Transaction success rates improved from 82% to 99.5% across participating institutions.",
  },
]

const whitePapers = [
  {
    icon: FileText,
    title: "The State of AI Infrastructure in Africa: 2026",
    excerpt: "A comprehensive analysis of AI readiness across 54 African nations, covering GPU availability, data center capacity, talent pools, regulatory landscapes, and investment trends shaping the continent's AI future.",
    pages: 48,
    downloads: "12,400+",
  },
  {
    icon: FileText,
    title: "Fintech Security Architecture for the Next Decade",
    excerpt: "A technical blueprint for building quantum-resistant, zero-trust fintech infrastructure that can withstand evolving cyber threats while maintaining regulatory compliance across multiple African jurisdictions.",
    pages: 62,
    downloads: "8,700+",
  },
  {
    icon: FileText,
    title: "Enterprise AI Governance Framework",
    excerpt: "A practical framework for implementing responsible AI governance in African enterprises, covering model risk management, bias detection, explainability requirements, and compliance with emerging AI regulations.",
    pages: 36,
    downloads: "6,200+",
  },
]

const publications = [
  {
    icon: Bookmark,
    title: "Journal of Artificial Intelligence Research",
    paper: "Multilingual ASR for Low-Resource African Languages",
    authors: "Abubakar, M., Okafor, C., Diallo, F.",
    year: "2025",
    doi: "10.1613/jair.2025.1247",
  },
  {
    icon: Bookmark,
    title: "ACM Transactions on Intelligent Systems",
    paper: "Context-Aware Recommendation Systems for Mobile Money Users in Emerging Markets",
    authors: "Okafor, C., Mensah, P., Adebayo, T.",
    year: "2025",
    doi: "10.1145/tis.2025.8932",
  },
  {
    icon: Bookmark,
    title: "Nature Digital Medicine",
    paper: "AI-Powered Diagnostic Decision Support for Rural Healthcare in Sub-Saharan Africa",
    authors: "Nwachukwu, I., Okafor, C., Kamau, J.",
    year: "2026",
    doi: "10.1038/s41746-026-0115-3",
  },
]

const innovationLabs = [
  {
    icon: FlaskConical,
    title: "Cainoa AI Research Lab",
    location: "Abuja, Nigeria",
    focus: "Natural language processing, computer vision, and foundation model adaptation for African languages and contexts.",
    lead: "Dr. Chidi Okafor, Chief AI Scientist",
  },
  {
    icon: FlaskConical,
    title: "Fintech Innovation Lab",
    location: "Lagos, Nigeria",
    focus: "Payment infrastructure, fraud detection, digital identity, and agentic AI for financial services.",
    lead: "Dr. Amina Bello, Head of Fintech Research",
  },
  {
    icon: FlaskConical,
    title: "Enterprise Systems Research Lab",
    location: "Kano, Nigeria",
    focus: "Distributed systems, edge computing, zero-trust security, and digital infrastructure for government and enterprise.",
    lead: "Dr. Ibrahim Nwachukwu, Director of Engineering",
  },
]

const partnerships = [
  {
    icon: GraduationCap,
    university: "University of Lagos",
    program: "AI Research Collaboration",
    desc: "Joint research program focused on natural language processing for Yoruba and other Nigerian languages, with shared GPU infrastructure and co-supervised PhD candidates.",
  },
  {
    icon: GraduationCap,
    university: "Ahmadu Bello University, Zaria",
    program: "Enterprise Technology Fellowship",
    desc: "Industry-academia partnership providing hands-on research opportunities in enterprise systems, cybersecurity, and distributed computing for top engineering graduates.",
  },
  {
    icon: GraduationCap,
    university: "Bayero University, Kano",
    program: "Fintech & Digital Economy Research Center",
    desc: "Collaborative research center exploring financial inclusion technology, mobile money analytics, and blockchain-based solutions for Northern Nigeria's digital economy.",
  },
]

const stagger = (i: number) => ({ duration: 0.5, delay: i * 0.1 })

export default function Research() {
  const navigate = useNavigate()

  return (
    <main>
      <PageHero
        badge="Resources / Research"
        title="Research & Innovation"
        subtitle="Pushing the boundaries of AI, fintech, and enterprise technology through cutting-edge research and academic partnerships."
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            badge="Artificial Intelligence"
            title="AI Research"
            subtitle="Advancing the frontiers of machine learning, natural language processing, and computer vision with a focus on African contexts."
          />
          <div className="mt-16 space-y-8">
            {aiResearch.map((paper, i) => (
              <motion.div
                key={paper.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={stagger(i)}
                whileHover={{ y: -2 }}
                className="p-8 lg:p-10 rounded-3xl border border-border bg-white hover:border-accent/20 hover:shadow-xl hover:shadow-accent/5 transition-all duration-500"
              >
                <div className="flex items-start gap-5">
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center">
                    <paper.icon size={24} className="text-accent" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <h3 className="font-heading text-xl font-bold text-primary">{paper.title}</h3>
                      <span className="shrink-0 text-xs text-muted-text">{paper.venue}</span>
                    </div>
                    <p className="mt-1 text-sm text-accent font-medium">{paper.authors}</p>
                    <p className="mt-4 text-muted-text leading-relaxed">{paper.abstract}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {paper.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-secondary-bg text-xs font-medium text-muted-text">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-secondary-bg/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            badge="Infrastructure & Security"
            title="Enterprise Technology"
            subtitle="Researching resilient, secure, and scalable enterprise systems engineered for Africa's unique infrastructure landscape."
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {enterpriseTech.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={stagger(i)}
                whileHover={{ y: -4 }}
                className="p-8 rounded-3xl border border-border bg-white hover:border-accent/20 hover:shadow-xl hover:shadow-accent/5 transition-all duration-500"
              >
                <item.icon size={28} className="text-accent mb-5" />
                <h3 className="font-heading text-lg font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-sm text-muted-text leading-relaxed mb-5">{item.desc}</p>
                <div className="p-4 rounded-2xl bg-accent/5 border border-accent/10">
                  <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">Key Finding</p>
                  <p className="text-sm text-primary">{item.findings}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            badge="Financial Technology"
            title="Fintech Insights"
            subtitle="Driving financial inclusion through research on payment infrastructure, fraud detection, and AI-powered lending systems."
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {fintechInsights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={stagger(i)}
                whileHover={{ y: -4 }}
                className="p-8 rounded-3xl border border-border bg-white hover:border-accent/20 hover:shadow-xl hover:shadow-accent/5 transition-all duration-500"
              >
                <item.icon size={28} className="text-accent mb-5" />
                <h3 className="font-heading text-lg font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-sm text-muted-text leading-relaxed mb-5">{item.desc}</p>
                <div className="p-4 rounded-2xl bg-accent/5 border border-accent/10">
                  <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">Impact</p>
                  <p className="text-sm text-primary">{item.impact}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-secondary-bg/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            badge="Resources"
            title="White Papers"
            subtitle="In-depth technical reports and industry analyses produced by our research teams."
          />
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whitePapers.map((wp, i) => (
              <motion.div
                key={wp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={stagger(i)}
                whileHover={{ y: -4 }}
                className="group p-8 rounded-3xl border border-border bg-white hover:border-accent/20 hover:shadow-xl hover:shadow-accent/5 transition-all duration-500 flex flex-col"
              >
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-5">
                  <wp.icon size={24} className="text-accent" />
                </div>
                <h3 className="font-heading text-lg font-bold text-primary mb-3">{wp.title}</h3>
                <p className="text-sm text-muted-text leading-relaxed mb-6 flex-1">{wp.excerpt}</p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex gap-4 text-xs text-muted-text">
                    <span>{wp.pages} pages</span>
                    <span>{wp.downloads} downloads</span>
                  </div>
                  <Button size="sm" variant="outline" className="rounded-full gap-1.5 text-xs">
                    Download <ExternalLink size={14} />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            badge="Peer-Reviewed"
            title="Publications"
            subtitle="Our research appears in top-tier international journals and conference proceedings."
          />
          <div className="mt-16 space-y-6">
            {publications.map((pub, i) => (
              <motion.div
                key={pub.paper}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={stagger(i)}
                whileHover={{ y: -2 }}
                className="p-6 lg:p-8 rounded-3xl border border-border bg-white hover:border-accent/20 hover:shadow-xl hover:shadow-accent/5 transition-all duration-500"
              >
                <div className="flex items-start gap-5">
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center">
                    <pub.icon size={24} className="text-accent" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-accent font-semibold uppercase tracking-wider">{pub.title}</p>
                    <h3 className="font-heading text-lg font-bold text-primary mt-1">{pub.paper}</h3>
                    <p className="mt-1 text-sm text-muted-text">{pub.authors}</p>
                    <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-muted-text">
                      <span className="px-2.5 py-1 rounded-full bg-secondary-bg font-medium">{pub.year}</span>
                      <span className="font-mono">DOI: {pub.doi}</span>
                    </div>
                  </div>
                  <ExternalLink size={18} className="shrink-0 text-muted-text/40 group-hover:text-accent transition-colors mt-2" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-secondary-bg/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            badge="Lab Facilities"
            title="Innovation Labs"
            subtitle="Our research labs are hubs of discovery, housing world-class talent and purpose-built infrastructure for breakthrough innovation."
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {innovationLabs.map((lab, i) => (
              <motion.div
                key={lab.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={stagger(i)}
                whileHover={{ y: -4 }}
                className="p-8 rounded-3xl border border-border bg-white hover:border-accent/20 hover:shadow-xl hover:shadow-accent/5 transition-all duration-500"
              >
                <lab.icon size={28} className="text-accent mb-5" />
                <h3 className="font-heading text-lg font-bold text-primary mb-1">{lab.title}</h3>
                <p className="text-xs text-accent font-medium mb-4">{lab.location}</p>
                <p className="text-sm text-muted-text leading-relaxed mb-5">{lab.focus}</p>
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-text">Lab Lead</p>
                  <p className="text-sm font-medium text-primary">{lab.lead}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            badge="Collaborations"
            title="Academic Partnerships"
            subtitle="Forging long-term collaborations with leading universities to train the next generation of AI researchers and enterprise engineers."
            align="center"
          />
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {partnerships.map((p, i) => (
              <motion.div
                key={p.university}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={stagger(i)}
                whileHover={{ y: -4 }}
                className="p-8 rounded-3xl border border-border bg-white hover:border-accent/20 hover:shadow-xl hover:shadow-accent/5 transition-all duration-500 text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
                  <p.icon size={28} className="text-accent" />
                </div>
                <h3 className="font-heading text-lg font-bold text-primary mb-1">{p.university}</h3>
                <p className="text-sm text-accent font-medium mb-4">{p.program}</p>
                <p className="text-sm text-muted-text leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-28 lg:py-36 bg-primary">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/5 to-transparent" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Partner With Our{" "}
              <span className="text-accent">Research Team</span>
            </h2>
            <p className="mt-6 text-lg text-white/60 leading-relaxed">
              Collaborate with Cainoa's world-class researchers on joint projects, sponsored research, and technology transfer initiatives.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button
                size="lg"
                className="rounded-full gap-2 group bg-accent hover:bg-accent/90 mt-10"
                onClick={() => navigate("/contact")}
              >
                Explore Research Collaboration
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </main>
  )
}
