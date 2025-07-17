"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Bell,
  FileText,
  MessageSquare,
  User,
  Calendar,
  Download,
  Upload,
  CheckCircle,
  Clock,
  AlertCircle,
  Phone,
  Globe,
  Settings,
  LogOut,
  Plus,
  Eye,
  Search,
  ChevronRight,
  Mail,
  MapPin,
  Shield,
  Home,
  Briefcase,
  Activity,
} from "lucide-react"
import Link from "next/link"

export default function MigrantDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  const services = [
    {
      id: 1,
      title: "Pre-Departure Orientation",
      status: "completed",
      date: "2024-01-15",
      description: "Completed comprehensive orientation on migration procedures and rights",
      category: "Pre-Departure",
      priority: "high",
    },
    {
      id: 2,
      title: "Employment Contract Review",
      status: "in-progress",
      date: "2024-01-20",
      description: "Legal review of employment contract terms and conditions",
      category: "Legal Aid",
      priority: "high",
    },
    {
      id: 3,
      title: "Psychosocial Counseling Session",
      status: "pending",
      date: "2024-01-25",
      description: "Scheduled counseling session for pre-departure mental health support",
      category: "Psychosocial",
      priority: "medium",
    },
    {
      id: 4,
      title: "Skills Training Program",
      status: "pending",
      date: "2024-01-28",
      description: "Vocational skills enhancement training program",
      category: "Pre-Departure",
      priority: "medium",
    },
  ]

  const documents = [
    { name: "Employment Contract", type: "PDF", uploaded: "2024-01-15", status: "verified", size: "2.3 MB" },
    { name: "Passport Copy", type: "PDF", uploaded: "2024-01-10", status: "verified", size: "1.1 MB" },
    { name: "Medical Certificate", type: "PDF", uploaded: "2024-01-12", status: "pending", size: "0.8 MB" },
    { name: "CV/Resume", type: "PDF", uploaded: "2024-01-08", status: "verified", size: "1.5 MB" },
    { name: "Educational Certificates", type: "PDF", uploaded: "2024-01-05", status: "verified", size: "3.2 MB" },
  ]

  const messages = [
    {
      id: 1,
      from: "Sarah Johnson",
      role: "Case Worker",
      subject: "Contract Review Update",
      preview: "Your employment contract has been reviewed and we have some recommendations...",
      time: "2 hours ago",
      unread: true,
      priority: "high",
    },
    {
      id: 2,
      from: "MRC Admin",
      role: "Administrator",
      subject: "Upcoming Appointment Reminder",
      preview: "Don't forget your counseling session scheduled for tomorrow at 2:00 PM...",
      time: "1 day ago",
      unread: false,
      priority: "medium",
    },
    {
      id: 3,
      from: "Dr. Michael Chen",
      role: "Legal Advisor",
      subject: "Document Verification Complete",
      preview: "All your submitted documents have been verified successfully...",
      time: "2 days ago",
      unread: false,
      priority: "low",
    },
  ]

  const upcomingAppointments = [
    {
      id: 1,
      title: "Psychosocial Counseling",
      date: "2024-01-23",
      time: "2:00 PM",
      location: "MRC Main Office",
      staff: "Dr. Emma Rodriguez",
      type: "In-Person",
    },
    {
      id: 2,
      title: "Skills Assessment",
      date: "2024-01-25",
      time: "10:00 AM",
      location: "Training Center",
      staff: "John Mwangi",
      type: "In-Person",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-4 h-4 text-green-600" />
      case "in-progress":
        return <Clock className="w-4 h-4 text-yellow-600" />
      case "pending":
        return <AlertCircle className="w-4 h-4 text-gray-400" />
      default:
        return <Clock className="w-4 h-4 text-gray-400" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "in-progress":
        return "bg-yellow-100 text-yellow-800"
      case "pending":
        return "bg-gray-100 text-gray-800"
      case "verified":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800"
      case "low":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Header Bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <span className="flex items-center">
                <Phone className="w-3 h-3 mr-1" />
                Emergency: +255 123 456 789
              </span>
              <span className="flex items-center">
                <Mail className="w-3 h-3 mr-1" />
                info@mrc.go.tz
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <span>Welcome, John Doe</span>
              <Badge className="bg-blue-700 text-white hover:bg-blue-700">Pre-Departure Phase</Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">MRC PORTAL</h1>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Migrant Dashboard</p>
              </div>
            </Link>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="w-4 h-4" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                  3
                </span>
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/login">
                  <LogOut className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link href="/dashboard" className="hover:text-blue-600">
              Dashboard
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-900">Overview</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-1">
            <Card className="shadow-sm">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">John Doe</h3>
                    <p className="text-sm text-gray-500">ID: MRC-2024-001</p>
                    <Badge className="mt-1 bg-blue-100 text-blue-800 hover:bg-blue-100">Pre-Departure</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <nav className="space-y-2">
                  <Button
                    variant={activeTab === "overview" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("overview")}
                  >
                    <Home className="w-4 h-4 mr-2" />
                    Overview
                  </Button>
                  <Button
                    variant={activeTab === "services" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("services")}
                  >
                    <Briefcase className="w-4 h-4 mr-2" />
                    My Services
                  </Button>
                  <Button
                    variant={activeTab === "documents" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("documents")}
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Documents
                  </Button>
                  <Button
                    variant={activeTab === "messages" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("messages")}
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Messages
                    {messages.filter((m) => m.unread).length > 0 && (
                      <Badge className="ml-auto bg-red-500 text-white hover:bg-red-500">
                        {messages.filter((m) => m.unread).length}
                      </Badge>
                    )}
                  </Button>
                  <Button
                    variant={activeTab === "appointments" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("appointments")}
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Appointments
                  </Button>
                  <Button
                    variant={activeTab === "profile" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("profile")}
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    Profile Settings
                  </Button>
                </nav>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="mt-6 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button className="w-full justify-start bg-transparent" variant="outline">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Document
                  </Button>
                  <Button className="w-full justify-start bg-transparent" variant="outline">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Appointment
                  </Button>
                  <Button className="w-full justify-start bg-transparent" variant="outline">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Contact Case Worker
                  </Button>
                  <Button className="w-full justify-start bg-red-600 hover:bg-red-700 text-white">
                    <Phone className="w-4 h-4 mr-2" />
                    Emergency Help
                  </Button>
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            {activeTab === "overview" && (
              <div className="space-y-6">
                {/* Welcome Section */}
                <Card className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h1 className="text-2xl font-bold mb-2">Welcome back, John!</h1>
                        <p className="text-blue-100 mb-4">
                          You're in the Pre-Departure phase. Here's your progress and next steps.
                        </p>
                        <Button className="bg-white text-blue-600 hover:bg-gray-100">
                          View Journey Guide
                          <ChevronRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold">65%</div>
                        <div className="text-blue-100">Journey Complete</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Stats */}
                <div className="grid md:grid-cols-4 gap-6">
                  <Card className="shadow-sm">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600">Active Services</p>
                          <p className="text-2xl font-bold text-gray-900">4</p>
                        </div>
                        <Briefcase className="w-8 h-8 text-blue-600" />
                      </div>
                      <div className="mt-2">
                        <span className="text-sm text-green-600">2 completed this month</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-sm">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600">Documents</p>
                          <p className="text-2xl font-bold text-gray-900">5</p>
                        </div>
                        <FileText className="w-8 h-8 text-green-600" />
                      </div>
                      <div className="mt-2">
                        <span className="text-sm text-green-600">4 verified</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-sm">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600">Messages</p>
                          <p className="text-2xl font-bold text-gray-900">3</p>
                        </div>
                        <MessageSquare className="w-8 h-8 text-purple-600" />
                      </div>
                      <div className="mt-2">
                        <span className="text-sm text-red-600">1 unread</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-sm">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600">Next Appointment</p>
                          <p className="text-lg font-bold text-gray-900">Jan 23</p>
                        </div>
                        <Calendar className="w-8 h-8 text-orange-600" />
                      </div>
                      <div className="mt-2">
                        <span className="text-sm text-gray-600">2:00 PM</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Journey Progress */}
                <Card className="shadow-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Activity className="w-5 h-5 mr-2" />
                      Migration Journey Progress
                    </CardTitle>
                    <CardDescription>Track your progress through the migration process</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Overall Progress</span>
                          <span>65%</span>
                        </div>
                        <Progress value={65} className="h-3" />
                      </div>

                      <div className="grid md:grid-cols-4 gap-4">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <CheckCircle className="w-8 h-8 text-green-600" />
                          </div>
                          <p className="font-medium text-gray-900">Registration</p>
                          <p className="text-sm text-green-600">Completed</p>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <Clock className="w-8 h-8 text-yellow-600" />
                          </div>
                          <p className="font-medium text-gray-900">Pre-Departure</p>
                          <p className="text-sm text-yellow-600">In Progress</p>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <AlertCircle className="w-8 h-8 text-gray-400" />
                          </div>
                          <p className="font-medium text-gray-900">Departure</p>
                          <p className="text-sm text-gray-500">Pending</p>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <AlertCircle className="w-8 h-8 text-gray-400" />
                          </div>
                          <p className="font-medium text-gray-900">Arrival</p>
                          <p className="text-sm text-gray-500">Pending</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Activity & Upcoming */}
                <div className="grid lg:grid-cols-2 gap-6">
                  <Card className="shadow-sm">
                    <CardHeader>
                      <CardTitle>Recent Services</CardTitle>
                      <CardDescription>Your latest service activities</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {services.slice(0, 3).map((service) => (
                          <div key={service.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                            {getStatusIcon(service.status)}
                            <div className="flex-1">
                              <p className="font-medium text-gray-900">{service.title}</p>
                              <p className="text-sm text-gray-500">{service.date}</p>
                            </div>
                            <Badge className={getStatusColor(service.status)}>{service.status}</Badge>
                          </div>
                        ))}
                      </div>
                      <Button variant="outline" className="w-full mt-4 bg-transparent">
                        View All Services
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="shadow-sm">
                    <CardHeader>
                      <CardTitle>Upcoming Appointments</CardTitle>
                      <CardDescription>Your scheduled meetings and sessions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {upcomingAppointments.map((appointment) => (
                          <div key={appointment.id} className="p-3 border rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-medium text-gray-900">{appointment.title}</h4>
                              <Badge variant="outline">{appointment.type}</Badge>
                            </div>
                            <div className="text-sm text-gray-600 space-y-1">
                              <p className="flex items-center">
                                <Calendar className="w-3 h-3 mr-1" />
                                {appointment.date} at {appointment.time}
                              </p>
                              <p className="flex items-center">
                                <MapPin className="w-3 h-3 mr-1" />
                                {appointment.location}
                              </p>
                              <p className="flex items-center">
                                <User className="w-3 h-3 mr-1" />
                                {appointment.staff}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <Button variant="outline" className="w-full mt-4 bg-transparent">
                        View All Appointments
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {activeTab === "services" && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">My Services</h1>
                    <p className="text-gray-600">Track and manage your service requests</p>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Plus className="w-4 h-4 mr-2" />
                    Request New Service
                  </Button>
                </div>

                {/* Service Filters */}
                <Card className="shadow-sm">
                  <CardContent className="p-4">
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1">
                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                          <Input placeholder="Search services..." className="pl-10" />
                        </div>
                      </div>
                      <Select>
                        <SelectTrigger className="w-48">
                          <SelectValue placeholder="Filter by Status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Status</SelectItem>
                          <SelectItem value="completed">Completed</SelectItem>
                          <SelectItem value="in-progress">In Progress</SelectItem>
                          <SelectItem value="pending">Pending</SelectItem>
                        </SelectContent>
                      </Select>
                      <Select>
                        <SelectTrigger className="w-48">
                          <SelectValue placeholder="Filter by Category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Categories</SelectItem>
                          <SelectItem value="pre-departure">Pre-Departure</SelectItem>
                          <SelectItem value="legal">Legal Aid</SelectItem>
                          <SelectItem value="psychosocial">Psychosocial</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>

                {/* Services List */}
                <div className="space-y-4">
                  {services.map((service) => (
                    <Card key={service.id} className="shadow-sm">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start space-x-4">
                            {getStatusIcon(service.status)}
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-2">
                                <h3 className="font-semibold text-gray-900">{service.title}</h3>
                                <Badge variant="outline">{service.category}</Badge>
                                <Badge className={getPriorityColor(service.priority)}>{service.priority}</Badge>
                              </div>
                              <p className="text-gray-600 mb-2">{service.description}</p>
                              <div className="flex items-center space-x-4 text-sm text-gray-500">
                                <span className="flex items-center">
                                  <Calendar className="w-3 h-3 mr-1" />
                                  {service.date}
                                </span>
                                <span className="flex items-center">
                                  <User className="w-3 h-3 mr-1" />
                                  Case Worker Assigned
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge className={getStatusColor(service.status)}>{service.status}</Badge>
                            <Button variant="outline" size="sm">
                              <Eye className="w-4 h-4 mr-2" />
                              View Details
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "documents" && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">My Documents</h1>
                    <p className="text-gray-600">Manage your uploaded documents and certificates</p>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Document
                  </Button>
                </div>

                {/* Document Stats */}
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="shadow-sm">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900">4</div>
                      <div className="text-sm text-gray-600">Verified Documents</div>
                    </CardContent>
                  </Card>
                  <Card className="shadow-sm">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Clock className="w-6 h-6 text-yellow-600" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900">1</div>
                      <div className="text-sm text-gray-600">Pending Review</div>
                    </CardContent>
                  </Card>
                  <Card className="shadow-sm">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <FileText className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900">8.9 MB</div>
                      <div className="text-sm text-gray-600">Total Storage Used</div>
                    </CardContent>
                  </Card>
                </div>

                {/* Documents Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {documents.map((doc, index) => (
                    <Card key={index} className="shadow-sm hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                            <FileText className="w-6 h-6 text-red-600" />
                          </div>
                          <Badge className={getStatusColor(doc.status)}>{doc.status}</Badge>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">{doc.name}</h3>
                        <div className="text-sm text-gray-500 space-y-1 mb-4">
                          <p>Type: {doc.type}</p>
                          <p>Size: {doc.size}</p>
                          <p>Uploaded: {doc.uploaded}</p>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                            <Eye className="w-4 h-4 mr-2" />
                            View
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "messages" && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">Messages</h1>
                    <p className="text-gray-600">Communication with your case worker and MRC staff</p>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Plus className="w-4 h-4 mr-2" />
                    New Message
                  </Button>
                </div>

                {/* Message Filters */}
                <Card className="shadow-sm">
                  <CardContent className="p-4">
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1">
                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                          <Input placeholder="Search messages..." className="pl-10" />
                        </div>
                      </div>
                      <Select>
                        <SelectTrigger className="w-32">
                          <SelectValue placeholder="All" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All</SelectItem>
                          <SelectItem value="unread">Unread</SelectItem>
                          <SelectItem value="read">Read</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>

                {/* Messages List */}
                <div className="space-y-4">
                  {messages.map((message) => (
                    <Card
                      key={message.id}
                      className={`shadow-sm cursor-pointer hover:shadow-md transition-shadow ${message.unread ? "border-blue-200 bg-blue-50" : ""}`}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h3 className="font-semibold text-gray-900">{message.from}</h3>
                              <Badge variant="outline" className="text-xs">
                                {message.role}
                              </Badge>
                              {message.unread && (
                                <Badge className="bg-blue-600 text-white hover:bg-blue-600">New</Badge>
                              )}
                              <Badge className={getPriorityColor(message.priority)}>{message.priority}</Badge>
                            </div>
                            <h4 className="font-medium text-gray-900 mb-2">{message.subject}</h4>
                            <p className="text-gray-600 mb-2">{message.preview}</p>
                            <p className="text-sm text-gray-500 flex items-center">
                              <Clock className="w-3 h-3 mr-1" />
                              {message.time}
                            </p>
                          </div>
                          <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4 mr-2" />
                            Read
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "appointments" && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">Appointments</h1>
                    <p className="text-gray-600">Manage your scheduled meetings and sessions</p>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Plus className="w-4 h-4 mr-2" />
                    Book Appointment
                  </Button>
                </div>

                {/* Upcoming Appointments */}
                <Card className="shadow-sm">
                  <CardHeader>
                    <CardTitle>Upcoming Appointments</CardTitle>
                    <CardDescription>Your scheduled meetings in the next 30 days</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {upcomingAppointments.map((appointment) => (
                        <div key={appointment.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                              <Calendar className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900">{appointment.title}</h3>
                              <div className="text-sm text-gray-600 space-y-1">
                                <p className="flex items-center">
                                  <Calendar className="w-3 h-3 mr-1" />
                                  {appointment.date} at {appointment.time}
                                </p>
                                <p className="flex items-center">
                                  <MapPin className="w-3 h-3 mr-1" />
                                  {appointment.location}
                                </p>
                                <p className="flex items-center">
                                  <User className="w-3 h-3 mr-1" />
                                  {appointment.staff}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge variant="outline">{appointment.type}</Badge>
                            <Button variant="outline" size="sm">
                              <Eye className="w-4 h-4 mr-2" />
                              View Details
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Calendar View Placeholder */}
                <Card className="shadow-sm">
                  <CardHeader>
                    <CardTitle>Calendar View</CardTitle>
                    <CardDescription>View all your appointments in calendar format</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-500">Calendar view coming soon</p>
                        <Button variant="outline" className="mt-2 bg-transparent">
                          View in External Calendar
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "profile" && (
              <div className="space-y-6">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Profile Settings</h1>
                  <p className="text-gray-600">Manage your personal information and account preferences</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Personal Information */}
                  <Card className="shadow-sm">
                    <CardHeader>
                      <CardTitle>Personal Information</CardTitle>
                      <CardDescription>Update your basic details</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                          <Input defaultValue="John" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                          <Input defaultValue="Doe" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                        <Input type="email" defaultValue="john.doe@example.com" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                        <Input type="tel" defaultValue="+255 123 456 789" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Nationality</label>
                        <Select defaultValue="tanzania">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="tanzania">Tanzania</SelectItem>
                            <SelectItem value="kenya">Kenya</SelectItem>
                            <SelectItem value="uganda">Uganda</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">Update Information</Button>
                    </CardContent>
                  </Card>

                  {/* Migration Details */}
                  <Card className="shadow-sm">
                    <CardHeader>
                      <CardTitle>Migration Details</CardTitle>
                      <CardDescription>Your migration phase and status</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Current Phase</label>
                        <Select defaultValue="pre-departure">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pre-departure">Pre-Departure</SelectItem>
                            <SelectItem value="in-destination">In Destination</SelectItem>
                            <SelectItem value="returnee">Returnee</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Destination Country</label>
                        <Select defaultValue="saudi-arabia">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="saudi-arabia">Saudi Arabia</SelectItem>
                            <SelectItem value="uae">United Arab Emirates</SelectItem>
                            <SelectItem value="qatar">Qatar</SelectItem>
                            <SelectItem value="kuwait">Kuwait</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Planned Departure Date</label>
                        <Input type="date" defaultValue="2024-03-15" />
                      </div>
                      <Button className="w-full bg-transparent" variant="outline">
                        Update Migration Details
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Emergency Contact */}
                  <Card className="shadow-sm">
                    <CardHeader>
                      <CardTitle>Emergency Contact</CardTitle>
                      <CardDescription>Contact information for emergencies</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Contact Name</label>
                        <Input placeholder="Emergency contact name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Relationship</label>
                        <Input placeholder="e.g., Spouse, Parent, Sibling" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                        <Input type="tel" placeholder="Emergency contact phone" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                        <Input placeholder="Emergency contact address" />
                      </div>
                      <Button className="w-full bg-transparent" variant="outline">
                        Save Emergency Contact
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Account Security */}
                  <Card className="shadow-sm">
                    <CardHeader>
                      <CardTitle>Account Security</CardTitle>
                      <CardDescription>Password and security settings</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                        <Input type="password" placeholder="Enter current password" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                        <Input type="password" placeholder="Enter new password" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                        <Input type="password" placeholder="Confirm new password" />
                      </div>
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                        <div className="flex items-start">
                          <Shield className="w-5 h-5 text-yellow-600 mr-2 mt-0.5" />
                          <div>
                            <h4 className="font-medium text-yellow-900">Security Tip</h4>
                            <p className="text-sm text-yellow-700 mt-1">
                              Use a strong password with at least 8 characters, including uppercase, lowercase, numbers,
                              and symbols.
                            </p>
                          </div>
                        </div>
                      </div>
                      <Button className="w-full bg-transparent" variant="outline">
                        Update Password
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-bold">MRC PORTAL</div>
                <div className="text-xs text-gray-400">Migrant Resource Centre</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              © 2024 Government of Tanzania - Ministry of Labour and Employment
            </p>
            <div className="flex justify-center space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white">
                Terms of Service
              </Link>
              <Link href="/help" className="text-gray-400 hover:text-white">
                Help & Support
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
