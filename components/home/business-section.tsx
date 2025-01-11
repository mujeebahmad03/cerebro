"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Users, TrendingUp, Brain, Play } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const features = [
  {
    title: "Recruitment",
    description: "Find the right match. Hire top talent and boost your team.",
    icon: Users,
    link: "/business/recruitment",
  },
  {
    title: "Consulting",
    description: "Achieve business growth with expert guidance and strategy.",
    icon: TrendingUp,
    link: "/business/consulting",
  },
  {
    title: "BuildShop",
    description: "Turn concepts into reality with our tech solutions.",
    icon: Brain,
    link: "/business/build-shop",
  },
];

export default function BusinessSection() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-24 bg-gradient-to-br from-white via-sky-50/30 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-neutral-800">
            Cerebro for Business
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Discover easy access to tech talent, expert advice, and flexible
            solutions to boost your business efficiency.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?ixlib=rb-4.0.3"
                alt="Business solutions"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
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
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <h3 className="text-2xl lg:text-3xl font-bold mb-8 text-neutral-800">
              Building Talent Features: Your partner in Talent, Strategy and
              Technology
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
                <Link href="/business">Explore Business Solutions</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl p-0">
          <video controls className="w-full aspect-video">
            <source src="/business-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </DialogContent>
      </Dialog>
    </section>
  );
}
