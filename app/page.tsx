"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Search,
  MapPin,
  Phone,
  Mail,
  Globe,
  Users,
  FileText,
  Shield,
  Heart,
  Scale,
  Briefcase,
  ChevronRight,
  Calendar,
  Download,
  ExternalLink,
  Building,
  Star,
  TrendingUp,
  Award,
  CheckCircle,
  ArrowRight,
  PlayCircle,
  Zap,
  Target,
  Clock,
  MessageSquare,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [animatedStats, setAnimatedStats] = useState([0, 0, 0, 0])
  const [isVisible, setIsVisible] = useState(false)

  const heroSlides = [
    {
      title: "Safe Migration Starts Here",
      subtitle: "Your trusted partner for dignified migration",
      description: "Access comprehensive services, legal support, and guidance throughout your migration journey.",
      cta: "Start Your Journey",
      image: "bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800",
    },
    {
      title: "24/7 Emergency Support",
      subtitle: "We're here when you need us most",
      description: "Round-the-clock assistance for migrants in crisis situations worldwide.",
      cta: "Get Emergency Help",
      image: "bg-gradient-to-r from-red-600 via-pink-700 to-rose-800",
    },
    {
      title: "Legal Protection & Rights",
      subtitle: "Know your rights, protect your future",
      description: "Professional legal aid and contract review services to ensure fair treatment.",
      cta: "Learn Your Rights",
      image: "bg-gradient-to-r from-green-600 via-emerald-700 to-teal-800",
    },
  ]

  const quickLinks = [
    { title: "Register as Migrant", href: "/register", icon: Users, color: "from-blue-500 to-blue-600" },
    { title: "Find Services", href: "/services", icon: Search, color: "from-green-500 to-green-600" },
    { title: "Download Forms", href: "/resources", icon: Download, color: "from-purple-500 to-purple-600" },
    { title: "Contact MRC", href: "/contact", icon: Phone, color: "from-orange-500 to-orange-600" },
  ]

  const services = [
    {
      title: "Pre-Departure Services",
      description: "Comprehensive orientation, training, and preparation before migration",
      icon: Briefcase,
      color: "from-blue-500 to-blue-600",
      features: ["Orientation Programs", "Skills Training", "Documentation", "Cultural Preparation"],
      stats: "2,500+ Trained",
    },
    {
      title: "Legal Aid & Support",
      description: "Professional legal assistance, contract review, and rights protection",
      icon: Scale,
      color: "from-green-500 to-green-600",
      features: ["Contract Review", "Legal Consultation", "Rights Protection", "Court Representation"],
      stats: "1,800+ Cases",
    },
    {
      title: "Psychosocial Support",
      description: "Mental health counseling and emotional support services",
      icon: Heart,
      color: "from-red-500 to-red-600",
      features: ["Individual Counseling", "Group Therapy", "Crisis Intervention", "Family Support"],
      stats: "1,200+ Sessions",
    },
    {
      title: "Reintegration Support",
      description: "Comprehensive assistance for returnee migrants",
      icon: Users,
      color: "from-purple-500 to-purple-600",
      features: ["Job Placement", "Business Support", "Community Integration", "Skills Development"],
      stats: "900+ Reintegrated",
    },
  ]

  const stats = [
    { value: 5000, label: "Migrants Served", icon: Users, color: "text-blue-600" },
    { value: 15, label: "Partner Countries", icon: Globe, color: "text-green-600" },
    { value: 24, label: "Hours Support", icon: Clock, color: "text-purple-600" },
    { value: 98, label: "Success Rate %", icon: Award, color: "text-orange-600" },
  ]

  const announcements = [
    {
      date: "Jan 20, 2024",
      title: "New Pre-Departure Training Program Launched",
      excerpt: "Enhanced training modules now available for all registered migrants with interactive content...",
      category: "Training",
      priority: "high",
      image: "bg-gradient-to-br from-blue-500 to-blue-600",
    },
    {
      date: "Jan 18, 2024",
      title: "Updated Legal Aid Services",
      excerpt: "Expanded legal support services now include contract negotiation and workplace rights...",
      category: "Legal",
      priority: "medium",
      image: "bg-gradient-to-br from-green-500 to-green-600",
    },
    {
      date: "Jan 15, 2024",
      title: "Emergency Contact System Upgraded",
      excerpt: "24/7 emergency support system now available with multilingual support and faster response...",
      category: "Emergency",
      priority: "high",
      image: "bg-gradient-to-br from-red-500 to-red-600",
    },
  ]

  // Auto-slide hero carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [heroSlides.length])

  // Animate statistics when component mounts
  useEffect(() => {
    setIsVisible(true)
    const timers = stats.map((stat, index) => {
      return setTimeout(() => {
        let current = 0
        const increment = stat.value / 50
        const timer = setInterval(() => {
          current += increment
          if (current >= stat.value) {
            current = stat.value
            clearInterval(timer)
          }
          setAnimatedStats((prev) => {
            const newStats = [...prev]
            newStats[index] = Math.floor(current)
            return newStats
          })
        }, 30)
      }, index * 200)
    })

    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Enhanced Top Header Bar */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white py-3 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-8">
              <span className="flex items-center hover:text-blue-200 transition-all duration-300 cursor-pointer group">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-2 group-hover:scale-110 transition-transform">
                  <Phone className="w-3 h-3 text-white" />
                </div>
                Emergency: +255 123 456 789
              </span>
              <span className="flex items-center hover:text-blue-200 transition-all duration-300 cursor-pointer group">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-2 group-hover:scale-110 transition-transform">
                  <Mail className="w-3 h-3 text-white" />
                </div>
                info@mrc.go.tz
              </span>
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/help" className="hover:text-blue-200 transition-colors duration-300 hover:underline">
                Help Center
              </Link>
              <Link href="/contact" className="hover:text-blue-200 transition-colors duration-300 hover:underline">
                Contact Us
              </Link>
              <Select>
                <SelectTrigger className="w-24 h-7 text-xs bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all">
                  <SelectValue placeholder="EN" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">🇬🇧 English</SelectItem>
                  <SelectItem value="sw">🇹🇿 Kiswahili</SelectItem>
                  <SelectItem value="ar">🇸🇦 العربية</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Main Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-xl border-b border-blue-100 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="flex items-center space-x-4 group">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <Globe className="w-8 h-8 text-white group-hover:animate-pulse" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-500">
                  MRC PORTAL
                </h1>
                <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">Migrant Resource Centre</p>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center space-x-8">
              {[
                { name: "Home", href: "/", active: true },
                { name: "Services", href: "/services" },
                { name: "Resources", href: "/resources" },
                { name: "About", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative font-medium transition-all duration-300 hover:text-blue-600 ${
                    item.active
                      ? "text-blue-600 after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-blue-600 after:to-purple-600 after:rounded-full"
                      : "text-slate-700 hover:after:absolute hover:after:bottom-[-8px] hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-gradient-to-r hover:after:from-blue-600 hover:after:to-purple-600 hover:after:rounded-full"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                size="sm"
                className="border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-50 transition-all duration-300 hover:scale-105 bg-transparent"
                asChild
              >
                <Link href="/login">Sign In</Link>
              </Button>
              <Button
                size="sm"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                asChild
              >
                <Link href="/register">
                  Register Now
                  <Zap className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Enhanced Hero Section with Carousel */}
      <section className="relative overflow-hidden">
        <div className={`${heroSlides[currentSlide].image} transition-all duration-1000 ease-in-out`}>
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"></div>

          <div className="relative container mx-auto px-4 py-24 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div
                className={`text-white transform transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
              >
                <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/20">
                  <Star className="w-4 h-4 mr-2 text-yellow-400" />
                  <span className="text-sm font-medium">Trusted by 5,000+ Migrants</span>
                </div>

                <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                  {heroSlides[currentSlide].title}
                  <span className="block text-2xl lg:text-3xl font-normal text-blue-200 mt-2">
                    {heroSlides[currentSlide].subtitle}
                  </span>
                </h1>

                <p className="text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed max-w-2xl">
                  {heroSlides[currentSlide].description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-blue-50 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 text-lg px-8 py-4"
                    asChild
                  >
                    <Link href="/register">
                      {heroSlides[currentSlide].cta}
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 bg-transparent backdrop-blur-md text-lg px-8 py-4"
                    asChild
                  >
                    <Link href="/services">
                      <PlayCircle className="mr-2 w-5 h-5" />
                      Watch Demo
                    </Link>
                  </Button>
                </div>

                <div className="flex items-center space-x-8 text-sm">
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-green-400" />
                    <span>Secure & Confidential</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-blue-400" />
                    <span>24/7 Support</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-5 h-5 mr-2 text-yellow-400" />
                    <span>98% Success Rate</span>
                  </div>
                </div>
              </div>

              {/* Enhanced Quick Access Panel */}
              <div
                className={`transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
              >
                <Card className="bg-white/95 backdrop-blur-xl shadow-2xl border-0 rounded-3xl overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
                    <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
                      <Target className="w-6 h-6 mr-2" />
                      Quick Access Portal
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-8">
                    {/* Enhanced Search Bar */}
                    <div className="mb-8">
                      <div className="relative group">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5 group-hover:text-blue-500 transition-colors" />
                        <Input
                          placeholder="Search services, resources, or get help..."
                          className="pl-12 h-14 text-lg border-2 border-slate-200 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 hover:border-blue-300"
                        />
                        <Button
                          size="sm"
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 rounded-xl"
                        >
                          Search
                        </Button>
                      </div>
                    </div>

                    {/* Enhanced Quick Links */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {quickLinks.map((link, index) => (
                        <Link
                          key={index}
                          href={link.href}
                          className="group p-4 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl hover:from-blue-50 hover:to-purple-50 transition-all duration-300 hover:scale-105 hover:shadow-lg border border-slate-200 hover:border-blue-300"
                        >
                          <div
                            className={`w-12 h-12 bg-gradient-to-r ${link.color} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-lg`}
                          >
                            <link.icon className="w-6 h-6 text-white" />
                          </div>
                          <span className="text-sm font-semibold text-slate-700 group-hover:text-blue-600 transition-colors">
                            {link.title}
                          </span>
                        </Link>
                      ))}
                    </div>

                    {/* Enhanced Action Buttons */}
                    <div className="space-y-4">
                      <Button
                        className="w-full h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                        asChild
                      >
                        <Link href="/register">
                          <Users className="mr-2 w-5 h-5" />
                          Register as Migrant Worker
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full h-14 text-lg font-semibold rounded-2xl border-2 border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 hover:scale-105 bg-transparent"
                        asChild
                      >
                        <Link href="/login">
                          <Shield className="mr-2 w-5 h-5" />
                          Staff / Admin Login
                        </Link>
                      </Button>
                    </div>

                    {/* Enhanced Emergency Section */}
                    <div className="mt-8 p-6 bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl border-2 border-red-200">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3 animate-pulse">
                          <Phone className="w-6 h-6 text-white" />
                        </div>
                        <p className="text-sm font-semibold text-red-800 mb-3">Need immediate assistance?</p>
                        <div className="flex justify-center space-x-3">
                          <Button
                            size="sm"
                            className="bg-red-500 hover:bg-red-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                          >
                            <Phone className="w-4 h-4 mr-2" />
                            Emergency
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-red-300 text-red-600 hover:bg-red-50 transition-all duration-300 hover:scale-105 bg-transparent"
                          >
                            <MessageSquare className="w-4 h-4 mr-2" />
                            Live Chat
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-white scale-125 shadow-lg"
                    : "bg-white/50 hover:bg-white/75 hover:scale-110"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
              <Briefcase className="w-4 h-4 mr-2 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600">Our Services</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              Comprehensive Support
              <span className="block text-blue-600">At Every Step</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              From pre-departure preparation to successful reintegration, we provide end-to-end support for your
              migration journey
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:scale-105 overflow-hidden bg-gradient-to-br from-white to-slate-50"
              >
                <CardContent className="p-0">
                  <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                        >
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
                            {service.title}
                          </h3>
                          <div className="flex items-center mt-2">
                            <Badge className="bg-green-100 text-green-700 border-green-200">{service.stats}</Badge>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <TrendingUp className="w-6 h-6 text-green-500 mb-1" />
                        <p className="text-xs text-slate-500">Active</p>
                      </div>
                    </div>

                    <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                        Key Features:
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-slate-600">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button
                        className={`flex-1 bg-gradient-to-r ${service.color} hover:shadow-xl transition-all duration-300 hover:scale-105`}
                      >
                        Get Started
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        className="hover:bg-slate-50 hover:border-blue-300 transition-all duration-300 hover:scale-105 bg-transparent"
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent"></div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Impact That Matters</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Real numbers that showcase our commitment to supporting migrant workers
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-110 hover:-translate-y-2"
              >
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 ${stat.color}`}
                  >
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-2 font-mono">
                    {animatedStats[index]}
                    {stat.label.includes("%") ? "%" : "+"}
                  </div>
                  <div className="text-blue-100 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced News & Announcements */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-12">
                <div>
                  <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-4">
                    <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                    <span className="text-sm font-semibold text-blue-600">Latest Updates</span>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-slate-800">News & Announcements</h2>
                </div>
                <Link
                  href="/news"
                  className="text-blue-600 hover:text-blue-700 flex items-center font-semibold hover:underline transition-all duration-300"
                >
                  View All
                  <ExternalLink className="w-4 h-4 ml-1" />
                </Link>
              </div>

              <div className="space-y-8">
                {announcements.map((news, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-xl transition-all duration-500 border-0 shadow-lg hover:scale-[1.02] overflow-hidden"
                  >
                    <CardContent className="p-0">
                      <div className="flex">
                        <div className={`w-2 ${news.image} flex-shrink-0`}></div>
                        <div className="p-8 flex-1">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center space-x-3">
                              <div
                                className={`w-12 h-12 ${news.image} rounded-xl flex items-center justify-center shadow-lg`}
                              >
                                <Calendar className="w-6 h-6 text-white" />
                              </div>
                              <div>
                                <div className="flex items-center space-x-2 mb-1">
                                  <Badge variant="outline" className="text-xs">
                                    {news.date}
                                  </Badge>
                                  <Badge
                                    className={`text-xs ${news.priority === "high" ? "bg-red-100 text-red-700" : "bg-yellow-100 text-yellow-700"}`}
                                  >
                                    {news.category}
                                  </Badge>
                                </div>
                                <h3 className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-300 text-lg">
                                  {news.title}
                                </h3>
                              </div>
                            </div>
                            {news.priority === "high" && (
                              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                            )}
                          </div>
                          <p className="text-slate-600 mb-4 leading-relaxed">{news.excerpt}</p>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 transition-all duration-300 p-0"
                          >
                            Read Full Article
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Enhanced Sidebar */}
            <div className="space-y-8">
              {/* Enhanced Quick Stats */}
              <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center text-blue-800">
                    <TrendingUp className="w-5 h-5 mr-2" />
                    Live Statistics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-white rounded-xl shadow-sm">
                      <span className="text-sm text-slate-600">Active Cases</span>
                      <span className="font-bold text-blue-600 text-lg">1,247</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-xl shadow-sm">
                      <span className="text-sm text-slate-600">This Month</span>
                      <span className="font-bold text-green-600 text-lg">+156</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-xl shadow-sm">
                      <span className="text-sm text-slate-600">Success Rate</span>
                      <span className="font-bold text-purple-600 text-lg">98.2%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Enhanced Important Links */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Star className="w-5 h-5 mr-2 text-yellow-500" />
                    Important Links
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { icon: Phone, text: "Emergency Contacts", color: "text-red-600", bg: "bg-red-50" },
                      { icon: Download, text: "Download Forms", color: "text-blue-600", bg: "bg-blue-50" },
                      { icon: FileText, text: "FAQ", color: "text-green-600", bg: "bg-green-50" },
                      { icon: Building, text: "Partner Organizations", color: "text-purple-600", bg: "bg-purple-50" },
                    ].map((link, index) => (
                      <Link
                        key={index}
                        href="#"
                        className={`flex items-center text-sm ${link.color} hover:underline transition-all duration-300 p-3 rounded-xl ${link.bg} hover:scale-105`}
                      >
                        <link.icon className="w-4 h-4 mr-3" />
                        {link.text}
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Enhanced Contact Info */}
              <Card className="bg-gradient-to-br from-slate-50 to-blue-50 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">Contact Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-sm">
                    <div className="flex items-start p-3 bg-white rounded-xl shadow-sm">
                      <Phone className="w-4 h-4 mr-3 mt-0.5 text-blue-500" />
                      <div>
                        <div className="font-semibold">+255 123 456 789</div>
                        <div className="text-slate-600">Main Office</div>
                      </div>
                    </div>
                    <div className="flex items-start p-3 bg-red-50 rounded-xl border border-red-200">
                      <Phone className="w-4 h-4 mr-3 mt-0.5 text-red-500" />
                      <div>
                        <div className="font-semibold text-red-600">+255 911 HELP</div>
                        <div className="text-red-600">24/7 Emergency</div>
                      </div>
                    </div>
                    <div className="flex items-start p-3 bg-white rounded-xl shadow-sm">
                      <Mail className="w-4 h-4 mr-3 mt-0.5 text-green-500" />
                      <div>
                        <div className="font-semibold">info@mrc.go.tz</div>
                        <div className="text-slate-600">General Inquiries</div>
                      </div>
                    </div>
                    <div className="flex items-start p-3 bg-white rounded-xl shadow-sm">
                      <MapPin className="w-4 h-4 mr-3 mt-0.5 text-purple-500" />
                      <div>
                        <div className="font-semibold">123 Migration Street</div>
                        <div className="text-slate-600">Dar es Salaam, Tanzania</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl">
                  <Globe className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="font-bold text-xl">MRC PORTAL</div>
                  <div className="text-xs text-blue-200">Migrant Resource Centre</div>
                </div>
              </div>
              <p className="text-blue-100 text-sm mb-6 leading-relaxed">
                Supporting migrant workers with comprehensive services and resources for safe, legal, and dignified
                migration.
              </p>
              <div className="text-sm text-blue-200">
                <p>© 2024 Government of Tanzania</p>
                <p>Ministry of Labour and Employment</p>
              </div>
            </div>

            {[
              {
                title: "Services",
                links: [
                  { name: "Pre-Departure Services", href: "/services/pre-departure" },
                  { name: "Legal Aid", href: "/services/legal" },
                  { name: "Reintegration Support", href: "/services/reintegration" },
                  { name: "Psychosocial Support", href: "/services/psychosocial" },
                ],
              },
              {
                title: "Resources",
                links: [
                  { name: "Downloads", href: "/resources/downloads" },
                  { name: "FAQ", href: "/resources/faq" },
                  { name: "Guides & Manuals", href: "/resources/guides" },
                  { name: "Forms", href: "/resources/forms" },
                ],
              },
            ].map((section, index) => (
              <div key={index}>
                <h4 className="font-semibold mb-6 text-lg">{section.title}</h4>
                <ul className="space-y-3 text-sm text-blue-200">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="hover:text-white transition-colors duration-300 hover:underline"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h4 className="font-semibold mb-6 text-lg">Contact</h4>
              <ul className="space-y-4 text-sm text-blue-200">
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-3" />
                  +255 123 456 789
                </li>
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-3" />
                  info@mrc.go.tz
                </li>
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 mr-3" />
                  Dar es Salaam, Tanzania
                </li>
              </ul>
              <div className="mt-6 p-4 bg-red-500/20 rounded-2xl border border-red-400/30">
                <h5 className="font-semibold mb-2 text-red-300">Emergency Hotline</h5>
                <p className="text-red-200 font-bold text-lg">+255 911 HELP (4357)</p>
                <p className="text-xs text-red-300">Available 24/7</p>
              </div>
            </div>
          </div>

          <div className="border-t border-blue-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-blue-200">
              <div className="flex space-x-8 mb-4 md:mb-0">
                {["Privacy Policy", "Terms of Service", "Accessibility", "Sitemap"].map((item, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="hover:text-white transition-colors duration-300 hover:underline"
                  >
                    {item}
                  </Link>
                ))}
              </div>
              <div className="text-center md:text-right">
                <p>Last updated: January 2024</p>
                <p>Best viewed in Chrome, Firefox, Safari</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
