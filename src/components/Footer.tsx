
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Mail,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Explore Studios", href: "/studios" },
  { name: "About Us", href: "/#about" },
  { name: "How It Works", href: "/#how-it-works" },
  { name: "Add Your Studio", href: "/add-studio" },
];

const studioCategories = [
  "Photography Studio",
  "Film Stage",
  "Podcast Lounge",
  "Music Suite",
  "Creative Workshop",
];

const Footer = () => {
  return (
    <footer className="bg-[#172B4D] text-white">
      <div className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-12 pb-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">

          {/* Brand Section */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#D6A47C] text-xl font-bold text-[#172B4D]">
                S
              </div>

              <span className="text-2xl font-bold tracking-tight">
                Studio<span className="text-[#D6A47C]">Space</span>
              </span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-gray-300">
              Your Space. Your Vision. Your Production.
              Discover and book inspiring creative spaces
              to bring your ideas and productions to life.
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <Mail size={17} className="text-[#D6A47C]" />
                <span>support@studiospace.com</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-gray-300">
                <MapPin size={17} className="text-[#D6A47C]" />
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 transition-colors hover:text-[#D6A47C]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">
              Popular Categories
            </h3>

            <ul className="space-y-4">
              {studioCategories.map((category) => (
                <li key={category}>
                  <Link
                    href="/studios"
                    className="text-sm text-gray-300 transition-colors hover:text-[#D6A47C]"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Stay Inspired
            </h3>

            <p className="mb-5 text-sm leading-7 text-gray-300">
              Subscribe to our newsletter for creative
              inspiration, studio updates, and exclusive news.
            </p>

            <form className="flex overflow-hidden rounded-lg border border-white/20 bg-white">
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email address"
                className="min-w-0 flex-1 px-3 py-3 text-sm text-gray-800 outline-none placeholder:text-gray-400"
              />

              <button
                type="submit"
                aria-label="Subscribe"
                className="flex items-center justify-center bg-[#8B5E3C] px-4 text-white transition-colors hover:bg-[#D6A47C]"
              >
                <ArrowRight size={19} />
              </button>
            </form>

            <p className="mt-3 text-xs text-gray-400">
              We respect your privacy. Unsubscribe anytime.
            </p>

            {/* Social Links */}
            <div className="mt-7">
              <h4 className="mb-4 text-sm font-semibold">
                Follow Us
              </h4>

              <div className="flex items-center gap-3">

                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-all hover:border-[#D6A47C] hover:bg-[#D6A47C] hover:text-[#172B4D]"
                >
                  <FaFacebookF size={18} />
                </a>

                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-all hover:border-[#D6A47C] hover:bg-[#D6A47C] hover:text-[#172B4D]"
                >
                  <FaInstagram size={18} />
                </a>

                <a
                  href="https://x.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-all hover:border-[#D6A47C] hover:bg-[#D6A47C] hover:text-[#172B4D]"
                >
                  <FaXTwitter size={18} />
                </a>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-all hover:border-[#D6A47C] hover:bg-[#D6A47C] hover:text-[#172B4D]"
                >
                  <FaLinkedinIn size={18} />
                </a>

              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/15 py-6 text-center sm:flex-row sm:text-left">

          <p className="text-xs text-gray-400 sm:text-sm">
            © {new Date().getFullYear()} StudioSpace. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <Link
              href="/terms"
              className="text-xs text-gray-400 transition-colors hover:text-[#D6A47C] sm:text-sm"
            >
              Terms & Conditions
            </Link>

            <Link
              href="/privacy"
              className="text-xs text-gray-400 transition-colors hover:text-[#D6A47C] sm:text-sm"
            >
              Privacy Policy
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
