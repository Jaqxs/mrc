"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Briefcase, MapPin, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

const jobListings = [
  {
    id: 1,
    title: "Nurse",
    company: "General Hospital",
    location: "London, UK",
    type: "Full-time",
    posted: "2 days ago",
    description: "We are looking for a dedicated nurse to join our team...",
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "Tech Solutions Inc.",
    location: "New York, USA",
    type: "Full-time",
    posted: "5 days ago",
    description: "Seeking a skilled software engineer with experience in React and Node.js...",
  },
  {
    id: 3,
    title: "Accountant",
    company: "Global Finance Ltd.",
    location: "Toronto, Canada",
    type: "Full-time",
    posted: "1 week ago",
    description: "We need an experienced accountant to manage our financial records...",
  },
]

export default function JobsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterLocation, setFilterLocation] = useState("All Locations")
  const [filterType, setFilterType] = useState("All Types")

  const filteredJobs = jobListings.filter((job) => {
    const searchMatch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase())
    const locationMatch =
      filterLocation === "All Locations" || job.location.toLowerCase().includes(filterLocation.toLowerCase())
    const typeMatch = filterType === "All Types" || job.type === filterType
    return searchMatch && locationMatch && typeMatch
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="shadow-lg">
        <CardHeader className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0 p-6">
          <CardTitle className="text-2xl font-bold">Overseas Job Listings</CardTitle>
          <CardDescription>Explore opportunities to work abroad</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search jobs..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div>
              <Select value={filterLocation} onValueChange={setFilterLocation}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Filter by Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All Locations">All Locations</SelectItem>
                  <SelectItem value="London">London</SelectItem>
                  <SelectItem value="New York">New York</SelectItem>
                  <SelectItem value="Toronto">Toronto</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Filter by Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All Types">All Types</SelectItem>
                  <SelectItem value="Full-time">Full-time</SelectItem>
                  <SelectItem value="Part-time">Part-time</SelectItem>
                  <SelectItem value="Contract">Contract</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="mt-8 space-y-6">
            {filteredJobs.map((job) => (
              <Card key={job.id} className="shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg font-semibold">{job.title}</CardTitle>
                      <CardDescription className="text-gray-600">
                        <Link href={`/jobs/${job.id}`}>{job.company}</Link>
                      </CardDescription>
                      <div className="flex items-center space-x-2 mt-2 text-sm text-gray-500">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                        <Briefcase className="w-4 h-4" />
                        <span>{job.type}</span>
                        <Clock className="w-4 h-4" />
                        <span>Posted {job.posted}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/jobs/${job.id}`}>
                        Apply Now
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
