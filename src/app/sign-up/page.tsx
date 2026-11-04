
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { authClient } from "../lib/auth-client";

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

import { Aperture, ArrowRight, Camera } from "lucide-react";

export default function SignInFrom() {
  const router = useRouter();

  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // GitHub Sign Up
  const handleGitHubSignUp = async () => {
    setErrorMessage("");
    setLoading(true);

    const { error } = await authClient.signIn.social({
      provider: "github",
      callbackURL: "/",
    });

    if (error) {
      console.log(error);
      setErrorMessage(error.message || "GitHub login failed!");
      setLoading(false);
    }
  };

  // Email Sign Up
  const handleEmailSignUp = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setErrorMessage("");
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const user = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      password: string;
      image: string;
    };

    const { error } = await authClient.signUp.email(user);

    if (error) {
      console.log(error);
      setErrorMessage(error.message || "Registration failed!");
      setLoading(false);
    } else {
      router.push("/");
      router.refresh();
    }
  };

  return (
    <main className="min-h-screen bg-[#F8F9FB] px-4 py-12 md:py-16">
      <div className="mx-auto max-w-md">

        {/* Brand */}
        <Link href="/" className="mb-8 flex items-center justify-center gap-2">
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

            {/* Error Message */}
            {errorMessage && (
              <p className="mb-4 rounded-md bg-red-50 p-3 text-center text-sm text-red-600">
                {errorMessage}
              </p>
            )}

            <form onSubmit={handleEmailSignUp}>
              <FieldGroup className="gap-5">

                {/* GitHub Button */}
                <Field>
                  <Button
                    onClick={handleGitHubSignUp}
                    variant="outline"
                    type="button"
                    disabled={loading}
                    className="h-11 w-full border-slate-300 text-[#172B4D] hover:bg-slate-50"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="currentColor"
                    >
                      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.95.6.1.8-.25.8-.55v-2.1c-3.2.7-3.9-1.35-3.9-1.35-.5-1.3-1.3-1.65-1.3-1.65-1.05-.7.1-.7.1-.7 1.15.1 1.75 1.2 1.75 1.2 1 1.7 2.55 1.2 3.2.9.1-.7.4-1.2.7-1.45-2.55-.3-5.2-1.3-5.2-5.7 0-1.25.45-2.3 1.2-3.1-.1-.3-.55-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.65 1.6.2 2.8.1 3.1.75.8 1.2 1.85 1.2 3.1 0 4.4-2.65 5.4-5.2 5.7.4.35.75 1.05.75 2.15v3.2c0 .3.2.65.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                    </svg>

                    Continue with GitHub
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
                    Use at least 6 characters with uppercase and lowercase
                    letters.
                  </FieldDescription>
                </Field>

                {/* Submit Button */}
                <Field className="gap-4">
                  <Button
                    type="submit"
                    disabled={loading}
                    className="h-12 w-full bg-[#172B4D] font-semibold text-white transition hover:bg-[#8B5E3C]"
                  >
                    {loading ? "Creating Account..." : "Create Account"}

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

        {/* Terms */}
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
