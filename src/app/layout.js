import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BackgroundEffects from '@/components/layout/BackgroundEffects';
import ScrollEngine from '@/components/layout/ScrollEngine';

import IntroVeil from '@/components/layout/IntroVeil';

export const metadata = {
  title: 'Дизайнер Онон | График дизайнер — Ondesign',
  description: 'Дизайнер Онон — Ondesign-ийн үүсгэн байгуулагч, график дизайнер. Брэндинг, лого, motion болон вэбсайт дизайны бүтээлүүд.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};


export default function RootLayout({ children }) {
  return (
    <html lang="mn">
      <body className="antialiased selection:bg-[#ff401f] selection:text-black">
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
