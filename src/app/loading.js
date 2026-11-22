export default function Loading() {
  return (
    <div className="flex min-h-[50vh] w-full items-center justify-center" aria-live="polite" aria-busy="true">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-zinc-300 border-t-zinc-900 dark:border-zinc-700 dark:border-t-zinc-100" />
      <span className="sr-only">Loading content...</span>
    </div>
  );
}
