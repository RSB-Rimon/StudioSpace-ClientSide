
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FeaturedStudios from "./FeaturedStudios";
import BrowseCategories from "./BrowseCategories";
import HowBookingWorks from "./HowBookingWorks";

const slides = [
  {
    subtitle: "CREATE WITHOUT LIMITS",
    title: "Find Your Perfect Creative Space.",
    description:
      "Discover inspiring studios and professional spaces to bring your creative ideas to life.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&q=90",
  },
  {
    subtitle: "YOUR VISION, OUR SPACE",
    title: "Where Creativity Meets Opportunity.",
    description:
      "From photography to podcasting, find the perfect space for every creative project.",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=90",
  },
  {
    subtitle: "MAKE SOMETHING AMAZING",
    title: "Turn Your Ideas Into Reality.",
    description:
      "Book unique creative studios and start creating something extraordinary.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=90",
  },
];

export default function HomePage() {
  return (
    <section className="w-full">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        loop
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative flex min-h-[550px] items-center bg-cover bg-center md:min-h-[650px]"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-[#172B4D]/70" />

              {/* Banner Content */}
              <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20">
                <div className="max-w-2xl">
                  <p className="mb-5 text-sm font-bold tracking-[4px] text-[#D6A47C]">
                    {slide.subtitle}
                  </p>

                  <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
                    {slide.title}
                  </h1>

                  <p className="mt-6 max-w-xl text-base leading-8 text-slate-200 md:text-lg">
                    {slide.description}
                  </p>

                  <div className="mt-9 flex flex-wrap gap-4">
                    <Link
                      href="/studios"
                      className="inline-flex items-center gap-2 rounded-md bg-[#8B5E3C] px-7 py-3.5 font-semibold text-white transition hover:bg-[#70472D]"
                    >
                      Explore Studios
                      <ArrowRight size={18} />
                    </Link>

                    <Link
                      href="/add-studio"
                      className="rounded-md border border-white px-7 py-3.5 font-semibold text-white transition hover:bg-white hover:text-[#172B4D]"
                    >
                      List Your Studio
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <FeaturedStudios />
      <BrowseCategories />
      <HowBookingWorks />
    </section>
  );
}
