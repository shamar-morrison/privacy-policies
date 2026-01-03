import Link from "next/link";

export default function Home() {
  const apps = [
    {
      name: "Movie Finder",
      privacy: "/movie-finder/privacy",
      terms: null, // No terms page yet
    },
    {
      name: "ShowSeek",
      privacy: "/show-seek/privacy",
      terms: "/show-seek/terms",
    },
    {
      name: "Recurr",
      privacy: "/recurr/privacy",
      terms: "/recurr/terms",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 p-8 font-sans dark:bg-black">
      <main className="flex w-full max-w-5xl flex-col items-center gap-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white sm:text-6xl">
            TheAvgCoder&apos;s Legal Hub
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Privacy Policies and Terms of Service for my applications.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-3">
          {apps.map((app) => (
            <div
              key={app.name}
              className="flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
            >
              <h2 className="mb-4 text-2xl font-semibold text-black dark:text-white">
                {app.name}
              </h2>
              <div className="flex flex-col gap-3">
                <Link
                  href={app.privacy}
                  className="group flex items-center justify-between text-sm font-medium text-zinc-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400"
                >
                  Privacy Policy
                  <span className="opacity-0 transition-opacity group-hover:opacity-100">
                    →
                  </span>
                </Link>
                {app.terms ? (
                  <Link
                    href={app.terms}
                    className="group flex items-center justify-between text-sm font-medium text-zinc-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400"
                  >
                    Terms of Service
                    <span className="opacity-0 transition-opacity group-hover:opacity-100">
                      →
                    </span>
                  </Link>
                ) : (
                  <div className="h-[20px]" aria-hidden="true" /> // Spacer for alignment if needed, or simply empty
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
