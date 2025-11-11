import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Users, Trophy, Star, Target, Heart, Brain, Zap, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function FootballAcademy() {
  const benefits = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Builds muscle strength",
      description: "Develop core strength and muscle endurance",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Improves Cardiovascular health",
      description: "Enhance heart health and stamina",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Makes you more physically flexible",
      description: "Increase agility and flexibility",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Increases bone strength",
      description: "Build stronger bones and joints",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Teaches teamwork",
      description: "Learn collaboration and team spirit",
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Improves cognitive functioning",
      description: "Enhance mental sharpness and decision making",
    },
  ]

  const features = [
  
    "Experienced and Certified Coaches",
    "Natural Grass Football Ground",
    "In-house Nutritionist",
    "More than 6000 Happy Customers",
  ]

  const faqs = [
    {
      question: "Which Academy is Best for Football?",
      answer:
        "The Life Sports is widely regarded as the best football academy in Pune with certified coaches and prime location.",
    },
    {
      question: "Where is the Best Football Academy?",
      answer:
        "Located near Sunny's world, at Pashan-SUS road with easy connectivity to Aundh, Baner, Pimpri-Chinchwad.",
    },
    {
      question: "What is the Best Age to Join a Football Academy?",
      answer: "We welcome students of all ages from 6 to 60 years old for football coaching.",
    },
    {
      question: "What are the Fees of a Football Academy in Pune?",
      answer: "Our fees are reasonable and affordable. Contact us for detailed fee structure information.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
    

      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-gradient-to-br from-[#f39318] to-[#FF5500] text-white py-20 overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-white/20 text-white border-white/30">Best Football Academy in Pune</Badge>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">Best Football Club in Pune</h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Are you a football fanatic with a wish to turn pro? Enroll at the best Football Academy in Pune at The
                Life Sports and transform your passion into professional excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-[#f39318] hover:bg-gray-100 font-semibold">
                    Start Your Journey
                  </Button>
                </Link>
               
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold">6000+</div>
                  <div className="text-white/80">Happy Students</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">12+</div>
                  <div className="text-white/80">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-white/80">Natural Grass</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Football players training"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full flex items-center justify-center">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Top Rated</div>
                    <div className="text-sm text-gray-600">Football Academy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Football training session"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div>
                <Badge className="bg-gradient-to-r from-[#f39318] to-[#FF5500] text-white mb-4">About Us</Badge>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Transform Your Football Dreams into Reality</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Football has long been a popular game across the globe. At The Life Sports, we offer the best Football
                  Club in Pune with state-of-the-art facilities and experienced coaches to help you achieve your
                  football dreams.
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Conveniently situated near Pashan-Sus road, we offer strategically conceived football coaching
                  programs spearheaded by some of the most experienced professional coaches in the city.
                </p>
                <p className="text-gray-600">
                  We provide level-wise coaching to both children and adults, with separate batches for beginners,
                  intermediate and advanced players to ensure optimal learning experience.
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-[#f39318]" />
                  <span className="text-gray-700">Pashan-Sus Road, Pune</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-[#f39318] to-[#FF5500] text-white mb-4">Benefits</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Benefits of Playing Football</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Football offers numerous physical and mental benefits that can transform your life for the better. Here's
              how our training can help you grow.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-lg flex items-center justify-center text-white mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl text-gray-900">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-gradient-to-r from-[#f39318] to-[#FF5500] text-white">Why Choose Us</Badge>
              <h2 className="text-4xl font-bold text-gray-900">
                Why The Life Sports is the Best Football Club in Pune
              </h2>
              <p className="text-lg text-gray-600">
                Our Football Ground in Pune is made out of natural grass, well-maintained to provide players with a
                convenient, hassle, and injury-free playing experience.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-[#f39318] to-[#FF5500] hover:from-[#e8850f] hover:to-[#e64d00] text-white">
                  Join Our Academy
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="https://images.unsplash.com/photo-1553778263-73a83bab9b0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                alt="Football field"
                width={300}
                height={200}
                className="rounded-xl shadow-lg"
              />
              <Image
                src="https://st2.depositphotos.com/4318427/6334/i/450/depositphotos_63345113-stock-photo-football-match-for-children-training.jpg"
                alt="Football training"
                width={300}
                height={200}
                className="rounded-xl shadow-lg mt-8"
              />
              <Image
                src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                alt="Young football players"
                width={300}
                height={200}
                className="rounded-xl shadow-lg -mt-8"
              />
              <Image
                src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                alt="Football team celebration"
                width={300}
                height={200}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-[#f39318] to-[#FF5500] text-white mb-4">FAQ</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Get answers to common questions about our football academy</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full flex items-center justify-center text-white text-sm font-bold mr-4">
                      {index + 1}
                    </div>
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 ml-12">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#f39318] to-[#FF5500] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Football Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their football skills at The Life Sports. Contact us today
            to begin your professional football training.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-[#f39318] hover:bg-gray-100 font-semibold">
                <Phone className="h-5 w-5 mr-2" />
                Call Now
              </Button>
            </Link>
           
          </div>
        </div>
      </section>

    </div>
  )
}
