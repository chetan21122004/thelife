import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Clock,
  Users,
  MapPin,
  Star,
  Trophy,
  Heart,
  Zap,
  Target,
  Shield,
  Calendar,
  Play,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
} from "lucide-react"
import Image from "next/image"

export default function PuneCricketGround() {
  const benefits = [
    { icon: Heart, title: "Improves stamina and endurance", description: "Build cardiovascular strength" },
    { icon: Target, title: "Enhances body balance and stability", description: "Develop core strength" },
    { icon: Zap, title: "Improves Hand-eye co-ordination", description: "Sharpen reflexes and timing" },
    { icon: Users, title: "Teaches teamwork and collaboration", description: "Build social connections" },
    { icon: Trophy, title: "Builds muscle", description: "Strengthen your physique" },
    { icon: Shield, title: "Helps burn calories and lose weight", description: "Stay fit and healthy" },
    { icon: Heart, title: "Improves Cardiovascular health", description: "Boost heart health" },
    { icon: Star, title: "Boosts self-esteem", description: "Build confidence" },
    { icon: Zap, title: "Improves Motor skills", description: "Enhance coordination" },
  ]

  const rules = [
    "A typical box cricket match involves 6-8 players and 1 substitute",
    "Match will last 3-12 overs",
    "A ball struck to directly hit the roof becomes dead",
    "The bowler must bowl within the confines of the assigned box",
    "Sidearm bowling isn't allowed",
  ]

  const features = [
    {
      icon: MapPin,
      title: "Prime Location",
      description: "Conveniently located in Sus, near Sunny's world",
      stat: "3 Locations",
    },
    {
      icon: Shield,
      title: "Premium Facilities",
      description: "Lockers, changing rooms & parking",
      stat: "24/7 Access",
    },
    { icon: Calendar, title: "Smart Booking", description: "AI-powered scheduling system", stat: "Instant Confirm" },
    { icon: Star, title: "Expert Coaching", description: "Professional cricket coaching available", stat: "12+ Years" },
    {
      icon: Trophy,
      title: "Tournament Ready",
      description: "Host corporate & private tournaments",
      stat: "500+ Events",
    },
    { icon: Zap, title: "Modern Equipment", description: "Latest cricket gear and technology", stat: "Pro Grade" },
  ]

  const stats = [
    { number: "13M+", label: "Cricket Fans in India", icon: Users },
    { number: "3", label: "Astro Turf Grounds", icon: Target },
    { number: "12+", label: "Years Experience", icon: Trophy },
    { number: "500+", label: "Happy Customers", icon: Star },
  ]

  const faqs = [
    {
      question: "What is Box Cricket?",
      answer:
        "Box Cricket is a mini version of the game that is played indoors within the boundaries of a cricket net instead of a huge typical cricket ground, with a few rule enhancements.",
    },
    {
      question: "What is the size of a Box Cricket Ground?",
      answer:
        "A common indoor cricket court measures 30 meters x 12 meters and is enclosed with 4.5-meter high netting.",
    },
    {
      question: "How Do You Play Box Cricket?",
      answer:
        "Teams of 6-8 players with one substitute, matches last 3-12 overs, no sidearm bowling, and the bowler must bowl from within the assigned box.",
    },
  ]

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
        {/* Background Video Effect */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2048&q=80"
            alt="Cricket Ground"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-[#f39318]/20"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#f39318]/20 to-[#FF5500]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-[#FF5500]/15 to-[#f39318]/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge className="bg-gradient-to-r from-[#f39318] to-[#FF5500] text-white px-6 py-3 text-sm font-bold tracking-wide">
                🏏 PUNE'S PREMIER CRICKET DESTINATION
              </Badge>

              <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black leading-none">
                <span className="block text-white">ELEVATE</span>
                <span className="block text-white">YOUR</span>
                <span className="block bg-gradient-to-r from-[#f39318] to-[#FF5500] bg-clip-text text-transparent">
                  CRICKET
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-xl">
                Experience world-class box cricket at The Life Sports. Professional facilities, expert coaching, and the
                thrill of competitive cricket await you.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#f39318] to-[#FF5500] text-white hover:shadow-2xl text-lg px-10 py-6 rounded-full font-bold transform hover:scale-105 transition-all duration-300 group"
              >
                <Play className="mr-3 h-6 w-6" />
                START TRIAL
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-black text-lg px-10 py-6 rounded-full font-bold backdrop-blur-sm"
              >
                <Calendar className="mr-3 h-6 w-6" />
                BOOK SESSION
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-black text-white mb-1">13M+</div>
                <div className="text-gray-400 text-sm">Cricket Fans</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-white mb-1">12+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-white mb-1">500+</div>
                <div className="text-gray-400 text-sm">Happy Players</div>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-2xl flex items-center justify-center">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Professional Grounds</h3>
                  <p className="text-gray-300 text-sm">3 Premium Astro Turf Fields</p>
                </div>
              </div>
              <p className="text-gray-300">State-of-the-art 30m x 12m playing areas with 4.5m high safety netting.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-2xl flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Expert Coaching</h3>
                  <p className="text-gray-300 text-sm">Professional Training Available</p>
                </div>
              </div>
              <p className="text-gray-300">Learn from experienced coaches and improve your cricket skills.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-2xl flex items-center justify-center">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Flexible Booking</h3>
                  <p className="text-gray-300 text-sm">Easy Online Reservations</p>
                </div>
              </div>
              <p className="text-gray-300">Book your sessions instantly with our smart booking system.</p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="mb-6 bg-gradient-to-r from-[#f39318] to-[#FF5500] text-white px-4 py-2">
                  THE LIFE SPORTS EXPERIENCE
                </Badge>
                <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
                  Where Cricket
                  <span className="block bg-gradient-to-r from-[#f39318] to-[#FF5500] bg-clip-text text-transparent">
                    Dreams Come True
                  </span>
                </h2>
              </div>

              <p className="text-xl text-gray-600 leading-relaxed">
                Transform your cricket passion into reality at Pune's most advanced box cricket facility. With
                cutting-edge infrastructure and professional-grade equipment, we deliver an unmatched sporting
                experience.
              </p>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-[#f39318]/5 to-[#FF5500]/5 rounded-2xl">
                  <Users className="h-8 w-8 text-[#f39318] mx-auto mb-3" />
                  <div className="font-bold text-2xl text-gray-800">6-8</div>
                  <div className="text-sm text-gray-600">Players</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-[#f39318]/5 to-[#FF5500]/5 rounded-2xl">
                  <Clock className="h-8 w-8 text-[#f39318] mx-auto mb-3" />
                  <div className="font-bold text-2xl text-gray-800">3-12</div>
                  <div className="text-sm text-gray-600">Overs</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-[#f39318]/5 to-[#FF5500]/5 rounded-2xl">
                  <MapPin className="h-8 w-8 text-[#f39318] mx-auto mb-3" />
                  <div className="font-bold text-2xl text-gray-800">3</div>
                  <div className="text-sm text-gray-600">Astro Turfs</div>
                </div>
              </div>

              <Button className="bg-gradient-to-r from-[#f39318] to-[#FF5500] text-white px-8 py-6 rounded-full text-lg font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                Explore Facilities
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2048&q=80"
                  alt="Box Cricket Ground"
                  width={700}
                  height={500}
                  className="rounded-3xl shadow-2xl"
                />
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100 z-20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full flex items-center justify-center">
                    <Trophy className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-2xl text-gray-800">12+</div>
                    <div className="text-sm text-gray-600">Years Excellence</div>
                  </div>
                </div>
              </div>

              {/* Background decoration */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-[#f39318]/20 to-[#FF5500]/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-orange-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gradient-to-r from-[#f39318] to-[#FF5500] text-white px-4 py-2">
              HEALTH & WELLNESS
            </Badge>
            <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
              Transform Your
              <span className="block bg-gradient-to-r from-[#f39318] to-[#FF5500] bg-clip-text text-transparent">
                Mind & Body
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Cricket isn't just a game—it's a complete wellness experience that enhances your physical fitness, mental
              agility, and social connections.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#f39318] to-[#FF5500] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-xl text-gray-800 mb-3 group-hover:text-[#f39318] transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gradient-to-r from-[#f39318] to-[#FF5500] text-white px-4 py-2">
              PREMIUM FACILITIES
            </Badge>
            <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
              World-Class
              <span className="block bg-gradient-to-r from-[#f39318] to-[#FF5500] bg-clip-text text-transparent">
                Infrastructure
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white"
              >
                <div className="relative p-8">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#f39318]/10 to-[#FF5500]/10 rounded-full -translate-y-16 translate-x-16"></div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#f39318] to-[#FF5500] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>

                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-bold text-xl text-gray-800 group-hover:text-[#f39318] transition-colors">
                        {feature.title}
                      </h3>
                      <Badge className="bg-gradient-to-r from-[#f39318] to-[#FF5500] text-white text-xs">
                        {feature.stat}
                      </Badge>
                    </div>

                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ground Details Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2048&q=80"
            alt="Cricket Facility"
            fill
            className="object-cover opacity-20"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-6 bg-gradient-to-r from-[#f39318] to-[#FF5500] text-white px-4 py-2">
                TECHNICAL SPECIFICATIONS
              </Badge>
              <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
                Professional Grade
                <span className="block bg-gradient-to-r from-[#f39318] to-[#FF5500] bg-clip-text text-transparent">
                  Cricket Arena
                </span>
              </h2>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Experience cricket like never before in our meticulously designed box cricket facility. Every detail has
                been crafted to deliver professional-level gameplay in a compact, exciting format.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full flex items-center justify-center">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">30m x 12m Playing Area</div>
                    <div className="text-gray-400">Optimal dimensions for competitive play</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full flex items-center justify-center">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">4.5m High Safety Netting</div>
                    <div className="text-gray-400">Complete protection for players and spectators</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full flex items-center justify-center">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">Premium Astro Turf</div>
                    <div className="text-gray-400">Professional-grade playing surface</div>
                  </div>
                </div>
              </div>

              <Button className="bg-gradient-to-r from-[#f39318] to-[#FF5500] text-white px-8 py-6 rounded-full text-lg font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                Book Your Session
                <Calendar className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">Facility Highlights</h3>
                <div className="space-y-4">
                  {[
                    "3 Premium Astro Turf Grounds",
                    "Professional Changing Rooms",
                    "Secure Equipment Storage",
                    "Ample Parking Space",
                    "Corporate Event Hosting",
                    "Professional Coaching Available",
                  ].map((highlight, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-[#f39318]" />
                      <span className="text-gray-300">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gradient-to-r from-[#f39318] to-[#FF5500] text-white px-4 py-2">
              GAME REGULATIONS
            </Badge>
            <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
              Box Cricket
              <span className="block bg-gradient-to-r from-[#f39318] to-[#FF5500] bg-clip-text text-transparent">
                Rules & Guidelines
              </span>
            </h2>
          </div>

          <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-orange-50/30 overflow-hidden">
            <CardContent className="p-12">
              <div className="space-y-8">
                {rules.map((rule, index) => (
                  <div key={index} className="flex items-start gap-6 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-2xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-lg text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">
                        {rule}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-orange-50/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gradient-to-r from-[#f39318] to-[#FF5500] text-white px-4 py-2">
              FREQUENTLY ASKED
            </Badge>
            <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
              Got
              <span className="block bg-gradient-to-r from-[#f39318] to-[#FF5500] bg-clip-text text-transparent">
                Questions?
              </span>
            </h2>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-2xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-[#f39318] transition-colors">
                        {faq.question}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f39318] to-[#FF5500]"></div>
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Animated background elements */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center text-white">
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">Ready to Play?</h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Join thousands of cricket enthusiasts who have made The Life Sports their home ground. Book your session
            today and experience the future of cricket in Pune.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button
              size="lg"
              className="bg-white text-[#f39318] hover:bg-gray-100 text-xl px-12 py-8 rounded-full font-bold shadow-2xl transform hover:scale-105 transition-all duration-300 group"
            >
              <Calendar className="mr-3 h-6 w-6" />
              BOOK NOW
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#f39318] text-xl px-12 py-8 rounded-full font-bold backdrop-blur-sm"
            >
              <Phone className="mr-3 h-6 w-6" />
              CALL US
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-white/80">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              <span>info@thelifesports.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>Sus, Pune</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
