'use client';

import React from 'react';
import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import Clients from '@/components/sections/Clients';
import Portfolio from '@/components/sections/Portfolio';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Pricing from '@/components/sections/Pricing';
import Connect from '@/components/sections/Connect';
import Contact from '@/components/sections/Contact';
import WebsiteOrder from '@/components/sections/WebsiteOrder';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Clients />
      <Portfolio />
      <About />
      <Services />
      <Pricing />
      <Contact />
      <WebsiteOrder />
      <Connect />
    </>
  );
}
