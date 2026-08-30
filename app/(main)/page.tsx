'use client';
import React from 'react';
import { Hero } from '@/components/sections/Hero';
import { LogosAndMetrics } from '@/components/sections/LogosAndMetrics';
import { Ecosystem } from '@/components/sections/Ecosystem';
import { WhatWeDo } from '@/components/sections/WhatWeDo';
import { HowWeThink } from '@/components/sections/HowWeThink';
import { Solutions } from '@/components/sections/Solutions';
import { TeamSection } from '@/components/sections/TeamSection';
import { WhyReplyTentra } from '@/components/sections/WhyReplyTentra';
import { CapabilitiesMap } from '@/components/sections/CapabilitiesMap';
import { Testimonials } from '@/components/sections/Testimonials';
import { CTASection } from '@/components/sections/CTASection';

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <Hero />
      <LogosAndMetrics />
      <Ecosystem />
      <WhatWeDo />
      <HowWeThink />
      <Solutions />
      {/* <TeamSection /> */}
      <WhyReplyTentra />
      <CapabilitiesMap />
      <Testimonials />
      <CTASection />
    </div>
  );
}
