
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  Clock,
  ShieldCheck,
  MapPin,
  ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { authClient } from "@/app/lib/auth-client";

interface Booking {
  _id: string;
  studioId: string;
  studioTitle: string;
  studioImage: string;
  customerName: string;
  customerEmail: string;
  ownerEmail?: string;
  hourlyRate: number;
  securityDeposit: number;
  status: string;
  createdAt: string;
}

const MyBookingPage = () => {
  const { data: session } = authClient.useSession();

  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      if (!session?.user?.email) {
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(
          `http://localhost:5000/my-bookings?email=${encodeURIComponent(
            session.user.email
          )}`,
          { cache: "no-store" }
        );

        if (!res.ok) {
          throw new Error("Failed to fetch bookings");
        }

        const data = await res.json();
        setBookings(data);
      } catch (error) {
        console.error("Booking fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [session?.user?.email]);

  // Loading
  if (loading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <p className="text-sm font-medium text-[#8B5E3C]">
          Loading your bookings...
        </p>
      </div>
    );
  }

  // Login Required
  if (!session?.user) {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center">
        <h2 className="text-xl font-bold text-[#172B4D]">
          Please Login First
        </h2>

        <Button

          className="mt-4 bg-[#8B5E3C] hover:bg-[#70482D]"
        >
          <Link href="/login">Login</Link>
        </Button>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#F8F9FB] px-4 py-8 sm:py-10">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-7">
          <h1 className="text-2xl font-bold text-[#172B4D] sm:text-3xl">
            My Bookings
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Manage your booked creative studios.
          </p>

          <div className="mt-4 inline-flex rounded-full bg-[#F5EDE7] px-3 py-1 text-xs font-semibold text-[#8B5E3C]">
            {bookings.length} {bookings.length === 1 ? "Booking" : "Bookings"}
          </div>
        </div>

        {/* Empty State */}
        {bookings.length === 0 ? (
          <div className="rounded-xl border border-gray-100 bg-white px-5 py-12 text-center shadow-sm">
            <CalendarDays
              size={45}
              className="mx-auto text-[#D6A47C]"
            />

            <h2 className="mt-4 text-xl font-bold text-[#172B4D]">
              No Bookings Yet
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              You haven&apos;t booked any studio yet.
            </p>

            <Button
       
              className="mt-5 bg-[#8B5E3C] hover:bg-[#70482D]"
            >
              <Link href="/studios">Explore Studios</Link>
            </Button>
          </div>
        ) : (

          /* Compact Booking List */
          <div className="space-y-3">

            {bookings.map((booking) => (
              <div
                key={booking._id}
                className="group flex items-center gap-3 rounded-xl border border-gray-100 bg-white p-3 shadow-sm transition hover:border-[#D6A47C] hover:shadow-md sm:gap-4 sm:p-4"
              >

                {/* Small Studio Image */}
                <Link
                  href={`/studios/${booking.studioId}`}
                  className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg sm:h-24 sm:w-28"
                >
                  {booking.studioImage ? (
                    <Image
                      src={booking.studioImage}
                      alt={booking.studioTitle}
                      fill
                      sizes="112px"
                      className="object-cover transition duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-[#F5EDE7] text-xs text-[#8B5E3C]">
                      No Image
                    </div>
                  )}
                </Link>

                {/* Studio Information */}
                <div className="min-w-0 flex-1">
                  <Link
                    href={`/studios/${booking.studioId}`}
                    className="block truncate text-sm font-bold text-[#172B4D] transition hover:text-[#8B5E3C] sm:text-base"
                  >
                    {booking.studioTitle}
                  </Link>

                  <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Clock size={13} className="text-[#8B5E3C]" />
                      ${booking.hourlyRate}/hr
                    </span>

                    <span className="flex items-center gap-1">
                      <ShieldCheck size={13} className="text-[#8B5E3C]" />
                      ${booking.securityDeposit}
                    </span>
                  </div>

                  <p className="mt-1.5 flex items-center gap-1 truncate text-xs text-gray-500">
                    <MapPin size={13} className="shrink-0 text-[#8B5E3C]" />
                    {booking.ownerEmail || "Host unavailable"}
                  </p>

                  <p className="mt-1 flex items-center gap-1 text-xs text-gray-400">
                    <CalendarDays size={13} />
                    {booking.createdAt
                      ? new Date(booking.createdAt).toLocaleDateString(
                          "en-GB",
                          {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          }
                        )
                      : "Date unavailable"}
                  </p>
                </div>

                {/* Right Side */}
                <div className="flex shrink-0 flex-col items-end justify-center gap-2">
                  <span
                    className={`rounded-full px-2 py-1 text-[10px] font-semibold capitalize sm:text-xs ${
                      booking.status === "pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : booking.status === "confirmed"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {booking.status}
                  </span>

                  <span className="text-sm font-bold text-[#172B4D]">
                    ${booking.securityDeposit}
                  </span>

                  <Link
                    href={`/studios/${booking.studioId}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#8B5E3C] transition hover:text-[#70482D]"
                  >
                    View
                    <ArrowRight size={13} />
                  </Link>
                </div>

              </div>
            ))}

          </div>
        )}
      </div>
    </main>
  );
};

export default MyBookingPage;
