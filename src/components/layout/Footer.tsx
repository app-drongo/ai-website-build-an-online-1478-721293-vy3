import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
} from 'lucide-react';

export default function Footer() {
  const footerSections = [
    {
      title: 'Collections',
      links: [
        { name: 'Engagement Rings', href: '/collections/engagement' },
        { name: 'Wedding Bands', href: '/collections/wedding' },
        { name: 'Necklaces', href: '/collections/necklaces' },
        { name: 'Earrings', href: '/collections/earrings' },
        { name: 'Bracelets', href: '/collections/bracelets' },
        { name: 'Custom Pieces', href: '/collections/custom' },
      ],
    },
    {
      title: 'About',
      links: [
        { name: 'Our Story', href: '/about' },
        { name: 'Artisan Process', href: '/craftsmanship' },
        { name: 'Sustainability', href: '/sustainability' },
        { name: 'Press Features', href: '/press' },
        { name: 'Wholesale', href: '/wholesale' },
        { name: 'Visit Our Studio', href: '/studio' },
      ],
    },
    {
      title: 'Customer Care',
      links: [
        { name: 'Size Guide', href: '/size-guide' },
        { name: 'Care Instructions', href: '/jewelry-care' },
        { name: 'Repair Services', href: '/repairs' },
        { name: 'Lifetime Warranty', href: '/warranty' },
        { name: 'Gift Wrapping', href: '/gift-services' },
        { name: 'Track Your Order', href: '/order-tracking' },
      ],
    },
    {
      title: 'Policies',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Return Policy', href: '/returns' },
        { name: 'Shipping Info', href: '/shipping' },
        { name: 'Terms of Sale', href: '/terms' },
        { name: 'Authentication', href: '/authentication' },
        { name: 'Payment Security', href: '/security' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/artisanjewelco' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/artisanjewelco' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/artisanjewelco' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/artisan-jewel-co' },
  ];

  return (
    <footer className="bg-background border-t border-border/50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">AJ</span>
                </div>
                <span className="font-bold text-xl">Artisan Jewel Co.</span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Handcrafting timeless jewelry pieces with ethically sourced materials. Each piece
                tells a story of artisan tradition and modern elegance.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">hello@artisanjewelco.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+1 (555) 847-2639</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">456 Artisan Quarter, Studio 12</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Exclusive Collection Updates</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 text-sm border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <Button size="sm" className="px-3">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Be first to see new collections and receive artisan insights. Unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2024 Artisan Jewel Co. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Crafted with <Heart className="size-3 text-primary fill-current" /> by artisan hands
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2">Follow our journey:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-border/30">
            <Link
              href="/sitemap"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Sitemap
            </Link>
            <Link
              href="/accessibility"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Accessibility
            </Link>
            <Link
              href="/cookies"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Cookie Preferences
            </Link>
            <Link
              href="/support"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Customer Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
