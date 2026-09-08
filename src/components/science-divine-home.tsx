import { useState, type ComponentType } from "react";
import {
  ArrowRight,
  BookOpen,
  Brain,
  CalendarDays,
  ChevronDown,
  Eye,
  Facebook,
  Heart,
  Instagram,
  Linkedin,
  Menu,
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
    <a href="#top" className="flex shrink-0 items-center gap-2" aria-label="Science Divine home">
      <span className="relative grid size-10 place-items-center text-gold" aria-hidden="true">
        <Sun className="size-9" strokeWidth={1.25} />
        <span className="absolute size-2 rounded-full bg-gold" />
      </span>
      <span className="leading-none">
        <span className={`block font-display text-xl font-semibold ${light ? "text-footer-foreground" : "text-primary"}`}>Science Divine</span>
        <span className={`mt-1 block text-[8px] tracking-[0.04em] ${light ? "text-footer-muted" : "text-muted-foreground"}`}>The Science of Divine Living</span>
      </span>
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
    <section id="top" className="relative min-h-[790px] overflow-hidden md:min-h-[620px]">
      <img src="/images/hero-mountains.jpg" alt="Himalayan mountains at sunrise" width={1920} height={912} className="absolute inset-0 size-full object-cover object-center" fetchPriority="high" />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="site-container relative min-h-[790px] md:min-h-[620px]">
        <div className="relative z-20 max-w-[550px] pt-14 sm:pt-24 md:pt-[115px]">
          <h1 className="font-display text-[46px] font-semibold leading-[0.98] tracking-[-0.025em] text-primary sm:text-[54px] lg:text-[64px]">Awaken the<br />Divine Within.</h1>
          <p className="mt-4 font-display text-[27px] leading-[1.04] text-gold-dark sm:text-[30px]">The Science of Awareness<br />for a Conscious Life.</p>
          <p className="mt-5 max-w-[470px] text-[13px] leading-6 text-body">Science Divine is a non-profit organisation dedicated to spreading the timeless wisdom of Awareness (Sakshi Bhav) and Bhagavad Gita for a better, conscious &amp; compassionate world.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild className="h-11 rounded-full bg-primary px-6 text-[13px] text-primary-foreground shadow-none transition-all hover:-translate-y-px hover:bg-primary/90"><a href="#teachings">Explore the Teachings <ArrowRight /></a></Button>
            <Button asChild variant="outline" className="h-11 rounded-full border-border-strong bg-cream/70 px-6 text-[13px] text-primary shadow-none hover:-translate-y-px hover:bg-cream"><a href="#events">Join an Experience</a></Button>
          </div>
        </div>
        <div className="absolute bottom-0 right-[-94px] z-10 w-[460px] sm:right-[-60px] sm:w-[560px] md:right-[-20px] md:w-[610px] lg:right-[-30px] lg:w-[650px]">
          <img src="/images/sakshi-shree-hero.png" alt="Sadguru Sakshi Shree seated peacefully" width={912} height={1104} className="h-auto w-full object-contain" fetchPriority="high" />
        </div>
        <div className="absolute right-[34%] top-[128px] z-20 hidden text-center lg:block">
          <p className="font-display text-lg font-semibold text-primary">Sadguru Sakshi Shree</p>
          <p className="mt-0.5 text-[9px] text-body">Founder, Science Divine Foundation</p>
          <img src="/images/signature.png" alt="Signature" width={420} height={140} loading="lazy" className="mx-auto mt-1 h-10 w-32 object-contain" />
        </div>
      </div>
    </section>
  );
}

function PhilosophyQuote() {
  return (
    <section className="bg-ivory py-10 md:py-0">
      <div className="site-container grid min-h-[154px] items-center gap-8 md:grid-cols-[150px_1fr_0.8fr]">
        <div className="flex justify-center text-gold"><Sparkles className="size-12" strokeWidth={1.1} /></div>
        <blockquote className="border-y border-gold/35 py-7 font-display text-[28px] leading-[1.1] text-heading md:border-x md:border-y-0 md:px-11 md:text-[32px]">You don’t need another belief.<br /><em className="text-gold-dark">You need a deeper awareness.</em></blockquote>
        <p className="max-w-[330px] text-xs leading-5 text-body">Awareness brings clarity, peace and purpose. It helps you live in harmony with yourself, your relationships and the world around you.</p>
      </div>
    </section>
  );
}

function InnerJourney() {
  return (
    <section id="teachings" className="bg-background py-20 md:py-24">
      <div className="site-container"><SectionTitle eyebrow="Explore Your">Inner Journey</SectionTitle>
        <div className="mt-10 grid grid-cols-2 gap-y-10 sm:grid-cols-3 md:grid-cols-5">
          {journeyItems.map(({ title, subtitle, icon: Icon }) => <div key={title} className="group text-center"><div className="mx-auto grid size-24 place-items-center rounded-full bg-cream text-gold transition-transform group-hover:-translate-y-1"><Icon className="size-9" strokeWidth={1.35} /></div><h3 className="mt-4 font-display text-xl font-semibold text-heading">{title}</h3><p className="mt-1 text-[10px] text-muted-foreground">{subtitle}</p><ArrowRight className="mx-auto mt-3 size-3.5 text-gold transition-transform group-hover:translate-x-1" /></div>)}
        </div>
      </div>
    </section>
  );
}

function AboutScienceDivine() {
  return (
    <section id="about" className="grid bg-cream md:grid-cols-[44%_56%]">
      <div className="flex items-center"><div className="ml-auto w-full max-w-[540px] px-5 py-16 sm:px-8 md:px-12 lg:px-16"><SectionTitle eyebrow="About Science Divine" align="left">The Science of Divine Living</SectionTitle><p className="mt-5 max-w-md text-sm leading-6 text-body">Through timeless wisdom and practical tools, Science Divine helps individuals experience inner peace, clarity and a higher purpose in everyday life.</p><a href="#journey" className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-primary transition-colors hover:text-gold">Know Sakshi Shree <ArrowRight className="size-3.5" /></a></div></div>
      <div className="relative min-h-[420px] overflow-hidden md:min-h-[500px]"><img src="/images/sakshi-shree-about.jpg" alt="Sadguru Sakshi Shree outdoors in the mountains" width={1200} height={768} loading="lazy" className="absolute inset-0 size-full object-cover object-center" /><blockquote className="absolute right-[8%] top-[14%] max-w-[250px] font-display text-2xl italic leading-tight text-primary">“Awareness is the<br />beginning of true freedom.”<footer className="mt-3 font-sans text-[10px] not-italic text-body">— Sadguru Sakshi Shree</footer></blockquote></div>
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

function Footer() {
  return <footer id="contact" className="bg-footer text-footer-foreground"><div className="site-container py-10"><div className="grid items-center gap-8 border-b border-footer-foreground/10 pb-8 md:grid-cols-[1fr_auto_1fr]"><Brand light /><nav className="flex flex-wrap justify-center gap-x-6 gap-y-3" aria-label="Footer navigation">{navigation.map((item) => <a key={item.label} href={`#${item.label.toLowerCase()}`} className="text-[10px] text-footer-muted transition-colors hover:text-gold-light">{item.label}</a>)}</nav><div className="flex justify-start gap-2 md:justify-end">{[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => <a key={i} href="#contact" aria-label={["Facebook", "Instagram", "YouTube", "LinkedIn"][i]} className="grid size-7 place-items-center rounded-full border border-footer-foreground/15 text-footer-muted transition-colors hover:border-gold hover:text-gold"><Icon className="size-3.5" /></a>)}</div></div><div className="flex flex-col gap-3 pt-6 text-[9px] text-footer-muted sm:flex-row sm:items-center sm:justify-between"><p>© 2026 Science Divine Foundation. All Rights Reserved.</p><div className="flex gap-5"><a href="#contact">Privacy Policy</a><a href="#contact">Terms &amp; Conditions</a></div></div></div></footer>;
}

export function ScienceDivineHome() {
  return <div className="min-h-screen bg-background font-sans text-foreground"><Header /><main><Hero /><PhilosophyQuote /><InnerJourney /><AboutScienceDivine /><Programs /><Events /><ImpactStats /><LivingTopics /><JourneyCTA /></main><Footer /></div>;
}