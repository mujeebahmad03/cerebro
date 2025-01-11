'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const courses = [
  {
    title: 'Business Operations',
    description: 'Master the fundamentals of business operations and learn how to optimize organizational processes. This comprehensive program covers everything from process management to operational efficiency.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3',
    duration: '12 weeks',
    level: 'Intermediate',
  },
  {
    title: 'Digital Marketing',
    description: 'Dive into the world of digital marketing with our comprehensive course covering SEO, social media, content marketing, and paid advertising strategies.',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3',
    duration: '10 weeks',
    level: 'Beginner',
  },
  {
    title: 'Data Analysis',
    description: 'Learn to analyze complex datasets and derive meaningful insights using industry-standard tools and techniques. Perfect for aspiring data analysts.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3',
    duration: '14 weeks',
    level: 'Advanced',
  },
  {
    title: 'UX Design',
    description: 'Master the art of user experience design. Learn to create intuitive, user-friendly interfaces that delight users and drive engagement.',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3',
    duration: '8 weeks',
    level: 'Intermediate',
  },
  {
    title: 'Full Stack Development',
    description: 'Become a complete developer by mastering both frontend and backend technologies. Build real-world projects using modern frameworks.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3',
    duration: '16 weeks',
    level: 'Advanced',
  },
]

function CourseCard({ course }: { course: typeof courses[0] }) {
  return (
    <Card className="h-full overflow-hidden">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <div className="flex gap-2">
            <span className="text-xs bg-primary/90 text-white px-2 py-1 rounded-full">
              {course.duration}
            </span>
            <span className="text-xs bg-primary/90 text-white px-2 py-1 rounded-full">
              {course.level}
            </span>
          </div>
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{course.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
          {course.description}
        </p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Learn More</Button>
      </CardFooter>
    </Card>
  )
}

export default function PathwaysSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Explore <span className="text-primary">Pathways</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Choose one or more of our learning programs to begin your journey
          </p>
        </motion.div>
        
        <div className="relative max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {courses.map((course, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CourseCard course={course} />
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Button variant="link" className="text-primary text-lg">
            View all courses
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

