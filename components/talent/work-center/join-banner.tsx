'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function JoinBanner() {
  return (
    <section className="bg-black text-white py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h2 className="text-xl font-semibold mb-2">
              Looking for flexible jobs that fit your skills and career goals?
            </h2>
            <p className="text-gray-400">
              Are you looking to work as an intern, freelancer, full-time or part-time? then the Workforce is for you.
            </p>
          </div>
          <Button size="lg" className="bg-primary text-white hover:bg-primary/90 whitespace-nowrap">
            Join the Workforce
          </Button>
        </div>
      </motion.div>
    </section>
  )
}

