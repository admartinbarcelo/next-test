import type { Metadata } from 'next';

export const metadata: Metadata = {
 title: 'SEO Title for Contact Page',
 description: 'Contact Page',
 keywords: ['Contact Page', 'Adrian Martin', 'Description', 'Frontend Developer'],
};

export default function ContactPage() {
  return <span className="text-7xl">ContactPage</span>;
}
