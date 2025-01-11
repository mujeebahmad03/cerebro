"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Play, Zap, Users, Briefcase } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";

const features = [
  {
    icon: Zap,
    title: "Training",
    description: "Kickstart your journey of learning and personal growth",
    link: "/talent/training",
  },
  {
    icon: Users,
    title: "Mentorship",
    description: "Connect with experts and level up your skills",
    link: "/talent/mentorship",
  },
  {
    icon: Briefcase,
    title: "WorkCentre",
    description: "Access flexible job opportunities with various companies",
    link: "/talent/work-center",
  },
];

export default function TalentSection() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-24 bg-gradient-to-br from-neutral-50 via-white to-neutral-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-neutral-800">
            Cerebro for Talent
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Empowering young talent with cutting-edge skills, mentorship, and
            flexible job opportunities for a dynamic career.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl lg:text-3xl font-bold mb-8 text-neutral-800">
              Join a platform that brings your ideas to life
            </h3>
            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ delay: 0.2 * index }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-sky-100 flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-sky-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-neutral-800">
                      {feature.title}
                    </h4>
                    <p className="text-neutral-600 mb-2">
                      {feature.description}
                    </p>
                    <Link
                      href={feature.link}
                      className="text-sky-500 hover:text-sky-600 hover:underline font-medium"
                    >
                      Learn more
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6 }}
              className="mt-8"
            >
              <Button
                asChild
                size="lg"
                className="bg-sky-500 text-white hover:bg-sky-600"
              >
                <Link href="/talent">Explore All Opportunities</Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3"
                alt="Talent development"
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
                    <Play className="h-8 w-8 text-sky-500 group-hover:text-sky-600" />
                  </motion.div>
                </button>
              </div>
            </div>

            <motion.div
              className="absolute -bottom-6 -right-6 w-24 h-24 bg-sky-200 rounded-full"
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
          </motion.div>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl p-0">
          <video controls className="w-full aspect-video">
            <source src="/talent-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </DialogContent>
      </Dialog>
    </section>
  );
}
