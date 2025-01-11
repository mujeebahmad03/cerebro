'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const solutions = [
  {
    title: 'Recruitment',
    description: 'Identify, source and interview talents without hassle using our recruitment platform.',
    details: 'We match small businesses with skilled talent and provide support like retraining to keep your team strong.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3',
    link: '/business/recruitment',
  },
  {
    title: 'Consulting',
    description: 'We give expert management advice to professionals',
    details: 'We offer consulting for small businesses, helping them solve complex problems through emails, video calls, or in-person visits.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3',
    link: '/business/consulting',
  },
  {
    title: 'Build Shop',
    description: 'Need to build something? The Cerebro Build Shop is your go-to.',
    details: 'Our Build Shop is a single platform that takes care of all IT services, so small businesses can focus on their work while we provide you with talents who handle the technological aspect.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3',
    link: '/business/build-shop',
  },
]

function SolutionCard({ solution, index }: { solution: typeof solutions[0], index: number }) {
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
          <div className="aspect-square overflow-hidden rounded-xl mb-4">
            <img
              src={solution.image}
              alt={solution.title}
              className="w-full h-full object-cover"
            />
          </div>
          <CardTitle className="text-2xl">{solution.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{solution.description}</p>
          <p className="text-sm text-gray-600 dark:text-gray-300">{solution.details}</p>
        </CardContent>
        <CardFooter>
          <Button asChild className="w-full">
            <Link href={solution.link}>Explore</Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

export default function SolutionsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="py-24 bg-sky-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Solutions For <span className="text-primary">Business</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            From finding the right talent and giving expert advice to bringing your ideas to life, we offer everything your small business needs to succeed.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard key={solution.title} solution={solution} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

