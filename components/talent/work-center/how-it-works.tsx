'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Button } from '@/components/ui/button'
import { ClipboardCheck, CheckCircle, MousePointerClick, Handshake } from 'lucide-react'

const steps = [
  {
    title: 'Register in 2 minutes',
    description: 'Click on the "REGISTER" button to enter your Email and create an account',
    icon: ClipboardCheck,
  },
  {
    title: 'Get Verified',
    description: 'Click on the Verification button in your Email to verify your account',
    icon: CheckCircle,
  },
  {
    title: 'Select Project Category(ies)',
    description: 'Choose between the Solo Works and/or Pool Works',
    icon: MousePointerClick,
  },
  {
    title: 'Connect and Thrive',
    description: 'Get the help you need in every aspect you can think of, academically/career-wise',
    icon: Handshake,
  },
]

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      className="relative group"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex flex-col items-center text-center transform transition-transform duration-300 group-hover:scale-105">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:shadow-lg">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <step.icon className="w-8 h-8 text-primary" />
          </motion.div>
        </div>
        <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-primary">
          {step.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
      </div>
      {index < steps.length - 1 && (
        <div className="hidden md:block absolute top-8 left-[60%] w-[calc(100%-4rem)] h-[2px]">
          <motion.div
            className="h-full bg-gradient-to-r from-primary/20 to-transparent"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          />
        </div>
      )}
    </motion.div>
  )
}

export default function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="py-24 bg-sky-50">
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
            A Step-by-Step Guide to Work Center
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
          <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
            Join Build Shop
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

