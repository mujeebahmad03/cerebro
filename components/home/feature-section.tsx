'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Users, TrendingUp, Brain, Workflow } from 'lucide-react'

const features = [
  {
    icon: Users,
    title: 'Talent Access',
    description: 'Connect with skilled professionals tailored to your needs.'
  },
  {
    icon: TrendingUp,
    title: 'Business Growth',
    description: 'Scale your operations effectively with our comprehensive solutions.'
  },
  {
    icon: Brain,
    title: 'Expert Consulting',
    description: 'Get strategic guidance from industry experts to drive innovation.'
  },
  {
    icon: Workflow,
    title: 'Flexible Solution',
    description: 'Customized approaches to meet your unique business requirements.'
  }
]

export default function FeatureSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="py-24 bg-gradient-to-br from-neutral-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-neutral-800">Our Core Features</h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Empowering businesses with innovative solutions and expert support.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-neutral-800">{feature.title}</h3>
              <p className="text-neutral-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

