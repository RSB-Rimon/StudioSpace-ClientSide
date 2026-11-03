
import Link from "next/link";

const categories = [
  "Photo Studios",
  "Sound Stages",
  "Podcast Rooms",
  "Music Suites",
  "Art Workshops",
];

export default function BrowseCategories() {
  return (
    <section className="bg-white px-6 py-16">
      <div className="mx-auto max-w-7xl">

        <h2 className="mb-10 text-center text-3xl font-bold text-[#172B4D]">
          Browse Categories
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((category) => (
            <Link
              key={category}
              href={`/studios?category=${encodeURIComponent(category)}`}
              className="rounded-xl border p-6 text-center font-semibold text-[#172B4D] transition hover:bg-[#8B5E3C] hover:text-white"
            >
              {category}
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
