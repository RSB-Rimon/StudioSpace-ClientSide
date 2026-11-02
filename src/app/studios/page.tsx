import Image from "next/image";
import Link from "next/link";
import { MapPin, Users, ArrowRight } from "lucide-react";
// import { Button } from "@base-ui/react";
// import { Button } from "@/components/ui/button";

type Studio = {
  _id: string;
  title: string;
  category: string;
  location: string;
  hourlyRate: number;
  securityDeposit: number;
  maxCapacity: number;
  image: string;
  amenities: string[];
  overview: string;
  ownerName: string;
  ownerEmail: string;
};

const ExploreStudioPage = async () => {
  let studios: Studio[] = [];

  try {
    const res = await fetch("http://localhost:5000/exploreStudios", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch studios");
    }

    studios = await res.json();
  } catch (error) {
    console.error("Studio fetching error:", error);
  }

  return (
    <main className="min-h-screen bg-[#F8F9FB]">
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Page Heading */}
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[3px] text-[#8B5E3C]">
            Discover Your Creative Space
          </p>

          <h1 className="text-3xl font-bold text-[#172B4D] sm:text-4xl lg:text-5xl">
            Explore Studios
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            Find the perfect creative space for your next photography,
            filmmaking, podcast, or production project.
          </p>
        </div>

        {/* Studio Count */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-[#172B4D]">
            Available Studios
          </h2>

          <p className="text-sm text-gray-500">
            {studios.length} {studios.length === 1 ? "Studio" : "Studios"} Found
          </p>
        </div>

        {/* Studio Cards */}
        {studios.length > 0 ? (
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {studios.map((studio) => (
              <div
                key={studio._id}
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Studio Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={studio.image}
                    alt={studio.title}
                    width={500}
                    height={350}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="h-[240px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <span className="absolute left-4 top-4 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-[#8B5E3C] shadow-sm">
                    {studio.category}
                  </span>
                </div>

                {/* Studio Information */}
                <div className="p-5">
                  <h3 className="mb-2 line-clamp-1 text-xl font-bold text-[#172B4D]">
                    {studio.title}
                  </h3>

                  <div className="mb-4 flex items-center gap-2 text-sm text-gray-500">
                    <MapPin size={16} className="shrink-0 text-[#8B5E3C]" />
                    <span className="line-clamp-1">{studio.location}</span>
                  </div>

                  <p className="mb-5 line-clamp-2 min-h-10 text-sm leading-6 text-gray-500">
                    {studio.overview}
                  </p>

                  {/* Studio Features */}
                  <div className="mb-5 flex flex-wrap gap-2">
                    {studio.amenities.slice(0, 3).map((amenity) => (
                      <span
                        key={amenity}
                        className="rounded-md bg-[#F5EDE7] px-3 py-1 text-xs font-medium text-[#8B5E3C]"
                      >
                        {amenity}
                      </span>
                    ))}

                    {studio.amenities.length > 3 && (
                      <span className="rounded-md bg-gray-100 px-3 py-1 text-xs text-gray-600">
                        +{studio.amenities.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Price and Capacity */}
                  <div className="flex items-center justify-between border-t border-gray-100 py-4">
                    <div>
                      <p className="text-xs text-gray-500">Hourly Rate</p>
                      <p className="text-xl font-bold text-[#8B5E3C]">
                        ${studio.hourlyRate}
                        <span className="text-xs font-normal text-gray-500">
                          {" "}
                          / hour
                        </span>
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="flex items-center justify-end gap-1 text-xs text-gray-500">
                        <Users size={14} />
                        Capacity
                      </p>
                      <p className="font-semibold text-[#172B4D]">
                        {studio.maxCapacity} People
                      </p>
                    </div>
                  </div>

                  {/* View Details Button */}
                  <Link
                    href={`/studios/${studio._id}`}
                    className="flex w-full items-center justify-center rounded-lg bg-[#172B4D] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#8B5E3C]"
                  >
                    View Details
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-5 py-16 text-center">
            <h3 className="text-xl font-semibold text-[#172B4D]">
              No Studios Available
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              There are currently no studios to explore. Please check back
              later.
            </p>
          </div>
        )}
      </section>
    </main>
  );
};

export default ExploreStudioPage;
