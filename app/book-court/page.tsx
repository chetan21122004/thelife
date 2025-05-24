import { Clock, Calendar, IndianRupee, Star, Info } from "lucide-react"

export default function FeeStructure() {
  const feeData = [
    {
      category: "Badminton Coaching (Children)",
      icon: "🏸",
      packages: [
        {
          schedule: "Mon, Wed, Fri",
          timings: ["4 pm to 5 pm", "7 pm to 8 pm"],
          rate: "2500",
          type: "regular",
        },
        {
          schedule: "Tue, Thurs, Sat",
          timings: ["4 pm to 5 pm", "5 pm to 6 pm", "6 pm to 7 pm", "7 pm to 8 pm"],
          rate: "2500",
          type: "regular",
        },
        {
          schedule: "Sat, Sun",
          timings: ["4 pm to 5 pm", "5 pm to 6 pm", "6 pm to 7 pm", "7 pm to 8 pm", "10 am to 11 am", "11 am to 12 pm"],
          rate: "2200",
          type: "weekend",
        },
        {
          schedule: "Tue, Thurs",
          timings: ["4 pm to 5 pm", "5 pm to 6 pm", "6 pm to 7 pm", "7 pm to 8 pm"],
          rate: "1700",
          type: "budget",
        },
        {
          schedule: "Mon, Wed, Fri",
          timings: ["5 pm to 6 pm", "6 pm to 7 pm"],
          rate: "3000",
          type: "prime",
          label: "Prime Batch",
        },
      ],
    },
    {
      category: "Badminton Coaching (Adults)",
      icon: "🏸",
      packages: [
        {
          schedule: "Mon, Wed, Fri",
          timings: ["7 am to 8 am", "8 am to 9 am", "8 pm to 9 pm"],
          rate: "2800",
          type: "regular",
        },
        {
          schedule: "Tue, Thurs, Sat",
          timings: ["7 pm to 8 pm"],
          rate: "2800",
          type: "regular",
        },
        {
          schedule: "Sat, Sun",
          timings: ["7 pm to 8 pm", "10 am to 11 am", "11 am to 12 pm"],
          rate: "2500",
          type: "prime",
          label: "Prime Batch",
        },
      ],
    },
    {
      category: "Gymnastics Coaching (Kids)",
      icon: "🤸",
      packages: [
        {
          schedule: "Mon, Wed, Fri",
          timings: ["4 pm to 5 pm", "5 pm to 6 pm", "6 pm to 7 pm", "7 pm to 8 pm"],
          rate: "2500",
          type: "regular",
        },
        {
          schedule: "Tue, Thurs, Sat",
          timings: ["4 pm to 5 pm", "5 pm to 6 pm", "6 pm to 7 pm", "7 pm to 8 pm"],
          rate: "2500",
          type: "regular",
        },
        {
          schedule: "Tue, Thurs",
          timings: ["4 pm to 5 pm", "5 pm to 6 pm", "6 pm to 7 pm", "7 pm to 8 pm"],
          rate: "1700",
          type: "budget",
        },
      ],
    },
    {
      category: "Gymnastics Coaching (Adults)",
      icon: "🤸",
      packages: [
        {
          schedule: "Mon, Wed, Fri",
          timings: ["7 am to 8 am", "8 am to 9 am", "7 pm to 8 pm"],
          rate: "2800",
          type: "regular",
        },
        {
          schedule: "Tue, Thurs, Sat",
          timings: ["7 pm to 8 pm"],
          rate: "2800",
          type: "regular",
        },
        {
          schedule: "Tue, Thurs",
          timings: ["7 pm to 8 pm"],
          rate: "1900",
          type: "budget",
        },
      ],
    },
    {
      category: "Badminton Court Booking",
      icon: "🏟️",
      packages: [
        {
          schedule: "Mon to Fri",
          timings: ["6 am to 9:55 am"],
          rate: "400",
          type: "session",
          unit: "Per session",
        },
        {
          schedule: "Mon to Fri",
          timings: ["10 am to 3:55 pm"],
          rate: "200",
          type: "happy-hour",
          unit: "Per hour",
          label: "Happy Hour",
        },
        {
          schedule: "Mon to Fri",
          timings: ["4 pm to 11:55 pm"],
          rate: "400",
          type: "session",
          unit: "Per hour",
        },
        {
          schedule: "Sat to Sun",
          timings: ["6 am to 11:55 pm"],
          rate: "400",
          type: "session",
          unit: "Per hour",
        },
      ],
    },
    {
      category: "Football (5 to 8 years)",
      icon: "⚽",
      packages: [
        {
          schedule: "Mon, Wed, Fri",
          timings: ["5 pm to 6 pm"],
          rate: "1800",
          type: "regular",
        },
      ],
    },
    {
      category: "Football (9 to 16 years)",
      icon: "⚽",
      packages: [
        {
          schedule: "Mon, Wed, Fri",
          timings: ["6 pm to 7 pm"],
          rate: "1800",
          type: "regular",
        },
      ],
    },
  ]

  const getPackageStyle = (type) => {
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

  const getTypeLabel = (type) => {
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
                        {getTypeLabel(pkg.type) && (
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeLabel(pkg.type).color}`}
                          >
                            {getTypeLabel(pkg.type).text}
                          </span>
                        )}
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
                  <p>We charge a one-time admission fee of ₹1000/- for football programs only.</p>
                </div>
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

        {/* Contact CTA */}
        <div className="mt-8 text-center">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Ready to Get Started?</h3>
            <p className="text-gray-600 mb-6">
              Contact us to book your trial session or learn more about our programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                Book Trial Session
              </button>
              <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
