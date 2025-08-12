"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableCaption } from "@/components/ui/table"
import { Eye, CheckCircle, AlertCircle, Download, FileText } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const applications = [
  {
    id: 1,
    jobTitle: "Nurse",
    applicantName: "John Doe",
    email: "john.doe@example.com",
    phone: "+255 123 456 789",
    resume: "john_doe_resume.pdf",
    status: "pending",
  },
  {
    id: 2,
    jobTitle: "Software Engineer",
    applicantName: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "+1 555 123 4567",
    resume: "jane_smith_resume.pdf",
    status: "accepted",
  },
  {
    id: 3,
    jobTitle: "Accountant",
    applicantName: "David Lee",
    email: "david.lee@example.com",
    phone: "+44 20 7946 0823",
    resume: "david_lee_resume.pdf",
    status: "rejected",
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "pending":
      return "bg-gray-100 text-gray-800"
    case "accepted":
      return "bg-green-100 text-green-800"
    case "rejected":
      return "bg-red-100 text-red-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export default function ApplicationsPage() {
  const [selectedApplication, setSelectedApplication] = useState(null)

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="shadow-lg">
        <CardHeader className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0 p-6">
          <CardTitle className="text-2xl font-bold">Job Applications</CardTitle>
          <CardDescription>Review and manage job applications</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <Table>
            <TableCaption>A list of job applications in the system.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Job Title</TableHead>
                <TableHead>Applicant Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {applications.map((application) => (
                <TableRow key={application.id}>
                  <TableCell>{application.jobTitle}</TableCell>
                  <TableCell>{application.applicantName}</TableCell>
                  <TableCell>{application.email}</TableCell>
                  <TableCell>{application.phone}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(application.status)}>{application.status}</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm" onClick={() => setSelectedApplication(application)}>
                      <Eye className="w-4 h-4 mr-2" />
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Application Details Modal */}
      {selectedApplication && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <Card className="w-full max-w-2xl">
            <CardHeader>
              <CardTitle>Application Details</CardTitle>
              <CardDescription>Details for {selectedApplication.applicantName}</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <p className="font-semibold">Job Title:</p>
                  <p>{selectedApplication.jobTitle}</p>
                </div>
                <div>
                  <p className="font-semibold">Applicant Name:</p>
                  <p>{selectedApplication.applicantName}</p>
                </div>
                <div>
                  <p className="font-semibold">Email:</p>
                  <p>{selectedApplication.email}</p>
                </div>
                <div>
                  <p className="font-semibold">Phone:</p>
                  <p>{selectedApplication.phone}</p>
                </div>
                <div>
                  <p className="font-semibold">Resume:</p>
                  <div className="flex items-center">
                    <FileText className="w-4 h-4 mr-2" />
                    <a href="#" className="text-blue-600 hover:underline">
                      {selectedApplication.resume}
                    </a>
                    <Button variant="ghost" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
                <div className="flex justify-end space-x-2">
                  <Button variant="secondary" onClick={() => setSelectedApplication(null)}>
                    Close
                  </Button>
                  <Button variant="outline">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Accept
                  </Button>
                  <Button variant="destructive">
                    <AlertCircle className="w-4 h-4 mr-2" />
                    Reject
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
