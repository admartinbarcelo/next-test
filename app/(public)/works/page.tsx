import type { Metadata } from 'next';

export const metadata: Metadata = {
 title: 'SEO Title for Work Page',
 description: 'Work Page',
 keywords: ['Work Page', 'Adrian Martin', 'Description', 'Frontend Developer'],
};

export default function WorkPage() {
  return <span className="text-7xl">WorkPage</span>;
}
