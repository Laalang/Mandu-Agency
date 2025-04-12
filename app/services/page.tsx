import Image from "next/image"
import Link from "next/link"
import {
  Award,
  BookOpen,
  BrainCircuit,
  Building2,
  CheckCircle,
  Code,
  Compass,
  GraduationCap,
  Lightbulb,
  LineChart,
  MessageSquare,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicesPage() {
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
            <Link href="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              About Us
            </Link>
            <Link href="/services" className="text-sm font-medium text-primary">
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
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Layanan Pelatihan Kami
                </h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Solusi pelatihan komprehensif yang disesuaikan dengan kebutuhan dan tujuan unik organisasi anda
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Categories - Card Layout */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Kategori Program Pelatihan</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Jelajahi program pelatihan kami yang dirancang untuk memenuhi kebutuhan spesifik organisasi Anda
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Leadership Training Card */}
              <Card className="flex flex-col h-full">
                <CardHeader className="pb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-2">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Leadership Training</CardTitle>
                  <CardDescription>Kembangkan pemimpin yang efektif di semua tingkat organisasi Anda</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Perkembangan kepemimpinan eksekutif</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Pelatihan manajemen menengah.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Program pemimpin masa depan.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Pengambilan keputusan strategis.</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/contact?service=leadership">Informasi Lebih Lanjut</Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Technical Skills Card */}
              <Card className="flex flex-col h-full">
                <CardHeader className="pb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-2">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Technical Skills</CardTitle>
                  <CardDescription>Perkuat tenaga kerja anda dengan kompetensi teksnis yang esetial</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Pengembangan perangkat lunak dan pemrograman</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Analisis data dan visualisasi</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Dasar-dasar keamanan siber</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Komputasi awan dan infrastruktur</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/contact?service=technical">Informasi Lebih Lanjut</Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Team Building Card */}
              <Card className="flex flex-col h-full">
                <CardHeader className="pb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-2">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Team Building</CardTitle>
                  <CardDescription>Memupuk kolaborasi dan memperkuat dinamika tim.</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Lokakarya pemecahan masalah secara kolaboratif</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Latihan komunikasi dan membangun kepercayaan</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Pelatihan penyelesaian konflik</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Strategi kolaborasi tim jarak jauh</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/contact?service=team-building">Informasi Lebih Lanjut</Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Professional Development Card */}
              <Card className="flex flex-col h-full">
                <CardHeader className="pb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-2">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Professional Development</CardTitle>
                  <CardDescription>Tingkatkan keterampilan profesional inti di seluruh organisasi Anda</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Keterampilan komunikasi bisnis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Metodologi manajemen proyek</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Manajemen waktu dan produktivitas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Presentasi dan berbicara di depan umum</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/contact?service=professional-development">Informasi Lebih Lanjut</Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Industry-Specific Training Card */}
              <Card className="flex flex-col h-full">
                <CardHeader className="pb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-2">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Industry-Specific Training</CardTitle>
                  <CardDescription>Pelatihan khusus yang disesuaikan dengan tantangan unik industri Anda</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Kepatuhan layanan kesehatan dan perawatan pasien</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Regulasi layanan keuangan</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Keamanan manufaktur dan kontrol kualitas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Keunggulan layanan pelanggan ritel</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/contact?service=industry-specific">Informasi Lebih Lanjut</Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Certification Programs Card */}
              <Card className="flex flex-col h-full">
                <CardHeader className="pb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-2">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Certification Programs</CardTitle>
                  <CardDescription>Sertifikasi yang diakui industri untuk memvalidasi keterampilan profesional</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Project Management Professional (PMP)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Certified Information Security Manager (CISM)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Six Sigma and Lean methodologies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Persiapan sertifikasi SDM.</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/contact?service=certification">Informasi Lebih Lanjut</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Leadership Training Detailed Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                    Featured Program
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter">Program Kepemimpinan Eksekutif</h2>
                  <p className="text-muted-foreground">
                    Program pengembangan kepemimpinan kami yang komprehensif dirancang untuk mengubah manager di semua tingkatan menjadi pemimpin inspiratif yang dapat mendorong kesuksesan organisasi. Program ini menggabungkan pengetahuan teoritis dengan aplikasi praktis melalui:
                  </p>
                </div>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Lokakarya interaktif dan simulasi</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Pelatihan eksekutif satu lawan satu</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Umpan balik dan penilaian 360 derajat</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Proyek pembelajaran aksi dengan dampak nyata pada bisnis</span>
                  </li>
                </ul>
                <div>
                  <Button asChild>
                    <Link href="/contact?service=leadership-excellence">Konsultasi Sekarang</Link>
                  </Button>
                </div>
              </div>
              <Image
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1470&auto=format&fit=crop"
                width={600}
                height={400}
                alt="Leadership Training"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
              />
            </div>
          </div>
        </section>

        {/* Technical Skills Detailed Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2 lg:gap-12">
              <Image
                src="https://images.unsplash.com/photo-1571645163064-77faa9676a46?q=80&w=1470&auto=format&fit=crop"
                width={600}
                height={400}
                alt="Technical Skills Training"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                    Featured Program
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter">Bootcamp Keterampilan Teknis</h2>
                  <p className="text-muted-foreground">
                    Bootcamp keterampilan teknis intensif kami dirancang untuk dengan cepat meningkatkan keterampilan tenaga kerja anda di bidang teknis yang banyak diminati. Program ini menggabungkan pelatihan yang dipandu oleh instruktur dengan praktik langsung dan proyek dunia nyata untuk memastikan pengembangan keterampilan yang praktis.
                  </p>
                </div>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Kurikulum yang disesuaikan berdasarkan tumpukan teknologi Anda</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Instruktur ahli dengan pengalaman industri</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Laboratorium praktis dan latihan langsung</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Dukungan pasca-pelatihan dan sumber daya</span>
                  </li>
                </ul>
                <div>
                  <Button asChild>
                    <Link href="/contact?service=technical-bootcamp">Konsultasi Sekarang</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Building Detailed Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                    Featured Program
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter">Lokakarya Sinergi Tim</h2>
                  <p className="text-muted-foreground">
                    Lokakarya sinergi tim kami dirancang untuk memperkuat dinamika tim, meningkatkan komunikasi dan membangun kepercayaan di antara anggota tim. Sesi interaktif ini dapat dilaksanakan secara langsung atau virtual dan disesuaikan untuk mengatasi tantangan spesifik tim anda.
                  </p>
                </div>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Kegiatan dan tantangan pembentukan tim yang menarik</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Penilaian dan adaptasi gaya komunikasi.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Kerangka penyelesaian konflik dan pemecahan masalah</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Perencanaan aksi untuk perbaikan tim yang berkelanjutan</span>
                  </li>
                </ul>
                <div>
                  <Button asChild>
                    <Link href="/contact?service=team-synergy">Konsultasi Sekarang</Link>
                  </Button>
                </div>
              </div>
              <Image
                src="https://images.unsplash.com/photo-1558008258-3256797b43f3?q=80&w=1631&auto=format&fit=crop"
                width={600}
                height={400}
                alt="Team Building Workshop"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
              />
            </div>
          </div>
        </section>

        {/* Delivery Methods */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Metode Penyampaian Flexible</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Kami menawarkan berbagai opsi penyampaian pelatihan untuk menyesuaikan dengan kebutuhan dan preferensi organisasi Anda
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Users className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">In-Person Training</h3>
                  <p className="text-muted-foreground">
                    Pelatihan gaya kelas tradisional yang dilaksanakan di lokasi Anda atau fasilitas pelatihan kami, ideal untuk pembelajaran praktis dan pembentukan tim.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Compass className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Virtual Instructor-Led</h3>
                  <p className="text-muted-foreground">
                    Sesi pelatihan online langsung yang dipandu oleh fasilitator ahli, memberikan pengalaman pembelajaran interaktif tanpa tergantung lokasi.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <BrainCircuit className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Blended Learning</h3>
                  <p className="text-muted-foreground">
                    Kombinasi modul online mandiri dan sesi langsung, memberikan fleksibilitas sambil tetap menjaga keterlibatan dan akuntabilitas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Pendekatan Pelatihan Kami</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Cara kami menyampaikan pengalaman pelatihan yang luar biasa yang mendorong hasil nyata
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-4 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <span className="text-xl font-bold">1</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Assess</h3>
                  <p className="text-muted-foreground">
                    Kami mulai dengan memahami kebutuhan, tantangan dan tujuan unik organisasi anda melalui analisis kebutuhan yang komprehensif.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <span className="text-xl font-bold">2</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Design</h3>
                  <p className="text-muted-foreground">
                    Kami menciptakan pengalaman pembelajaran yang disesuaikan dengan tujuan, budaya, dan hasil spesifik yang ingin dicapai.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <span className="text-xl font-bold">3</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Deliver</h3>
                  <p className="text-muted-foreground">
                    Fasilitator ahli kami melibatkan peserta melalui sesi interaktif dan berdampak menggunakan berbagai metodelogi pengajaran.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <span className="text-xl font-bold">4</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Evaluate</h3>
                  <p className="text-muted-foreground">
                    Kami mengukur hasil dan menyempurnakan pendekatan kami untuk memastikan perbaikan berkelanjutan dan ROI melalui mekanisme penilaian dan umpan balik yang komprehensif.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Benefit Program Pelatihan Kami</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Mengapa organisasi memilih Mandu Outsource untuk kebutuhan pembelajaran dan pengembangan mereka
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Lightbulb className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Solusi Khusus</h3>
                  <p className="text-muted-foreground">
                    Program pelatihan yang disesuaikan dengan tantangan bisnis spesifik anda, konteks industri, dan budaya organisasi.
                  </p>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <LineChart className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Hasil Yang Dapat Diukur</h3>
                  <p className="text-muted-foreground">
                    Metrik yang jelas dan metode evaluasi yang melacak kemajuan dan menunjukkan dampak investasi pelatihan.
                  </p>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Fasilitator Ahli</h3>
                  <p className="text-muted-foreground">
                    Profesional industri dengan pengalaman dunia nyata yang membawa wawasan praktis ke setiap sesi pelatihan.
                  </p>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Metodologi interaktif</h3>
                  <p className="text-muted-foreground">
                    Pengalaman pembelajaran interaktif yang menjaga keterlibatan dan mendorong retensi pengetahuan.
                  </p>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Users className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Program Berskala</h3>
                  <p className="text-muted-foreground">
                    Solusi pelatihan yang dapat diterapkan secara skala di berbagai departemen, lokasi, atau seluruh organisasi
                  </p>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <BookOpen className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Dukungan Berkelanjutan</h3>
                  <p className="text-muted-foreground">
                    Sumberdaya pasca pelatihan, pelatihan, dan penguatan untuk memastikan penerapan dan pengembangan keterampilan jangka panjang.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Pendapat Client Kami</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Dengarkan dari organisasi yang menstransfromasi tenaga kerja mereka melalui program pelatihan kami
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
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
                    "Program kepemimpinan kami telah menstransfromasi tim manajemen kami. Kami telah melihat peningkatan komunikasi, pengambilan keputusan yang lebih baik, dan kepuasan karyawan yang lebih tinggi. ROI yang kami peroleh sangat luar biasa."
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <Image
                    src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1470&auto=format&fit=crop"
                    width={40}
                    height={40}
                    alt="David Wilson"
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium">David Wilson</p>
                    <p className="text-xs text-muted-foreground">HR Director, Global Tech Solutions</p>
                  </div>
                </div>
              </div>
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
                    "Bootcamp keterampilan teknis membantu kami meningkatkan keterampilan tim pengembangan kami dengan cepat pada teknologi baru. Pendekatan praktis memastikan mereka dapat segera menerapkan apa yang mereka pelajari dari proyek kami."
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <Image
                    src="https://images.unsplash.com/photo-1649768870222-17848797d6b4?q=80&w=1470&auto=format&fit=crop"
                    width={40}
                    height={40}
                    alt="Jennifer Lee"
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium">Adi Pras</p>
                    <p className="text-xs text-muted-foreground">CTO, Innovate Software</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Button variant="outline" asChild>
                <Link href="/success-stories">Lihat Lainnya</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ayo Mulai Tingkatkan Profesionalitas Organisasi Anda</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Mari berdiskusi solusi pelatihan kami agar bisa membantu organisasi anda mencapai potensi maksimal.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" asChild>
                  <Link href="/contact">Hubungi Kami</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/success-stories">Lihat Testimonial</Link>
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
              © {new Date().getFullYear()} Mandu Outsource. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              2025 Site by Archyst
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
