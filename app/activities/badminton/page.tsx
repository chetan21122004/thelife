import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Trophy,
  Users,
  Clock,
  Star,
  CheckCircle,
  Target,
  Heart,
  Zap,
  Award,
  Phone,
  Mail,
  Calendar,
  Play,
  ArrowRight,
} from "lucide-react"

export default function BadmintonCourtPage() {
  return (
    <div className="min-h-screen bg-background">
  
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Professional badminton court"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>

        <div className="container mx-auto max-w-6xl px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8">
              <Badge
                variant="secondary"
                className="bg-gradient-to-r from-[#f39318] to-[#FF5500] text-white border-none"
              >
                <Award className="w-4 h-4 mr-2" />
                BWF Approved Courts - First & Only in Pune
              </Badge>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Elevate Your
                <span className="block bg-gradient-to-r from-[#f39318] to-[#FF5500] bg-clip-text text-transparent">
                  Badminton Game
                </span>
              </h1>

              <p className="text-xl text-gray-200 leading-relaxed max-w-lg">
                Train like a champion at Pune's premier badminton academy. 6 BWF approved courts, world-class coaching,
                and comprehensive fitness programs await you.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#f39318] to-[#FF5500] hover:from-[#e8840f] hover:to-[#e54d00] text-lg px-8 py-6"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Start Your Journey
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6 border-white  hover:bg-white text-gray-900"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#f39318]">700+</div>
                  <div className="text-sm text-gray-300">Daily Players</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#f39318]">6</div>
                  <div className="text-sm text-gray-300">BWF Courts</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#f39318]">18</div>
                  <div className="text-sm text-gray-300">Hours Open</div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-2xl blur opacity-20"></div>
                <img
                  src="https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Badminton players in action"
                  className="relative rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Champions Choose
              <span className="bg-gradient-to-r from-[#f39318] to-[#FF5500] bg-clip-text text-transparent"> Us</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference with our world-class facilities and expert coaching programs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">BWF Approved Courts</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  6 World Badminton Federation approved courts with professional-grade flooring and superior LED
                  lighting
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Expert Coaching</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Certified coaches with specialized programs for all skill levels from beginners to advanced players
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Flexible Timings</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Open 6 AM to 12 midnight, 7 days a week with convenient online booking system
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Skill Development</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Specialized training in footwork, smash techniques, deception strategies, and fitness conditioning
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Nutrition Support</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  In-house nutritionist providing BMI analysis and personalized diet plans for optimal performance
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Tournaments</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Regular competitive tournaments and special training camps to build confidence and skills
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Facilities Showcase */}
      <section id="facilities" className="py-20 px-4 bg-gray-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              World-Class
              <span className="bg-gradient-to-r from-[#f39318] to-[#FF5500] bg-clip-text text-transparent">
                {" "}
                Facilities
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience badminton at its finest with our state-of-the-art courts and premium amenities
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">BWF Approved Excellence</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our 6 BWF approved courts feature professional-grade wooden flooring, optimal lighting conditions, and
                precise court dimensions that meet international standards. Every detail is designed to enhance your
                playing experience.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-[#f39318] mb-1">6</div>
                  <div className="text-sm text-gray-400">BWF Courts</div>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-[#f39318] mb-1">55</div>
                  <div className="text-sm text-gray-400">Min Sessions</div>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-[#f39318] mb-1">LED</div>
                  <div className="text-sm text-gray-400">Lighting</div>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-[#f39318] mb-1">AC</div>
                  <div className="text-sm text-gray-400">Climate Control</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-2xl blur opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="BWF approved badminton courts"
                className="relative rounded-2xl shadow-2xl w-full h-80 object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Professional coaching session"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <h4 className="text-lg font-bold">Expert Coaching</h4>
                <p className="text-sm text-gray-300">Professional guidance</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Training sessions"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <h4 className="text-lg font-bold">Training Programs</h4>
                <p className="text-sm text-gray-300">All skill levels</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Tournament preparation"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <h4 className="text-lg font-bold">Tournaments</h4>
                <p className="text-sm text-gray-300">Competitive events</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coaching Programs */}
      <section id="coaching" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Transform Your Game with
                <span className="bg-gradient-to-r from-[#f39318] to-[#FF5500] bg-clip-text text-transparent">
                  Expert Coaching
                </span>
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Increased Muscle Tone & Strength</h4>
                    <p className="text-gray-600">
                      Build lean muscle and improve overall body strength through dynamic badminton training
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Enhanced Cardiovascular Fitness</h4>
                    <p className="text-gray-600">
                      Improve heart health and endurance with high-intensity badminton sessions
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Superior Agility & Reflexes</h4>
                    <p className="text-gray-600">
                      Develop lightning-fast reflexes and court movement through specialized drills
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Effective Weight Management</h4>
                    <p className="text-gray-600">Burn calories efficiently while having fun and improving your game</p>
                  </div>
                </div>
              </div>

              <Button className="mt-8 bg-gradient-to-r from-[#f39318] to-[#FF5500] hover:from-[#e8840f] hover:to-[#e54d00] text-lg px-8 py-6">
                Start Training Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <div className="space-y-6">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Fitness training session"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <Card className="text-center p-4 border-2 border-[#f39318]/20 hover:border-[#f39318] transition-colors">
                  <div className="text-2xl font-bold text-[#f39318] mb-1">Basic</div>
                  <div className="text-sm text-gray-600">Foundation & Basics</div>
                </Card>
                <Card className="text-center p-4 border-2 border-[#f39318]/20 hover:border-[#f39318] transition-colors">
                  <div className="text-2xl font-bold text-[#f39318] mb-1">Inter</div>
                  <div className="text-sm text-gray-600">Advanced Techniques</div>
                </Card>
                <Card className="text-center p-4 border-2 border-[#f39318]/20 hover:border-[#f39318] transition-colors">
                  <div className="text-2xl font-bold text-[#f39318] mb-1">Pro</div>
                  <div className="text-sm text-gray-600">Competition Level</div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#f39318] to-[#FF5500]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">What Our Champions Say</h2>

          <Card className="bg-white/10 backdrop-blur border-white/20 text-white">
            <CardContent className="p-12">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 text-yellow-300 fill-current" />
                ))}
              </div>
              <blockquote className="text-2xl font-light italic mb-6 leading-relaxed">
                "This place is equivalent to mental peace. After home, I feel this is the place for me to find the peace
                I want. Love the Badminton Court…!"
              </blockquote>
              <cite className="text-xl font-semibold">- Arvind Yadav</cite>
              <p className="text-white/80 mt-2">Regular Player</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked
              <span className="bg-gradient-to-r from-[#f39318] to-[#FF5500] bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
          </div>

          <div className="space-y-6">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-r from-[#f39318]/5 to-[#FF5500]/5">
                <CardTitle className="text-xl text-gray-900">
                  Is there any good indoor badminton court in Pune?
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-600 leading-relaxed">
                  Yes! The Life Sports offers 6 BWF approved badminton courts in Pune that can be booked for single or
                  multiple sessions. We're the first and only BWF approved facility in Pune, ensuring world-class
                  playing conditions with professional-grade equipment and facilities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-r from-[#f39318]/5 to-[#FF5500]/5">
                <CardTitle className="text-xl text-gray-900">Where can I play Badminton in Pune on weekends?</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-600 leading-relaxed">
                  The Life Sports is open 7 days a week from 6 AM to 12 midnight. Our courts in Baner can be booked
                  hourly, and weekend slots are available. Just call us to book your preferred time slot with immediate
                  confirmation and competitive pricing.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-r from-[#f39318]/5 to-[#FF5500]/5">
                <CardTitle className="text-xl text-gray-900">What are the badminton coaching fees in Pune?</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-600 leading-relaxed">
                  Our badminton coaching fees start from ₹1,500/- and vary based on the skill level and batch timings.
                  We offer specialized coaching programs for kids and adults with focus on technique, fitness, and
                  performance enhancement. Contact us for detailed pricing and package options.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Become a
            <span className="bg-gradient-to-r from-[#f39318] to-[#FF5500] bg-clip-text text-transparent">
              Champion?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join Pune's premier badminton academy and experience the difference of professional training with
            world-class facilities
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#f39318] to-[#FF5500] hover:from-[#e8840f] hover:to-[#e54d00] text-lg px-10 py-6"
            >
              <Calendar className="w-6 h-6 mr-3" />
              Book Your Court Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-10 py-6 border-white text-white hover:bg-white hover:text-gray-900"
            >
              <Phone className="w-6 h-6 mr-3" />
              Call Us Today
            </Button>
          </div>
        </div>
      </section>

      
    </div>
  )
}
