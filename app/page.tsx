import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#0A0A14] text-white font-sans selection:bg-indigo-500/30 overflow-x-hidden">
      {/* Smooth Background Glow */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-5%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#6366F1] opacity-[0.12] blur-[120px] rounded-full" />
      </div>

      {/* Navigation - Logo Removed as requested */}
      <nav className="relative z-50 h-20 bg-transparent" />

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center text-center px-6 pt-10 pb-32 max-w-5xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9] text-white">
          Connecting <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500">students</span> <br className="hidden md:block" /> studying abroad.
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 mb-12 max-w-2xl leading-relaxed">
          Talk with students in any city to do anything. The best way to interact with other students abroad.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-24 w-full justify-center items-center">
          {/* App Store Button */}
          <a 
            href="https://apps.apple.com/us/app/allabroad/id6760478722"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-2xl font-bold text-lg hover:bg-zinc-200 transition-all hover:-translate-y-1 active:scale-95 shadow-xl shadow-white/5 w-64 sm:w-auto"
          >
            <svg className="w-6 h-6" viewBox="0 0 384 512" fill="currentColor">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 21.8-88.5 21.8-11.4 0-51.1-20.8-83.6-20.1-42.3.6-81.1 24.3-103 61.9-46.3 79.7-11.8 195.9 33 260.4 21.9 31.4 48 66.2 81.7 65 31.8-1.1 43.9-20.6 82.4-20.6 38.4 0 49.5 20.6 82.4 19.3 34.3-1.4 56.6-31.1 78.4-62.9 25.1-36.4 35.3-71.7 35.6-73.6-.7-.3-68.4-26.1-68.7-101.8zM266.8 82.5c15-18.3 25.1-43.6 22.3-68.9-21.8.9-48.2 14.5-63.9 32.7-14.1 16.2-26.4 42.1-23.1 66.8 24.1 1.9 48.6-12.4 64.7-30.6z"/>
            </svg>
            App Store
          </a>
          
          {/* Google Play Button - Using a reliable FontAwesome-style path
          <button className="flex items-center justify-center gap-3 border border-white/10 bg-white/5 backdrop-blur-sm px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all hover:-translate-y-1 active:scale-95 text-white w-64 sm:w-auto">
            <svg className="w-6 h-6" viewBox="0 0 512 512" fill="currentColor">
              <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm420.3 234.3c3.8 6.6 6 14.1 6 22.2s-2.2 15.6-6 22.2L329 233.1s105.7-60.7 108.3-62.1 30-17.2 30 17.2v92.1zm-80.1 92.1s-105.7-60.7-108.3-62.1-30-17.2-30 17.2V418.1c0 16.1 8.7 28.5 21.7 35.3l256.6-256L387.2 326.4z"/>
            </svg>
            Google Play
          </button> */}
        </div>

        {/* The Phone Display */}
        <div className="relative z-30 w-full max-w-[320px] mx-auto group">
          {/* Subtle Outer Glow - Adjusted to be lighter/softer */}
          <div className="absolute -inset-4 bg-indigo-500/10 rounded-[4rem] blur-3xl group-hover:bg-indigo-500/20 transition-all duration-700"></div>
          
          <div className="relative aspect-[9/19] bg-[#05050A] rounded-[3.5rem] border-[8px] border-[#1A1A25] shadow-2xl overflow-hidden ring-1 ring-white/10">
            <div className="absolute inset-0 z-10">
              <Image 
                src="/screenshot.png" 
                alt="AllAbroad App Preview" 
                fill 
                className="object-cover"
                priority
              />
            </div>
            
            {/* Notch / Dynamic Island */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#1A1A25] rounded-b-2xl z-20 mt-1"></div>
            
            {/* Glass Finish */}
            <div className="absolute inset-0 z-30 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-40 py-20 text-center text-sm text-zinc-500 border-t border-white/5 bg-[#08080E] mt-[-80px] pt-[140px]">
        <div className="flex justify-center gap-10 mb-8 font-medium">
          <a 
            href="mailto:allabroadapp@gmail.com?subject=Support%3A%20AllAbroad" 
            className="hover:text-[#6366F1] transition-colors"
          >
            Support
          </a>
          <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          <Link href="/privacypolicy" className="hover:text-white transition-colors">Privacy Policy</Link>
        </div>
        <p className="opacity-50 tracking-widest uppercase text-[10px]">© 2026 AllAbroad Inc.</p>
      </footer>
    </main>
  );
}