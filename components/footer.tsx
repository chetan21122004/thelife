"use client"

import Link from "next/link"
import { Phone, MapPin, Mail, Facebook, Twitter, Instagram, Youtube, Clock, Award, Users } from "lucide-react"

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Blogs", href: "/blogs" },
  { name: "Book My Court", href: "/book-court" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Sitemap", href: "/sitemap" },
]

const activities = [
  { name: "Badminton Court", href: "/activities/badminton", popular: true },
  { name: "Table Tennis Coaching", href: "/activities/table-tennis", popular: false },
  { name: "Gymnastics Classes", href: "/activities/gymnastics", popular: true },
  { name: "Dance Classes", href: "/activities/dance", popular: false },
  { name: "Box Cricket Ground", href: "/activities/box-cricket", popular: true },
  { name: "Football Academy", href: "/activities/football", popular: false },
  { name: "Yoga Classes", href: "/activities/yoga", popular: false },
  { name: "Cricket Net Practice", href: "/activities/cricket-net", popular: true },
]

const contactInfo = [
  { type: "phone", value: "+91 97677 55977", href: "tel:+919767755977", label: "Primary" },
  { type: "phone", value: "+91 99220 84730", href: "tel:+919922084730", label: "Secondary" },
  { type: "phone", value: "+91 97672 72100", href: "tel:+919767272100", label: "Support" },
  {
    type: "email",
    value: "lifesportsenquiry@gmail.com",
    href: "mailto:lifesportsenquiry@gmail.com",
    label: "General Inquiry",
  },
]

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/thelifesportsacademy", name: "Facebook", color: "hover:bg-blue-600" },
  { icon: Twitter, href: "https://twitter.com/thelifesports", name: "Twitter", color: "hover:bg-sky-500" },
  {
    icon: Instagram,
    href: "https://instagram.com/thelifesportsacademy",
    name: "Instagram",
    color: "hover:bg-pink-600",
  },
  { icon: Youtube, href: "https://youtube.com/thelifesportsacademy", name: "YouTube", color: "hover:bg-red-600" },
]

const stats = [
  { icon: Users, value: "5000+", label: "Happy Members" },
  { icon: Award, value: "15+", label: "Sports Activities" },
  { icon: Clock, value: "10+", label: "Years Experience" },
]

export function Footer() {
  return (
    <footer className="relative bg-white border-t border-[#f39318]">
      {/* Main Footer */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      

        {/* Main Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid gap-12 lg:grid-cols-4 md:grid-cols-2">
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-[#f39318] to-[#FF5500] bg-clip-text text-transparent mb-4">
                  The Life Sports Academy
                </h2>
                <p className="text-slate-400 leading-relaxed mb-6">
                  Premier sports academy in Pune offering world-class facilities and professional coaching across
                  multiple sports disciplines.
                </p>
              </div>

              {/* Address Card */}
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-[#f39318]/30 transition-colors duration-300">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-lg flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Visit Us</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      19/1B/1, Near Hotel Green Park, Someshwarwadi Road, Someshwarwadi Pune-411008
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white relative">
                Quick Links
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full"></div>
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="group flex items-center gap-2 text-slate-400 hover:text-[#f39318] transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-slate-800/50"
                  >
                    <div className="w-1.5 h-1.5 bg-slate-600 rounded-full group-hover:bg-[#f39318] transition-colors duration-300"></div>
                    <span className="text-sm font-medium">{link.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Activities */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white relative">
                Our Activities
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full"></div>
              </h3>
              <div className="space-y-2">
                {activities.map((activity) => (
                  <Link
                    key={activity.name}
                    href={activity.href}
                    className="group flex items-center justify-between text-slate-400 hover:text-[#f39318] transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-slate-800/50"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-slate-600 rounded-full group-hover:bg-[#f39318] transition-colors duration-300"></div>
                      <span className="text-sm font-medium">{activity.name}</span>
                    </div>
                    {activity.popular && (
                      <span className="text-xs bg-gradient-to-r from-[#f39318] to-[#FF5500] text-white px-2 py-1 rounded-full font-medium">
                        Popular
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact & Social */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white relative">
                Get In Touch
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-full"></div>
              </h3>

              {/* Contact Info */}
              <div className="space-y-3">
                {contactInfo.map((info, index) => (
                  <Link
                    key={index}
                    href={info.href}
                    className="group flex items-center gap-3 text-slate-400 hover:text-[#f39318] transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-slate-800/50"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-[#f39318] group-hover:to-[#FF5500] transition-all duration-300">
                      {info.type === "phone" && <Phone className="h-4 w-4" />}
                      {info.type === "email" && <Mail className="h-4 w-4" />}
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-medium">{info.label}</div>
                      <div className="text-sm font-medium">{info.value}</div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-4">
                <h4 className="text-white font-semibold mb-4">Follow Us</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon
                    return (
                      <Link
                        key={index}
                        href={social.href}
                        className={`group w-11 h-11 bg-slate-700 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 ${social.color}`}
                        title={social.name}
                      >
                        <Icon className="h-5 w-5 text-slate-300 group-hover:text-white transition-colors duration-300" />
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-slate-900 border-t border-slate-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <p className="text-slate-400 text-sm">
                © {new Date().getFullYear()} The Life Sports Academy. All rights reserved.
              </p>
              <div className="hidden md:flex items-center gap-4 text-xs text-slate-500">
                <Link href="/privacy-policy" className="hover:text-[#f39318] transition-colors">
                  Privacy Policy
                </Link>
                <span>•</span>
                <Link href="/terms" className="hover:text-[#f39318] transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <span>Powered by</span>
              <span className="font-semibold bg-gradient-to-r from-[#f39318] to-[#FF5500] bg-clip-text text-transparent">
                Skovian Ventures
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
