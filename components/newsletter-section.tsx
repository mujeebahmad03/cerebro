'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function NewsletterSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated with Cerebro
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Subscribe to our newsletter for special offers, discounts, and announcements
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center">
            <Input
              type="email"
              placeholder="Enter your email"
              className="max-w-xs flex-grow"
            />
            <Button type="submit" className="bg-primary text-white hover:bg-primary/90">Subscribe</Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

