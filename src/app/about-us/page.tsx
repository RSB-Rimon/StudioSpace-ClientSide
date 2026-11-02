
import Link from "next/link";
import Image from "next/image";
import { Aperture, ArrowRight, Target, Eye } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-white">

      {/* Section 1: About Hero */}
      <section className="overflow-hidden bg-[#172B4D]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">

          <div>
            <p className="mb-5 flex items-center gap-2 text-sm font-bold tracking-[3px] text-[#D6A47C]">
              <Aperture size={18} />
              ABOUT STUDIOSPACE
            </p>

            <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
              A Space for Every
              <span className="text-[#D6A47C]"> Creative Vision.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">
              StudioSpace connects creative people with inspiring spaces.
              Whether you are a photographer, filmmaker, musician, or
              podcaster, we help you find the perfect place to create.
            </p>

            <Link
              href="/studios"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#8B5E3C] px-7 py-3.5 font-semibold text-white transition hover:bg-[#70472D]"
            >
              Explore Studios
              <ArrowRight size={18} />
            </Link>
          </div>

          <div>
            <Image
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1000&q=90"
              alt="Creative Studio Workspace"
              width={700}
              height={500}
              className="h-[300px] w-full rounded-2xl object-cover shadow-2xl md:h-[420px]"
            />
          </div>

        </div>
      </section>

      {/* Section 2: Mission & Vision */}
      <section className="bg-[#F8F9FB] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-bold tracking-[3px] text-[#8B5E3C]">
              WHAT DRIVES US
            </p>

            <h2 className="text-3xl font-bold text-[#172B4D] md:text-4xl">
              Our Mission & Vision
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
              We believe every creative idea deserves the perfect space
              to become reality.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2">

            {/* Mission Card */}
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg md:p-10">

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#172B4D] text-white">
                <Target size={28} />
              </div>

              <h3 className="text-2xl font-bold text-[#172B4D]">
                Our Mission
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                To make professional creative spaces accessible,
                affordable, and easy to book while helping studio
                owners connect with creators.
              </p>
            </div>

            {/* Vision Card */}
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg md:p-10">

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#8B5E3C] text-white">
                <Eye size={28} />
              </div>

              <h3 className="text-2xl font-bold text-[#172B4D]">
                Our Vision
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                To build a connected creative community where every
                creator can find the perfect environment to express
                ideas and produce extraordinary work.
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
