import './globals.css';

export const metadata = {
  title: 'Shane Ainsworth — Cinematographer',
  description: 'Shane Ainsworth is a Los Angeles-based cinematographer working in commercial, music video, and narrative film.',
  openGraph: {
    title: 'Shane Ainsworth — Cinematographer',
    description: 'Shane Ainsworth is a Los Angeles-based cinematographer working in commercial, music video, and narrative film.',
    url: 'https://shaneainsworth.com',
    siteName: 'Shane Ainsworth',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
