import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: '/',
    name: 'Solve',
    short_name: 'Solve',
    description: 'Learn from your material and track your understanding.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#fafafa',
    theme_color: '#161616',
    icons: [
      { src: '/icons/solve-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/icons/solve-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/icons/solve-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  };
}
