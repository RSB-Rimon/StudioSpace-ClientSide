
import { Search, Clock, CalendarCheck, Camera } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover Spaces",
    description: "Explore creative studios and find your perfect space.",
  },
  {
    icon: Clock,
    title: "Select Shoot Hours",
    description: "Choose your preferred date and booking hours.",
  },
  {
    icon: CalendarCheck,
    title: "Book Instantly",
    description: "Complete your booking with a few simple clicks.",
  },
  {
    icon: Camera,
    title: "Create & Produce",
    description: "Bring your creative ideas to life in your studio.",
  },
];

export default function HowBookingWorks() {
  return (
    <section className="bg-[#F8F9FB] px-6 py-20">
      <div className="mx-auto max-w-7xl">

        <div className="mb-12 text-center">
          <p className="mb-3 font-semibold tracking-widest text-[#8B5E3C]">
            SIMPLE & EASY
          </p>

          <h2 className="text-3xl font-bold text-[#172B4D] md:text-4xl">
            How Booking Works
          </h2>

          <p className="mt-4 text-gray-600">
            Book your perfect creative space in just four easy steps.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-xl bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#F5EDE7] text-[#8B5E3C]">
                <step.icon size={30} />
              </div>

              <p className="mb-2 text-sm font-bold text-[#D6A47C]">
                STEP 0{index + 1}
              </p>

              <h3 className="mb-3 text-lg font-bold text-[#172B4D]">
                {step.title}
              </h3>

              <p className="text-sm leading-6 text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
