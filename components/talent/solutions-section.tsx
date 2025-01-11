'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const solutions = [
  {
    title: 'TRAINING',
    description: 'Dive into a world of learning with cool, in depth content on our digital training platform',
    details: 'Our training platform provides free training materials in various IT fields to support people at any career stage. With clear learning paths, personal mentoring, and practical internships, we help aspiring IT professionals, students, career changers, and tech enthusiasts build successful careers in technology.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3',
    link: '/talent/training',
    linkText: 'Learn more about Training',
  },
  {
    title: 'MENTORSHIP',
    description: 'With careful Guidance and Mentorship, you will reach your highest self',
    details: 'We provide a mentorship platform with free and paid advice, offering personalized guidance for IT professionals at any career stage. By connecting with experienced mentors, users can learn faster, get valuable tips, and reach their career goals more easily.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3',
    link: '/talent/mentorship',
    linkText: 'Learn more about mentorship',
  },
  {
    title: 'WORKCENTER',
    description: 'Our Workcentre connects top talent with the employers who need them.',
    details: `Our work centre provides gig-based and full-time job opportunities for IT professionals, whether you're just starting out or have years of experience. We connect you with companies that value your skills, ensuring you find roles where you can excel and deliver top-quality work.`,
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3',
    link: '/talent/work-center',
    linkText: 'Learn more about Workcenter',
  },
]

function SolutionCard({ solution, index }: { solution: typeof solutions[0], index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const imageVariants = {
    hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  const textVariants = {
    hidden: { opacity: 0, x: index % 2 === 0 ? 50 : -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.3 } }
  }

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.div className="w-full lg:w-1/2" variants={imageVariants}>
        <div className="aspect-[4/3] overflow-hidden rounded-lg">
          <img
            src={solution.image}
            alt={solution.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </motion.div>
      <motion.div className="w-full lg:w-1/2 space-y-4" variants={textVariants}>
        <h3 className="text-3xl font-bold">{solution.title}</h3>
        <p className="text-xl text-gray-600 dark:text-gray-300">{solution.description}</p>
        <p className="text-gray-600 dark:text-gray-300">{solution.details}</p>
        <Button asChild variant="ghost" className="group">
          <Link href={solution.link} className="flex items-center">
            {solution.linkText}
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </motion.div>
    </motion.div>
  )
}

export default function SolutionsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="py-24 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Solutions for <span className="text-primary">Talent</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Cerebro is a powerful digital platform that brings together all the tools you 
            need to build a rewarding tech career!
          </p>
        </motion.div>
        <div className="space-y-24">
          {solutions.map((solution, index) => (
            <SolutionCard key={solution.title} solution={solution} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

