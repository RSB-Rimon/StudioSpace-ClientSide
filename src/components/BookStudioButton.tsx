
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { authClient } from "@/app/lib/auth-client";
import { toast } from "react-toastify";
import { getTokenFromClient } from "@/app/lib/getTokenFromClient";

interface BookStudioButtonProps {
  studio: {
    _id: string;
    title: string;
    image: string;
    hourlyRate: number;
    securityDeposit: number;
    ownerEmail?: string;
  };
}

const BookStudioButton = ({ studio }: BookStudioButtonProps) => {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const [loading, setLoading] = useState(false);

  const handleBooking = async () => {
    const user = session?.user;

    if (!user) {
      toast.error("Please login first!");
      router.push("/login");
      return;
    }

    const bookingData = {
      studioId: studio._id,
      studioTitle: studio.title,
      studioImage: studio.image,

      customerName: user.name,
      customerEmail: user.email,

      ownerEmail: studio.ownerEmail,

      hourlyRate: studio.hourlyRate,
      securityDeposit: studio.securityDeposit,

      status: "pending",
      createdAt: new Date(),
    };
const token = await getTokenFromClient();
    try {
      setLoading(true);

      const res = await fetch("http://localhost:5000/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(bookingData),
      });

      const result = await res.json();

      if (res.ok && result.insertedId) {
        toast.success("Booking Successful!");
        router.push("/my-bookings");
      } else if (res.status === 409) {
        toast.warning("Sorry! This studio is already booked.");
      } else {
        toast.error(result.message || "Booking Failed!");
      }
    } catch (error) {
      console.error("Booking Error:", error);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      onClick={handleBooking}
      disabled={loading}
      className="h-12 w-full rounded-xl bg-[#8B5E3C] text-base font-semibold text-white shadow-md transition hover:bg-[#70482D]"
    >
      <CalendarDays size={19} className="mr-2" />
      {loading ? "Booking..." : "Book Now"}
    </Button>
  );
};

export default BookStudioButton;
