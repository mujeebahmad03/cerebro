'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function BuildShopCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3"
          alt="Robotic hand"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/90"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          className="max-w-2xl mx-auto text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Do you need help bringing that{' '}
            <span className="text-primary">IDEA TO LIFE</span>?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Connect to the right professional talent available in our Build Shop
          </p>
          <Button size="lg" asChild>
            <Link href="/business/build-shop">Start a Project</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

