"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Award, BookOpen, Building2, Filter, LineChart, Quote, Star, TrendingUp, Users, X } from "lucide-react"

import { Button } from "@/components/ui/button-enhanced"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card-enhanced"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { FadeIn, ScaleIn, StaggeredContainer, CountUp, FloatingElement } from "@/components/ui/animations"
import { ScrollToTop } from "@/components/scroll-to-top"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card-enhanced"

// Types for our data
type Industry =
  | "Technology"
  | "Healthcare"
  | "Finance"
  | "Manufacturing"
  | "Retail"
  | "Education"
  | "Professional Services"

type TrainingType =
  | "Leadership Development"
  | "Technical Skills"
  | "Sales Training"
  | "Team Building"
  | "Compliance"
  | "Customer Service"
  | "Project Management"

interface CaseStudy {
  id: string
  company: string
  logo: string
  industry: Industry
  trainingType: TrainingType
  challenge: string
  solution: string
  results: {
    text: string
    metric?: string
    percentage?: number
  }[]
  testimonial?: {
    quote: string
    author: string
    title: string
    image?: string
  }
  featured: boolean
}

interface Testimonial {
  id: string
  quote: string
  author: string
  title: string
  company: string
  logo: string
  image?: string
  rating: number
}

interface Partner {
  id: string
  name: string
  logo: string
  industry: Industry
}

// Sample data
const caseStudies: CaseStudy[] = [
  {
    id: "global-tech-solutions",
    company: "Global Tech Solutions",
    logo: "/placeholder.svg?height=80&width=200",
    industry: "Technology",
    trainingType: "Leadership Development",
    challenge:
      "Global Tech Solutions was experiencing high management turnover and low employee engagement scores. They needed a comprehensive leadership development program to transform their management culture and improve retention.",
    solution:
      "We developed a 6-month leadership excellence program for 50 managers across their organization. The program included executive coaching, interactive workshops, and action learning projects focused on real business challenges.",
    results: [
      { text: "Increase in employee engagement scores", percentage: 30 },
      { text: "Reduction in management turnover", percentage: 25 },
      { text: "Improvement in project delivery efficiency", percentage: 15 },
    ],
    testimonial: {
      quote:
        "The leadership program transformed our management team. We've seen improved communication, better decision-making, and increased employee satisfaction.",
      author: "David Wilson",
      title: "HR Director",
      image: "/placeholder.svg?height=100&width=100",
    },
    featured: true,
  },
  {
    id: "innovate-retail",
    company: "Innovate Retail",
    logo: "/placeholder.svg?height=80&width=200",
    industry: "Retail",
    trainingType: "Sales Training",
    challenge:
      "Innovate Retail was struggling with inconsistent sales performance across their 25 locations. They needed a standardized sales methodology that could be implemented company-wide to improve customer conversion rates.",
    solution:
      "We designed a custom sales training program that included consultative selling techniques, product knowledge modules, and role-playing scenarios. The program was delivered to 200 sales associates across all locations.",
    results: [
      { text: "Increase in revenue within six months", percentage: 30 },
      { text: "Improvement in customer satisfaction scores", percentage: 22 },
      { text: "Increase in average transaction value", percentage: 18 },
    ],
    testimonial: {
      quote:
        "The custom training program developed for our sales team resulted in a 30% increase in revenue within just six months. The ROI has been exceptional.",
      author: "Jennifer Lee",
      title: "Sales Director",
      image: "/placeholder.svg?height=100&width=100",
    },
    featured: true,
  },
  {
    id: "healthfirst-medical",
    company: "HealthFirst Medical Group",
    logo: "/placeholder.svg?height=80&width=200",
    industry: "Healthcare",
    trainingType: "Leadership Development",
    challenge:
      "HealthFirst Medical Group was expanding rapidly and needed to develop leadership capabilities in their clinical directors who had strong medical backgrounds but limited management experience.",
    solution:
      "We created a healthcare leadership program specifically designed for clinical professionals transitioning to management roles. The program focused on people management, operational efficiency, and patient experience enhancement.",
    results: [
      { text: "Improvement in patient satisfaction scores", percentage: 22 },
      { text: "Reduction in administrative errors", percentage: 35 },
      { text: "Increase in staff retention", percentage: 18 },
    ],
    testimonial: {
      quote:
        "Our partnership with TrainingPro has transformed our leadership culture and improved patient satisfaction scores by 22% in just one year.",
      author: "Dr. Michael Rodriguez",
      title: "Chief Medical Officer",
      image: "/placeholder.svg?height=100&width=100",
    },
    featured: false,
  },
  {
    id: "financial-partners",
    company: "Financial Partners Inc.",
    logo: "/placeholder.svg?height=80&width=200",
    industry: "Finance",
    trainingType: "Compliance",
    challenge:
      "Financial Partners Inc. needed to ensure all employees were up-to-date with the latest regulatory requirements and compliance procedures to avoid potential penalties and audit findings.",
    solution:
      "We developed a comprehensive compliance training program that combined e-learning modules with in-person workshops. The program covered all relevant regulations and included scenario-based assessments to test knowledge application.",
    results: [
      { text: "Reduction in audit findings", percentage: 85 },
      { text: "Estimated savings in potential penalties", metric: "$1.2M" },
      { text: "Improvement in compliance knowledge assessment scores", percentage: 42 },
    ],
    testimonial: {
      quote:
        "The regulatory compliance program developed by TrainingPro reduced our audit findings by 85% and saved us an estimated $1.2M in potential penalties.",
      author: "Sarah Thompson",
      title: "Compliance Director",
      image: "/placeholder.svg?height=100&width=100",
    },
    featured: false,
  },
  {
    id: "technova-solutions",
    company: "TechNova Solutions",
    logo: "/placeholder.svg?height=80&width=200",
    industry: "Technology",
    trainingType: "Technical Skills",
    challenge:
      "TechNova Solutions needed to upskill their engineering team on cloud technologies to support their digital transformation initiative. They required a training program that would minimize disruption to ongoing projects.",
    solution:
      "We designed a blended learning program that combined self-paced online modules with weekly instructor-led sessions. The program included hands-on labs and real-world projects to ensure practical skill development.",
    results: [
      { text: "Reduction in development time", percentage: 35 },
      { text: "Improvement in code quality metrics", percentage: 28 },
      { text: "Decrease in cloud infrastructure costs", percentage: 20 },
    ],
    testimonial: {
      quote:
        "Our engineers completed the certification program and immediately applied their new skills, reducing development time by 35% and improving code quality metrics.",
      author: "James Wilson",
      title: "CTO",
      image: "/placeholder.svg?height=100&width=100",
    },
    featured: false,
  },
  {
    id: "global-manufacturing",
    company: "Global Manufacturing Inc.",
    logo: "/placeholder.svg?height=80&width=200",
    industry: "Manufacturing",
    trainingType: "Team Building",
    challenge:
      "Global Manufacturing Inc. had recently merged with another company and needed to integrate teams from different corporate cultures. They were experiencing communication issues and decreased productivity.",
    solution:
      "We facilitated a series of team integration workshops focused on building trust, establishing shared goals, and developing communication protocols. The program included cross-functional team projects to foster collaboration.",
    results: [
      { text: "Increase in cross-departmental collaboration", percentage: 45 },
      { text: "Improvement in team productivity", percentage: 32 },
      { text: "Reduction in project delays", percentage: 28 },
    ],
    testimonial: {
      quote:
        "The team integration program helped us overcome the cultural barriers following our merger. We're now operating as one cohesive organization rather than two separate entities.",
      author: "Robert Chen",
      title: "Operations Director",
      image: "/placeholder.svg?height=100&width=100",
    },
    featured: false,
  },
]

const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    quote:
      "The leadership program transformed our management team. We've seen improved communication, better decision-making, and increased employee satisfaction.",
    author: "David Wilson",
    title: "HR Director",
    company: "Global Tech Solutions",
    logo: "/placeholder.svg?height=40&width=120",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    id: "testimonial-2",
    quote:
      "The custom training program developed for our sales team resulted in a 30% increase in revenue within just six months. The ROI has been exceptional.",
    author: "Jennifer Lee",
    title: "Sales Director",
    company: "Innovate Retail",
    logo: "/placeholder.svg?height=40&width=120",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    id: "testimonial-3",
    quote:
      "Our partnership with TrainingPro has transformed our leadership culture and improved patient satisfaction scores by 22% in just one year.",
    author: "Dr. Michael Rodriguez",
    title: "Chief Medical Officer",
    company: "HealthFirst Medical Group",
    logo: "/placeholder.svg?height=40&width=120",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    id: "testimonial-4",
    quote:
      "The regulatory compliance program developed by TrainingPro reduced our audit findings by 85% and saved us an estimated $1.2M in potential penalties.",
    author: "Sarah Thompson",
    title: "Compliance Director",
    company: "Financial Partners Inc.",
    logo: "/placeholder.svg?height=40&width=120",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    id: "testimonial-5",
    quote:
      "TrainingPro's certification program has become an essential part of our professional development strategy. Our team is more skilled and confident than ever.",
    author: "Robert Chen",
    title: "Operations Manager",
    company: "Logistics International",
    logo: "/placeholder.svg?height=40&width=120",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    id: "testimonial-6",
    quote:
      "The team-building workshop facilitated by TrainingPro broke down silos between our departments and created a collaborative culture that continues to thrive.",
    author: "Maria Sanchez",
    title: "CEO",
    company: "Creative Solutions Agency",
    logo: "/placeholder.svg?height=40&width=120",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
]

const partners: Partner[] = [
  {
    id: "partner-1",
    name: "Global Tech Solutions",
    logo: "/placeholder.svg?height=80&width=200",
    industry: "Technology",
  },
  {
    id: "partner-2",
    name: "Innovate Retail",
    logo: "/placeholder.svg?height=80&width=200",
    industry: "Retail",
  },
  {
    id: "partner-3",
    name: "HealthFirst Medical Group",
    logo: "/placeholder.svg?height=80&width=200",
    industry: "Healthcare",
  },
  {
    id: "partner-4",
    name: "Financial Partners Inc.",
    logo: "/placeholder.svg?height=80&width=200",
    industry: "Finance",
  },
  {
    id: "partner-5",
    name: "TechNova Solutions",
    logo: "/placeholder.svg?height=80&width=200",
    industry: "Technology",
  },
  {
    id: "partner-6",
    name: "Global Manufacturing Inc.",
    logo: "/placeholder.svg?height=80&width=200",
    industry: "Manufacturing",
  },
  {
    id: "partner-7",
    name: "Logistics International",
    logo: "/placeholder.svg?height=80&width=200",
    industry: "Professional Services",
  },
  {
    id: "partner-8",
    name: "Creative Solutions Agency",
    logo: "/placeholder.svg?height=80&width=200",
    industry: "Professional Services",
  },
  {
    id: "partner-9",
    name: "EduTech Innovations",
    logo: "/placeholder.svg?height=80&width=200",
    industry: "Education",
  },
  {
    id: "partner-10",
    name: "Retail Excellence Group",
    logo: "/placeholder.svg?height=80&width=200",
    industry: "Retail",
  },
]

// Filter options
const industries: Industry[] = [
  "Technology",
  "Healthcare",
  "Finance",
  "Manufacturing",
  "Retail",
  "Education",
  "Professional Services",
]

const trainingTypes: TrainingType[] = [
  "Leadership Development",
  "Technical Skills",
  "Sales Training",
  "Team Building",
  "Compliance",
  "Customer Service",
  "Project Management",
]

export default function SuccessStoriesPage() {
  const [activeFilters, setActiveFilters] = useState<{
    industry: Industry | "All"
    trainingType: TrainingType | "All"
  }>({
    industry: "All",
    trainingType: "All",
  })

  // Filter case studies based on active filters
  const filteredCaseStudies = caseStudies.filter((caseStudy) => {
    const matchesIndustry = activeFilters.industry === "All" || caseStudy.industry === activeFilters.industry
    const matchesTrainingType =
      activeFilters.trainingType === "All" || caseStudy.trainingType === activeFilters.trainingType
    return matchesIndustry && matchesTrainingType
  })

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
            <Link
              href="/mentors"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Mentors
            </Link>
            <Link href="/success-stories" className="text-sm font-medium text-primary">
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted overflow-hidden relative">
          <div className="container px-4 md:px-6 relative z-10">
            <FadeIn direction="up" duration={0.8}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Success Stories</h1>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Discover how our training programs have transformed organizations and delivered measurable results
                  </p>
                </div>
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  <FloatingElement amplitude={8} duration={4}>
                    <div className="flex items-center gap-1 bg-background rounded-full px-4 py-1 border">
                      <TrendingUp className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">500+ Successful Programs</span>
                    </div>
                  </FloatingElement>
                  <FloatingElement amplitude={8} duration={5}>
                    <div className="flex items-center gap-1 bg-background rounded-full px-4 py-1 border">
                      <Building2 className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">200+ Enterprise Clients</span>
                    </div>
                  </FloatingElement>
                  <FloatingElement amplitude={8} duration={4.5}>
                    <div className="flex items-center gap-1 bg-background rounded-full px-4 py-1 border">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">50,000+ Professionals Trained</span>
                    </div>
                  </FloatingElement>
                </div>
              </div>
            </FadeIn>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 z-0"></div>
        </section>

        {/* Testimonial Carousel */}
        <section className="w-full py-12 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <FadeIn direction="up">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Client Testimonials</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Hear directly from the professionals who have experienced our training programs
                  </p>
                </div>
              </div>
            </FadeIn>

            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                    <ScaleIn delay={index * 0.1}>
                      <div className="p-1">
                        <Card className="h-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                          <CardContent className="p-6 flex flex-col justify-between h-full">
                            <div className="space-y-4">
                              <div className="flex justify-between items-start">
                                <Quote className="h-8 w-8 text-primary/20" />
                                <div className="flex items-center gap-0.5 text-amber-500">
                                  {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-current" />
                                  ))}
                                </div>
                              </div>
                              <blockquote className="text-sm italic">"{testimonial.quote}"</blockquote>
                            </div>
                            <div className="flex items-center gap-4 mt-6 pt-4 border-t">
                              {testimonial.image && (
                                <Image
                                  src={testimonial.image || "/placeholder.svg"}
                                  alt={testimonial.author}
                                  width={40}
                                  height={40}
                                  className="rounded-full object-cover"
                                />
                              )}
                              <div>
                                <p className="text-sm font-medium">{testimonial.author}</p>
                                <p className="text-xs text-muted-foreground">
                                  {testimonial.title}, {testimonial.company}
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </ScaleIn>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-8">
                <CarouselPrevious className="relative static translate-y-0 mr-2" />
                <CarouselNext className="relative static translate-y-0 ml-2" />
              </div>
            </Carousel>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="w-full py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <FadeIn direction="up">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Featured Case Studies</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Explore how our training solutions have helped organizations achieve remarkable results
                  </p>
                </div>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies
                .filter((cs) => cs.featured)
                .map((caseStudy, index) => (
                  <FadeIn key={caseStudy.id} direction={index % 2 === 0 ? "left" : "right"} delay={index * 0.2}>
                    <Card className="overflow-hidden transform transition-all duration-500 hover:shadow-xl">
                      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] h-full">
                        <div className="p-6 space-y-4">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <Image
                                src={caseStudy.logo || "/placeholder.svg"}
                                alt={caseStudy.company}
                                width={120}
                                height={40}
                                className="h-8 w-auto object-contain"
                              />
                              <Badge variant="outline" className="ml-auto">
                                {caseStudy.industry}
                              </Badge>
                            </div>
                            <h3 className="text-2xl font-bold">{caseStudy.company}</h3>
                            <p className="text-lg font-medium text-primary">{caseStudy.trainingType}</p>
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-semibold">Challenge:</h4>
                            <p className="text-sm text-muted-foreground">{caseStudy.challenge}</p>
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-semibold">Solution:</h4>
                            <p className="text-sm text-muted-foreground">{caseStudy.solution}</p>
                          </div>

                          <div className="pt-4">
                            <Button asChild className="group">
                              <Link href={`/success-stories/${caseStudy.id}`}>
                                Read Full Case Study
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
                                  className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                                >
                                  <line x1="5" y1="12" x2="19" y2="12" />
                                  <polyline points="12 5 19 12 12 19" />
                                </svg>
                              </Link>
                            </Button>
                          </div>
                        </div>

                        <div className="bg-primary/5 p-6 flex flex-col justify-center space-y-6">
                          <h4 className="font-semibold text-center">Key Results</h4>
                          <div className="space-y-4">
                            {caseStudy.results.map((result, index) => (
                              <div key={index} className="text-center">
                                <div className="text-2xl font-bold text-primary">
                                  <CountUp
                                    end={result.percentage || Number.parseInt(result.metric?.replace(/\D/g, "") || "0")}
                                    suffix={result.percentage ? "%" : ""}
                                    prefix={result.metric?.includes("$") ? "$" : ""}
                                    duration={2}
                                    delay={index * 0.3}
                                  />
                                </div>
                                <p className="text-xs text-muted-foreground">{result.text}</p>
                              </div>
                            ))}
                          </div>

                          {caseStudy.testimonial && (
                            <div className="bg-background rounded-lg p-4 mt-4 transform transition-all duration-300 hover:scale-105">
                              <blockquote className="text-xs italic">
                                "{caseStudy.testimonial.quote.substring(0, 100)}..."
                              </blockquote>
                              <div className="mt-2 text-xs font-medium">
                                {caseStudy.testimonial.author}, {caseStudy.testimonial.title}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </Card>
                  </FadeIn>
                ))}
            </div>
          </div>
        </section>

        {/* All Case Studies */}
        <section className="w-full py-12 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <FadeIn direction="up">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">All Case Studies</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Filter by industry or training type to find relevant success stories
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Filters */}
            <FadeIn direction="up" delay={0.2}>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <Filter className="h-5 w-5 text-muted-foreground" />
                  <h3 className="text-lg font-semibold">Filter Case Studies</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:w-auto">
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="industry-filter" className="text-sm font-medium">
                      Industry
                    </label>
                    <select
                      id="industry-filter"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 hover:border-primary"
                      value={activeFilters.industry}
                      onChange={(e) =>
                        setActiveFilters({ ...activeFilters, industry: e.target.value as Industry | "All" })
                      }
                    >
                      <option value="All">All Industries</option>
                      {industries.map((industry) => (
                        <option key={industry} value={industry}>
                          {industry}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="training-filter" className="text-sm font-medium">
                      Training Type
                    </label>
                    <select
                      id="training-filter"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 hover:border-primary"
                      value={activeFilters.trainingType}
                      onChange={(e) =>
                        setActiveFilters({ ...activeFilters, trainingType: e.target.value as TrainingType | "All" })
                      }
                    >
                      <option value="All">All Training Types</option>
                      {trainingTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Active filters display */}
            {(activeFilters.industry !== "All" || activeFilters.trainingType !== "All") && (
              <FadeIn direction="up" delay={0.3}>
                <div className="flex flex-wrap gap-2 mb-6">
                  {activeFilters.industry !== "All" && (
                    <Badge variant="secondary" className="flex items-center gap-1 animate-pulse">
                      {activeFilters.industry}
                      <button
                        onClick={() => setActiveFilters({ ...activeFilters, industry: "All" })}
                        className="ml-1 rounded-full hover:bg-muted p-0.5 transition-all duration-300"
                      >
                        <X className="h-3 w-3" />
                        <span className="sr-only">Remove filter</span>
                      </button>
                    </Badge>
                  )}
                  {activeFilters.trainingType !== "All" && (
                    <Badge variant="secondary" className="flex items-center gap-1 animate-pulse">
                      {activeFilters.trainingType}
                      <button
                        onClick={() => setActiveFilters({ ...activeFilters, trainingType: "All" })}
                        className="ml-1 rounded-full hover:bg-muted p-0.5 transition-all duration-300"
                      >
                        <X className="h-3 w-3" />
                        <span className="sr-only">Remove filter</span>
                      </button>
                    </Badge>
                  )}

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setActiveFilters({ industry: "All", trainingType: "All" })}
                    className="h-7 text-xs transition-all duration-300 hover:bg-primary/10"
                  >
                    Clear All
                  </Button>
                </div>
              </FadeIn>
            )}

            {/* Case Studies Grid */}
            <StaggeredContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
              {filteredCaseStudies.length > 0 ? (
                filteredCaseStudies.map((caseStudy) => (
                  <Card
                    key={caseStudy.id}
                    className="flex flex-col h-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <CardHeader className="pb-4">
                      <div className="flex justify-between items-start">
                        <Image
                          src={caseStudy.logo || "/placeholder.svg"}
                          alt={caseStudy.company}
                          width={120}
                          height={40}
                          className="h-8 w-auto object-contain"
                        />
                        <Badge variant="outline">{caseStudy.industry}</Badge>
                      </div>
                      <CardTitle className="mt-2">{caseStudy.company}</CardTitle>
                      <CardDescription className="text-primary">{caseStudy.trainingType}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-semibold">Challenge:</h4>
                          <p className="text-sm text-muted-foreground line-clamp-2">{caseStudy.challenge}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold">Key Result:</h4>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="bg-primary/10 text-primary font-bold rounded-full px-3 py-1 text-sm">
                              {caseStudy.results[0].percentage
                                ? `${caseStudy.results[0].percentage}%`
                                : caseStudy.results[0].metric}
                            </div>
                            <p className="text-sm text-muted-foreground">{caseStudy.results[0].text}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <HoverCard>
                        <HoverCardTrigger asChild>
                          <Button variant="outline" asChild className="w-full group">
                            <Link href={`/success-stories/${caseStudy.id}`}>
                              Read Case Study
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
                                className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                              >
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                              </svg>
                            </Link>
                          </Button>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-80">
                          <div className="space-y-2">
                            <h4 className="text-sm font-semibold">What you'll learn:</h4>
                            <ul className="text-xs space-y-1">
                              <li>• Detailed implementation approach</li>
                              <li>• Specific challenges and solutions</li>
                              <li>• Comprehensive results and metrics</li>
                              <li>• Client testimonials and feedback</li>
                            </ul>
                          </div>
                        </HoverCardContent>
                      </HoverCard>
                    </CardFooter>
                  </Card>
                ))
              ) : (
                <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
                  <LineChart className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-xl font-bold">No case studies match your filters</h3>
                  <p className="text-muted-foreground mt-2 max-w-md">
                    Try adjusting your filter criteria or{" "}
                    <Link href="/contact" className="text-primary hover:underline">
                      contact us
                    </Link>{" "}
                    to discuss your specific training needs.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4 transition-all duration-300 hover:bg-primary hover:text-white"
                    onClick={() => setActiveFilters({ industry: "All", trainingType: "All" })}
                  >
                    Clear All Filters
                  </Button>
                </div>
              )}
            </StaggeredContainer>
          </div>
        </section>

        {/* Results Metrics */}
        <section className="w-full py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <FadeIn direction="up">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Impact</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Measurable results that demonstrate the effectiveness of our training programs
                  </p>
                </div>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <FadeIn direction="up" delay={0.1}>
                <Card className="bg-background/50 border-primary/20 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="rounded-full bg-primary/10 p-3">
                        <TrendingUp className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-primary">
                      <CountUp end={28} suffix="%" duration={2.5} />
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Average increase in employee productivity after training
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn direction="up" delay={0.2}>
                <Card className="bg-background/50 border-primary/20 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="rounded-full bg-primary/10 p-3">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-primary">
                      <CountUp end={92} suffix="%" duration={2.5} />
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Client satisfaction rate with our training programs
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn direction="up" delay={0.3}>
                <Card className="bg-background/50 border-primary/20 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="rounded-full bg-primary/10 p-3">
                        <Award className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-primary">
                      <CountUp end={85} suffix="%" duration={2.5} />
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Clients who report exceeding their training ROI targets
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn direction="up" delay={0.4}>
                <Card className="bg-background/50 border-primary/20 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="rounded-full bg-primary/10 p-3">
                        <Building2 className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-primary">
                      <CountUp end={4.8} suffix="/5" duration={2.5} />
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Average participant satisfaction rating across all programs
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Partner Logos */}
        <section className="w-full py-12 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <FadeIn direction="up">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Trusted Partners</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Leading organizations that have partnered with us for their training needs
                  </p>
                </div>
              </div>
            </FadeIn>

            <Tabs defaultValue="all" className="w-full mb-8">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
                <TabsTrigger
                  value="all"
                  className="transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  All
                </TabsTrigger>
                <TabsTrigger
                  value="technology"
                  className="transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Technology
                </TabsTrigger>
                <TabsTrigger
                  value="healthcare"
                  className="transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Healthcare
                </TabsTrigger>
                <TabsTrigger
                  value="finance"
                  className="transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Finance
                </TabsTrigger>
                <TabsTrigger
                  value="manufacturing"
                  className="transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Manufacturing
                </TabsTrigger>
                <TabsTrigger
                  value="retail"
                  className="transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Retail
                </TabsTrigger>
                <TabsTrigger
                  value="education"
                  className="transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Education
                </TabsTrigger>
                <TabsTrigger
                  value="professional"
                  className="transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Professional
                </TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-6">
                <StaggeredContainer
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center"
                  staggerDelay={0.1}
                >
                  {partners.map((partner) => (
                    <div key={partner.id} className="p-4 flex items-center justify-center h-24 w-full">
                      <Image
                        src={partner.logo || "/placeholder.svg"}
                        alt={partner.name}
                        width={200}
                        height={80}
                        className="max-h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110"
                      />
                    </div>
                  ))}
                </StaggeredContainer>
              </TabsContent>

              {industries.map((industry) => (
                <TabsContent key={industry} value={industry.toLowerCase()} className="mt-6">
                  <StaggeredContainer
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center"
                    staggerDelay={0.1}
                  >
                    {partners
                      .filter((partner) => partner.industry === industry)
                      .map((partner) => (
                        <div key={partner.id} className="p-4 flex items-center justify-center h-24 w-full">
                          <Image
                            src={partner.logo || "/placeholder.svg"}
                            alt={partner.name}
                            width={200}
                            height={80}
                            className="max-h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110"
                          />
                        </div>
                      ))}
                  </StaggeredContainer>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 z-0"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <FadeIn direction="up">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Ready to Write Your Success Story?
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Contact us today to discuss how our training solutions can help your organization achieve similar
                    results.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild className="group">
                    <Link href="/contact">
                      Contact Us
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
                        className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/services">Explore Services</Link>
                  </Button>
                </div>
              </div>
            </FadeIn>
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

      <ScrollToTop />
    </div>
  )
}
