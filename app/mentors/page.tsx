"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Award,
  BookOpen,
  Briefcase,
  Building2,
  Code,
  Filter,
  GraduationCap,
  Languages,
  LineChart,
  MessageSquare,
  ShieldCheck,
  Target,
  Users,
  X,
  CheckCircle,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mentor data structure
type Specialty =
  | "Leadership Development"
  | "Technical Skills"
  | "Communication"
  | "Sales Training"
  | "Project Management"
  | "Diversity & Inclusion"
  | "Healthcare"
  | "Financial Services"
  | "Technology Transformation"
  | "Executive Coaching"

type Region = "North America" | "Europe" | "Asia Pacific" | "Latin America" | "Middle East & Africa"

interface Mentor {
  id: string
  name: string
  title: string
  image: string
  shortBio: string
  specialty: Specialty
  region: Region
  experience: number
  languages: string[]
  certifications: string[]
  industries: string[]
  fullBio: string
  achievements: string[]
  testimonial?: {
    quote: string
    author: string
    company: string
  }
}

// Sample mentor data
const mentors: Mentor[] = [
  {
    id: "sarah-johnson",
    name: "Sarah Johnson",
    title: "Leadership Development Specialist",
    image: "/placeholder.svg?height=400&width=400",
    shortBio: "15+ years experience in executive coaching and leadership training",
    specialty: "Leadership Development",
    region: "North America",
    experience: 15,
    languages: ["English", "French"],
    certifications: ["Certified Executive Coach", "MBTI Certified Practitioner"],
    industries: ["Technology", "Healthcare", "Finance"],
    fullBio:
      "Sarah Johnson is a seasoned leadership development specialist with over 15 years of experience working with Fortune 500 executives. Her approach combines proven leadership frameworks with personalized coaching to help leaders reach their full potential. Sarah specializes in transformational leadership, emotional intelligence, and building high-performing teams.",
    achievements: [
      "Developed leadership programs for 20+ Fortune 500 companies",
      "Published author of 'Leading with Purpose' (2018)",
      "Keynote speaker at Global Leadership Summit 2021",
    ],
    testimonial: {
      quote:
        "Sarah's leadership program transformed our executive team. Her insights and coaching style brought out the best in each leader.",
      author: "James Wilson",
      company: "CEO, TechInnovate",
    },
  },
  {
    id: "michael-chen",
    name: "Michael Chen",
    title: "Technical Skills Trainer",
    image: "/placeholder.svg?height=400&width=400",
    shortBio: "Former CTO with expertise in digital transformation and technical upskilling",
    specialty: "Technical Skills",
    region: "Asia Pacific",
    experience: 18,
    languages: ["English", "Mandarin", "Japanese"],
    certifications: ["AWS Certified Solutions Architect", "Google Cloud Professional", "Certified Scrum Master"],
    industries: ["Technology", "E-commerce", "Manufacturing"],
    fullBio:
      "Michael Chen brings 18 years of hands-on technical leadership experience to his training programs. As a former CTO of a multinational technology company, Michael understands the challenges organizations face in keeping their technical teams current with rapidly evolving technologies. His training programs focus on practical applications and real-world problem solving.",
    achievements: [
      "Led digital transformation initiatives for 30+ enterprise clients",
      "Developed proprietary technical assessment framework",
      "Technical advisor to 3 successful tech startups",
    ],
  },
  {
    id: "elena-rodriguez",
    name: "Elena Rodriguez",
    title: "Communication Coach",
    image: "/placeholder.svg?height=400&width=400",
    shortBio: "Specializes in improving team dynamics and interpersonal communication",
    specialty: "Communication",
    region: "Europe",
    experience: 12,
    languages: ["English", "Spanish", "Portuguese"],
    certifications: ["Certified Professional Coach", "Advanced Communicator Gold (Toastmasters)"],
    industries: ["Media", "Professional Services", "Nonprofit"],
    fullBio:
      "Elena Rodriguez is passionate about helping professionals communicate with clarity, confidence, and impact. With a background in organizational psychology and 12 years of coaching experience, Elena helps teams overcome communication barriers and build stronger relationships. Her workshops are highly interactive and provide practical tools that participants can immediately apply.",
    achievements: [
      "Developed communication training programs for multinational teams",
      "Regular contributor to Harvard Business Review",
      "Host of 'Clear Communication' podcast with 500,000+ downloads",
    ],
    testimonial: {
      quote:
        "Elena's communication workshop transformed how our global team collaborates. We've seen measurable improvements in project outcomes and team satisfaction.",
      author: "Maria Santos",
      company: "Global Operations Director, MediaCorp",
    },
  },
  {
    id: "david-park",
    name: "David Park",
    title: "Sales Training Expert",
    image: "/placeholder.svg?height=400&width=400",
    shortBio: "Developed award-winning sales methodologies for Fortune 500 companies",
    specialty: "Sales Training",
    region: "North America",
    experience: 20,
    languages: ["English", "Korean"],
    certifications: ["Certified Sales Leader", "SPIN Selling Certified"],
    industries: ["Technology", "Financial Services", "Pharmaceuticals"],
    fullBio:
      "David Park has transformed sales organizations across multiple industries with his data-driven approach to sales training. With 20 years of experience leading high-performing sales teams, David combines proven methodologies with innovative techniques to help sales professionals exceed their targets. His training programs focus on consultative selling, negotiation skills, and building long-term client relationships.",
    achievements: [
      "Developed sales training programs that increased revenue by average of 32%",
      "Author of 'Consultative Selling in the Digital Age'",
      "Sales Training Leader of the Year, 2020",
    ],
  },
  {
    id: "olivia-thompson",
    name: "Olivia Thompson",
    title: "Diversity & Inclusion Specialist",
    image: "/placeholder.svg?height=400&width=400",
    shortBio: "Helps organizations build inclusive cultures that drive innovation and engagement",
    specialty: "Diversity & Inclusion",
    region: "North America",
    experience: 14,
    languages: ["English"],
    certifications: ["Certified Diversity Professional", "Inclusive Leadership Certification"],
    industries: ["Technology", "Healthcare", "Education", "Financial Services"],
    fullBio:
      "Olivia Thompson is dedicated to helping organizations create more inclusive workplaces where all employees can thrive. With 14 years of experience in diversity, equity, and inclusion work, Olivia brings both strategic vision and practical implementation expertise to her training programs. She specializes in unconscious bias training, inclusive leadership development, and building equitable systems and processes.",
    achievements: [
      "Developed DEI strategies for 50+ global organizations",
      "Featured speaker at Inclusion Works Conference 2022",
      "Recipient of Diversity Champion Award, 2021",
    ],
  },
  {
    id: "marcus-johnson",
    name: "Marcus Johnson",
    title: "Project Management Coach",
    image: "/placeholder.svg?height=400&width=400",
    shortBio: "PMP certified with experience leading complex global projects across industries",
    specialty: "Project Management",
    region: "Europe",
    experience: 16,
    languages: ["English", "German"],
    certifications: ["Project Management Professional (PMP)", "Agile Certified Practitioner", "PRINCE2 Practitioner"],
    industries: ["Construction", "IT", "Healthcare", "Manufacturing"],
    fullBio:
      "Marcus Johnson brings 16 years of hands-on project management experience to his training programs. Having led multi-million dollar projects across four continents, Marcus understands the real-world challenges project managers face. His training combines traditional project management methodologies with agile approaches, giving participants a comprehensive toolkit for managing projects of any size or complexity.",
    achievements: [
      "Managed projects with combined budget of over $500 million",
      "Developed proprietary project risk assessment framework",
      "Contributed to the PMBOK Guide 7th Edition",
    ],
    testimonial: {
      quote:
        "Marcus's project management training gave our team practical tools we could implement immediately. Six months later, we're seeing significant improvements in on-time delivery and budget management.",
      author: "Thomas Weber",
      company: "Operations Director, EuroConstruct",
    },
  },
  {
    id: "dr-jennifer-lee",
    name: "Dr. Jennifer Lee",
    title: "Healthcare Industry Expert",
    image: "/placeholder.svg?height=400&width=400",
    shortBio: "Former hospital administrator with expertise in healthcare management and compliance",
    specialty: "Healthcare",
    region: "North America",
    experience: 22,
    languages: ["English"],
    certifications: ["MD", "MBA", "Certified Healthcare Executive"],
    industries: ["Healthcare", "Pharmaceuticals", "Medical Devices"],
    fullBio:
      "Dr. Jennifer Lee combines her medical background with extensive healthcare administration experience to deliver specialized training for healthcare organizations. With 22 years in the field, including roles as Chief Medical Officer and Hospital Administrator, Dr. Lee brings deep industry knowledge to her programs. She specializes in healthcare leadership, patient experience improvement, and regulatory compliance.",
    achievements: [
      "Led hospital system to top 5% national ranking in patient satisfaction",
      "Developed healthcare compliance training adopted by 200+ facilities",
      "Published researcher with 15+ articles in medical journals",
    ],
  },
  {
    id: "thomas-wright",
    name: "Thomas Wright",
    title: "Financial Services Specialist",
    image: "/placeholder.svg?height=400&width=400",
    shortBio: "Former investment banker with deep knowledge of financial regulations and best practices",
    specialty: "Financial Services",
    region: "Europe",
    experience: 25,
    languages: ["English", "French", "Italian"],
    certifications: ["CFA", "Certified Anti-Money Laundering Specialist", "Financial Risk Manager"],
    industries: ["Banking", "Insurance", "Investment Management", "Fintech"],
    fullBio:
      "Thomas Wright brings 25 years of financial services experience to his specialized training programs. Having held senior positions at global investment banks and served as a regulatory advisor, Thomas offers unique insights into both operational excellence and compliance requirements. His training programs help financial services professionals navigate complex regulations while maintaining operational efficiency.",
    achievements: [
      "Developed compliance training programs for 5 of the world's largest banks",
      "Advisor to European Banking Authority on training standards",
      "Author of 'Compliance in the Digital Age: A Guide for Financial Institutions'",
    ],
  },
  {
    id: "priya-patel",
    name: "Priya Patel",
    title: "Technology Transformation Expert",
    image: "/placeholder.svg?height=400&width=400",
    shortBio: "Specializes in helping organizations navigate digital transformation and technology adoption",
    specialty: "Technology Transformation",
    region: "Asia Pacific",
    experience: 17,
    languages: ["English", "Hindi", "Gujarati"],
    certifications: ["Digital Transformation Certified", "ITIL Master", "SAFe Program Consultant"],
    industries: ["Technology", "Retail", "Financial Services", "Manufacturing"],
    fullBio:
      "Priya Patel guides organizations through successful digital transformation journeys. With 17 years of experience leading technology initiatives across multiple industries, Priya understands the technical, operational, and human aspects of digital change. Her training programs focus on building digital capabilities, managing change effectively, and creating a culture of innovation and continuous improvement.",
    achievements: [
      "Led digital transformation initiatives for Fortune 500 companies across 3 continents",
      "Developed Digital Readiness Assessment framework used by 100+ organizations",
      "Keynote speaker at Digital Transformation World Forum 2022",
    ],
    testimonial: {
      quote:
        "Priya's training program was instrumental in preparing our organization for digital transformation. Her practical approach and deep expertise made a complex journey manageable.",
      author: "Rajiv Mehta",
      company: "CIO, Global Retail Solutions",
    },
  },
  {
    id: "robert-thompson",
    name: "Robert Thompson",
    title: "Executive Coach & CEO Mentor",
    image: "/placeholder.svg?height=400&width=400",
    shortBio: "Former Fortune 500 CEO with expertise in strategic leadership and organizational transformation",
    specialty: "Executive Coaching",
    region: "North America",
    experience: 30,
    languages: ["English"],
    certifications: ["Certified Executive Coach", "Board Director Certification"],
    industries: ["Technology", "Manufacturing", "Consumer Goods", "Energy"],
    fullBio:
      "Robert Thompson draws on 30 years of C-suite experience to mentor and coach senior executives. As a former CEO of a Fortune 500 company, Robert understands the unique challenges of top leadership roles. His coaching focuses on strategic decision-making, organizational transformation, and building high-performing executive teams. Robert's approach combines proven leadership frameworks with practical wisdom gained from real-world experience.",
    achievements: [
      "Led company transformation resulting in 300% increase in shareholder value",
      "Board member for 5 public companies",
      "Author of 'The Transformational CEO' bestseller",
    ],
  },
  {
    id: "sophia-martinez",
    name: "Dr. Sophia Martinez",
    title: "Learning & Development Strategist",
    image: "/placeholder.svg?height=400&width=400",
    shortBio: "PhD in Organizational Psychology with expertise in adult learning methodologies",
    specialty: "Leadership Development",
    region: "Latin America",
    experience: 20,
    languages: ["English", "Spanish", "Portuguese"],
    certifications: ["PhD Organizational Psychology", "Master Learning Facilitator", "Instructional Design Certified"],
    industries: ["Education", "Technology", "Healthcare", "Manufacturing"],
    fullBio:
      "Dr. Sophia Martinez combines academic rigor with practical application in her approach to learning and development. With a PhD in Organizational Psychology and 20 years of experience designing learning programs for global organizations, Sophia brings deep expertise in how adults learn and how organizations can build effective learning cultures. Her training programs are based on the latest research and designed to deliver measurable results.",
    achievements: [
      "Designed award-winning leadership development program implemented in 25 countries",
      "Published researcher with 20+ articles in leading journals",
      "Developer of Learning Impact Measurement methodology adopted by multinational organizations",
    ],
    testimonial: {
      quote:
        "Dr. Martinez transformed our approach to learning and development. Her evidence-based methods and strategic insights have created lasting impact across our organization.",
      author: "Carlos Vega",
      company: "Chief People Officer, Global Innovations",
    },
  },
  {
    id: "james-wilson",
    name: "James Wilson",
    title: "Client Success Director",
    image: "/placeholder.svg?height=400&width=400",
    shortBio: "Dedicated to ensuring our clients achieve their desired outcomes through our programs",
    specialty: "Leadership Development",
    region: "North America",
    experience: 15,
    languages: ["English"],
    certifications: ["Certified Customer Experience Professional", "Six Sigma Black Belt"],
    industries: ["Professional Services", "Technology", "Retail"],
    fullBio:
      "James Wilson leads our client success team with a relentless focus on delivering exceptional results. With a background in management consulting and 15 years of experience in client-facing roles, James understands how to align training initiatives with business objectives. He works closely with clients to define success metrics and ensure our training programs deliver measurable impact.",
    achievements: [
      "Developed client success methodology that increased renewal rates by 40%",
      "Led implementation of training programs for 200+ enterprise clients",
      "Pioneer of outcome-based training measurement framework",
    ],
  },
]

// Filter options
const specialties: Specialty[] = [
  "Leadership Development",
  "Technical Skills",
  "Communication",
  "Sales Training",
  "Project Management",
  "Diversity & Inclusion",
  "Healthcare",
  "Financial Services",
  "Technology Transformation",
  "Executive Coaching",
]

const regions: Region[] = ["North America", "Europe", "Asia Pacific", "Latin America", "Middle East & Africa"]

export default function MentorsPage() {
  const [activeFilters, setActiveFilters] = useState<{
    specialty: Specialty | "All"
    region: Region | "All"
  }>({
    specialty: "All",
    region: "All",
  })

  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null)

  // Filter mentors based on active filters
  const filteredMentors = mentors.filter((mentor) => {
    const matchesSpecialty = activeFilters.specialty === "All" || mentor.specialty === activeFilters.specialty
    const matchesRegion = activeFilters.region === "All" || mentor.region === activeFilters.region
    return matchesSpecialty && matchesRegion
  })

  // Function to get specialty icon
  const getSpecialtyIcon = (specialty: Specialty) => {
    switch (specialty) {
      case "Leadership Development":
        return <Target className="h-5 w-5" />
      case "Technical Skills":
        return <Code className="h-5 w-5" />
      case "Communication":
        return <MessageSquare className="h-5 w-5" />
      case "Sales Training":
        return <LineChart className="h-5 w-5" />
      case "Project Management":
        return <Briefcase className="h-5 w-5" />
      case "Diversity & Inclusion":
        return <Users className="h-5 w-5" />
      case "Healthcare":
        return <ShieldCheck className="h-5 w-5" />
      case "Financial Services":
        return <Building2 className="h-5 w-5" />
      case "Technology Transformation":
        return <BookOpen className="h-5 w-5" />
      case "Executive Coaching":
        return <Award className="h-5 w-5" />
      default:
        return <GraduationCap className="h-5 w-5" />
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <BookOpen className="h-5 w-5" />
            <span>TrainingPro</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Services
            </Link>
            <Link href="/mentors" className="text-sm font-medium text-primary">
              Mentors
            </Link>
            <Link
              href="/success-stories"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Success Stories
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Contact Us
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild className="hidden md:flex">
              <Link href="/contact">Get Started</Link>
            </Button>
            <Button variant="outline" size="icon" className="md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Our Global Experts</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Meet our world-class mentors and trainers who bring decades of industry experience to transform your
                  organization
                </p>
              </div>
              <div className="w-full max-w-sm">
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/contact">Request a Specific Expert</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="w-full py-8 border-b">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-muted-foreground" />
                <h2 className="text-lg font-semibold">Filter Experts</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:w-auto">
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="specialty-filter" className="text-sm font-medium">
                    Specialty
                  </label>
                  <select
                    id="specialty-filter"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    value={activeFilters.specialty}
                    onChange={(e) =>
                      setActiveFilters({ ...activeFilters, specialty: e.target.value as Specialty | "All" })
                    }
                  >
                    <option value="All">All Specialties</option>
                    {specialties.map((specialty) => (
                      <option key={specialty} value={specialty}>
                        {specialty}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="region-filter" className="text-sm font-medium">
                    Region
                  </label>
                  <select
                    id="region-filter"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    value={activeFilters.region}
                    onChange={(e) => setActiveFilters({ ...activeFilters, region: e.target.value as Region | "All" })}
                  >
                    <option value="All">All Regions</option>
                    {regions.map((region) => (
                      <option key={region} value={region}>
                        {region}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Active filters display */}
            {(activeFilters.specialty !== "All" || activeFilters.region !== "All") && (
              <div className="flex flex-wrap gap-2 mt-4">
                {activeFilters.specialty !== "All" && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    {activeFilters.specialty}
                    <button
                      onClick={() => setActiveFilters({ ...activeFilters, specialty: "All" })}
                      className="ml-1 rounded-full hover:bg-muted p-0.5"
                    >
                      <X className="h-3 w-3" />
                      <span className="sr-only">Remove filter</span>
                    </button>
                  </Badge>
                )}
                {activeFilters.region !== "All" && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    {activeFilters.region}
                    <button
                      onClick={() => setActiveFilters({ ...activeFilters, region: "All" })}
                      className="ml-1 rounded-full hover:bg-muted p-0.5"
                    >
                      <X className="h-3 w-3" />
                      <span className="sr-only">Remove filter</span>
                    </button>
                  </Badge>
                )}

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setActiveFilters({ specialty: "All", region: "All" })}
                  className="h-7 text-xs"
                >
                  Clear All
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Mentors Grid Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredMentors.length > 0 ? (
                filteredMentors.map((mentor) => (
                  <Dialog key={mentor.id}>
                    <DialogTrigger asChild>
                      <Card className="overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-md">
                        <CardContent className="p-0">
                          <div className="relative">
                            <Image
                              src={mentor.image || "/placeholder.svg"}
                              alt={mentor.name}
                              width={400}
                              height={400}
                              className="w-full aspect-square object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                              <div className="text-white space-y-1">
                                <p className="text-sm font-medium">{mentor.experience}+ years experience</p>
                                <div className="flex flex-wrap gap-1">
                                  {mentor.languages.slice(0, 2).map((language) => (
                                    <Badge
                                      key={language}
                                      variant="outline"
                                      className="bg-black/30 text-white border-white/20 text-xs"
                                    >
                                      {language}
                                    </Badge>
                                  ))}
                                  {mentor.languages.length > 2 && (
                                    <Badge variant="outline" className="bg-black/30 text-white border-white/20 text-xs">
                                      +{mentor.languages.length - 2}
                                    </Badge>
                                  )}
                                </div>
                                <p className="text-sm">Click for full profile</p>
                              </div>
                            </div>
                          </div>
                          <div className="p-4 space-y-2">
                            <div className="flex items-center gap-2">
                              {getSpecialtyIcon(mentor.specialty)}
                              <Badge variant="secondary" className="text-xs">
                                {mentor.specialty}
                              </Badge>
                            </div>
                            <h3 className="font-bold text-lg">{mentor.name}</h3>
                            <p className="text-sm text-muted-foreground">{mentor.title}</p>
                            <p className="text-sm line-clamp-2">{mentor.shortBio}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl">{mentor.name}</DialogTitle>
                        <DialogDescription className="text-base font-medium text-primary">
                          {mentor.title}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 mt-4">
                        <div className="space-y-4">
                          <Image
                            src={mentor.image || "/placeholder.svg"}
                            alt={mentor.name}
                            width={300}
                            height={300}
                            className="w-full rounded-lg object-cover aspect-square"
                          />
                          <div className="space-y-3">
                            <div className="flex items-center gap-2">
                              <Briefcase className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm font-medium">Experience:</span>
                              <span className="text-sm">{mentor.experience}+ years</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Languages className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm font-medium">Languages:</span>
                              <div className="flex flex-wrap gap-1">
                                {mentor.languages.map((language) => (
                                  <Badge key={language} variant="outline" className="text-xs">
                                    {language}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            <div className="flex items-start gap-2">
                              <GraduationCap className="h-4 w-4 text-muted-foreground mt-0.5" />
                              <div className="flex flex-col">
                                <span className="text-sm font-medium">Certifications:</span>
                                <ul className="text-sm list-disc list-inside ml-1">
                                  {mentor.certifications.map((cert, index) => (
                                    <li key={index}>{cert}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                            <div className="flex items-start gap-2">
                              <Building2 className="h-4 w-4 text-muted-foreground mt-0.5" />
                              <div className="flex flex-col">
                                <span className="text-sm font-medium">Industries:</span>
                                <div className="flex flex-wrap gap-1 mt-1">
                                  {mentor.industries.map((industry) => (
                                    <Badge key={industry} variant="secondary" className="text-xs">
                                      {industry}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-lg font-semibold mb-2">About</h4>
                            <p className="text-sm text-muted-foreground">{mentor.fullBio}</p>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold mb-2">Key Achievements</h4>
                            <ul className="text-sm space-y-2">
                              {mentor.achievements.map((achievement, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <Award className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          {mentor.testimonial && (
                            <div className="bg-muted p-4 rounded-lg">
                              <h4 className="text-lg font-semibold mb-2">Client Testimonial</h4>
                              <blockquote className="text-sm italic">"{mentor.testimonial.quote}"</blockquote>
                              <div className="mt-2 text-sm font-medium">
                                {mentor.testimonial.author}, {mentor.testimonial.company}
                              </div>
                            </div>
                          )}
                          <div className="pt-4">
                            <Button asChild>
                              <Link href={`/contact?mentor=${mentor.id}`}>Request This Expert</Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                ))
              ) : (
                <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
                  <Users className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-xl font-bold">No experts match your filters</h3>
                  <p className="text-muted-foreground mt-2 max-w-md">
                    Try adjusting your filter criteria or{" "}
                    <Link href="/contact" className="text-primary hover:underline">
                      contact us
                    </Link>{" "}
                    to find an expert that matches your specific needs.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4"
                    onClick={() => setActiveFilters({ specialty: "All", region: "All" })}
                  >
                    Clear All Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Expertise Categories */}
        <section className="w-full py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Areas of Expertise</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our experts cover a wide range of specialties to meet your organization's training needs
                </p>
              </div>
            </div>

            <Tabs defaultValue="leadership" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
                <TabsTrigger value="leadership">Leadership</TabsTrigger>
                <TabsTrigger value="technical">Technical</TabsTrigger>
                <TabsTrigger value="soft-skills">Soft Skills</TabsTrigger>
                <TabsTrigger value="industry">Industry-Specific</TabsTrigger>
                <TabsTrigger value="certification">Certification</TabsTrigger>
              </TabsList>
              <TabsContent value="leadership" className="p-4 bg-background rounded-lg mt-4 border">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">Leadership Development</h3>
                    <p className="text-muted-foreground">
                      Our leadership experts help develop effective leaders at all levels of your organization, from
                      emerging leaders to C-suite executives.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Executive leadership coaching</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Strategic decision-making</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Change management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Building high-performing teams</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      width={500}
                      height={300}
                      alt="Leadership Development"
                      className="rounded-lg object-cover w-full h-full"
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="technical" className="p-4 bg-background rounded-lg mt-4 border">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">Technical Skills</h3>
                    <p className="text-muted-foreground">
                      Our technical experts provide training on cutting-edge technologies and methodologies to keep your
                      workforce competitive.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Software development and programming</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Cloud computing and infrastructure</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Data analysis and visualization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Cybersecurity and compliance</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      width={500}
                      height={300}
                      alt="Technical Skills"
                      className="rounded-lg object-cover w-full h-full"
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="soft-skills" className="p-4 bg-background rounded-lg mt-4 border">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">Soft Skills & Communication</h3>
                    <p className="text-muted-foreground">
                      Our communication experts help your teams collaborate effectively and build stronger professional
                      relationships.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Effective business communication</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Presentation and public speaking</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Conflict resolution and negotiation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Emotional intelligence in the workplace</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      width={500}
                      height={300}
                      alt="Soft Skills & Communication"
                      className="rounded-lg object-cover w-full h-full"
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="industry" className="p-4 bg-background rounded-lg mt-4 border">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">Industry-Specific Training</h3>
                    <p className="text-muted-foreground">
                      Our industry experts provide specialized training tailored to the unique challenges and
                      regulations of your sector.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Healthcare compliance and patient care</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Financial services regulations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Manufacturing safety and quality control</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Retail customer service excellence</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      width={500}
                      height={300}
                      alt="Industry-Specific Training"
                      className="rounded-lg object-cover w-full h-full"
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="certification" className="p-4 bg-background rounded-lg mt-4 border">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">Certification Programs</h3>
                    <p className="text-muted-foreground">
                      Our certification experts help your employees earn industry-recognized credentials that validate
                      their skills and expertise.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Project Management Professional (PMP)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Six Sigma and Lean methodologies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>IT certifications (AWS, Azure, CompTIA)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>HR certification preparation</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      width={500}
                      height={300}
                      alt="Certification Programs"
                      className="rounded-lg object-cover w-full h-full"
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Work With Our Experts</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ready to transform your organization with our expert mentors? Contact us today to get started.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-background">
        <div className="container flex flex-col gap-6 py-8 md:py-12">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Company</h3>
              <ul className="space-y-1">
                <li>
                  <Link href="/about" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mentors"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Services</h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="/services"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Custom Training
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Leadership Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Professional Certification
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Consulting
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Resources</h3>
              <ul className="space-y-1">
                <li>
                  <Link href="/blog" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Guides
                  </Link>
                </li>
                <li>
                  <Link
                    href="/webinars"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Webinars
                  </Link>
                </li>
                <li>
                  <Link
                    href="/case-studies"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Case Studies
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Legal</h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="/privacy"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cookies"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2 font-bold">
              <BookOpen className="h-5 w-5" />
              <span>TrainingPro</span>
            </div>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} TrainingPro. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
