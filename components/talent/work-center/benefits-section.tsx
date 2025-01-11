'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Briefcase, Users, TrendingUp } from 'lucide-react'

const benefits = [
  {
    title: 'Flexible Job Opportunities',
    description: 'Choose your own schedule and work style, giving you a full range of opportunities with our flexible job opportunities.',
    icon: Briefcase,
  },
  {
    title: 'Quality Talent Matching',
    description: 'We connect you with jobs that align with your skills and ensure you are matched with the right opportunities for your unique talents.',
    icon: Users,
  },
  {
    title: 'Career Growth Support',
    description: 'We help you grow in your career with free high-quality resources, job opportunities and reach your full potential.',
    icon: TrendingUp,
  },
]

function BenefitCard({ benefit, index }: { benefit: typeof benefits[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 h-full transition-all duration-300 hover:shadow-xl hover:scale-105">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
          <benefit.icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
      </div>
    </motion.div>
  )
}

export default function BenefitsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Why the <span className="text-primary">Work Center</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Benefits of choosing the workcentre
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <BenefitCard key={benefit.title} benefit={benefit} index={index} />
          ))}
        </div>
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
            Get On Board
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

