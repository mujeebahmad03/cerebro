'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Users, Briefcase } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const features = [
  {
    icon: GraduationCap,
    title: 'Future-ready Training',
    description: `We equip you with the skills and knowledge needed to stay ahead in the ever-evolving tech industry, ensuring you're prepared for tomorrow's challenges today.`,
  },
  {
    icon: Users,
    title: 'Expert Mentorship Guidance',
    description: 'Our mentorship platform gives you direct support from industry pros to boost your skills, tackle challenges, and reach your goals.',
  },
  {
    icon: Briefcase,
    title: 'Career-boosting Workshops',
    description: 'We help you find part-time gigs or full-time jobs. Take advantage of flexible opportunities and grow your career with us.',
  },
]

export default function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="py-24 bg-gradient-to-b from-primary/5 to-transparent">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Empowering <span className="text-primary">Talents</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join our platform and unlock your potential with comprehensive training, expert guidance, 
            and career opportunities.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="relative h-full overflow-hidden group hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                  </div>
                </CardContent>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary/10 group-hover:bg-primary transition-colors" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

