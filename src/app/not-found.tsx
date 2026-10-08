import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 py-16 sm:px-10">
      <h1 className="text-3xl font-bold tracking-tight">Page not found</h1>
      <p className="mt-4 text-lg leading-8 text-slate-700">
        The page you requested is unavailable.
      </p>
      <Link
        href="/"
        className="mt-6 w-fit rounded-sm text-base font-semibold text-slate-900 underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-900"
      >
        Return to the development homepage
      </Link>
    </main>
  );
}
