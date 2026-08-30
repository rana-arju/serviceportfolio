import { ComponentType } from "react";

export type ServiceVisualProps = {
  className?: string;
};

export type ServiceData = {
  id: string;
  number: string;
  label: string;
  heading: string;
  description: string;
  capabilities: string[];
  ctaText: string;
  ctaLink: string;
};

export const servicesData: ServiceData[] = [
  {
    id: "app-development",
    number: "01 / 09",
    label: "APP DEVELOPMENT",
    heading: "Apps Built for Real-World Use.",
    description: "We build modern mobile applications designed around business requirements and user experience. Whether you need a native or cross-platform solution, we engineer apps with robust API integration, seamless authentication, and real-time functionality.",
    capabilities: [
      "Mobile Applications",
      "Cross-Platform Apps",
      "API Integration",
      "Authentication & Security",
      "Real-Time Features"
    ],
    ctaText: "Explore App Development →",
    ctaLink: "/services/app-development"
  },
  {
    id: "website-development",
    number: "02 / 09",
    label: "WEBSITE DEVELOPMENT",
    heading: "Web Experiences That Build Trust.",
    description: "We create fast, responsive, conversion-focused websites that combine strong design with solid engineering. From corporate landing pages to high-performance web portals, our focus is on speed, aesthetics, and scalable infrastructure.",
    capabilities: [
      "Next.js",
      "React",
      "TypeScript",
      "Responsive UI",
      "Performance Optimization",
      "SEO"
    ],
    ctaText: "Discuss Your Website →",
    ctaLink: "/services/website-development"
  },
  {
    id: "crm-development",
    number: "03 / 09",
    label: "CRM",
    heading: "Customer Systems That Keep Teams Moving.",
    description: "We build and integrate CRM systems that centralize leads, customers, sales processes, communication, and business operations. Keep your team aligned and your customer data actionable.",
    capabilities: [
      "CRM Setup",
      "Custom CRM Development",
      "Lead Management",
      "Sales Pipelines",
      "Customer Data",
      "API Integrations"
    ],
    ctaText: "Explore CRM Solutions →",
    ctaLink: "/services/crm-development"
  },
  {
    id: "business-automation",
    number: "04 / 09",
    label: "BUSINESS AUTOMATION",
    heading: "Less Manual Work. More Time to Grow.",
    description: "We identify repetitive business processes and turn them into automated workflows. By connecting your tools and eliminating manual data entry, your team can focus on what actually matters.",
    capabilities: [
      "Lead Capture & Follow-up",
      "Email & SMS Automation",
      "Data Synchronization",
      "Notifications",
      "Reporting",
      "Internal Workflows"
    ],
    ctaText: "Automate Your Business →",
    ctaLink: "/services/business-automation"
  },
  {
    id: "n8n-automation",
    number: "05 / 09",
    label: "n8n AUTOMATION",
    heading: "Complex Workflows. Connected Automatically.",
    description: "We use n8n to build sophisticated integrations between your business tools, APIs, databases, AI models, CRM systems, and communication platforms. Custom nodes for custom problems.",
    capabilities: [
      "Workflow Automation",
      "API Integrations",
      "AI Workflows",
      "Webhooks",
      "Data Processing",
      "CRM Automation",
      "Scheduled Workflows"
    ],
    ctaText: "Explore n8n Workflows →",
    ctaLink: "/services/n8n-automation"
  },
  {
    id: "zapier-automation",
    number: "06 / 09",
    label: "ZAPIER AUTOMATION",
    heading: "Connect Your Tools. Automate the Busywork.",
    description: "Connect your existing business tools quickly and reliably. We engineer Zapier automated workflows that handle lead routing, data syncs, and notifications without requiring custom code.",
    capabilities: [
      "App Integrations",
      "Lead Automation",
      "CRM Automation",
      "Email Workflows",
      "Data Sync",
      "Notifications"
    ],
    ctaText: "Connect with Zapier →",
    ctaLink: "/services/zapier-automation"
  },
  {
    id: "gohighlevel",
    number: "07 / 09",
    label: "GOHIGHLEVEL",
    heading: "Turn Your CRM Into a Growth Engine.",
    description: "We build tailored GoHighLevel systems for lead management, sales pipelines, follow-ups, appointments, campaigns, and automation. Maximize your marketing and sales efforts from a single platform.",
    capabilities: [
      "GHL Setup",
      "Funnels & Pipelines",
      "Workflow Automation",
      "Lead Follow-up",
      "SMS & Email",
      "Appointment Systems"
    ],
    ctaText: "Scale with GoHighLevel →",
    ctaLink: "/services/gohighlevel"
  },
  {
    id: "ai-ml-solutions",
    number: "08 / 09",
    label: "AI / MACHINE LEARNING",
    heading: "AI That Solves Real Problems.",
    description: "We integrate AI and machine learning into practical business systems. From internal AI agents and RAG systems to intelligent automation and custom LLM integrations, we build technology that augments your team.",
    capabilities: [
      "AI Agents",
      "LLM Integration",
      "AI Chat & Voice Systems",
      "RAG Systems",
      "AI Automation",
      "Machine Learning",
      "Custom AI Solutions"
    ],
    ctaText: "Discover AI Solutions →",
    ctaLink: "/services/ai-solutions"
  },
  {
    id: "data-analytics",
    number: "09 / 09",
    label: "DATA ANALYTICS",
    heading: "Turn Business Data Into Better Decisions.",
    description: "Transform raw business data into useful insights. We build automated reporting systems and visual dashboards so you can track KPIs, monitor revenue, and understand customer behavior at a glance.",
    capabilities: [
      "Business Dashboards",
      "Data Visualization",
      "Reporting",
      "KPI Tracking",
      "Data Integration",
      "Automated Reports",
      "Analytics Systems"
    ],
    ctaText: "Visualize Your Data →",
    ctaLink: "/services/data-analytics"
  }
];
