import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Heart, Users, Award, Clock } from "lucide-react"

export default function YogaAcademyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#f39318] to-[#FF5500] opacity-90"></div>
        <div
          className="relative min-h-[80vh] flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80')",
          }}
        >
          <div className="container mx-auto px-4 text-center text-white">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">BEST YOGA CLASSES IN PUNE</h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Transform your mind, body, and spirit with The Life Sports Academy
              </p>
              <Button
                size="lg"
                className="bg-white text-[#f39318] hover:bg-gray-100 text-lg px-8 py-6 rounded-full font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                ENROLL FOR TRIAL SESSION !
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800">Mind & Body Harmony</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800">Expert Instructors</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800">Proven Techniques</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800">Flexible Timings</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <span className="text-[#f39318] font-semibold text-sm uppercase tracking-wide">Home » Yoga</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                Discover Inner Peace & Strength
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  The Life Sports Academy, one of the outstanding Yoga Classes in Pune helps you to mute the chatter of
                  your daily routine and enter a serene world of solace by maintaining the harmonious relationship of
                  mind, body and spirit.
                </p>
                <p>
                  At The Life Sports Academy, we focus on controlling the oppositional forces within you and attain a
                  state of harmony and balance by using different Yoga techniques.
                </p>
                <p>
                  The Life Sports Academy strives to create a perfect balance of living by synchronizing your physical
                  and psychological rhythms with external forces that affect you. As one of the promising Yoga classes
                  in Pune, The Life Sports Academy is known for its yoga techniques that help in restoring the balance
                  between your different rhythms and transform all aspects of your body and mind to their highest
                  potential.
                </p>
              </div>
              <Button className="mt-8 bg-gradient-to-r from-[#f39318] to-[#FF5500] hover:from-[#e8840f] hover:to-[#e54d00] text-white px-8 py-6 text-lg rounded-full font-semibold shadow-lg transform hover:scale-105 transition-all duration-300">
                Start Your Journey Today
              </Button>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1506629905607-d9c297d3d75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
                  alt="Yoga practice at The Life Sports Academy"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#f39318]/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full opacity-20"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-r from-[#FF5500] to-[#f39318] rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Yoga Poses Gallery */}
      <section className="py-16 bg-gradient-to-r from-[#f39318]/5 to-[#FF5500]/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Experience Different Yoga Forms</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64">
                <img
                  src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
                  alt="Hatha Yoga"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#f39318]/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Hatha Yoga</h3>
                  <p className="text-sm opacity-90">Gentle & Restorative</p>
                </div>
              </div>
            </Card>
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64">
                <img
                  src="https://images.unsplash.com/photo-1588286840104-8957b019727f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                  alt="Vinyasa Yoga"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FF5500]/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Vinyasa Flow</h3>
                  <p className="text-sm opacity-90">Dynamic & Flowing</p>
                </div>
              </div>
            </Card>
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64">
                <img
                  src="https://images.unsplash.com/photo-1506629905607-d9c297d3d75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
                  alt="Meditation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#f39318]/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Meditation</h3>
                  <p className="text-sm opacity-90">Mindfulness & Peace</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Send Your Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Send Your Story !</h2>
              <p className="text-lg text-gray-600">
                Share your transformation journey with The Life Sports Academy community
              </p>
            </div>
            <Card className="shadow-xl border-0">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                      alt="Yoga community"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                      <Input placeholder="Enter your full name" className="border-gray-300" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <Input type="email" placeholder="your.email@example.com" className="border-gray-300" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Your Yoga Journey</label>
                      <Textarea
                        placeholder="Tell us about your transformation story with yoga..."
                        className="border-gray-300 min-h-[120px]"
                      />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-[#f39318] to-[#FF5500] hover:from-[#e8840f] hover:to-[#e54d00] text-white py-6 text-lg rounded-full font-semibold shadow-lg transform hover:scale-105 transition-all duration-300">
                      Share Your Story
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-[#f39318] to-[#FF5500] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
            alt="Yoga background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Begin Your Transformation?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have discovered inner peace and physical strength through our proven yoga
            techniques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-[#f39318] hover:bg-gray-100 text-lg px-8 py-6 rounded-full font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Book Trial Session
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#f39318] text-lg px-8 py-6 rounded-full font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
