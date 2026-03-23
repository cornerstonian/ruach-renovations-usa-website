"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ChefHat,
  Bath,
  Home,
  Layers,
  Zap,
  Wrench,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Star,
  Shield,
  Clock,
  Award,
  Menu,
  X,
} from "lucide-react";

/* ─── Animation Variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* ─── Data ─── */
const services = [
  {
    icon: ChefHat,
    title: "Kitchen Renovation & Creation",
    desc: "From complete gut renovations to brand-new kitchen builds, we craft the heart of your home with premium cabinetry, countertops, and layouts designed around how you actually live.",
  },
  {
    icon: Bath,
    title: "Bathroom Renovation & Creation",
    desc: "Spa-worthy retreats built to your vision — whether you're transforming an existing bathroom or creating one from scratch with luxury tile, fixtures, and expert craftsmanship.",
  },
  {
    icon: Home,
    title: "Home Entertainment Theaters",
    desc: "Transform any room into a cinematic experience. Custom home theaters designed and built with premium audio, lighting, and comfort — entertainment elevated to an art form.",
  },
  {
    icon: Layers,
    title: "Interior Upscaling",
    desc: "From flooring and built-ins to custom millwork and lighting design, we elevate every detail inside your home to match the life you've envisioned.",
  },
  {
    icon: Zap,
    title: "Smart Home Integration",
    desc: "Technological innovation built into your renovation — lighting control, automated systems, and smart home technology seamlessly integrated into your new space.",
  },
  {
    icon: Wrench,
    title: "Full Home Renovation",
    desc: "Comprehensive whole-home transformations managed under one team. From concept to completion, we handle every trade with the elegance and care your home deserves.",
  },
];

const testimonials = [
  {
    text: "Ruach transformed our kitchen into something out of a design magazine. Every detail was considered, every finish impeccable. They didn't just renovate — they elevated our entire home.",
    name: "Marcus & Denise T.",
    location: "Mt. Juliet, TN",
    stars: 5,
  },
  {
    text: "After talking to several contractors, Ruach was a revelation. On time, on budget, and the craftsmanship is extraordinary. Our bathroom is now the most beautiful room in the house.",
    name: "James R.",
    location: "Nashville, TN",
    stars: 5,
  },
  {
    text: "The attention to detail sets them apart. They noticed things we never would have — sight lines, light, material pairings. Christ-centered care shows in everything they do.",
    name: "Patricia & William K.",
    location: "Murfreesboro, TN",
    stars: 5,
  },
];

const galleryItems = [
  {
    gradient: "from-stone/80 to-charcoal",
    label: "Modern Kitchen Renovation",
    h: "h-[380px]",
  },
  {
    gradient: "from-gold/20 to-warmgray/40",
    label: "Luxury Bathroom Suite",
    h: "h-[320px]",
  },
  {
    gradient: "from-charcoal to-stone/60",
    label: "Home Entertainment Theater",
    h: "h-[440px]",
  },
  {
    gradient: "from-warmgray/30 to-cream",
    label: "Custom Kitchen Creation",
    h: "h-[350px]",
  },
  {
    gradient: "from-stone/60 to-charcoal/80",
    label: "Interior Upscaling",
    h: "h-[400px]",
  },
  {
    gradient: "from-gold/10 to-stone/30",
    label: "Master Bath Renovation",
    h: "h-[360px]",
  },
];

const whyData = [
  {
    num: "01",
    icon: Shield,
    title: "Hard Work & Real Craftsmanship",
    text: "We are real people providing real work. No shortcuts, no substandard finishes — just hard work and craftsmanship executed to a standard most contractors don't even aim for.",
  },
  {
    num: "02",
    icon: Award,
    title: "Elegance, Class & Innovation",
    text: "We combine technological innovation with timeless design sensibility. Every renovation we deliver is elegant, thoughtful, and built to increase the value and beauty of your home.",
  },
  {
    num: "03",
    icon: Clock,
    title: "Christ-Centered Care",
    text: "Our work is guided by integrity, service, and genuine care for every homeowner we serve. We treat your home the way we'd want ours treated — with respect, diligence, and heart.",
  },
];

/* ─── Nav Component ─── */
function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "About", href: "#about" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-charcoal/70 backdrop-blur-xl shadow-2xl shadow-charcoal/10 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center group-hover:bg-gold/30 transition-colors duration-300">
            <span className="font-display text-gold text-lg font-bold">R</span>
          </div>
          <span className="font-display text-warmwhite text-xl tracking-tight">
            Ruach
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-warmwhite/70 hover:text-gold text-sm font-body tracking-wide transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a href="tel:3474798843" className="flex items-center gap-2 text-warmwhite/60 hover:text-gold transition-colors text-sm font-body">
            <Phone size={14} /> (347) 479-8843
          </a>
          <a
            href="#contact"
            className="shimmer-btn btn-gold ml-2 bg-gold text-charcoal px-6 py-2.5 rounded-full text-sm font-semibold font-body tracking-wide hover:bg-gold/90 transition-all duration-300"
          >
            Get a Free Quote
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-warmwhite/80 hover:text-gold transition-colors"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-charcoal/95 backdrop-blur-xl mt-2 mx-4 rounded-2xl p-6 border border-warmwhite/5"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-warmwhite/70 hover:text-gold text-lg font-body transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="block mt-4 text-center shimmer-btn btn-gold bg-gold text-charcoal px-6 py-3 rounded-full text-sm font-semibold font-body"
          >
            Get a Free Quote
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}

/* ─── Floating Input Component ─── */
function FloatingInput({
  label,
  type = "text",
  textarea = false,
}: {
  label: string;
  type?: string;
  textarea?: boolean;
}) {
  const Tag = textarea ? "textarea" : "input";
  return (
    <div className="relative mb-8">
      <Tag
        type={textarea ? undefined : type}
        placeholder={label}
        rows={textarea ? 4 : undefined}
        className={`floating-input ${textarea ? "resize-none" : ""}`}
      />
      <label className="floating-label">{label}</label>
    </div>
  );
}

/* ─── Trust Bar ─── */
function TrustBar() {
  const items = [
    "4 Years · Growing Strong",
    "500+ Projects Completed",
    "Licensed & Insured",
    "Satisfaction Guaranteed",
    "Serving Middle Tennessee",
  ];
  return (
    <div className="bg-gold text-charcoal py-2.5 overflow-hidden">
      <div className="flex items-center gap-0 animate-none">
        <div className="flex items-center gap-8 whitespace-nowrap w-full justify-center flex-wrap px-6">
          {items.map((item, i) => (
            <span key={item} className="flex items-center gap-3 text-xs font-body font-semibold tracking-wide uppercase">
              {i > 0 && <span className="w-1 h-1 bg-charcoal/40 rounded-full hidden sm:block" />}
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Sticky Mobile CTA ─── */
function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: visible ? 0 : 100, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-charcoal border-t border-gold/20 px-4 py-3 flex gap-3"
    >
      <a href="tel:3474798843" className="flex-1 flex items-center justify-center gap-2 border border-gold/30 text-gold rounded-xl py-3 text-sm font-semibold font-body">
        <Phone size={16} /> Call Now
      </a>
      <a href="#contact" className="flex-1 flex items-center justify-center gap-2 bg-gold text-charcoal rounded-xl py-3 text-sm font-semibold font-body">
        Free Quote
      </a>
    </motion.div>
  );
}

/* ─── Mid-Page CTA Strip ─── */
function CTAStrip({ text }: { text: string }) {
  return (
    <div className="bg-cream border-y border-gold/10 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="font-display text-charcoal text-xl md:text-2xl text-center sm:text-left">{text}</p>
        <a href="#contact" className="flex-shrink-0 bg-gold text-charcoal px-8 py-3.5 rounded-full font-semibold font-body text-sm tracking-wide hover:bg-amber-600 transition-colors inline-flex items-center gap-2">
          Request a Free Consultation <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
}

/* ─── Main Page ─── */
export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <main className="overflow-hidden">
      <StickyMobileCTA />
      <TrustBar />
      <Navigation />

      {/* ━━━ HERO ━━━ */}
      <section className="relative min-h-screen flex items-center justify-center bg-charcoal overflow-hidden">
        {/* Dot grid background */}
        <div className="absolute inset-0 dot-grid opacity-40" />

        {/* Geometric accent lines */}
        <div className="absolute top-20 right-20 w-64 h-64 border border-gold/10 rotate-45 hidden lg:block" />
        <div className="absolute bottom-40 left-16 w-32 h-32 border border-gold/5 rotate-12 hidden lg:block" />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-gold/30 rounded-full" />
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-gold/20 rounded-full" />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex flex-col sm:flex-row items-center gap-3 mb-8"
          >
            <span className="text-gold/70 text-sm tracking-[0.3em] uppercase font-body font-medium border border-gold/20 px-5 py-2 rounded-full">
              Middle Tennessee
            </span>
            <span className="hidden sm:block text-warmwhite/20 text-xs">·</span>
            <span className="text-amber-400/80 text-sm font-body font-medium animate-pulse">
              📅 Now Booking — Limited Spring Availability
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-warmwhite text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-8"
          >
            Breathing{" "}
            <em className="text-gold not-italic font-display italic">Life</em>
            <br />
            Into the Heart of Your Home.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="text-warmwhite/50 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-body leading-relaxed"
          >
            Middle Tennessee&apos;s renovation specialists — bringing elegance, class, and Christ-centered care to every kitchen, bathroom, and home we transform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#contact"
              className="shimmer-btn btn-gold bg-gold text-charcoal px-8 py-4 rounded-full text-base font-semibold font-body tracking-wide hover:bg-gold/90 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              Start Your Project
              <ArrowRight size={18} />
            </a>
            <a
              href="#gallery"
              className="border border-warmwhite/20 text-warmwhite/80 px-8 py-4 rounded-full text-base font-body tracking-wide hover:border-gold/40 hover:text-gold transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              View Our Work
            </a>
          </motion.div>
        </motion.div>

        {/* Diagonal clip */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24 bg-cream"
          style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
        />
      </section>

      {/* ━━━ SERVICES ━━━ */}
      <section
        id="services"
        className="relative bg-cream py-28 lg:py-36"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 95%, 0 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <motion.span
              variants={fadeUp}
              custom={0}
              className="text-gold text-sm tracking-[0.3em] uppercase font-body font-medium"
            >
              What We Do
            </motion.span>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="font-display text-charcoal text-4xl md:text-5xl lg:text-6xl mt-4 tracking-tight"
            >
              Crafted With Purpose
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-warmgray text-lg max-w-2xl mx-auto mt-6 font-body leading-relaxed"
            >
              Every service we offer is backed by decades of expertise and an
              unwavering commitment to quality that shows in every detail.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                variants={scaleIn}
                custom={i}
                className="group bg-warmwhite rounded-2xl p-8 lg:p-10 border border-transparent hover:border-gold/20 hover:shadow-xl hover:shadow-gold/5 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              >
                <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                  <service.icon className="text-gold" size={26} />
                </div>
                <h3 className="font-display text-charcoal text-xl mb-3">
                  {service.title}
                </h3>
                <p className="text-warmgray font-body text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
                <span className="inline-flex items-center gap-2 text-gold text-sm font-body font-medium group-hover:gap-3 transition-all duration-300">
                  Learn More <ArrowRight size={14} />
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTAStrip text="Ready to transform your kitchen, bathroom, or entire home in Middle Tennessee?" />

      {/* ━━━ WHY CHOOSE US ━━━ */}
      <section className="relative bg-charcoal py-28 lg:py-36 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <motion.span
              variants={fadeUp}
              custom={0}
              className="text-gold text-sm tracking-[0.3em] uppercase font-body font-medium"
            >
              The Ruach Difference
            </motion.span>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="font-display text-warmwhite text-4xl md:text-5xl lg:text-6xl mt-4 tracking-tight"
            >
              Why Homeowners Trust Us
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
          >
            {whyData.map((item, i) => (
              <motion.div
                key={item.num}
                variants={fadeUp}
                custom={i}
                className="relative text-center lg:text-left"
              >
                {/* Large background number */}
                <span className="absolute -top-8 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 font-display text-[120px] leading-none text-warmwhite/[0.04] select-none pointer-events-none">
                  {item.num}
                </span>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-6 mx-auto lg:mx-0">
                    <item.icon className="text-gold" size={26} />
                  </div>
                  <h3 className="font-display text-warmwhite text-2xl mb-4">
                    {item.title}
                  </h3>
                  <p className="text-warmwhite/50 font-body leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ━━━ GALLERY ━━━ */}
      <section id="gallery" className="bg-cream py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <motion.span
              variants={fadeUp}
              custom={0}
              className="text-gold text-sm tracking-[0.3em] uppercase font-body font-medium"
            >
              Our Portfolio
            </motion.span>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="font-display text-charcoal text-4xl md:text-5xl lg:text-6xl mt-4 tracking-tight"
            >
              Spaces That Inspire
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
          >
            {galleryItems.map((item, i) => (
              <motion.div
                key={item.label}
                variants={scaleIn}
                custom={i}
                className={`break-inside-avoid relative ${item.h} rounded-2xl overflow-hidden bg-gradient-to-br ${item.gradient} group cursor-pointer`}
              >
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/60 transition-all duration-500 flex items-end">
                  <div className="p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <span className="text-gold text-xs tracking-[0.2em] uppercase font-body font-medium">
                      Project
                    </span>
                    <h3 className="text-warmwhite font-display text-xl mt-1">
                      {item.label}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ━━━ TESTIMONIALS ━━━ */}
      <section
        id="testimonials"
        className="bg-warmwhite py-28 lg:py-36"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <motion.span
              variants={fadeUp}
              custom={0}
              className="text-gold text-sm tracking-[0.3em] uppercase font-body font-medium"
            >
              Testimonials
            </motion.span>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="font-display text-charcoal text-4xl md:text-5xl lg:text-6xl mt-4 tracking-tight"
            >
              Words From Our Clients
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                variants={fadeUp}
                custom={i}
                className="relative bg-cream rounded-2xl p-8 lg:p-10 border border-gold/5 hover:border-gold/15 transition-all duration-300"
              >
                {/* Large quote mark */}
                <span className="absolute top-4 left-6 font-display text-[100px] leading-none text-gold/[0.12] select-none pointer-events-none">
                  &ldquo;
                </span>

                <div className="relative z-10">
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <Star
                        key={j}
                        size={16}
                        className="text-gold fill-gold"
                      />
                    ))}
                  </div>
                  <p className="text-stone font-body leading-relaxed mb-8 text-[15px]">
                    {t.text}
                  </p>
                  <div>
                    <p className="font-display text-charcoal text-lg">
                      {t.name}
                    </p>
                    <p className="text-warmgray font-body text-sm mt-1">
                      {t.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTAStrip text="Free consultations available — let's talk about your dream project." />

      {/* ━━━ ABOUT ━━━ */}
      <section id="about" className="bg-cream py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            {/* Image placeholder */}
            <motion.div variants={fadeUp} custom={0} className="relative">
              <div className="w-full aspect-[4/5] rounded-2xl bg-gradient-to-br from-stone/40 to-charcoal/60 overflow-hidden" />
              {/* Stat badge */}
              <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-gold text-charcoal rounded-2xl px-6 py-5 shadow-xl shadow-gold/20">
                <span className="font-display text-4xl font-bold block leading-none">
                  4
                </span>
                <span className="font-body text-xs tracking-wide uppercase mt-1 block text-charcoal/70">
                  Years of
                  <br />
                  Excellence
                </span>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div variants={fadeUp} custom={1}>
              <span className="text-gold text-sm tracking-[0.3em] uppercase font-body font-medium">
                Our Story
              </span>
              <h2 className="font-display text-charcoal text-4xl md:text-5xl mt-4 mb-8 tracking-tight leading-[1.1]">
                Built on Integrity,
                <br />
                Driven by Craft
              </h2>
              <p className="text-warmgray font-body leading-relaxed mb-6">
                Ruach Renovations was built on a simple conviction: your home should be a place that inspires you every single day. We are real people providing real work — guided by integrity, elegance, and genuine care for every homeowner we serve.
              </p>
              <p className="text-warmgray font-body leading-relaxed mb-6">
                We combine technological innovation with timeless craftsmanship, transforming kitchens, bathrooms, entertainment spaces, and entire homes across Middle Tennessee. Whether you&apos;re upscaling your current home or preparing it for sale, we bring the vision and the skill to make it happen.
              </p>
              <p className="text-warmgray font-body leading-relaxed mb-10">
                From the initial free consultation to the final walkthrough, our team manages every detail. No handoffs, no surprises. Just hard work, elegant results, and the kind of care that comes from people who treat your home as if it were their own.
              </p>
              <a
                href="#contact"
                className="btn-gold bg-gold text-charcoal px-8 py-4 rounded-full text-base font-semibold font-body tracking-wide hover:bg-gold/90 transition-all duration-300 inline-flex items-center gap-2"
              >
                Learn More About Us
                <ArrowRight size={18} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ━━━ CONTACT ━━━ */}
      <section
        id="contact"
        className="relative bg-charcoal py-28 lg:py-36 overflow-hidden"
      >
        {/* Decorative blurred circles */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-gold/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-amber-600/8 rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <motion.span
              variants={fadeUp}
              custom={0}
              className="text-gold text-sm tracking-[0.3em] uppercase font-body font-medium"
            >
              Get In Touch
            </motion.span>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="font-display text-warmwhite text-4xl md:text-5xl lg:text-6xl mt-4 tracking-tight"
            >
              Ready to Transform
              <br />
              Your Home?
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20"
          >
            {/* Form */}
            <motion.div variants={fadeUp} custom={0} className="lg:col-span-3">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-2"
              >
                <FloatingInput label="Your Name" />
                <FloatingInput label="Email Address" type="email" />
                <FloatingInput label="Phone Number" type="tel" />
                <FloatingInput label="Tell us about your project" textarea />
                <button
                  type="submit"
                  className="shimmer-btn btn-gold bg-gold text-charcoal px-10 py-4 rounded-full text-base font-semibold font-body tracking-wide hover:bg-gold/90 transition-all duration-300 inline-flex items-center gap-2 mt-4"
                >
                  Send Message
                  <ArrowRight size={18} />
                </button>
              </form>
            </motion.div>

            {/* Contact details */}
            <motion.div
              variants={fadeUp}
              custom={1}
              className="lg:col-span-2 flex flex-col justify-center gap-10"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                    <Phone className="text-gold" size={18} />
                  </div>
                  <span className="text-warmwhite/40 text-sm font-body uppercase tracking-wider">
                    Phone
                  </span>
                </div>
                <a
                  href="tel:3474798843"
                  className="text-warmwhite font-display text-2xl hover:text-gold transition-colors"
                >
                  (347) 479-8843
                </a>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                    <Mail className="text-gold" size={18} />
                  </div>
                  <span className="text-warmwhite/40 text-sm font-body uppercase tracking-wider">
                    Email
                  </span>
                </div>
                <a
                  href="mailto:info@ruachrenovations.com"
                  className="text-warmwhite font-display text-xl hover:text-gold transition-colors"
                >
                  info@ruachrenovations.com
                </a>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                    <MapPin className="text-gold" size={18} />
                  </div>
                  <span className="text-warmwhite/40 text-sm font-body uppercase tracking-wider">
                    Location
                  </span>
                </div>
                <p className="text-warmwhite font-display text-xl">
                  Mt. Juliet, TN 37122
                </p>
                <p className="text-warmwhite/50 font-body text-sm mt-1">Serving all of Middle Tennessee</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ━━━ FOOTER ━━━ */}
      <footer className="bg-charcoal border-t border-warmwhite/5 py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-warmwhite/30 font-body text-sm">
            © {new Date().getFullYear()} Ruach Renovations. All rights reserved.
          </p>
          <p className="text-warmwhite/20 font-body text-xs">
            Breathing Life Into Your Home.
          </p>
        </div>
      </footer>
    </main>
  );
}
