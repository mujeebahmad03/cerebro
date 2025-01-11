'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const packages = [
  {
    title: 'Free',
    price: 'N0',
    type: 'Free',
    features: [
      'Limited access to mentorship platform',
      '24hrs response time',
      'Email support only',
      'Basic career guidance',
    ],
    popular: false,
  },
  {
    title: 'Bundle/Email',
    price: 'N100',
    type: 'Bundle/Email',
    features: [
      'Full access to mentorship platform',
      '12hrs response time',
      'Priority email support',
      'Comprehensive career guidance',
      'Monthly progress tracking',
    ],
    popular: true,
  },
  {
    title: 'Solo/Email',
    price: 'N100',
    type: 'Solo/Email',
    features: [
      'Dedicated mentor',
      '6hrs response time',
      'Priority email support',
      'Personalized career roadmap',
      'Weekly progress tracking',
    ],
    popular: false,
  },
  {
    title: 'Solo/Video',
    price: 'N100',
    type: 'Solo/Video',
    features: [
      'Dedicated mentor',
      'Video call sessions',
      'Instant chat support',
      'Custom learning path',
      'Real-time mentoring',
    ],
    popular: false,
  },
]

function PackageCard({ pkg, index }: { pkg: typeof packages[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      <Card className={`relative h-full overflow-hidden transition-all duration-300 hover:shadow-xl ${pkg.popular ? 'border-primary shadow-lg scale-105' : 'hover:scale-102'}`}>
        {pkg.popular && (
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-primary/10 background-pattern" />
          </div>
        )}
        {pkg.popular && (
          <div className="absolute top-6 right-6">
            <span className="inline-block bg-primary text-white text-xs px-3 py-1 rounded-full">
              Popular
            </span>
          </div>
        )}
        <CardHeader>
          <CardTitle className="text-2xl">{pkg.title}</CardTitle>
          <div className="mt-2">
            <motion.span
              className="text-4xl font-bold text-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              {pkg.price}
            </motion.span>
            <span className="text-gray-600 dark:text-gray-300 ml-2">/ month</span>
          </div>
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
          <Button
            className={`w-full transition-all duration-300 ${
              pkg.popular
                ? 'bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl'
                : 'hover:scale-105'
            }`}
          >
            {pkg.price === 'N0' ? 'Get Started' : 'Buy Package'}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

export default function PackagesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Mentorship <span className="text-primary">Packages</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our Mentorship packages help you overcome academic or career challenges, boosting your performance and leading to success.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <PackageCard key={pkg.title} pkg={pkg} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

