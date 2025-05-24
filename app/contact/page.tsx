"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    couponCode: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Sports Background */}
      <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
            alt="Sports facility"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#f39318]/90 to-[#FF5500]/90"></div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center justify-center px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">Contact Us</h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium max-w-2xl mx-auto leading-relaxed">
              Get in touch with Pune's premier sports club for world-class facilities and expert coaching
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 text-white font-semibold">
                📞 +91 9767755977
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 text-white font-semibold">
                ⏰ 6 AM - 11 PM
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Content and Form */}
          <div>
            {/* Header Section */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">WE WILL BE HAPPY TO ANSWER</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                The Life Sports is one of the best sports clubs in Pune serving people with supreme facilities and
                excellent coaching. The authorities of this academy are always ready to help the members by being
                flexible and considerate.
              </p>
            </div>

            {/* Contact Form */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Enroll For This Activity</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="h-12 text-lg border-gray-300 focus:border-[#f39318] focus:ring-[#f39318]"
                      required
                    />
                  </div>

                  <div>
                    <Input
                      type="tel"
                      name="mobile"
                      placeholder="Mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      className="h-12 text-lg border-gray-300 focus:border-[#f39318] focus:ring-[#f39318]"
                      required
                    />
                  </div>

                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email Id"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="h-12 text-lg border-gray-300 focus:border-[#f39318] focus:ring-[#f39318]"
                      required
                    />
                  </div>

                  <div>
                    <Input
                      type="text"
                      name="couponCode"
                      placeholder="Coupon Code (if any)"
                      value={formData.couponCode}
                      onChange={handleInputChange}
                      className="h-12 text-lg border-gray-300 focus:border-[#f39318] focus:ring-[#f39318]"
                    />
                  </div>

                  <div>
                    <Textarea
                      name="message"
                      placeholder="Please Write your Message Here"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="min-h-[120px] text-lg border-gray-300 focus:border-[#f39318] focus:ring-[#f39318] resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-[#f39318] to-[#FF5500] hover:from-[#e8840f] hover:to-[#e54d00] text-white border-0 shadow-lg"
                  >
                    Submit
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Contact Info and Images */}
          <div className="space-y-8">
            {/* Sports Images */}
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Modern gym with equipment"
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
              <img
                src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Swimming pool facility"
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            </div>

            <img
              src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
              alt="Sports coaching and training"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />

            {/* Contact Information Card */}
            <Card className="shadow-lg border-0 bg-gradient-to-br from-[#f39318] to-[#FF5500] text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">HEAD OFFICE ADDRESS</h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-6 h-6 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">19/1B/1, Near Hotel Green Park,</p>
                      <p>Someshwarwadi Road,</p>
                      <p>Someshwarwadi Pune-411008</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="w-6 h-6 flex-shrink-0" />
                    <a href="mailto:lifesportsenquiry@gmail.com" className="hover:underline">
                      lifesportsenquiry@gmail.com
                    </a>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Phone className="w-6 h-6 mt-1 flex-shrink-0" />
                    <div>
                      <p>+91 9767755977</p>
                      <p>+91 9922084730</p>
                      <p>+91 9767272100</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Clock className="w-6 h-6 flex-shrink-0" />
                    <p className="font-medium">6 AM to 11 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional Sports Image */}
            <img
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
              alt="Group fitness class"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
