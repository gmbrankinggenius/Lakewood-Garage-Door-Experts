"use client";

import dynamic from 'next/dynamic';

const Map = dynamic(() => import('./map'), {
  ssr: false,
  loading: () => (
    <div className="h-[400px] w-full rounded-2xl bg-zinc-100 border border-zinc-200 flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
    </div>
  ),
});

export function ServiceMap() {
  return <Map />;
}
