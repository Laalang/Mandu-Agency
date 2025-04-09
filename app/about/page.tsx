import Image from "next/image"
import Link from "next/link"
import { BookOpen, CheckCircle, Target, Award, Users, BookOpenCheck } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function AboutPage() {
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
            <Link href="/about" className="text-sm font-medium text-primary">
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
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    About TrainingPro
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    We're dedicated to transforming organizations through expert-led training and development programs
                    that deliver measurable results.
                  </p>
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="About TrainingPro"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        {/* Mission and Vision Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter">Our Mission</h2>
                  <p className="text-muted-foreground">
                    To empower organizations through transformative learning experiences that develop talent, drive
                    innovation, and deliver measurable business results. We believe that effective training is the
                    cornerstone of organizational success and individual growth.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <BookOpenCheck className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter">Our Vision</h2>
                  <p className="text-muted-foreground">
                    To be the global leader in corporate training solutions, recognized for our innovative approaches,
                    exceptional quality, and the tangible impact we create for our clients. We envision a world where
                    every organization has access to the training resources they need to thrive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Story</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The journey that brought us to where we are today
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12">
              <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Our Beginnings</h3>
                    <p className="text-muted-foreground">
                      Founded in 2010 by Robert Thompson, a former Fortune 500 executive with a passion for developing
                      talent, TrainingPro began with a simple mission: to bridge the gap between theoretical knowledge
                      and practical application in corporate training.
                    </p>
                    <p className="text-muted-foreground">
                      What started as a small team of passionate educators has grown into a global network of industry
                      experts, all committed to delivering exceptional training experiences that drive real business
                      results.
                    </p>
                  </div>
                </div>
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  width={400}
                  height={300}
                  alt="TrainingPro Beginnings"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
              </div>
              <div className="grid gap-6 lg:grid-cols-[400px_1fr] lg:gap-12">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  width={400}
                  height={300}
                  alt="TrainingPro Growth"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Growth and Evolution</h3>
                    <p className="text-muted-foreground">
                      By 2015, we had expanded our services to include specialized training programs for various
                      industries, from healthcare to technology. The addition of Sophia Martinez, PhD in Organizational
                      Psychology, as our Chief Learning Officer marked a significant milestone in our development of
                      cutting-edge learning methodologies.
                    </p>
                    <p className="text-muted-foreground">
                      Today, we're proud to have helped hundreds of organizations across various industries develop
                      their talent and achieve their strategic goals through our comprehensive training solutions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Where We Are Today</h3>
                    <p className="text-muted-foreground">
                      With offices in major cities across North America, Europe, and Asia, TrainingPro now serves
                      clients globally. Our team has grown to include over 100 full-time training specialists and a
                      network of more than 250 subject matter experts who bring deep domain knowledge to our programs.
                    </p>
                    <p className="text-muted-foreground">
                      We continue to innovate and evolve our training methodologies, embracing new technologies and
                      approaches to ensure our clients receive the most effective and engaging learning experiences
                      possible.
                    </p>
                  </div>
                </div>
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  width={400}
                  height={300}
                  alt="TrainingPro Today"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Core Values</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The principles that guide everything we do
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Award className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Excellence</h3>
                  <p className="text-muted-foreground">
                    We're committed to delivering the highest quality training programs that exceed expectations and set
                    new standards in the industry.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Users className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Collaboration</h3>
                  <p className="text-muted-foreground">
                    We believe in working closely with our clients to understand their unique needs and co-create
                    solutions that drive meaningful results.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Innovation</h3>
                  <p className="text-muted-foreground">
                    We continuously evolve our methods and content to stay ahead of industry trends and incorporate the
                    latest research in adult learning.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Integrity</h3>
                  <p className="text-muted-foreground">
                    We operate with transparency, honesty, and ethical standards in all our interactions with clients,
                    partners, and team members.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Impact</h3>
                  <p className="text-muted-foreground">
                    We measure our success by the tangible results and positive changes we create for our clients and
                    their organizations.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Inclusivity</h3>
                  <p className="text-muted-foreground">
                    We embrace diversity of thought, background, and experience, creating learning environments where
                    everyone can thrive and contribute.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Leadership Team</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Meet the experienced professionals guiding our organization
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  width={300}
                  height={300}
                  alt="Robert Thompson"
                  className="rounded-full object-cover"
                />
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold">Robert Thompson</h3>
                  <p className="text-sm text-primary font-medium">Founder & CEO</p>
                  <p className="text-sm text-muted-foreground">
                    Former Fortune 500 executive with 20+ years in corporate training and development. Robert founded
                    TrainingPro with a vision to transform how organizations approach talent development.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  width={300}
                  height={300}
                  alt="Sophia Martinez"
                  className="rounded-full object-cover"
                />
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold">Dr. Sophia Martinez</h3>
                  <p className="text-sm text-primary font-medium">Chief Learning Officer</p>
                  <p className="text-sm text-muted-foreground">
                    PhD in Organizational Psychology with expertise in adult learning methodologies. Sophia leads our
                    curriculum development and ensures our programs incorporate the latest research in effective
                    learning.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  width={300}
                  height={300}
                  alt="James Wilson"
                  className="rounded-full object-cover"
                />
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold">James Wilson</h3>
                  <p className="text-sm text-primary font-medium">Director of Client Success</p>
                  <p className="text-sm text-muted-foreground">
                    With a background in management consulting, James ensures our clients achieve their desired outcomes
                    through our programs. He leads our team of client success managers who provide ongoing support.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  width={300}
                  height={300}
                  alt="Michelle Lee"
                  className="rounded-full object-cover"
                />
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold">Michelle Lee</h3>
                  <p className="text-sm text-primary font-medium">Chief Operations Officer</p>
                  <p className="text-sm text-muted-foreground">
                    Michelle brings 15 years of operational leadership experience to ensure our global training delivery
                    is seamless and efficient. She oversees our international expansion and operational excellence.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  width={300}
                  height={300}
                  alt="David Chen"
                  className="rounded-full object-cover"
                />
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold">David Chen</h3>
                  <p className="text-sm text-primary font-medium">Chief Technology Officer</p>
                  <p className="text-sm text-muted-foreground">
                    David leads our digital learning initiatives and technology infrastructure. His background in
                    educational technology helps us create innovative learning platforms and experiences.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  width={300}
                  height={300}
                  alt="Sarah Johnson"
                  className="rounded-full object-cover"
                />
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold">Sarah Johnson</h3>
                  <p className="text-sm text-primary font-medium">Global Director of Training</p>
                  <p className="text-sm text-muted-foreground">
                    Sarah oversees our global team of trainers and facilitators. With 15+ years in leadership
                    development, she ensures consistent quality and excellence in program delivery worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expert Mentors Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Expert Mentors</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Industry professionals who bring their expertise to our training programs
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              <div className="flex flex-col items-center space-y-4">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  width={200}
                  height={200}
                  alt="Michael Chen"
                  className="rounded-full object-cover"
                />
                <div className="space-y-2 text-center">
                  <h3 className="text-lg font-bold">Michael Chen</h3>
                  <p className="text-sm text-primary font-medium">Technical Skills Trainer</p>
                  <p className="text-xs text-muted-foreground">
                    Former CTO with expertise in digital transformation and technical upskilling
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  width={200}
                  height={200}
                  alt="Elena Rodriguez"
                  className="rounded-full object-cover"
                />
                <div className="space-y-2 text-center">
                  <h3 className="text-lg font-bold">Elena Rodriguez</h3>
                  <p className="text-sm text-primary font-medium">Communication Coach</p>
                  <p className="text-xs text-muted-foreground">
                    Specializes in improving team dynamics and interpersonal communication
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  width={200}
                  height={200}
                  alt="Thomas Wright"
                  className="rounded-full object-cover"
                />
                <div className="space-y-2 text-center">
                  <h3 className="text-lg font-bold">Thomas Wright</h3>
                  <p className="text-sm text-primary font-medium">Financial Services Specialist</p>
                  <p className="text-xs text-muted-foreground">
                    Former investment banker with deep knowledge of financial regulations
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  width={200}
                  height={200}
                  alt="Priya Patel"
                  className="rounded-full object-cover"
                />
                <div className="space-y-2 text-center">
                  <h3 className="text-lg font-bold">Priya Patel</h3>
                  <p className="text-sm text-primary font-medium">Technology Transformation Expert</p>
                  <p className="text-xs text-muted-foreground">
                    Specializes in helping organizations navigate digital transformation
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  width={200}
                  height={200}
                  alt="Marcus Johnson"
                  className="rounded-full object-cover"
                />
                <div className="space-y-2 text-center">
                  <h3 className="text-lg font-bold">Marcus Johnson</h3>
                  <p className="text-sm text-primary font-medium">Project Management Coach</p>
                  <p className="text-xs text-muted-foreground">
                    PMP certified with experience leading complex global projects
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  width={200}
                  height={200}
                  alt="Olivia Thompson"
                  className="rounded-full object-cover"
                />
                <div className="space-y-2 text-center">
                  <h3 className="text-lg font-bold">Olivia Thompson</h3>
                  <p className="text-sm text-primary font-medium">Diversity & Inclusion Specialist</p>
                  <p className="text-xs text-muted-foreground">
                    Helps organizations build inclusive cultures that drive innovation
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  width={200}
                  height={200}
                  alt="Dr. Jennifer Lee"
                  className="rounded-full object-cover"
                />
                <div className="space-y-2 text-center">
                  <h3 className="text-lg font-bold">Dr. Jennifer Lee</h3>
                  <p className="text-sm text-primary font-medium">Healthcare Industry Expert</p>
                  <p className="text-xs text-muted-foreground">
                    Former hospital administrator with expertise in healthcare management
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  width={200}
                  height={200}
                  alt="David Park"
                  className="rounded-full object-cover"
                />
                <div className="space-y-2 text-center">
                  <h3 className="text-lg font-bold">David Park</h3>
                  <p className="text-sm text-primary font-medium">Sales Training Expert</p>
                  <p className="text-xs text-muted-foreground">
                    Developed award-winning sales methodologies for Fortune 500 companies
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Button variant="outline" asChild>
                <Link href="/mentors">View All Mentors</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Global Presence Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Global Presence</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Serving clients across the world with local expertise and global best practices
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <Image
                src="/placeholder.svg?height=600&width=1200"
                width={1200}
                height={600}
                alt="Global Presence Map"
                className="rounded-xl object-cover"
              />
              <div className="grid gap-6 py-8 md:grid-cols-3 lg:gap-12">
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold">North America</h3>
                  <p className="text-muted-foreground">
                    Headquarters in New York with offices in Chicago, San Francisco, and Toronto
                  </p>
                </div>
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold">Europe</h3>
                  <p className="text-muted-foreground">Regional offices in London, Paris, and Frankfurt</p>
                </div>
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold">Asia Pacific</h3>
                  <p className="text-muted-foreground">
                    Regional offices in Singapore, Tokyo, and Sydney serving clients across the region
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Work With Us?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Let's discuss how our training solutions can help your organization reach its full potential.
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
