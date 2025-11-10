"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, Shield, Users, Zap, MapPin, Calendar, Star } from "lucide-react"
import Link from "next/link"

export default function CricketNetPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')",
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-[#f39318]/40 to-[#FF5500]/60" />

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-white/40 rounded-full animate-ping"></div>
          <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse"></div>
        </div>

        {/* Floating Geometric Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/10 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 bg-gradient-to-r from-[#f39318]/20 to-[#FF5500]/20 rounded-lg rotate-45 animate-float"></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 border-2 border-white/20 rounded-lg animate-bounce-slow"></div>

        {/* Main Content */}
        <div className="relative z-10 text-center py-3 text-white px-6 max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-8 inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
           
            <span className="text-sm font-medium tracking-wide">cricket net and cricket net with bowling machine</span>
          </div>

          {/* Main Heading - SEO Optimized H1 */}
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-black leading-tight tracking-tight mb-4 text-white">
              Unleash Your Potential: Premier Cricket Practice Net with Automatic Bowling Machine in Pune
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl mb-12 text-white/95 max-w-5xl mx-auto leading-relaxed font-medium">
            Consistent, Professional, All-Weather Training. Book Your Slot Today!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a 
              href="https://booking.thelifesports.in/bookings" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="group bg-gradient-to-r from-[#f39318] to-[#FF5500] hover:from-[#f39318]/90 hover:to-[#FF5500]/90 text-white text-xl px-12 py-7 rounded-2xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300 border-0"
              >
                <span className="mr-2">➡ Book a Net Session</span>
                <div className="w-2 h-2 bg-white rounded-full group-hover:animate-ping"></div>
              </Button>
            </a>

            <Link href="#pricing">
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white hover:text-[#f39318] text-xl px-12 py-7 rounded-2xl font-bold transition-all duration-300 hover:scale-105"
              >
                See Pricing
              </Button>
            </Link>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="text-3xl font-bold text-[#f39318] mb-2">1</div>
              <div className="text-sm text-white/80 font-medium">Premium Cricket Net</div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="text-3xl font-bold text-[#f39318] mb-2">Auto</div>
              <div className="text-sm text-white/80 font-medium">Bowling Machine</div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="text-3xl font-bold text-[#f39318] mb-2">24/7</div>
              <div className="text-sm text-white/80 font-medium">Online Booking</div>
            </div>
          </div>
        </div>

        
      </section>

      {/* Stats Bar */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-3xl font-bold text-[#f39318]">1</div>
              <div className="text-sm text-gray-300">Premium Net</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#f39318]">Auto</div>
              <div className="text-sm text-gray-300">Bowling Machine</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#f39318]">24/7</div>
              <div className="text-sm text-gray-300">Availability</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#f39318]">500+</div>
              <div className="text-sm text-gray-300">Happy Players</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-[#f39318]/10 text-[#f39318] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Star className="w-4 h-4" />
              Professional Training
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">The Future of Cricket Training: Precision and Consistency</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Experience professional cricket training with our state-of-the-art cricket practice net equipped with an automatic bowling machine. Perfect for solo batting practice, coaches, and full cricket academy training. Our fully-enclosed cricket practice net system ensures safety and focused training in all weather conditions.
            </p>
            
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="/images/cricket-net.jpg"
                alt="Professional cricket practice nets"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Easy Booking</div>
                  <div className="text-sm text-gray-500">Online 24/7</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Cricket Net Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#f39318]/10 text-[#f39318] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Zap className="w-4 h-4" />
              Benefits
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Why Choose Cricket Net?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the advantages of professional cricket net training
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-900">Enhanced Safety</h3>
                <p className="text-gray-600 leading-relaxed">
                  Maximum safety levels during intensive practice sessions
                </p>
              </CardContent>
            </Card>

            <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-900">Solo Practice</h3>
                <p className="text-gray-600 leading-relaxed">Practice for hours alone at your own comfortable pace</p>
              </CardContent>
            </Card>

            <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-900">No Fielders Needed</h3>
                <p className="text-gray-600 leading-relaxed">
                  Complete elimination of fielder dependency during practice
                </p>
              </CardContent>
            </Card>

            <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-900">Intense Training</h3>
                <p className="text-gray-600 leading-relaxed">
                  Achieve greater intensity and focus in training sessions
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Facility Information */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-12 md:p-16 mb-20">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-40 h-40 bg-[#f39318] rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-[#FF5500] rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-[#f39318]/20 text-[#f39318] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <MapPin className="w-4 h-4" />
                Premium Facility
              </div>
              <h2 className="text-5xl font-bold text-white mb-6 leading-tight">The Life Sports</h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Located at baner, Near Hotel Green Park, Someshwarwadi Road.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-4">
                  <CheckCircle className="w-6 h-6 text-[#f39318] flex-shrink-0" />
                  <span className="text-gray-200">Three astroturf cricket nets</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-4">
                  <CheckCircle className="w-6 h-6 text-[#f39318] flex-shrink-0" />
                  <span className="text-gray-200">Hourly rental basis</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-4">
                  <CheckCircle className="w-6 h-6 text-[#f39318] flex-shrink-0" />
                  <span className="text-gray-200">Flexible pricing plans</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-4">
                  <CheckCircle className="w-6 h-6 text-[#f39318] flex-shrink-0" />
                  <span className="text-gray-200">Premium changing rooms</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img
                  src="/images/cricket-net2.jpg"
                  alt="The Life Sports premium cricket facility"
                  className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 px-4 max-w-7xl mx-auto mb-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#f39318]/10 text-[#f39318] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Star className="w-4 h-4" />
              Flexible Pricing
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Cricket Net Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from flexible half-hour sessions across both facility options. All prices include GST.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gradient-to-r from-[#f39318] to-[#FF5500] text-white">
                      <tr>
                        <th className="px-6 py-4 text-left font-semibold">Facility</th>
                        <th className="px-6 py-4 text-left font-semibold">Time</th>
                        <th className="px-6 py-4 text-left font-semibold">Days</th>
                        <th className="px-6 py-4 text-center font-semibold">Duration</th>
                        <th className="px-6 py-4 text-center font-semibold">Charges</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-orange-50 transition-colors">
                        <td className="px-6 py-4 font-medium">Cricket Net with Bowling Machine</td>
                        <td className="px-6 py-4 font-medium">6:00 AM – 6:00 PM</td>
                        <td className="px-6 py-4">Monday to Sunday</td>
                        <td className="px-6 py-4 text-center">Half Hour</td>
                        <td className="px-6 py-4 text-center font-bold text-[#f39318]">₹350 (including GST)</td>
                      </tr>
                      <tr className="hover:bg-orange-50 transition-colors bg-gray-50">
                        <td className="px-6 py-4 font-medium">Cricket Net with Bowling Machine</td>
                        <td className="px-6 py-4 font-medium">6:00 PM – 12:00 AM</td>
                        <td className="px-6 py-4">Monday to Sunday</td>
                        <td className="px-6 py-4 text-center">Half Hour</td>
                        <td className="px-6 py-4 text-center font-bold text-[#f39318]">₹500 (including GST)</td>
                      </tr>
                      <tr className="hover:bg-orange-50 transition-colors">
                        <td className="px-6 py-4 font-medium">Cricket Net</td>
                        <td className="px-6 py-4 font-medium">6:00 AM – 6:00 PM</td>
                        <td className="px-6 py-4">Monday to Sunday</td>
                        <td className="px-6 py-4 text-center">Half Hour</td>
                        <td className="px-6 py-4 text-center font-bold text-[#f39318]">₹225 (including GST)</td>
                      </tr>
                      <tr className="hover:bg-orange-50 transition-colors bg-gray-50">
                        <td className="px-6 py-4 font-medium">Cricket Net</td>
                        <td className="px-6 py-4 font-medium">6:00 PM – 12:00 AM</td>
                        <td className="px-6 py-4">Monday to Sunday</td>
                        <td className="px-6 py-4 text-center">Half Hour</td>
                        <td className="px-6 py-4 text-center font-bold text-[#f39318]">₹300 (including GST)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <div className="relative overflow-hidden text-center bg-gradient-to-br from-[#f39318] via-[#f39318] to-[#FF5500] rounded-3xl p-16 text-white">
          {/* Background elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <h2 className="text-5xl font-bold mb-6 leading-tight">Ready to Elevate Your Game?</h2>
            <p className="text-xl mb-10 opacity-95 max-w-4xl mx-auto leading-relaxed">
              Join hundreds of cricket enthusiasts who have sharpened their skills at The Life Sports. Book your
              practice session today and experience the difference professional facilities make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://booking.thelifesports.in/bookings" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-white text-[#f39318] hover:bg-gray-50 text-xl px-12 py-7 rounded-2xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Book Your Session
                </Button>
              </a>
              <Link href="/book-court">
                <Button
                  size="lg"
                  className="bg-white text-[#f39318] hover:bg-gray-50 text-xl px-12 py-7 rounded-2xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  View Pricing
                </Button>
              </Link>
            </div>
            <p className="mt-8 text-lg opacity-90">
              Bookings for all sports will be available through our website
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
