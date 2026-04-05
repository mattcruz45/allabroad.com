import Image from "next/image";
import Link from "next/link";

export default function FlyerPage() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      {/* Back button so people don't get stuck */}
      <div className="absolute top-6 left-6 z-10">
        <Link href="/" className="text-zinc-500 hover:text-white transition-colors text-sm">
          ← Back
        </Link>
      </div>

      {/* The Flyer */}
      <div className="relative w-full max-w-2xl aspect-[1/1.41] shadow-2xl shadow-indigo-500/10 rounded-lg overflow-hidden">
        <Image 
          src="/allabroad-flyer.png" // This matches the name in your /public folder
          alt="AllAbroad Flyer"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Optional: Add a "Download" or "App Store" button below the flyer */}
      <div className="mt-8">
        <a 
          href="https://apps.apple.com/us/app/allabroad/id6760478722"
          className="bg-[#6366F1] text-white px-8 py-3 rounded-full font-bold hover:bg-indigo-500 transition"
        >
          Get the App
        </a>
      </div>
    </main>
  );
}