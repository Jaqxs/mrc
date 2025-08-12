"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Globe,
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
  const [userType, setUserType] = useState("migrant")

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
              <Link href="/help" className="hover:underline">
                Help
              </Link>
              <Link href="/contact" className="hover:underline">
                Contact
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
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">MRC PORTAL</h1>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Migrant Resource Centre</p>
              </div>
            </Link>
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors">
                Services
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
      <div className="bg-gray-50 border-b">
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
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Login Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg border-0">
                <CardHeader className="bg-blue-600 text-white rounded-t-lg">
                  <CardTitle className="text-2xl flex items-center">
                    <Lock className="w-6 h-6 mr-2" />
                    Sign In to MRC Portal
                  </CardTitle>
                  <CardDescription className="text-blue-100">
                    Access your account to manage services and track your migration journey
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <Tabs value={userType} onValueChange={setUserType} className="w-full">
                    <TabsList className="grid w-full grid-cols-3 mb-8 h-12">
                      <TabsTrigger value="migrant" className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        Migrant Worker
                      </TabsTrigger>
                      <TabsTrigger value="staff" className="flex items-center">
                        <UserCheck className="w-4 h-4 mr-2" />
                        MRC Staff
                      </TabsTrigger>
                      <TabsTrigger value="admin" className="flex items-center">
                        <Shield className="w-4 h-4 mr-2" />
                        Administrator
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="migrant" className="space-y-6">
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <div className="flex items-center">
                          <Users className="w-5 h-5 text-blue-600 mr-2" />
                          <span className="font-medium text-blue-900">Migrant Worker Portal</span>
                        </div>
                        <p className="text-sm text-blue-700 mt-1">
                          Access your personal dashboard, services, and case information
                        </p>
                      </div>

                      <form className="space-y-6">
                        <div className="space-y-2">
                          <Label htmlFor="migrant-email" className="text-sm font-medium">
                            Email Address or Phone Number
                          </Label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <Input
                              id="migrant-email"
                              type="text"
                              placeholder="Enter your email or phone number"
                              className="pl-10 h-12"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="migrant-password" className="text-sm font-medium">
                            Password
                          </Label>
                          <div className="relative">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <Input
                              id="migrant-password"
                              type={showPassword ? "text" : "password"}
                              placeholder="Enter your password"
                              className="pl-10 pr-12 h-12"
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            >
                              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <label className="flex items-center">
                            <input type="checkbox" className="rounded border-gray-300 text-blue-600 mr-2" />
                            <span className="text-sm text-gray-600">Remember me</span>
                          </label>
                          <Link href="/forgot-password" className="text-sm text-blue-600 hover:underline">
                            Forgot password?
                          </Link>
                        </div>

                        <Button className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-lg" asChild>
                          <Link href="/dashboard/migrant">
                            Sign In
                            <ChevronRight className="ml-2 w-5 h-5" />
                          </Link>
                        </Button>
                      </form>
                    </TabsContent>

                    <TabsContent value="staff" className="space-y-6">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <div className="flex items-center">
                          <UserCheck className="w-5 h-5 text-green-600 mr-2" />
                          <span className="font-medium text-green-900">MRC Staff Portal</span>
                        </div>
                        <p className="text-sm text-green-700 mt-1">
                          Access case management tools and client information
                        </p>
                      </div>

                      <form className="space-y-6">
                        <div className="space-y-2">
                          <Label htmlFor="staff-email" className="text-sm font-medium">
                            Staff Email Address
                          </Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <Input id="staff-email" type="email" placeholder="staff@mrc.go.tz" className="pl-10 h-12" />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="staff-password" className="text-sm font-medium">
                            Password
                          </Label>
                          <div className="relative">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <Input
                              id="staff-password"
                              type={showPassword ? "text" : "password"}
                              placeholder="Enter your password"
                              className="pl-10 pr-12 h-12"
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            >
                              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                          </div>
                        </div>

                        <Button className="w-full h-12 bg-green-600 hover:bg-green-700 text-lg" asChild>
                          <Link href="/dashboard/staff">
                            Sign In to Staff Portal
                            <ChevronRight className="ml-2 w-5 h-5" />
                          </Link>
                        </Button>
                      </form>
                    </TabsContent>

                    <TabsContent value="admin" className="space-y-6">
                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                        <div className="flex items-center">
                          <Shield className="w-5 h-5 text-purple-600 mr-2" />
                          <span className="font-medium text-purple-900">Administrator Portal</span>
                        </div>
                        <p className="text-sm text-purple-700 mt-1">System administration and management tools</p>
                      </div>

                      <form className="space-y-6">
                        <div className="space-y-2">
                          <Label htmlFor="admin-email" className="text-sm font-medium">
                            Administrator Email
                          </Label>
                          <div className="relative">
                            <Shield className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <Input id="admin-email" type="email" placeholder="admin@mrc.go.tz" className="pl-10 h-12" />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="admin-password" className="text-sm font-medium">
                            Password
                          </Label>
                          <div className="relative">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <Input
                              id="admin-password"
                              type={showPassword ? "text" : "password"}
                              placeholder="Enter your password"
                              className="pl-10 pr-12 h-12"
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            >
                              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                          </div>
                        </div>

                        <Button className="w-full h-12 bg-purple-600 hover:bg-purple-700 text-lg" asChild>
                          <Link href="/dashboard/admin/applications">
                            Sign In to Admin Portal
                            <ChevronRight className="ml-2 w-5 h-5" />
                          </Link>
                        </Button>
                      </form>
                    </TabsContent>
                  </Tabs>

                  <div className="mt-8 pt-6 border-t">
                    <div className="text-center">
                      <p className="text-sm text-gray-600 mb-4">Don't have an account?</p>
                      <Button variant="outline" className="w-full h-12 bg-transparent" asChild>
                        <Link href="/register">
                          Create New Account
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
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <AlertCircle className="w-5 h-5 mr-2 text-blue-600" />
                    Need Help?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <h4 className="font-semibold text-red-900 mb-2">Emergency Support</h4>
                      <p className="text-sm text-red-700 mb-2">24/7 emergency assistance available</p>
                      <Button size="sm" className="bg-red-600 hover:bg-red-700 w-full">
                        <Phone className="w-4 h-4 mr-2" />
                        Call +255 911 HELP
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
                        Contact Support
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* System Status */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">System Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Portal Status</span>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        <span className="text-sm text-green-600">Online</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Last Updated</span>
                      <span className="text-sm text-gray-900">Jan 22, 2024</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Response Time</span>
                      <span className="text-sm text-gray-900">&lt; 2 seconds</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
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
              <Link href="/accessibility" className="text-gray-400 hover:text-white">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
