
"use client";


import {
  User,
  Mail,
  Phone,
  MapPin,
  CalendarDays,
  Camera,
  Edit,
} from "lucide-react";
import Image from "next/image";
import { useSession } from "../lib/auth-client";

const ProfilePage = () => {
  const { data: session, isPending } = useSession();

  const user = session?.user;

  if (isPending) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-gray-500">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F9FB] p-5 md:p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#172B4D] md:text-3xl">
          My Profile
        </h1>
        <p className="mt-2 text-gray-500">
          Manage your personal information and account details.
        </p>
      </div>

      <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border bg-white shadow-sm">
        {/* Cover */}
        <div className="h-40 bg-gradient-to-r from-[#172B4D] to-[#8B5E3C]" />

        <div className="px-6 pb-8 md:px-10">
          {/* Avatar */}
          <div className="-mt-16 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div className="relative flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-[#F0F3F8] text-[#172B4D]">
              {user?.image ? (
                <Image
                width={128}
                height={128}
                  src={user.image}
                  alt={user.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <User size={55} />
              )}

              <button className="absolute bottom-1 right-1 rounded-full bg-[#8B5E3C] p-2 text-white">
                <Camera size={16} />
              </button>
            </div>

            <button className="flex items-center justify-center gap-2 rounded-xl border px-5 py-3 text-sm font-medium text-[#172B4D] hover:bg-gray-50">
              <Edit size={16} />
              Edit Profile
            </button>
          </div>

          {/* User Name */}
          <div className="mt-5">
            <h2 className="text-2xl font-bold text-[#172B4D]">
              {user?.name || "User"}
            </h2>
            <p className="mt-1 text-gray-500">StudioSpace Member</p>
          </div>

          {/* User Details */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="flex items-center gap-4 rounded-xl bg-[#F8F9FB] p-4">
              <div className="rounded-lg bg-white p-3">
                <Mail className="text-[#8B5E3C]" size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-400">Email Address</p>
                <p className="mt-1 break-all font-medium text-[#172B4D]">
                  {user?.email || "No email"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-xl bg-[#F8F9FB] p-4">
              <div className="rounded-lg bg-white p-3">
                <Phone className="text-[#8B5E3C]" size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-400">Phone Number</p>
                <p className="mt-1 font-medium text-[#172B4D]">
                  Not added yet
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-xl bg-[#F8F9FB] p-4">
              <div className="rounded-lg bg-white p-3">
                <MapPin className="text-[#8B5E3C]" size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-400">Location</p>
                <p className="mt-1 font-medium text-[#172B4D]">
                  Not added yet
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-xl bg-[#F8F9FB] p-4">
              <div className="rounded-lg bg-white p-3">
                <CalendarDays className="text-[#8B5E3C]" size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-400">Member Since</p>
                <p className="mt-1 font-medium text-[#172B4D]">
                  {user?.createdAt
                    ? new Date(user.createdAt).toLocaleDateString("en-US", {
                        month: "long",
                        year: "numeric",
                      })
                    : "Member"}
                </p>
              </div>
            </div>
          </div>

          {/* About */}
          <div className="mt-8">
            <h3 className="mb-3 text-lg font-bold text-[#172B4D]">
              About Me
            </h3>
            <div className="rounded-xl bg-[#F8F9FB] p-5 text-sm leading-6 text-gray-500">
              No bio added yet.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
