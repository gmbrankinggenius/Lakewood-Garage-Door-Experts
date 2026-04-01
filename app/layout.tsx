import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Lakewood Garage Door Repair Experts | 24/7 Service',
  description: 'Fast, reliable, and affordable garage door repair in Lakewood, CO. We offer same-day service, upfront pricing, and 24/7 emergency repairs. Call (562) 784-4156.',
  keywords: ['garage door repair Lakewood', 'garage door installation', 'broken spring repair', 'garage door opener repair', 'Lakewood CO garage doors'],
  openGraph: {
    title: 'Lakewood Garage Door Repair Experts',
    description: 'Fast, reliable, and affordable garage door repair in Lakewood, CO.',
    url: 'https://lakewoodgaragedoors.com',
    siteName: 'Lakewood Garage Door Repair',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
