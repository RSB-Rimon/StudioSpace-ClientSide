export default function StudioLoading() {
  return (
    <main className="min-h-screen bg-[#F8F9FB] px-4 py-10 animate-pulse">
      <div className="mx-auto max-w-7xl">
        {/* Back + Buttons */}
        <div className="mb-7 flex items-center justify-between gap-4">
          <div className="h-6 w-28 rounded-full bg-[#EAE6DF]" />
          <div className="flex gap-3">
            <div className="h-10 w-24 rounded-lg bg-[#EAE6DF]" />
            <div className="h-10 w-28 rounded-lg bg-[#EAE6DF]" />
          </div>
        </div>

        {/* Hero Image Skeleton */}
        <div className="relative h-[280px] overflow-hidden rounded-3xl bg-[#EAE6DF] shadow-md sm:h-[420px] lg:h-[480px]">
          <div className="absolute inset-0 bg-gradient-to-t from-[#EAE6DF]/80 to-transparent" />
          <div className="absolute left-6 top-6 h-10 w-28 rounded-full bg-[#EAE6DF]/70" />
          <div className="absolute bottom-7 left-7 right-7 space-y-3">
            <div className="h-5 w-40 rounded bg-[#EAE6DF]/60" />
            <div className="h-9 w-72 rounded bg-[#EAE6DF]/60 sm:w-96 lg:w-[28rem]" />
          </div>
        </div>

        {/* Main Layout */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left Content */}
          <div className="space-y-8 lg:col-span-2">
            {/* Info Cards */}
            <section className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                  <div className="mb-4 h-12 w-12 rounded-xl bg-[#F5EDE7]" />
                  <div className="h-4 w-24 rounded bg-[#EAE6DF] mb-2" />
                  <div className="h-8 w-28 rounded bg-[#EAE6DF]" />
                </div>
              ))}
            </section>

            {/* About */}
            <section className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm sm:p-8">
              <div className="mb-5 flex items-center gap-3">
                <div className="h-11 w-11 rounded-xl bg-[#F5EDE7]" />
                <div className="h-8 w-48 rounded bg-[#EAE6DF]" />
              </div>
              <div className="space-y-3">
                <div className="h-4 w-full rounded bg-[#EAE6DF]" />
                <div className="h-4 w-5/6 rounded bg-[#EAE6DF]" />
                <div className="h-4 w-4/6 rounded bg-[#EAE6DF]" />
              </div>
            </section>

            {/* Amenities */}
            <section className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm sm:p-8">
              <div className="h-8 w-48 rounded bg-[#EAE6DF] mb-2" />
              <div className="h-4 w-72 rounded bg-[#EAE6DF] mb-6" />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center gap-3 rounded-xl bg-[#F8F9FB] p-4">
                    <div className="h-5 w-5 rounded-full bg-[#F5EDE7]" />
                    <div className="h-4 w-28 rounded bg-[#EAE6DF]" />
                  </div>
                ))}
              </div>
            </section>

            {/* Host */}
            <section className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm sm:p-8">
              <div className="h-7 w-32 rounded bg-[#EAE6DF] mb-6" />
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-full bg-[#F5EDE7]" />
                <div className="space-y-2">
                  <div className="h-5 w-32 rounded bg-[#EAE6DF]" />
                  <div className="h-4 w-48 rounded bg-[#EAE6DF]" />
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside>
            <div className="sticky top-24 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md">
              <div className="bg-[#172B4D] p-6">
                <div className="h-4 w-24 rounded bg-white/20 mb-3" />
                <div className="h-10 w-32 rounded bg-white/20" />
                <div className="h-4 w-48 rounded bg-white/20 mt-4" />
              </div>
              <div className="p-6 space-y-5">
                <div className="flex justify-between">
                  <div className="h-4 w-16 rounded bg-[#EAE6DF]" />
                  <div className="h-4 w-20 rounded bg-[#EAE6DF]" />
                </div>
                <div className="flex justify-between">
                  <div className="h-4 w-20 rounded bg-[#EAE6DF]" />
                  <div className="h-4 w-24 rounded bg-[#EAE6DF]" />
                </div>
                <div className="flex justify-between">
                  <div className="h-4 w-28 rounded bg-[#EAE6DF]" />
                  <div className="h-4 w-20 rounded bg-[#EAE6DF]" />
                </div>
                <div className="my-6 border-t border-gray-100" />
                <div className="flex justify-between">
                  <div className="h-4 w-28 rounded bg-[#EAE6DF]" />
                  <div className="h-4 w-28 rounded bg-[#EAE6DF]" />
                </div>
                <div className="h-12 w-full rounded-xl bg-[#EAE6DF]" />
                <div className="h-3 w-48 mx-auto rounded bg-[#EAE6DF]" />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
