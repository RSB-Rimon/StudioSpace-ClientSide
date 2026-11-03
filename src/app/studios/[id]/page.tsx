import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Users,
  Clock,
  ShieldCheck,
  ArrowLeft,
  CheckCircle2,
  CalendarDays,
  UserRound,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import EditStudioPage from "@/components/EditStudio";
import DeleteStudioPage from "@/components/DeleteStudioPage";
import BookStudioButton from "@/components/BookStudioButton";

interface Studio {
  _id: string;
  title: string;
  category: string;
  location: string;
  hourlyRate: number;
  securityDeposit: number;
  maxCapacity: number;
  image: string;
  availableDate: string; // Added
  amenities: string[];
  overview: string;
  ownerName?: string;
  ownerEmail?: string;
}

interface StudioDetailsPageProps {
  params: Promise<{ id: string }>;
}

const StudioDetailsPage = async ({ params }: StudioDetailsPageProps) => {
  const { id } = await params;

  let data: Studio | null = null;

  try {
    const res = await fetch(`http://localhost:5000/studios/${id}`, {
      cache: "no-store",
    });

    if (res.ok) {
      data = await res.json();
    }
  } catch (error) {
    console.error("Fetch error:", error);
  }

  if (!data) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="rounded-2xl border bg-white p-10 text-center shadow-sm">
          <h2 className="text-2xl font-bold text-[#172B4D]">
            Studio Not Found
          </h2>
          <p className="mt-2 text-gray-500">
            The studio you are looking for does not exist.
          </p>
          <Button className="mt-5 bg-[#8B5E3C] hover:bg-[#70482D]">
            <Link href="/studios">Explore Studios</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#F8F9FB] px-4 py-10">
      <div className="mx-auto max-w-7xl">
        {/* Top Navigation */}
        <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/studios"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 transition hover:text-[#8B5E3C]"
          >
            <ArrowLeft size={18} />
            Back to Studios
          </Link>

          {/* Edit & Delete Buttons */}
          <div className="flex items-center gap-3">
            <EditStudioPage data={data}  />
            <DeleteStudioPage id={id} />
          </div>
        </div>

        {/* Hero Image */}
        <div className="group relative h-[280px] overflow-hidden rounded-3xl shadow-md sm:h-[420px] lg:h-[480px]">
          <Image
            src={data.image}
            alt={data.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          <div className="absolute left-6 top-6">
            <span className="rounded-full bg-white px-5 py-2 text-sm font-bold text-[#8B5E3C] shadow-lg">
              {data.category}
            </span>
          </div>

          <div className="absolute bottom-7 left-7 right-7">
            <div className="mb-3 flex items-center gap-2 text-white/90">
              <MapPin size={18} />
              <span className="text-sm font-medium">{data.location}</span>
            </div>

            <h1 className="max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              {data.title}
            </h1>
          </div>
        </div>

        {/* Main Layout */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left Content */}
          <div className="space-y-8 lg:col-span-2">
            {/* Studio Information Cards */}
            <section className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F5EDE7]">
                  <Clock size={25} className="text-[#8B5E3C]" />
                </div>
                <p className="text-sm font-medium text-gray-500">Hourly Rate</p>
                <h3 className="mt-1 text-2xl font-bold text-[#172B4D]">
                  ${data.hourlyRate}
                  <span className="ml-1 text-sm font-normal text-gray-400">
                    /hr
                  </span>
                </h3>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F5EDE7]">
                  <ShieldCheck size={25} className="text-[#8B5E3C]" />
                </div>
                <p className="text-sm font-medium text-gray-500">
                  Security Deposit
                </p>
                <h3 className="mt-1 text-2xl font-bold text-[#172B4D]">
                  ${data.securityDeposit}
                </h3>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F5EDE7]">
                  <Users size={25} className="text-[#8B5E3C]" />
                </div>
                <p className="text-sm font-medium text-gray-500">
                  Maximum Capacity
                </p>
                <h3 className="mt-1 text-2xl font-bold text-[#172B4D]">
                  {data.maxCapacity}
                  <span className="ml-1 text-sm font-normal text-gray-400">
                    People
                  </span>
                </h3>
              </div>
            </section>

            {/* About Studio */}
            <section className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm sm:p-8">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F5EDE7]">
                  <Sparkles size={22} className="text-[#8B5E3C]" />
                </div>
                <h2 className="text-2xl font-bold text-[#172B4D]">
                  About This Studio
                </h2>
              </div>

              <p className="leading-8 text-gray-600">{data.overview}</p>
            </section>

            {/* Amenities */}
            <section className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm sm:p-8">
              <h2 className="text-2xl font-bold text-[#172B4D]">
                Studio Amenities
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Everything you need for a comfortable experience.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {data.amenities?.map((amenity, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-xl bg-[#F8F9FB] p-4 transition hover:bg-[#F5EDE7]"
                  >
                    <CheckCircle2
                      size={21}
                      className="shrink-0 text-[#8B5E3C]"
                    />
                    <span className="font-medium text-gray-700">{amenity}</span>
                  </div>
                ))}

                {(!data.amenities || data.amenities.length === 0) && (
                  <p className="text-sm text-gray-500">No amenities listed.</p>
                )}
              </div>
            </section>

            {/* Host Information */}
            <section className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm sm:p-8">
              <h2 className="text-xl font-bold text-[#172B4D]">Studio Host</h2>

              <div className="mt-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F5EDE7]">
                  <UserRound size={27} className="text-[#8B5E3C]" />
                </div>

                <div>
                  <h3 className="font-bold text-[#172B4D]">
                    {data.ownerName || "Studio Owner"}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {data.ownerEmail || "Host information unavailable"}
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Booking Sidebar */}
          <aside>
            <div className="sticky top-24 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md">
              <div className="bg-[#172B4D] p-6 text-white">
                <p className="text-sm font-medium text-white/70">
                  Starting from
                </p>

                <h2 className="mt-2 text-4xl font-bold">
                  ${data.hourlyRate}
                  <span className="text-base font-normal text-white/70">
                    {" "}
                    / hour
                  </span>
                </h2>

                <p className="mt-2 text-sm text-white/70">
                  Book your perfect creative space.
                </p>
              </div>

              <div className="p-6">
                <div className="space-y-5 text-sm">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-gray-500">Category</span>
                    <span className="font-semibold text-[#172B4D]">
                      {data.category}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <span className="text-gray-500">Capacity</span>
                    <span className="font-semibold text-[#172B4D]">
                      {data.maxCapacity} People
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <span className="text-gray-500">Security Deposit</span>
                    <span className="font-semibold text-[#172B4D]">
                      ${data.securityDeposit}
                    </span>
                  </div>
                </div>

                <div className="my-6 border-t border-gray-100" />

                {/* Available Date */}
                <div className="flex items-center justify-between gap-3">
                  <span className="flex items-center gap-2 text-gray-500">
                    <CalendarDays size={16} className="text-[#8B5E3C]" />
                    Available Date
                  </span>

                  <span className="font-semibold text-[#172B4D]">
                    {data.availableDate
                      ? new Date(data.availableDate).toLocaleDateString(
                          "en-GB",
                          {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          },
                        )
                      : "Not specified"}
                  </span>
                </div>
                <BookStudioButton studio={data} />

                <p className="mt-4 text-center text-xs text-gray-400">
                  Reserve your creative space today.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default StudioDetailsPage;
