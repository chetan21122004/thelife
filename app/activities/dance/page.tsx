"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Star, Clock, Users, Award } from "lucide-react"

const danceStyles = [
	{
		name: "Hip-hop",
		description:
			"Dynamic urban dance style perfect for all age groups (KIDS-TEENS-ADULTS)",
		image:
			"https://images.unsplash.com/photo-1535525153412-5a42439a210d?w=800&auto=format&fit=crop&q=60",
		features: [
			"Energetic movements",
			"Modern choreography",
			"Confidence building",
		],
		color: "from-[#f39318] to-[#FF5500]",
	},
	{
		name: "Bollywood",
		description:
			"Vibrant Indian dance style combining classical and contemporary elements",
		image:
			"https://blog.dancevision.com/hs-fs/hubfs/Dance%20Vision/Blog/Body%20Images/Screenshot%20(565).png?width=1726&height=971&name=Screenshot%20(565).png",
		features: ["Popular music", "Expressive movements", "Fun choreography"],
		color: "from-[#FF5500] to-[#f39318]",
	},
	{
		name: "Contemporary",
		description:
			"Modern dance form focusing on fluid movements and artistic expression",
		image:
			"https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=800&auto=format&fit=crop&q=60",
		features: [
			"Artistic expression",
			"Technical training",
			"Emotional connection",
		],
		color: "from-[#f39318] to-[#FF5500]",
	},
	{
		name: "Freestyle",
		description: "Express yourself freely through dance without rigid structures",
		image:
			"https://images.unsplash.com/photo-1547153760-18fc86324498?w=800&auto=format&fit=crop&q=60",
		features: ["Personal expression", "Creative freedom", "Stress relief"],
		color: "from-[#FF5500] to-[#f39318]",
	},
]

const stats = [
	{ number: "1000+", label: "Happy Students", icon: Users },
	{ number: "4", label: "Dance Styles", icon: Star },
	{ number: "12+", label: "Expert Trainers", icon: Award },
	{ number: "50+", label: "Weekly Classes", icon: Clock },
]

const benefits = [
	{
		title: "Physical Benefits",
		description:
			"Burn 300-400 calories per session while improving agility, stamina, and strength",
		icon: "🏃‍♀️",
		color: "from-[#f39318] to-[#FF5500]",
	},
	{
		title: "Mental Wellness",
		description:
			"Dance and music work as therapy, making you stress-free by releasing happy hormones",
		icon: "🧘‍♀️",
		color: "from-[#FF5500] to-[#f39318]",
	},
	{
		title: "All Ages Welcome",
		description:
			"Classes for all age groups (KIDS-TEENS-ADULTS) with personalized attention",
		icon: "👥",
		color: "from-[#f39318] to-[#FF5500]",
	},
	{
		title: "Expert Training",
		description: "Learn from international-level, certified Dance Instructors",
		icon: "🎓",
		color: "from-[#FF5500] to-[#f39318]",
	},
]

const faqs = [
	{
		question: "Why is dance good for your health?",
		answer:
			"Dance offers numerous physical and mental health benefits. It improves cardiovascular fitness, heart and lung condition, and strengthens muscles. Dance also enhances brain health by reducing stress and anxiety levels. At Life Sports, our professional instructors ensure you get great coaching and the best dance experience.",
	},
	{
		question: "Which is the best training institute for dance classes in Pune?",
		answer:
			"The Life Sports Academy is recognized as one of the best dance institutes in Pune. We offer comprehensive training in Hip-Hop, Contemporary, Freestyle, and Bollywood dance styles, with each style taught by certified instructors who specialize in their respective forms.",
	},
	{
		question: "Do you offer separate batches for men and women?",
		answer:
			"Yes, Life Sports Academy offers separate batches for men and women to ensure comfort and personalized attention. These classes help improve your agility and stamina while promoting weight loss. Our certified and experienced dance instructors provide the best dance experience.",
	},
]

export default function DancePage() {
	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section with Video Background */}
			<section className="relative h-screen flex items-center justify-center overflow-hidden">
				<div className="absolute inset-0">
					<Image
						src="https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=1920&auto=format&fit=crop&q=60"
						alt="Dance Classes in Pune"
						fill
						className="object-cover"
						priority
					/>
					<div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
				</div>
				<div className="relative z-10 container mx-auto px-4 text-center text-white">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="max-w-4xl mx-auto"
					>
						<h1 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#f39318] to-[#FF5500]">
							Best Dance Classes in Pune
						</h1>
						<p className="text-xl md:text-2xl mb-6 text-gray-200">
							Standing among the reputed dance classes in Pune, Life Sports
							Academy provides a platform to learn various dance forms and
							showcase your talent.
						</p>
						<p className="text-lg mb-8 italic text-gray-300">
							"It doesn't matter what your age or what is your size, trust us
							you can dance."
						</p>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="flex flex-col sm:flex-row gap-4 justify-center items-center"
					>
						<Link
							href="#enroll"
							className="bg-gradient-to-r from-[#f39318] to-[#FF5500] hover:from-[#e08616] hover:to-[#e04d00] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 inline-flex items-center gap-2 shadow-lg"
						>
							Enroll for Trial Session
							<ChevronRight className="h-5 w-5" />
						</Link>
						<Link
							href="#styles"
							className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:bg-white/20 inline-flex items-center gap-2 border border-[#f39318]/30"
						>
							Explore Dance Styles
						</Link>
					</motion.div>
				</div>

				{/* Floating Stats */}
				<div className="absolute bottom-0 left-0 right-0 bg-black/30 backdrop-blur-md border-t border-[#f39318]/20">
					<div className="container mx-auto px-4 py-6">
						<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
							{stats.map((stat, index) => (
								<motion.div
									key={stat.label}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									className="text-center text-white"
								>
									<stat.icon className="h-6 w-6 mx-auto mb-2 text-[#f39318]" />
									<div className="text-3xl font-bold mb-1">{stat.number}</div>
									<div className="text-sm text-gray-300">{stat.label}</div>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Introduction with Gradient Border */}
			<section className="py-20 bg-white relative">
				<div className="absolute inset-0 bg-gradient-to-b from-[#f39318]/5 to-white pointer-events-none" />
				<div className="container mx-auto px-4">
					<div className="max-w-3xl mx-auto text-center relative">
						<div className="absolute -top-10 left-1/2 -translate-x-1/2 w-1 h-20 bg-gradient-to-b from-[#f39318] to-transparent" />
						<h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#f39318] to-[#FF5500]">
							Dance Makes You Feel Good
						</h2>
						<p className="text-lg text-gray-700 mb-6 leading-relaxed">
							Transform every aspect of your personality - be it physical,
							spiritual, mental and emotional through your own style of dance.
							Dance is a type of art that connects your body to your soul to
							express your emotions strongly.
						</p>
					</div>
				</div>
			</section>

			{/* Dance Styles with 3D Cards */}
			<section
				id="styles"
				className="py-20 bg-gradient-to-b from-white to-[#f39318]/5 relative overflow-hidden"
			>
				<div className="container mx-auto px-4">
					<h2 className="text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#f39318] to-[#FF5500]">
						Dance Styles We Offer
					</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-[#f39318] to-[#FF5500] mx-auto mb-16 rounded-full" />
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{danceStyles.map((style, index) => (
							<motion.div
								key={style.name}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								whileHover={{ y: -5 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								viewport={{ once: true }}
								className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-[#f39318]/10"
							>
								<div className="absolute inset-0 bg-gradient-to-br from-[#f39318]/5 to-[#FF5500]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
								<div className="relative h-48">
									<Image
										src={style.image || "/placeholder.svg"}
										alt={style.name}
										fill
										className="object-cover transition-transform duration-300 group-hover:scale-110"
									/>
									<div
										className={`absolute inset-0 bg-gradient-to-br ${style.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
									/>
								</div>
								<div className="p-6 relative">
									<h3 className="text-xl font-semibold mb-2 text-gray-800">
										{style.name}
									</h3>
									<p className="text-gray-600 mb-4">{style.description}</p>
									<ul className="space-y-2">
										{style.features.map((feature, idx) => (
											<li
												key={idx}
												className="flex items-center text-sm text-gray-600"
											>
												<span className="mr-2 text-[#f39318]">•</span>
												{feature}
											</li>
										))}
									</ul>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Benefits with Gradient Cards */}
			<section className="py-20 bg-white relative">
				<div className="container mx-auto px-4">
					<h2 className="text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#f39318] to-[#FF5500]">
						Why Choose Life Sports Academy
					</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-[#f39318] to-[#FF5500] mx-auto mb-16 rounded-full" />
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{benefits.map((benefit, index) => (
							<motion.div
								key={benefit.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								whileHover={{ y: -5 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								viewport={{ once: true }}
								className="relative group"
							>
								<div className="absolute inset-0 bg-gradient-to-br from-[#f39318]/10 to-[#FF5500]/10 rounded-xl transform rotate-3 group-hover:rotate-1 transition-transform duration-300" />
								<div className="relative bg-white rounded-xl p-8 shadow-lg group-hover:shadow-xl transition-all duration-300 border border-[#f39318]/10">
									<div className="text-4xl mb-4">{benefit.icon}</div>
									<h3 className="text-xl font-semibold mb-3 text-gray-800">
										{benefit.title}
									</h3>
									<p className="text-gray-600">{benefit.description}</p>
									<div
										className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${benefit.color} rounded-b-xl`}
									/>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* FAQ Section with Animated Accordions */}
			<section className="py-20 bg-gradient-to-b from-white to-[#f39318]/5 relative">
				<div className="container mx-auto px-4">
					<h2 className="text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#f39318] to-[#FF5500]">
						Frequently Asked Questions
					</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-[#f39318] to-[#FF5500] mx-auto mb-16 rounded-full" />
					<div className="max-w-3xl mx-auto space-y-8">
						{faqs.map((faq, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								viewport={{ once: true }}
								className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-[#f39318]/10"
							>
								<h3 className="text-xl font-semibold mb-3 flex items-start">
									<span className="text-[#f39318] mr-2 font-bold">Q.</span>
									<span className="text-gray-800">{faq.question}</span>
								</h3>
								<div className="pl-6 border-l-2 border-[#f39318]/20">
									<p className="text-gray-600">{faq.answer}</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section with Gradient Background */}
			<section id="enroll" className="py-20 relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-br from-[#f39318] to-[#FF5500]" />
				<div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width%3D%2260%22 height%3D%2260%22 viewBox%3D%220 0 60 60%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg fill%3D%22none%22 fillRule%3D%22evenodd%22%3E%3Cg fill%3D%22%23ffffff%22 fillOpacity%3D%220.1%22%3E%3Ccircle cx%3D%2230%22 cy%3D%2230%22 r%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-20" />
				<div className="container mx-auto px-4 text-center relative z-10">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
					>
						<h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
							Ready to Start Your Dance Journey?
						</h2>
						<p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
							Join Life Sports Academy today and discover the joy of dance with
							our international-level, certified Dance Instructors. Transform your
							life through dance!
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
							<Link
								href="/contact"
								className="bg-white text-[#f39318] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 inline-flex items-center gap-2 shadow-lg"
							>
								Book Your Trial Session
								<ChevronRight className="h-5 w-5" />
							</Link>
							<Link
								href="/contact"
								className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all inline-flex items-center gap-2"
							>
								Contact Us
								<ChevronRight className="h-5 w-5" />
							</Link>
						</div>
					</motion.div>
				</div>
			</section>
		</div>
	)
}
