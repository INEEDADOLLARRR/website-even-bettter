import { Suspense, lazy } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { InspectionPopupProvider } from './context/InspectionPopupContext';
import { InspectionPopup } from './components/InspectionPopup';
import { Hero } from './components/Hero';
import { TrustTicker } from './components/TrustTicker';
import { Process } from './components/Process';
import { ServicesUrgency } from './components/ServicesUrgency';
import { BreatherCTA } from './components/BreatherCTA';

import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { SEOHead } from './components/SEOHead';
import ClickSpark from './components/ClickSpark';

import { ProjectEstimator } from './components/ProjectEstimator';
import { TrustAuthorityBar } from './components/TrustAuthorityBar';
import { LocalProofGallery } from './components/LocalProofGallery';
import { VideoValueProp } from './components/VideoValueProp';

const homepageJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'RoofingContractor',
    name: 'MyRoofTop',
    image: 'https://myrooftop.com/logo.png',
    url: 'https://myrooftop.com',
    telephone: '(718) 555-0123',
    email: 'hello@myrooftop.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1234 Bay Ridge Avenue',
      addressLocality: 'Brooklyn',
      addressRegion: 'NY',
      postalCode: '11209',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 40.6526006,
      longitude: -74.0594701,
    },
    areaServed: ['Brooklyn', 'Staten Island', 'Bronx', 'Queens', 'Manhattan'],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '07:00',
        closes: '19:00',
      },
    ],
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '247',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'MyRoofTop',
    url: 'https://myrooftop.com',
    logo: 'https://myrooftop.com/logo.png',
    description: 'Elite residential roofing services in Brooklyn and Staten Island, specializing in inspections, repairs, and full replacements.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1234 Bay Ridge Avenue',
      addressLocality: 'Brooklyn',
      addressRegion: 'NY',
      postalCode: '11209',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '(718) 555-0123',
      contactType: 'customer service',
    },
    sameAs: [
      'https://www.instagram.com/myrooftop',
      'https://www.linkedin.com/company/myrooftop',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'MyRoofTop',
    url: 'https://myrooftop.com',
  },
];

export default function App() {
  return (
    <InspectionPopupProvider>
      <ThemeProvider>
        <SEOHead jsonLd={homepageJsonLd} />
        <InspectionPopup />
        <ClickSpark sparkColor="currentColor" sparkSize={12} sparkRadius={20} sparkCount={8} duration={500} extraScale={1.2}>
          <div className="bg-surface text-surface-text font-sans selection:bg-brand-blue/30 selection:text-surface-text relative transition-colors duration-300">
          {/* Skip to content for accessibility */}
          <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-surface-text focus:text-surface focus:rounded-lg focus:text-sm focus:font-semibold">
            Skip to content
          </a>

          {/* Sticky hero sticks for 400px of scroll before main enters viewport */}
          <div className="relative z-0">
            <Hero />
          </div>

          <TrustAuthorityBar />
          
          <LocalProofGallery />
          
          <VideoValueProp />

          <main id="main-content" className="relative z-10 bg-surface transition-colors duration-300">
            <Process />
            <Testimonials />
            <TrustTicker />
            <ServicesUrgency />
            <BreatherCTA />
            <FAQ />

            <ProjectEstimator />
            <FinalCTA />
            <Footer />
          </main>
          </div>
        </ClickSpark>
      </ThemeProvider>
    </InspectionPopupProvider>
  );
}
