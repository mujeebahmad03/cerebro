"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const packages = [
  {
    name: "Pro Bono",
    description: "Perfect for businesses looking to get started",
    badge: "Free",
    features: [
      { text: "Zero cost for businesses, fully free service" },
      { text: "Handled by aspiring talents still in training" },
      { text: "Minimal management; client oversees project simplicity" },
      { text: "Rapid delivery in 1-2 days, micro-tasks only" },
    ],
    buttonText: "Request Pro Bono package",
  },
  {
    name: "Talent Selection",
    description: "For businesses seeking experienced professionals",
    popular: true,
    features: [
      {
        text: "Affordable rates with flexible pricing per service",
        highlight: true,
      },
      { text: "Experienced professionals compete or are pre-selected" },
      { text: "Client-driven communication and project oversight" },
      { text: "Custom timelines based on talent and task scope" },
    ],
    buttonText: "Request Talent Selection package",
  },
  {
    name: "Managed Service",
    description: "Full-service solution with premium support",
    badge: "Premium",
    features: [
      { text: "Premium service with additional project management fees" },
      {
        text: "Expert professionals selected and managed by Cerebro",
        highlight: true,
      },
      { text: "Full-service support for seamless project execution" },
      { text: "Tailored timelines with efficient delivery guarantees" },
    ],
    buttonText: "Request Managed Service package",
  },
];

const MotionCard = motion(Card);

function PackageCard({
  pkg,
  index,
}: {
  pkg: (typeof packages)[0];
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
    >
      <MotionCard
        key={pkg.name}
        className={`flex flex-col h-full relative ${
          pkg.popular ? "border-primary shadow-lg" : ""
        }`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
      >
        {pkg.popular && (
          <div className="absolute -top-3 -right-3">
            <Badge className="px-3 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full shadow-md">
              Most Popular
            </Badge>
          </div>
        )}
        <CardHeader className="space-y-4 pb-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl font-bold">{pkg.name}</CardTitle>
              {pkg.badge && (
                <Badge
                  variant={pkg.badge === "Premium" ? "default" : "secondary"}
                  className="px-3 py-1"
                >
                  {pkg.badge}
                </Badge>
              )}
            </div>
            <CardDescription className="text-base">
              {pkg.description}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <ul className="space-y-5">
            {pkg.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="rounded-full bg-primary/10 p-1">
                  <Check
                    className={`h-5 w-5 ${
                      feature.highlight ? "text-primary" : "text-primary/60"
                    }`}
                  />
                </div>
                <span
                  className={`text-sm ${
                    feature.highlight
                      ? "text-primary font-medium"
                      : "text-gray-500"
                  }`}
                >
                  {feature.text}
                </span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="pt-6">
          <Button
            className="w-full text-base h-12 rounded-xl transition-all duration-200"
            variant={pkg.badge === "Premium" ? "default" : "outline"}
            onClick={() => console.log(`${pkg.name} requested`)}
          >
            {pkg.buttonText}
            {pkg.badge === "Premium" && <Sparkles className="w-4 h-4 ml-2" />}
          </Button>
        </CardFooter>
      </MotionCard>
    </motion.div>
  );
}

export default function PackagesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-24 bg-gray-100/50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Build Shop <span className="text-primary">Packages</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Choose a package and embark on a pathway of Success
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <PackageCard key={pkg.name} pkg={pkg} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
