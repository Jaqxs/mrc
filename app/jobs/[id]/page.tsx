"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

interface JobDetailsProps {
  params: { id: string }
}

export default function JobDetails({ params }: JobDetailsProps) {
  const jobId = params.id
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
    coverLetter: "",
  })

  const handleChange = (e: any) => {
    const { name, value, type, files } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? files[0] : value,
    }))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form Data:", formData)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="shadow-lg">
        <CardHeader className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0 p-6">
          <CardTitle className="text-2xl font-bold">Job Application</CardTitle>
          <CardDescription>Fill out the form to apply for this position</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="mb-6">
            <Link href="/jobs" className="text-blue-600 hover:underline flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Job Listings
            </Link>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="resume">Resume (PDF/DOCX)</Label>
              <Input type="file" id="resume" name="resume" accept=".pdf,.docx" onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="coverLetter">Cover Letter</Label>
              <Textarea
                id="coverLetter"
                name="coverLetter"
                placeholder="Write your cover letter"
                value={formData.coverLetter}
                onChange={handleChange}
                rows={5}
              />
            </div>
            <Button type="submit" className="w-full">
              Submit Application
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
