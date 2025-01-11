'use client'

import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { useState } from 'react'
import { Dialog, DialogContent } from '@/components/ui/dialog'

export default function VideoSection() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="py-24 bg-gradient-to-b from-sky-100 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Your Pathway to a <span className="text-primary">Thriving Tech Career</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Get started in just a few minutes and embark on your journey to success.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3"
              alt="Tech career pathway"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <button
                onClick={() => setIsOpen(true)}
                className="w-20 h-20 rounded-full bg-white/90 hover:bg-white transition-colors flex items-center justify-center group"
              >
                <Play className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl p-0">
          <video controls className="w-full aspect-video">
            <source src="/training-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </DialogContent>
      </Dialog>
    </section>
  )
}

