"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Globe,
  Eye,
  EyeOff,
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Phone,
  Mail,
  User,
  FileText,
  Shield,
  CheckCircle,
  AlertCircle,
  Info,
} from "lucide-react"
import Link from "next/link"

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    nationality: "",
    idType: "",
    idNumber: "",
    migrationPhase: "",
    agreeTerms: false,
    agreePrivacy: false,
  })

  const handleNext = () => {
    if (step < 4) setStep(step + 1)
  }

  const handlePrev = () => {
    if (step > 1) setStep(step - 1)
  }

  const getStepProgress = () => (step / 4) * 100

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
            <span className="text-gray-900">Register</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Registration Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg border-0">
                <CardHeader className="bg-blue-600 text-white rounded-t-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl flex items-center">
                        <User className="w-6 h-6 mr-2" />
                        Register for MRC Portal
                      </CardTitle>
                      <CardDescription className="text-blue-100">
                        Create your account to access migrant worker services
                      </CardDescription>
                    </div>
                    <Badge variant="secondary" className="bg-white text-blue-600">
                      Step {step} of 4
                    </Badge>
                  </div>
                  <div className="mt-4">
                    <Progress value={getStepProgress()} className="h-2 bg-blue-500" />
                  </div>
                </CardHeader>

                <CardContent className="p-8">
                  {step === 1 && (
                    <div className="space-y-6">
                      <div className="text-center mb-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Personal Information</h3>
                        <p className="text-gray-600">Let's start with your basic details</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName" className="text-sm font-medium">
                            First Name <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="firstName"
                            placeholder="Enter your first name"
                            value={formData.firstName}
                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                            className="h-11"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName" className="text-sm font-medium">
                            Last Name <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="lastName"
                            placeholder="Enter your last name"
                            value={formData.lastName}
                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                            className="h-11"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium">
                          Email Address <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="h-11"
                        />
                        <p className="text-xs text-gray-500">We'll use this to send you important updates</p>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-medium">
                          Phone Number <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+255 123 456 789"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="h-11"
                        />
                        <p className="text-xs text-gray-500">Include country code (e.g., +255 for Tanzania)</p>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="nationality" className="text-sm font-medium">
                          Nationality <span className="text-red-500">*</span>
                        </Label>
                        <Select
                          value={formData.nationality}
                          onValueChange={(value) => setFormData({ ...formData, nationality: value })}
                        >
                          <SelectTrigger className="h-11">
                            <SelectValue placeholder="Select your nationality" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="tanzania">Tanzania</SelectItem>
                            <SelectItem value="kenya">Kenya</SelectItem>
                            <SelectItem value="uganda">Uganda</SelectItem>
                            <SelectItem value="rwanda">Rwanda</SelectItem>
                            <SelectItem value="burundi">Burundi</SelectItem>
                            <SelectItem value="ethiopia">Ethiopia</SelectItem>
                            <SelectItem value="somalia">Somalia</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-6">
                      <div className="text-center mb-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Identification Details</h3>
                        <p className="text-gray-600">Provide your identification information</p>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <div className="flex items-start">
                          <Info className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                          <div>
                            <h4 className="font-medium text-blue-900">Why do we need this?</h4>
                            <p className="text-sm text-blue-700 mt-1">
                              Identification details help us verify your identity and provide appropriate services based
                              on your legal status.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="idType" className="text-sm font-medium">
                          ID Document Type <span className="text-red-500">*</span>
                        </Label>
                        <Select
                          value={formData.idType}
                          onValueChange={(value) => setFormData({ ...formData, idType: value })}
                        >
                          <SelectTrigger className="h-11">
                            <SelectValue placeholder="Select your ID document type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="passport">Passport</SelectItem>
                            <SelectItem value="national-id">National ID Card</SelectItem>
                            <SelectItem value="birth-certificate">Birth Certificate</SelectItem>
                            <SelectItem value="voter-id">Voter ID</SelectItem>
                            <SelectItem value="driving-license">Driving License</SelectItem>
                            <SelectItem value="other">Other Government ID</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="idNumber" className="text-sm font-medium">
                          ID Number <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="idNumber"
                          placeholder="Enter your ID number"
                          value={formData.idNumber}
                          onChange={(e) => setFormData({ ...formData, idNumber: e.target.value })}
                          className="h-11"
                        />
                        <p className="text-xs text-gray-500">Enter the number exactly as it appears on your document</p>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="migrationPhase" className="text-sm font-medium">
                          Current Migration Phase <span className="text-red-500">*</span>
                        </Label>
                        <Select
                          value={formData.migrationPhase}
                          onValueChange={(value) => setFormData({ ...formData, migrationPhase: value })}
                        >
                          <SelectTrigger className="h-11">
                            <SelectValue placeholder="Select your current migration phase" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pre-departure">Pre-Departure (Planning to migrate)</SelectItem>
                            <SelectItem value="in-destination">Currently in Destination Country</SelectItem>
                            <SelectItem value="returnee">Returnee (Recently returned home)</SelectItem>
                            <SelectItem value="transit">In Transit</SelectItem>
                            <SelectItem value="family">Family Member of Migrant</SelectItem>
                          </SelectContent>
                        </Select>
                        <p className="text-xs text-gray-500">
                          This helps us provide relevant services for your situation
                        </p>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-6">
                      <div className="text-center mb-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Account Security</h3>
                        <p className="text-gray-600">Create a secure password for your account</p>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="password" className="text-sm font-medium">
                          Password <span className="text-red-500">*</span>
                        </Label>
                        <div className="relative">
                          <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Create a strong password"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            className="pr-12 h-11"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                          >
                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                          </button>
                        </div>
                        <div className="mt-2">
                          <div className="text-xs text-gray-600 space-y-1">
                            <p>Password must contain:</p>
                            <ul className="list-disc list-inside space-y-1 ml-2">
                              <li>At least 8 characters</li>
                              <li>One uppercase letter</li>
                              <li>One lowercase letter</li>
                              <li>One number</li>
                              <li>One special character</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword" className="text-sm font-medium">
                          Confirm Password <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="confirmPassword"
                          type="password"
                          placeholder="Confirm your password"
                          value={formData.confirmPassword}
                          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                          className="h-11"
                        />
                      </div>

                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <div className="flex items-start">
                          <Shield className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                          <div>
                            <h4 className="font-medium text-green-900">Security Notice</h4>
                            <p className="text-sm text-green-700 mt-1">
                              Your password is encrypted and stored securely. We will never share your login credentials
                              with anyone.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {step === 4 && (
                    <div className="space-y-6">
                      <div className="text-center mb-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Terms & Conditions</h3>
                        <p className="text-gray-600">Please review and accept our terms to complete registration</p>
                      </div>

                      <div className="bg-gray-50 border rounded-lg p-6 max-h-64 overflow-y-auto">
                        <h4 className="font-semibold text-gray-900 mb-3">MRC Portal Terms of Service</h4>
                        <div className="text-sm text-gray-700 space-y-3">
                          <p>
                            By registering for the MRC Portal, you agree to provide accurate and complete information
                            about yourself. You are responsible for maintaining the confidentiality of your account
                            credentials.
                          </p>
                          <p>
                            The MRC Portal is provided by the Government of Tanzania to assist migrant workers with
                            accessing services and resources. All services are provided in accordance with applicable
                            laws and regulations.
                          </p>
                          <p>
                            Your personal information will be handled in accordance with our Privacy Policy and
                            applicable data protection laws. We are committed to protecting your privacy and maintaining
                            the confidentiality of your information.
                          </p>
                          <p>
                            You agree to use the portal only for lawful purposes and in accordance with these terms.
                            Misuse of the portal may result in account suspension or termination.
                          </p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <Checkbox
                            id="terms"
                            checked={formData.agreeTerms}
                            onCheckedChange={(checked) => setFormData({ ...formData, agreeTerms: checked as boolean })}
                            className="mt-1"
                          />
                          <Label htmlFor="terms" className="text-sm leading-relaxed">
                            I have read and agree to the{" "}
                            <Link href="/terms" className="text-blue-600 hover:underline" target="_blank">
                              Terms of Service
                            </Link>{" "}
                            and understand my rights and responsibilities as a user of the MRC Portal.
                          </Label>
                        </div>

                        <div className="flex items-start space-x-3">
                          <Checkbox
                            id="privacy"
                            checked={formData.agreePrivacy}
                            onCheckedChange={(checked) =>
                              setFormData({ ...formData, agreePrivacy: checked as boolean })
                            }
                            className="mt-1"
                          />
                          <Label htmlFor="privacy" className="text-sm leading-relaxed">
                            I agree to the{" "}
                            <Link href="/privacy" className="text-blue-600 hover:underline" target="_blank">
                              Privacy Policy
                            </Link>{" "}
                            and consent to the collection, processing, and storage of my personal data for the purpose
                            of providing MRC services.
                          </Label>
                        </div>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <div className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                          <div>
                            <h4 className="font-medium text-blue-900">Data Protection</h4>
                            <p className="text-sm text-blue-700 mt-1">
                              All your information is encrypted and stored securely in compliance with international
                              data protection standards. You can request access to or deletion of your data at any time.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between mt-8 pt-6 border-t">
                    {step > 1 ? (
                      <Button variant="outline" onClick={handlePrev} className="flex items-center bg-transparent">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Previous
                      </Button>
                    ) : (
                      <div></div>
                    )}

                    {step < 4 ? (
                      <Button onClick={handleNext} className="bg-blue-600 hover:bg-blue-700 flex items-center">
                        Next
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    ) : (
                      <Button
                        className="bg-green-600 hover:bg-green-700 flex items-center"
                        disabled={!formData.agreeTerms || !formData.agreePrivacy}
                        asChild
                      >
                        <Link href="/dashboard/migrant">
                          Create Account
                          <CheckCircle className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    )}
                  </div>

                  {step === 1 && (
                    <div className="mt-6 text-center">
                      <p className="text-sm text-gray-600">
                        Already have an account?{" "}
                        <Link href="/login" className="text-blue-600 hover:underline">
                          Sign in here
                        </Link>
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Registration Steps */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Registration Steps</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className={`flex items-center space-x-3 ${step >= 1 ? "text-blue-600" : "text-gray-400"}`}>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? "bg-blue-600 text-white" : "bg-gray-200"}`}
                      >
                        {step > 1 ? <CheckCircle className="w-4 h-4" /> : "1"}
                      </div>
                      <div>
                        <p className="font-medium">Personal Information</p>
                        <p className="text-xs text-gray-500">Basic details and contact info</p>
                      </div>
                    </div>

                    <div className={`flex items-center space-x-3 ${step >= 2 ? "text-blue-600" : "text-gray-400"}`}>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? "bg-blue-600 text-white" : "bg-gray-200"}`}
                      >
                        {step > 2 ? <CheckCircle className="w-4 h-4" /> : "2"}
                      </div>
                      <div>
                        <p className="font-medium">Identification</p>
                        <p className="text-xs text-gray-500">ID documents and migration phase</p>
                      </div>
                    </div>

                    <div className={`flex items-center space-x-3 ${step >= 3 ? "text-blue-600" : "text-gray-400"}`}>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? "bg-blue-600 text-white" : "bg-gray-200"}`}
                      >
                        {step > 3 ? <CheckCircle className="w-4 h-4" /> : "3"}
                      </div>
                      <div>
                        <p className="font-medium">Account Security</p>
                        <p className="text-xs text-gray-500">Password and security settings</p>
                      </div>
                    </div>

                    <div className={`flex items-center space-x-3 ${step >= 4 ? "text-blue-600" : "text-gray-400"}`}>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 4 ? "bg-blue-600 text-white" : "bg-gray-200"}`}
                      >
                        {step > 4 ? <CheckCircle className="w-4 h-4" /> : "4"}
                      </div>
                      <div>
                        <p className="font-medium">Terms & Conditions</p>
                        <p className="text-xs text-gray-500">Review and accept terms</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

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
                      <Link
                        href="/help/registration"
                        className="flex items-center text-sm text-blue-600 hover:underline"
                      >
                        <FileText className="w-4 h-4 mr-2" />
                        Registration Help Guide
                      </Link>
                      <Link href="/help/documents" className="flex items-center text-sm text-blue-600 hover:underline">
                        <Shield className="w-4 h-4 mr-2" />
                        Required Documents
                      </Link>
                      <Link href="/help/contact" className="flex items-center text-sm text-blue-600 hover:underline">
                        <Mail className="w-4 h-4 mr-2" />
                        Contact Support
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Benefits */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Why Register?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Access Services</p>
                        <p className="text-sm text-gray-600">Get pre-departure training, legal aid, and support</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Track Your Journey</p>
                        <p className="text-sm text-gray-600">Monitor your migration process and case status</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">24/7 Support</p>
                        <p className="text-sm text-gray-600">Access emergency assistance anytime</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Secure & Confidential</p>
                        <p className="text-sm text-gray-600">Your information is protected and encrypted</p>
                      </div>
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
