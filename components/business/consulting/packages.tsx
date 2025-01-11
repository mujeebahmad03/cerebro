'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const packages = [
  {
    title: 'Basic',
    price: 'N0',
    features: [
      'Business pays only for services needed',
      'Limited access to consulting services',
      'Basic support and guidance',
      'Pay-as-you-go model',
    ],
    buttonText: 'Get Started',
  },
  {
    title: 'Standard',
    price: 'N100',
    features: [
      'Provides support with a tech consultant',
      'Expert advice with daily tech issues',
      'Immediate response within 24hrs',
      'Better for businesses needing quick insights and solutions',
    ],
    buttonText: 'Buy Package',
  },
  {
    title: 'Premium',
    price: 'N100',
    features: [
      'High-level strategic and project management for large scale projects',
      'Direct communication (24hr response time)',
      'Weekly review meetings',
      'Priority access to consultants',
    ],
    buttonText: 'Buy Package',
  },
  {
    title: 'Enterprise',
    price: 'N100',
    features: [
      'All the basic features',
      'Extended team support (24hr response time)',
      'Project management and oversight',
      'Tailored for businesses establishing unique tech strategies',
    ],
    buttonText: 'Buy Package',
  },
]

function PackageCard({ pkg, index }: { pkg: typeof packages[0], index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full">
        <CardHeader>
          <CardTitle className="text-2xl">{pkg.title}</CardTitle>
          <p className="text-3xl font-bold text-primary">{pkg.price}</p>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {pkg.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary shrink-0 mt-1" />
                <span className="text-gray-600 dark:text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full">{pkg.buttonText}</Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

export default function ConsultingPackages() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

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
            Consulting <span className="text-primary">Packages</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Choose a package and embark on a pathway of Success
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <PackageCard key={pkg.title} pkg={pkg} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

