'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function RecruitmentHero() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3"
          alt="Professional recruitment"
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
            RECRUITMENT
          </motion.h1>
          <motion.p
            className="text-xl lg:text-2xl mb-8 text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Identify, Source and Interview talents without hassle
          </motion.p>
          <motion.p
            className="text-lg mb-8 text-white/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Our recruitment product connects small-scale businesses with top-tier through talent 
            vetting processes to ensure the right fit for your needs. We also offer optional 
            service management, including retraining, upskilling, or replacement, to keep your 
            team performing at its best.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Button size="lg" className="text-lg px-8 bg-white text-primary hover:bg-white/90">
              Explore Now
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

