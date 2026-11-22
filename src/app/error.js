"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function ErrorBoundary({ error, reset }) {
  useEffect(() => {
    // Log unexpected errors securely without leaking confidential data
    console.error("Application runtime error:", error);
  }, [error]);

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center px-4 text-center" role="alert">
      <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 md:whitespace-nowrap">
        Something went wrong
      </h2>
      <div className="mt-6 flex gap-4">
        <Button variant="primary" onClick={() => reset()}>
          Try Again
        </Button>
      </div>
    </div>
  );
}
