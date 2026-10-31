
"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { authClient } from "../lib/auth-client";
import { redirect } from "next/navigation";
import { Aperture, ArrowRight, Camera } from "lucide-react";

export default function SignInFrom() {
  const handleEmailSignUp = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const fromData = new FormData(e.currentTarget);

    const user = Object.fromEntries(fromData.entries()) as {
      name: string;
      email: string;
      password: string;
      image: string;
    };

    const { data, error } = await authClient.signUp.email({
      ...user,
    });

    if (data) {
      redirect("/");
    }

    if (error) {
      console.log(error);
    }
  };

  return (
    <main className="min-h-screen bg-[#F8F9FB] px-4 py-12 md:py-16">
      <div className="mx-auto max-w-md">

        {/* Brand */}
        <Link
          href="/"
          className="mb-8 flex items-center justify-center gap-2"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#172B4D] text-white">
            <Aperture size={25} />
          </div>

          <span className="text-2xl font-bold text-[#172B4D]">
            Studio<span className="text-[#8B5E3C]">Space</span>
          </span>
        </Link>

        <Card className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-200/50">

          {/* Top Accent */}
          <div className="h-1.5 bg-[#8B5E3C]" />

          <CardHeader className="space-y-3 px-6 pt-8 text-center sm:px-8">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#F5EDE7] text-[#8B5E3C]">
              <Camera size={27} />
            </div>

            <CardTitle className="text-2xl font-bold text-[#172B4D]">
              Create Your Account
            </CardTitle>

            <CardDescription className="text-sm leading-6 text-slate-500">
              Join StudioSpace and discover spaces for your creativity.
            </CardDescription>
          </CardHeader>

          <CardContent className="px-6 pb-8 sm:px-8">

            <form onSubmit={handleEmailSignUp}>
              <FieldGroup className="gap-5">

                {/* Google Button */}
                <Field>
                  <Button
                    variant="outline"
                    type="button"
                    className="h-11 w-full border-slate-300 text-[#172B4D] hover:bg-slate-50"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="mr-2 h-5 w-5"
                    >
                      <path
                        d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                        fill="currentColor"
                      />
                    </svg>
                    Continue with Google
                  </Button>
                </Field>

                <FieldSeparator className="*:data-[slot=field-separator-content]:bg-white">
                  OR SIGN UP WITH EMAIL
                </FieldSeparator>

                {/* Name */}
                <Field>
                  <FieldLabel htmlFor="name" className="text-[#172B4D]">
                    Full Name
                  </FieldLabel>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    required
                    className="h-11 focus-visible:ring-[#8B5E3C]"
                  />
                </Field>

                {/* Image */}
                <Field>
                  <FieldLabel htmlFor="image" className="text-[#172B4D]">
                    Profile Image URL
                  </FieldLabel>
                  <Input
                    id="image"
                    name="image"
                    type="url"
                    placeholder="https://example.com/image.jpg"
                    required
                    className="h-11 focus-visible:ring-[#8B5E3C]"
                  />
                </Field>

                {/* Email */}
                <Field>
                  <FieldLabel htmlFor="email" className="text-[#172B4D]">
                    Email Address
                  </FieldLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="h-11 focus-visible:ring-[#8B5E3C]"
                  />
                </Field>

                {/* Password */}
                <Field>
                  <FieldLabel htmlFor="password" className="text-[#172B4D]">
                    Password
                  </FieldLabel>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Create a password"
                    required
                    className="h-11 focus-visible:ring-[#8B5E3C]"
                  />
                  <FieldDescription>
                    Use at least 6 characters with uppercase and lowercase letters.
                  </FieldDescription>
                </Field>

                {/* Submit */}
                <Field className="gap-4">
                  <Button
                    type="submit"
                    className="h-12 w-full bg-[#172B4D] font-semibold text-white transition hover:bg-[#8B5E3C]"
                  >
                    Create Account
                    <ArrowRight size={18} className="ml-2" />
                  </Button>

                  <FieldDescription className="text-center text-sm">
                    Already have an account?{" "}
                    <Link
                      href="/sign-in"
                      className="font-semibold text-[#8B5E3C] hover:underline"
                    >
                      Sign In
                    </Link>
                  </FieldDescription>
                </Field>

              </FieldGroup>
            </form>
          </CardContent>
        </Card>

        <p className="mt-6 text-center text-xs leading-6 text-slate-500">
          By creating an account, you agree to our{" "}
          <Link href="/terms" className="text-[#8B5E3C] hover:underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-[#8B5E3C] hover:underline">
            Privacy Policy
          </Link>.
        </p>

        <p className="mt-4 text-center text-xs text-slate-400">
          © 2026 StudioSpace. All rights reserved.
        </p>
      </div>
    </main>
  );
}
