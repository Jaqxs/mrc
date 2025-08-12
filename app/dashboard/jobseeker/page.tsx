"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  User,
  Briefcase,
  FileText,
  Bell,
  Settings,
  LogOut,
  Search,
  Calendar,
  MapPin,
  DollarSign,
  Clock,
  Eye,
  Download,
  Edit,
  Plus,
  TrendingUp,
} from "lucide-react"

export default function JobSeekerDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  const applications = [
    {
      id: 1,
      jobTitle: "Registered Nurse",
      company: "Toronto General Hospital",
      location: "Toronto, Canada",
      appliedDate: "2024-01-15",
      status: "Under Review",
      statusColor: "bg-yellow-100 text-yellow-800",
      salary: "$65,000 - $75,000",
    },
    {
      id: 2,
      jobTitle: "Software Developer",
      company: "Tech Solutions Inc",
      location: "Dubai, UAE",
      appliedDate: "2024-01-12",
      status: "Interview Scheduled",
      statusColor: "bg-blue-100 text-blue-800",
      salary: "$80,000 - $95,000",
    },
    {
      id: 3,
      jobTitle: "Construction Worker",
      company: "BuildCorp Ltd",
      location: "Sydney, Australia",
      appliedDate: "2024-01-10",
      status: "Accepted",
      statusColor: "bg-green-100 text-green-800",
      salary: "$55,000 - $65,000",
    },
  ]

  const recommendedJobs = [
    {
      id: 1,
      title: "Senior Nurse Practitioner",
      company: "Vancouver Medical Center",
      location: "Vancouver, Canada",
      salary: "$70,000 - $85,000",
      type: "Full-time",
      posted: "2 days ago",
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Innovation Hub",
      location: "London, UK",
      salary: "$90,000 - $110,000",
      type: "Full-time",
      posted: "1 week ago",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-xl border-b border-blue-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  MRC CAREERS
                </h1>
                <p className="text-xs text-slate-500">Job Seeker Dashboard</p>
              </div>
            </Link>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs"></span>
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link href="/login">
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="shadow-xl rounded-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">John Doe</h3>
                    <p className="text-blue-100">Software Developer</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-800">85%</div>
                    <div className="text-sm text-slate-600 mb-2">Profile Complete</div>
                    <Progress value={85} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <Button
                      variant={activeTab === "overview" ? "default" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => setActiveTab("overview")}
                    >
                      <TrendingUp className="w-4 h-4 mr-2" />
                      Overview
                    </Button>
                    <Button
                      variant={activeTab === "applications" ? "default" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => setActiveTab("applications")}
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      My Applications
                    </Button>
                    <Button
                      variant={activeTab === "jobs" ? "default" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => setActiveTab("jobs")}
                    >
                      <Search className="w-4 h-4 mr-2" />
                      Find Jobs
                    </Button>
                    <Button
                      variant={activeTab === "profile" ? "default" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => setActiveTab("profile")}
                    >
                      <User className="w-4 h-4 mr-2" />
                      My Profile
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Overview Tab */}
            {activeTab === "overview" && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-slate-800 mb-2">Welcome back, John!</h2>
                  <p className="text-slate-600">Here's what's happening with your job search</p>
                </div>

                {/* Stats Cards */}
                <div className="grid md:grid-cols-4 gap-6">
                  <Card className="shadow-lg rounded-2xl">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-slate-600">Applications</p>
                          <p className="text-2xl font-bold text-slate-800">12</p>
                        </div>
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                          <FileText className="w-6 h-6 text-blue-600" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-lg rounded-2xl">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-slate-600">Interviews</p>
                          <p className="text-2xl font-bold text-slate-800">3</p>
                        </div>
                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                          <Calendar className="w-6 h-6 text-green-600" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-lg rounded-2xl">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-slate-600">Profile Views</p>
                          <p className="text-2xl font-bold text-slate-800">47</p>
                        </div>
                        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                          <Eye className="w-6 h-6 text-purple-600" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-lg rounded-2xl">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-slate-600">Success Rate</p>
                          <p className="text-2xl font-bold text-slate-800">25%</p>
                        </div>
                        <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                          <TrendingUp className="w-6 h-6 text-orange-600" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Applications */}
                <Card className="shadow-xl rounded-2xl">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Recent Applications</span>
                      <Button variant="outline" size="sm" onClick={() => setActiveTab("applications")}>
                        View All
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {applications.slice(0, 3).map((app) => (
                        <div key={app.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                              <Briefcase className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-slate-800">{app.jobTitle}</h4>
                              <p className="text-sm text-slate-600">
                                {app.company} • {app.location}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge className={app.statusColor}>{app.status}</Badge>
                            <p className="text-xs text-slate-500 mt-1">{app.appliedDate}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Recommended Jobs */}
                <Card className="shadow-xl rounded-2xl">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Recommended for You</span>
                      <Button variant="outline" size="sm" onClick={() => setActiveTab("jobs")}>
                        Browse All Jobs
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recommendedJobs.map((job) => (
                        <div
                          key={job.id}
                          className="p-4 border border-slate-200 rounded-xl hover:shadow-lg transition-shadow"
                        >
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="font-semibold text-slate-800 mb-1">{job.title}</h4>
                              <p className="text-slate-600 mb-2">{job.company}</p>
                              <div className="flex items-center space-x-4 text-sm text-slate-500">
                                <span className="flex items-center">
                                  <MapPin className="w-4 h-4 mr-1" />
                                  {job.location}
                                </span>
                                <span className="flex items-center">
                                  <DollarSign className="w-4 h-4 mr-1" />
                                  {job.salary}
                                </span>
                                <span className="flex items-center">
                                  <Clock className="w-4 h-4 mr-1" />
                                  {job.posted}
                                </span>
                              </div>
                            </div>
                            <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600">
                              Apply Now
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Applications Tab */}
            {activeTab === "applications" && (
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-3xl font-bold text-slate-800">My Applications</h2>
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600" asChild>
                    <Link href="/jobs">
                      <Plus className="w-4 h-4 mr-2" />
                      Apply for More Jobs
                    </Link>
                  </Button>
                </div>

                <div className="space-y-6">
                  {applications.map((app) => (
                    <Card key={app.id} className="shadow-lg rounded-2xl">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start space-x-4">
                            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                              <Briefcase className="w-8 h-8 text-blue-600" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-slate-800 mb-1">{app.jobTitle}</h3>
                              <p className="text-slate-600 mb-2">{app.company}</p>
                              <div className="flex items-center space-x-4 text-sm text-slate-500 mb-3">
                                <span className="flex items-center">
                                  <MapPin className="w-4 h-4 mr-1" />
                                  {app.location}
                                </span>
                                <span className="flex items-center">
                                  <DollarSign className="w-4 h-4 mr-1" />
                                  {app.salary}
                                </span>
                                <span className="flex items-center">
                                  <Calendar className="w-4 h-4 mr-1" />
                                  Applied {app.appliedDate}
                                </span>
                              </div>
                              <Badge className={app.statusColor}>{app.status}</Badge>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <Eye className="w-4 h-4 mr-2" />
                              View
                            </Button>
                            <Button variant="outline" size="sm">
                              <Download className="w-4 h-4 mr-2" />
                              Download
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Find Jobs Tab */}
            {activeTab === "jobs" && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-slate-800 mb-2">Find Your Next Opportunity</h2>
                  <p className="text-slate-600">Discover thousands of international job opportunities</p>
                </div>

                <Card className="shadow-xl rounded-2xl">
                  <CardContent className="p-8">
                    <div className="text-center">
                      <Search className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-slate-800 mb-2">Browse All Jobs</h3>
                      <p className="text-slate-600 mb-6">
                        Access our complete job database with advanced search and filtering
                      </p>
                      <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-lg px-8 py-3" asChild>
                        <Link href="/jobs">Browse Jobs</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Profile Tab */}
            {activeTab === "profile" && (
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-3xl font-bold text-slate-800">My Profile</h2>
                  <Button variant="outline">
                    <Edit className="w-4 h-4 mr-2" />
                    Edit Profile
                  </Button>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="shadow-lg rounded-2xl">
                    <CardHeader>
                      <CardTitle>Personal Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-slate-600">Full Name</label>
                        <p className="text-slate-800">John Doe</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-slate-600">Email</label>
                        <p className="text-slate-800">john.doe@email.com</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-slate-600">Phone</label>
                        <p className="text-slate-800">+255 123 456 789</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-slate-600">Location</label>
                        <p className="text-slate-800">Dar es Salaam, Tanzania</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-lg rounded-2xl">
                    <CardHeader>
                      <CardTitle>Professional Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-slate-600">Current Role</label>
                        <p className="text-slate-800">Software Developer</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-slate-600">Experience</label>
                        <p className="text-slate-800">5+ years</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-slate-600">Education</label>
                        <p className="text-slate-800">Bachelor's in Computer Science</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-slate-600">Expected Salary</label>
                        <p className="text-slate-800">$80,000 - $100,000</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
