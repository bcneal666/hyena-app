import { Metadata, Viewport } from 'next';

// 将 viewport 配置分离出来
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const defaultMeta: Metadata = {
  title: 'Hyena',
  description: 'Hyena',
  keywords: ['Hyena', 'Hyena', 'Hyena'],
  referrer: 'origin',
  openGraph: {
    type: 'website',
    title: 'Hyena',
    description: 'Hyena',
    url: 'https://hyena.com',
    siteName: 'Hyena',
    // images: ['https://hyena.com/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hyena',
    description: 'Hyena',
    // images: ['https://Hyena.com/og.png'],
  },
};
