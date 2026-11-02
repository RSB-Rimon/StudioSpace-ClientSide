
"use client";

import { toast } from "react-toastify";

import { useEffect, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Pencil,
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

interface Studio {
  _id: string;
  title: string;
  category: string;
  location: string;
  hourlyRate: number;
  securityDeposit: number;
  maxCapacity: number;
  image: string;
  amenities: string[];
  overview: string;
  ownerName: string;
  ownerEmail: string;
}

interface Props {
  data: Studio;
}

const EditStudioPage = ({ data }: Props) => {
  const [open, setOpen] = useState(false);
  const [studio, setStudio] = useState<Studio>(data);
  const [loading, setLoading] = useState(false);
  const [updating, setUpdating] = useState(false);

  // Fetch existing studio data
  useEffect(() => {
    if (!open || !data?._id) return;

    const fetchStudio = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `http://localhost:5000/studios/${data._id}`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch studio");
        }

        const result = await res.json();

        setStudio(result);
      } catch (error) {
        console.error(error);
        toast.error("Failed to load studio data!");
      } finally {
        setLoading(false);
      }
    };

    fetchStudio();
  }, [open, data?._id]);

  // Update studio
  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const updatedData = {
      title: formData.get("title"),
      category: formData.get("category"),
      location: formData.get("location"),
      hourlyRate: Number(formData.get("hourlyRate")),
      securityDeposit: Number(formData.get("securityDeposit")),
      maxCapacity: Number(formData.get("maxCapacity")),
      image: formData.get("image"),
      amenities: formData.getAll("amenities"),
      overview: formData.get("overview"),
      ownerName: formData.get("ownerName"),
      ownerEmail: formData.get("ownerEmail"),
    };

    try {
      setUpdating(true);

      const res = await fetch(
        `http://localhost:5000/studios/${data._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedData),
        }
      );

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "Update failed");
      }

      toast.success("Studio updated successfully!");

      setOpen(false);

      // Refresh latest data
      window.location.reload();

    } catch (error) {
      console.error("Update Error:", error);
        toast.error("Failed to update studio!");
    } finally {
      setUpdating(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger >
        <button
          type="button"
          className="h-10 inline-flex items-center justify-center gap-2 rounded-lg border border-[#8B5E3C] bg-transparent px-5 text-sm font-medium text-[#8B5E3C] transition-colors hover:bg-[#F5EDE7]"
        >
          <Pencil size={16} />
          Edit Studio
        </button>
      </DialogTrigger>

      <DialogContent className="w-[95vw] max-w-3xl max-h-[90dvh] overflow-hidden flex flex-col gap-0 p-0 rounded-2xl">

        {/* Header */}
        <DialogHeader className="shrink-0 border-b border-slate-200 px-6 py-5 text-left">
          <DialogTitle className="text-xl font-bold text-[#172B4D]">
            Edit Studio
          </DialogTitle>

          <DialogDescription>
            Update your studio information below.
          </DialogDescription>
        </DialogHeader>

        {loading ? (
          <div className="flex min-h-[300px] items-center justify-center">
            Loading studio information...
          </div>
        ) : studio ? (

          <form
            onSubmit={handleSubmit}
            className="flex min-h-0 flex-1 flex-col overflow-hidden"
          >
            <div className="flex-1 min-h-0 overflow-y-auto px-6 py-6 md:px-8 space-y-8">

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
                  <div className="md:col-span-2">
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Studio Title *
                    </label>

                    <input
                      required
                      type="text"
                      name="title"
                      defaultValue={studio.title || ""}
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-[#8B5E3C]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Studio Category *
                    </label>

                    <select
                      required
                      name="category"
                      defaultValue={studio.category || ""}
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-[#8B5E3C]"
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
                        required
                        name="location"
                        defaultValue={studio.location || ""}
                        className="w-full rounded-lg border border-slate-300 py-3 pl-10 pr-4 text-sm outline-none focus:border-[#8B5E3C]"
                      />
                    </div>
                  </div>
                </div>
              </section>

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

              <div className="border-t border-slate-100" />

              {/* Pricing */}
              <section>
                <h2 className="mb-5 text-lg font-bold text-[#172B4D]">
                  Pricing & Capacity
                </h2>

                <div className="grid gap-5 md:grid-cols-3">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Hourly Rate ($) *
                    </label>

                    <div className="relative">
                      <DollarSign size={17} className="absolute left-3 top-3.5 text-slate-400" />

                      <input
                        required
                        min="0"
                        type="number"
                        name="hourlyRate"
                        defaultValue={studio.hourlyRate ?? ""}
                        className="w-full rounded-lg border border-slate-300 py-3 pl-9 pr-3 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Security Deposit ($) *
                    </label>

                    <div className="relative">
                      <DollarSign size={17} className="absolute left-3 top-3.5 text-slate-400" />

                      <input
                        required
                        min="0"
                        type="number"
                        name="securityDeposit"
                        defaultValue={studio.securityDeposit ?? ""}
                        className="w-full rounded-lg border border-slate-300 py-3 pl-9 pr-3 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Max Capacity *
                    </label>

                    <div className="relative">
                      <Users size={17} className="absolute left-3 top-3.5 text-slate-400" />

                      <input
                        required
                        min="1"
                        type="number"
                        name="maxCapacity"
                        defaultValue={studio.maxCapacity ?? ""}
                        className="w-full rounded-lg border border-slate-300 py-3 pl-9 pr-3 text-sm"
                      />
                    </div>
                  </div>
                </div>
              </section>

              <div className="border-t border-slate-100" />

              {/* Image */}
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
                      Update your studio image.
                    </p>
                  </div>
                </div>

                <input
                  type="url"
                  name="image"
                  defaultValue={studio.image || ""}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm"
                />
              </section>

              <div className="border-t border-slate-100" />

              {/* Amenities */}
              <section>
                <h2 className="text-lg font-bold text-[#172B4D]">
                  Studio Amenities
                </h2>

                <p className="mb-5 mt-1 text-sm text-slate-500">
                  Select the available facilities.
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
                        defaultChecked={studio.amenities?.includes(amenity)}
                        className="h-4 w-4 accent-[#8B5E3C]"
                      />

                      {amenity}
                    </label>
                  ))}
                </div>
              </section>

              <div className="border-t border-slate-100" />

              {/* Overview */}
              <section>
                <h2 className="text-lg font-bold text-[#172B4D]">
                  Detailed Overview
                </h2>

                <textarea
                  name="overview"
                  rows={5}
                  defaultValue={studio.overview || ""}
                  className="mt-4 w-full resize-none rounded-lg border border-slate-300 px-4 py-3 text-sm"
                />
              </section>

              <div className="border-t border-slate-100" />

              {/* Host */}
              <section>
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#F5EDE7] text-[#8B5E3C]">
                    <UserRound size={22} />
                  </div>

                  <div>
                    <h2 className="text-lg font-bold text-[#172B4D]">
                      Host Information
                    </h2>
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <input
                    name="ownerName"
                    defaultValue={studio.ownerName || ""}
                    readOnly
                    placeholder="Host Name"
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm"
                  />

                  <input
                    type="email"
                    name="ownerEmail"
                    defaultValue={studio.ownerEmail || ""}
                    readOnly
                    placeholder="Host Email"
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm"
                  />
                </div>
              </section>

            </div>

            {/* Footer */}
            <div className="shrink-0 border-t border-slate-200 bg-white px-6 py-4 md:px-8">
              <button
                type="submit"
                disabled={updating}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#172B4D] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#8B5E3C] disabled:opacity-50"
              >
                <PlusCircle size={19} />
                {updating ? "Updating..." : "Update Studio"}
              </button>
            </div>

          </form>
        ) : (
          <div className="p-8 text-center">
            Studio not found.
          </div>
        )}

      </DialogContent>
    </Dialog>
  );
};

export default EditStudioPage;
