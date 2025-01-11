'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Button } from '@/components/ui/button'

export default function IdeaSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="relative rounded-3xl overflow-hidden"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Idea Concept"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40"></div>
          </div>
          <div className="relative z-10 py-20 px-6 md:px-12 lg:px-20">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-2xl text-white"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Do you need help bringing that
              </h2>
              <p className="text-4xl md:text-5xl font-bold text-white mb-6">
                IDEA TO LIFE?
              </p>
              <p className="text-xl mb-8 text-white/80">
                Connect to the right professional talent available in our Build Shop
              </p>
              <Button size="lg" className="text-lg bg-white text-primary hover:bg-white/90">
                Start a Project
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

