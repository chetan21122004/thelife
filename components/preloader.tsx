"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import gsap from "gsap"

interface PreloaderProps {
  onLoadingComplete: () => void
}

export function Preloader({ onLoadingComplete }: PreloaderProps) {
  const preloaderRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const brandTextRef = useRef<HTMLDivElement>(null)
  const taglineRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const iconRef = useRef<HTMLDivElement>(null)
  const [loadingPercentage, setLoadingPercentage] = useState(0)
  const [loadingText, setLoadingText] = useState("Initializing")

  useEffect(() => {
    const tl = gsap.timeline()

    // Initial setup
    gsap.set([logoRef.current, brandTextRef.current, taglineRef.current, progressRef.current, iconRef.current], {
      opacity: 0,
      y: 20,
    })

    // Entrance animation
    tl.to(preloaderRef.current, { opacity: 1, duration: 0.5 })
      .to(logoRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" })
      .to(brandTextRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.4")
      .to(iconRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.3")
      .to(taglineRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.3")
      .to(progressRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.3")

    // Loading simulation with text updates
    let progress = 0
    const loadingStates = [
      { text: "Initializing", threshold: 0 },
      { text: "Loading assets", threshold: 25 },
      { text: "Preparing interface", threshold: 50 },
      { text: "Finalizing", threshold: 80 },
      { text: "Ready", threshold: 95 },
    ]

    const interval = setInterval(() => {
      if (progress < 70) {
        progress += Math.random() * 4 + 1
      } else if (progress < 90) {
        progress += Math.random() * 2 + 0.5
      } else {
        progress += Math.random() * 0.8 + 0.2
      }

      if (progress > 100) progress = 100
      setLoadingPercentage(Math.round(progress))

      // Update loading text based on progress
      const currentState = loadingStates.reverse().find((state) => progress >= state.threshold)
      if (currentState) {
        setLoadingText(currentState.text)
      }

      if (progress >= 100) {
        clearInterval(interval)

        // Exit animation
        const exitTl = gsap.timeline({
          onComplete: () => setTimeout(() => onLoadingComplete(), 300),
        })

        exitTl
          .to([progressRef.current, taglineRef.current], {
            opacity: 0,
            y: -10,
            duration: 0.4,
            stagger: 0.1,
          })
          .to(
            [iconRef.current, brandTextRef.current, logoRef.current],
            {
              opacity: 0,
              scale: 0.9,
              duration: 0.6,
              stagger: 0.1,
              ease: "power2.in",
            },
            "-=0.2",
          )
          .to(
            preloaderRef.current,
            {
              opacity: 0,
              duration: 0.8,
              ease: "power2.inOut",
            },
            "-=0.3",
          )
      }
    }, 120)

    return () => {
      clearInterval(interval)
      tl.kill()
    }
  }, [onLoadingComplete])

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.1),transparent_50%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_49%,rgba(255,255,255,0.03)_50%,transparent_51%)] bg-[length:20px_20px]"></div>
      </div>

      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-orange-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-3/4 w-20 h-20 bg-orange-400/10 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center max-w-lg w-full px-8">
        {/* Logo */}
        <div ref={logoRef} className="mb-8 relative">
          <div className="w-36 relative">
            <Image
              src="/logo.jpg"
              alt="Life Sports Logo"
              width={192}
              height={320}
              className="object-contain filter drop-shadow-lg"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent rounded-lg blur-lg"></div>
        </div>

        {/* Brand text */}
        <div ref={brandTextRef} className="text-center mb-2">
          <h1 className="text-3xl md:text-4xl font-light tracking-[0.3em] text-white mb-1">LIFE SPORTS</h1>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent mx-auto"></div>
        </div>

        {/* Animated icon */}
        <div ref={iconRef} className="mb-8">
          <div className="relative w-16 h-16 mx-auto">
            {/* Shuttlecock icon using SVG */}
            <div className="w-full h-full flex items-center justify-center">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                className="text-orange-400 animate-bounce"
                style={{ animationDuration: "2s" }}
              >
                {/* Shuttlecock body */}
                <circle cx="24" cy="32" r="4" fill="currentColor" />
                {/* Feathers */}
                <path d="M24 28 L20 16 L24 18 L28 16 Z" fill="currentColor" opacity="0.7" />
                <path d="M24 28 L16 20 L18 24 L16 28 Z" fill="currentColor" opacity="0.5" />
                <path d="M24 28 L32 20 L30 24 L32 28 Z" fill="currentColor" opacity="0.5" />
                <path d="M24 28 L20 12 L24 14 L28 12 Z" fill="currentColor" opacity="0.3" />
              </svg>
            </div>

            {/* Rotating ring */}
            <div
              className="absolute inset-0 border-2 border-orange-400/30 rounded-full animate-spin"
              style={{ animationDuration: "8s" }}
            ></div>
            <div
              className="absolute inset-2 border border-orange-400/20 rounded-full animate-spin"
              style={{ animationDuration: "6s", animationDirection: "reverse" }}
            ></div>
          </div>
        </div>

        {/* Tagline */}
        <div ref={taglineRef} className="text-center mb-12">
          <h2 className="text-lg md:text-xl font-light text-white/90 mb-2">
            <span className="text-orange-400 font-medium">Invest</span> One Hour a Day
          </h2>
          <p className="text-white/60 text-sm font-light">
            Transform Your <span className="text-orange-400">Life</span>
          </p>
        </div>

        {/* Progress section */}
        <div ref={progressRef} className="w-full max-w-sm">
          {/* Loading text and percentage */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-light text-white/70 tracking-wide">{loadingText}</span>
            <div className="flex items-baseline">
              <span className="text-2xl font-light text-white">{loadingPercentage}</span>
              <span className="text-sm text-white/60 ml-1">%</span>
            </div>
          </div>

          {/* Progress bar */}
          <div className="relative">
            <div className="h-1 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
              <div
                className="h-full bg-gradient-to-r from-orange-400 to-orange-500 rounded-full transition-all duration-300 ease-out relative"
                style={{ width: `${loadingPercentage}%` }}
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
              </div>
            </div>

            {/* Progress dots */}
            <div className="flex justify-between mt-2">
              {[0, 25, 50, 75, 100].map((milestone) => (
                <div
                  key={milestone}
                  className={`w-1 h-1 rounded-full transition-all duration-300 ${
                    loadingPercentage >= milestone ? "bg-orange-400" : "bg-white/20"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
    </div>
  )
}
