import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-50 text-zinc-900">
      <h2 className="text-4xl font-black mb-4">404 - Page Not Found</h2>
      <p className="text-lg text-zinc-600 mb-8">Could not find requested resource</p>
      <Link href="/" className="bg-orange-600 hover:bg-orange-500 text-white px-6 py-3 rounded-lg font-bold transition-colors">
        Return Home
      </Link>
    </div>
  );
}
