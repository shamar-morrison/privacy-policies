import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 p-8 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-col items-center gap-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white sm:text-6xl">
          TheAvgCoder&apos;s Privacy Policies
        </h1>
        <p className="max-w-lg text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Privacy policies for my Android applications on the Google Play Store.
        </p>
        
        {/* Links will be added here */}
        <div className="mt-8 flex flex-col gap-4">
          <Link href="/movie-finder/privacy" className="text-xl font-semibold text-blue-600 dark:text-blue-500">
            Movie Finder
          </Link>
          <Link href="/show-seek/privacy" className="text-xl font-semibold text-blue-600 dark:text-blue-500">
            ShowSeek
          </Link>
        </div>
      </main>
    </div>
  );
}
