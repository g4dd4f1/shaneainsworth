import './globals.css';
import Nav from '../components/Nav';

export const metadata = {
  title: 'Shane Ainsworth — Cinematographer',
  description: 'Shane Ainsworth is a cinematographer based in Los Angeles working in commercial, music video, and narrative film.',
  openGraph: {
    title: 'Shane Ainsworth — Cinematographer',
    description: 'Shane Ainsworth is a cinematographer based in Los Angeles working in commercial, music video, and narrative film.',
    url: 'https://shaneainsworth.com',
    siteName: 'Shane Ainsworth',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
