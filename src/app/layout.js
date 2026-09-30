import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BackgroundEffects from '@/components/layout/BackgroundEffects';
import ScrollEngine from '@/components/layout/ScrollEngine';

import IntroVeil from '@/components/layout/IntroVeil';

export const metadata = {
  title: 'Нова хекс ХХК | Технологи, Дижитал шийдэл хөгжүүлэгч — Nova Hex LLC',
  description: 'Нова хекс ХХК — Програм хангамж, вэб ба мобайл систем, хиймэл оюунт экосистем хөгжүүлэгч технологийн компани. grado.mn, eguide.mn, eventy.mn, edugame.mn платформуудын бүтээгч.',
  icons: {
    icon: [
      { url: '/icon.png', sizes: '159x150', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '159x150', type: 'image/png' },
    ],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};


export default function RootLayout({ children }) {
  return (
    <html lang="mn">
      <body className="antialiased selection:bg-[#0072FC] selection:text-white">
        <LanguageProvider>
          <div className="site intro">
            <BackgroundEffects />
            <IntroVeil />
            <ScrollEngine />
            <div id="top" />
            <Header />
            <main className="relative z-10">
              {children}
            </main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
