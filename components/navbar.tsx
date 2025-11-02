"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

const activities = [
  {
    name: "Badminton",
    image: "https://www.thelifesports.in/wp-content/uploads/2020/02/newbadmin2.jpg",
    description: "Professional coaching",
    features: ["World-class courts", "Expert coaches", "All age groups"],
    color: "from-orange-400 to-pink-600",
    href: "/activities/badminton"
  },
  {
    name: "Table Tennis",
    image: "https://www.thelifesports.in/wp-content/uploads/2022/07/table-tennis-coaching-in-pune-1.jpg",
    description: "Expert training",
    features: ["Professional tables", "Tournament training", "Beginners welcome"],
    color: "from-blue-400 to-indigo-600",
    href: "/activities/table-tennis"
  },
  {
    name: "Gymnastics",
    image: "https://www.thelifesports.in/wp-content/uploads/2020/06/img15-.jpg",
    description: "All levels welcome",
    features: ["Safe environment", "Certified trainers", "Modern equipment"],
    color: "from-green-400 to-teal-600",
    href: "/activities/gymnastics"
  },
  {
    name: "Dance",
    image: "https://www.thelifesports.in/wp-content/uploads/2020/06/img23-1.jpg",
    description: "Various styles",
    features: ["Multiple dance forms", "Professional choreographers", "Regular events"],
    color: "from-purple-400 to-pink-600",
    href: "/activities/dance"
  },
  {
    name: "Yoga",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&auto=format&fit=crop&q=60",
    description: "Mind and body wellness",
    features: ["Experienced instructors", "All levels welcome", "Peaceful environment"],
    color: "from-cyan-400 to-blue-600",
    href: "/activities/yoga"
  },
  {
    name: "Cricket Net",
    image: "https://www.shutterstock.com/image-photo/front-view-cricket-batsman-action-600nw-2341675921.jpg",
    description: "Professional practice nets with auto machine",
    features: ["Professional nets", "Auto bowling machines", "Expert coaching"],
    color: "from-red-400 to-rose-600",
    href: "/activities/cricketNet"
  },
  {
    name: "Pickle Ball",
    image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=500&auto=format&fit=crop&q=60",
    description: "Fast-paced paddle sport",
    features: ["Professional courts", "Equipment provided", "All skill levels"],
    color: "from-emerald-400 to-green-600",
    href: "/activities/pickle-ball"
  },
  {
    name: "Mini Pro Turf",
    image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=500&auto=format&fit=crop&q=60",
    description: "Professional synthetic turf",
    features: ["Premium turf surface", "Multi-sport facility", "Weather resistant"],
    color: "from-lime-400 to-emerald-600",
    href: "/activities/mini-pro-turf"
  },
]

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [activeActivity, setActiveActivity] = useState<string | null>("Badminton")
  const pathname = usePathname()

  const toggleDropdown = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null)
      setActiveActivity(null)
    } else {
      setActiveDropdown(dropdown)
      if (dropdown === "activities") {
        setActiveActivity("Badminton")
      }
    }
  }

  // Handle scroll on mobile menu open
  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isMobileMenuOpen])

  // Handle initial hash navigation
  useEffect(() => {
    const handleHashScroll = () => {
      if (pathname === "/" && window.location.hash) {
        const id = window.location.hash.replace("#", "")
        const element = document.getElementById(id)
        if (element) {
          setTimeout(() => {
            const yOffset = -80 // Navbar height offset
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
            window.scrollTo({ top: y, behavior: "smooth" })
          }, 100)
        }
      }
    }

    handleHashScroll()
    window.addEventListener('hashchange', handleHashScroll)
    return () => window.removeEventListener('hashchange', handleHashScroll)
  }, [pathname])

  const handleNavigation = (item: any) => {
    if (item.isSection) {
      if (pathname === "/") {
        // If we're on the homepage, scroll to section
        const element = document.getElementById(item.sectionId)
        if (element) {
          const yOffset = -80 // Navbar height offset
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
          window.scrollTo({ top: y, behavior: "smooth" })
        }
      } else {
        // If we're on a different page, navigate to homepage with hash
        window.location.href = "/#" + item.sectionId
      }
    }
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    {
      name: "HOME",
      href: "/",
      isSection: false
    },
    {
      name: "ABOUT US",
      href: "/#about",
      isSection: true,
      sectionId: "about"
    },
    {
      name: "ACTIVITIES",
      href: "#",
      hasDropdown: true,
      dropdown: "activities",
      isSection: false
    },
    {
      name: "CORPORATE EVENTS",
      href: "/#corporate-events",
      isSection: true,
      sectionId: "corporate-events"
    },
    {
      name: "RENT A STUDIO",
      href: "/rent-a-studio",
      isSection: false
    },
    {
      name: "TESTIMONIALS",
      href: "/#testimonials",
      isSection: true,
      sectionId: "testimonials"
    },
    {
      name: "MEDIA",
      href: "/media",
      isSection: false
    },
    {
      name: "CONTACT",
      href: "/contact",
      isSection: false
    },
    {
      name: "BOOK MY COURT",
      href: "/book-court",
      isSection: false
    },
  ]

  return (
    <>
      {/* Main Navigation */}
      <header className="sticky top-0 z-50 w-full transition-all duration-300 bg-[#f39318]">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/lifelogo.jpg"
                alt="The Life Sports Logo"
                width={140}
                height={60}
                className="h-12 w-auto transition-transform duration-300 hover:scale-105"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 pr-32">
            {navItems.map((item, index) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    onMouseEnter={() => setActiveDropdown(item.dropdown)}
                    onMouseLeave={() => {
                      setActiveDropdown(null)
                      setActiveActivity(null)
                    }}
                  >
                    <button
                      className="flex items-center text-sm font-medium text-white hover:text-yellow-200 transition-colors"
                      onClick={() => toggleDropdown(item.dropdown!)}
                    >
                      {item.name}
                      <motion.div
                        animate={{ rotate: activeDropdown === item.dropdown ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </motion.div>
                    </button>

                    {/* Activities Mega Menu with AnimatePresence */}
                    <AnimatePresence>
                      {item.dropdown === "activities" && activeDropdown === item.dropdown && (
                        <motion.div
                          key="activities-dropdown"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute  top-full w-[800px] max-w-[90vw] bg-white/95 backdrop-blur-sm text-gray-800 shadow-2xl rounded-2xl overflow-hidden z-50"
                        >
                          <div className="flex h-[450px]">
                            {/* Left sidebar navigation */}
                            <div className="w-1/4 bg-gray-100/80 pt-6 space-y-1">
                              {activities.map((activity) => (
                                <Link
                                  href={activity.href}
                                  key={`nav-${activity.name}`}
                                  className={cn(
                                    "w-full text-left px-6 py-3 relative transition-all block",
                                    activeActivity === activity.name
                                      ? "text-white font-medium"
                                      : "text-gray-700 hover:bg-gray-200/80"
                                  )}
                                  onMouseEnter={() => setActiveActivity(activity.name)}
                                  onClick={() => {
                                    setActiveDropdown(null)
                                    setActiveActivity(null)
                                  }}
                                >
                                  {activeActivity === activity.name && (
                                    <motion.div
                                      layoutId="activeActivityBackground"
                                      className={`absolute inset-0 bg-gradient-to-r ${activity.color}`}
                                      transition={{ type: "spring", duration: 0.5 }}
                                    />
                                  )}
                                  <span className="relative z-10">{activity.name}</span>
                                </Link>
                              ))}
                            </div>

                            {/* Right content area */}
                            <div className="w-3/4 p-8 relative">
                              <AnimatePresence mode="wait">
                                {activities.map((activity) => (
                                  activeActivity === activity.name && (
                                    <motion.div
                                      key={`content-${activity.name}`}
                                      initial={{ opacity: 0 }}
                                      animate={{ opacity: 1 }}
                                      exit={{ opacity: 0 }}
                                      transition={{ duration: 0.3 }}
                                      className="h-full"
                                    >
                                      <div className="flex h-full">
                                        {/* Activity details */}
                                        <div className="w-1/2 pr-6 flex flex-col justify-between">
                                          <div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{activity.name}</h3>
                                            <p className="text-gray-600 mb-6">{activity.description}</p>

                                            <h4 className="font-medium text-gray-800 mb-3">Key Features</h4>
                                            <div className="space-y-3">
                                              {activity.features.map((feature, index) => (
                                                <motion.div
                                                  key={index}
                                                  initial={{ opacity: 0, x: -10 }}
                                                  animate={{ opacity: 1, x: 0 }}
                                                  transition={{ delay: index * 0.1 }}
                                                  className="flex items-center gap-3"
                                                >
                                                  <div className={`h-8 w-8 rounded-full flex items-center justify-center bg-gradient-to-r ${activity.color}`}>
                                                    <svg className="h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                      <polyline points="20 6 9 17 4 12"></polyline>
                                                    </svg>
                                                  </div>
                                                  <span className="text-gray-700">{feature}</span>
                                                </motion.div>
                                              ))}
                                            </div>
                                          </div>

                                          <Link
                                            href={activity.href}
                                            className={`mt-6 inline-flex items-center font-medium bg-gradient-to-r ${activity.color} text-white px-6 py-3 rounded-lg transition-transform hover:scale-105 self-start`}
                                            onClick={() => {
                                              setActiveDropdown(null)
                                              setActiveActivity(null)
                                            }}
                                          >
                                            Explore {activity.name}
                                            <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                              <path d="M5 12h14"></path>
                                              <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                          </Link>
                                        </div>

                                        {/* Activity image */}
                                        <div className="w-1/2 relative">
                                          <div className="absolute inset-0 overflow-hidden rounded-xl">
                                            <motion.div
                                              initial={{ scale: 1 }}
                                              animate={{ scale: 1.05 }}
                                              transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                                              className="h-full w-full"
                                            >
                                              <Image
                                                src={activity.image}
                                                alt={activity.name}
                                                fill
                                                className="object-cover"
                                              />
                                            </motion.div>
                                            <div className={`absolute inset-0 opacity-30 bg-gradient-to-tr ${activity.color}`}></div>
                                          </div>
                                        </div>
                                      </div>
                                    </motion.div>
                                  )
                                ))}
                              </AnimatePresence>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {item.isSection ? (
                      <button
                        onClick={() => handleNavigation(item)}
                        className="text-sm font-medium text-white hover:text-yellow-200 transition-colors relative group"
                      >
                        {item.name}
                        <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-sm font-medium text-white hover:text-yellow-200 transition-colors relative group"
                      >
                        {item.name}
                        <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                      </Link>
                    )}
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          <button
            className="lg:hidden text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation with AnimatePresence */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 lg:hidden"
                onClick={() => setIsMobileMenuOpen(false)}
              />

              {/* Drawer */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 20, stiffness: 100 }}
                className="fixed right-0 top-0 bottom-0 w-[300px] bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
              >
                {/* Header */}
                <div className="sticky top-0 bg-white/80 backdrop-blur-sm border-b border-gray-100 p-4 flex items-center justify-between">
                  <Image
                    src="/images/lifelogo.jpg"
                    alt="The Life Sports Logo"
                    width={100}
                    height={40}
                    className="h-8 w-auto"
                  />
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="h-5 w-5 text-gray-600" />
                  </button>
                </div>

                {/* Navigation Items */}
                <div className="p-4 space-y-2">
                  {navItems.map((item) => (
                    <div key={item.name} className="group">
                      {item.hasDropdown ? (
                        <>
                          <button
                            className="flex items-center w-full p-3 rounded-lg text-gray-700 hover:bg-orange-50 hover:text-[#f39318] transition-all"
                            onClick={() => toggleDropdown(item.dropdown!)}
                          >
                            <span className="font-medium">{item.name}</span>
                            <motion.div
                              animate={{ rotate: activeDropdown === item.dropdown ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                              className="ml-auto"
                            >
                              <ChevronDown className="h-4 w-4" />
                            </motion.div>
                          </button>
                          <AnimatePresence>
                            {activeDropdown === item.dropdown && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden mt-1"
                              >
                                {item.dropdown === "activities" && activities.map((activity) => (
                                  <Link
                                    key={activity.name}
                                    href={activity.href}
                                    className="flex items-center gap-3 p-3 ml-2 rounded-lg hover:bg-orange-50 transition-all group"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                  >
                                    <div className="relative h-10 w-10 rounded-lg overflow-hidden ring-1 ring-black/5 group-hover:ring-orange-400/50 transition-all">
                                      <Image
                                        src={activity.image}
                                        alt={activity.name}
                                        fill
                                        className="object-cover"
                                      />
                                      <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${activity.color} group-hover:opacity-30 transition-opacity`} />
                                    </div>
                                    <div>
                                      <div className="font-medium text-gray-900 group-hover:text-[#f39318] transition-colors">{activity.name}</div>
                                      <div className="text-xs text-gray-500">{activity.description}</div>
                                    </div>
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        item.isSection ? (
                          <button
                            onClick={() => handleNavigation(item)}
                            className="flex items-center w-full p-3 rounded-lg text-gray-700 hover:bg-orange-50 hover:text-[#f39318] transition-all font-medium"
                          >
                            {item.name}
                          </button>
                        ) : (
                          <Link
                            href={item.href}
                            className="flex items-center w-full p-3 rounded-lg text-gray-700 hover:bg-orange-50 hover:text-[#f39318] transition-all font-medium"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        )
                      )}
                    </div>
                  ))}
                </div>


              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  )
} 