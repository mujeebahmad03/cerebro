'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function ConsultingHero() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3"
          alt="Consulting session"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40"></div>
      </div>
      <motion.div
        className="container mx-auto px-4 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-2xl text-white">
          <motion.h1
            className="text-4xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            CONSULTING
          </motion.h1>
          <motion.p
            className="text-xl lg:text-2xl mb-8 text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            We give expert management advice to professionals
          </motion.p>
          <motion.p
            className="text-lg mb-8 text-white/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            The consulting platform offers expert technology advice and consulting services tailored to
            the needs of small-scale, non-tech-savvy businesses.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Button size="lg" className="text-lg px-8 bg-white text-primary hover:bg-white/90">
              Explore now
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

