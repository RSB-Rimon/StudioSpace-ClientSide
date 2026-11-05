
"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Building2,
  CalendarDays,
  Plus,
  Compass,
  User,
  Settings,
  Bell,
  ArrowUpRight,
  Clock,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FB] text-[#172B4D]">

      {/* Header */}
      <header className="flex items-center justify-between border-b bg-white px-6 py-4">
        <h1 className="text-xl font-bold">StudioSpace</h1>

        <div className="flex items-center gap-4">
          <Bell className="h-5 w-5 text-gray-500" />
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#172B4D] text-white">
            <User size={18} />
          </div>
        </div>
      </header>

      <div className="flex">

        {/* Sidebar */}
        <aside className="hidden min-h-screen w-64 border-r bg-white p-5 md:block">
          <p className="mb-5 text-xs font-semibold uppercase tracking-wider text-gray-400">
            Menu
          </p>

          <nav className="space-y-2">
            <Link href="/dashboard" className="flex items-center gap-3 rounded-xl bg-[#172B4D] px-4 py-3 text-white">
              <LayoutDashboard size={18} />
              Dashboard
            </Link>

            <Link href="/my-studios" className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-gray-100">
              <Building2 size={18} />
              My Studios
            </Link>

            <Link href="/my-bookings" className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-gray-100">
              <CalendarDays size={18} />
              My Bookings
            </Link>

            <Link href="/studios" className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-gray-100">
              <Compass size={18} />
              Explore Studios
            </Link>

            <Link href="/profile" className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-gray-100">
              <User size={18} />
              My Profile
            </Link>

            <Link href="/settings" className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-gray-100">
              <Settings size={18} />
              Settings
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-5 md:p-8">

          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">
                Dashboard Overview
              </h2>
              <p className="mt-2 text-gray-500">
                Welcome back! Manage your studios and bookings.
              </p>
            </div>

            <Link
              href="/add-studio"
              className="flex items-center justify-center gap-2 rounded-xl bg-[#172B4D] px-5 py-3 text-white transition hover:bg-[#243f6b]"
            >
              <Plus size={18} />
              Add New Studio
            </Link>
          </div>

          {/* Statistics Cards */}
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {[
              { title: "Total Studios", value: "0", icon: Building2 },
              { title: "Total Bookings", value: "0", icon: CalendarDays },
              { title: "Pending Bookings", value: "0", icon: Clock },
              { title: "Confirmed Bookings", value: "0", icon: ArrowUpRight },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-5 flex items-center justify-between">
                  <p className="text-sm text-gray-500">{item.title}</p>
                  <div className="rounded-xl bg-[#F0F3F8] p-3">
                    <item.icon size={20} className="text-[#172B4D]" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold">{item.value}</h3>
                <p className="mt-2 text-xs text-gray-400">
                  Overview statistics
                </p>
              </div>
            ))}
          </div>

          {/* Content Sections */}
          <div className="mt-8 grid gap-6 xl:grid-cols-3">

            {/* Recent Bookings */}
            <div className="rounded-2xl border bg-white p-6 xl:col-span-2">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-lg font-bold">Recent Bookings</h3>
                <Link href="/my-bookings" className="text-sm font-medium text-[#8B5E3C] hover:underline">
                  View All
                </Link>
              </div>

              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="mb-4 rounded-full bg-[#F0F3F8] p-4">
                  <CalendarDays size={28} className="text-gray-400" />
                </div>
                <p className="font-medium text-gray-600">No bookings yet</p>
                <p className="mt-1 text-sm text-gray-400">
                  Your recent bookings will appear here.
                </p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="rounded-2xl border bg-white p-6">
              <h3 className="mb-5 text-lg font-bold">Quick Actions</h3>

              <div className="space-y-3">
                <Link href="/add-studio" className="flex items-center gap-3 rounded-xl border p-4 transition hover:bg-gray-50">
                  <Plus size={20} className="text-[#8B5E3C]" />
                  <div>
                    <p className="font-medium">Add Studio</p>
                    <p className="text-xs text-gray-400">Create a new listing</p>
                  </div>
                </Link>

                <Link href="/my-studios" className="flex items-center gap-3 rounded-xl border p-4 transition hover:bg-gray-50">
                  <Building2 size={20} className="text-[#8B5E3C]" />
                  <div>
                    <p className="font-medium">My Studios</p>
                    <p className="text-xs text-gray-400">Manage your listings</p>
                  </div>
                </Link>

                <Link href="/studios" className="flex items-center gap-3 rounded-xl border p-4 transition hover:bg-gray-50">
                  <Compass size={20} className="text-[#8B5E3C]" />
                  <div>
                    <p className="font-medium">Explore Studios</p>
                    <p className="text-xs text-gray-400">Discover new spaces</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-8 rounded-2xl bg-[#172B4D] p-6 text-white md:p-8">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <div>
                <h3 className="text-xl font-bold">Ready to create your next studio?</h3>
                <p className="mt-2 text-sm text-gray-300">
                  Share your creative space with the StudioSpace community.
                </p>
              </div>
              <Link href="/add-studio" className="rounded-xl bg-white px-5 py-3 text-center font-semibold text-[#172B4D] hover:bg-gray-100">
                Create Studio
              </Link>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
