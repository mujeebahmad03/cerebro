'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar } from 'lucide-react'
import Image from 'next/image'

export default function SchedulingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative">
      <div className="absolute inset-0 opacity-5 pattern-grid" />
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Easily schedule Mentorship meetings with professionals in your field
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Streamline your meeting scheduling process effortlessly with our user-friendly Mentorship schedule page. Our platform ensures easy accessibility, allowing you to plan and organize mentorship meetings seamless.
            </p>
            <motion.div
              className="flex items-center gap-4 text-primary"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Calendar className="h-6 w-6" />
              </motion.div>
              <span className="text-lg font-semibold">Available 24/7</span>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-10%20at%2023.56.44-QrCw4Br1R6ed3uXc3sINot0MzRL26H.png"
                alt="Scheduling interface"
                className="w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
            </div>
            <motion.div
              className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -top-6 -left-6 w-32 h-32 bg-sky-100/50 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

