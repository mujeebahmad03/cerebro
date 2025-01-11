'use client'

import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { useState } from 'react'
import { Dialog, DialogContent } from '@/components/ui/dialog'

export default function VideoSection() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="py-24 bg-gradient-to-b from-primary/10 to-transparent">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Top Tech Talents, Fully Managed for Success
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Get started in a few minutes.
          </p>
        </motion.div>
        <motion.div
          className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3"
            alt="Recruitment process"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <button
              onClick={() => setIsOpen(true)}
              className="w-20 h-20 rounded-full bg-white/90 hover:bg-white transition-colors flex items-center justify-center"
            >
              <Play className="h-8 w-8 text-primary" />
            </button>
          </div>
        </motion.div>
      </div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl p-0">
          <video controls className="w-full aspect-video">
            <source src="/recruitment-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </DialogContent>
      </Dialog>
    </section>
  )
}

