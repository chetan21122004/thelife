import { Clock, Calendar, IndianRupee, Star, Info } from "lucide-react"

export default function FeeStructure() {
  const feeData = [
    {
      category: "Badminton Coaching - Beginner",
      icon: "🏸",
      packages: [
        {
          schedule: "Mon to Fri",
          timings: ["5:00 PM – 8:00 PM"],
          rate: "5310",
          type: "regular",
          unit: "5 Days/Week (including GST)",
        },
        {
          schedule: "Mon, Wed, Fri",
          timings: ["5:00 PM – 8:00 PM"],
          rate: "3540",
          type: "regular",
          unit: "3 Days/Week (including GST)",
        },
        {
          schedule: "Tue, Thu",
          timings: ["5:00 PM – 8:00 PM"],
          rate: "2360",
          type: "budget",
          unit: "2 Days/Week (including GST)",
        },
      ],
    },
    {
      category: "Badminton Coaching - Basic",
      icon: "🏸",
      packages: [
        {
          schedule: "Mon to Fri",
          timings: ["5:00 PM – 8:00 PM"],
          rate: "6490",
          type: "regular",
          unit: "5 Days/Week (including GST)",
        },
        {
          schedule: "Mon, Wed, Fri",
          timings: ["5:00 PM – 8:00 PM"],
          rate: "4720",
          type: "regular",
          unit: "3 Days/Week (including GST)",
        },
      ],
    },
    {
      category: "Badminton Coaching - Higher Basic",
      icon: "🏸",
      packages: [
        {
          schedule: "Mon to Sat",
          timings: ["4:00 PM – 5:30 PM", "5:00 PM – 6:30 PM"],
          rate: "7670",
          type: "prime",
          unit: "6 Days/Week (including GST)",
          label: "6 Days a Week",
        },
      ],
    },
    {
      category: "Badminton Coaching - Intermediate",
      icon: "🏸",
      packages: [
        {
          schedule: "6 Days a Week",
          timings: ["4:00 PM – 5:30 PM", "5:00 PM – 6:30 PM"],
          rate: "8260",
          type: "prime",
          unit: "6 Days/Week (including GST)",
          label: "Most Popular",
        },
        {
          schedule: "Tue, Thu, Sat",
          timings: ["4:00 PM – 5:30 PM", "5:00 PM – 6:30 PM"],
          rate: "5310",
          type: "regular",
          unit: "3 Days/Week (including GST)",
        },
      ],
    },
    {
      category: "Badminton Coaching - Corporate",
      icon: "🏸",
      packages: [
        {
          schedule: "Mon to Fri",
          timings: ["5:00 PM – 8:00 PM"],
          rate: "6490",
          type: "regular",
          unit: "5 Days/Week (including GST)",
        },
        {
          schedule: "Mon, Wed, Fri",
          timings: ["5:00 PM – 8:00 PM"],
          rate: "4130",
          type: "regular",
          unit: "3 Days/Week (including GST)",
        },
      ],
    },
    {
      category: "Gymnastics Coaching",
      icon: "🤸",
      packages: [
        {
          schedule: "Mon, Wed, Fri",
          timings: ["5:00 PM – 6:00 PM", "6:00 PM – 7:00 PM"],
          rate: "3186",
          type: "regular",
          unit: "12 Sessions (including GST)",
          label: "Batch 1",
        },
        {
          schedule: "Tue, Thu",
          timings: ["5:00 PM – 6:00 PM", "6:00 PM – 7:00 PM"],
          rate: "2124",
          type: "budget",
          unit: "8 Sessions (including GST)",
          label: "Batch 2",
        },
        {
          schedule: "Mon to Fri",
          timings: ["5:00 PM – 6:00 PM", "6:00 PM – 7:00 PM"],
          rate: "5310",
          type: "prime",
          unit: "20 Sessions (including GST)",
          label: "Batch 3 - Most Popular",
        },
      ],
    },
    {
      category: "Badminton Court Booking (55 Minutes Session)",
      icon: "🏟️",
      packages: [
        {
          schedule: "Monday to Sunday",
          timings: ["06:00 AM – 06:55 AM"],
          rate: "225",
          type: "happy-hour",
          unit: "Happy Hour (including GST)",
          label: "Happy Hour",
        },
        {
          schedule: "Monday to Friday",
          timings: ["07:00 AM – 08:55 AM"],
          rate: "450",
          type: "regular",
          unit: "Per session (including GST)",
        },
        {
          schedule: "Monday to Friday",
          timings: ["09:00 AM – 04:55 PM"],
          rate: "225",
          type: "happy-hour",
          unit: "Happy Hour (including GST)",
          label: "Happy Hour",
        },
        {
          schedule: "Monday to Friday",
          timings: ["05:00 PM – 11:55 PM"],
          rate: "600",
          type: "regular",
          unit: "Per session (including GST)",
        },
        {
          schedule: "Saturday to Sunday",
          timings: ["07:00 AM – 11:55 AM"],
          rate: "450",
          type: "regular",
          unit: "Per session (including GST)",
        },
        {
          schedule: "Saturday to Sunday",
          timings: ["12:00 PM – 03:55 PM"],
          rate: "225",
          type: "happy-hour",
          unit: "Happy Hour (including GST)",
          label: "Happy Hour",
        },
        {
          schedule: "Saturday to Sunday",
          timings: ["04:00 PM – 11:55 PM"],
          rate: "600",
          type: "regular",
          unit: "Per session (including GST)",
        },
      ],
    },
  ]

  const getPackageStyle = (type: string) => {
    switch (type) {
      case "prime":
        return "border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50"
      case "happy-hour":
        return "border-green-200 bg-gradient-to-br from-green-50 to-emerald-50"
      case "budget":
        return "border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50"
      case "weekend":
        return "border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50"
      default:
        return "border-gray-200 bg-gradient-to-br from-gray-50 to-slate-50"
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "prime":
        return { text: "Prime", color: "text-amber-700 bg-amber-100" }
      case "happy-hour":
        return { text: "Happy Hour", color: "text-green-700 bg-green-100" }
      case "budget":
        return { text: "Budget", color: "text-blue-700 bg-blue-100" }
      case "weekend":
        return { text: "Weekend", color: "text-purple-700 bg-purple-100" }
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Fee Structure</h1>
              <p className="mt-2 text-gray-600">Comprehensive pricing for all our sports programs</p>
            </div>
            <div className="hidden sm:flex items-center space-x-2 text-sm text-gray-500">
              <span>Home</span>
              <span>»</span>
              <span className="text-gray-900 font-medium">Fee Structure</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {feeData.map((sport, sportIndex) => (
            <div key={sportIndex} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              {/* Sport Header */}
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-6 py-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{sport.icon}</span>
                  <h2 className="text-xl font-semibold text-white">{sport.category}</h2>
                </div>
              </div>

              {/* Packages Grid */}
              <div className="p-6">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {sport.packages.map((pkg, pkgIndex) => (
                    <div
                      key={pkgIndex}
                      className={`rounded-lg border-2 p-5 transition-all duration-200 hover:shadow-md ${getPackageStyle(pkg.type)}`}
                    >
                      {/* Package Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <Calendar className="h-4 w-4 text-gray-600" />
                            <span className="font-medium text-gray-900">{pkg.schedule}</span>
                          </div>
                          {pkg.label && (
                            <div className="flex items-center space-x-1 mb-2">
                              <Star className="h-4 w-4 text-amber-500" />
                              <span className="text-sm font-medium text-amber-700">{pkg.label}</span>
                            </div>
                          )}
                        </div>
                        {(() => {
                          const typeLabel = getTypeLabel(pkg.type)
                          return typeLabel ? (
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${typeLabel.color}`}
                            >
                              {typeLabel.text}
                            </span>
                          ) : null
                        })()}
                      </div>

                      {/* Timings */}
                      <div className="mb-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <Clock className="h-4 w-4 text-gray-600" />
                          <span className="text-sm font-medium text-gray-700">Available Timings</span>
                        </div>
                        <div className="space-y-1">
                          {pkg.timings.map((timing, timingIndex) => (
                            <div
                              key={timingIndex}
                              className="text-sm text-gray-600 bg-white/60 rounded px-2 py-1 border"
                            >
                              {timing}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Price */}
                      <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                        <div className="flex items-center space-x-1">
                          <IndianRupee className="h-5 w-5 text-gray-700" />
                          <span className="text-2xl font-bold text-gray-900">{pkg.rate}</span>
                          <span className="text-sm text-gray-600">/-</span>
                        </div>
                        {pkg.unit && (
                          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">{pkg.unit}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Important Notes */}
        <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200 p-6">
          <div className="flex items-start space-x-3">
            <Info className="h-6 w-6 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Important Notes</h3>
              <div className="space-y-2 text-blue-800">
                <div className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <p>Trial sessions are available at ₹300/- per session for kids and adults.</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <p>Weekend trial sessions for adults are ₹350/- per session.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Booking CTA */}
        <div className="mt-8 text-center">
          <div className="bg-gradient-to-r from-[#f39318] to-[#FF5500] rounded-xl shadow-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-3">Book Your Court Online</h3>
            <p className="text-lg mb-2 opacity-95">
              Bookings for all sports will be available through our website
            </p>
            <p className="text-base mb-6 opacity-90">
              Click below to access our online booking system
            </p>
            <a 
              href="https://booking.thelifesports.in/bookings" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-[#f39318] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Book Now →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
