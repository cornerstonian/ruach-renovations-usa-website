'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  ChefHat, Bath, Home, Zap, Droplets, Layers,
  Star, Phone, Mail, MapPin, Menu, X, ArrowRight,
  Shield, Clock, Users, ChevronDown
} from 'lucide-react'

/* ── VARIANTS ── */
const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12 } } }
const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.6 } } }

/* ── DATA ── */
const NAV = ['Services', 'Gallery', 'About', 'Testimonials', 'Contact']

const SERVICES = [
  { icon: ChefHat, title: 'Kitchen Renovation', desc: 'Transform the heart of your home with bespoke cabinetry, premium countertops, and expert installation. We handle every detail from design consultation to final finish.' },
  { icon: Bath, title: 'Bathroom Renovation', desc: 'Elevate your daily routine with a beautifully designed bathroom. From luxury walk-in showers to freestanding baths, we create spaces you\'ll love.' },
  { icon: Home, title: 'Full Home Renovation', desc: 'Complete home transformations managed under one roof. From structural work to finishing touches, our experienced team handles it all seamlessly.' },
  { icon: Layers, title: 'Flooring', desc: 'Premium flooring solutions including hardwood, tile, and luxury vinyl. Expertly installed to enhance the beauty and value of your home.' },
  { icon: Zap, title: 'Electrical', desc: 'Licensed electrical work completed to the highest safety standards. Upgrades, rewiring, and new installations handled by certified professionals.' },
  { icon: Droplets, title: 'Plumbing', desc: 'Expert plumbing services from simple repairs to complete system installations. We ensure everything flows perfectly in your newly renovated space.' },
]

const WHY = [
  { icon: Clock, title: '20+ Years Experience', desc: 'Two decades of transforming homes across the country. Our team brings unmatched expertise to every project, large or small.' },
  { icon: Shield, title: 'Satisfaction Guaranteed', desc: 'All of our work is guaranteed to your complete satisfaction. We don\'t consider a project finished until you\'re delighted with the result.' },
  { icon: Users, title: 'Full Project Management', desc: 'We manage every aspect of your renovation from start to finish — design, materials, trades, and timeline — so you don\'t have to.' },
]

const GALLERY = [
  { label: 'Modern Kitchen Remodel', dark: false, tall: true },
  { label: 'Luxury Bathroom Suite', dark: true, tall: false },
  { label: 'Open Plan Living', dark: false, tall: false },
  { label: 'Master Ensuite', dark: true, tall: true },
  { label: 'Bespoke Kitchen Design', dark: false, tall: false },
  { label: 'Full Home Renovation', dark: true, tall: false },
]

const TESTIMONIALS = [
  { name: 'James & Patricia M.', location: 'Houston, TX', stars: 5, quote: 'Ruach Renovations completely transformed our kitchen. The craftsmanship is exceptional and the team was professional from start to finish. We couldn\'t be happier with the result.' },
  { name: 'David R.', location: 'Dallas, TX', stars: 5, quote: 'Our bathroom renovation exceeded every expectation. The attention to detail is extraordinary — it looks like something out of a design magazine. Highly recommend.' },
  { name: 'Linda & Tom K.', location: 'Austin, TX', stars: 5, quote: 'From the initial consultation to the final walkthrough, the experience was seamless. Our home has been completely transformed. True craftsmen.' },
]

/* ── NAV ── */
function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#1c1917]/95 backdrop-blur-md shadow-xl shadow-black/20' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="font-display text-2xl font-bold text-[#fafaf9] tracking-tight">
          Ruach <span style={{ color: '#d97706' }}>Renovations</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {NAV.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-medium text-[#fafaf9]/70 hover:text-[#fafaf9] transition-colors">
              {link}
            </a>
          ))}
          <a href="#contact" className="text-sm font-semibold bg-[#d97706] text-white px-5 py-2.5 rounded-lg hover:bg-amber-600 transition-colors">
            Get a Free Quote
          </a>
        </div>
        <button className="md:hidden text-[#fafaf9]" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#1c1917] border-t border-white/10 px-6 py-6 flex flex-col gap-5">
          {NAV.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-[#fafaf9]/80 font-medium" onClick={() => setOpen(false)}>{link}</a>
          ))}
          <a href="#contact" className="bg-[#d97706] text-white px-5 py-3 rounded-lg text-center font-semibold" onClick={() => setOpen(false)}>
            Get a Free Quote
          </a>
        </div>
      )}
    </nav>
  )
}

/* ── HERO ── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1c1917 0%, #292524 40%, #1c1917 100%)' }}>
      {/* Warm radial glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 60% 50%, rgba(217,119,6,0.12) 0%, transparent 70%)' }} />
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fafaf9 1px, transparent 1px), linear-gradient(90deg, #fafaf9 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.3em] uppercase mb-8 px-4 py-2 rounded-full border"
              style={{ color: '#d97706', borderColor: 'rgba(217,119,6,0.3)', backgroundColor: 'rgba(217,119,6,0.08)' }}>
              Premium Home Renovation · Est. USA
            </span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-8" style={{ color: '#fafaf9' }}>
            Breathing Life<br />
            <span style={{ color: '#d97706' }}>Into Your Home.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed" style={{ color: 'rgba(250,250,249,0.65)' }}>
            Expert kitchen, bathroom, and full home renovations — delivered with 20 years of craftsmanship, backed by our complete satisfaction guarantee.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#gallery" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold border transition-all duration-300 hover:bg-white/10"
              style={{ color: '#fafaf9', borderColor: 'rgba(250,250,249,0.25)' }}>
              View Our Work <ArrowRight size={18} />
            </a>
            <a href="#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-amber-600"
              style={{ backgroundColor: '#d97706', color: '#fff' }}>
              Get a Free Quote
            </a>
          </motion.div>
        </motion.div>
      </div>

      <a href="#services" className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 animate-bounce">
        <ChevronDown size={28} />
      </a>
    </section>
  )
}

/* ── SERVICES ── */
function Services() {
  return (
    <section id="services" className="py-28 bg-[#fafaf9]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
          <motion.div variants={fadeUp} className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.3em] uppercase" style={{ color: '#d97706' }}>What We Do</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3" style={{ color: '#1c1917' }}>Our Services</h2>
            <p className="mt-4 max-w-xl mx-auto" style={{ color: '#78716c' }}>From a single room to a complete home transformation — we deliver quality workmanship across every trade.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <motion.div key={s.title} variants={fadeUp}
                className="group bg-white rounded-2xl p-8 border border-stone-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 cursor-pointer"
                style={{ borderColor: 'transparent' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = '#d97706')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'transparent')}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(217,119,6,0.1)' }}>
                  <s.icon size={22} style={{ color: '#d97706' }} />
                </div>
                <h3 className="font-display text-xl font-bold mb-3" style={{ color: '#1c1917' }}>{s.title}</h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: '#78716c' }}>{s.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all" style={{ color: '#d97706' }}>
                  Learn More <ArrowRight size={14} />
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ── WHY CHOOSE US ── */
function WhyUs() {
  return (
    <section className="py-28" style={{ backgroundColor: '#1c1917' }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
          <motion.div variants={fadeUp} className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.3em] uppercase" style={{ color: '#d97706' }}>Why Ruach</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3" style={{ color: '#fafaf9' }}>Built on Trust &amp; Craft</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {WHY.map((w) => (
              <motion.div key={w.title} variants={fadeUp} className="text-center p-8 rounded-2xl border" style={{ borderColor: 'rgba(250,250,249,0.08)', backgroundColor: 'rgba(250,250,249,0.03)' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: 'rgba(217,119,6,0.15)' }}>
                  <w.icon size={28} style={{ color: '#d97706' }} />
                </div>
                <h3 className="font-display text-xl font-bold mb-4" style={{ color: '#fafaf9' }}>{w.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(250,250,249,0.55)' }}>{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ── GALLERY ── */
function Gallery() {
  return (
    <section id="gallery" className="py-28 bg-[#f5f0eb]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
          <motion.div variants={fadeUp} className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.3em] uppercase" style={{ color: '#d97706' }}>Our Work</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3" style={{ color: '#1c1917' }}>Recent Projects</h2>
            <p className="mt-4 max-w-lg mx-auto" style={{ color: '#78716c' }}>Every project is unique. Here are some of our recent transformations.</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {GALLERY.map((g, i) => (
              <motion.div key={g.label} variants={fadeUp}
                className={`rounded-2xl overflow-hidden relative group cursor-pointer ${i === 0 || i === 3 ? 'row-span-2' : ''}`}
                style={{ minHeight: i === 0 || i === 3 ? '400px' : '200px', background: g.dark ? 'linear-gradient(135deg, #44403c, #292524)' : 'linear-gradient(135deg, #e7e5e4, #d6d3d1)' }}>
                <div className="absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(to top, rgba(28,25,23,0.85) 0%, transparent 60%)' }}>
                  <span className="text-sm font-semibold" style={{ color: '#fafaf9' }}>{g.label}</span>
                </div>
                {/* Placeholder texture */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 11px)' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                  <span className="text-xs font-medium opacity-40" style={{ color: g.dark ? '#fafaf9' : '#1c1917' }}>{g.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ── TESTIMONIALS ── */
function Testimonials() {
  return (
    <section id="testimonials" className="py-28 bg-[#fafaf9]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
          <motion.div variants={fadeUp} className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.3em] uppercase" style={{ color: '#d97706' }}>Client Stories</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3" style={{ color: '#1c1917' }}>What Our Clients Say</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <motion.div key={t.name} variants={fadeUp} className="bg-white rounded-2xl p-8 border border-stone-100 shadow-sm">
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} size={16} fill="#d97706" style={{ color: '#d97706' }} />
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-6 italic" style={{ color: '#44403c' }}>&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="font-semibold text-sm" style={{ color: '#1c1917' }}>{t.name}</p>
                  <p className="text-xs mt-0.5 flex items-center gap-1" style={{ color: '#78716c' }}>
                    <MapPin size={11} /> {t.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ── ABOUT ── */
function About() {
  return (
    <section id="about" className="py-28" style={{ backgroundColor: '#f5f0eb' }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}
          className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div variants={fadeUp}>
            <div className="rounded-2xl overflow-hidden relative" style={{ minHeight: '480px', background: 'linear-gradient(135deg, #44403c 0%, #292524 100%)' }}>
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 15px, rgba(255,255,255,0.05) 15px, rgba(255,255,255,0.05) 16px)' }} />
              <div className="absolute bottom-8 left-8">
                <div className="bg-[#d97706] text-white rounded-xl px-6 py-4 inline-block">
                  <p className="font-display text-3xl font-bold">20+</p>
                  <p className="text-sm font-medium opacity-90">Years of Excellence</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div variants={fadeUp}>
            <span className="text-xs font-semibold tracking-[0.3em] uppercase" style={{ color: '#d97706' }}>Our Story</span>
            <h2 className="font-display text-4xl font-bold mt-3 mb-6" style={{ color: '#1c1917' }}>Craftsmanship Brought to America</h2>
            <div className="space-y-4 text-sm leading-relaxed" style={{ color: '#44403c' }}>
              <p>Ruach Renovations USA brings the same standard of excellence that has defined the Ruach name in Europe for over two decades. We believe your home should be more than a house — it should be a reflection of who you are.</p>
              <p>Our team of experienced tradespeople manages every aspect of your renovation under one roof. From the initial design consultation through to the final finishing touches, we take pride in delivering work that stands the test of time.</p>
              <p>Using only the highest quality materials and proven techniques, we transform kitchens, bathrooms, and entire homes — all while keeping you informed and involved every step of the way.</p>
            </div>
            <div className="mt-8 flex items-center gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-colors hover:bg-amber-600"
                style={{ backgroundColor: '#d97706' }}>
                Start Your Project <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* ── CONTACT ── */
function Contact() {
  return (
    <section id="contact" className="py-28" style={{ backgroundColor: '#1c1917' }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
          <motion.div variants={fadeUp} className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.3em] uppercase" style={{ color: '#d97706' }}>Get Started</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3" style={{ color: '#fafaf9' }}>
              Ready to Transform<br />Your Home?
            </h2>
            <p className="mt-4 max-w-lg mx-auto" style={{ color: 'rgba(250,250,249,0.55)' }}>Request your free, no-obligation consultation today. We&apos;ll come to you, assess your space, and walk you through the possibilities.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            {/* Contact info */}
            <motion.div variants={fadeUp} className="space-y-6">
              {[
                { icon: Phone, label: 'Call Us', value: '(555) 000-0000' },
                { icon: Mail, label: 'Email Us', value: 'hello@ruachrenovations.com' },
                { icon: MapPin, label: 'Service Area', value: '[City, State] — Placeholder' },
              ].map(item => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(217,119,6,0.15)' }}>
                    <item.icon size={20} style={{ color: '#d97706' }} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'rgba(250,250,249,0.4)' }}>{item.label}</p>
                    <p className="font-medium" style={{ color: '#fafaf9' }}>{item.value}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Form */}
            <motion.form variants={fadeUp} className="space-y-4" onSubmit={e => e.preventDefault()}>
              {[
                { id: 'name', label: 'Full Name', type: 'text', placeholder: 'John Smith' },
                { id: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com' },
                { id: 'phone', label: 'Phone Number', type: 'tel', placeholder: '(555) 000-0000' },
              ].map(f => (
                <div key={f.id}>
                  <label htmlFor={f.id} className="block text-xs font-semibold mb-2" style={{ color: 'rgba(250,250,249,0.5)' }}>{f.label}</label>
                  <input id={f.id} type={f.type} placeholder={f.placeholder}
                    className="w-full px-4 py-3 rounded-xl text-sm transition-colors"
                    style={{ backgroundColor: 'rgba(250,250,249,0.06)', border: '1px solid rgba(250,250,249,0.12)', color: '#fafaf9' }}
                    onFocus={e => (e.target.style.borderColor = '#d97706')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(250,250,249,0.12)')} />
                </div>
              ))}
              <div>
                <label htmlFor="message" className="block text-xs font-semibold mb-2" style={{ color: 'rgba(250,250,249,0.5)' }}>Tell Us About Your Project</label>
                <textarea id="message" rows={4} placeholder="Describe your renovation project..."
                  className="w-full px-4 py-3 rounded-xl text-sm resize-none transition-colors"
                  style={{ backgroundColor: 'rgba(250,250,249,0.06)', border: '1px solid rgba(250,250,249,0.12)', color: '#fafaf9' }}
                  onFocus={e => (e.target.style.borderColor = '#d97706')}
                  onBlur={e => (e.target.style.borderColor = 'rgba(250,250,249,0.12)')} />
              </div>
              <button type="submit" className="w-full py-4 rounded-xl font-semibold text-white transition-colors hover:bg-amber-600"
                style={{ backgroundColor: '#d97706' }}>
                Request Free Consultation
              </button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ── FOOTER ── */
function Footer() {
  return (
    <footer style={{ backgroundColor: '#0c0a09', borderTop: '1px solid rgba(250,250,249,0.06)' }} className="py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display text-lg font-bold" style={{ color: '#fafaf9' }}>
          Ruach <span style={{ color: '#d97706' }}>Renovations</span>
        </span>
        <p className="text-xs" style={{ color: 'rgba(250,250,249,0.35)' }}>© 2026 Ruach Renovations USA. All rights reserved.</p>
        <div className="flex gap-6">
          {NAV.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-xs hover:text-white transition-colors" style={{ color: 'rgba(250,250,249,0.35)' }}>{link}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}

/* ── PAGE ── */
export default function RuachPage() {
  return (
    <>
      {/* Preview watermark — remove before final client delivery */}
      <div className="preview-watermark">PREVIEW ONLY</div>
      <Nav />
      <Hero />
      <Services />
      <WhyUs />
      <Gallery />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </>
  )
}
