import { SignupForm } from "@/components/pages/auth/signup-form"
import Image from "next/image";
import Link from "next/link";
import { StepProgress } from "@components/custom/step-progress";

export default function SignupPage() {
  return (
    <div
      className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link href="/" className="flex items-center gap-2 self-center font-medium">
          <Image 
              src="/theLogo.svg"
              alt="سِدر - منتجات عضوية"
              width={80}
              height={40}
              className="w-20 h-auto object-cover"
              priority
            />
        </Link>
        <SignupForm />
      </div>
    </div>
  );
}
