"use client"

import React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, ArrowRight, Upload, FileText, User, Briefcase, Globe, CheckCircle, AlertCircle } from "lucide-react"

const steps = [
  { id: 1, title: "Personal Information", icon: User },
  { id: 2, title: "Professional Details", icon: Briefcase },
  { id: 3, title: "Documents & Files", icon: FileText },
  { id: 4, title: "Review & Submit", icon: CheckCircle },
]

export default function JobApplicationPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    nationality: "",
    currentLocation: "",
    passportNumber: "",
    maritalStatus: "",

    // Professional Details
    currentJobTitle: "",
    yearsExperience: "",
    education: "",
    languages: [],
    skills: "",
    previousSalary: "",
    expectedSalary: "",
    availabilityDate: "",

    // Additional Information
    hasWorkVisa: "",
    willingToRelocate: "",
    coverLetter: "",

    // Documents
    resume: null,
    coverLetterFile: null,
    certificates: [],
    passport: null,

    // Agreements
    agreeTerms: false,
    agreePrivacy: false,
    agreeMarketing: false,
  })

  const progress = (currentStep / steps.length) * 100

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = () => {
    // Handle form submission
    console.log("Form submitted:", formData)
    // Redirect to success page or show success message
  }

  const currentStepIcon = steps[currentStep - 1].icon
  const currentStepTitle = steps[currentStep - 1].title

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Button variant="ghost" className="text-white hover:bg-white/20 mr-4" asChild>
                <Link href="/jobs">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Jobs
                </Link>
              </Button>
              <div>
                <h1 className="text-2xl font-bold">Job Application</h1>
                <p className="text-blue-200">Complete your application in {steps.length} easy steps</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-blue-200 mb-1">
                Step {currentStep} of {steps.length}
              </div>
              <Progress value={progress} className="w-48 h-2" />
            </div>
          </div>
        </div>
      </div>

      {/* Step Navigation */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`flex items-center space-x-3 ${
                  step.id === currentStep
                    ? "text-blue-600"
                    : step.id < currentStep
                      ? "text-green-600"
                      : "text-slate-400"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    step.id === currentStep
                      ? "bg-blue-100 border-2 border-blue-600"
                      : step.id < currentStep
                        ? "bg-green-100 border-2 border-green-600"
                        : "bg-slate-100 border-2 border-slate-300"
                  }`}
                >
                  {step.id < currentStep ? <CheckCircle className="w-5 h-5" /> : <step.icon className="w-5 h-5" />}
                </div>
                <span className="font-medium hidden md:block">{step.title}</span>
                {index < steps.length - 1 && <div className="w-12 h-0.5 bg-slate-300 mx-4 hidden md:block"></div>}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center">
                {React.createElement(currentStepIcon, { className: "w-6 h-6 mr-3" })}
                {currentStepTitle}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        placeholder="Enter your first name"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        placeholder="Enter your last name"
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your.email@example.com"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+255 123 456 789"
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                      <Input
                        id="dateOfBirth"
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="nationality">Nationality *</Label>
                      <Select
                        value={formData.nationality}
                        onValueChange={(value) => handleInputChange("nationality", value)}
                      >
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select your nationality" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="tanzanian">Tanzanian</SelectItem>
                          <SelectItem value="kenyan">Kenyan</SelectItem>
                          <SelectItem value="ugandan">Ugandan</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="currentLocation">Current Location *</Label>
                      <Input
                        id="currentLocation"
                        value={formData.currentLocation}
                        onChange={(e) => handleInputChange("currentLocation", e.target.value)}
                        placeholder="City, Country"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="passportNumber">Passport Number</Label>
                      <Input
                        id="passportNumber"
                        value={formData.passportNumber}
                        onChange={(e) => handleInputChange("passportNumber", e.target.value)}
                        placeholder="Enter passport number"
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div>
                    <Label>Marital Status</Label>
                    <RadioGroup
                      value={formData.maritalStatus}
                      onValueChange={(value) => handleInputChange("maritalStatus", value)}
                      className="mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="single" id="single" />
                        <Label htmlFor="single">Single</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="married" id="married" />
                        <Label htmlFor="married">Married</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="divorced" id="divorced" />
                        <Label htmlFor="divorced">Divorced</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              )}

              {/* Step 2: Professional Details */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="currentJobTitle">Current Job Title *</Label>
                      <Input
                        id="currentJobTitle"
                        value={formData.currentJobTitle}
                        onChange={(e) => handleInputChange("currentJobTitle", e.target.value)}
                        placeholder="e.g., Registered Nurse"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="yearsExperience">Years of Experience *</Label>
                      <Select
                        value={formData.yearsExperience}
                        onValueChange={(value) => handleInputChange("yearsExperience", value)}
                      >
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select experience level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0-1">0-1 years</SelectItem>
                          <SelectItem value="2-3">2-3 years</SelectItem>
                          <SelectItem value="4-5">4-5 years</SelectItem>
                          <SelectItem value="6-10">6-10 years</SelectItem>
                          <SelectItem value="10+">10+ years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="education">Highest Education Level *</Label>
                    <Select value={formData.education} onValueChange={(value) => handleInputChange("education", value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select education level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="high-school">High School</SelectItem>
                        <SelectItem value="diploma">Diploma</SelectItem>
                        <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                        <SelectItem value="master">Master's Degree</SelectItem>
                        <SelectItem value="phd">PhD</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="skills">Key Skills & Competencies *</Label>
                    <Textarea
                      id="skills"
                      value={formData.skills}
                      onChange={(e) => handleInputChange("skills", e.target.value)}
                      placeholder="List your key skills, certifications, and competencies..."
                      className="mt-2 h-32"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="previousSalary">Previous Salary (USD)</Label>
                      <Input
                        id="previousSalary"
                        value={formData.previousSalary}
                        onChange={(e) => handleInputChange("previousSalary", e.target.value)}
                        placeholder="e.g., 2000"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="expectedSalary">Expected Salary (USD) *</Label>
                      <Input
                        id="expectedSalary"
                        value={formData.expectedSalary}
                        onChange={(e) => handleInputChange("expectedSalary", e.target.value)}
                        placeholder="e.g., 4500"
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="availabilityDate">Available Start Date *</Label>
                    <Input
                      id="availabilityDate"
                      type="date"
                      value={formData.availabilityDate}
                      onChange={(e) => handleInputChange("availabilityDate", e.target.value)}
                      className="mt-2"
                    />
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label>Do you have a valid work visa for the destination country?</Label>
                      <RadioGroup
                        value={formData.hasWorkVisa}
                        onValueChange={(value) => handleInputChange("hasWorkVisa", value)}
                        className="mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="visa-yes" />
                          <Label htmlFor="visa-yes">Yes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="visa-no" />
                          <Label htmlFor="visa-no">No</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="applying" id="visa-applying" />
                          <Label htmlFor="visa-applying">Currently applying</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <Label>Are you willing to relocate internationally?</Label>
                      <RadioGroup
                        value={formData.willingToRelocate}
                        onValueChange={(value) => handleInputChange("willingToRelocate", value)}
                        className="mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="relocate-yes" />
                          <Label htmlFor="relocate-yes">Yes, immediately</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="within-months" id="relocate-months" />
                          <Label htmlFor="relocate-months">Yes, within 3-6 months</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="relocate-no" />
                          <Label htmlFor="relocate-no">No</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="coverLetter">Cover Letter</Label>
                    <Textarea
                      id="coverLetter"
                      value={formData.coverLetter}
                      onChange={(e) => handleInputChange("coverLetter", e.target.value)}
                      placeholder="Tell us why you're interested in this position and what makes you a great candidate..."
                      className="mt-2 h-40"
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Documents & Files */}
              {currentStep === 3 && (
                <div className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <Card className="border-2 border-dashed border-slate-300 hover:border-blue-400 transition-colors">
                      <CardContent className="p-6 text-center">
                        <Upload className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                        <h3 className="font-semibold text-slate-800 mb-2">Resume/CV *</h3>
                        <p className="text-sm text-slate-600 mb-4">Upload your latest resume (PDF, DOC, DOCX)</p>
                        <Button variant="outline">Choose File</Button>
                      </CardContent>
                    </Card>

                    <Card className="border-2 border-dashed border-slate-300 hover:border-blue-400 transition-colors">
                      <CardContent className="p-6 text-center">
                        <FileText className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                        <h3 className="font-semibold text-slate-800 mb-2">Cover Letter</h3>
                        <p className="text-sm text-slate-600 mb-4">Upload a cover letter (PDF, DOC, DOCX)</p>
                        <Button variant="outline">Choose File</Button>
                      </CardContent>
                    </Card>

                    <Card className="border-2 border-dashed border-slate-300 hover:border-blue-400 transition-colors">
                      <CardContent className="p-6 text-center">
                        <Globe className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                        <h3 className="font-semibold text-slate-800 mb-2">Passport Copy</h3>
                        <p className="text-sm text-slate-600 mb-4">Upload a clear copy of your passport</p>
                        <Button variant="outline">Choose File</Button>
                      </CardContent>
                    </Card>

                    <Card className="border-2 border-dashed border-slate-300 hover:border-blue-400 transition-colors">
                      <CardContent className="p-6 text-center">
                        <CheckCircle className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                        <h3 className="font-semibold text-slate-800 mb-2">Certificates</h3>
                        <p className="text-sm text-slate-600 mb-4">Upload relevant certificates and qualifications</p>
                        <Button variant="outline">Choose Files</Button>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <div className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-blue-800 mb-2">Document Requirements</h4>
                        <ul className="text-sm text-blue-700 space-y-1">
                          <li>• All documents must be in English or officially translated</li>
                          <li>• Maximum file size: 10MB per document</li>
                          <li>• Accepted formats: PDF, DOC, DOCX, JPG, PNG</li>
                          <li>• Ensure all documents are clear and readable</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Review & Submit */}
              {currentStep === 4 && (
                <div className="space-y-8">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <div className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                      <div>
                        <h3 className="font-semibold text-green-800">Application Review</h3>
                        <p className="text-green-700">Please review your information before submitting</p>
                      </div>
                    </div>
                  </div>

                  {/* Summary of application */}
                  <div className="grid md:grid-cols-2 gap-8">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Personal Information</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-slate-600">Name:</span>
                          <span className="font-medium">
                            {formData.firstName} {formData.lastName}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Email:</span>
                          <span className="font-medium">{formData.email}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Phone:</span>
                          <span className="font-medium">{formData.phone}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Nationality:</span>
                          <span className="font-medium">{formData.nationality}</span>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Professional Details</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-slate-600">Current Role:</span>
                          <span className="font-medium">{formData.currentJobTitle}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Experience:</span>
                          <span className="font-medium">{formData.yearsExperience}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Education:</span>
                          <span className="font-medium">{formData.education}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Expected Salary:</span>
                          <span className="font-medium">${formData.expectedSalary}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Terms and Conditions */}
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="terms"
                        checked={formData.agreeTerms}
                        onCheckedChange={(checked) => handleInputChange("agreeTerms", checked)}
                      />
                      <Label htmlFor="terms" className="text-sm leading-relaxed">
                        I agree to the{" "}
                        <Link href="/terms" className="text-blue-600 hover:underline">
                          Terms and Conditions
                        </Link>{" "}
                        and confirm that all information provided is accurate and complete.
                      </Label>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="privacy"
                        checked={formData.agreePrivacy}
                        onCheckedChange={(checked) => handleInputChange("agreePrivacy", checked)}
                      />
                      <Label htmlFor="privacy" className="text-sm leading-relaxed">
                        I agree to the{" "}
                        <Link href="/privacy" className="text-blue-600 hover:underline">
                          Privacy Policy
                        </Link>{" "}
                        and consent to the processing of my personal data for recruitment purposes.
                      </Label>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="marketing"
                        checked={formData.agreeMarketing}
                        onCheckedChange={(checked) => handleInputChange("agreeMarketing", checked)}
                      />
                      <Label htmlFor="marketing" className="text-sm leading-relaxed">
                        I would like to receive updates about similar job opportunities and career resources (optional).
                      </Label>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-8 border-t">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="flex items-center bg-transparent"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>

                {currentStep < steps.length ? (
                  <Button
                    onClick={nextStep}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 flex items-center"
                  >
                    Next
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    disabled={!formData.agreeTerms || !formData.agreePrivacy}
                    className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-emerald-600 hover:to-green-600 flex items-center"
                  >
                    Submit Application
                    <CheckCircle className="w-4 h-4 ml-2" />
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
