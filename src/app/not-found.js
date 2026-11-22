import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
        404
      </h1>
      <h2 className="mt-2 text-xl font-medium text-zinc-600 dark:text-zinc-400 md:whitespace-nowrap">
        Page Not Found
      </h2>
      <div className="mt-6">
        <Link href="/">
          <Button variant="primary">Return Home</Button>
        </Link>
      </div>
    </div>
  );
}
