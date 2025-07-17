"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Search,
  Filter,
  ChevronRight,
  Phone,
  Mail,
  Globe,
  Shield,
  Heart,
  Scale,
  Briefcase,
  Clock,
  MapPin,
  Star,
  CheckCircle,
  ArrowRight,
  BookOpen,
  Headphones,
  Home,
  Zap,
  TrendingUp,
  Award,
  Target,
  PlayCircle,
} from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedPhase, setSelectedPhase] = useState("all")
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const serviceCategories = [
    { id: "all", name: "All Services", count: 12, color: "from-blue-500 to-blue-600" },
    { id: "pre-departure", name: "Pre-Departure", count: 4, color: "from-green-500 to-green-600" },
    { id: "legal", name: "Legal Aid", count: 3, color: "from-purple-500 to-purple-600" },
    { id: "psychosocial", name: "Psychosocial Support", count: 2, color: "from-red-500 to-red-600" },
    { id: "reintegration", name: "Reintegration", count: 3, color: "from-orange-500 to-orange-600" },
  ]

  const services = [
    {
      id: 1,
      title: "Pre-Departure Orientation Program",
      category: "pre-departure",
      phase: "pre-departure",
      description:
        "Comprehensive orientation covering migration procedures, rights, and destination country information with interactive modules and real-world scenarios",
      duration: "3 days",
      availability: "Available",
      rating: 4.8,
      participants: 1247,
      icon: BookOpen,
      features: [
        "Rights & Responsibilities",
        "Cultural Orientation",
        "Legal Documentation",
        "Safety Guidelines",
        "Language Basics",
        "Emergency Procedures",
      ],
      color: "from-blue-500 to-blue-600",
      price: "Free",
      nextSession: "Jan 25, 2024",
    },
    {
      id: 2,
      title: "Employment Contract Review",
      category: "legal",
      phase: "pre-departure",
      description:
        "Professional legal review of employment contracts with AI-powered analysis to ensure fair terms and conditions",
      duration: "1-2 days",
      availability: "Available",
      rating: 4.9,
      participants: 892,
      icon: Scale,
      features: [
        "Contract Analysis",
        "Terms Negotiation",
        "Legal Advice",
        "Documentation Support",
        "Risk Assessment",
        "Compliance Check",
      ],
      color: "from-green-500 to-green-600",
      price: "Free",
      nextSession: "Available Daily",
    },
    {
      id: 3,
      title: "Skills Training & Certification",
      category: "pre-departure",
      phase: "pre-departure",
      description:
        "Advanced vocational skills training with industry-recognized certifications and job placement assistance",
      duration: "2-4 weeks",
      availability: "Limited Slots",
      rating: 4.7,
      participants: 634,
      icon: Briefcase,
      features: [
        "Skill Assessment",
        "Training Modules",
        "Certification",
        "Job Placement Support",
        "Industry Partnerships",
        "Career Guidance",
      ],
      color: "from-purple-500 to-purple-600",
      price: "Subsidized",
      nextSession: "Feb 1, 2024",
    },
    {
      id: 4,
      title: "Psychosocial Counseling",
      category: "psychosocial",
      phase: "all",
      description: "Comprehensive mental health support with trauma-informed care and family counseling services",
      duration: "Ongoing",
      availability: "Available",
      rating: 4.6,
      participants: 456,
      icon: Heart,
      features: [
        "Individual Counseling",
        "Group Therapy",
        "Family Support",
        "Crisis Intervention",
        "Trauma Care",
        "Wellness Programs",
      ],
      color: "from-red-500 to-red-600",
      price: "Free",
      nextSession: "Available 24/7",
    },
    {
      id: 5,
      title: "Legal Aid & Representation",
      category: "legal",
      phase: "all",
      description: "Expert legal assistance with court representation and comprehensive rights protection services",
      duration: "As needed",
      availability: "Available",
      rating: 4.8,
      participants: 723,
      icon: Shield,
      features: [
        "Legal Consultation",
        "Court Representation",
        "Document Assistance",
        "Rights Protection",
        "Case Management",
        "Appeals Support",
      ],
      color: "from-indigo-500 to-indigo-600",
      price: "Free",
      nextSession: "Available Daily",
    },
    {
      id: 6,
      title: "Reintegration Support Program",
      category: "reintegration",
      phase: "returnee",
      description: "Holistic reintegration support with business development and community integration programs",
      duration: "3-6 months",
      availability: "Available",
      rating: 4.5,
      participants: 389,
      icon: Home,
      features: [
        "Community Integration",
        "Job Placement",
        "Business Support",
        "Social Services",
        "Skill Development",
        "Mentorship",
      ],
      color: "from-orange-500 to-orange-600",
      price: "Free",
      nextSession: "Rolling Admission",
    },
    {
      id: 7,
      title: "Emergency Assistance Hotline",
      category: "psychosocial",
      phase: "all",
      description: "24/7 emergency support with multilingual assistance and immediate crisis response capabilities",
      duration: "24/7",
      availability: "Always Available",
      rating: 4.9,
      participants: 2156,
      icon: Phone,
      features: [
        "Crisis Support",
        "Emergency Response",
        "Multilingual Support",
        "Immediate Assistance",
        "Follow-up Care",
        "Referral Services",
      ],
      color: "from-red-600 to-red-700",
      price: "Free",
      nextSession: "Available Now",
    },
    {
      id: 8,
      title: "Financial Literacy Training",
      category: "pre-departure",
      phase: "pre-departure",
      description: "Comprehensive financial education with digital banking and investment guidance for migrant workers",
      duration: "1 week",
      availability: "Available",
      rating: 4.4,
      participants: 567,
      icon: TrendingUp,
      features: [
        "Budgeting Skills",
        "Remittance Management",
        "Savings Plans",
        "Investment Basics",
        "Digital Banking",
        "Financial Planning",
      ],
      color: "from-teal-500 to-teal-600",
      price: "Free",
      nextSession: "Jan 30, 2024",
    },
  ]

  const filteredServices = services.filter((service) => {
    const matchesSearch =
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || service.category === selectedCategory
    const matchesPhase = selectedPhase === "all" || service.phase === selectedPhase || service.phase === "all"

    return matchesSearch && matchesCategory && matchesPhase
  })

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case "Available":
        return "bg-green-100 text-green-800 border-green-200"
      case "Limited Slots":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "Always Available":
        return "bg-blue-100 text-blue-800 border-blue-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

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
                { name: "Home", href: "/" },
                { name: "Services", href: "/services", active: true },
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

      {/* Breadcrumb */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-blue-100">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center text-sm text-slate-600">
            <Link href="/" className="hover:text-blue-600 transition-colors font-medium">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-slate-900 font-semibold">Services</span>
          </div>
        </div>
      </div>

      {/* Enhanced Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent"></div>

        <div className="container mx-auto px-4 relative">
          <div
            className={`max-w-5xl mx-auto text-center transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md rounded-full mb-8 border border-white/20">
              <Briefcase className="w-5 h-5 mr-2 text-blue-200" />
              <span className="font-semibold">Professional Migration Services</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              Comprehensive <span className="text-blue-200">Migration Services</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-10 text-blue-100 leading-relaxed max-w-4xl mx-auto">
              Access professional support services designed to ensure safe, legal, and dignified migration at every
              stage of your journey with cutting-edge technology and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 text-lg px-10 py-4"
              >
                Browse All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 bg-transparent backdrop-blur-md text-lg px-10 py-4"
              >
                <PlayCircle className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 text-lg px-10 py-4"
              >
                <Phone className="mr-2 w-5 h-5" />
                Emergency Support
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Service Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100/80 rounded-full text-blue-800 font-semibold mb-4">
              <Zap className="w-5 h-5 mr-2" />
              Explore by Category
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Our <span className="text-blue-600">Service Categories</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Discover a wide range of services tailored to support you at every stage of your migration journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceCategories.slice(1).map((category) => (
              <Card
                key={category.id}
                className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
                style={{ perspective: "800px" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10"></div>
                <CardContent className="p-8 relative z-20">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-xl transition-all duration-300 group-hover:scale-110`}
                    style={{
                      background: `linear-gradient(to bottom right, ${category.color.replace("from-", "#").replace(" to-", ", #")})`,
                    }}
                  >
                    {category.id === "pre-departure" && <Briefcase className="w-8 h-8" />}
                    {category.id === "legal" && <Scale className="w-8 h-8" />}
                    {category.id === "psychosocial" && <Heart className="w-8 h-8" />}
                    {category.id === "reintegration" && <Home className="w-8 h-8" />}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 text-center group-hover:text-blue-600 transition-colors duration-300">
                    {category.name}
                  </h3>
                  <p className="text-slate-500 text-sm text-center mb-4">{category.count} services available</p>
                  <Button
                    variant="secondary"
                    size="lg"
                    className="w-full bg-blue-50 text-blue-700 hover:bg-blue-100 shadow-lg group-hover:shadow-xl transition-all duration-300"
                  >
                    Explore
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Search and Filters */}
          <Card className="shadow-2xl rounded-2xl border-0 mb-10">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <Input
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 h-14 text-lg rounded-lg border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full h-14 rounded-lg">
                    <Filter className="w-4 h-4 mr-2 text-slate-400" />
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceCategories.map((category) => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.name} ({category.count})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={selectedPhase} onValueChange={setSelectedPhase}>
                  <SelectTrigger className="w-full h-14 rounded-lg">
                    <Target className="w-4 h-4 mr-2 text-slate-400" />
                    <SelectValue placeholder="Select Phase" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Phases</SelectItem>
                    <SelectItem value="pre-departure">Pre-Departure</SelectItem>
                    <SelectItem value="in-destination">In-Destination</SelectItem>
                    <SelectItem value="returnee">Returnee</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredServices.map((service) => (
              <Card
                key={service.id}
                className={`group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 ${
                  hoveredService === service.id ? "scale-105" : "scale-100"
                }`}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10"></div>
                <CardContent className="p-0 relative z-20">
                  <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-xl transition-all duration-300 group-hover:scale-110`}
                          style={{
                            background: `linear-gradient(to bottom right, ${service.color.replace("from-", "#").replace(" to-", ", #")})`,
                          }}
                        >
                          <service.icon className="w-7 h-7" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                            {service.title}
                          </h3>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge className={`${getAvailabilityColor(service.availability)} border`}>
                              {service.availability}
                            </Badge>
                            <div className="flex items-center text-sm text-slate-500">
                              <Clock className="w-3 h-3 mr-1" />
                              {service.duration}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-yellow-500 mb-1">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="ml-1 font-semibold">{service.rating}</span>
                        </div>
                        <p className="text-xs text-slate-500">{service.participants} participants</p>
                      </div>
                    </div>

                    <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-900 mb-3">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, index) => (
                          <div key={index} className="flex items-center text-sm text-slate-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h5 className="font-medium text-slate-700">Price: {service.price}</h5>
                        <p className="text-xs text-slate-500">Next Session: {service.nextSession}</p>
                      </div>
                      <div className="flex items-center text-blue-500 group-hover:text-blue-700 transition-colors duration-300">
                        <Award className="w-4 h-4 mr-1" />
                        <span className="text-sm font-medium">Top Rated</span>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 shadow-lg hover:shadow-xl transition-all duration-300">
                        Request Service
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        className="border-2 border-blue-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 bg-transparent"
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-slate-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">No services found</h3>
              <p className="text-slate-600 mb-6">Try adjusting your search criteria or browse all services</p>
              <Button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("all")
                  setSelectedPhase("all")
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Need Immediate Assistance?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our emergency support team is available 24/7 to help you with urgent situations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 shadow-xl hover:shadow-2xl transition-all">
              <Phone className="mr-2 w-5 h-5" />
              Emergency Hotline
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 transition-all bg-transparent"
            >
              <Headphones className="mr-2 w-5 h-5" />
              Live Chat Support
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-lg">MRC PORTAL</div>
                  <div className="text-xs text-gray-400">Migrant Resource Centre</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Supporting migrant workers with comprehensive services and resources for safe, legal, and dignified
                migration.
              </p>
              <div className="text-sm text-gray-400">
                <p>© 2024 Government of Tanzania</p>
                <p>Ministry of Labour and Employment</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/services/pre-departure" className="hover:text-white transition-colors">
                    Pre-Departure Services
                  </Link>
                </li>
                <li>
                  <Link href="/services/legal" className="hover:text-white transition-colors">
                    Legal Aid
                  </Link>
                </li>
                <li>
                  <Link href="/services/reintegration" className="hover:text-white transition-colors">
                    Reintegration Support
                  </Link>
                </li>
                <li>
                  <Link href="/services/psychosocial" className="hover:text-white transition-colors">
                    Psychosocial Support
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/resources/downloads" className="hover:text-white transition-colors">
                    Downloads
                  </Link>
                </li>
                <li>
                  <Link href="/resources/faq" className="hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/resources/guides" className="hover:text-white transition-colors">
                    Guides & Manuals
                  </Link>
                </li>
                <li>
                  <Link href="/resources/forms" className="hover:text-white transition-colors">
                    Forms
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  +255 123 456 789
                </li>
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  info@mrc.go.tz
                </li>
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Dar es Salaam, Tanzania
                </li>
              </ul>
              <div className="mt-4">
                <h5 className="font-medium mb-2 text-red-400">Emergency Hotline</h5>
                <p className="text-red-400 font-semibold">+255 911 HELP (4357)</p>
                <p className="text-xs text-gray-400">Available 24/7</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
              <div className="flex space-x-6 mb-4 md:mb-0">
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
                <Link href="/accessibility" className="hover:text-white transition-colors">
                  Accessibility
                </Link>
                <Link href="/sitemap" className="hover:text-white transition-colors">
                  Sitemap
                </Link>
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
