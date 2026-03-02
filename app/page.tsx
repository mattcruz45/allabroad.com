import Link from 'next/link';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Navigation */}
      <nav className="flex justify-between p-6 max-w-5xl mx-auto">
        <span className="font-bold text-xl tracking-tight">AppLogo</span>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center px-6 py-20 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Connecting students studying abroad.
        </h1>
        <p className="text-xl text-slate-600 mb-10 max-w-2xl">
          A short, punchy description of what your Expo app does and why people should care.
        </p>

        <div className="flex gap-4 mb-16">
          <button className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:opacity-80 transition">
            App Store
          </button>
          <button className="border-2 border-slate-200 px-8 py-4 rounded-full font-semibold hover:bg-slate-50 transition">
            Google Play
          </button>
        </div>

        {/* Placeholder for App Screenshot */}
        <div className="w-full max-w-md aspect-[9/19] bg-slate-100 rounded-[3rem] border-8 border-slate-900 shadow-2xl mx-auto overflow-hidden">
           <div className="flex items-center justify-center h-full text-slate-400">App Screenshot Here</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-sm text-slate-500">
        <div className="flex justify-center gap-6 mb-4">
          <Link href="/terms" className="hover:underline">Terms</Link>
          <Link href="/privacypolicy" className="hover:underline">Privacy Policy</Link>
        </div>
        <p>© 2026 AllAbroad. All rights reserved.</p>
      </footer>
    </main>
  );
}