import { useState, type ComponentType } from "react";
import {
  ArrowRight,
  BookOpen,
  Brain,
  CalendarDays,
  ChevronDown,
  ClipboardList,
  Eye,
  Facebook,
  Heart,
  Instagram,
  Linkedin,
  Menu,
  Mail,
  MessageCircle,
  Play,
  Search,
  Sparkles,
  Sun,
  UserRound,
  Users,
  X,
  Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type IconType = ComponentType<{ className?: string; strokeWidth?: number }>;

const navigation = [
  { label: "About", dropdown: true },
  { label: "Teachings", dropdown: true },
  { label: "Programs", dropdown: true },
  { label: "Events" },
  { label: "Resources", dropdown: true },
  { label: "Media", dropdown: true },
  { label: "Contact" },
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

function Brand({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className="flex shrink-0 items-center" aria-label="Science Divine home">
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


function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 h-[76px] border-b border-border/60 bg-background/95 shadow-nav backdrop-blur">
      <div className="site-container grid h-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 lg:flex">
        <Brand />
        <nav className="ml-auto hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.label} href={`#${item.label.toLowerCase()}`} className="group flex items-center gap-1 text-xs font-medium text-primary transition-colors hover:text-gold">
              {item.label}{item.dropdown && <ChevronDown className="size-3" strokeWidth={1.5} />}
            </a>
          ))}
        </nav>
        <div className="ml-2 flex shrink-0 items-center gap-2">
          <Button asChild className="h-9 rounded-full bg-primary px-4 text-xs text-primary-foreground shadow-none hover:-translate-y-px hover:bg-primary/90">
            <a href="#journey"><Heart className="size-3.5 text-gold" /> Donate</a>
          </Button>
          <Button variant="ghost" size="icon" className="hidden rounded-full text-primary lg:inline-flex" aria-label="Search"><Search /></Button>
          <Button variant="ghost" size="icon" className="rounded-full text-primary lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</Button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-border bg-background px-5 py-4 shadow-card lg:hidden" aria-label="Mobile navigation">
          <div className="grid grid-cols-2 gap-1">
            {navigation.map((item) => <a key={item.label} href={`#${item.label.toLowerCase()}`} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-sm text-primary hover:bg-cream">{item.label}</a>)}
          </div>
        </nav>
      )}
    </header>
  );
}

function Eyebrow({ children }: { children: string }) {
  return <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-gold">{children}</p>;
}

function SectionTitle({ eyebrow, children, align = "center" }: { eyebrow: string; children: string; align?: "left" | "center" }) {
  return <div className={align === "center" ? "text-center" : "text-left"}><Eyebrow>{eyebrow}</Eyebrow><h2 className="font-display text-[32px] font-semibold leading-[1.05] text-heading md:text-[42px]">{children}</h2></div>;
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[520px] overflow-hidden md:min-h-[540px] lg:min-h-[560px]">
      {/* Sunrise hills background — realistic atmospheric photography */}
      <img
        src="/images/hero-sunrise-hills.png"
        alt="Sunrise over peaceful green hills"
        width={2048}
        height={768}
        className="absolute inset-0 size-full object-cover object-center"
        fetchPriority="high"
      />
      {/* Elegant cream/ivory gradient on left transitioning smoothly into detailed landscape on right */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,253,247,0.92)_0%,rgba(255,253,247,0.85)_34%,rgba(255,253,247,0.45)_52%,rgba(255,253,247,0)_74%)]" />

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

      <div className="site-container relative flex min-h-[520px] items-center md:min-h-[540px] lg:min-h-[560px]">
        {/* Left text block — spacious, breathable, 2 clean lines */}
        <div className="relative z-20 max-w-[620px] py-12 sm:py-14 lg:py-16">
          {/* Main Headline — exactly 2 lines */}
          <h1 className="font-display text-[32px] font-semibold leading-[1.02] tracking-[-0.025em] sm:text-[42px] md:text-[48px] lg:text-[54px]">
            <span className="block whitespace-normal sm:whitespace-nowrap text-primary">Awaken the Divine Within,</span>
            <span className="block whitespace-normal sm:whitespace-nowrap text-gold-dark">Transform the World Around.</span>
          </h1>

          {/* Refined gold ornamental divider */}
          <div className="my-3.5 flex max-w-[300px] items-center gap-2.5">
            <div className="h-px flex-1 bg-gold/50" />
            <svg viewBox="0 0 20 20" className="size-3 text-gold-dark" fill="currentColor">
              <path d="M10 2.5L12 8L17.5 10L12 12L10 17.5L8 12L2.5 10L8 8L10 2.5Z" />
            </svg>
            <div className="h-px flex-1 bg-gold/50" />
          </div>

          {/* Supporting heading */}
          <p className="font-display text-[18px] font-normal leading-tight text-gold-dark sm:text-[21px]">
            The Science of Awareness for a Conscious Life.
          </p>

          {/* Clean readable sans-serif description */}
          <p className="mt-2.5 max-w-[450px] text-[13px] leading-5 text-body">
            Science Divine is a non-profit organisation dedicated to spreading the timeless wisdom of Awareness (Sakshi Bhav) and Bhagavad Gita for a better, conscious &amp; compassionate world.
          </p>

          {/* Premium CTA Buttons */}
          <div className="mt-5 flex flex-wrap gap-3">
            <Button
              asChild
              className="h-10 rounded-lg bg-primary px-5 text-xs font-semibold uppercase tracking-wider text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:bg-primary/90"
            >
              <a href="#teachings">
                Explore the Teachings <ArrowRight className="ml-1.5 size-3.5 text-gold" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-10 rounded-lg border border-gold/75 bg-white/90 px-5 text-xs font-semibold uppercase tracking-wider text-primary shadow-sm hover:-translate-y-0.5 hover:bg-white"
            >
              <a href="#events">
                Join an Experience <CalendarDays className="ml-1.5 size-3.5 text-gold-dark" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Founder endorsement block — positioned directly in golden sky beside Guru Ji's face */}
      <div className="absolute right-[26%] top-[90px] z-20 hidden text-center lg:block xl:right-[28%] xl:top-[100px]">
        <p className="font-display text-[16px] font-semibold tracking-wide text-primary whitespace-nowrap">Sadguru Sakshi Shree</p>
        <p className="mt-0.5 text-[10px] text-body/80 whitespace-nowrap">Founder, Science Divine Foundation</p>
        <img
          src="/images/sakshi-shree-signature-handwritten.png"
          alt="Sadguru Sakshi Shree's signature"
          width={420}
          height={140}
          loading="lazy"
          className="mx-auto mt-1 h-7 w-22 object-contain mix-blend-multiply"
        />
      </div>

      {/* Guru sofa cutout — aligned directly on right edge next to floating action sidebar */}
      <img
        src="/images/sakshi-shree-hero-sofa-cutout.png"
        alt="Sadguru Sakshi Shree"
        width={1024}
        height={1536}
        loading="eager"
        className="pointer-events-none absolute -bottom-24 right-0 z-10 hidden h-[126%] w-auto max-w-[48%] object-contain object-bottom lg:block xl:-bottom-30 xl:max-w-[50%]"
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
    <ellipse cx="32" cy="36" rx="14" ry="9" stroke="#0D1F38" strokeWidth="2" fill="none"/>
    <circle cx="32" cy="36" r="4.5" fill="#0D1F38"/>
    <circle cx="32" cy="36" r="2" fill="#C4933F"/>
    <path d="M32 12v5M32 55v-5M12 36H7M57 36h-5M17.5 21.5l-3.5-3.5M49.5 21.5l3.5-3.5M17.5 50.5l-3.5 3.5M49.5 50.5l3.5 3.5" stroke="#D5AB54" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>,
  // Wisdom - Open Book with lotus
  <svg key="wisdom" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-11">
    <path d="M8 16 C8 16 20 14 32 20 C44 14 56 16 56 16 L56 48 C56 48 44 46 32 52 C20 46 8 48 8 48 Z" stroke="#0D1F38" strokeWidth="2" fill="#FAF4E8"/>
    <line x1="32" y1="20" x2="32" y2="52" stroke="#0D1F38" strokeWidth="1.5"/>
    <path d="M32 13 C32 13 28 10 28 7 C28 5 30 4 32 6 C34 4 36 5 36 7 C36 10 32 13 32 13Z" fill="#D5AB54"/>
    <path d="M27 10 C25 8 22 9 22 11 C22 14 27 13 32 13" fill="#D5AB54" opacity="0.7"/>
    <path d="M37 10 C39 8 42 9 42 11 C42 14 37 13 32 13" fill="#D5AB54" opacity="0.7"/>
  </svg>,
  // Practice - Meditating person with aura
  <svg key="practice" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-11">
    <circle cx="32" cy="14" r="5" fill="#0D1F38"/>
    <path d="M32 19 L32 34" stroke="#0D1F38" strokeWidth="2" strokeLinecap="round"/>
    <path d="M18 28 Q25 22 32 26 Q39 22 46 28" stroke="#0D1F38" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <path d="M22 34 Q27 42 32 44 Q37 42 42 34" stroke="#0D1F38" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <circle cx="32" cy="32" r="18" stroke="#D5AB54" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.6"/>
    <circle cx="32" cy="32" r="12" stroke="#D5AB54" strokeWidth="0.8" opacity="0.4"/>
  </svg>,
  // Purpose - Sunrise over hills
  <svg key="purpose" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-11">
    <path d="M8 44 Q20 34 32 38 Q44 34 56 44" stroke="#0D1F38" strokeWidth="2" fill="#FAF4E8"/>
    <path d="M8 50 Q20 42 32 46 Q44 42 56 50" stroke="#0D1F38" strokeWidth="1.5" fill="#F5EDE0" opacity="0.6"/>
    <path d="M18 38 A14 14 0 0 1 46 38" stroke="#D5AB54" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    <circle cx="32" cy="38" r="6" fill="#D5AB54"/>
    <path d="M32 18v-5M20 22l-4-3M44 22l4-3M14 34h-5M55 34h-5" stroke="#D5AB54" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>,
  // Seva - Hands holding heart
  <svg key="seva" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-11">
    <path d="M20 44 L12 36 C10 34 10 30 13 28 C16 26 19 28 20 30 L20 26 C20 23 22 21 25 21 C26 21 27 22 28 23 C28 21 30 20 32 20 C34 20 36 21 36 23 C37 22 38 21 39 21 C42 21 44 23 44 26 L44 30 C45 28 48 26 51 28 C54 30 54 34 52 36 L44 44 L32 54 Z" fill="#FAF4E8" stroke="#0D1F38" strokeWidth="1.8" strokeLinejoin="round"/>
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
    <section id="teachings" className="relative overflow-hidden py-20 md:py-24" style={{background: "linear-gradient(135deg, #fdf8f0 0%, #f9f3e8 50%, #fdf6ee 100%)",}}>
      {/* Subtle mandala decoration */}
      <div className="pointer-events-none absolute -left-24 -top-24 size-80 rounded-full opacity-[0.06]" style={{background: "radial-gradient(circle, #D5AB54 0%, transparent 70%)",}} />
      <div className="pointer-events-none absolute -bottom-24 -right-24 size-80 rounded-full opacity-[0.06]" style={{background: "radial-gradient(circle, #D5AB54 0%, transparent 70%)",}} />
      <div className="site-container relative">
        <SectionTitle eyebrow="Explore Your">Inner Journey</SectionTitle>
        <div className="mt-12 grid grid-cols-2 gap-y-12 sm:grid-cols-3 md:grid-cols-5">
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
              <h3 className="mt-5 font-display text-xl font-semibold text-primary">{item.title}</h3>
              <p className="mt-1 text-[11px] font-medium text-gold-dark">{item.subtitle}</p>
              <ArrowRight className="mx-auto mt-3 size-3.5 transition-transform group-hover:translate-x-1 text-gold-dark" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutScienceDivine() {
  return (
    <section id="about" className="relative grid overflow-hidden md:grid-cols-[44%_56%]">
      {/* Supplied temple sunrise background */}
      <img src="/images/about-section-bg.png" alt="" aria-hidden="true" className="absolute inset-0 size-full object-cover object-center" />
      <div className="relative flex items-center"><div className="ml-auto w-full max-w-[540px] px-5 py-16 sm:px-8 md:px-12 lg:px-16"><SectionTitle eyebrow="About Science Divine" align="left">The Science of Divine Living</SectionTitle><h3 className="mt-4 font-display text-lg font-semibold text-heading">Science Divine Movement</h3><p className="mt-3 max-w-md text-sm leading-6 text-body">The Science Divine Movement is a global initiative helping people realize their optimum potential through definite scientific techniques for sound body, sound mind, and self-realization. Founded by enlightened spiritual master Sakshi Shree, it simplifies spirituality to become an integral part of everyday life, freeing humanity from ideologies and belief systems that have divided us through the ages.</p><p className="mt-4 max-w-md text-sm leading-6 text-body">Our fundamental maxim is <em className="font-semibold text-gold-dark">"Bheetar se sanyaas, bahar se sansaar"</em> – total participation in worldly life while enjoying complete inner renunciation.</p><a href="#journey" className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-primary transition-colors hover:text-gold">Know Sakshi Shree <ArrowRight className="size-3.5" /></a></div></div>
      <div className="relative min-h-[420px] overflow-hidden md:min-h-[500px]"><img src="/images/sakshi-shree-about-new.webp" alt="Sadguru Sakshi Shree" width={800} height={900} loading="lazy" className="absolute bottom-0 right-0 h-full w-auto max-w-none object-contain object-bottom" /><blockquote className="absolute left-[6%] top-[14%] max-w-[250px] font-display text-2xl italic leading-tight text-primary">"Awareness is the<br />beginning of true freedom."<footer className="mt-3 font-sans text-[10px] not-italic text-body">— Sadguru Sakshi Shree</footer></blockquote></div>
    </section>
  );
}

function ProgramCard({ program }: { program: (typeof programs)[number] }) {
  const Icon = program.icon;
  return <article className="group overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card"><div className="aspect-[1.8/1] overflow-hidden"><img src={program.image} alt="" width={1104} height={608} loading="lazy" className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" /></div><div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 p-5"><span className="grid size-8 place-items-center rounded-full bg-cream text-gold"><Icon className="size-4" strokeWidth={1.4} /></span><div className="min-w-0"><h3 className="font-display text-xl font-semibold text-heading">{program.title}</h3><p className="mt-1 text-[10px] text-muted-foreground">{program.subtitle}</p></div><ArrowRight className="size-3.5 text-gold transition-transform group-hover:translate-x-1" /></div></article>;
}

function Programs() {
  return <section id="programs" className="bg-background py-20 md:py-24"><div className="site-container"><SectionTitle eyebrow="Our Programs">Transform Through Practice</SectionTitle><div className="mt-9 grid gap-5 md:grid-cols-3">{programs.map((program) => <ProgramCard key={program.title} program={program} />)}</div><FeaturedVideo /></div></section>;
}

function FeaturedVideo() {
  return <div className="relative mt-10 min-h-[210px] overflow-hidden rounded-lg"><img src="/images/featured-video.jpg" alt="Meditator overlooking Himalayan mountains at sunset" width={1600} height={544} loading="lazy" className="absolute inset-0 size-full object-cover" /><div className="absolute inset-0 bg-video-overlay" /><Button size="icon" className="absolute left-1/2 top-1/2 size-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-background/90 text-primary shadow-card hover:bg-background" aria-label="Play featured video"><Play className="ml-0.5 fill-current" /></Button><div className="relative ml-auto flex min-h-[210px] w-full max-w-[78%] flex-col justify-center px-6 sm:max-w-[47%] sm:px-10"><p className="text-[10px] uppercase tracking-[0.15em] text-footer-muted">Featured Video</p><p className="mt-2 font-devanagari text-[25px] leading-snug text-primary-foreground sm:text-[31px]">गीता पढ़िए नहीं...<br /><span className="text-gold-light">गीता जीना सीखिए।</span></p></div></div>;
}

function Events() {
  return <section id="events" className="bg-ivory py-20 md:py-24"><div className="site-container"><div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4"><SectionTitle eyebrow="Upcoming Experiences" align="left">Events & Retreats</SectionTitle><a href="#events" className="mb-1 hidden items-center gap-1 text-[11px] font-semibold text-primary sm:flex">View All Events <ArrowRight className="size-3" /></a></div><div className="mt-8 grid gap-5 md:grid-cols-3">
    <EventCard date="07" month="SEP" title="Monthly Offline Event" location="Science Divine, Sakshi Dham, Ghaziabad" meta="10:00 AM – 1:00 PM" />
    <EventCard image="/images/retreat-vrindavan.jpg" date="15–17" month="AUG" title="Vrindavan Retreat" location="Vrindavan, Uttar Pradesh" meta="3 Days Residential Retreat" />
    <article className="flex min-h-[270px] flex-col justify-between rounded-lg bg-primary p-7 text-primary-foreground"><CalendarDays className="size-6 text-gold-light" strokeWidth={1.4} /><div><h3 className="font-display text-2xl font-semibold leading-tight">Join Our Upcoming<br />Events &amp; Retreats</h3><p className="mt-3 text-xs leading-5 text-footer-muted">Deepen your practice. Be part of transformational experiences.</p></div><Button asChild className="w-fit rounded-full bg-gold px-5 text-xs text-primary shadow-none hover:bg-gold-light"><a href="#events">View All Events <ArrowRight /></a></Button></article>
  </div></div></section>;
}

function EventCard({ image, date, month, title, location, meta }: { image?: string; date: string; month: string; title: string; location: string; meta: string }) {
  return <article className="group overflow-hidden rounded-lg border border-border bg-card transition-all hover:-translate-y-0.5 hover:shadow-card">{image && <div className="h-28 overflow-hidden"><img src={image} alt="Vrindavan retreat landscape" width={1104} height={656} loading="lazy" className="size-full object-cover transition-transform group-hover:scale-[1.02]" /></div>}<div className="grid grid-cols-[62px_1fr] gap-4 p-6"><div className="border-r border-border text-center"><span className="block font-display text-[27px] font-semibold leading-none text-gold-dark">{date}</span><span className="mt-1 block text-[9px] font-semibold text-gold-dark">{month}<br />2026</span></div><div><h3 className="font-display text-xl font-semibold text-heading">{title}</h3><p className="mt-2 text-[10px] leading-4 text-body">{location}<br />{meta}</p><a href="#events" className="mt-5 inline-flex items-center gap-1 text-[10px] font-semibold text-gold-dark">Register Now <ArrowRight className="size-3" /></a></div></div></article>;
}

function ImpactStats() {
  return <section className="relative overflow-hidden py-12"><img src="/images/impact-mountains.jpg" alt="" width={1920} height={512} loading="lazy" className="absolute inset-0 size-full object-cover" /><div className="absolute inset-0 bg-impact-overlay" /><div className="site-container relative"><div className="text-center"><h2 className="font-display text-[30px] font-semibold text-heading">Our Impact</h2><p className="mt-1 text-[10px] text-body">A growing movement of awareness, peace and service.</p></div><div className="mt-8 grid grid-cols-2 gap-y-8 md:grid-cols-4">{stats.map(([number, label], index) => <div key={label} className={`text-center ${index > 0 ? "md:border-l md:border-gold/30" : ""}`}><strong className="block font-display text-[34px] font-semibold text-heading">{number}</strong><span className="text-[11px] text-body">{label}</span></div>)}</div></div></section>;
}

function LivingTopics() {
  return <section id="resources" className="bg-background py-20 md:py-24"><div className="site-container"><SectionTitle eyebrow="Explore the Science of Living">Explore the Science of Living</SectionTitle><div className="mt-9 grid grid-cols-2 gap-3 md:grid-cols-4">{topics.map(({ label, icon: Icon }) => <a key={label} href="#resources" className="group flex h-[94px] flex-col items-center justify-center rounded-md border border-border bg-card text-center transition-colors hover:border-gold hover:bg-ivory"><Icon className="size-6 text-gold" strokeWidth={1.3} /><span className="mt-2 font-display text-base font-semibold text-heading">{label}</span></a>)}</div><Insights /></div></section>;
}

function Insights() {
  return <div id="media" className="mt-20"><div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4"><h2 className="font-display text-[30px] font-semibold text-heading">Insights for Conscious Living</h2><a href="#media" className="mb-1 hidden items-center gap-1 text-[11px] font-semibold text-primary sm:flex">View All Articles <ArrowRight className="size-3" /></a></div><div className="mt-7 grid gap-5 md:grid-cols-3">{articles.map((article) => <article key={article.title} className="group overflow-hidden rounded-lg border border-border bg-card transition-all hover:-translate-y-0.5 hover:shadow-card"><div className="h-44 overflow-hidden"><img src={article.image} alt="" width={1104} height={608} loading="lazy" className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" /></div><div className="relative min-h-[148px] p-5"><p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-gold-dark">{article.category}</p><h3 className="mt-2 max-w-[90%] font-display text-xl font-semibold leading-tight text-heading">{article.title}</h3><p className="absolute bottom-5 left-5 text-[10px] text-muted-foreground">{article.date}</p><ArrowRight className="absolute bottom-5 right-5 size-3.5 text-gold transition-transform group-hover:translate-x-1" /></div></article>)}</div></div>;
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
    <section id="solutions" className="bg-white py-20 md:py-28">
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
        <div className="mb-14 text-center">
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
                  style={{ borderColor: "#1a2f5a" }}
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


function Footer() {
  return <footer id="contact" className="bg-footer text-footer-foreground"><div className="site-container py-10"><div className="grid items-center gap-8 border-b border-footer-foreground/10 pb-8 md:grid-cols-[1fr_auto_1fr]"><Brand light /><nav className="flex flex-wrap justify-center gap-x-6 gap-y-3" aria-label="Footer navigation">{navigation.map((item) => <a key={item.label} href={`#${item.label.toLowerCase()}`} className="text-[10px] text-footer-muted transition-colors hover:text-gold-light">{item.label}</a>)}</nav><div className="flex justify-start gap-2 md:justify-end">{[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => <a key={i} href="#contact" aria-label={["Facebook", "Instagram", "YouTube", "LinkedIn"][i]} className="grid size-7 place-items-center rounded-full border border-footer-foreground/15 text-footer-muted transition-colors hover:border-gold hover:text-gold"><Icon className="size-3.5" /></a>)}</div></div><div className="flex flex-col gap-3 pt-6 text-[9px] text-footer-muted sm:flex-row sm:items-center sm:justify-between"><p>© 2026 Science Divine Foundation. All Rights Reserved.</p><div className="flex gap-5"><a href="#contact">Privacy Policy</a><a href="#contact">Terms &amp; Conditions</a></div></div></div></footer>;
}

export function ScienceDivineHome() {
  return <div className="min-h-screen bg-background font-sans text-foreground"><Header /><main><Hero /><PhilosophyQuote /><InnerJourney /><AboutScienceDivine /><WellnessSolutions /><Programs /><Events /><ImpactStats /><LivingTopics /><JourneyCTA /></main><Footer /></div>;
}