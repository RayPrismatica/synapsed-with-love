// Example: app/page.tsx
// Landing page with dynamic news insight

import { getDynamicContent } from '@/lib/getDynamicContent';

export const revalidate = 0; // Disable caching

export default async function HomePage() {
  const content = await getDynamicContent();

  return (
    <main>
      <h1>Welcome</h1>

      {/* This paragraph updates automatically on your schedule */}
      <p>{content.newsInsight}</p>

      <p>The rest of your static content here...</p>
    </main>
  );
}
