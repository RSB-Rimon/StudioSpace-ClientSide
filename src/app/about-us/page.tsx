
import Link from "next/link";
import {
  Aperture,
  Camera,
  Headphones,
  Lightbulb,
  ShieldCheck,
  Users,
  Target,
  Eye,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted Spaces",
    description:
      "Discover reliable creative spaces with verified host profiles and transparent information.",
  },
  {
    icon: Camera,
    title: "Spaces for Every Creator",
    description:
      "From photography studios to podcast rooms, find the right environment for your project.",
  },
  {
    icon: Lightbulb,
    title: "Inspiring Creativity",
    description:
      "We help creators discover unique spaces where great ideas become reality.",
  },
  {
    icon: Users,
    title: "Creator Community",
    description:
      "Connect studio owners and creative professionals through one simple platform.",
  },
];

const values = [
  "Easy studio discovery and booking",
  "Transparent pricing and studio details",
  "A supportive creator community",
  "Quality spaces for creative projects",
];

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#172B4D]">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#8B5E3C]/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="mb-5 flex items-center gap-2 text-sm font-bold tracking-[3px] text-[#D6A47C]">
              <Aperture size={18} />
              ABOUT STUDIOSPACE
            </p>

            <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
              A Space for Every
              <span className="text-[#D6A47C]"> Creative Vision.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
              StudioSpace connects creative people with inspiring spaces.
              Whether you are a photographer, filmmaker, musician, or
              podcaster, we help you find the perfect place to create.
            </p>

            <Link
              href="/studios"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#8B5E3C] px-7 py-3.5 font-semibold text-white transition hover:bg-[#70472D]"
            >
              Explore Studios
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="relative">
            <div className="absolute -bottom-5 -left-5 h-32 w-32 rounded-xl border-2 border-[#D6A47C]" />

            <Image
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1000&q=90"
              alt="Creative studio workspace"
              width={700}
              height={700}
              className="relative h-[320px] w-full rounded-xl object-cover shadow-2xl md:h-[440px]"
            />

            <div className="absolute -bottom-4 right-4 rounded-lg bg-white p-4 shadow-xl md:right-[-20px]">
              <p className="text-sm font-semibold text-[#172B4D]">
                Your Space.
              </p>
              <p className="text-sm font-semibold text-[#8B5E3C]">
                Your Vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div className="order-2 md:order-1">
         <Image
  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1000&q=90"
  alt="Modern creative workspace"
  width={1000}
  height={700}
  className="h-[300px] w-full rounded-xl object-cover md:h-[420px]"
/>
        </div>

        <div className="order-1 md:order-2">
          <p className="mb-3 text-sm font-bold tracking-[3px] text-[#8B5E3C]">
            OUR STORY
          </p>

          <h2 className="text-3xl font-bold leading-tight text-[#172B4D] md:text-4xl">
            Making Creative Spaces Accessible to Everyone
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Every great creation starts with an idea. But finding the right
            space to bring that idea to life can be difficult. StudioSpace
            was designed to make that process easier.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            Our platform brings studio owners and creators together,
            helping people discover, share, and book spaces for photography,
            filmmaking, podcasting, music production, and more.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-[#F8F9FB] px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-bold tracking-[3px] text-[#8B5E3C]">
              WHAT DRIVES US
            </p>
            <h2 className="text-3xl font-bold text-[#172B4D] md:text-4xl">
              Our Mission & Vision
            </h2>
          </div>

          <div className="grid gap-7 md:grid-cols-2">
            <div className="rounded-xl border border-slate-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg md:p-10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-[#172B4D] text-white">
                <Target size={28} />
              </div>

              <h3 className="text-2xl font-bold text-[#172B4D]">
                Our Mission
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                To make professional creative spaces accessible, affordable,
                and easy to book while helping studio owners connect with
                creators who need their spaces.
              </p>
            </div>

            <div className="rounded-xl border border-slate-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg md:p-10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-[#8B5E3C] text-white">
                <Eye size={28} />
              </div>

              <h3 className="text-2xl font-bold text-[#172B4D]">
                Our Vision
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                To build a connected creative community where every creator
                can find the perfect environment to express ideas and produce
                extraordinary work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold tracking-[3px] text-[#8B5E3C]">
            WHY STUDIOSPACE
          </p>

          <h2 className="text-3xl font-bold text-[#172B4D] md:text-4xl">
            Everything Creators Need in One Place
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            We make discovering and booking creative spaces simple,
            convenient, and reliable.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-xl border border-slate-100 bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-[#F5EDE7] text-[#8B5E3C]">
                  <Icon size={27} />
                </div>

                <h3 className="text-lg font-bold text-[#172B4D]">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-[#172B4D] px-6 py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-bold tracking-[3px] text-[#D6A47C]">
              OUR COMMITMENT
            </p>

            <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
              Creating Better Experiences for Every Creator
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              We believe that the right environment can make a big
              difference. That is why we focus on making every step of
              discovering and booking a studio easier.
            </p>
          </div>

          <div className="space-y-5">
            {values.map((value) => (
              <div key={value} className="flex items-center gap-4">
                <CheckCircle2
                  className="shrink-0 text-[#D6A47C]"
                  size={22}
                />
                <p className="font-medium text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-20 text-center md:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#F5EDE7] text-[#8B5E3C]">
            <Headphones size={30} />
          </div>

          <p className="mb-3 text-sm font-bold tracking-[3px] text-[#8B5E3C]">
            LET&apos;S CREATE TOGETHER
          </p>

          <h2 className="text-3xl font-bold text-[#172B4D] md:text-4xl">
            Your Next Creative Project Starts Here.
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Find your space, connect with creative people, and turn your
            next big idea into reality.
          </p>

          <Link
            href="/studios"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#8B5E3C] px-8 py-3.5 font-semibold text-white transition hover:bg-[#70472D]"
          >
            Find Your Studio
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
