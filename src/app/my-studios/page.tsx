
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
// import { getTokenFromClient } from "@/lib/getTokenFromClient";
import Image from "next/image";
import { getTokenFromClient } from "../lib/getTokenFromClient";
import EditStudioPage from "@/components/EditStudio";
interface Studio {
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
}


export default function MyStudiosPage() {
  const [studios, setStudios] = useState<Studio[]>([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  // NEW: নিজের studios load করা
  const fetchMyStudios = async () => {
    try {
      const token = await getTokenFromClient();

      if (!token) {
        toast.error("Please login first");
        return;
      }

      const res = await fetch("http://localhost:5000/my-studios", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error("Failed to load studios");
      }

      const data = await res.json();
      setStudios(data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load your studios");
    } finally {
      setLoading(false);
    }
  };

  // NEW: Page load হলে studios fetch হবে
  useEffect(() => {
    fetchMyStudios();
  }, []);

  // NEW: Studio delete function
  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this studio?"
    );

    if (!confirmDelete) return;

    try {
      setDeletingId(id);

      const token = await getTokenFromClient();

      const res = await fetch(`http://localhost:5000/studios/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Delete failed");
      }

      // UPDATED: Delete success হলে list থেকে remove
      setStudios((previous) =>
        previous.filter((studio) => studio._id !== id)
      );

      toast.success("Studio deleted successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete studio");
    } finally {
      setDeletingId(null);
    }
  };

  if (loading) {
    return (
      <div className="py-20 text-center">
        <p className="text-lg">Loading your studios...</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#F8F9FB] px-4 py-12">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-3xl font-bold text-[#172B4D]">
              My Studio Listings
            </h1>
            <p className="mt-2 text-gray-600">
              Manage your listed studios
            </p>
          </div>

          {/* NEW: Add studio button */}
          <Link
            href="/add-studio"
            className="rounded-lg bg-[#172B4D] px-5 py-3 text-center text-white hover:bg-[#243d66]"
          >
            + Add New Studio
          </Link>
        </div>

        {/* Empty State */}
        {studios.length === 0 ? (
          <div className="rounded-xl bg-white p-12 text-center shadow-sm">
            <h2 className="text-xl font-semibold text-[#172B4D]">
              No studios found
            </h2>
            <p className="mt-2 text-gray-500">
              You have not added any studios yet.
            </p>
            <Link
              href="/add-studio"
              className="mt-5 inline-block rounded-lg bg-[#8B5E3C] px-5 py-3 text-white"
            >
              Add Your First Studio
            </Link>
          </div>
        ) : (
          /* Studio Cards */
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {studios.map((studio) => (
              <div
                key={studio._id}
                className="overflow-hidden rounded-xl bg-white shadow-sm transition hover:shadow-md"
              >
                {/* Studio Image */}
                <Image
                  width={500}
                  height={300}
                  src={studio.image}
                  alt={studio.title}
                  className="h-52 w-full object-cover"
                />

                <div className="p-5">
                  <h2 className="text-xl font-bold text-[#172B4D]">
                    {studio.title}
                  </h2>

                  <p className="mt-2 text-sm text-gray-500">
                    {studio.category} • {studio.location}
                  </p>

                  <p className="mt-3 font-semibold text-[#8B5E3C]">
                    ৳{studio.hourlyRate}/hour
                  </p>

                  <p className="mt-1 text-sm text-gray-600">
                    Capacity: {studio.maxCapacity} people
                  </p>

                  {/* Action Buttons */}
                  <div className="mt-5 flex flex-wrap gap-2">

                    {/* View Details */}
                    <Link
                      href={`/studios/${studio._id}`}
                      className="rounded-md bg-[#172B4D] px-3 py-2 text-sm text-white"
                    >
                      Details
                    </Link>

                    {/* Edit: route তোমার existing edit page অনুযায়ী পরিবর্তন করবে */}
                    {/* <Link
                      href={`/edit-studio/${studio._id}`}
                      className="rounded-md bg-[#8B5E3C] px-3 py-2 text-sm text-white"
                    >
                      Edit
                    </Link> */}

                    <EditStudioPage data={studio} />

                    {/* Delete */}
                    <button
                      onClick={() => handleDelete(studio._id)}
                      disabled={deletingId === studio._id}
                      className="rounded-md bg-red-600 px-3 py-2 text-sm text-white disabled:opacity-50"
                    >
                      {deletingId === studio._id ? "Deleting..." : "Delete"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
