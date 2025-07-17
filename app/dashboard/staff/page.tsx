"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Search,
  Users,
  FileText,
  Calendar,
  MessageSquare,
  BarChart3,
  Settings,
  Bell,
  LogOut,
  Globe,
  Plus,
  Eye,
  Edit,
  Phone,
  Mail,
  CheckCircle,
  Clock,
  AlertCircle,
  UserPlus,
  Download,
} from "lucide-react"
import Link from "next/link"

export default function StaffDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [searchTerm, setSearchTerm] = useState("")

  const clients = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+1 (555) 123-4567",
      phase: "Pre-Departure",
      status: "active",
      lastContact: "2024-01-20",
      services: 3,
      priority: "normal",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "+1 (555) 234-5678",
      phase: "Returnee",
      status: "active",
      lastContact: "2024-01-19",
      services: 2,
      priority: "high",
    },
    {
      id: 3,
      name: "Ahmed Hassan",
      email: "ahmed.hassan@example.com",
      phone: "+1 (555) 345-6789",
      phase: "In-Destination",
      status: "inactive",
      lastContact: "2024-01-15",
      services: 1,
      priority: "normal",
    },
  ]

  const recentActivities = [
    {
      id: 1,
      type: "case_update",
      client: "John Doe",
      action: "Updated employment contract review",
      time: "2 hours ago",
    },
    {
      id: 2,
      type: "new_client",
      client: "Maria Garcia",
      action: "New client registration",
      time: "4 hours ago",
    },
    {
      id: 3,
      type: "appointment",
      client: "Ahmed Hassan",
      action: "Scheduled counseling session",
      time: "1 day ago",
    },
  ]

  const upcomingAppointments = [
    {
      id: 1,
      client: "John Doe",
      type: "Legal Consultation",
      date: "2024-01-22",
      time: "10:00 AM",
    },
    {
      id: 2,
      client: "Jane Smith",
      type: "Reintegration Planning",
      date: "2024-01-22",
      time: "2:00 PM",
    },
    {
      id: 3,
      client: "Ahmed Hassan",
      type: "Psychosocial Support",
      date: "2024-01-23",
      time: "11:00 AM",
    },
  ]

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800"
      case "normal":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "inactive":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">MRC Portal</span>
              </Link>
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Staff Dashboard</Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="w-4 h-4" />
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

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r min-h-screen">
          <div className="p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Sarah Johnson</h3>
                <p className="text-sm text-gray-500">Case Worker</p>
              </div>
            </div>
            <nav className="space-y-2">
              <Button
                variant={activeTab === "overview" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("overview")}
              >
                <BarChart3 className="w-4 h-4 mr-2" />
                Overview
              </Button>
              <Button
                variant={activeTab === "clients" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("clients")}
              >
                <Users className="w-4 h-4 mr-2" />
                Client Database
              </Button>
              <Button
                variant={activeTab === "cases" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("cases")}
              >
                <FileText className="w-4 h-4 mr-2" />
                Case Management
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
                variant={activeTab === "reports" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("reports")}
              >
                <BarChart3 className="w-4 h-4 mr-2" />
                Reports
              </Button>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {activeTab === "overview" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">Staff Dashboard</h1>
                <p className="text-gray-600">Monitor client cases and manage MRC operations</p>
              </div>

              {/* Quick Stats */}
              <div className="grid md:grid-cols-4 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Total Clients</p>
                        <p className="text-2xl font-bold text-gray-900">127</p>
                      </div>
                      <Users className="w-8 h-8 text-blue-600" />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Active Cases</p>
                        <p className="text-2xl font-bold text-gray-900">89</p>
                      </div>
                      <FileText className="w-8 h-8 text-green-600" />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">This Week</p>
                        <p className="text-2xl font-bold text-gray-900">23</p>
                      </div>
                      <Calendar className="w-8 h-8 text-purple-600" />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Pending</p>
                        <p className="text-2xl font-bold text-gray-900">12</p>
                      </div>
                      <AlertCircle className="w-8 h-8 text-orange-600" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Activity & Appointments */}
              <div className="grid lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Latest updates and actions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivities.map((activity) => (
                        <div key={activity.id} className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <FileText className="w-4 h-4 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-gray-900">{activity.client}</p>
                            <p className="text-sm text-gray-600">{activity.action}</p>
                            <p className="text-xs text-gray-500">{activity.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Appointments</CardTitle>
                    <CardDescription>Your scheduled meetings</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {upcomingAppointments.map((appointment) => (
                        <div
                          key={appointment.id}
                          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                        >
                          <div>
                            <p className="font-medium text-gray-900">{appointment.client}</p>
                            <p className="text-sm text-gray-600">{appointment.type}</p>
                            <p className="text-xs text-gray-500">
                              {appointment.date} at {appointment.time}
                            </p>
                          </div>
                          <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {activeTab === "clients" && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Client Database</h1>
                  <p className="text-gray-600">Manage and track all client information</p>
                </div>
                <Button>
                  <UserPlus className="w-4 h-4 mr-2" />
                  Add New Client
                </Button>
              </div>

              {/* Search and Filters */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <Input
                          placeholder="Search clients by name, email, or phone..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <Select>
                      <SelectTrigger className="w-48">
                        <SelectValue placeholder="Migration Phase" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Phases</SelectItem>
                        <SelectItem value="pre-departure">Pre-Departure</SelectItem>
                        <SelectItem value="in-destination">In-Destination</SelectItem>
                        <SelectItem value="returnee">Returnee</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger className="w-32">
                        <SelectValue placeholder="Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="inactive">Inactive</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* Client List */}
              <div className="space-y-4">
                {clients.map((client) => (
                  <Card key={client.id}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                            <Users className="w-6 h-6 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{client.name}</h3>
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <span className="flex items-center">
                                <Mail className="w-3 h-3 mr-1" />
                                {client.email}
                              </span>
                              <span className="flex items-center">
                                <Phone className="w-3 h-3 mr-1" />
                                {client.phone}
                              </span>
                            </div>
                            <div className="flex items-center space-x-2 mt-2">
                              <Badge variant="outline">{client.phase}</Badge>
                              <Badge className={getStatusColor(client.status)}>{client.status}</Badge>
                              <Badge className={getPriorityColor(client.priority)}>{client.priority} priority</Badge>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="text-right text-sm text-gray-500">
                            <p>{client.services} active services</p>
                            <p>Last contact: {client.lastContact}</p>
                          </div>
                          <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4 mr-2" />
                            View Case
                          </Button>
                          <Button variant="outline" size="sm">
                            <Edit className="w-4 h-4 mr-2" />
                            Edit
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === "cases" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Case Management</h1>
                <p className="text-gray-600">Track and manage individual client cases</p>
              </div>

              <div className="grid lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-yellow-600" />
                      In Progress
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <p className="font-medium text-gray-900">John Doe</p>
                        <p className="text-sm text-gray-600">Legal document review</p>
                        <p className="text-xs text-gray-500">Due: Jan 25, 2024</p>
                      </div>
                      <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <p className="font-medium text-gray-900">Jane Smith</p>
                        <p className="text-sm text-gray-600">Reintegration planning</p>
                        <p className="text-xs text-gray-500">Due: Jan 26, 2024</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <AlertCircle className="w-5 h-5 mr-2 text-red-600" />
                      Urgent
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                        <p className="font-medium text-gray-900">Ahmed Hassan</p>
                        <p className="text-sm text-gray-600">Emergency assistance</p>
                        <p className="text-xs text-gray-500">Overdue: Jan 20, 2024</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                      Completed
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                        <p className="font-medium text-gray-900">Maria Garcia</p>
                        <p className="text-sm text-gray-600">Pre-departure orientation</p>
                        <p className="text-xs text-gray-500">Completed: Jan 18, 2024</p>
                      </div>
                      <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                        <p className="font-medium text-gray-900">David Wilson</p>
                        <p className="text-sm text-gray-600">Document verification</p>
                        <p className="text-xs text-gray-500">Completed: Jan 17, 2024</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {activeTab === "appointments" && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Appointments</h1>
                  <p className="text-gray-600">Schedule and manage client appointments</p>
                </div>
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Schedule Appointment
                </Button>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Today's Appointments</CardTitle>
                    <CardDescription>January 22, 2024</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {upcomingAppointments.slice(0, 2).map((appointment) => (
                        <div key={appointment.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <p className="font-medium text-gray-900">{appointment.client}</p>
                            <p className="text-sm text-gray-600">{appointment.type}</p>
                            <p className="text-sm text-blue-600">{appointment.time}</p>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <Phone className="w-4 h-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <MessageSquare className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming This Week</CardTitle>
                    <CardDescription>Next 7 days</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">Ahmed Hassan</p>
                          <p className="text-sm text-gray-600">Psychosocial Support</p>
                          <p className="text-sm text-gray-500">Jan 23, 11:00 AM</p>
                        </div>
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">Maria Garcia</p>
                          <p className="text-sm text-gray-600">Follow-up Consultation</p>
                          <p className="text-sm text-gray-500">Jan 24, 2:00 PM</p>
                        </div>
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {activeTab === "reports" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Reports & Analytics</h1>
                <p className="text-gray-600">Generate reports and view analytics</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Service Statistics</CardTitle>
                    <CardDescription>Monthly service delivery report</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Pre-Departure Services</span>
                        <span className="font-medium">45</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Legal Aid</span>
                        <span className="font-medium">23</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Reintegration Support</span>
                        <span className="font-medium">18</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Psychosocial Support</span>
                        <span className="font-medium">31</span>
                      </div>
                    </div>
                    <Button className="w-full mt-4 bg-transparent" variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Export Report
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Client Demographics</CardTitle>
                    <CardDescription>Breakdown by nationality and gender</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Ethiopia</span>
                        <span className="font-medium">42%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Kenya</span>
                        <span className="font-medium">28%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Uganda</span>
                        <span className="font-medium">20%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Other</span>
                        <span className="font-medium">10%</span>
                      </div>
                    </div>
                    <Button className="w-full mt-4 bg-transparent" variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Export Report
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Performance Metrics</CardTitle>
                    <CardDescription>Key performance indicators</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Case Resolution Rate</span>
                        <span className="font-medium text-green-600">87%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Client Satisfaction</span>
                        <span className="font-medium text-green-600">4.2/5</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Avg. Response Time</span>
                        <span className="font-medium">2.3 days</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Active Cases</span>
                        <span className="font-medium">89</span>
                      </div>
                    </div>
                    <Button className="w-full mt-4 bg-transparent" variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Export Report
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
