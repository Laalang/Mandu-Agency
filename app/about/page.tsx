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
            <span>Mandu.corp</span>
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
                    Tentang Mandu Outsourcing
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Kami berkomitmen untuk mengubah organisasi melalui program pelatihan dan pengembangan yang dipadu oleh para ahli, yang memberikan hasil yang terukur.
                  </p>
                </div>
              </div>
              <Image
                src="https://images.unsplash.com/photo-1605256585681-455837661b18?q=80&w=1470&auto=format&fit=crop"
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
                  <h2 className="text-3xl font-bold tracking-tighter">Misi Kami</h2>
                  <p className="text-muted-foreground">
                    Memberdayakan organisasi melalui pengalaman pembelajaran transformatif yang mengembangkan talenta, mendorong inovasi, dan memberikan hasil bisnis yang terukur. Kami percaya bahwa pelatihan efektif adalah landasan kesuksesan organisasi dan pertumbumbuhan individu.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <BookOpenCheck className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter">Visi Kami</h2>
                  <p className="text-muted-foreground">
                    Menjadi pemimpin global dalam solusi pelatihan korporat, dikenal karena pendekatan inovatif, kualitas luar biasa, dan dampak nyata yang kami ciptakan bagi client kami. Kami membayangkan dunia dimana setiap organisasi memiliki akses sumberdaya yang mereka butuhkan untuk berkembang.
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Cerita Kami</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Perjalanan bagaimana kami bisa sampai disini
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12">
              <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Permulaan</h3>
                    <p className="text-muted-foreground">
                      Didirikan pada tahun 2010 oleh Dimas Prasetya, seorang mantan eksekutif yang memiliki hasrat untuk mengembangkan talenta, Mandu dimulai dengan misi sederhana: menjembatani kesenjangan antara pengembangan teoretis dan penerapan praktis dalam pelatihan korporat.
                    </p>
                    <p className="text-muted-foreground">
                      Apa yang dimulai dari tim kecil yang terdiri dari pendidik yang penuh semangat telah berkembang menjadi jaringan global para ahli industri, semuanya berkomitmen untuk memberikan pengalaman pelatihan luar biasayang mendorong hasil bisnis nyata.
                    </p>
                  </div>
                </div>
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop"
                  width={400}
                  height={300}
                  alt="TrainingPro Beginnings"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
              </div>
              <div className="grid gap-6 lg:grid-cols-[400px_1fr] lg:gap-12">
                <Image
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1632&auto=format&fit=crop"
                  width={400}
                  height={300}
                  alt="TrainingPro Growth"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Perkembangan</h3>
                    <p className="text-muted-foreground">
                      Pada tahun 2015, kami telah memperluas layanan kami dengan memberikan program pelatihan khusus untuk berbagai industri, mulai dari kesehatan hingga teknologi. Penambahan Dika Hadi, seorang Sarjanan Psikologi Organisasi, sebagai Chief Learning Officer kami menjadi tonggak penting dalam pengembangan metodologi pengembangan mutakhir.
                    </p>
                    <p className="text-muted-foreground">
                      Saat ini, kami bangga telah membantu ratusan organisasi di berbagai industri dalam pengembangan talenta mereka dalam mencapai tujuan strategis mereka melalui solusi pelatihan yang komprehensif.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Kami Sekarang</h3>
                    <p className="text-muted-foreground">
                      Dengan kantor di kota-kota besar di Indonesia, Mandu Outsourcing kini melayani client secara global. Tim kami telah berkembang mencakup lebih dari 100 spesialis pelatihan penuh waktu dan jaringan lebih dari 250 pakar mentri yang membawa pengetahuan mendalam ke dalam program kami.
                    </p>
                    <p className="text-muted-foreground">
                      Kami terus berinovasi dan mengembangkan metodologi pelatihan kami, mengadopsi teknologi dan pendekatan baru untuk memastikan client kami mendapatkan pengalaman pembelajaran yang paling efektif dan menarik.
                    </p>
                  </div>
                </div>
                <Image
                  src="https://images.unsplash.com/photo-1634936016780-65f6a77ebdd4?q=80&w=1478&auto=format&fit=crop"
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Kelebihan Kami </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Prinsip yang menjadi landasan setiap tindakan kami
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
                    Kami berkomitmen untuk menyediakan program pelatihan berkualitas tinggi yang melapaui ekspektasi dan menetapkan standar baru di industri.
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
                    Kami percaya dalam bekerja sama dengan client kami untuk memahami kebutuhan unik mereka dan menciptakan solusi bersama yang menghasilkan hasil yang bermakna.
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
                    Kami terus mengembangkan metode dan konten kami untuk berada di depan tren dan mengintegrasikan penelitian terbaru dalam pembelajaran orang dewasa.
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
                    Kami beroprasi dengan transparansi, kejujuran, dan standar etika dalam semua interaksi kami dengan client, mitra dan anggota tim.
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
                    Kami mengukur kesuksesan kami berdasarkan hasil nyata dan perubahan positif yang kami ciptakan untuk client kami dan organisasi mereka.
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
                    Kami merangkul keberagaman pemikiran, latar belakang dan pengalaman, menciptakan lingkungan pembelajaran dimana setiap orang dapat berkembang dan berkontribusi.
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Tim Kami</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Berkenalan dengan para profesional yang memimpin organisasi kami
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4">
                <Image
                  src="https://images.unsplash.com/photo-1590323007493-7e4cc5943d2b?q=80&w=1374&auto=format&fit=crop"
                  width={300}
                  height={300}
                  alt="Robert Thompson"
                  className="rounded-full object-cover"
                />
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold">Muhammad Faiz</h3>
                  <p className="text-sm text-primary font-medium">Founder & CEO</p>
                  <p className="text-sm text-muted-foreground">
                    Seorang mantan eksekutif dengan pengalaman lebih dari 20 tahun dalam pelatihan dan pengembangan korporat. Mendirikan Mandu Outsource dengan visi untuk mengubah cara organisasi mengembangan talenta.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Image
                  src="https://images.unsplash.com/photo-1627564056961-301499f8677d?q=80&w=1527&auto=format&fit=crop"
                  width={300}
                  height={300}
                  alt="Sophia Martinez"
                  className="rounded-full object-cover"
                />
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold">Putra Samadi</h3>
                  <p className="text-sm text-primary font-medium">Chief Learning Officer</p>
                  <p className="text-sm text-muted-foreground">
                    Sarjana dalam psikologi organisasi dengan keahlian dalam metodologi pembelajaran orang dewasa. Putra Samadi memimpin perkembangan kurikulum kami dan memastikan program kami mengintegrasikan penelitian terbaru dalam pemebelajaran yang efektif.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Image
                  src="https://images.unsplash.com/photo-1614772903208-613ed4282ded?q=80&w=1480&auto=format&fit=crop"
                  width={300}
                  height={300}
                  alt="James Wilson"
                  className="rounded-full object-cover"
                />
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold">Dana Mego</h3>
                  <p className="text-sm text-primary font-medium">Director of Client Success</p>
                  <p className="text-sm text-muted-foreground">
                    Dengan latar belakang dalam konsultasi manajemen, Dana memastikan client kami mencapai hasil yang diinginkan melalui program kami. Ia memimpin tim manager kesuksesan client kami yang memberi dukungan berkelanjutan.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Image
                  src="https://images.unsplash.com/photo-1691034545710-036170315565?q=80&w=1631&auto=format&fit=crop"
                  width={300}
                  height={300}
                  alt="Michelle Lee"
                  className="rounded-full object-cover"
                />
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold">Hasdi Putra</h3>
                  <p className="text-sm text-primary font-medium">Chief Operations Officer</p>
                  <p className="text-sm text-muted-foreground">
                    Hasdi membawa pengalaman 15 tahun dalam kepemimpinan operasional untuk memastikan penyelanggaraan pelatihan global kami berjalan lancar dan efisien. Dia mengawasi ekspansi internasional dan keunggulan operasional kami.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Image
                  src="https://images.unsplash.com/photo-1690166444476-8cc4c0f24032?q=80&w=1372&auto=format&fit=crop"
                  width={300}
                  height={300}
                  alt="David Chen"
                  className="rounded-full object-cover"
                />
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold">Dini Purnama</h3>
                  <p className="text-sm text-primary font-medium">Chief Technology Officer</p>
                  <p className="text-sm text-muted-foreground">
                    Dini memimpin inisiatif pembelajaran digital dan infrasruktur teknologi kami. Dengan latar belakang dalam teknologi pendidikan, Ia membantu kami menciptakan platform dan pengalaman pembelajaran yang inovatif.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Image
                  src="https://images.unsplash.com/photo-1717231859330-ecea77672b46?q=80&w=1374&auto=format&fit=crop"
                  width={300}
                  height={300}
                  alt="Sarah Johnson"
                  className="rounded-full object-cover"
                />
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold">Dimas Rizki</h3>
                  <p className="text-sm text-primary font-medium">Global Director of Training</p>
                  <p className="text-sm text-muted-foreground">
                    Dimas mengawasi tim pelatih dan fasilitator global kami. Dengan pengalaman lebih dari 15 tahun dalam pengembangan kepemimpinan, ia memastikan kualitas dan keunggulan yang konsisten dalam pelaksanaan program di seluruh dunia
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Para Mentor Kami</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Para profesional yang membagikan pengalaman dan pengetahuan mereka dalam program pelatihan kami
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              <div className="flex flex-col items-center space-y-4">
                <Image
                  src="https://images.unsplash.com/photo-1693667983999-d5f206f9780f?q=80&w=1374&auto=format&fit=crop"
                  width={200}
                  height={200}
                  alt="Michael Chen"
                  className="rounded-full object-cover"
                />
                <div className="space-y-2 text-center">
                  <h3 className="text-lg font-bold">Priti Borah</h3>
                  <p className="text-sm text-primary font-medium">Technical Skills Trainer</p>
                  <p className="text-xs text-muted-foreground">
                    Mantan CTO dengan keahlian dalam transformasi digital dan peningkatan keterampilan teknis.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Image
                  src="https://images.unsplash.com/photo-1709377303352-7c845ac999ac?q=80&w=1631&auto=format&fit=crop"
                  width={200}
                  height={200}
                  alt="Elena Rodriguez"
                  className="rounded-full object-cover"
                />
                <div className="space-y-2 text-center">
                  <h3 className="text-lg font-bold">Herlambang Tinasih</h3>
                  <p className="text-sm text-primary font-medium">Communication Coach</p>
                  <p className="text-xs text-muted-foreground">
                    Berspesialisasi dalam meningkatkan dinamika tim dan komunikasi interpersonal.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Image
                  src="https://images.unsplash.com/photo-1600896997793-b8ed3459a17f?q=80&w=1470&auto=format&fit=crop"
                  width={200}
                  height={200}
                  alt="Thomas Wright"
                  className="rounded-full object-cover"
                />
                <div className="space-y-2 text-center">
                  <h3 className="text-lg font-bold">Dimas Duran</h3>
                  <p className="text-sm text-primary font-medium">Financial Services Specialist</p>
                  <p className="text-xs text-muted-foreground">
                    Mantan bankir investasi dengan pengetahuan mendalam tentang regulasi keuangan.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Image
                  src="https://images.unsplash.com/photo-1624471621620-c30f427546ce?q=80&w=1374&auto=format&fit=crop"
                  width={200}
                  height={200}
                  alt="Priya Patel"
                  className="rounded-full object-cover"
                />
                <div className="space-y-2 text-center">
                  <h3 className="text-lg font-bold">Mufid Majnun</h3>
                  <p className="text-sm text-primary font-medium">Technology Transformation Expert</p>
                  <p className="text-xs text-muted-foreground">
                    Berspesialisasi dalam membantu organisasi menghadapi transformasi digital.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Image
                  src="https://images.unsplash.com/photo-1731211187012-763115184a29?q=80&w=1374&auto=format&fit=crop"
                  width={200}
                  height={200}
                  alt="Marcus Johnson"
                  className="rounded-full object-cover"
                />
                <div className="space-y-2 text-center">
                  <h3 className="text-lg font-bold">Dika Permadi</h3>
                  <p className="text-sm text-primary font-medium">Project Management Coach</p>
                  <p className="text-xs text-muted-foreground">
                    Bersertifikat PMP dengan pengalaman memimpin proyek global yang kompleks.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Image
                  src="https://images.unsplash.com/photo-1660795939915-06e72a9178a3?q=80&w=1470&auto=format&fit=crop"
                  width={200}
                  height={200}
                  alt="Olivia Thompson"
                  className="rounded-full object-cover"
                />
                <div className="space-y-2 text-center">
                  <h3 className="text-lg font-bold">Muhammad Aji</h3>
                  <p className="text-sm text-primary font-medium">Diversity & Inclusion Specialist</p>
                  <p className="text-xs text-muted-foreground">
                    Membantu organisasi membangun budaya inklusif yang mendorong inovasi.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Image
                  src="https://images.unsplash.com/photo-1601869608939-eeae595c079f?w=500&auto=format&fit=crop"
                  width={200}
                  height={200}
                  alt="Dr. Jennifer Lee"
                  className="rounded-full object-cover"
                />
                <div className="space-y-2 text-center">
                  <h3 className="text-lg font-bold">Prima Arun</h3>
                  <p className="text-sm text-primary font-medium">Healthcare Industry Expert</p>
                  <p className="text-xs text-muted-foreground">
                    Mantan administrator rumah sakit dengan keahlian dalam manajemen layanan kesehatan.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Image
                  src="https://images.unsplash.com/photo-1618764068818-0b2bbe41d5b9?w=500&auto=format&fit=crop"
                  width={200}
                  height={200}
                  alt="David Park"
                  className="rounded-full object-cover"
                />
                <div className="space-y-2 text-center">
                  <h3 className="text-lg font-bold">Rani Ramdani</h3>
                  <p className="text-sm text-primary font-medium">Sales Training Expert</p>
                  <p className="text-xs text-muted-foreground">
                    Mengembangkan metodologi penjualan pemenang penghargaan untuk perusahaan Fortune 500.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Button variant="outline" asChild>
                <Link href="/mentors">Lihat Semua</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Global Presence Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Keberadaan Kami</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Melayani klien di seluruh dunia dengan keahlian lokal dan praktik terbaik global.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <Image
                src="https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?q=80&w=1480&auto=format&fit=crop"
                width={1200}
                height={600}
                alt="Global Presence Map"
                className="rounded-xl object-cover"
              />
              <div className="grid gap-6 py-8 md:grid-cols-3 lg:gap-12">
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold">Indonesia</h3>
                  <p className="text-muted-foreground">
                    Kantor pusat di jakarta, dan banyak cabang di seluruh penjuru Indonesia
                  </p>
                </div>
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold">Singapura</h3>
                  <p className="text-muted-foreground">Kantor Regional di Singapura</p>
                </div>
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold">Malaysia</h3>
                  <p className="text-muted-foreground">
                    Kantor Regional di Malaysia
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
                  <Link href="/services">Lihat Layanan</Link>
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
              <span>Mandu.corp</span>
            </div>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} TrainingPro. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              2025 Site by Archyst.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
