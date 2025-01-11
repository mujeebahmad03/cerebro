"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Users, Scale, TrendingUp } from "lucide-react";

const features = [
  {
    title: "Skill Development",
    description:
      "Enhance your expertise with our comprehensive training programs",
    icon: Zap,
  },
  {
    title: "Expert Mentorship",
    description: "Learn from industry professionals who guide your growth",
    icon: Users,
  },
  {
    title: "Flexible Work",
    description: "Find opportunities that match your schedule and goals",
    icon: Scale,
  },
  {
    title: "Career Growth",
    description: "Build a successful career path with our support",
    icon: TrendingUp,
  },
];

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="relative p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full transform hover:scale-105">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-transparent rounded-2xl" />
        <div className="relative">
          <div className="w-12 h-12 rounded-lg bg-sky-500/10 flex items-center justify-center mb-4 group-hover:bg-sky-500/30 transition-colors">
            <feature.icon className="w-6 h-6 text-sky-500" />
          </div>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-sky-500 transition-colors">
            {feature.title}
          </h3>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Features() {
  return (
    <section className="py-24 bg-gradient-to-b from-sky-50/50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
