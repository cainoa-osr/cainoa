import { motion } from "framer-motion"

interface PageHeroProps {
  title: string
  subtitle: string
  badge?: string
}

export default function PageHero({ title, subtitle, badge }: PageHeroProps) {
  return (
    <section className="relative pt-40 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-secondary-bg/50 to-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          {badge && (
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
              {badge}
            </span>
          )}
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-primary">
            {title}
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-muted-text max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
