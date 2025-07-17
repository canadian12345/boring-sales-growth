export type SchemaType = "Organization" | "Service" | "FAQPage" | "WebPage" | "LocalBusiness";

interface BaseSchema {
  "@context": "https://schema.org";
  "@type": string;
}

interface OrganizationSchema extends BaseSchema {
  "@type": "Organization";
  name: string;
  alternateName?: string;
  url: string;
  logo?: string;
  description?: string;
  contactPoint?: {
    "@type": "ContactPoint";
    telephone: string;
    contactType: string;
    areaServed?: string | string[];
    availableLanguage?: string | string[];
  };
  sameAs?: string[];
  address?: {
    "@type": "PostalAddress";
    addressCountry: string;
  };
}

interface ServiceSchema extends BaseSchema {
  "@type": "ProfessionalService";
  name: string;
  description?: string;
  provider: {
    "@type": "Organization";
    name: string;
  };
  serviceType: string;
  areaServed?: {
    "@type": "Country";
    name: string;
  };
  hasOfferCatalog?: {
    "@type": "OfferCatalog";
    name: string;
    itemListElement: Array<{
      "@type": "Offer";
      itemOffered: {
        "@type": "Service";
        name: string;
        description?: string;
      };
    }>;
  };
}

interface FAQSchema extends BaseSchema {
  "@type": "FAQPage";
  mainEntity: Array<{
    "@type": "Question";
    name: string;
    acceptedAnswer: {
      "@type": "Answer";
      text: string;
    };
  }>;
}

interface WebPageSchema extends BaseSchema {
  "@type": "WebPage";
  name: string;
  description: string;
  url: string;
  breadcrumb?: {
    "@type": "BreadcrumbList";
    itemListElement: Array<{
      "@type": "ListItem";
      position: number;
      name: string;
      item?: string;
    }>;
  };
}

type SchemaMarkupProps = 
  | { type: "Organization"; data: OrganizationSchema }
  | { type: "Service"; data: ServiceSchema }
  | { type: "FAQPage"; data: FAQSchema }
  | { type: "WebPage"; data: WebPageSchema };

export default function SchemaMarkup({ data }: SchemaMarkupProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const organizationSchema: OrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "BoringSalesGrowth",
  "alternateName": "Noah Fleming Consulting",
  "url": "https://boringsalesgrowth.com",
  "logo": "https://boringsalesgrowth.com/logo.png",
  "description": "AI sales automation consulting for traditional B2B companies. We help manufacturers, distributors, and wholesalers implement AI without disrupting what works.",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-555-123-4567",
    "contactType": "sales",
    "areaServed": ["US", "CA"],
    "availableLanguage": ["English"]
  },
  "sameAs": [
    "https://www.linkedin.com/in/noahfleming",
    "https://twitter.com/noahfleming"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  }
};

export const mainServiceSchema: ServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "AI Sales Implementation Consulting",
  "description": "Transform your B2B sales team with AI automation that preserves relationships while eliminating repetitive tasks. 40% average close rate improvement.",
  "provider": {
    "@type": "Organization",
    "name": "BoringSalesGrowth"
  },
  "serviceType": "B2B AI Consulting",
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "AI Implementation Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "30-Day AI Pilot Program",
          "description": "Risk-free pilot to prove AI value with your actual sales team and processes"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Growth Protocol 2.0™ Implementation",
          "description": "Complete AI sales transformation program with 90-day ROI guarantee"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Sales Team AI Training",
          "description": "Hands-on training to ensure adoption and maximize results"
        }
      }
    ]
  }
};

export const homepageFAQSchema: FAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does AI implementation take for a B2B sales team?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our Growth Protocol 2.0™ typically shows measurable results within 30 days, with full implementation completed in 90 days. We start with a pilot program to prove value before full rollout."
      }
    },
    {
      "@type": "Question",
      "name": "Will AI replace our salespeople?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Our AI augments your existing team by handling repetitive tasks like follow-up scheduling, data entry, and quote generation. Your salespeople focus on relationships and closing deals—what they do best."
      }
    },
    {
      "@type": "Question",
      "name": "What if our sales team resists new technology?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We specialize in working with veteran sales teams. Our approach introduces AI gradually, showing immediate wins without disrupting proven processes. Most resistant team members become champions once they see how AI makes their job easier."
      }
    },
    {
      "@type": "Question",
      "name": "How much does AI sales automation cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Investment varies by team size and complexity, but most clients see positive ROI within 60-90 days through increased close rates and time savings. We offer flexible pricing and a 90-day money-back guarantee."
      }
    },
    {
      "@type": "Question",
      "name": "Is AI suitable for traditional B2B industries like manufacturing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. We specialize in traditional industries where relationships matter. Our clients include manufacturers, distributors, and industrial companies who've successfully implemented AI without losing their personal touch."
      }
    }
  ]
};

export function generateBreadcrumbSchema(items: Array<{ name: string; url?: string }>) {
  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      ...(item.url && { "item": item.url })
    }))
  };
  
  return breadcrumbList;
}