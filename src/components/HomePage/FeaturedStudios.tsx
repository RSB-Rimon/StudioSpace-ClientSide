
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MapPin, Star, ArrowRight } from "lucide-react";
import Image from "next/image";

interface Studio {
  _id: string;
  name?: string;
  title?: string;
  image?: string;
  imageUrl?: string;
  category?: string;
  price?: number;
  hourlyRate?: number;
  rating?: number;
  location?: string;
}

export default function FeaturedStudios() {
  const [studios, setStudios] = useState<Studio[]>([]);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
  const loadStudios = async () => {
    const res = await fetch("http://localhost:5000/exploreStudios");
    const data = await res.json();

    setStudios(data.slice(0, 6));
    setLoading(false);
  };

  loadStudios();
}, []);

  if (loading) {
    return (
      <section className="py-20 text-center">
        <p className="text-[#172B4D]">Loading studios...</p>
      </section>
    );
  }

  return (
    <section className="bg-[#F8F9FB] px-6 py-20">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 font-semibold tracking-widest text-[#8B5E3C]">
            EXPLORE OUR COLLECTION
          </p>

          <h2 className="text-3xl font-bold text-[#172B4D] md:text-4xl">
            Featured Studios
          </h2>

          <p className="mt-4 text-gray-600">
            Discover inspiring spaces for your next creative project.
          </p>
        </div>

        {/* Studio Cards */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">

          {studios.map((studio) => (
            <div
              key={studio._id}
              className="overflow-hidden rounded-xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Studio Image */}
              <div className="relative h-56">
                <Image
                width={400}
                height={224}
                  src={studio.image || studio.imageUrl || "/placeholder.jpg"}
                  alt={studio.name || studio.title || "Studio"}
                  className="h-full w-full object-cover"
                />

                {/* Category */}
                <span className="absolute left-4 top-4 rounded-full bg-white px-4 py-1 text-sm font-medium text-[#8B5E3C]">
                  {studio.category || "Studio"}
                </span>
              </div>

              {/* Studio Information */}
              <div className="p-5">

                <h3 className="text-xl font-bold text-[#172B4D]">
                  {studio.name || studio.title || "Creative Studio"}
                </h3>

                <div className="mt-3 flex items-center justify-between">
                  <p className="flex items-center gap-1 text-sm text-gray-500">
                    <MapPin size={16} />
                    {studio.location || "Location unavailable"}
                  </p>

                  <p className="flex items-center gap-1 text-sm font-medium text-amber-500">
                    <Star size={16} fill="currentColor" />
                    {studio.rating || "New"}
                  </p>
                </div>

                {/* Price */}
                <div className="mt-5 flex items-center justify-between border-t pt-4">
                  <p className="text-lg font-bold text-[#8B5E3C]">
                    ${studio.hourlyRate || studio.price || 0}
                    <span className="text-sm font-normal text-gray-500">
                      /hr
                    </span>
                  </p>

                  <Link
                    href={`/studios/${studio._id}`}
                    className="flex items-center gap-2 rounded-md bg-[#172B4D] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#8B5E3C]"
                  >
                    View Details
                    <ArrowRight size={16} />
                  </Link>
                </div>

              </div>
            </div>
          ))}

        </div>

        {/* Explore All Button */}
        <div className="mt-12 text-center">
          <Link
            href="/studios"
            className="inline-flex items-center gap-2 rounded-md bg-[#8B5E3C] px-7 py-3 font-semibold text-white transition hover:bg-[#70472D]"
          >
            Explore All Studios
            <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
}
