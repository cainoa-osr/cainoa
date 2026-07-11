import { motion } from "framer-motion"
import gsuLogo from "../assets/gsu alumni.png"
import aqtrisLogo from "../assets/aqtris-logo-solid-1color.png"

type PartnerWithLogo = { name: string; logo: string; description: string }
type PartnerWithInitials = { name: string; initials: string; description: string }
type Partner = PartnerWithLogo | PartnerWithInitials

const partners: Partner[] = [
  {
    name: "Sukra LTD",
    initials: "SL",
    description: "Technology & Investment",
  },
  {
    name: "Aqtris Technologies",
    logo: aqtrisLogo,
    description: "Digital Innovation",
  },
  {
    name: "GSU Alumni Payment Collector",
    logo: gsuLogo,
    description: "Digital Payment Solutions",
  },
  {
    name: "Benevolence Cooperative Society",
    initials: "BC",
    description: "Financial Inclusion",
  },
  {
    name: "FMBN Equishare Cooperative Society",
    initials: "FE",
    description: "Housing Finance",
  },
]

function hasLogo(partner: Partner): partner is PartnerWithLogo {
  return "logo" in partner
}

export default function PartnersSection() {
  return (
    <section id="partners" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-primary">
            Powering Innovation{" "}
            <span className="text-accent">Alongside</span>
          </h2>
          <p className="mt-6 text-lg text-muted-text leading-relaxed">
            Trusted by organizations building the future of Africa&apos;s digital
            economy.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative flex flex-col items-center justify-center p-6 rounded-3xl border border-border bg-white hover:border-accent/20 hover:shadow-xl hover:shadow-accent/5 transition-all duration-500"
            >
              {hasLogo(partner) ? (
                <div className="w-full h-24 flex items-center justify-center mb-4 px-4">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ) : (
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border/50 flex items-center justify-center mb-4 group-hover:from-accent/10 group-hover:to-accent/5 group-hover:border-accent/20 transition-all duration-500">
                  <span className="font-heading text-xl font-bold text-primary group-hover:text-accent transition-colors duration-500">
                    {partner.initials}
                  </span>
                </div>
              )}
              <h3 className="font-heading text-sm font-semibold text-primary text-center group-hover:text-accent transition-colors duration-500">
                {partner.name}
              </h3>
              <p className="text-xs text-muted-text mt-1 text-center">
                {partner.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
