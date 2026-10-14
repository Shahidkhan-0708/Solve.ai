import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Solve — Make it click.',
  description: 'Turn your material into understanding. Learn, explain it back, and find the next step that matters.',
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
