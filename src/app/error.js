"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function ErrorBoundary({ error, reset }) {
  useEffect(() => {
    console.error("Application runtime error:", error);
  }, [error]);

  return (
    <div
      role="alert"
      className="flex min-h-[50vh] flex-col items-center justify-center px-4 py-16 text-center"
    >
      <div className="rounded-3xl border border-white/85 bg-[#EEF2F6] p-8 sm:p-12 shadow-neu-card max-w-md mx-auto space-y-4">
        <h1 className="type-section text-[#0F172A]">
          Something went wrong
        </h1>
        <div className="rounded-2xl bg-[#E8EEF5] p-4 text-xs font-medium text-rose-800 border border-rose-200/60 shadow-neu-inset-sm">
          <span>This page could not be loaded. Please try again.</span>
        </div>
        <div className="pt-4">
          <Button
            type="button"
            onClick={() => reset()}
            variant="primary"
          >
            Try Again
          </Button>
        </div>
      </div>
    </div>
  );
}
