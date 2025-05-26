"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import {
  FaDumbbell,
  FaChild,
  FaChalkboardTeacher,
  FaAppleAlt,
  FaChevronDown,
  FaChevronUp,
  FaStar,
  FaPlay,
  FaAward,
  FaUsers,
  FaClock,
} from "react-icons/fa"
import Link from "next/link"

const testimonials = [
  {
    name: "Isha Navave",
    text: "The coaches are amazing and the facilities are top-notch. My daughter has improved tremendously in just 6 months!",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
  {
    name: "Tanush Nihalani",
    text: "Professional coaching with patience and dedication. The progress tracking system is excellent.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
  {
    name: "Divya Dongare",
    text: "State-of-the-art equipment and safety measures. Highly recommend for serious gymnastics training.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
  {
    name: "Tanuya Sharma",
    text: "Both coaches are very experienced and create a positive learning environment for all students.",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
  {
    name: "Sumedha Ajit Sandbhor",
    text: "The best gymnastics academy in Pune. My son loves coming here and has gained so much confidence.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
]

const faqs = [
  {
    question: "What is the best place for Gymnastics training in Pune?",
    answer:
      "The Life Sports provide the best gymnastics training in Pune. We provide students with the right classes in Gymnastics which help them achieve their goals and strength. We offer state-of-art hall and all the up-to-date equipment for gymnastics classes.",
  },
  {
    question: "What are the benefits of Gymnastics Classes?",
    answer:
      "Gymnastics classes have many benefits like: Increased coordination, Stronger Bones, Better self-discipline, Increased cognitive skills, and Increased self-esteem.",
  },
  {
    question: "What is the average age of children to start Gymnastics training in Pune?",
    answer:
      "Our coaches recommend waiting until your child is 3 or 4 before enrolling in a serious gymnastics program.",
  },
  {
    question: "What is the best gymnastics classes in Pune for kids?",
    answer:
      "The Life Sports offers state-of-art hall and all the up-to-date equipment for gymnastics classes in Pune. Special attention and care are provided to the smaller kids at Beginner Levels, Intermediate and Advance.",
  },
]

const stats = [
  { number: "500+", label: "Happy Students", icon: FaUsers },
  { number: "15+", label: "Expert Coaches", icon: FaChalkboardTeacher },
  { number: "8+", label: "Years Experience", icon: FaClock },
  { number: "50+", label: "Awards Won", icon: FaAward },
]

export default function GymnasticsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-white">
     

      {/* Hero Section */}
      <section id="home" className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&h=1080&fit=crop"
            alt="Gymnastics Training"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>

        <div className="relative container mx-auto px-4 h-full flex items-center pt-20">
          <div className="text-white max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="inline-flex items-center bg-gradient-to-r from-[#f39318] to-[#FF5500] px-4 py-2 rounded-full text-sm font-medium mb-6">
                <FaAward className="mr-2" />
                Pune's #1 Gymnastics Academy
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              Master the Art of
              <span className="block bg-gradient-to-r from-[#f39318] to-[#FF5500] bg-clip-text text-transparent">
                Gymnastics
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl leading-relaxed"
            >
              Transform your potential into excellence with professional coaching, state-of-the-art facilities, and
              personalized training programs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact">
                <button className="bg-gradient-to-r from-[#f39318] to-[#FF5500] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
              </Link>
              <Link href="/contact">
                <button className="flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
                  <FaPlay className="mr-2" />
                  Watch Video
                </button>
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        >
          <FaChevronDown className="text-2xl" />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-[#f39318] to-[#FF5500]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center text-white"
              >
                <stat.icon className="text-4xl mb-4 mx-auto" />
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#f39318] to-[#FF5500] bg-clip-text text-transparent">
                Why Choose The Life Sport?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                With over 8 years of excellence in gymnastics training, we've helped hundreds of students achieve their
                dreams through our comprehensive programs and world-class facilities.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: FaDumbbell,
                    title: "Modern Equipment",
                    description: "Latest gymnastics apparatus and safety equipment",
                  },
                  {
                    icon: FaChild,
                    title: "All Ages Welcome",
                    description: "Programs from toddlers to competitive athletes",
                  },
                  {
                    icon: FaChalkboardTeacher,
                    title: "Certified Coaches",
                    description: "Internationally trained and experienced instructors",
                  },
                  {
                    icon: FaAppleAlt,
                    title: "Holistic Approach",
                    description: "Physical, mental, and nutritional development",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="bg-gradient-to-r from-[#f39318] to-[#FF5500] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop"
                  alt="Gymnastics Facility"
                  width={600}
                  height={400}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">State-of-the-Art Facility</h3>
                  <p className="text-lg opacity-90">Professional training environment</p>
                </div>
              </div>

              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-[#f39318] to-[#FF5500] w-16 h-16 rounded-full flex items-center justify-center">
                    <FaAward className="text-white text-2xl" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-800">50+</div>
                    <div className="text-gray-600">Awards Won</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#f39318] to-[#FF5500] bg-clip-text text-transparent">
              Training Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive programs designed to develop skills, strength, and confidence at every level
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                level: "Beginner",
                image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=300&fit=crop",
                description: "Perfect foundation for young gymnasts",
                features: ["Basic movements", "Safety fundamentals", "Flexibility training", "Fun-based learning"],
                price: "₹3,000/month",
                popular: false,
              },
              {
                level: "Intermediate",
                image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
                description: "Advanced skills and technique development",
                features: ["Advanced techniques", "Strength building", "Routine development", "Competition prep"],
                price: "₹4,500/month",
                popular: true,
              },
              {
                level: "Advanced",
                image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=300&fit=crop",
                description: "Elite training for competitive gymnasts",
                features: [
                  "Professional coaching",
                  "Competition training",
                  "Performance optimization",
                  "Career guidance",
                ],
                price: "₹6,000/month",
                popular: false,
              },
            ].map((program, index) => (
              <motion.div
                key={program.level}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative bg-white rounded-2xl shadow-xl overflow-hidden border-2 hover:shadow-2xl transition-all duration-300 ${
                  program.popular ? "border-[#f39318] scale-105" : "border-gray-100"
                }`}
              >
                {program.popular && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-[#f39318] to-[#FF5500] text-white px-3 py-1 rounded-full text-sm font-bold z-10">
                    Most Popular
                  </div>
                )}

                <div className="relative h-48">
                  <Image src={program.image || "/placeholder.svg"} alt={program.level} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold">{program.level}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-4">{program.description}</p>

                  <ul className="space-y-2 mb-6">
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-[#f39318] rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-[#f39318]">{program.price}</div>
                    <Link href="/contact">
                      <button className="bg-gradient-to-r from-[#f39318] to-[#FF5500] text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                        Choose Plan
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#f39318] to-[#FF5500] bg-clip-text text-transparent">
              Our Facility
            </h2>
            <p className="text-xl text-gray-600">Take a look at our world-class training environment</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Facility ${index + 1}`}
                  width={400}
                  height={300}
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#f39318] to-[#FF5500] bg-clip-text text-transparent">
              Student Success Stories
            </h2>
            <p className="text-xl text-gray-600">Hear from our amazing gymnastics community</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="text-sm" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic leading-relaxed">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#f39318] to-[#FF5500] bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">Everything you need to know about our programs</p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-800 pr-4">{faq.question}</h3>
                  <div className="text-[#f39318] text-xl">
                    {openFaq === index ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === index ? "auto" : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-[#f39318] to-[#FF5500] relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&h=600&fit=crop"
            alt="Gymnastics Training"
            fill
            className="object-cover opacity-20"
          />
        </div>

        <div className="container mx-auto px-4 text-center relative">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to Begin Your
              <span className="block text-yellow-300">Gymnastics Journey?</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join hundreds of students who have transformed their lives through gymnastics at The Life Sport
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#f39318] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                Book Free Trial Class
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#f39318] transition-all duration-300"
              >
                Call: +91 98765 43210
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

    
    </div>
  )
}
