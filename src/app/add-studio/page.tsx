
"use client";

import {
  PlusCircle,
  ImagePlus,
  MapPin,
  DollarSign,
  Users,
  Building2,
  UserRound,
  CalendarDays,
} from "lucide-react";

const categories = [
  "Photo Studio",
  "Film Stage",
  "Podcast Lounge",
  "Music Suite",
  "Workshop",
  "Other",
];

const amenities = [
  "WiFi",
  "Air Conditioning",
  "Lighting Equipment",
  "Parking",
  "Soundproof",
  "Restroom",
  "Waiting Area",
  "Furniture",
];

const AddNewStudioPage = () => {
  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      title: formData.get("title"),
      category: formData.get("category"),
      location: formData.get("location"),
      availableDate: formData.get("availableDate"),
      hourlyRate: Number(formData.get("hourlyRate")),
      securityDeposit: Number(formData.get("securityDeposit")),
      maxCapacity: Number(formData.get("maxCapacity")),
      image: formData.get("image"),
      amenities: formData.getAll("amenities"),
      overview: formData.get("overview"),
      ownerName: formData.get("ownerName"),
      ownerEmail: formData.get("ownerEmail"),
    };

    console.log("Form Data:", data);

    try {
      const res = await fetch("http://localhost:5000/add-studios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      console.log("Backend Response:", result);

      if (!res.ok) {
        throw new Error(result.message || "Failed to add studio");
      }

      alert("Studio added successfully!");
      form.reset();
    } catch (error) {
      console.error("Error adding studio:", error);
    }
  };

  return (
    <main className="min-h-screen bg-[#F8F9FB] px-4 py-12">
      <div className="mx-auto max-w-4xl">

        {/* Page Heading */}
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#8B5E3C]">
            Share Your Creative Space
          </p>

          <h1 className="text-3xl font-bold text-[#172B4D] md:text-4xl">
            Add New Studio
          </h1>

          <p className="mt-3 text-sm leading-6 text-slate-500 md:text-base">
            List your workspace and connect with creative professionals looking
            for the perfect space.
          </p>
        </div>

        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          className="space-y-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-8"
        >

          {/* Basic Information */}
          <section>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#F5EDE7] text-[#8B5E3C]">
                <Building2 size={22} />
              </div>

              <div>
                <h2 className="text-lg font-bold text-[#172B4D]">
                  Basic Information
                </h2>
                <p className="text-sm text-slate-500">
                  Tell us about your creative workspace.
                </p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">

              {/* Studio Title */}
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Studio Title *
                </label>

                <input
                  type="text"
                  name="title"
                  required
                  placeholder="e.g. Professional Photography Studio"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#8B5E3C] focus:ring-2 focus:ring-[#8B5E3C]/10"
                />
              </div>

              {/* Category */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Studio Category *
                </label>

                <select
                  name="category"
                  defaultValue=""
                  required
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-600 outline-none focus:border-[#8B5E3C]"
                >
                  <option value="" disabled>
                    Select category
                  </option>

                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Location */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Location / Address *
                </label>

                <div className="relative">
                  <MapPin
                    size={18}
                    className="absolute left-3 top-3.5 text-slate-400"
                  />

                  <input
                    type="text"
                    name="location"
                    required
                    placeholder="e.g. Dhanmondi, Dhaka"
                    className="w-full rounded-lg border border-slate-300 py-3 pl-10 pr-4 text-sm outline-none focus:border-[#8B5E3C]"
                  />
                </div>
              </div>

              {/* Available Date */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Available Date *
                </label>

                <div className="relative">
                  <CalendarDays
                    size={18}
                    className="absolute left-3 top-3.5 text-slate-400"
                  />

                  <input
                    type="date"
                    name="availableDate"
                    required
                    className="w-full rounded-lg border border-slate-300 bg-white py-3 pl-10 pr-4 text-sm outline-none focus:border-[#8B5E3C]"
                  />
                </div>
              </div>

            </div>
          </section>

          <div className="border-t border-slate-100" />

          {/* Pricing & Capacity */}
          <section>
            <div className="mb-6">
              <h2 className="text-lg font-bold text-[#172B4D]">
                Pricing & Capacity
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Set your rental price and workspace capacity.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">

              {/* Hourly Rate */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Hourly Rate ($) *
                </label>

                <div className="relative">
                  <DollarSign
                    size={17}
                    className="absolute left-3 top-3.5 text-slate-400"
                  />

                  <input
                    type="number"
                    name="hourlyRate"
                    required
                    min="1"
                    placeholder="50"
                    className="w-full rounded-lg border border-slate-300 py-3 pl-9 pr-3 text-sm outline-none focus:border-[#8B5E3C]"
                  />
                </div>
              </div>

              {/* Security Deposit */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Security Deposit ($) *
                </label>

                <div className="relative">
                  <DollarSign
                    size={17}
                    className="absolute left-3 top-3.5 text-slate-400"
                  />

                  <input
                    type="number"
                    name="securityDeposit"
                    required
                    min="0"
                    placeholder="100"
                    className="w-full rounded-lg border border-slate-300 py-3 pl-9 pr-3 text-sm outline-none focus:border-[#8B5E3C]"
                  />
                </div>
              </div>

              {/* Max Capacity */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Max Capacity *
                </label>

                <div className="relative">
                  <Users
                    size={17}
                    className="absolute left-3 top-3.5 text-slate-400"
                  />

                  <input
                    type="number"
                    name="maxCapacity"
                    required
                    min="1"
                    placeholder="10"
                    className="w-full rounded-lg border border-slate-300 py-3 pl-9 pr-3 text-sm outline-none focus:border-[#8B5E3C]"
                  />
                </div>
              </div>

            </div>
          </section>

          <div className="border-t border-slate-100" />

          {/* Studio Image */}
          <section>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#F5EDE7] text-[#8B5E3C]">
                <ImagePlus size={22} />
              </div>

              <div>
                <h2 className="text-lg font-bold text-[#172B4D]">
                  Studio Image
                </h2>

                <p className="text-sm text-slate-500">
                  Add an attractive image of your workspace.
                </p>
              </div>
            </div>

            <input
              type="url"
              name="image"
              required
              placeholder="Enter studio image URL"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-[#8B5E3C]"
            />

            <p className="mt-2 text-xs text-slate-400">
              You can connect imgbb image uploading functionality here.
            </p>
          </section>

          <div className="border-t border-slate-100" />

          {/* Amenities */}
          <section>
            <h2 className="text-lg font-bold text-[#172B4D]">
              Studio Amenities
            </h2>

            <p className="mb-5 mt-1 text-sm text-slate-500">
              Select the facilities available in your workspace.
            </p>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {amenities.map((amenity) => (
                <label
                  key={amenity}
                  className="flex cursor-pointer items-center gap-2 text-sm text-slate-600"
                >
                  <input
                    type="checkbox"
                    name="amenities"
                    value={amenity}
                    className="h-4 w-4 accent-[#8B5E3C]"
                  />

                  {amenity}
                </label>
              ))}
            </div>
          </section>

          <div className="border-t border-slate-100" />

          {/* Detailed Overview */}
          <section>
            <h2 className="text-lg font-bold text-[#172B4D]">
              Detailed Overview
            </h2>

            <p className="mb-5 mt-1 text-sm text-slate-500">
              Describe your workspace and its unique features.
            </p>

            <textarea
              name="overview"
              required
              rows={5}
              placeholder="Write a detailed description of your studio..."
              className="w-full resize-none rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#8B5E3C] focus:ring-2 focus:ring-[#8B5E3C]/10"
            />
          </section>

          <div className="border-t border-slate-100" />

          {/* Host Information */}
          <section>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#F5EDE7] text-[#8B5E3C]">
                <UserRound size={22} />
              </div>

              <div>
                <h2 className="text-lg font-bold text-[#172B4D]">
                  Host Information
                </h2>

                <p className="text-sm text-slate-500">
                  Your account information.
                </p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">

              {/* Host Name */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Host Name
                </label>

                <input
                  type="text"
                  name="ownerName"
                  readOnly
                  placeholder="Your name"
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-500 outline-none"
                />
              </div>

              {/* Host Email */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Host Email
                </label>

                <input
                  type="email"
                  name="ownerEmail"
                  readOnly
                  placeholder="Your email"
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-500 outline-none"
                />
              </div>

            </div>
          </section>

          {/* Submit Button */}
          <div className="border-t border-slate-100 pt-6">
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#172B4D] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#8B5E3C] md:w-auto md:min-w-48"
            >
              <PlusCircle size={19} />
              Add Studio
            </button>
          </div>

        </form>
      </div>
    </main>
  );
};

export default AddNewStudioPage;
