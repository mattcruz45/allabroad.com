import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 max-w-5xl mx-auto border-b border-white/10">
        <Image 
          src="/FINALLOGO.png" 
          alt="AllAbroad Logo" 
          width={150} 
          height={40}
          // className="object-contain invert" // Added invert in case your logo is black text
        />
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center px-6 py-20 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white tracking-tight">
          Connecting students studying abroad.
        </h1>
        <p className="text-xl text-zinc-400 mb-10 max-w-2xl">
          Talk with students in any city to do anything. The best way to interact with other students abroad.
        </p>

        <div className="flex gap-4 mb-16">
          <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-zinc-200 transition">
            App Store
          </button>
          <button className="border-2 border-zinc-800 px-8 py-4 rounded-full font-semibold hover:bg-zinc-900 transition text-white">
            Google Play
          </button>
        </div>

        {/* Updated Screenshot Section */}
        <div className="relative w-full max-w-[300px] aspect-[9/19] bg-zinc-900 rounded-[3rem] border-8 border-zinc-800 shadow-[0_0_50px_rgba(59,130,246,0.2)] mx-auto overflow-hidden">
          <Image 
            src="/screenshot.png" 
            alt="App Screenshot" 
            fill 
            className="object-cover"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-sm text-zinc-500 border-t border-zinc-900 mt-20">
        <div className="flex justify-center gap-6 mb-4">
          <a 
            href="mailto:roughterrainco@gmail.com" 
            className="hover:text-white transition-colors cursor-pointer"
          >
            Support
          </a>
          <Link href="/terms" className="hover:text-white transition">Terms</Link>
          <Link href="/privacypolicy" className="hover:text-white transition">Privacy Policy</Link>
        </div>
        <p>© 2026 AllAbroad. All rights reserved.</p>
      </footer>
    </main>
  );
}