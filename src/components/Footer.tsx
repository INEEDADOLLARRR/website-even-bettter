import { MapPin, Phone, Mail, Star } from 'lucide-react';

const NAP = {
  name: 'MyRoofTop',
  tagline: 'Protecting homes in Brooklyn & Staten Island for over 25 years.\nLicensed · Insured · Guaranteed.',
  phone: '(718) 555-0123',
  phoneHref: 'tel:+17185550123',
  hours: 'Mon–Sat 7am–7pm · Same-day available',
  email: 'hello@myrooftop.com',
  address: '1234 Bay Ridge Avenue',
  city: 'Brooklyn',
  state: 'NY',
  zip: '11209',
  license: 'License #CR-199901',
};

const QUICK_LINKS = [
  { label: 'Home', href: '#' },
  { label: 'Roof Inspection', href: '#' },
  { label: 'Repair & Patch', href: '#' },
  { label: 'Full Replacement', href: '#' },
  { label: 'Service Areas', href: '#' },
  { label: 'About Us', href: '#' },
  { label: 'Reviews', href: '#' },
  { label: 'Contact', href: '#consultation' },
];

const BADGES = ['Licensed', 'Insured', 'GAF Certified', 'BBB A+'];

export function Footer() {
  return (
    <footer id="contact" className="bg-bg-card text-text-primary relative overflow-hidden">

      {/* ── 3-COLUMN MAIN AREA ── */}
      <div className="max-w-7xl mx-auto px-6 pt-[40px] pb-sp-5 md:pt-sp-7 md:pb-sp-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-sp-7 pb-sp-7 border-b border-white/8">

          {/* ── COL 1: NAP — Contact ── */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-text-muted mb-5">Contact us</p>

            <p className="font-display text-[17px] font-medium text-text-primary mb-1">{NAP.name}</p>
            <p className="text-[12px] text-text-muted leading-[1.7] mb-5 whitespace-pre-line">{NAP.tagline}</p>

            {/* Phone */}
            <div className="flex items-center gap-2.5 mb-1">
              <Phone className="w-3.5 h-3.5 text-theme flex-shrink-0" aria-hidden="true" />
              <a
                href={NAP.phoneHref}
                className="text-[13px] font-semibold text-theme hover:brightness-125 transition-colors"
              >
                {NAP.phone}
              </a>
            </div>
            <p className="text-[11px] text-text-primary/35 ml-6 mb-4">{NAP.hours}</p>

            {/* Email */}
            <div className="flex items-center gap-2.5 mb-5">
              <Mail className="w-3.5 h-3.5 text-text-muted flex-shrink-0" aria-hidden="true" />
              <a
                href={`mailto:${NAP.email}`}
                className="text-[12px] text-text-primary/55 hover:text-text-primary/80 transition-colors"
              >
                {NAP.email}
              </a>
            </div>

            {/* Address + License */}
            <div className="flex items-start gap-2.5">
              <MapPin className="w-3.5 h-3.5 text-text-primary/35 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <address className="not-italic text-[11px] text-text-primary/35 leading-[1.7]">
                {NAP.address}<br />
                {NAP.city}, {NAP.state} {NAP.zip}<br />
                {NAP.license}
              </address>
            </div>
          </div>

          {/* ── COL 2: Quick Links ── */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-text-muted mb-5">Quick links</p>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2.5">
                {QUICK_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[13px] text-text-secondary hover:text-text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* ── COL 3: Trust + Map ── */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-text-muted mb-5">Credentials</p>

            {/* Badge pills */}
            <div className="flex flex-wrap gap-2 mb-5">
              {BADGES.map((badge) => (
                <span
                  key={badge}
                  className="text-[11px] px-2.5 py-1 rounded-md bg-white/6 border border-border-default text-text-secondary font-medium"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* Star rating */}
            <div className="mb-5">
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-theme text-theme" aria-hidden="true" />
                ))}
                <span className="text-[13px] font-semibold text-text-primary ml-1">5.0</span>
              </div>
              <p className="text-[11px] text-text-primary/35">
                247 Google Reviews ·{' '}
                <a
                  href="https://g.page/myrooftop/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-theme hover:brightness-125 transition-colors"
                >
                  View all
                </a>
              </p>
            </div>

            {/* Google Maps embed */}
            <div className="rounded-xl overflow-hidden border border-border-default h-[140px]">
              <iframe
                title="MyRoofTop service area — Brooklyn, NY"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96708.34051685808!2d-74.0594701!3d40.6526006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24416947c2109%3A0x82765c7800aca5bc!2sBrooklyn%2C%20NY!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="140"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="pt-[24px] flex flex-col sm:flex-row items-center justify-between gap-[16px]">
          <p className="text-[11px] text-text-primary/25">
            © {new Date().getFullYear()} {NAP.name} · All rights reserved
          </p>
          <div className="flex items-center gap-5 text-[11px] text-text-muted">
            <a href="/privacy-policy" className="hover:text-text-secondary transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-text-secondary transition-colors">Terms of Service</a>
            <a href="/sitemap.xml" className="hover:text-text-secondary transition-colors">Sitemap</a>
          </div>
        </div>
      </div>

    </footer>
  );
}
