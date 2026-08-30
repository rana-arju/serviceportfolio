import { constructMetadata } from '@/lib/seo';
import ServicesHero from '@/components/services/ServicesHero';
import ServiceSection from '@/components/services/ServiceSection';
import { servicesData } from '@/lib/data/services-data';
import TechnologyEcosystem from '@/components/services/TechnologyEcosystem';
import ProcessSection from '@/components/services/ProcessSection';
import ServicesCTA from '@/components/services/ServicesCTA';

// Visual Components
import AppDevVisual from '@/components/services/visuals/AppDevVisual';
import WebDevVisual from '@/components/services/visuals/WebDevVisual';
import CRMVisual from '@/components/services/visuals/CRMVisual';
import AutomationVisual from '@/components/services/visuals/AutomationVisual';
import N8nVisual from '@/components/services/visuals/N8nVisual';
import ZapierVisual from '@/components/services/visuals/ZapierVisual';
import GHLVisual from '@/components/services/visuals/GHLVisual';
import AIVisual from '@/components/services/visuals/AIVisual';
import AnalyticsVisual from '@/components/services/visuals/AnalyticsVisual';

export const metadata = constructMetadata({
  title: 'Services | ReplyTentra — AI, Automation & Software',
  description: 'From custom applications and websites to AI-powered automation and business intelligence, we design and build digital systems that help businesses work smarter and scale with confidence.',
  canonical: '/services',
  keywords: [
    'AI',
    'Automation',
    'n8n',
    'Zapier',
    'GoHighLevel',
    'CRM',
    'Website Development',
    'App Development',
    'AI/ML',
    'Data Analytics'
  ],
});

const visuals = [
  <AppDevVisual key="app" />,
  <WebDevVisual key="web" />,
  <CRMVisual key="crm" />,
  <AutomationVisual key="auto" />,
  <N8nVisual key="n8n" />,
  <ZapierVisual key="zap" />,
  <GHLVisual key="ghl" />,
  <AIVisual key="ai" />,
  <AnalyticsVisual key="analytics" />,
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col bg-white dark:bg-slate-950 min-h-screen">
      <ServicesHero />
      
      <div className="flex flex-col">
        {servicesData.map((data, index) => (
          <ServiceSection
            key={data.id}
            data={data}
            index={index}
            visual={visuals[index]}
          />
        ))}
      </div>

      <TechnologyEcosystem />
      <ProcessSection />
      <ServicesCTA />
    </div>
  );
}
