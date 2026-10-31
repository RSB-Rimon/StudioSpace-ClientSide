
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
import { redirect } from "next/navigation";
import { authClient } from "../lib/auth-client";
import { Aperture, ArrowRight, LockKeyhole } from "lucide-react";

export default function SignInPage() {
  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formdata = new FormData(e.currentTarget);

    const user = Object.fromEntries(formdata.entries()) as {
      email: string;
      password: string;
    };

    const { data, error } = await authClient.signIn.email({
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
              <LockKeyhole size={27} />
            </div>

            <CardTitle className="text-2xl font-bold text-[#172B4D]">
              Welcome Back!
            </CardTitle>

            <CardDescription className="text-sm leading-6 text-slate-500">
              Sign in to your StudioSpace account and continue your creative journey.
            </CardDescription>
          </CardHeader>

          <CardContent className="px-6 pb-8 sm:px-8">
            <form onSubmit={handleSignIn}>
              <FieldGroup className="gap-5">

                {/* Social Login */}
                <Field className="grid grid-cols-2 gap-3">

                  <Button
                    variant="outline"
                    type="button"
                    className="h-11 border-slate-300 text-[#172B4D] hover:bg-slate-50"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                    >
                      <path
                        d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
                        fill="currentColor"
                      />
                    </svg>
                    Apple
                  </Button>

                  <Button
                    variant="outline"
                    type="button"
                    className="h-11 border-slate-300 text-[#172B4D] hover:bg-slate-50"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                    >
                      <path
                        d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                        fill="currentColor"
                      />
                    </svg>
                    Google
                  </Button>

                </Field>

                <FieldSeparator className="*:data-[slot=field-separator-content]:bg-white">
                  OR CONTINUE WITH EMAIL
                </FieldSeparator>

                {/* Email */}
                <Field>
                  <FieldLabel htmlFor="email" className="text-[#172B4D]">
                    Email Address
                  </FieldLabel>

                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                    className="h-11 focus-visible:ring-[#8B5E3C]"
                  />
                </Field>

                {/* Password */}
                <Field>
                  <div className="flex items-center justify-between">
                    <FieldLabel
                      htmlFor="password"
                      className="text-[#172B4D]"
                    >
                      Password
                    </FieldLabel>

                    <Link
                      href="/forgot-password"
                      className="text-xs font-medium text-[#8B5E3C] hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    required
                    className="h-11 focus-visible:ring-[#8B5E3C]"
                  />
                </Field>

                {/* Submit */}
                <Field className="gap-4">
                  <Button
                    type="submit"
                    className="h-12 w-full bg-[#172B4D] font-semibold text-white transition hover:bg-[#8B5E3C]"
                  >
                    Sign In
                    <ArrowRight size={18} className="ml-2" />
                  </Button>

                  <FieldDescription className="text-center text-sm">
                    Don&apos;t have an account?{" "}
                    <Link
                      href="/sign-up"
                      className="font-semibold text-[#8B5E3C] hover:underline"
                    >
                      Create Account
                    </Link>
                  </FieldDescription>
                </Field>

              </FieldGroup>
            </form>
          </CardContent>
        </Card>

        {/* Footer */}
        <p className="mt-6 text-center text-xs leading-6 text-slate-500">
          By continuing, you agree to our{" "}
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
