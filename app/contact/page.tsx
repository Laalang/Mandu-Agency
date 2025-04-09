"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { BookOpen, Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button-enhanced"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card-enhanced"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FadeIn, ScaleIn, FloatingElement } from "@/components/ui/animations"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormState((prev) => ({ ...prev, [id]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormState((prev) => ({ ...prev, service: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormState({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          phone: "",
          service: "",
          message: "",
        })
      }, 3000)
    }, 1500)
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
            <Link
              href="/mentors"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Mentors
            </Link>
            <Link
              href="/success-stories"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Success Stories
            </Link>
            <Link href="/contact" className="text-sm font-medium text-primary">
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
        <section className="w-full py-12 md:py-16 lg:py-20 bg-muted relative overflow-hidden">
          <div className="container px-4 md:px-6 relative z-10">
            <FadeIn direction="up" duration={0.8}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2 max-w-3xl">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h1>
                  <p className="text-muted-foreground md:text-lg">
                    Have questions about our training programs? Contact us today and our team will help you find the
                    right solution for your organization.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
          <div
            className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 z-0"
            style={{
              transform: `translateY(${scrollY * 0.1}px)`,
            }}
          ></div>
        </section>

        {/* Contact Information and Form Section */}
        <section className="w-full py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <FadeIn direction="left">
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold">Contact Information</h2>
                    <p className="text-muted-foreground">
                      Reach out to us directly or fill out the form to request information about our corporate training
                      solutions.
                    </p>

                    <div className="grid gap-4">
                      <Card className="p-4 flex items-start gap-4 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                        <div className="rounded-full bg-primary/10 p-2">
                          <Phone className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">Phone</h3>
                          <p className="text-sm text-muted-foreground">+62 331 123 4567</p>
                          <p className="text-sm text-muted-foreground">Monday - Friday, 8:00 AM - 5:00 PM WIB</p>
                        </div>
                      </Card>

                      <Card className="p-4 flex items-start gap-4 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                        <div className="rounded-full bg-primary/10 p-2">
                          <Mail className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">Email</h3>
                          <p className="text-sm text-muted-foreground">info@trainingpro.com</p>
                          <p className="text-sm text-muted-foreground">support@trainingpro.com</p>
                        </div>
                      </Card>

                      <Card className="p-4 flex items-start gap-4 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                        <div className="rounded-full bg-primary/10 p-2">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">Office Location</h3>
                          <p className="text-sm text-muted-foreground">Jl. Kalimantan No. 37, Jember</p>
                          <p className="text-sm text-muted-foreground">Jawa Timur, Indonesia 68121</p>
                        </div>
                      </Card>
                    </div>
                  </div>
                </FadeIn>

                {/* Google Maps */}
                <FadeIn direction="left" delay={0.2}>
                  <div className="space-y-4">
                    <h3 className="text-xl font-medium">Find Us</h3>
                    <div className="aspect-video w-full h-[300px] rounded-lg overflow-hidden border transform transition-all duration-500 hover:shadow-xl">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31628.674462263387!2d113.6936873!3d-8.1722777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd695b617d8f623%3A0x4027a76e3c73a30!2sJember%2C%20Jember%20Regency%2C%20East%20Java!5e0!3m2!1sen!2sid!4v1712642651889!5m2!1sen!2sid"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="TrainingPro Office Location"
                        className="w-full h-full"
                      ></iframe>
                    </div>
                  </div>
                </FadeIn>
              </div>

              {/* Contact Form */}
              <div>
                <ScaleIn>
                  <div className="bg-background rounded-lg border p-6 shadow-sm transform transition-all duration-300 hover:shadow-lg">
                    <div className="mb-6">
                      <h2 className="text-2xl font-bold">Send Us a Message</h2>
                      <p className="text-sm text-muted-foreground mt-1">
                        Fill out the form below and our team will get back to you within 24 hours.
                      </p>
                    </div>

                    {isSubmitted ? (
                      <div className="rounded-lg bg-green-50 p-6 text-center animate-pulse">
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
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
                            className="h-6 w-6 text-green-600"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                            <polyline points="22 4 12 14.01 9 11.01" />
                          </svg>
                        </div>
                        <h3 className="mt-4 text-lg font-medium text-green-800">Message Sent Successfully</h3>
                        <p className="mt-2 text-sm text-green-700">
                          Thank you for contacting us. Our team will get back to you shortly.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">First Name</Label>
                            <Input
                              id="firstName"
                              placeholder="Enter your first name"
                              value={formState.firstName}
                              onChange={handleChange}
                              required
                              className="transition-all duration-300 focus:border-primary focus:ring-primary"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input
                              id="lastName"
                              placeholder="Enter your last name"
                              value={formState.lastName}
                              onChange={handleChange}
                              required
                              className="transition-all duration-300 focus:border-primary focus:ring-primary"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            value={formState.email}
                            onChange={handleChange}
                            required
                            className="transition-all duration-300 focus:border-primary focus:ring-primary"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="company">Company</Label>
                          <Input
                            id="company"
                            placeholder="Enter your company name"
                            value={formState.company}
                            onChange={handleChange}
                            required
                            className="transition-all duration-300 focus:border-primary focus:ring-primary"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="Enter your phone number"
                            value={formState.phone}
                            onChange={handleChange}
                            required
                            className="transition-all duration-300 focus:border-primary focus:ring-primary"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="service">Service of Interest</Label>
                          <Select value={formState.service} onValueChange={handleSelectChange}>
                            <SelectTrigger
                              id="service"
                              className="transition-all duration-300 focus:border-primary focus:ring-primary"
                            >
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="custom-training">Custom Training Programs</SelectItem>
                              <SelectItem value="leadership">Leadership Development</SelectItem>
                              <SelectItem value="technical-skills">Technical Skills Training</SelectItem>
                              <SelectItem value="team-building">Team Building</SelectItem>
                              <SelectItem value="certification">Professional Certification</SelectItem>
                              <SelectItem value="coaching">Executive Coaching</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">Message</Label>
                          <Textarea
                            id="message"
                            placeholder="Tell us about your training needs"
                            className="min-h-[120px] transition-all duration-300 focus:border-primary focus:ring-primary"
                            value={formState.message}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <Button type="submit" className="w-full group" disabled={isSubmitting}>
                          {isSubmitting ? (
                            <>
                              <svg
                                className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                ></circle>
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                              </svg>
                              Sending...
                            </>
                          ) : (
                            <>
                              Submit Inquiry
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
                            </>
                          )}
                        </Button>

                        <p className="text-xs text-muted-foreground text-center mt-4">
                          By submitting this form, you agree to our{" "}
                          <Link href="/privacy" className="text-primary hover:underline">
                            Privacy Policy
                          </Link>
                          .
                        </p>
                      </form>
                    )}
                  </div>
                </ScaleIn>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-16 bg-muted">
          <div className="container px-4 md:px-6">
            <FadeIn direction="up">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
                  <p className="text-muted-foreground">Find answers to common questions about our training services</p>
                </div>
              </div>
            </FadeIn>

            <div className="mx-auto grid max-w-4xl gap-6 lg:grid-cols-2">
              <FadeIn direction="up" delay={0.1}>
                <Card className="p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <h3 className="text-lg font-medium">How quickly can you develop a custom training program?</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Depending on the complexity and scope, we can develop custom training programs in as little as 2-4
                    weeks. For more comprehensive programs, the development timeline may extend to 6-8 weeks.
                  </p>
                </Card>
              </FadeIn>

              <FadeIn direction="up" delay={0.2}>
                <Card className="p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <h3 className="text-lg font-medium">Do you offer virtual training options?</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Yes, we offer fully virtual, in-person, and hybrid training options. Our virtual training programs
                    are interactive and engaging, designed to deliver the same impact as our in-person sessions.
                  </p>
                </Card>
              </FadeIn>

              <FadeIn direction="up" delay={0.3}>
                <Card className="p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <h3 className="text-lg font-medium">How do you measure training effectiveness?</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    We use a comprehensive evaluation framework that includes pre and post-assessments, participant
                    feedback, manager observations, and business impact analysis to measure the effectiveness of our
                    training programs.
                  </p>
                </Card>
              </FadeIn>

              <FadeIn direction="up" delay={0.4}>
                <Card className="p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <h3 className="text-lg font-medium">Can you accommodate large teams across multiple locations?</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Absolutely. We have experience delivering training programs for global organizations with teams
                    spread across multiple locations and time zones. We can customize delivery schedules to accommodate
                    different regions.
                  </p>
                </Card>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 z-0"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <FadeIn direction="up">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2 max-w-3xl">
                  <h2 className="text-2xl font-bold">Ready to Transform Your Workforce?</h2>
                  <p className="text-muted-foreground">
                    Contact us today to discuss how our training solutions can help your organization reach its full
                    potential.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <FloatingElement amplitude={5} duration={3}>
                    <Button asChild variant="outline" size="lg" className="group">
                      <a href="tel:+623311234567">
                        <Phone className="mr-2 h-4 w-4" />
                        Call Us
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
                      </a>
                    </Button>
                  </FloatingElement>
                  <FloatingElement amplitude={5} duration={4}>
                    <Button asChild size="lg" className="group">
                      <a href="mailto:info@trainingpro.com">
                        <Mail className="mr-2 h-4 w-4" />
                        Email Us
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
                      </a>
                    </Button>
                  </FloatingElement>
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
