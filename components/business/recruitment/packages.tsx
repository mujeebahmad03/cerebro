'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const packages = [
  {
    title: 'One Time',
    features: [
      'Single recruitment campaign',
      'Access to talent pool for 30 days',
      'Basic candidate screening',
      'Interview scheduling assistance',
      'Standard job posting',
      'Email support',
    ],
    buttonText: 'Request One Time package',
  },
  {
    title: 'Serviced',
    features: [
      'Unlimited recruitment campaigns',
      'Dedicated recruitment manager',
      'Advanced candidate screening',
      'Complete interview management',
      'Premium job posting with boosting',
      'Priority support 24/7',
      'Talent pool access for 1 year',
      'Performance tracking and reporting',
    ],
    buttonText: 'Request Serviced package',
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
      className="max-w-lg mx-auto w-full"
    >
      <Card className="h-full">
        <CardHeader>
          <CardTitle className="text-2xl">{pkg.title}</CardTitle>
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

export default function RecruitmentPackages() {
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
            Recruitment <span className="text-primary">Packages</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Choose a package and embark on a pathway of Success
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <PackageCard key={pkg.title} pkg={pkg} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

