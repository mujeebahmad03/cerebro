'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Button } from '@/components/ui/button'
import { CalendarDays, CheckCircle, GraduationCap, UserPlus } from 'lucide-react'

const steps = [
  {
    title: 'Register in 2 minutes',
    description: 'Click on the "REGISTER" button to enter your Email and create an account',
    icon: UserPlus,
  },
  {
    title: 'Get Verified',
    description: 'Click on the Verification button in your Email to verify your account',
    icon: CheckCircle,
  },
  {
    title: 'Enroll Preferred Course(s)',
    description: 'Explore our range of professional courses which help in your learning journey',
    icon: CalendarDays,
  },
  {
    title: 'Start Learning',
    description: 'Start learning and ignite the path to endless possibilities!',
    icon: GraduationCap,
  },
]

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
        <step.icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">{step.description}</p>
    </motion.div>
  )
}

export default function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="py-24 bg-sky-100">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            A Step-by-Step Guide to Training
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <StepCard key={step.title} step={step} index={index} />
          ))}
        </div>
        <motion.div
          className="text-center"
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

