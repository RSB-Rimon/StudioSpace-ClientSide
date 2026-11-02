import Link from "next/link";
import { Camera, Music, Mic2, ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#F8F9FB] px-4 py-16 flex items-center justify-center">
      <div className="max-w-4xl w-full text-center">
        {/* Illustration Area */}
        <div className="relative mx-auto mb-10 w-72 h-72 sm:w-96 sm:h-96">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#F5EDE7] to-[#F8F9FB] shadow-xl" />
          <div className="absolute inset-6 rounded-full bg-gradient-to-tr from-[#8B5E3C]/10 to-[#F5EDE7] shadow-inner" />

          {/* Creative Icons */}
          <div className="absolute top-10 left-10 bg-white rounded-2xl shadow-lg p-4 rotate-[-6deg]">
            <Camera size={36} className="text-[#8B5E3C]" />
          </div>
          <div className="absolute top-8 right-14 bg-white rounded-2xl shadow-lg p-4 rotate-[8deg]">
            <Mic2 size={36} className="text-[#172B4D]" />
          </div>
          <div className="absolute bottom-10 left-16 bg-white rounded-2xl shadow-lg p-4 rotate-[5deg]">
            <Music size={36} className="text-[#8B5E3C]" />
          </div>
          <div className="absolute bottom-16 right-10 bg-white rounded-2xl shadow-lg p-4 rotate-[-4deg]">
            <Compass size={36} className="text-[#172B4D]" />
          </div>

          {/* Center Badge */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-[#172B4D] text-white rounded-full w-24 h-24 flex items-center justify-center shadow-2xl">
              <span className="text-4xl font-extrabold tracking-tighter">404</span>
            </div>
          </div>
        </div>

        {/* Text */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#172B4D] tracking-tight mb-4">
          Lost in the Studio
        </h1>
        <p className="text-lg sm:text-xl text-gray-500 mb-10 max-w-xl mx-auto leading-relaxed">
          The page you are looking for has vanished like a hidden recording booth. Let&apos;s get you back to the spotlight.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-3 rounded-2xl bg-[#8B5E3C] px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-[#70482D] hover:-translate-y-1 hover:shadow-xl"
        >
          <ArrowLeft size={20} />
          Return to Home
        </Link>
      </div>
    </main>
  );
}
