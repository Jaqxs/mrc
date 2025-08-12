"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Briefcase,
  Eye,
  EyeOff,
  Shield,
  Users,
  UserCheck,
  ChevronRight,
  Phone,
  Mail,
  Lock,
  User,
  AlertCircle,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [userType, setUserType] = useState("jobseeker")

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Top Header Bar */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <span className="flex items-center">
                <Phone className="w-3 h-3 mr-1" />
                Career Hotline: +255 123 456 789
              </span>
              <span className="flex items-center">
                <Mail className="w-3 h-3 mr-1" />
                careers@mrc.go.tz
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/help" className="hover:underline">
                Career Help
              </Link>
              <Link href="/contact" className="hover:underline">
                Contact Recruiters
              </Link>
              <Select>
                <SelectTrigger className="w-20 h-6 text-xs bg-transparent border-white/30">
                  <SelectValue placeholder="EN" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="sw">Kiswahili</SelectItem>
                  <SelectItem value="ar">العربية</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-xl border-b border-blue-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl">
                <Briefcase className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  MRC CAREERS
                </h1>
                <p className="text-xs text-slate-500 uppercase tracking-wide">International Recruitment Agency</p>
              </div>
            </Link>
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="/jobs" className="text-gray-700 hover:text-blue-600 transition-colors">
                Jobs
              </Link>
              <Link href="/resources" className="text-gray-700 hover:text-blue-600 transition-colors">
                Resources
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-white/50 border-b border-blue-100">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-900">Sign In</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Login Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-2xl border-0 rounded-3xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
                  <CardTitle className="text-3xl flex items-center">
                    <Lock className="w-8 h-8 mr-3" />
                    Sign In to MRC Careers
                  </CardTitle>
                  <CardDescription className="text-blue-100 text-lg">
                    Access your account to manage job applications and track your career journey
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <Tabs value={userType} onValueChange={setUserType} className="w-full">
                    <TabsList className="grid w-full grid-cols-3 mb-8 h-14 bg-slate-100 rounded-2xl">
                      <TabsTrigger value="jobseeker" className="flex items-center text-sm font-medium rounded-xl">
                        <Users className="w-4 h-4 mr-2" />
                        Job Seeker
                      </TabsTrigger>
                      <TabsTrigger value="staff" className="flex items-center text-sm font-medium rounded-xl">
                        <UserCheck className="w-4 h-4 mr-2" />
                        HR Staff
                      </TabsTrigger>
                      <TabsTrigger value="admin" className="flex items-center text-sm font-medium rounded-xl">
                        <Shield className="w-4 h-4 mr-2" />
                        Administrator
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="jobseeker" className="space-y-6">
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6">
                        <div className="flex items-center">
                          <Users className="w-6 h-6 text-blue-600 mr-3" />
                          <span className="font-semibold text-blue-900 text-lg">Job Seeker Portal</span>
                        </div>
                        <p className="text-blue-700 mt-2">
                          Access your personal dashboard, browse jobs, and track your applications
                        </p>
                      </div>

                      <form className="space-y-6">
                        <div className="space-y-3">
                          <Label htmlFor="jobseeker-email" className="text-sm font-semibold text-slate-700">
                            Email Address or Phone Number
                          </Label>
                          <div className="relative">
                            <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                            <Input
                              id="jobseeker-email"
                              type="text"
                              placeholder="Enter your email or phone number"
                              className="pl-12 h-14 text-lg border-2 border-slate-200 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                            />
                          </div>
                        </div>

                        <div className="space-y-3">
                          <Label htmlFor="jobseeker-password" className="text-sm font-semibold text-slate-700">
                            Password
                          </Label>
                          <div className="relative">
                            <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                            <Input
                              id="jobseeker-password"
                              type={showPassword ? "text" : "password"}
                              placeholder="Enter your password"
                              className="pl-12 pr-14 h-14 text-lg border-2 border-slate-200 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
                            >
                              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <label className="flex items-center">
                            <input type="checkbox" className="rounded border-slate-300 text-blue-600 mr-3 w-4 h-4" />
                            <span className="text-sm text-slate-600">Remember me</span>
                          </label>
                          <Link href="/forgot-password" className="text-sm text-blue-600 hover:underline font-medium">
                            Forgot password?
                          </Link>
                        </div>

                        <Button
                          className="w-full h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                          asChild
                        >
                          <Link href="/dashboard/jobseeker">
                            Sign In to Dashboard
                            <ChevronRight className="ml-2 w-5 h-5" />
                          </Link>
                        </Button>
                      </form>
                    </TabsContent>

                    <TabsContent value="staff" className="space-y-6">
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6">
                        <div className="flex items-center">
                          <UserCheck className="w-6 h-6 text-green-600 mr-3" />
                          <span className="font-semibold text-green-900 text-lg">HR Staff Portal</span>
                        </div>
                        <p className="text-green-700 mt-2">
                          Access recruitment tools, manage applications, and review candidates
                        </p>
                      </div>

                      <form className="space-y-6">
                        <div className="space-y-3">
                          <Label htmlFor="staff-email" className="text-sm font-semibold text-slate-700">
                            Staff Email Address
                          </Label>
                          <div className="relative">
                            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                            <Input
                              id="staff-email"
                              type="email"
                              placeholder="staff@mrc.go.tz"
                              className="pl-12 h-14 text-lg border-2 border-slate-200 rounded-2xl focus:border-green-500 focus:ring-4 focus:ring-green-100"
                            />
                          </div>
                        </div>

                        <div className="space-y-3">
                          <Label htmlFor="staff-password" className="text-sm font-semibold text-slate-700">
                            Password
                          </Label>
                          <div className="relative">
                            <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                            <Input
                              id="staff-password"
                              type={showPassword ? "text" : "password"}
                              placeholder="Enter your password"
                              className="pl-12 pr-14 h-14 text-lg border-2 border-slate-200 rounded-2xl focus:border-green-500 focus:ring-4 focus:ring-green-100"
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
                            >
                              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                          </div>
                        </div>

                        <Button
                          className="w-full h-14 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-emerald-600 hover:to-green-600 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                          asChild
                        >
                          <Link href="/dashboard/staff">
                            Sign In to Staff Portal
                            <ChevronRight className="ml-2 w-5 h-5" />
                          </Link>
                        </Button>
                      </form>
                    </TabsContent>

                    <TabsContent value="admin" className="space-y-6">
                      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-2xl p-6">
                        <div className="flex items-center">
                          <Shield className="w-6 h-6 text-purple-600 mr-3" />
                          <span className="font-semibold text-purple-900 text-lg">Administrator Portal</span>
                        </div>
                        <p className="text-purple-700 mt-2">System administration and recruitment management tools</p>
                      </div>

                      <form className="space-y-6">
                        <div className="space-y-3">
                          <Label htmlFor="admin-email" className="text-sm font-semibold text-slate-700">
                            Administrator Email
                          </Label>
                          <div className="relative">
                            <Shield className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                            <Input
                              id="admin-email"
                              type="email"
                              placeholder="admin@mrc.go.tz"
                              className="pl-12 h-14 text-lg border-2 border-slate-200 rounded-2xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
                            />
                          </div>
                        </div>

                        <div className="space-y-3">
                          <Label htmlFor="admin-password" className="text-sm font-semibold text-slate-700">
                            Password
                          </Label>
                          <div className="relative">
                            <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                            <Input
                              id="admin-password"
                              type={showPassword ? "text" : "password"}
                              placeholder="Enter your password"
                              className="pl-12 pr-14 h-14 text-lg border-2 border-slate-200 rounded-2xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
                            >
                              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                          </div>
                        </div>

                        <Button
                          className="w-full h-14 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-indigo-600 hover:to-purple-600 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                          asChild
                        >
                          <Link href="/dashboard/admin/applications">
                            Sign In to Admin Portal
                            <ChevronRight className="ml-2 w-5 h-5" />
                          </Link>
                        </Button>
                      </form>
                    </TabsContent>
                  </Tabs>

                  <div className="mt-8 pt-6 border-t border-slate-200">
                    <div className="text-center">
                      <p className="text-slate-600 mb-4">Don't have an account?</p>
                      <Button
                        variant="outline"
                        className="w-full h-14 bg-transparent border-2 border-slate-200 hover:border-blue-300 hover:bg-blue-50 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105"
                        asChild
                      >
                        <Link href="/register">
                          Create Job Seeker Account
                          <ChevronRight className="ml-2 w-5 h-5" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Help & Support */}
              <Card className="shadow-xl rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <AlertCircle className="w-5 h-5 mr-2 text-blue-600" />
                    Need Help?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-4">
                      <h4 className="font-semibold text-green-900 mb-2">Career Support</h4>
                      <p className="text-sm text-green-700 mb-3">24/7 career guidance and job search assistance</p>
                      <Button size="sm" className="bg-green-600 hover:bg-green-700 w-full rounded-xl">
                        <Phone className="w-4 h-4 mr-2" />
                        Call +255 800 JOBS
                      </Button>
                    </div>

                    <div className="space-y-3">
                      <Link href="/help/login" className="flex items-center text-sm text-blue-600 hover:underline">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Login Help & Troubleshooting
                      </Link>
                      <Link href="/help/account" className="flex items-center text-sm text-blue-600 hover:underline">
                        <User className="w-4 h-4 mr-2" />
                        Account Recovery
                      </Link>
                      <Link href="/help/contact" className="flex items-center text-sm text-blue-600 hover:underline">
                        <Mail className="w-4 h-4 mr-2" />
                        Contact Recruiters
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* System Status */}
              <Card className="shadow-xl rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-lg">System Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Portal Status</span>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                        <span className="text-sm text-green-600 font-medium">Online</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Active Jobs</span>
                      <span className="text-sm text-gray-900 font-medium">1,247</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Response Time</span>
                      <span className="text-sm text-gray-900 font-medium">&lt; 2 seconds</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl">
                <Briefcase className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="font-bold text-xl">MRC CAREERS</div>
                <div className="text-xs text-blue-200">International Recruitment Agency</div>
              </div>
            </div>
            <p className="text-sm text-blue-200 mb-6">
              © 2024 Government of Tanzania - Ministry of Labour and Employment
            </p>
            <div className="flex justify-center space-x-8 text-sm">
              <Link href="/privacy" className="text-blue-200 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-blue-200 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/accessibility" className="text-blue-200 hover:text-white transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
