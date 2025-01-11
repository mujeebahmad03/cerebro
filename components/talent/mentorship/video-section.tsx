'use client'

import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { useState } from 'react'
import { Dialog, DialogContent } from '@/components/ui/dialog'

export default function VideoSection() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="py-24 bg-gradient-to-b from-sky-100/50 via-white to-transparent">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Accelerate Your Tech Career with{' '}
            <span className="text-primary">Expert Mentorship</span>
          </h2>
          <p className="text-xl text-gray-600">
            Get started in a few minutes.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3"
              alt="Mentorship program"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <button
                onClick={() => setIsOpen(true)}
                className="w-20 h-20 rounded-full bg-white/90 hover:bg-white transition-all duration-300 flex items-center justify-center group hover:scale-110 hover:shadow-xl"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Play className="h-8 w-8 text-primary group-hover:text-primary/80" />
                </motion.div>
              </button>
            </div>
          </div>
          <div className="absolute -bottom-6 left-12 right-12 h-12 bg-gradient-to-t from-black/10 to-transparent blur-lg" />
        </motion.div>
      </div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl p-0">
          <video controls className="w-full aspect-video">
            <source src="/mentorship-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </DialogContent>
      </Dialog>
    </section>
  )
}

