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

export default function PickleBallPage() {
  return (
    <div className="min-h-screen bg-background">
  
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=500&auto=format&fit=crop&q=60"
            alt="Professional pickle ball court"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>

        <div className="container mx-auto max-w-6xl px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8">
              <Badge
                variant="secondary"
                className="bg-gradient-to-r from-emerald-400 to-green-600 text-white border-none"
              >
                <Award className="w-4 h-4 mr-2" />
                Professional Pickle Ball Courts - Premium Experience
              </Badge>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Master the
                <span className="block bg-gradient-to-r from-emerald-400 to-green-600 bg-clip-text text-transparent">
                  Pickle Ball Game
                </span>
              </h1>

              <p className="text-xl text-gray-200 leading-relaxed max-w-lg">
                Experience the fastest-growing paddle sport at our premium pickle ball courts. Professional equipment, 
                expert coaching, and a welcoming community for all skill levels.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-400 to-green-600 hover:from-emerald-500 hover:to-green-700 text-lg px-8 py-6"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Start Playing Today
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6 border-white hover:bg-white text-gray-900"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400">200+</div>
                  <div className="text-sm text-gray-300">Active Players</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400">4</div>
                  <div className="text-sm text-gray-300">Premium Courts</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400">16</div>
                  <div className="text-sm text-gray-300">Hours Open</div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 to-green-600 rounded-2xl blur opacity-20"></div>
                <img
                  src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&auto=format&fit=crop&q=60"
                  alt="Pickle ball players in action"
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
              Why Choose Our
              <span className="bg-gradient-to-r from-emerald-400 to-green-600 bg-clip-text text-transparent"> Pickle Ball Courts</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the perfect blend of fun, fitness, and competition with our premium facilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Professional Courts</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  4 regulation-size pickle ball courts with premium surfaces and professional-grade nets
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Equipment Provided</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  High-quality paddles and balls available for rent, perfect for beginners and experienced players
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Flexible Booking</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Open 7 AM to 11 PM daily with easy online booking and walk-in availability
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">All Skill Levels</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Beginner-friendly environment with coaching available for players of all ages and abilities
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Community Events</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Regular tournaments, social games, and community events to connect with fellow players
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Great Workout</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Low-impact, high-fun exercise that improves agility, balance, and cardiovascular health
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Pickle Ball */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What is
              <span className="bg-gradient-to-r from-emerald-400 to-green-600 bg-clip-text text-transparent">
                {" "}
                Pickle Ball?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the fastest-growing sport that combines elements of tennis, badminton, and ping pong
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">Easy to Learn, Fun to Play</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Pickle ball is played on a court similar to a badminton court with a net slightly lower than tennis. 
                The game uses solid paddles and a perforated plastic ball, making it easier on the joints while 
                still providing an excellent workout.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-emerald-400 mb-1">20x44</div>
                  <div className="text-sm text-gray-400">Court Size (ft)</div>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-emerald-400 mb-1">36"</div>
                  <div className="text-sm text-gray-400">Net Height</div>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-emerald-400 mb-1">2-4</div>
                  <div className="text-sm text-gray-400">Players</div>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-emerald-400 mb-1">11</div>
                  <div className="text-sm text-gray-400">Points to Win</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 to-green-600 rounded-2xl blur opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=500&auto=format&fit=crop&q=60"
                alt="Pickle ball court layout"
                className="relative rounded-2xl shadow-2xl w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Health Benefits of
                <span className="bg-gradient-to-r from-emerald-400 to-green-600 bg-clip-text text-transparent">
                  Pickle Ball
                </span>
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Low-Impact Exercise</h4>
                    <p className="text-gray-600">
                      Gentle on joints while providing excellent cardiovascular and strength benefits
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Improved Balance & Agility</h4>
                    <p className="text-gray-600">
                      Enhance coordination, balance, and quick reflexes through dynamic gameplay
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Social Connection</h4>
                    <p className="text-gray-600">
                      Meet new people and build friendships in our welcoming pickle ball community
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Mental Wellness</h4>
                    <p className="text-gray-600">Reduce stress and boost mood through fun, engaging physical activity</p>
                  </div>
                </div>
              </div>

              <Button className="mt-8 bg-gradient-to-r from-emerald-400 to-green-600 hover:from-emerald-500 hover:to-green-700 text-lg px-8 py-6">
                Book Your Court
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <div className="space-y-6">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&auto=format&fit=crop&q=60"
                  alt="Pickle ball community"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <Card className="text-center p-4 border-2 border-emerald-400/20 hover:border-emerald-400 transition-colors">
                  <div className="text-2xl font-bold text-emerald-400 mb-1">Beginner</div>
                  <div className="text-sm text-gray-600">Learn the Basics</div>
                </Card>
                <Card className="text-center p-4 border-2 border-emerald-400/20 hover:border-emerald-400 transition-colors">
                  <div className="text-2xl font-bold text-emerald-400 mb-1">Inter</div>
                  <div className="text-sm text-gray-600">Improve Skills</div>
                </Card>
                <Card className="text-center p-4 border-2 border-emerald-400/20 hover:border-emerald-400 transition-colors">
                  <div className="text-2xl font-bold text-emerald-400 mb-1">Advanced</div>
                  <div className="text-sm text-gray-600">Competitive Play</div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Try
            <span className="bg-gradient-to-r from-emerald-400 to-green-600 bg-clip-text text-transparent">
              Pickle Ball?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join our growing pickle ball community and discover why it's the fastest-growing sport in the world
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-400 to-green-600 hover:from-emerald-500 hover:to-green-700 text-lg px-10 py-6"
            >
              <Calendar className="w-6 h-6 mr-3" />
              Book Your Court Now
            </Button>
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-400 to-green-600 hover:from-emerald-500 hover:to-green-700 text-lg px-10 py-6"
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
