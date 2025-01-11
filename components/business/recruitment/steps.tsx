'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ClipboardCheck, FileText, Package, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'

const steps = [
  {
    title: 'Register in 2 minutes',
    description: 'Click on the "REGISTER" button to enter your Email and create an account',
    icon: ClipboardCheck,
  },
  {
    title: 'Select Recruitment Package(s)',
    description: 'Choose your preferred recruitment package',
    icon: Package,
  },
  {
    title: 'Fill request Form',
    description: 'Fill request form with detailed information of your preference',
    icon: FileText,
  },
  {
    title: 'Tap into expertise',
    description: 'Get to join forces with exceptional talents',
    icon: Users,
  },
]

function StepCard({ step, index }: { step: typeof steps[0], index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center text-center bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
        <step.icon className="h-8 w-8 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
    </motion.div>
  )
}

export default function RecruitmentSteps() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            How it <span className="text-primary">Works</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            A Step-by-Step Guide to Recruitment
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <StepCard key={step.title} step={step} index={index} />
          ))}
        </div>
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Button size="lg">Register</Button>
        </motion.div>
      </div>
    </section>
  )
}

