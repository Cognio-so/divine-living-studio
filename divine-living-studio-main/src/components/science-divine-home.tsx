import { useState, type ComponentType } from "react";
import {
  ArrowRight,
  ArrowUp,
  BookOpen,
  Brain,
  CalendarDays,
  CheckCircle,
  ChevronDown,
  ClipboardList,
  Clock,
  ExternalLink,
  Eye,
  Facebook,
  Heart,
  Instagram,
  Linkedin,
  MapPin,
  Menu,
  Mail,
  MessageCircle,
  Phone,
  Play,
  Search,
  Send,
  Sparkles,
  Sun,
  UserRound,
  Users,
  X,
  Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export type IconType = ComponentType<{ className?: string; strokeWidth?: number }>;

export const navigation = [
  { label: "About", href: "/#about", dropdown: true },
  { label: "Teachings", href: "/#teachings", dropdown: true },
  { label: "Programs", href: "/#programs", dropdown: true },
  { label: "Events", href: "/events" },
  { label: "Resources", href: "/#resources", dropdown: true },
  { label: "Media", href: "/#media", dropdown: true },
  { label: "Contact", href: "/#contact" },
];

const journeyItems: { title: string; subtitle: string; icon: IconType }[] = [
  { title: "Awareness", subtitle: "Sakshi Bhav", icon: Eye },
  { title: "Wisdom", subtitle: "Bhagavad Gita", icon: BookOpen },
  { title: "Practice", subtitle: "Sakshi Sadhna", icon: UserRound },
  { title: "Purpose", subtitle: "Conscious Living", icon: Sun },
  { title: "Seva", subtitle: "Serving Humanity", icon: Heart },
];

const programs: { title: string; subtitle: string; image: string; icon: IconType }[] = [
  { title: "Sakshi Sadhna", subtitle: "Meditation & Awareness", image: "/images/program-sadhna.jpg", icon: UserRound },
  { title: "Living the Gita", subtitle: "From Knowledge to Life", image: "/images/program-gita.jpg", icon: BookOpen },
  { title: "Seva", subtitle: "Transforming Lives Together", image: "/images/program-seva.jpg", icon: Sun },
];

const stats = [
  ["50+", "Seva Initiatives"],
  ["1M+", "Lives Touched"],
  ["500+", "Events Conducted"],
  ["25+", "Countries Reached"],
];

const topics: { label: string; icon: IconType }[] = [
  { label: "Bhagavad Gita", icon: BookOpen },
  { label: "Meditation", icon: UserRound },
  { label: "Sakshi Bhav", icon: Eye },
  { label: "Consciousness", icon: Brain },
  { label: "Self Awareness", icon: Sparkles },
  { label: "Purpose of Life", icon: Sun },
  { label: "Relationships", icon: Heart },
  { label: "Spirituality", icon: Users },
];

const articles = [
  { category: "Meditation", title: "Why Meditation Isn’t Working for You?", date: "Aug 10, 2026", image: "/images/article-meditation.jpg" },
  { category: "Bhagavad Gita", title: "Life Lessons from Bhagavad Gita for 21st Century", date: "Aug 05, 2026", image: "/images/article-gita.jpg" },
  { category: "Life & Purpose", title: "The Key to Inner Freedom", date: "Jul 29, 2026", image: "/images/article-purpose.jpg" },
];

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <a href="/" className="flex shrink-0 items-center" aria-label="Science Divine home">
      <img
        src="/brand/sd-logo.png"
        alt="Science Divine"
        width={160}
        height={60}
        className={`h-12 w-auto object-contain ${light ? "brightness-0 invert" : ""}`}
      />
    </a>
  );
}


export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 h-[76px] border-b border-border/60 bg-background/95 shadow-nav backdrop-blur">
      <div className="site-container grid h-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 lg:flex">
        <Brand />
        <nav className="ml-auto hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.label} href={item.href} className="group flex items-center gap-1 text-xs font-medium text-primary transition-colors hover:text-gold">
              {item.label}{item.dropdown && <ChevronDown className="size-3" strokeWidth={1.5} />}
            </a>
          ))}
        </nav>
        <div className="ml-2 flex shrink-0 items-center gap-2">
          <Button asChild className="h-9 rounded-full bg-primary px-4 text-xs text-primary-foreground shadow-none hover:-translate-y-px hover:bg-primary/90">
            <a href="/#journey"><Heart className="size-3.5 text-gold" /> Donate</a>
          </Button>
          <Button variant="ghost" size="icon" className="hidden rounded-full text-primary lg:inline-flex" aria-label="Search"><Search /></Button>
          <Button variant="ghost" size="icon" className="rounded-full text-primary lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</Button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-border bg-background px-5 py-4 shadow-card lg:hidden" aria-label="Mobile navigation">
          <div className="grid grid-cols-2 gap-1">
            {navigation.map((item) => <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-sm text-primary hover:bg-cream">{item.label}</a>)}
          </div>
        </nav>
      )}
    </header>
  );
}

function Eyebrow({ children }: { children: string }) {
  return <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">{children}</p>;
}

function SectionTitle({ eyebrow, children, align = "center" }: { eyebrow: string; children: string; align?: "left" | "center" }) {
  return <div className={align === "center" ? "text-center" : "text-left"}><Eyebrow>{eyebrow}</Eyebrow><h2 className="font-display text-[34px] font-semibold leading-[1.05] text-heading md:text-[46px]">{children}</h2></div>;
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[600px] overflow-hidden md:min-h-[640px] lg:min-h-[680px]">
      {/* Sunrise hills background */}
      <img
        src="/images/hero-sunrise-hills.png"
        alt="Sunrise over peaceful green hills"
        width={2048}
        height={768}
        className="absolute inset-0 size-full object-cover object-center"
        fetchPriority="high"
      />
      {/* Cream gradient overlay — strong on left, fades right */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,252,245,0.97)_0%,rgba(255,252,245,0.90)_32%,rgba(255,252,245,0.55)_54%,rgba(255,252,245,0.0)_72%)]" />

      {/* Floating right action sidebar */}
      <div className="absolute right-4 top-1/2 z-30 hidden -translate-y-1/2 flex-col overflow-hidden rounded-[20px] border border-white/80 bg-white/95 shadow-[0_14px_28px_rgba(47,39,23,0.16)] lg:flex">
        {[
          { icon: CalendarDays, label: "Attend\nLive Event", href: "#events" },
          { icon: ClipboardList, label: "Book\nSession", href: "#programs" },
          { icon: Mail, label: "Ask\nQuestion", href: "#contact" },
          { icon: MessageCircle, label: "WhatsApp\nConnect", href: "#contact" },
        ].map((item, i) => {
          const Icon = item.icon;
          return (
            <a
              key={i}
              href={item.href}
              className="group flex w-[100px] flex-col items-center gap-2 border-b border-primary/10 px-3 py-4 text-center transition-colors last:border-0 hover:bg-cream"
            >
              <Icon className="size-5 text-primary transition-colors group-hover:text-gold-dark" strokeWidth={1.55} />
              <span className="whitespace-pre-line text-[10px] font-semibold leading-tight text-primary">{item.label}</span>
            </a>
          );
        })}
      </div>

      <div className="site-container relative flex min-h-[600px] items-center md:min-h-[640px] lg:min-h-[680px]">
        {/* ── Left text column ── */}
        <div className="relative z-20 max-w-[680px] py-10 sm:py-12 lg:py-16">

          {/* Sadguru name block — lotus icon + name + title + signature */}
          <div className="mb-6">
            {/* Lotus SVG icon */}
            <svg viewBox="0 0 48 40" className="mb-2.5 h-9 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 38 C24 38 8 28 8 16 C8 10 13 6 18 8 C20 9 22 11 24 14 C26 11 28 9 30 8 C35 6 40 10 40 16 C40 28 24 38 24 38Z" fill="#C4933F" opacity="0.85"/>
              <path d="M24 38 C24 38 14 26 14 18 C14 13 18 10 21 12 C22.5 13 23.5 15 24 18 C24.5 15 25.5 13 27 12 C30 10 34 13 34 18 C34 26 24 38 24 38Z" fill="#D5AB54"/>
              <path d="M24 38 C24 38 18 28 18 21 C18 17 21 15 23 17 C23.5 18 24 20 24 23 C24 20 24.5 18 25 17 C27 15 30 17 30 21 C30 28 24 38 24 38Z" fill="#f5e4b5"/>
              <path d="M24 15 L24 38" stroke="#C4933F" strokeWidth="0.8" opacity="0.4"/>
            </svg>
            <p className="font-display text-[21px] font-semibold tracking-wide text-primary">Sadguru Sakshi Shree</p>
            <p className="mt-1 text-[13px] text-body/75">Founder, Science Divine Foundation</p>
            <img
              src="/images/sakshi-shree-signature-handwritten.png"
              alt="Sadguru Sakshi Shree's signature"
              width={420}
              height={140}
              loading="eager"
              className="mt-1.5 h-9 w-auto object-contain object-left mix-blend-multiply"
            />
            {/* Gold thin rule */}
            <div className="mt-3 h-px w-52 bg-gradient-to-r from-gold/70 to-transparent" />
          </div>

          {/* Main headline — 2 lines, each on its own line */}
          <h1 className="font-display text-[38px] font-semibold leading-[1.1] tracking-[-0.015em] sm:text-[48px] md:text-[56px] lg:text-[62px] xl:text-[66px]">
            <span className="block text-primary xl:whitespace-nowrap">Awaken the Divine Within,</span>
            <span className="block text-gold-dark xl:whitespace-nowrap">Transform the World Around.</span>
          </h1>

          {/* Sub-heading */}
          <p className="mt-3 font-display text-[17px] font-normal text-body sm:text-[19px]">
            The Science of Awareness for a Conscious Life.
          </p>

          {/* Description */}
          <p className="mt-2 max-w-[420px] text-[14px] leading-6 text-body">
            Science Divine is a non-profit organisation dedicated to spreading the timeless wisdom of Awareness (Sakshi Bhav) and Bhagavad Gita for a better, conscious &amp; compassionate world.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-wrap gap-3">
            <Button
              asChild
              className="h-11 rounded-lg bg-primary px-6 text-[12px] font-semibold uppercase tracking-widest text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:bg-primary/90"
            >
              <a href="#teachings">
                Explore the Teachings <ArrowRight className="ml-1.5 size-3.5 text-gold" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-11 rounded-lg border border-border bg-white/85 px-6 text-[12px] font-semibold uppercase tracking-widest text-primary shadow-sm hover:-translate-y-0.5 hover:bg-white"
            >
              <a href="#events">
                Join an Experience <CalendarDays className="ml-1.5 size-3.5 text-gold-dark" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* ── Armchair / Sofa SVG — light gray modern chair matching reference ── */}
      <svg
        viewBox="0 0 560 280"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-[2%] z-[9] hidden w-[44%] max-w-[600px] lg:block xl:right-[5%]"
      >
        {/* Chair seat */}
        <rect x="80" y="155" width="400" height="80" rx="22" ry="22" fill="#e8e0d4"/>
        <rect x="88" y="158" width="384" height="74" rx="18" ry="18" fill="#f0ebe2"/>
        {/* Chair backrest */}
        <rect x="80" y="68" width="400" height="100" rx="22" ry="22" fill="#e4ddd4"/>
        <rect x="88" y="72" width="384" height="90" rx="18" ry="18" fill="#ede7de"/>
        {/* Left armrest */}
        <rect x="52" y="108" width="72" height="127" rx="18" ry="18" fill="#ddd6cc"/>
        <rect x="57" y="112" width="62" height="120" rx="14" ry="14" fill="#e6e0d6"/>
        {/* Right armrest */}
        <rect x="436" y="108" width="72" height="127" rx="18" ry="18" fill="#ddd6cc"/>
        <rect x="441" y="112" width="62" height="120" rx="14" ry="14" fill="#e6e0d6"/>
        {/* Seat front edge highlight */}
        <rect x="80" y="226" width="400" height="9" rx="4" fill="#d9d2c8"/>
        {/* Legs */}
        <rect x="108" y="230" width="18" height="46" rx="5" fill="#c8bfb2" stroke="#b8b0a4" strokeWidth="0.8"/>
        <rect x="434" y="230" width="18" height="46" rx="5" fill="#c8bfb2" stroke="#b8b0a4" strokeWidth="0.8"/>
        {/* Subtle backrest seam */}
        <line x1="280" y1="74" x2="280" y2="160" stroke="#d8d1c8" strokeWidth="1" opacity="0.6"/>
        {/* Subtle seat seam */}
        <line x1="280" y1="160" x2="280" y2="228" stroke="#d8d1c8" strokeWidth="1" opacity="0.6"/>
      </svg>

      {/* Guruji image — seated on the armchair */}
      <img
        src="/images/hero-sofa-guruji.png"
        alt="Sadguru Sakshi Shree"
        width={1205}
        height={1306}
        loading="eager"
        fetchPriority="high"
        className="pointer-events-none absolute bottom-0 right-[1%] z-10 hidden h-[96%] w-auto max-w-[46%] object-contain object-bottom lg:block xl:right-[4%]"
        style={{ filter: "drop-shadow(0 2px 16px rgba(47,39,23,0.10))" }}
      />
    </section>
  );
}

function PhilosophyQuote() {
  return (
    <section className="bg-ivory py-10 md:py-0">
      <div className="site-container grid min-h-[154px] items-center gap-8 md:grid-cols-[150px_1fr_0.8fr]">
        <div className="flex justify-center text-gold">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-16 sm:size-20" aria-label="Sacred Om Emblem">
            <defs>
              <linearGradient id="goldOmGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F5E4B5" />
                <stop offset="50%" stopColor="#D5AB54" />
                <stop offset="100%" stopColor="#9B7527" />
              </linearGradient>
              <linearGradient id="goldRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E6C875" />
                <stop offset="100%" stopColor="#B38A36" />
              </linearGradient>
            </defs>

            {/* Subtle glowing backdrop */}
            <circle cx="50" cy="50" r="44" fill="#FDFBF7" stroke="url(#goldRingGrad)" strokeWidth="1" opacity="0.8" />
            <circle cx="50" cy="50" r="41" fill="none" stroke="#D5AB54" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6" />

            {/* Sacred 8-Pointed Rays */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
              <g key={angle} transform={`rotate(${angle} 50 50)`}>
                <circle cx="50" cy="11" r="1.5" fill="#C4933F" />
                <path d="M50 14 L50 17" stroke="#D5AB54" strokeWidth="1" strokeLinecap="round" />
              </g>
            ))}

            {/* Lotus Petal Base */}
            <path d="M30 70 Q50 84 70 70 Q50 77 30 70 Z" fill="url(#goldOmGrad)" opacity="0.9" />
            <path d="M38 68 Q50 78 62 68 Q50 73 38 68 Z" fill="#FFFDF8" />

            {/* Beautiful Sacred Om Symbol Path */}
            <path
              d="M38 35 C35 31 28 31 25 36 C22 41 25 47 30 48 C24 50 20 57 23 64 C27 71 37 71 43 65 C46 62 47 57 45 53 C43 49 38 49 35 52 C32 55 36 59 40 58 C37 64 29 64 26 60 C23 56 26 51 31 50 C37 49 40 45 38 39 C37 35 32 35 30 37 C28 39 31 42 33 41"
              fill="url(#goldOmGrad)"
            />
            <path
              d="M41 47 C45 45 51 46 54 50 C58 55 58 64 67 65 C70 65 73 64 75 62 Q73 67 66 67 C57 67 53 59 50 54 C47 50 43 48 41 47 Z"
              fill="url(#goldOmGrad)"
            />
            <path d="M42 31 Q54 27 64 34 Q54 31 42 31 Z" fill="url(#goldOmGrad)" />
            <circle cx="53" cy="25" r="3.2" fill="url(#goldOmGrad)" />
          </svg>
        </div>
        <blockquote className="border-y border-gold/35 py-7 font-display text-[28px] leading-[1.1] text-heading md:border-x md:border-y-0 md:px-11 md:text-[32px]">You don’t need another belief.<br /><em className="text-gold-dark">You need a deeper awareness.</em></blockquote>
        <p className="max-w-[330px] text-xs leading-5 text-body">Awareness brings clarity, peace and purpose. It helps you live in harmony with yourself, your relationships and the world around you.</p>
      </div>
    </section>
  );
}

const journeySvgIcons = [
  // Awareness - Eye with rays
  <svg key="awareness" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-11">
    <ellipse cx="32" cy="36" rx="14" ry="9" stroke="#6D140E" strokeWidth="2" fill="none"/>
    <circle cx="32" cy="36" r="4.5" fill="#6D140E"/>
    <circle cx="32" cy="36" r="2" fill="#C4933F"/>
    <path d="M32 12v5M32 55v-5M12 36H7M57 36h-5M17.5 21.5l-3.5-3.5M49.5 21.5l3.5-3.5M17.5 50.5l-3.5 3.5M49.5 50.5l3.5 3.5" stroke="#D5AB54" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>,
  // Wisdom - Open Book with lotus
  <svg key="wisdom" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-11">
    <path d="M8 16 C8 16 20 14 32 20 C44 14 56 16 56 16 L56 48 C56 48 44 46 32 52 C20 46 8 48 8 48 Z" stroke="#6D140E" strokeWidth="2" fill="#FAF4E8"/>
    <line x1="32" y1="20" x2="32" y2="52" stroke="#6D140E" strokeWidth="1.5"/>
    <path d="M32 13 C32 13 28 10 28 7 C28 5 30 4 32 6 C34 4 36 5 36 7 C36 10 32 13 32 13Z" fill="#D5AB54"/>
    <path d="M27 10 C25 8 22 9 22 11 C22 14 27 13 32 13" fill="#D5AB54" opacity="0.7"/>
    <path d="M37 10 C39 8 42 9 42 11 C42 14 37 13 32 13" fill="#D5AB54" opacity="0.7"/>
  </svg>,
  // Practice - Meditating person with aura
  <svg key="practice" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-11">
    <circle cx="32" cy="14" r="5" fill="#6D140E"/>
    <path d="M32 19 L32 34" stroke="#6D140E" strokeWidth="2" strokeLinecap="round"/>
    <path d="M18 28 Q25 22 32 26 Q39 22 46 28" stroke="#6D140E" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <path d="M22 34 Q27 42 32 44 Q37 42 42 34" stroke="#6D140E" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <circle cx="32" cy="32" r="18" stroke="#D5AB54" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.6"/>
    <circle cx="32" cy="32" r="12" stroke="#D5AB54" strokeWidth="0.8" opacity="0.4"/>
  </svg>,
  // Purpose - Sunrise over hills
  <svg key="purpose" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-11">
    <path d="M8 44 Q20 34 32 38 Q44 34 56 44" stroke="#6D140E" strokeWidth="2" fill="#FAF4E8"/>
    <path d="M8 50 Q20 42 32 46 Q44 42 56 50" stroke="#6D140E" strokeWidth="1.5" fill="#F5EDE0" opacity="0.6"/>
    <path d="M18 38 A14 14 0 0 1 46 38" stroke="#D5AB54" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    <circle cx="32" cy="38" r="6" fill="#D5AB54"/>
    <path d="M32 18v-5M20 22l-4-3M44 22l4-3M14 34h-5M55 34h-5" stroke="#D5AB54" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>,
  // Seva - Hands holding heart
  <svg key="seva" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-11">
    <path d="M20 44 L12 36 C10 34 10 30 13 28 C16 26 19 28 20 30 L20 26 C20 23 22 21 25 21 C26 21 27 22 28 23 C28 21 30 20 32 20 C34 20 36 21 36 23 C37 22 38 21 39 21 C42 21 44 23 44 26 L44 30 C45 28 48 26 51 28 C54 30 54 34 52 36 L44 44 L32 54 Z" fill="#FAF4E8" stroke="#6D140E" strokeWidth="1.8" strokeLinejoin="round"/>
    <path d="M32 32 C32 32 27 28 27 25 C27 23 29 22 31 24 C31.5 24.5 32 25 32 25 C32 25 32.5 24.5 33 24 C35 22 37 23 37 25 C37 28 32 32 32 32Z" fill="#D5AB54"/>
  </svg>,
];

function InnerJourney() {
  const items = [
    { title: "Awareness", subtitle: "Sakshi Bhav" },
    { title: "Wisdom", subtitle: "Bhagavad Gita" },
    { title: "Practice", subtitle: "Sakshi Sadhna" },
    { title: "Purpose", subtitle: "Conscious Living" },
    { title: "Seva", subtitle: "Serving Humanity" },
  ];
  return (
    <section id="teachings" className="relative overflow-hidden py-12 md:py-16 bg-[#fdf8f0]">
      {/* Background misty mountain image */}
      <img
        src="/images/hero-sunrise-hills.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 size-full object-cover object-center opacity-30"
      />
      {/* Soft warm gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fdf8f0]/90 via-[#fdf8f0]/80 to-[#fdf8f0]/95" />

      {/* Subtle sacred mandala decoration */}
      <div className="pointer-events-none absolute -left-24 -top-24 size-80 rounded-full opacity-[0.10]" style={{background: "radial-gradient(circle, #D5AB54 0%, transparent 70%)",}} />
      <div className="pointer-events-none absolute -bottom-24 -right-24 size-80 rounded-full opacity-[0.10]" style={{background: "radial-gradient(circle, #D5AB54 0%, transparent 70%)",}} />

      <div className="site-container relative z-10">
        <SectionTitle eyebrow="Explore Your">Inner Journey</SectionTitle>
        <div className="mt-10 grid grid-cols-2 gap-y-10 sm:grid-cols-3 md:grid-cols-5">
          {items.map((item, i) => (
            <div key={item.title} className="group text-center">
              <div className="relative mx-auto size-28 transition-transform duration-300 group-hover:-translate-y-2">
                {/* Golden gradient ring */}
                <div className="absolute inset-0 rounded-full" style={{background: "linear-gradient(135deg, #D5AB54, #f0d080, #b8860b, #D5AB54)", padding: "3px"}}>
                  <div className="flex size-full items-center justify-center rounded-full" style={{background: "linear-gradient(145deg, #ffffff, #faf6ee)"}}>
                    {journeySvgIcons[i]}
                  </div>
                </div>
              </div>
              <h3 className="mt-5 font-display text-[22px] font-semibold text-primary">{item.title}</h3>
              <p className="mt-1 text-xs font-medium text-gold-dark">{item.subtitle}</p>
              <ArrowRight className="mx-auto mt-3 size-3.5 transition-transform group-hover:translate-x-1 text-gold-dark" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutScienceDivine() {
  const pillars = [
    {
      title: "Sound Body",
      desc: "Physical vitality through yoga, breath, and conscious movement.",
      image: "/images/about-sound-body.jpg",
    },
    {
      title: "Sound Mind",
      desc: "Mental clarity through meditation and mindfulness practice.",
      image: "/images/about-sound-mind.jpg",
    },
    {
      title: "Self Realization",
      desc: "Spiritual awakening under Sakshi Shree's direct guidance.",
      image: "/images/about-self-realization.jpg",
    },
  ];

  return (
    <section id="about" className="relative overflow-hidden">
      {/* ── Top two-column hero ── */}
      <div className="relative bg-ivory py-4 md:py-0">
        {/* Temple sunrise background */}
        <img src="/images/about-section-bg.png" alt="" aria-hidden="true" className="absolute inset-0 size-full object-cover object-center" />
        
        <div className="site-container relative z-10 grid items-center gap-6 md:grid-cols-12 md:min-h-[420px]">
          {/* Left: text */}
          <div className="py-6 sm:py-8 md:col-span-7 md:py-10">
            <Eyebrow>About Science Divine</Eyebrow>
            <h2 className="font-display text-[34px] font-semibold leading-[1.05] text-heading sm:text-[42px] md:text-[46px] lg:text-[50px]">
              Science Divine Movement
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-body sm:text-[15px] sm:leading-6">
              The Science Divine Movement is a global initiative helping people realize their optimum potential through definite scientific techniques for sound body, sound mind, and self-realization. Founded by enlightened spiritual master Sakshi Shree, it simplifies spirituality to become an integral part of everyday life, freeing humanity from ideologies and belief systems that have divided us through the ages.
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-body sm:text-[15px] sm:leading-6">
              Our fundamental maxim is <em className="font-semibold text-gold-dark">"Bheetar se sanyaas, bahar se sansaar"</em> – total participation in worldly life while enjoying complete inner renunciation.
            </p>
            <a href="#journey" className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-primary transition-colors hover:text-gold">
              Know Sakshi Shree <ArrowRight className="size-3.5 text-gold-dark" />
            </a>
          </div>

          {/* Right: Sadguru image cutout — aligned to right side */}
          <div className="relative flex h-full min-h-[300px] items-end justify-end md:col-span-5 md:min-h-[420px]">
            <img
              src="/images/sakshi-shree-about-cutout.png"
              alt="Sadguru Sakshi Shree"
              width={1205}
              height={1306}
              loading="eager"
              className="h-[96%] w-auto max-h-[440px] object-contain object-right-bottom"
              style={{ filter: "drop-shadow(0 8px 32px rgba(47,39,23,0.18))" }}
            />
          </div>
        </div>
      </div>

      {/* ── Three Pillars Cards ── */}
      <div
        className="py-8 md:py-10"
        style={{ background: "linear-gradient(175deg, #fdf8f2 0%, #f5ede0 55%, #fdf6ee 100%)" }}
      >
        <div className="site-container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="group flex flex-col overflow-hidden rounded-[22px] border border-[#e8d9c4] bg-[#fffdf9] shadow-[0_4px_20px_rgba(109,20,14,0.06),0_1px_4px_rgba(109,20,14,0.04)] transition-shadow duration-300 hover:shadow-[0_10px_36px_rgba(109,20,14,0.11)]"
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="h-[260px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] md:h-[300px]"
                  />
                </div>

                {/* Gold divider under image */}
                <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#C4933F] to-transparent opacity-60" />

                {/* Text Content */}
                <div className="flex flex-1 flex-col items-center px-7 py-6 text-center">
                  <h3 className="font-display text-[26px] font-semibold leading-tight text-heading md:text-[30px]">
                    {pillar.title}
                  </h3>
                  {/* Small gold ornament */}
                  <div className="mt-3 flex items-center gap-2">
                    <div className="h-px w-8 bg-[#C4933F]/50" />
                    <svg viewBox="0 0 12 12" className="size-2.5 text-[#C4933F]" fill="currentColor">
                      <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5L6 0Z" />
                    </svg>
                    <div className="h-px w-8 bg-[#C4933F]/50" />
                  </div>
                  <p className="mt-4 max-w-[280px] text-[15px] leading-[1.7] text-body">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProgramCard({ program }: { program: (typeof programs)[number] }) {
  const Icon = program.icon;
  return <article className="group overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card"><div className="aspect-[1.8/1] overflow-hidden"><img src={program.image} alt="" width={1104} height={608} loading="lazy" className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" /></div><div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 p-5"><span className="grid size-9 place-items-center rounded-full bg-cream text-gold"><Icon className="size-4" strokeWidth={1.4} /></span><div className="min-w-0"><h3 className="font-display text-[22px] font-semibold text-heading">{program.title}</h3><p className="mt-1 text-xs text-muted-foreground">{program.subtitle}</p></div><ArrowRight className="size-3.5 text-gold transition-transform group-hover:translate-x-1" /></div></article>;
}

function Programs() {
  return <section id="programs" className="bg-background py-10 md:py-12"><div className="site-container"><SectionTitle eyebrow="Our Programs">Transform Through Practice</SectionTitle><div className="mt-9 grid gap-6 md:grid-cols-3">{programs.map((program) => <ProgramCard key={program.title} program={program} />)}</div><FeaturedVideo /></div></section>;
}

function FeaturedVideo() {
  return <div className="relative mt-10 min-h-[210px] overflow-hidden rounded-lg"><img src="/images/featured-video.jpg" alt="Meditator overlooking Himalayan mountains at sunset" width={1600} height={544} loading="lazy" className="absolute inset-0 size-full object-cover" /><div className="absolute inset-0 bg-video-overlay" /><Button size="icon" className="absolute left-1/2 top-1/2 size-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-background/90 text-primary shadow-card hover:bg-background" aria-label="Play featured video"><Play className="ml-0.5 fill-current" /></Button><div className="relative ml-auto flex min-h-[210px] w-full max-w-[78%] flex-col justify-center px-6 sm:max-w-[47%] sm:px-10"><p className="text-[10px] uppercase tracking-[0.15em] text-footer-muted">Featured Video</p><p className="mt-2 font-devanagari text-[25px] leading-snug text-primary-foreground sm:text-[31px]">गीता पढ़िए नहीं...<br /><span className="text-gold-light">गीता जीना सीखिए।</span></p></div></div>;
}

export const upcomingEventsData = [
  {
    title: "Satsang, Meditation & Problem Resolution",
    desc: "Are you carrying the weight of unanswered questions? Step away from the noise of daily life and into a space of profound clarity. Join Sakshi Shree for a transformative session of Satsang and Meditation designed to resolve your deepest life problems.",
    date: "5th April 2026",
    time: "10:00 AM",
    day: "05",
    month: "APR",
    year: "2026",
    location: "Siddha Sudarshan Sakshi Dhaam, 9, Avantika, Chiranjeev Vihar, Ghaziabad",
    status: "Available Now",
    image: "/images/retreat-vrindavan.jpg",
    link: "https://sciencedivine.org/sunday-event-5-april/",
    isCompleted: false,
  },
  {
    title: "Beyond Astrology : Meet Sakshi Shree",
    desc: "Feeling stuck or facing challenges? Sakshi Shree reads your past, present and future like an open book and without you speaking even a single word, he writes down the main problems of your life and provides powerful and effective remedies.",
    date: "3rd May 2026",
    time: "10:00 AM",
    day: "03",
    month: "MAY",
    year: "2026",
    location: "Siddha Sudarshan Sakshi Dhaam, 9, Avantika, Chiranjeev Vihar, Ghaziabad",
    status: "Available Now",
    image: "/images/sakshi-shree-about-new.webp",
    link: "https://sciencedivine.org/sunday-event-3-may/",
    isCompleted: false,
  },
  {
    title: "Holi Milan Samaroh - Special Satsang & Meditation Program",
    desc: "Experience the true essence of the festival through a special session of Satsang and deep Meditation. Immerse yourself in the colors of spirituality, receive Guruji’s blessings, and stay to enjoy the sacred Bhojan Prasad with the community.",
    date: "1st March 2026",
    time: "10:00 AM",
    day: "01",
    month: "MAR",
    year: "2026",
    location: "Siddha Sudarshan Sakshi Dhaam, 9, Avantika, Chiranjeev Vihar, Ghaziabad",
    status: "Completed",
    image: "/images/program-sadhna.jpg",
    link: "https://sciencedivine.org/sunday-event-1-march/",
    isCompleted: true,
  },
  {
    title: "Vasant Mahotsav",
    desc: "Step into the season of Vasant with renewed energy, inner peace, and spiritual awakening. In this sacred Vasant Mahotsav, Sakshi Shree will guide you through a profound experience of meditation, satsang, and divine blessings, helping you cleanse inner blockages and align with joy & clarity.",
    date: "1st February 2026",
    time: "09:00 AM",
    day: "01",
    month: "FEB",
    year: "2026",
    location: "Siddha Sudarshan Sakshi Dhaam, 9, Avantika, Chiranjeev Vihar, Ghaziabad",
    status: "Completed",
    image: "/images/hero-bg.jpg",
    link: "https://sciencedivine.org/sunday-event-1-february/",
    isCompleted: true,
  },
  {
    title: "Navvarsh Dhyan Mahotsav",
    desc: "Step into the New Year with clarity, peace, and divine guidance. In this special New Year Meditation Festival, Sakshi Shree will take you through a transformative journey of deep meditation, energy cleansing & intention setting for 2026.",
    date: "4th January 2026",
    time: "10:00 AM",
    day: "04",
    month: "JAN",
    year: "2026",
    location: "Siddha Sudarshan Sakshi Dhaam, 9, Avantika, Chiranjeev Vihar, Ghaziabad",
    status: "Completed",
    image: "/images/program-gita.jpg",
    link: "https://sciencedivine.org/sunday-event-4-january/",
    isCompleted: true,
  },
  {
    title: "Shiksha Sewa Sankalp Mahotsav",
    desc: "On the sacred occasion of Guruji’s birthday, we are blessed with an opportunity to attend a powerful session of Meditation, Pravachan & Divine Blessings with Sadguru Sakshi Shree.",
    date: "14th December 2025",
    time: "10:00 AM",
    day: "14",
    month: "DEC",
    year: "2025",
    location: "Siddha Sudarshan Sakshi Dhaam, 9, Avantika, Chiranjeev Vihar, Ghaziabad",
    status: "Completed",
    image: "/images/program-seva.jpg",
    link: "https://sciencedivine.org/birthday-event/",
    isCompleted: true,
  },
];

export const eventsGalleryData = [
  { title: "Science Divine Retreat - Vrindavan", subtitle: "Spiritual Immersive Camp", image: "/images/retreat-vrindavan.jpg" },
  { title: "Sakshi Darshan", subtitle: "Divine Presence & Satsang", image: "/images/sakshi-shree-about-new.webp" },
  { title: "Teach for Slum", subtitle: "Selfless Education Seva", image: "/images/program-seva.jpg" },
  { title: "Young Mind Movement", subtitle: "Youth Awakening Seminars", image: "/images/program-sadhna.jpg" },
  { title: "Teach Meditation for Kids", subtitle: "Children Inner Harmony", image: "/images/program-gita.jpg" },
  { title: "3 Days Shivir - Rishikesh", subtitle: "Young Mind Movement", image: "/images/featured-video.jpg" },
];

function Events() {
  const [filter, setFilter] = useState<"all" | "upcoming" | "completed">("all");

  const filteredEvents = upcomingEventsData.filter((ev) => {
    if (filter === "upcoming") return !ev.isCompleted;
    if (filter === "completed") return ev.isCompleted;
    return true;
  });

  return (
    <section id="events" className="relative overflow-hidden bg-[#faf5ee] py-16 md:py-24">
      {/* Background radial glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[900px] -translate-x-1/2"
        style={{
          background: "radial-gradient(ellipse at top center, rgba(226,177,85,0.18) 0%, rgba(250,245,238,0) 70%)",
        }}
      />

      <div className="site-container relative z-10">
        {/* Section Header */}
        <div className="text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#B58228]">
            FIND THE EVENTS FOR CONSCIOUS AWAKENING
          </p>
          <h2 className="mt-2 font-display text-[36px] font-semibold text-[#520F08] sm:text-[46px]">
            Upcoming Events
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#594C3E] sm:text-base">
            Join us at enriching events, where we seamlessly blend learning with inspiration, to foster growth and build lasting connections.
          </p>

          {/* Filter Tabs */}
          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#D5AB54]/30 bg-white/80 p-1.5 shadow-sm backdrop-blur">
            <button
              onClick={() => setFilter("all")}
              className={`rounded-full px-5 py-2 text-xs font-semibold transition-all ${
                filter === "all"
                  ? "bg-[#6D140E] text-white shadow-sm"
                  : "text-[#594C3E] hover:text-[#6D140E]"
              }`}
            >
              All Events ({upcomingEventsData.length})
            </button>
            <button
              onClick={() => setFilter("upcoming")}
              className={`rounded-full px-5 py-2 text-xs font-semibold transition-all ${
                filter === "upcoming"
                  ? "bg-[#6D140E] text-white shadow-sm"
                  : "text-[#594C3E] hover:text-[#6D140E]"
              }`}
            >
              Available Now (2)
            </button>
            <button
              onClick={() => setFilter("completed")}
              className={`rounded-full px-5 py-2 text-xs font-semibold transition-all ${
                filter === "completed"
                  ? "bg-[#6D140E] text-white shadow-sm"
                  : "text-[#594C3E] hover:text-[#6D140E]"
              }`}
            >
              Past Mahotsav ({upcomingEventsData.filter((e) => e.isCompleted).length})
            </button>
          </div>
        </div>

        {/* 6 Event Cards Grid */}
        <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((event) => (
            <article
              key={event.title}
              className="group flex flex-col overflow-hidden rounded-[22px] border border-[#E5D4BE] bg-white shadow-[0_4px_20px_rgba(109,20,14,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#C4933F] hover:shadow-[0_16px_36px_rgba(109,20,14,0.12)]"
            >
              {/* Event Image Banner */}
              <div className="relative h-52 w-full overflow-hidden bg-cream">
                <img
                  src={event.image}
                  alt={event.title}
                  width={600}
                  height={340}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />

                {/* Status Badge */}
                <div className="absolute left-4 top-4">
                  {event.isCompleted ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-black/65 px-3 py-1 text-[11px] font-semibold text-white/90 backdrop-blur-md border border-white/20">
                      <CheckCircle className="size-3 text-[#D5AB54]" /> Completed
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-700/90 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-md shadow-md border border-emerald-400/40 animate-pulse">
                      <span className="size-2 rounded-full bg-emerald-300" /> Available Now
                    </span>
                  )}
                </div>

                {/* Date & Time Overlay on Image */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs font-medium">
                  <span className="inline-flex items-center gap-1.5 drop-shadow">
                    <CalendarDays className="size-3.5 text-[#F5D280]" />
                    {event.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5 drop-shadow">
                    <Clock className="size-3.5 text-[#F5D280]" />
                    {event.time}
                  </span>
                </div>
              </div>

              {/* Event Content Details */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-[21px] font-semibold leading-snug text-[#520F08] transition-colors group-hover:text-[#B58228]">
                  {event.title}
                </h3>

                <p className="mt-3 flex-1 text-[13px] leading-relaxed text-[#594C3E] line-clamp-3">
                  {event.desc}
                </p>

                {/* Venue Address */}
                <div className="mt-5 border-t border-[#F0E4D0] pt-4">
                  <div className="flex items-start gap-2 text-xs text-[#736353]">
                    <MapPin className="size-4 shrink-0 text-[#C4933F] mt-0.5" />
                    <span className="line-clamp-2">{event.location}</span>
                  </div>
                </div>

                {/* CTA Action */}
                <div className="mt-5 pt-2">
                  {event.isCompleted ? (
                    <a
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#D5AB54]/50 bg-[#FAF4E8] py-2.5 text-xs font-semibold text-[#6D140E] transition-colors hover:bg-[#D5AB54]/20"
                    >
                      View Highlights <ExternalLink className="size-3.5 text-[#C4933F]" />
                    </a>
                  ) : (
                    <a
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#6D140E] to-[#911B13] py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:opacity-95 hover:shadow-lg"
                    >
                      Register Now <ArrowRight className="size-3.5 text-[#F5D280]" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ── Events Gallery Sub-Section ── */}
        <div className="mt-20 border-t border-[#E5D4BE]/60 pt-16">
          <div className="text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#B58228]">
              CAPTURED MOMENTS OF GRACE
            </p>
            <h3 className="mt-2 font-display text-[32px] font-semibold text-[#520F08] sm:text-[40px]">
              Events Gallery
            </h3>
            <p className="mx-auto mt-2 max-w-xl text-xs sm:text-sm text-[#6B5E4F]">
              Glimpses of sacred retreats, children's meditation sessions, youth movements, and life-transforming satsangs.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {eventsGalleryData.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-[20px] border border-[#E5D4BE] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={375}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                </div>
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-[#F5D280]">
                    {item.subtitle}
                  </p>
                  <h4 className="mt-1 font-display text-[18px] font-semibold leading-snug">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          {/* View Dedicated Events Page Button */}
          <div className="mt-14 text-center">
            <a
              href="/events"
              className="inline-flex items-center gap-2.5 rounded-full border-2 border-[#D5AB54] bg-[#6D140E] px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg transition-all hover:bg-[#831911] hover:scale-105"
            >
              <span>Explore Dedicated Events &amp; Registration Page</span>
              <ArrowRight className="size-4 text-[#F5D280]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImpactStats() {
  return (
    <section className="relative overflow-hidden py-14 bg-[#fcf7ee]">
      <img
        src="/images/impact-mountains.jpg"
        alt=""
        width={1920}
        height={512}
        loading="lazy"
        className="absolute inset-0 size-full object-cover opacity-35 object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#faf5eb]/90 via-[#fdf8f0]/80 to-[#faf5eb]/90" />
      <div className="site-container relative z-10">
        <div className="text-center">
          <h2 className="font-display text-[36px] font-semibold text-primary sm:text-[42px]">Our Impact</h2>
          <p className="mt-1.5 text-sm text-body/85 font-medium">A growing movement of awareness, peace and service.</p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-y-8 md:grid-cols-4">
          {stats.map(([number, label], index) => (
            <div key={label} className={`text-center px-4 ${index > 0 ? "md:border-l md:border-gold/30" : ""}`}>
              <strong className="block font-display text-[44px] font-semibold leading-none text-primary sm:text-[50px]">
                {number}
              </strong>
              <span className="mt-2 block text-xs sm:text-sm font-medium text-body/80">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Custom minimal line-art icon system (#C99435 gold line art style)
const GitaIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-6 text-[#FFFDF8]">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    <line x1="12" y1="6" x2="16" y2="6" />
    <line x1="12" y1="10" x2="16" y2="10" />
  </svg>
);

const MeditateIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-6 text-[#FFFDF8]">
    <circle cx="12" cy="6" r="2.5" />
    <path d="M12 9.5v5.5" />
    <path d="M6 14c1.5-2 3.5-3 6-3s4.5 1 6 3" />
    <path d="M4 19.5c2.5-2 5.5-2.5 8-2.5s5.5.5 8 2.5" />
  </svg>
);

const EyeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-6 text-[#FFFDF8]">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3.5" />
    <circle cx="12" cy="12" r="1" fill="currentColor" />
  </svg>
);

const ConsciousnessIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-6 text-[#FFFDF8]">
    <path d="M9.5 2A4.5 4.5 0 0 0 5 6.5C5 7.37 5.25 8.18 5.69 8.86A4.5 4.5 0 0 0 3 13c0 2.2 1.58 4.03 3.69 4.41A4.5 4.5 0 0 0 11 21.5V17" />
    <path d="M14.5 2A4.5 4.5 0 0 1 19 6.5c0 .87-.25 1.68-.69 2.36A4.5 4.5 0 0 1 21 13c0 2.2-1.58 4.03-3.69 4.41A4.5 4.5 0 0 1 13 21.5V17" />
    <path d="M12 4v13" strokeDasharray="1 1" />
  </svg>
);

const SelfAwarenessIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-6 text-[#FFFDF8]">
    <circle cx="12" cy="5" r="2.5" />
    <path d="M6 20v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3" />
    <polygon points="12,9.5 12.8,11.2 14.7,11.5 13.3,12.8 13.6,14.7 12,13.8 10.4,14.7 10.7,12.8 9.3,11.5 11.2,11.2" fill="currentColor" stroke="none" />
  </svg>
);

const PurposeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-6 text-[#FFFDF8]">
    <circle cx="12" cy="12" r="4" />
    <line x1="12" y1="2" x2="12" y2="4" />
    <line x1="12" y1="20" x2="12" y2="22" />
    <line x1="2" y1="12" x2="4" y2="12" />
    <line x1="20" y1="12" x2="22" y2="12" />
    <line x1="4.93" y1="4.93" x2="6.34" y2="6.34" />
    <line x1="17.66" y1="17.66" x2="19.07" y2="19.07" />
    <line x1="4.93" y1="19.07" x2="6.34" y2="17.66" />
    <line x1="17.66" y1="6.34" x2="19.07" y2="4.93" />
  </svg>
);

const RelationshipsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-6 text-[#FFFDF8]">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const SpiritualityIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-6 text-[#FFFDF8]">
    <circle cx="12" cy="7" r="2.5" />
    <path d="M6 20v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3" />
    <path d="M12 2v2" />
    <path d="M9 3.5l1.5 1" />
    <path d="M15 3.5l-1.5 1" />
  </svg>
);

const detailedTopics: { label: string; desc: string; icon: ComponentType }[] = [
  { label: "Bhagavad Gita", desc: "Timeless wisdom for modern life.", icon: GitaIcon },
  { label: "Meditation", desc: "Calm the mind, awaken the inner self.", icon: MeditateIcon },
  { label: "Sakshi Bhav", desc: "Observe. Understand. Transform.", icon: EyeIcon },
  { label: "Consciousness", desc: "Higher awareness, deeper living.", icon: ConsciousnessIcon },
  { label: "Self Awareness", desc: "Know yourself, live authentically.", icon: SelfAwarenessIcon },
  { label: "Purpose of Life", desc: "Find meaning, live with intention.", icon: PurposeIcon },
  { label: "Relationships", desc: "Build love, harmony and trust.", icon: RelationshipsIcon },
  { label: "Spirituality", desc: "Connect with the divine within.", icon: SpiritualityIcon },
];

function LivingTopics() {
  return (
    <section
      id="resources"
      className="relative overflow-hidden py-16 md:py-24"
      style={{
        background: "linear-gradient(180deg, #FAF4E8 0%, #FDF7ED 40%, #F8EED9 100%)",
      }}
    >


      <div className="site-container relative z-10 max-w-[1540px]">
        {/* Section Header */}
        <div className="text-center">
          <div className="mx-auto mb-2.5 flex items-center justify-center gap-3 text-[#C99435]">
            <div className="h-px w-14 bg-gradient-to-r from-transparent to-[#C99435]" />
            <svg viewBox="0 0 32 24" className="h-5.5 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 22C16 22 5 15 5 8C5 5 8 2.5 11 4C12.5 4.5 14 6 16 8C18 6 19.5 4.5 21 4C24 2.5 27 5 27 8C27 15 16 22 16 22Z" fill="#C99435" opacity="0.9"/>
              <path d="M16 22C16 22 9 15 9 10C9 7 11.5 5.5 13.5 6.5C14.5 7 15.2 8 16 10C16.8 8 17.5 7 18.5 6.5C20.5 5.5 23 7 23 10C23 15 16 22 16 22Z" fill="#F3D188"/>
            </svg>
            <div className="h-px w-14 bg-gradient-to-l from-transparent to-[#C99435]" />
          </div>
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#B58228]">
            — EXPLORE THE SCIENCE OF LIVING —
          </p>
          <h2 className="mt-1 font-display text-[36px] font-semibold text-[#661109] sm:text-[44px]">
            Explore the Science of Living
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-xs sm:text-sm font-medium leading-relaxed text-[#665E52]">
            Discover timeless wisdom, practical tools and transformative practices for a healthier, happier and more conscious life.
          </p>
        </div>

        {/* 8 Topic Cards matching exact reference layout */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {detailedTopics.map((topic) => {
            const IconComponent = topic.icon;
            return (
              <a
                key={topic.label}
                href="#resources"
                className="group relative flex items-center justify-between overflow-hidden rounded-[22px] border border-[#ECDCC8] bg-[#FFFDFA] p-5 shadow-[0_4px_20px_rgba(180,140,75,0.07)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#CDA143]/70 hover:shadow-[0_12px_32px_rgba(196,147,63,0.18)]"
              >
                {/* Left: Concentric Gold Icon Badge */}
                <div className="shrink-0 rounded-full p-1.5 bg-gradient-to-br from-white via-[#fcf6ea] to-[#f5e6ce] shadow-[0_2px_10px_rgba(201,148,53,0.18)] ring-1 ring-[#ecdcc5]">
                  <div className="flex size-13.5 items-center justify-center rounded-full bg-gradient-to-br from-[#E0B95C] via-[#CDA143] to-[#B38328] shadow-inner">
                    <IconComponent />
                  </div>
                </div>

                {/* Center Content: Title, Gold Accent Line & Description */}
                <div className="ml-4 flex-1 min-w-0 pr-2">
                  <h3 className="font-display text-[20px] sm:text-[21px] font-semibold text-[#661109] leading-tight transition-colors group-hover:text-[#B38328]">
                    {topic.label}
                  </h3>
                  <div className="mt-1.5 mb-1.5 h-[1.5px] w-8 bg-[#CDA143] transition-all duration-300 group-hover:w-12" />
                  <p className="text-[12px] sm:text-[12.5px] font-medium text-[#6B6255] leading-snug line-clamp-2">
                    {topic.desc}
                  </p>
                </div>

                {/* Far Right: Circular Gold Arrow Button */}
                <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#FCF5E7] text-[#CDA143] transition-all duration-300 group-hover:bg-[#CDA143] group-hover:text-white group-hover:translate-x-0.5 shadow-sm">
                  <ArrowRight className="size-3.5 stroke-[2.2]" />
                </div>

                {/* Faint gold lotus line-art watermark in bottom-right of each card */}
                <svg
                  viewBox="0 0 100 80"
                  className="pointer-events-none absolute -bottom-2 -right-2 size-24 text-[#C99435] opacity-[0.14] transition-opacity duration-300 group-hover:opacity-[0.22]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                >
                  <path d="M50 70 C50 70 20 50 20 30 C20 18 30 12 38 18 C43 21 47 26 50 32 C53 26 57 21 62 18 C70 12 80 18 80 30 C80 50 50 70 50 70 Z" />
                  <path d="M50 70 C50 70 32 46 32 34 C32 26 40 21 46 25 C50 28 50 32 50 32 C50 32 50 28 54 25 C60 21 68 26 68 34 C68 46 50 70 50 70 Z" />
                  <circle cx="50" cy="45" r="8" strokeDasharray="2 2" />
                </svg>
              </a>
            );
          })}
        </div>

        {/* Insights Section */}
        <Insights />
      </div>
    </section>
  );
}

function Insights() {
  return <div id="media" className="mt-16"><div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4"><h2 className="font-display text-[34px] font-semibold text-heading">Insights for Conscious Living</h2><a href="#media" className="mb-1 hidden items-center gap-1 text-xs font-semibold text-primary sm:flex">View All Articles <ArrowRight className="size-3" /></a></div><div className="mt-7 grid gap-6 md:grid-cols-3">{articles.map((article) => <article key={article.title} className="group overflow-hidden rounded-lg border border-border bg-card transition-all hover:-translate-y-0.5 hover:shadow-card"><div className="h-52 overflow-hidden"><img src={article.image} alt="" width={1104} height={608} loading="lazy" className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" /></div><div className="relative min-h-[148px] p-5"><p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gold-dark">{article.category}</p><h3 className="mt-2 max-w-[90%] font-display text-[22px] font-semibold leading-tight text-heading">{article.title}</h3><p className="absolute bottom-5 left-5 text-xs text-muted-foreground">{article.date}</p><ArrowRight className="absolute bottom-5 right-5 size-3.5 text-gold transition-transform group-hover:translate-x-1" /></div></article>)}</div></div>;
}

function JourneyCTA() {
  return <section id="journey" className="relative flex min-h-[250px] items-center overflow-hidden"><img src="/images/final-mountains.jpg" alt="Misty Himalayan mountain landscape" width={1920} height={520} loading="lazy" className="absolute inset-0 size-full object-cover" /><div className="absolute inset-0 bg-cta-overlay" /><div className="site-container relative text-center"><h2 className="font-display text-[38px] font-semibold text-heading md:text-[44px]">Begin Your Journey Within</h2><p className="mt-2 text-xs text-body">Awaken. Learn. Practice. Serve.</p><div className="mt-6 flex flex-wrap justify-center gap-3"><Button asChild className="rounded-full bg-primary px-6 text-xs text-primary-foreground shadow-none hover:-translate-y-px hover:bg-primary/90"><a href="#top">Join Science Divine <ArrowRight /></a></Button><Button asChild variant="outline" className="rounded-full border-border-strong bg-cream/65 px-6 text-xs text-primary shadow-none hover:-translate-y-px hover:bg-cream"><a href="#teachings">Explore the Teachings</a></Button></div></div></section>;
}

function WellnessSolutions() {
  const solutions = [
    {
      label: "Stress",
      href: "#teachings",
      icon: (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-9">
          <circle cx="32" cy="26" r="9" stroke="#D5AB54" strokeWidth="1.8" />
          <path d="M27 29 Q32 33 37 29" stroke="#D5AB54" strokeWidth="1.8" strokeLinecap="round" fill="none" />
          <circle cx="28.5" cy="25" r="1.5" fill="#D5AB54" />
          <circle cx="35.5" cy="25" r="1.5" fill="#D5AB54" />
          <path d="M15 44 Q21 37 27 44 Q33 51 39 44 Q45 37 51 44" stroke="#D5AB54" strokeWidth="1.6" strokeLinecap="round" fill="none" />
          <path d="M18 51 Q24 44 30 51 Q36 58 42 51" stroke="#D5AB54" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.45" />
        </svg>
      ),
    },
    {
      label: "Mental Health",
      href: "#teachings",
      icon: (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-16">
          <path d="M32 12 C22 12 14 20 14 30 C14 38 19 44 27 46 L27 52 L37 52 L37 46 C45 44 50 38 50 30 C50 20 42 12 32 12Z" stroke="#D5AB54" strokeWidth="1.8" fill="none" />
          <path d="M32 38 C30 36 26 32 26 29 C26 27 28 26 30 28 L32 30 L34 28 C36 26 38 27 38 29 C38 32 34 36 32 38Z" fill="#D5AB54" />
          <path d="M24 31 C22 29 20 31 21 33 C22 35 25 34 27 32" fill="#D5AB54" opacity="0.55" />
          <path d="M40 31 C42 29 44 31 43 33 C42 35 39 34 37 32" fill="#D5AB54" opacity="0.55" />
        </svg>
      ),
    },
    {
      label: "Weight Loss",
      href: "#teachings",
      icon: (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-16">
          <circle cx="32" cy="14" r="5" stroke="#D5AB54" strokeWidth="1.8" fill="none" />
          <path d="M32 19 L28 30 L24 52 M32 19 L36 30 L40 52" stroke="#D5AB54" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M26 34 L38 34" stroke="#D5AB54" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M20 46 L24 50 L28 46 M36 46 L40 50 L44 46" stroke="#D5AB54" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      label: "Depression",
      href: "#teachings",
      icon: (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-16">
          <path d="M12 48 Q20 40 28 43 Q36 46 44 40 Q50 35 54 48" stroke="#D5AB54" strokeWidth="1.8" strokeLinecap="round" fill="none" />
          <circle cx="32" cy="27" r="9" stroke="#D5AB54" strokeWidth="2" fill="none" />
          <path d="M32 14 L32 10 M44 19 L47 16 M49 31 L53 31 M20 19 L17 16 M15 31 L11 31" stroke="#D5AB54" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M28 26 L36 26 M32 22 L32 30" stroke="#D5AB54" strokeWidth="2" strokeLinecap="round" opacity="0.55" />
        </svg>
      ),
    },
    {
      label: "Anger",
      href: "#teachings",
      icon: (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-16">
          <circle cx="32" cy="32" r="19" stroke="#D5AB54" strokeWidth="1.8" fill="none" />
          <path d="M32 46 C32 46 21 37 21 28 C21 22 26 18 32 22 C38 18 43 22 43 28 C43 37 32 46 32 46Z" stroke="#D5AB54" strokeWidth="1.8" fill="none" strokeLinecap="round" />
          <path d="M27 25 Q32 19 37 25" stroke="#D5AB54" strokeWidth="1.4" strokeLinecap="round" fill="none" opacity="0.6" />
        </svg>
      ),
    },
    {
      label: "Sleep",
      href: "#teachings",
      icon: (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-16">
          <path d="M40 14 C28 16 20 24 20 34 C20 45 28 53 40 53 C30 53 14 44 14 32 C14 20 28 11 40 14Z" stroke="#D5AB54" strokeWidth="1.8" fill="none" strokeLinecap="round" />
          <circle cx="45" cy="20" r="2" fill="#D5AB54" />
          <circle cx="51" cy="30" r="1.4" fill="#D5AB54" opacity="0.65" />
          <circle cx="47" cy="37" r="1.1" fill="#D5AB54" opacity="0.45" />
          <path d="M24 37 L29 32 L24 32 L29 27" stroke="#D5AB54" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.65" />
        </svg>
      ),
    },
    {
      label: "Wellness",
      href: "#teachings",
      icon: (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-16">
          <path d="M32 46 C32 46 20 37 20 27 C20 19 26 13 32 19 C38 13 44 19 44 27 C44 37 32 46 32 46Z" stroke="#D5AB54" strokeWidth="1.8" fill="none" />
          <path d="M32 46 C32 46 15 39 12 28 C10 20 15 13 22 16" stroke="#D5AB54" strokeWidth="1.4" fill="none" opacity="0.55" />
          <path d="M32 46 C32 46 49 39 52 28 C54 20 49 13 42 16" stroke="#D5AB54" strokeWidth="1.4" fill="none" opacity="0.55" />
          <path d="M32 46 L32 53" stroke="#D5AB54" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M24 51 Q32 49 40 51" stroke="#D5AB54" strokeWidth="1.4" strokeLinecap="round" fill="none" />
          <path d="M32 17 L32 10 M20 22 L14 18 M44 22 L50 18" stroke="#D5AB54" strokeWidth="1.2" strokeLinecap="round" opacity="0.45" />
        </svg>
      ),
    },
    {
      label: "Relationships",
      href: "#teachings",
      icon: (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-16">
          <circle cx="21" cy="18" r="6" stroke="#D5AB54" strokeWidth="1.8" fill="none" />
          <circle cx="43" cy="18" r="6" stroke="#D5AB54" strokeWidth="1.8" fill="none" />
          <path d="M32 42 C32 42 24 36 24 30 C24 27 27 25 30 27 L32 29 L34 27 C37 25 40 27 40 30 C40 36 32 42 32 42Z" fill="#D5AB54" />
          <path d="M12 54 C12 44 16 40 21 40 C25 40 28 42 30 45" stroke="#D5AB54" strokeWidth="1.6" strokeLinecap="round" fill="none" />
          <path d="M52 54 C52 44 48 40 43 40 C39 40 36 42 34 45" stroke="#D5AB54" strokeWidth="1.6" strokeLinecap="round" fill="none" />
        </svg>
      ),
    },
    {
      label: "Parenting",
      href: "#teachings",
      icon: (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-16">
          <circle cx="25" cy="15" r="6" stroke="#D5AB54" strokeWidth="1.8" fill="none" />
          <path d="M14 54 L14 34 C14 28 18 26 25 26 C32 26 36 28 36 34 L36 54" stroke="#D5AB54" strokeWidth="1.8" strokeLinecap="round" fill="none" />
          <path d="M25 38 L36 33" stroke="#D5AB54" strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="43" cy="27" r="4" stroke="#D5AB54" strokeWidth="1.5" fill="none" />
          <path d="M36 33 C37 29 39 31 43 31 C47 31 50 34 50 38 L50 54" stroke="#D5AB54" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        </svg>
      ),
    },
    {
      label: "Back Pain",
      href: "#teachings",
      icon: (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-16">
          <path d="M32 10 L32 54" stroke="#D5AB54" strokeWidth="2" strokeLinecap="round" />
          <path d="M25 18 L32 14 L39 18" stroke="#D5AB54" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M25 26 L32 22 L39 26" stroke="#D5AB54" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M25 34 L32 30 L39 34" stroke="#D5AB54" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="32" cy="42" r="5.5" stroke="#D5AB54" strokeWidth="1.8" fill="none" />
          <circle cx="32" cy="42" r="2" fill="#D5AB54" opacity="0.8" />
        </svg>
      ),
    },
    {
      label: "Fatigue",
      href: "#teachings",
      icon: (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-16">
          <rect x="13" y="18" width="34" height="18" rx="4" stroke="#D5AB54" strokeWidth="1.8" fill="none" />
          <path d="M47 24 L52 24 L52 30 L47 30" stroke="#D5AB54" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <rect x="15" y="20" width="9" height="14" rx="2" fill="#D5AB54" opacity="0.3" />
          <path d="M22 44 Q28 49 32 44 Q36 39 40 44" stroke="#D5AB54" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          <path d="M20 51 L24 51 M30 51 L34 51 M40 51 L44 51" stroke="#D5AB54" strokeWidth="1.4" strokeLinecap="round" opacity="0.45" />
        </svg>
      ),
    },
    {
      label: "Immunity",
      href: "#teachings",
      icon: (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-16">
          <path d="M32 10 L48 17 L48 34 C48 43 40 51 32 53 C24 51 16 43 16 34 L16 17 Z" stroke="#D5AB54" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M32 26 C30 24 26 24 26 28 C26 32 32 37 32 37 C32 37 38 32 38 28 C38 24 34 24 32 26Z" fill="#D5AB54" />
          <path d="M25 19 Q32 17 39 19" stroke="#D5AB54" strokeWidth="1.2" strokeLinecap="round" opacity="0.45" />
        </svg>
      ),
    },
  ];

  return (
    <section id="solutions" className="bg-white py-12 md:py-16">
      <style>{`
        @keyframes wellness-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .wellness-track {
          animation: wellness-scroll 32s linear infinite;
          will-change: transform;
        }
        .wellness-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="site-container">
        <div className="mb-8 text-center">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-gold">Your Wellbeing, Our Purpose</p>
          <h2 className="font-display text-[32px] font-semibold text-heading md:text-[40px]">How We Can Help You</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-body">
            Science Divine offers timeless spiritual wisdom and practical tools to help you overcome life's deepest challenges and find lasting inner peace.
          </p>
        </div>
      </div>

      {/* Infinite marquee strip */}
      <div className="relative overflow-hidden">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />
        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

        <div className="wellness-track flex w-max gap-10 px-10 py-4">
          {[...solutions, ...solutions].map((item, i) => (
            <a key={i} href={item.href} className="group flex flex-col items-center gap-3 text-center">
              <div className="relative size-28 shrink-0 transition-transform duration-300 group-hover:-translate-y-2">
                <div
                  className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ boxShadow: "0 0 24px rgba(213,171,84,0.35)" }}
                />
                <div
                  className="flex size-full items-center justify-center rounded-full border-2 bg-white transition-all duration-300 group-hover:border-gold"
                  style={{ borderColor: "#6D140E" }}
                >
                  {item.icon}
                </div>
              </div>
              <span className="text-[12px] font-semibold leading-tight text-primary transition-colors duration-200 group-hover:text-gold">
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}


export function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer id="contact" className="relative overflow-hidden bg-footer text-footer-foreground">
      {/* Ambient background glow elements */}
      <div
        className="pointer-events-none absolute -left-32 -top-32 size-96 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #D5AB54 0%, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-32 -right-32 size-96 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #D5AB54 0%, transparent 70%)" }}
      />

      <div className="site-container relative pt-16 pb-12">
        {/* Top Wisdom Newsletter Section */}
        <div className="mb-16 rounded-2xl border border-footer-foreground/15 bg-white/5 p-8 backdrop-blur-sm lg:p-10">
          <div className="grid items-center gap-6 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-light">
                Stay Connected With Sacred Wisdom
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-white sm:text-3xl">
                Subscribe to Daily Spiritual Insights
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-footer-muted">
                Receive practical Sakshi Sadhna guidance, Bhagavad Gita reflections, and updates on upcoming retreats directly in your inbox.
              </p>
            </div>
            <div>
              {subscribed ? (
                <div className="flex items-center gap-2 rounded-xl bg-gold/20 p-4 text-xs font-medium text-gold-light border border-gold/30">
                  <Sparkles className="size-4 shrink-0 text-gold" />
                  Thank you for subscribing! May your inner journey be blessed with peace and awareness.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col gap-3 sm:flex-row">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-footer-muted" />
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-xl border border-footer-foreground/20 bg-footer/80 py-3 pl-10 pr-4 text-xs text-white placeholder:text-footer-muted/60 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="h-auto rounded-xl bg-gold px-6 py-3 text-xs font-semibold uppercase tracking-wider text-primary hover:bg-gold-light"
                  >
                    Subscribe <Send className="ml-2 size-3.5" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Main Multi-Column Footer Grid */}
        <div className="grid gap-10 border-b border-footer-foreground/15 pb-14 sm:grid-cols-2 lg:grid-cols-5">
          {/* Column 1: Brand & Overview (Spans 2 columns on lg) */}
          <div className="lg:col-span-2">
            <Brand light />
            <p className="mt-5 max-w-sm text-xs leading-6 text-footer-muted">
              Science Divine Foundation is a global non-profit organization dedicated to awakening human consciousness through Sakshi Bhav (awareness meditation), Bhagavad Gita teachings, and selfless service.
            </p>
            
            <div className="mt-5 flex items-center gap-2 text-xs font-medium text-gold-light font-display italic">
              <Sparkles className="size-4 text-gold" />
              "Bheetar se sanyaas, bahar se sansaar"
            </div>

            {/* Social Media Links */}
            <div className="mt-6 flex items-center gap-3">
              {[
                { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
                { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
                { icon: Youtube, label: "YouTube", href: "https://youtube.com" },
                { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
                { icon: MessageCircle, label: "WhatsApp", href: "https://whatsapp.com" },
              ].map(({ icon: Icon, label, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid size-9 place-items-center rounded-full border border-footer-foreground/20 bg-footer-foreground/5 text-footer-muted transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:bg-gold hover:text-primary"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-display text-base font-semibold tracking-wide text-white">
              Explore
            </h4>
            <div className="mt-2 h-0.5 w-8 bg-gold/60" />
            <ul className="mt-4 space-y-2.5 text-xs">
              {[
                { label: "About Science Divine", href: "#about" },
                { label: "Sadguru Sakshi Shree", href: "#about" },
                { label: "Inner Journey", href: "#teachings" },
                { label: "Our Programs", href: "#programs" },
                { label: "Retreats & Events", href: "#events" },
                { label: "Impact & Seva", href: "#top" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-flex items-center text-footer-muted transition-colors hover:text-gold-light"
                  >
                    <ArrowRight className="mr-1.5 size-3 opacity-0 transition-all hover:opacity-100" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Teachings & Solutions */}
          <div>
            <h4 className="font-display text-base font-semibold tracking-wide text-white">
              Teachings &amp; Wellness
            </h4>
            <div className="mt-2 h-0.5 w-8 bg-gold/60" />
            <ul className="mt-4 space-y-2.5 text-xs">
              {[
                { label: "Sakshi Sadhna", href: "#teachings" },
                { label: "Bhagavad Gita Wisdom", href: "#teachings" },
                { label: "Stress & Anxiety Care", href: "#solutions" },
                { label: "Mental Wellbeing", href: "#solutions" },
                { label: "Self Awareness", href: "#resources" },
                { label: "Video Insights", href: "#media" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-flex items-center text-footer-muted transition-colors hover:text-gold-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div>
            <h4 className="font-display text-base font-semibold tracking-wide text-white">
              Contact &amp; Location
            </h4>
            <div className="mt-2 h-0.5 w-8 bg-gold/60" />
            <ul className="mt-4 space-y-3 text-xs text-footer-muted">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
                <span>Science Divine Sakshi Dham, Delhi-NCR, Ghaziabad, UP, India</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="size-4 shrink-0 text-gold" />
                <a href="mailto:info@sciencedivine.org" className="hover:text-gold-light transition-colors">
                  info@sciencedivine.org
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="size-4 shrink-0 text-gold" />
                <a href="tel:+919810000000" className="hover:text-gold-light transition-colors">
                  +91 98100 00000 / +91 88000 11122
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <Button asChild className="w-full rounded-xl bg-gold px-4 py-2.5 text-xs font-semibold text-primary shadow-sm hover:bg-gold-light">
                <a href="#journey" className="flex items-center justify-center gap-2">
                  <Heart className="size-3.5 text-primary fill-primary" /> Support Seva Initiatives
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar / Copyright */}
        <div className="flex flex-col gap-4 pt-8 text-[11px] text-footer-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Science Divine Foundation. All Rights Reserved. (A Non-Profit Spiritual Trust)</p>
          
          <div className="flex items-center gap-6">
            <a href="#contact" className="transition-colors hover:text-gold-light">
              Privacy Policy
            </a>
            <a href="#contact" className="transition-colors hover:text-gold-light">
              Terms &amp; Conditions
            </a>
            <a href="#contact" className="transition-colors hover:text-gold-light">
              Disclaimer
            </a>
            <a
              href="#top"
              aria-label="Back to top"
              className="ml-2 grid size-7 place-items-center rounded-full border border-footer-foreground/20 text-footer-muted transition-all duration-300 hover:border-gold hover:bg-gold hover:text-primary"
            >
              <ArrowUp className="size-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function ScienceDivineHome() {
  return <div className="min-h-screen bg-background font-sans text-foreground"><Header /><main><Hero /><PhilosophyQuote /><InnerJourney /><AboutScienceDivine /><WellnessSolutions /><Programs /><Events /><ImpactStats /><LivingTopics /><JourneyCTA /></main><Footer /></div>;
}