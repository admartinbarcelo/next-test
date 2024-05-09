import type { Metadata } from 'next';

export const metadata: Metadata = {
 title: 'SEO Title for About Page',
 description: 'About Page',
 keywords: ['About Page', 'Adrian Martin', 'Description', 'Frontend Developer'],
};

export default function AboutPage() {
  return <span className="text-7xl">AboutPage</span>;
}
