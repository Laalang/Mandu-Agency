import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, BookOpen, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Card } from "@/components/ui/card-enhanced"
import { FadeIn, ScaleIn, FloatingElement } from "@/components/ui/animations"
import { Button } from "@/components/ui/button-enhanced"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <BookOpen className="h-5 w-5" />
            <span>Mandu.corp</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium text-primary">
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
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <FadeIn direction="up" duration={0.8}>
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Temukan Potensi Perusahaan Bersama Mandu Outsourcing
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Kami menawarkan pelatihan dan tenaga kerja untuk mendukung kemajuan perusahaan anda.
                  </p>
                </div>
                </FadeIn>
                <FadeIn direction="up" duration={0.8}>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild>
                    <Link href="/services">Learn More</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
                </FadeIn>
              </div>
              <FadeIn direction="left" duration={0.8}>
              <Image
                src="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?q=80&w=1528&auto=format&fit=crop"
                width={550}
                height={550}
                alt="Corporate Training"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <FadeIn direction="up" duration={0.8}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Layanan Kami</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Memberi pelatihan yang sesuai dengan perusahaan anda
                </p>
              </div>
            </div>
            </FadeIn>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <FadeIn direction="right">
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <BookOpen className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Program Pelatihan Custom</h3>
                  <p className="text-muted-foreground">
                    Memberikan fasilitas dan tenaga ahli untuk membantu menyesuaikan dengan budaya anda
                  </p>
                </div>
                <Link href="/services" className="inline-flex items-center text-sm font-medium text-primary">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              </FadeIn>
              <FadeIn direction="right">
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Users className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Pelatihan Kepemimpinan</h3>
                  <p className="text-muted-foreground">
                    Memberikan pembekalan kepada para pemimipin untuk memanjukan perusahaan.
                  </p>
                </div>
                <Link href="/services" className="inline-flex items-center text-sm font-medium text-primary">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              </FadeIn>
              <FadeIn direction="right">
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Award className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Sertifikasi Profesional</h3>
                  <p className="text-muted-foreground">
                    Memberi valuasi dan sertifikat untuk kompetensi anda.
                  </p>
                </div>
                <Link href="/services" className="inline-flex items-center text-sm font-medium text-primary">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              </FadeIn>
            </div>
            <FadeIn direction="up">
            <div className="flex justify-center">
              <Button asChild>
                <Link href="/services">Lihat Semua Layanan</Link>
              </Button>
            </div>
            </FadeIn>
          </div>
        </section>

        {/* Mentors Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <FadeIn direction="up" duration={0.8}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Mentor Profesional</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Para profesional dengan pengalaman yang siap untuk memberi pelatihan dan kurikulum.
                </p>
              </div>
            </div>
            </FadeIn>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <FadeIn direction="up" duration={0.8}>
              <div className="flex flex-col items-center space-y-4">
                <Image
                  src="https://images.unsplash.com/photo-1691026336764-f24456f76e03?q=80&w=1631&auto=format&fit=crop"
                  width={200}
                  height={200}
                  alt="Sarah Johnson"
                  className="rounded-full object-cover"
                />
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold">Eko Purnowo</h3>
                  <p className="text-sm text-muted-foreground">Leadership Development Specialist</p>
                  <p className="text-sm text-muted-foreground">
                    15 tahun pengalaman dalam pendidikan kepemimpinan.
                  </p>
                </div>
              </div>
              </FadeIn>
              <FadeIn direction="up" duration={0.9}>
              <div className="flex flex-col items-center space-y-4">
                <Image
                  src="https://images.unsplash.com/photo-1655048424687-29c152741a90?q=80&w=1480&auto=format&fit=crop"
                  width={200}
                  height={200}
                  alt="Michael Chen"
                  className="rounded-full object-cover"
                />
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold">Seto Kurnia</h3>
                  <p className="text-sm text-muted-foreground">Technical Skills Trainer</p>
                  <p className="text-sm text-muted-foreground">
                    Seorang profesional dengan pengalaman menjadi CTO untuk membimbing keahlian teknikal.
                  </p>
                </div>
              </div>
              </FadeIn>
              <FadeIn direction="up" duration={1}>
              <div className="flex flex-col items-center space-y-4">
                <Image
                  src="https://images.unsplash.com/photo-1645633094375-f5c829cd33d3?q=80&w=1374&auto=format&fit=crop"
                  width={200}
                  height={200}
                  alt="Elena Rodriguez"
                  className="rounded-full object-cover"
                />
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold">Cindy Puspita</h3>
                  <p className="text-sm text-muted-foreground">Communication Coach</p>
                  <p className="text-sm text-muted-foreground">
                    Spesialis untuk meningkatkan kemampuan komunikasi dalam team
                  </p>
                </div>
              </div>
              </FadeIn>
            </div>
            <FadeIn direction="up" duration={0.8}>
            <div className="flex justify-center">
              <Button variant="outline" asChild>
                <Link href="/mentors">Lihat Semua Mentor</Link>
              </Button>
            </div>
            </FadeIn>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <FadeIn direction="up" duration={0.8}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Success Stories</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Bagaimana pelatihan profesional dapat meningkatkan kinerja organisasi.
                </p>
              </div>
            </div>
            </FadeIn>
            <FadeIn direction="up">
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Card>
              <div className="flex flex-col justify-between space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-2">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "Program kepemimpinan tersebut telah mengubah tim managemen kami. kami melihat peningkatan di komunikasi, pengambilan keputusan yang baik, dan kepuasan karyawan yang meningkat."
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <Image
                    src="https://images.unsplash.com/photo-1648448942246-a2a2c0886dc8?q=80&w=1376&auto=format&fit=crop"
                    width={40}
                    height={40}
                    alt="David Wilson"
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium">Teguh Waluyo</p>
                    <p className="text-xs text-muted-foreground">HR Director, Global Tech Solutions</p>
                  </div>
                </div>
              </div>
              </Card>
              <Card>
              <div className="flex flex-col justify-between space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-2">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "Program pelatihan khusus yang dikembangan untuk tim penjualan kami menghasilkan peningkatan pendapatan sebesar 30% hanya dalam 6 bulan. ROI-nya sangat luar biasa."
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <Image
                    src="https://images.unsplash.com/photo-1683334833180-4d6bf4d3a662?q=80&w=1374&auto=format&fit=crop"
                    width={40}
                    height={40}
                    alt="Jennifer Lee"
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium">Budaiyah Murthawaroh</p>
                    <p className="text-xs text-muted-foreground">Sales Director, Innovate Retail</p>
                  </div>
                </div>
              </div>
              </Card>
            </div>
            </FadeIn>
            <FadeIn direction="up" duration={0.8}>
            <div className="flex justify-center">
              <Button variant="outline" asChild>
                <Link href="/success-stories">Baca Lebih Banyak</Link>
              </Button>
            </div>
            </FadeIn>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <FadeIn direction="up" duration={0.8}>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Siap Untuk Meningkatkan Tenaga Kerja Anda?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hubungi kami untuk mendiskusikan bagaimana solusi pelatihan agar membantu organisasi anda mencapai potensi maksimal.
                </p>
              </div>
              </FadeIn>
              <FloatingElement>
              <FadeIn direction="up">
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" asChild>
                  <Link href="/contact">Hubungi Kami</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/services">Lihat Layanan</Link>
                </Button>
              </div>
              </FadeIn>
              </FloatingElement>
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
                    Karir
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
              <span>Mandu.corp</span>
            </div>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Mandu Outsource. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              2025 Site by Archyst.
            </p>
          </div>
        </div>
      </footer>
      <ScrollToTop />
    </div>
  )
}
