import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-16 text-center">
      <div className="rounded-3xl border border-white/85 bg-[#EEF2F6] p-8 sm:p-12 shadow-neu-card max-w-md mx-auto space-y-4">
        <h1 className="type-display text-[#0F172A]">404</h1>
        <h2 className="type-subhead text-[#475569]">
          Page Not Found
        </h2>
        <p className="text-sm text-[#64748B]">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="pt-4">
          <Button as="a" href="/" variant="primary">
            Return Home
          </Button>
        </div>
      </div>
    </div>
  );
}
