'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Button } from '@/components/ui/button'

export default function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="py-16 bg-gray-900 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            ref={ref}
            className="lg:w-2/3"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Need skilled talent for your projects?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Subscribe to our recruitment package and get the best hands on your team.
            </p>
            <Button size="lg" variant="secondary">
              Subscribe to a Recruitment Package
            </Button>
          </motion.div>
          <motion.div
            className="lg:w-1/3"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src="/recruitment-illustration.svg"
              alt="Recruitment illustration"
              className="w-full max-w-md mx-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

