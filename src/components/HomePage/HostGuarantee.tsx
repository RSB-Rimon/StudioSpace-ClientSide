
import {
  ShieldCheck,
  BadgeCheck,
  Wrench,
  Headset,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Creator Protection",
    description:
      "Enjoy peace of mind with reliable protection for your creative projects.",
  },
  {
    icon: BadgeCheck,
    title: "Verified Profiles",
    description:
      "Connect with trusted studio owners and verified creative spaces.",
  },
  {
    icon: Wrench,
    title: "Equipment Safety",
    description:
      "Find studios with well-maintained equipment and professional facilities.",
  },
  {
    icon: Headset,
    title: "24/7 Support",
    description:
      "Get assistance whenever you need help with your booking.",
  },
];

export default function HostGuarantee() {
  return (
    <section className="bg-[#172B4D] px-6 py-20">
      <div className="mx-auto max-w-7xl">

        <div className="mb-12 text-center">
          <p className="mb-3 font-semibold tracking-widest text-[#D6A47C]">
            YOUR TRUST MATTERS
          </p>

          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Host Guarantee & Creator Support
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            We help creators and studio owners enjoy a safe,
            reliable, and supportive booking experience.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-white/10 bg-white/5 p-7 text-center transition hover:bg-white/10"
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#8B5E3C] text-white">
                <feature.icon size={30} />
              </div>

              <h3 className="mb-3 text-lg font-bold text-white">
                {feature.title}
              </h3>

              <p className="text-sm leading-6 text-slate-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
