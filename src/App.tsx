import { Suspense, lazy } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Hero } from './components/Hero';
import { AuthorityBar } from './components/AuthorityBar';
import { TrustTicker } from './components/TrustTicker';
import { ValueGrid } from './components/ValueGrid';
import { Process } from './components/Process';
import { ExpertiseGallery } from './components/ExpertiseGallery';
import { BentoGrid } from './components/BentoGrid';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { LatestArticles } from './components/LatestArticles';
import { SEOHead } from './components/SEOHead';
import ClickSpark from './components/ClickSpark';

const ProjectEstimator = lazy(() => import('./components/ProjectEstimator').then(m => ({ default: m.ProjectEstimator })));

const homepageJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Verrazano Roofing',
    url: 'https://verrazanoroofing.com',
    logo: 'https://verrazanoroofing.com/logo.png',
    description: 'Elite commercial roofing services specializing in premium performance coatings and comprehensive structural repairs.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1234 Bay Ridge Ave',
      addressLocality: 'Brooklyn',
      addressRegion: 'NY',
      postalCode: '11209',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-718-555-0123',
      contactType: 'customer service',
    },
    sameAs: [
      'https://www.instagram.com/verrazanoroofing',
      'https://www.linkedin.com/company/verrazanoroofing',
      'https://twitter.com/verrazanoroofing',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Verrazano Roofing',
    url: 'https://verrazanoroofing.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://verrazanoroofing.com/blog?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  },
];

export default function App() {
  return (
    <ThemeProvider>
      <SEOHead jsonLd={homepageJsonLd} />
      <ClickSpark sparkColor="currentColor" sparkSize={12} sparkRadius={20} sparkCount={8} duration={500} extraScale={1.2}>
        <div className="bg-surface text-surface-text font-sans selection:bg-brand-blue/30 selection:text-surface-text relative transition-colors duration-300">
          {/* Skip to content for accessibility */}
          <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-surface-text focus:text-surface focus:rounded-lg focus:text-sm focus:font-semibold">
            Skip to content
          </a>

          {/* Hero wrapper: extra height creates scroll buffer for Authority Bar phase */}
          {/* The sticky hero sticks for 400px of scroll before main enters viewport */}
          <div className="sticky top-0 h-screen overflow-hidden z-0">
            <Hero />
          </div>
          {/* 400px of scroll distance before main enters — Authority Bar reveals here */}
          <div className="h-[400px] relative z-0" aria-hidden="true">
            <AuthorityBar />
          </div>

          {/* All remaining sections flow naturally — z-10 covers Authority Bar (z-5) */}
          <main id="main-content" className="relative z-10 bg-surface transition-colors duration-300">
            <Process />
            <TrustTicker />
            <ValueGrid />
            <BentoGrid />
            <ExpertiseGallery />
            <Testimonials />
            <Suspense fallback={<div className="min-h-[50vh]" />}>
              <ProjectEstimator />
            </Suspense>
            <LatestArticles />
            <Footer />
          </main>
        </div>
      </ClickSpark>
    </ThemeProvider>
  );
}
