
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Aperture,
  Menu,
  X,
  LayoutDashboard,
  PlusCircle,
  Building2,
  CalendarDays,
  LogOut,
} from "lucide-react";

import { authClient } from "@/app/lib/auth-client";
import { Button } from "../ui/button";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Explore Studios", href: "/studios" },
  { name: "How It Works", href: "/#how-it-works" },
  { name: "About Us", href: "/about-us" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = () => {
    authClient.signOut();
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white text-slate-800 shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5"
          onClick={() => setIsOpen(false)}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#172B4D] text-white">
            <Aperture size={23} />
          </div>

          <h1 className="text-xl font-bold tracking-tight text-[#172B4D]">
            Studio<span className="text-[#8B5E3C]">Space</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-[#8B5E3C]"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Authentication */}
        <div className="hidden items-center gap-3 md:flex">
          {user ? (
            <Popover>
              <PopoverTrigger className="flex items-center gap-2 rounded-full border border-slate-200 bg-white p-1.5 pr-4 transition hover:border-[#8B5E3C]">
                <Avatar className="h-9 w-9">
                  <AvatarImage
                    src={user.image || ""}
                    referrerPolicy="no-referrer"
                  />
                  <AvatarFallback className="bg-[#172B4D] font-semibold text-white">
                    {user.name?.charAt(0).toUpperCase() || "U"}
                  </AvatarFallback>
                </Avatar>

                <span className="text-sm font-semibold text-[#172B4D]">
                  {user.name}
                </span>
              </PopoverTrigger>

              <PopoverContent
                align="end"
                className="w-64 border-slate-200 bg-white text-slate-800 shadow-lg"
              >
                <PopoverHeader>
                  <PopoverTitle className="text-[#172B4D]">
                    {user.name}
                  </PopoverTitle>
                  <p className="text-sm text-slate-500">
                    {user.email}
                  </p>
                </PopoverHeader>

                <div className="my-2 border-t border-slate-100" />

                <div className="flex flex-col gap-1">
                  <Link
                    href="/dashboard"
                    className="flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-slate-50 hover:text-[#8B5E3C]"
                  >
                    <LayoutDashboard size={17} />
                    Dashboard
                  </Link>

                  <Link
                    href="/add-studio"
                    className="flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-slate-50 hover:text-[#8B5E3C]"
                  >
                    <PlusCircle size={17} />
                    Add New Studio
                  </Link>

                  <Link
                    href="/my-listings"
                    className="flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-slate-50 hover:text-[#8B5E3C]"
                  >
                    <Building2 size={17} />
                    My Studio Listings
                  </Link>

                  <Link
                    href="/my-bookings"
                    className="flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-slate-50 hover:text-[#8B5E3C]"
                  >
                    <CalendarDays size={17} />
                    My Bookings
                  </Link>

                  <Button
                    onClick={handleSignOut}
                    variant="destructive"
                    className="mt-1 w-full justify-start"
                  >
                    <LogOut size={17} />
                    Logout
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          ) : (
            <>
              <Link
                href="/sign-in"
                className="rounded-md px-4 py-2 text-sm font-semibold text-[#172B4D] transition hover:bg-slate-100"
              >
                Sign In
              </Link>

              <Link
                href="/sign-up"
                className="rounded-md bg-[#172B4D] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#263F68]"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-md p-2 text-[#172B4D] transition hover:bg-slate-100 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-5 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-slate-600 transition hover:text-[#8B5E3C]"
              >
                {link.name}
              </Link>
            ))}

            <div className="my-1 border-t border-slate-200" />

            {user ? (
              <>
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage
                      src={user.image || ""}
                      referrerPolicy="no-referrer"
                    />
                    <AvatarFallback className="bg-[#172B4D] text-white">
                      {user.name?.charAt(0).toUpperCase() || "U"}
                    </AvatarFallback>
                  </Avatar>

                  <div>
                    <p className="text-sm font-semibold text-[#172B4D]">
                      {user.name}
                    </p>
                    <p className="text-xs text-slate-500">
                      {user.email}
                    </p>
                  </div>
                </div>

                <Link href="/dashboard" onClick={() => setIsOpen(false)} className="flex items-center gap-3 text-sm text-slate-600 hover:text-[#8B5E3C]">
                  <LayoutDashboard size={17} />
                  Dashboard
                </Link>

                <Link href="/add-studio" onClick={() => setIsOpen(false)} className="flex items-center gap-3 text-sm text-slate-600 hover:text-[#8B5E3C]">
                  <PlusCircle size={17} />
                  Add New Studio
                </Link>

                <Link href="/my-listings" onClick={() => setIsOpen(false)} className="flex items-center gap-3 text-sm text-slate-600 hover:text-[#8B5E3C]">
                  <Building2 size={17} />
                  My Studio Listings
                </Link>

                <Link href="/my-bookings" onClick={() => setIsOpen(false)} className="flex items-center gap-3 text-sm text-slate-600 hover:text-[#8B5E3C]">
                  <CalendarDays size={17} />
                  My Bookings
                </Link>

                <Button
                  onClick={() => {
                    handleSignOut();
                    setIsOpen(false);
                  }}
                  variant="destructive"
                  className="w-full justify-start"
                >
                  <LogOut size={17} />
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link
                  href="/sign-in"
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-semibold text-[#172B4D]"
                >
                  Sign In
                </Link>

                <Link
                  href="/sign-up"
                  onClick={() => setIsOpen(false)}
                  className="rounded-md bg-[#172B4D] px-5 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-[#263F68]"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
