import type { Metadata, Viewport } from 'next';
import './globals.css';
import './study-flow.css';
export const metadata: Metadata = {
  title: 'Solve',
  description: 'Learn from your material and track your understanding.',
  applicationName: 'Solve',
  appleWebApp: { capable: true, title: 'Solve', statusBarStyle: 'default' },
  icons: {
    icon: '/icons/solve-192.png',
    apple: '/icons/solve-180.png',
  },
};
export const viewport: Viewport = { themeColor: '#161616', viewportFit: 'cover' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
