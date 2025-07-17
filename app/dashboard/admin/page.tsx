"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Users,
  UserPlus,
  Settings,
  BarChart3,
  Shield,
  Database,
  Bell,
  LogOut,
  Globe,
  Eye,
  Edit,
  Trash2,
  Download,
  Upload,
  Search,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Activity,
} from "lucide-react"
import Link from "next/link"

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  const systemStats = {
    totalUsers: 1247,
    activeStaff: 23,
    totalCases: 892,
    monthlyGrowth: 12.5,
    systemUptime: 99.8,
    storageUsed: 67.3,
  }

  const staffMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.johnson@mrc.org",
      role: "Case Worker",
      status: "active",
      lastLogin: "2024-01-22 09:30",
      casesAssigned: 15,
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "michael.chen@mrc.org",
      role: "Senior Case Worker",
      status: "active",
      lastLogin: "2024-01-22 08:15",
      casesAssigned: 22,
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      email: "emma.rodriguez@mrc.org",
      role: "Legal Advisor",
      status: "inactive",
      lastLogin: "2024-01-20 16:45",
      casesAssigned: 8,
    },
  ]

  const recentActivities = [
    {
      id: 1,
      type: "user_registration",
      description: "New migrant worker registered: John Doe",
      timestamp: "2 hours ago",
      severity: "info",
    },
    {
      id: 2,
      type: "system_alert",
      description: "Database backup completed successfully",
      timestamp: "4 hours ago",
      severity: "success",
    },
    {
      id: 3,
      type: "security_alert",
      description: "Failed login attempts detected",
      timestamp: "6 hours ago",
      severity: "warning",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "inactive":
        return "bg-gray-100 text-gray-800"
      case "suspended":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "success":
        return "bg-green-100 text-green-800"
      case "warning":
        return "bg-yellow-100 text-yellow-800"
      case "error":
        return "bg-red-100 text-red-800"
      case "info":
        return "bg-blue-100 text-blue-800"
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
              <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">Admin Dashboard</Badge>
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
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Admin Panel</h3>
                <p className="text-sm text-gray-500">System Administrator</p>
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
                variant={activeTab === "users" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("users")}
              >
                <Users className="w-4 h-4 mr-2" />
                User Management
              </Button>
              <Button
                variant={activeTab === "staff" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("staff")}
              >
                <UserPlus className="w-4 h-4 mr-2" />
                Staff Management
              </Button>
              <Button
                variant={activeTab === "system" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("system")}
              >
                <Database className="w-4 h-4 mr-2" />
                System Settings
              </Button>
              <Button
                variant={activeTab === "reports" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("reports")}
              >
                <BarChart3 className="w-4 h-4 mr-2" />
                Analytics
              </Button>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {activeTab === "overview" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
                <p className="text-gray-600">System overview and administrative controls</p>
              </div>

              {/* System Stats */}
              <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Total Users</p>
                        <p className="text-2xl font-bold text-gray-900">{systemStats.totalUsers.toLocaleString()}</p>
                      </div>
                      <Users className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="flex items-center mt-2">
                      <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
                      <span className="text-sm text-green-600">+{systemStats.monthlyGrowth}%</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Active Staff</p>
                        <p className="text-2xl font-bold text-gray-900">{systemStats.activeStaff}</p>
                      </div>
                      <UserPlus className="w-8 h-8 text-green-600" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Total Cases</p>
                        <p className="text-2xl font-bold text-gray-900">{systemStats.totalCases}</p>
                      </div>
                      <BarChart3 className="w-8 h-8 text-purple-600" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">System Uptime</p>
                        <p className="text-2xl font-bold text-gray-900">{systemStats.systemUptime}%</p>
                      </div>
                      <Activity className="w-8 h-8 text-green-600" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Storage Used</p>
                        <p className="text-2xl font-bold text-gray-900">{systemStats.storageUsed}%</p>
                      </div>
                      <Database className="w-8 h-8 text-orange-600" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Alerts</p>
                        <p className="text-2xl font-bold text-gray-900">3</p>
                      </div>
                      <AlertCircle className="w-8 h-8 text-red-600" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Activity & System Health */}
              <div className="grid lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent System Activity</CardTitle>
                    <CardDescription>Latest system events and alerts</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivities.map((activity) => (
                        <div key={activity.id} className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <Activity className="w-4 h-4 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm text-gray-900">{activity.description}</p>
                            <div className="flex items-center space-x-2 mt-1">
                              <Badge className={getSeverityColor(activity.severity)}>{activity.severity}</Badge>
                              <span className="text-xs text-gray-500">{activity.timestamp}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>System Health</CardTitle>
                    <CardDescription>Current system status and performance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Database Status</span>
                        <div className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                          <span className="text-sm text-green-600">Healthy</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">API Response Time</span>
                        <span className="text-sm text-gray-900">245ms</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Active Sessions</span>
                        <span className="text-sm text-gray-900">127</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Last Backup</span>
                        <span className="text-sm text-gray-900">4 hours ago</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {activeTab === "staff" && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Staff Management</h1>
                  <p className="text-gray-600">Manage MRC staff accounts and permissions</p>
                </div>
                <Button>
                  <UserPlus className="w-4 h-4 mr-2" />
                  Add Staff Member
                </Button>
              </div>

              {/* Search and Filters */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <Input placeholder="Search staff by name or email..." className="pl-10" />
                      </div>
                    </div>
                    <Select>
                      <SelectTrigger className="w-48">
                        <SelectValue placeholder="Role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Roles</SelectItem>
                        <SelectItem value="case-worker">Case Worker</SelectItem>
                        <SelectItem value="senior-case-worker">Senior Case Worker</SelectItem>
                        <SelectItem value="legal-advisor">Legal Advisor</SelectItem>
                        <SelectItem value="admin">Administrator</SelectItem>
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
                        <SelectItem value="suspended">Suspended</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* Staff List */}
              <div className="space-y-4">
                {staffMembers.map((staff) => (
                  <Card key={staff.id}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                            <Users className="w-6 h-6 text-green-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{staff.name}</h3>
                            <p className="text-sm text-gray-600">{staff.email}</p>
                            <div className="flex items-center space-x-2 mt-2">
                              <Badge variant="outline">{staff.role}</Badge>
                              <Badge className={getStatusColor(staff.status)}>{staff.status}</Badge>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="text-right text-sm text-gray-500">
                            <p>{staff.casesAssigned} cases assigned</p>
                            <p>Last login: {staff.lastLogin}</p>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <Eye className="w-4 h-4 mr-2" />
                              View
                            </Button>
                            <Button variant="outline" size="sm">
                              <Edit className="w-4 h-4 mr-2" />
                              Edit
                            </Button>
                            <Button variant="outline" size="sm">
                              <Trash2 className="w-4 h-4 mr-2" />
                              Remove
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === "system" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">System Settings</h1>
                <p className="text-gray-600">Configure system-wide settings and preferences</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>General Settings</CardTitle>
                    <CardDescription>Basic system configuration</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">System Name</label>
                      <Input defaultValue="MRC Portal" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Default Language</label>
                      <Select defaultValue="en">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="sw">Swahili</SelectItem>
                          <SelectItem value="am">Amharic</SelectItem>
                          <SelectItem value="ar">Arabic</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Time Zone</label>
                      <Select defaultValue="utc">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="utc">UTC</SelectItem>
                          <SelectItem value="eat">East Africa Time</SelectItem>
                          <SelectItem value="wat">West Africa Time</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button className="w-full">Save Settings</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Security Settings</CardTitle>
                    <CardDescription>System security configuration</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Session Timeout (minutes)</label>
                      <Input type="number" defaultValue="30" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Password Policy</label>
                      <Select defaultValue="strong">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="basic">Basic (8 characters)</SelectItem>
                          <SelectItem value="strong">Strong (8+ chars, mixed case, numbers)</SelectItem>
                          <SelectItem value="complex">Complex (12+ chars, symbols required)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Two-Factor Authentication</label>
                      <Select defaultValue="optional">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="disabled">Disabled</SelectItem>
                          <SelectItem value="optional">Optional</SelectItem>
                          <SelectItem value="required">Required</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button className="w-full">Update Security</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Data Management</CardTitle>
                    <CardDescription>Backup and data management tools</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">Database Backup</p>
                        <p className="text-sm text-gray-500">Last backup: 4 hours ago</p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Backup Now
                      </Button>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">Export Data</p>
                        <p className="text-sm text-gray-500">Generate system reports</p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Upload className="w-4 h-4 mr-2" />
                        Export
                      </Button>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">System Logs</p>
                        <p className="text-sm text-gray-500">View system activity logs</p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-2" />
                        View Logs
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Notifications</CardTitle>
                    <CardDescription>System notification settings</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">Email Notifications</p>
                        <p className="text-sm text-gray-500">Send system alerts via email</p>
                      </div>
                      <input type="checkbox" defaultChecked className="rounded" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">SMS Notifications</p>
                        <p className="text-sm text-gray-500">Send urgent alerts via SMS</p>
                      </div>
                      <input type="checkbox" className="rounded" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">System Maintenance Alerts</p>
                        <p className="text-sm text-gray-500">Notify users of maintenance</p>
                      </div>
                      <input type="checkbox" defaultChecked className="rounded" />
                    </div>
                    <Button className="w-full">Save Preferences</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {activeTab === "reports" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">System Analytics</h1>
                <p className="text-gray-600">Comprehensive system reports and analytics</p>
              </div>

              <div className="grid m d:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>User Growth</CardTitle>
                    <CardDescription>Monthly user registration trends</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">This Month</span>
                        <span className="font-medium text-green-600">+156 users</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Last Month</span>
                        <span className="font-medium">+142 users</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Growth Rate</span>
                        <span className="font-medium text-green-600">+9.8%</span>
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
                    <CardTitle>Service Usage</CardTitle>
                    <CardDescription>Most requested services</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Pre-Departure</span>
                        <span className="font-medium">34%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Legal Aid</span>
                        <span className="font-medium">28%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Reintegration</span>
                        <span className="font-medium">23%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Psychosocial</span>
                        <span className="font-medium">15%</span>
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
                    <CardTitle>System Performance</CardTitle>
                    <CardDescription>Technical performance metrics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Avg Response Time</span>
                        <span className="font-medium text-green-600">245ms</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Uptime</span>
                        <span className="font-medium text-green-600">99.8%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Error Rate</span>
                        <span className="font-medium text-green-600">0.02%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Storage Used</span>
                        <span className="font-medium">67.3%</span>
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
