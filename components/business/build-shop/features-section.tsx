'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Coins, Lightbulb, Clock, Users } from 'lucide-react'

const features = [
  {
    title: 'Cost Efficiency',
    description: 'The Build Shop helps you get the most out of your development budget without giving up on quality or growth.',
    icon: Coins,
  },
  {
    title: 'Comprehensive IT Solutions',
    description: 'We offer a complete range of technology services to meet all your IT needs in one place.',
    icon: Lightbulb,
  },
  {
    title: 'Innovation and Creativity',
    description: `Our talent's experience with many projects across different industries gives a unique and creative way to solve problems.`,
    icon: Users,
  },
  {
    title: 'Streamlined Project Management',
    description: 'We make the process of managing a project simpler and more efficient, as everything runs smoothly and gets done on time.',
    icon: Clock,
  },
]

function FeatureCard({ feature, index }: { feature: typeof features[0], index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
        <feature.icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
    </motion.div>
  )
}

export default function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Why choose the <span className="text-primary">Build Shop</span>?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Benefits of using our build shop
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

