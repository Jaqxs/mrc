"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  Star,
  TrendingUp,
  Users,
  Globe,
  Filter,
  Heart,
  Menu,
  X,
} from "lucide-react"
import Link from "next/link"

const jobListings = [
  {
    id: 1,
    title: "Registered Nurse",
    company: "Royal London Hospital",
    location: "London, UK",
    type: "Full-time",
    posted: "2 days ago",
    salary: "£35,000 - £45,000",
    description:
      "Join our world-class healthcare team providing exceptional patient care in one of London's premier hospitals.",
    featured: true,
    urgent: false,
    category: "Healthcare",
    experience: "2-5 years",
    visa: "Sponsored",
  },
  {
    id: 2,
    title: "Senior Software Engineer",
    company: "Tech Innovations Corp",
    location: "San Francisco, USA",
    type: "Full-time",
    posted: "1 day ago",
    salary: "$120,000 - $160,000",
    description: "Build cutting-edge applications using React, Node.js, and cloud technologies in Silicon Valley.",
    featured: true,
    urgent: true,
    category: "Technology",
    experience: "5+ years",
    visa: "H1B Sponsored",
  },
  {
    id: 3,
    title: "Financial Analyst",
    company: "Global Finance Solutions",
    location: "Toronto, Canada",
    type: "Full-time",
    posted: "3 days ago",
    salary: "CAD $65,000 - $80,000",
    description: "Analyze financial data and provide strategic insights for international investment decisions.",
    featured: false,
    urgent: false,
    category: "Finance",
    experience: "3-5 years",
    visa: "Work Permit Available",
  },
  {
    id: 4,
    title: "Construction Manager",
    company: "BuildTech Australia",
    location: "Sydney, Australia",
    type: "Full-time",
    posted: "5 days ago",
    salary: "AUD $90,000 - $120,000",
    description: "Lead major infrastructure projects in Australia's growing construction industry.",
    featured: false,
    urgent: true,
    category: "Construction",
    experience: "5+ years",
    visa: "Skilled Migration",
  },
  {
    id: 5,
    title: "Hotel Manager",
    company: "Luxury Resorts International",
    location: "Dubai, UAE",
    type: "Full-time",
    posted: "1 week ago",
    salary: "AED 15,000 - 20,000",
    description: "Manage operations at a 5-star resort in the heart of Dubai's hospitality district.",
    featured: false,
    urgent: false,
    category: "Hospitality",
    experience: "3-5 years",
    visa: "Work Visa Provided",
  },
  {
    id: 6,
    title: "Mechanical Engineer",
    company: "Engineering Excellence Ltd",
    location: "Berlin, Germany",
    type: "Full-time",
    posted: "4 days ago",
    salary: "€55,000 - €70,000",
    description: "Design and develop innovative mechanical systems for automotive industry leaders.",
    featured: false,
    urgent: false,
    category: "Engineering",
    experience: "2-5 years",
    visa: "EU Blue Card",
  },
]

const jobStats = [
  { label: "Active Jobs", value: "2,847", icon: Briefcase },
  { label: "Countries", value: "45+", icon: Globe },
  { label: "Success Rate", value: "94%", icon: TrendingUp },
  { label: "Happy Clients", value: "15K+", icon: Users },
]

export default function JobsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterLocation, setFilterLocation] = useState("All Locations")
  const [filterType, setFilterType] = useState("All Types")
  const [filterCategory, setFilterCategory] = useState("All Categories")
  const [savedJobs, setSavedJobs] = useState<number[]>([])
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleSaveJob = (jobId: number) => {
    setSavedJobs((prev) => (prev.includes(jobId) ? prev.filter((id) => id !== jobId) : [...prev, jobId]))
  }

  const filteredJobs = jobListings.filter((job) => {
    const searchMatch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase())
    const locationMatch =
      filterLocation === "All Locations" || job.location.toLowerCase().includes(filterLocation.toLowerCase())
    const typeMatch = filterType === "All Types" || job.type === filterType
    const categoryMatch = filterCategory === "All Categories" || job.category === filterCategory
    return searchMatch && locationMatch && typeMatch && categoryMatch
  })

  const featuredJobs = filteredJobs.filter((job) => job.featured)
  const regularJobs = filteredJobs.filter((job) => !job.featured)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                MRC Careers
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Home
              </Link>
              <Link href="/jobs" className="text-blue-600 font-semibold">
                Jobs
              </Link>
              <Link href="/services" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Services
              </Link>
              <Link href="/resources" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Resources
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                About
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Contact
              </Link>
            </nav>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" asChild className="text-gray-600 hover:text-blue-600">
                <Link href="/login">Sign In</Link>
              </Button>
              <Button
                asChild
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <Link href="/register">Get Started</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200 bg-white/95 backdrop-blur-md">
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className="text-gray-600 hover:text-blue-600 transition-colors font-medium px-2 py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/jobs"
                  className="text-blue-600 font-semibold px-2 py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Jobs
                </Link>
                <Link
                  href="/services"
                  className="text-gray-600 hover:text-blue-600 transition-colors font-medium px-2 py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/resources"
                  className="text-gray-600 hover:text-blue-600 transition-colors font-medium px-2 py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Resources
                </Link>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-blue-600 transition-colors font-medium px-2 py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-blue-600 transition-colors font-medium px-2 py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                  <Button variant="ghost" asChild className="justify-start text-gray-600 hover:text-blue-600">
                    <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                      Sign In
                    </Link>
                  </Button>
                  <Button
                    asChild
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    <Link href="/register" onClick={() => setIsMobileMenuOpen(false)}>
                      Get Started
                    </Link>
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Find Your Dream Job Overseas
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Discover thousands of international opportunities with visa sponsorship and competitive packages
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {jobStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-3">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Search and Filters */}
        <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm mb-12">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <Filter className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl font-semibold text-gray-800">Find Your Perfect Match</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search jobs, companies, locations..."
                  className="pl-12 h-12 border-2 border-gray-200 focus:border-blue-500 rounded-lg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <Select value={filterLocation} onValueChange={setFilterLocation}>
                <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-blue-500 rounded-lg">
                  <SelectValue placeholder="Select Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All Locations">All Locations</SelectItem>
                  <SelectItem value="London">London, UK</SelectItem>
                  <SelectItem value="San Francisco">San Francisco, USA</SelectItem>
                  <SelectItem value="Toronto">Toronto, Canada</SelectItem>
                  <SelectItem value="Sydney">Sydney, Australia</SelectItem>
                  <SelectItem value="Dubai">Dubai, UAE</SelectItem>
                  <SelectItem value="Berlin">Berlin, Germany</SelectItem>
                </SelectContent>
              </Select>

              <Select value={filterCategory} onValueChange={setFilterCategory}>
                <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-blue-500 rounded-lg">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All Categories">All Categories</SelectItem>
                  <SelectItem value="Healthcare">Healthcare</SelectItem>
                  <SelectItem value="Technology">Technology</SelectItem>
                  <SelectItem value="Finance">Finance</SelectItem>
                  <SelectItem value="Construction">Construction</SelectItem>
                  <SelectItem value="Hospitality">Hospitality</SelectItem>
                  <SelectItem value="Engineering">Engineering</SelectItem>
                </SelectContent>
              </Select>

              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-blue-500 rounded-lg">
                  <SelectValue placeholder="Job Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All Types">All Types</SelectItem>
                  <SelectItem value="Full-time">Full-time</SelectItem>
                  <SelectItem value="Part-time">Part-time</SelectItem>
                  <SelectItem value="Contract">Contract</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Showing <span className="font-semibold text-blue-600">{filteredJobs.length}</span> jobs matching your
                criteria
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Featured Jobs */}
        {featuredJobs.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Star className="w-6 h-6 text-yellow-500" />
              <h2 className="text-2xl font-bold text-gray-800">Featured Opportunities</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {featuredJobs.map((job) => (
                <Card
                  key={job.id}
                  className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-blue-50/50 overflow-hidden"
                >
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="secondary" className="bg-white/20 text-white border-0">
                              FEATURED
                            </Badge>
                            {job.urgent && (
                              <Badge variant="destructive" className="bg-red-500/80 text-white border-0">
                                URGENT
                              </Badge>
                            )}
                          </div>
                          <h3 className="text-xl font-bold mb-1">{job.title}</h3>
                          <p className="text-blue-100">{job.company}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleSaveJob(job.id)}
                          className="text-white hover:bg-white/20"
                        >
                          <Heart
                            className={`w-5 h-5 ${savedJobs.includes(job.id) ? "fill-current text-red-300" : ""}`}
                          />
                        </Button>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-blue-100 mb-4">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{job.posted}</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-2xl font-bold text-green-600">{job.salary}</div>
                        <Badge variant="outline" className="border-blue-200 text-blue-700">
                          {job.visa}
                        </Badge>
                      </div>

                      <p className="text-gray-600 mb-4 leading-relaxed">{job.description}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                          <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                            {job.category}
                          </Badge>
                          <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                            {job.experience}
                          </Badge>
                        </div>

                        <Button
                          asChild
                          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                        >
                          <Link href={`/jobs/${job.id}`}>
                            Apply Now
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Regular Jobs */}
        {regularJobs.length > 0 && (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-800">All Opportunities</h2>
            </div>

            <div className="space-y-4">
              {regularJobs.map((job) => (
                <Card
                  key={job.id}
                  className="group hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-300 bg-white"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                            {job.title}
                          </h3>
                          {job.urgent && (
                            <Badge variant="destructive" className="bg-red-100 text-red-700 border-red-200">
                              URGENT
                            </Badge>
                          )}
                        </div>

                        <p className="text-gray-600 font-medium mb-2">{job.company}</p>

                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-3">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Briefcase className="w-4 h-4" />
                            <span>{job.type}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>Posted {job.posted}</span>
                          </div>
                        </div>

                        <p className="text-gray-600 mb-4 leading-relaxed">{job.description}</p>

                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200">
                            {job.category}
                          </Badge>
                          <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">
                            {job.experience}
                          </Badge>
                          <Badge variant="secondary" className="bg-purple-50 text-purple-700 border-purple-200">
                            {job.visa}
                          </Badge>
                        </div>
                      </div>

                      <div className="flex flex-col items-end gap-3 ml-6">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleSaveJob(job.id)}
                          className="text-gray-400 hover:text-red-500"
                        >
                          <Heart
                            className={`w-5 h-5 ${savedJobs.includes(job.id) ? "fill-current text-red-500" : ""}`}
                          />
                        </Button>

                        <div className="text-right mb-3">
                          <div className="text-lg font-bold text-green-600">{job.salary}</div>
                          <div className="text-sm text-gray-500">per year</div>
                        </div>

                        <Button
                          asChild
                          variant="outline"
                          className="border-blue-200 text-blue-600 hover:bg-blue-50 bg-transparent"
                        >
                          <Link href={`/jobs/${job.id}`}>
                            View Details
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* No Results */}
        {filteredJobs.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <div className="max-w-md mx-auto">
                <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">No jobs found</h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your search criteria or browse all available positions.
                </p>
                <Button
                  onClick={() => {
                    setSearchQuery("")
                    setFilterLocation("All Locations")
                    setFilterType("All Types")
                    setFilterCategory("All Categories")
                  }}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Clear Filters
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
