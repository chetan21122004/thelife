import Link from "next/link"
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
      <section className="relative min-h-[90vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/badminton-1.jpg"
            alt="Professional badminton court"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>

        <div className="container mx-auto max-w-6xl px-4 sm:px-6 relative z-10 py-12 sm:py-0">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-white space-y-4 sm:space-y-6">
              <Badge
                variant="secondary"
                className="bg-gradient-to-r from-[#f39318] to-[#FF5500] text-white border-none px-4 py-2"
              >
                <Award className="w-4 h-4 mr-2" />
                In Partnership with K9 Badminton World
              </Badge>

              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  Premier Indoor Badminton Courts in
                  <span className="block mt-2 bg-gradient-to-r from-[#f39318] to-[#FF5500] bg-clip-text text-transparent">
                    Pune
                  </span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-[#f39318] font-semibold">
                  Book Online Now • 6 BWF Approved Courts
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4 max-w-xl">
                <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
                  Welcome to The Life Sports, the ultimate destination for badminton enthusiasts in Pune. Experience the game at a professional level on our six BWF Approved Badminton Courts.
                </p>
                <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                  We prioritize your safety and performance with knee-friendly, anti-skid sports flooring, setting us apart from other sports facilities.
                </p>
                <div className="flex items-start gap-2 pt-2">
                  <div className="w-2 h-2 rounded-full bg-[#f39318] mt-2 flex-shrink-0"></div>
                  <p className="text-sm sm:text-base md:text-lg text-gray-200 font-medium">
                    Tired of calling? Book your slot instantly with our easy online court booking system.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                <a 
                  href="https://booking.thelifesports.in/bookings" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-[#f39318] to-[#FF5500] hover:from-[#e8840f] hover:to-[#e54d00] text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Court Online
                  </Button>
                </a>
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-[#f39318] to-[#FF5500] hover:from-[#e8840f] hover:to-[#e54d00] text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </Button>
                </Link>
              </div>

            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-2xl blur opacity-20"></div>
                <img
                  src="/images/badminton-2.jpg"
                  alt="Badminton players in action"
                  className="relative rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">6 Professional Badminton Courts</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Ample space means more availability for your game. Never wait for your turn!
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">BWF Approved Flooring</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Experience the ultimate soft-on-knees, anti-skid court surface for injury prevention.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">24/7 Online Booking</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Check real-time slot availability and book your badminton court online instantly.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Convenient Location</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Centrally located in Someshwarwadi, easily accessible from all of Pune.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Play & Train</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Ideal for casual pay and play, coaching, leagues, and corporate tournaments.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Professional Lighting</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Play under professional-grade, non-glare LED lighting that eliminates shadows.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* K9 Badminton World Partnership Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
              Powered by
              <span className="bg-gradient-to-r from-[#f39318] to-[#FF5500] bg-clip-text text-transparent"> K9 Badminton World</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              "Igniting Passion, Building Champions" - Experience elite badminton training with our trusted partner
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full flex items-center justify-center">
                    <Trophy className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">K9 Badminton World</h3>
                    <p className="text-gray-600">Where Passion Meets Precision</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-[#f39318]" />
                    <p className="text-gray-700"><span className="font-medium">Chief Coach:</span> Krantivir</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#f39318]" />
                    <p className="text-gray-700">Olympic Gold Quest (OGQ) Certified - Level 1 & 2</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#f39318]" />
                    <p className="text-gray-700">BWF Level 1 Certified Coach</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#f39318]" />
                    <p className="text-gray-700">International Player with India Rankings</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#f39318]" />
                    <p className="text-gray-700">5+ Years Experience Under Olympian</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-2xl blur opacity-20"></div>
              <img
                src="/images/badminton-1.jpg"
                alt="K9 Badminton World training"
                className="relative rounded-2xl shadow-2xl w-full h-64 sm:h-80 object-cover"
              />
            </div>
          </div>

          {/* Training Programs */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Beginner Programs</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  Regular & Weekend batches for beginners with focus on fundamentals
                </p>
                <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                  Monday - Sunday Available
                </Badge>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Advanced Training</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  Intermediate to Advanced level coaching for competitive players
                </p>
                <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                  Monday - Saturday
                </Badge>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Corporate Batches</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  Specialized corporate training programs for working professionals
                </p>
                <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                  Flexible Timing
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* BWF Approved Flooring Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4">
              6 BWF Approved, Soft-on-Knees
              <span className="bg-gradient-to-r from-[#f39318] to-[#FF5500] bg-clip-text text-transparent">
                {" "}
                Badminton Courts in Pune
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              At The Life Sports, we believe a great game starts with a great surface.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold">The Flooring: World-Class Safety & Performance</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">BWF Approved Vinyl/Synthetic Flooring</h4>
                    <p className="text-gray-300">
                      Our courts adhere to the stringent international standards set by the Badminton World Federation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Soft on Knees</h4>
                    <p className="text-gray-300">
                      The specialized multi-layered construction provides superior shock absorption, significantly reducing the impact on your joints and preventing common sports injuries.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Anti-Skid Surface</h4>
                    <p className="text-gray-300">
                      The professional-grade, anti-slip court surface ensures maximum grip, allowing for quick movements, precise footing, and absolute player safety during intense rallies.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Optimum Lighting</h4>
                    <p className="text-gray-300">
                      Play under professional-grade, non-glare LED lighting that eliminates shadows.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-2xl blur opacity-20"></div>
              <img
                src="/images/badminton-2.jpg"
                alt="BWF approved badminton court flooring"
                className="relative rounded-2xl shadow-2xl w-full h-64 sm:h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
              Badminton Court Booking
              <span className="bg-gradient-to-r from-[#f39318] to-[#FF5500] bg-clip-text text-transparent">
                {" "}
                Pricing
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-3 sm:mb-4 px-4">
              BADMINTON COURTS (55 Minutes Session)
            </p>
            <p className="text-base sm:text-lg text-gray-500 px-4">
              6 Badminton Courts | World Badminton Federation Approved | Anti-skid Flooring, Gentle on Knees
            </p>
          </div>

          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <Card className="border-0 shadow-xl">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[600px]">
                    <thead>
                      <tr className="bg-gradient-to-r from-[#f39318] to-[#FF5500] text-white">
                        <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-sm sm:text-base font-semibold">Time</th>
                        <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-sm sm:text-base font-semibold">Days</th>
                        <th className="px-4 sm:px-6 py-3 sm:py-4 text-center text-sm sm:text-base font-semibold">Charges</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-orange-50 transition-colors">
                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-medium">06:00 AM – 06:55 AM</td>
                        <td className="px-4 sm:px-6 py-3 sm:py-4">
                          <Badge className="bg-orange-100 text-orange-700 text-xs sm:text-sm">Monday to Sunday (Happy Hour)</Badge>
                        </td>
                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-center text-sm sm:text-base font-bold text-[#f39318]">₹354 (including GST)</td>
                      </tr>
                      <tr className="hover:bg-orange-50 transition-colors bg-gray-50">
                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-medium">07:00 AM – 08:55 AM</td>
                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base">Monday to Friday</td>
                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-center text-sm sm:text-base font-bold text-[#f39318]">₹560 (including GST)</td>
                      </tr>
                      <tr className="hover:bg-orange-50 transition-colors">
                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-medium">09:00 AM – 04:55 PM</td>
                        <td className="px-4 sm:px-6 py-3 sm:py-4">
                          <Badge className="bg-orange-100 text-orange-700 text-xs sm:text-sm">Monday to Friday (Happy Hour)</Badge>
                        </td>
                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-center text-sm sm:text-base font-bold text-[#f39318]">₹354 (including GST)</td>
                      </tr>
                      <tr className="hover:bg-orange-50 transition-colors bg-gray-50">
                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-medium">05:00 PM – 11:55 PM</td>
                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base">Monday to Friday</td>
                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-center text-sm sm:text-base font-bold text-[#f39318]">₹560 (including GST)</td>
                      </tr>
                      <tr className="hover:bg-orange-50 transition-colors">
                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-medium">07:00 AM – 11:55 AM</td>
                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base">Saturday to Sunday</td>
                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-center text-sm sm:text-base font-bold text-[#f39318]">₹560 (including GST)</td>
                      </tr>
                      <tr className="hover:bg-orange-50 transition-colors bg-gray-50">
                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-medium">12:00 PM – 03:55 PM</td>
                        <td className="px-4 sm:px-6 py-3 sm:py-4">
                          <Badge className="bg-orange-100 text-orange-700 text-xs sm:text-sm">Saturday to Sunday (Happy Hour)</Badge>
                        </td>
                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-center text-sm sm:text-base font-bold text-[#f39318]">₹354 (including GST)</td>
                      </tr>
                      <tr className="hover:bg-orange-50 transition-colors">
                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-medium">04:00 PM – 11:55 PM</td>
                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base">Saturday to Sunday</td>
                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-center text-sm sm:text-base font-bold text-[#f39318]">₹560 (including GST)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <a 
              href="https://booking.thelifesports.in/bookings" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#f39318] to-[#FF5500] hover:from-[#e8840f] hover:to-[#e54d00] text-lg px-10 py-6"
              >
                <Calendar className="w-6 h-6 mr-3" />
                Book Your Court Online Now
              </Button>
            </a>
            <p className="mt-4 text-sm text-gray-600">
              Bookings for all sports will be available through our website
            </p>
          </div>
        </div>
      </section>

      {/* Online Booking Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
              Instant Badminton Court Booking
              <span className="bg-gradient-to-r from-[#f39318] to-[#FF5500] bg-clip-text text-transparent block sm:inline">
                {" "}
                | Check Real-Time Slots & Pay Online
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Don't wait! Secure your slot instantly with our seamless online booking system.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 text-center">
              <CardHeader className="pb-4">
                <div className="w-20 h-20 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-3xl font-bold text-white">1</span>
                </div>
                <CardTitle className="text-xl">Check Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  View the live schedule for all 6 badminton courts on your desktop or mobile.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 text-center">
              <CardHeader className="pb-4">
                <div className="w-20 h-20 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-3xl font-bold text-white">2</span>
                </div>
                <CardTitle className="text-xl">Select & Pay</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Choose your preferred time slot and complete your booking using our secure payment gateway (UPI, Card, Wallet).
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 text-center">
              <CardHeader className="pb-4">
                <div className="w-20 h-20 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-3xl font-bold text-white">3</span>
                </div>
                <CardTitle className="text-xl">Play!</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Receive an instant confirmation and walk straight onto one of Pune's best indoor badminton courts.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 mb-6">
              <strong>Keywords:</strong> Pay and play badminton in Someshwarwadi, Badminton court hourly booking, Badminton membership Pune
            </p>
            <a 
              href="https://booking.thelifesports.in/bookings" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#f39318] to-[#FF5500] hover:from-[#e8840f] hover:to-[#e54d00] text-lg px-10 py-6"
              >
                <Calendar className="w-6 h-6 mr-3" />
                Book Your Court Online Now
              </Button>
            </a>
            <p className="mt-4 text-sm text-gray-600">
              Bookings for all sports will be available through our website
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
              Why Champions Choose
              <span className="bg-gradient-to-r from-[#f39318] to-[#FF5500] bg-clip-text text-transparent"> Us</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Experience the difference with our world-class facilities and expert coaching programs
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
      <section id="facilities" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-4">
              World-Class
              <span className="bg-gradient-to-r from-[#f39318] to-[#FF5500] bg-clip-text text-transparent">
                {" "}
                Facilities
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Experience badminton at its finest with our state-of-the-art courts and premium amenities
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold">BWF Approved Excellence</h3>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
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

            <div className="relative w-full">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-2xl blur opacity-20"></div>
              <div className="relative rounded-2xl shadow-2xl overflow-hidden aspect-[4/3] w-full">
                <img
                  src="/images/badminton_plyr2.jpg"
                  alt="BWF approved badminton courts"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="relative group overflow-hidden rounded-xl">
              <img
                src="/images/badminton_plyr1.jpg"
                alt="Professional coaching session"
                className="w-full h-48 sm:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                <h4 className="text-base sm:text-lg font-bold">Expert Coaching</h4>
                <p className="text-xs sm:text-sm text-gray-300">Professional guidance</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl">
              <img
                src="/images/badminton-2.jpg"
                alt="Training sessions"
                className="w-full h-48 sm:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                <h4 className="text-base sm:text-lg font-bold">Training Programs</h4>
                <p className="text-xs sm:text-sm text-gray-300">All skill levels</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl sm:col-span-2 md:col-span-1">
              <img
                src="/images/badminton-3.jpg"
                alt="Tournament preparation"
                className="w-full h-48 sm:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                <h4 className="text-base sm:text-lg font-bold">Tournaments</h4>
                <p className="text-xs sm:text-sm text-gray-300">Competitive events</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coaching Programs */}
      <section id="coaching" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">
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
                  src="/images/badminton-1.jpg"
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
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-r from-[#f39318] to-[#FF5500]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 sm:mb-12 px-4">What Our Champions Say</h2>

          <Card className="bg-white/10 backdrop-blur border-white/20 text-white">
            <CardContent className="p-6 sm:p-8 md:p-12">
              <div className="flex justify-center mb-4 sm:mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-300 fill-current" />
                ))}
              </div>
              <blockquote className="text-lg sm:text-xl md:text-2xl font-light italic mb-4 sm:mb-6 leading-relaxed px-2">
                "This place is equivalent to mental peace. After home, I feel this is the place for me to find the peace
                I want. Love the Badminton Court…!"
              </blockquote>
              <cite className="text-base sm:text-lg md:text-xl font-semibold">- Arvind Yadav</cite>
              <p className="text-white/80 mt-2 text-sm sm:text-base">Regular Player</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
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
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-900 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-4">
            Ready to Become a
            <span className="bg-gradient-to-r from-[#f39318] to-[#FF5500] bg-clip-text text-transparent">
              Champion?
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            Join Pune's premier badminton academy and experience the difference of professional training with
            world-class facilities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
            <a 
              href="https://booking.thelifesports.in/bookings" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#f39318] to-[#FF5500] hover:from-[#e8840f] hover:to-[#e54d00] text-lg px-10 py-6"
              >
                <Calendar className="w-6 h-6 mr-3" />
                Book Your Court Now
              </Button>
            </a>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-10 py-6 border-white text-white hover:bg-white hover:text-gray-900"
              >
                <Phone className="w-6 h-6 mr-3" />
                Call Us Today
              </Button>
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-400">
            Bookings for all sports will be available through our website
          </p>
        </div>
      </section>

      
    </div>
  )
}
