export default function Loading() {
  return (
    <div
      className="flex min-h-[50vh] w-full items-center justify-center px-4 py-16"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="rounded-2xl border border-white/85 bg-[#EEF2F6] px-6 py-4 shadow-neu-sm flex items-center gap-3">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4F46E5] opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#4F46E5]" />
        </span>
        <span className="text-sm font-semibold text-[#0F172A]">Loading content...</span>
      </div>
    </div>
  );
}
