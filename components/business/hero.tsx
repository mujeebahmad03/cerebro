'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import ImageSlider from './image-slider'

export default function BusinessHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <ImageSlider />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <motion.h1 
              className="text-4xl lg:text-7xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Are you ready to bring your{' '}
              <span className="text-sky-200">IDEA TO LIFE</span>?
            </motion.h1>
            <motion.p 
              className="text-xl lg:text-2xl text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              We specialize in connecting businesses with top-tier talent, offering 
              expert consultation to overcome challenges and crafting bespoke 
              solutions through our Build Shop.
            </motion.p>
            <motion.p 
              className="text-lg text-white/80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              From concept to implementation, we handle every step, ensuring your 
              business thrives in the digital age.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="pt-4 space-x-4"
            >
              <Button 
                size="lg" 
                variant="secondary"
                className="text-lg px-8"
                asChild
              >
                <Link href="/business/build-shop">Get Started</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 bg-transparent text-white border-white hover:bg-white/10"
                asChild
              >
                <Link href="/business/consulting">Learn More</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

