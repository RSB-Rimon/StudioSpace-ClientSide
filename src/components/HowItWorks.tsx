
import { Search, CalendarDays, CreditCard, Camera } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Find Your Studio",
    description: "Explore creative spaces and choose your perfect studio.",
  },
  {
    icon: CalendarDays,
    title: "Choose Your Date",
    description: "Select your preferred date and booking time.",
  },
  {
    icon: CreditCard,
    title: "Confirm Booking",
    description: "Complete your booking with a few simple steps.",
  },
  {
    icon: Camera,
    title: "Start Creating",
    description: "Enjoy your studio and bring your ideas to life.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white px-6 py-16">
      <div className="mx-auto max-w-7xl">

        <div className="mb-12 text-center">
          <p className="mb-3 font-semibold text-[#8B5E3C]">
            SIMPLE BOOKING PROCESS
          </p>

          <h2 className="text-3xl font-bold text-[#172B4D]">
            How It Works
          </h2>

          <p className="mt-4 text-gray-600">
            Booking your perfect studio is easier than ever.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-xl border border-gray-200 p-6 text-center transition hover:shadow-md"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#F5EDE7] text-[#8B5E3C]">
                <step.icon size={26} />
              </div>

              <p className="mb-2 text-sm font-semibold text-[#8B5E3C]">
                STEP {index + 1}
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
