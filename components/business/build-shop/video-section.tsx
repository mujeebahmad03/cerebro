"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function VideoSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-blue-100/50 py-16 lg:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-4"
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                All Your Tech Solutions,{" "}
                <span className="text-primary">Seamlessly Managed</span>
              </h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-2xl/relaxed">
                Get started in a few minutes.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="inline-flex gap-2">
                Watch Demo
                <Play className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative aspect-video overflow-hidden rounded-xl border bg-white shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-black/5 via-black/5 to-black/20" />
            <video
              className="h-full w-full object-cover"
              poster="/placeholder.svg"
              controls
            >
              <source src="/video-placeholder.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
