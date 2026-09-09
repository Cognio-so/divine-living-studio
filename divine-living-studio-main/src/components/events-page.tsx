import { useState, useMemo } from "react";
import {
  CalendarDays,
  Clock,
  MapPin,
  CheckCircle,
  ExternalLink,
  ArrowRight,
  Search,
  Share2,
  Calendar,
  Sparkles,
  Heart,
  ChevronRight,
  Phone,
  Mail,
  User,
  Users,
  Check,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header, Footer, upcomingEventsData, eventsGalleryData } from "@/components/science-divine-home";

export function EventsPage() {
  const [filter, setFilter] = useState<"all" | "upcoming" | "completed">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEventForRsvp, setSelectedEventForRsvp] = useState<(typeof upcomingEventsData)[0] | null>(null);
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false);
  const [copiedLink, setCopiedLink] = useState<string | null>(null);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<(typeof eventsGalleryData)[0] | null>(null);

  // Form State
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [attendees, setAttendees] = useState("1");
  const [city, setCity] = useState("");

  const filteredEvents = useMemo(() => {
    return upcomingEventsData.filter((ev) => {
      // Tab filter
      if (filter === "upcoming" && ev.isCompleted) return false;
      if (filter === "completed" && !ev.isCompleted) return false;

      // Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchTitle = ev.title.toLowerCase().includes(query);
        const matchDesc = ev.desc.toLowerCase().includes(query);
        const matchDate = ev.date.toLowerCase().includes(query);
        const matchLoc = ev.location.toLowerCase().includes(query);
        return matchTitle || matchDesc || matchDate || matchLoc;
      }

      return true;
    });
  }, [filter, searchQuery]);

  const handleShare = (event: (typeof upcomingEventsData)[0]) => {
    if (navigator.share) {
      navigator
        .share({
          title: event.title,
          text: `${event.title} with Sadguru Sakshi Shree at Science Divine.`,
          url: event.link,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(event.link);
      setCopiedLink(event.title);
      setTimeout(() => setCopiedLink(null), 2500);
    }
  };

  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;
    setRsvpSubmitted(true);
  };

  const closeRsvpModal = () => {
    setSelectedEventForRsvp(null);
    setRsvpSubmitted(false);
    setFullName("");
    setPhone("");
    setEmail("");
    setAttendees("1");
    setCity("");
  };

  return (
    <div className="min-h-screen bg-[#faf5ee] font-sans text-foreground">
      <Header />

      <main>
        {/* ── Page Hero Header ── */}
        <section className="relative overflow-hidden border-b border-[#E8DCB8] bg-gradient-to-b from-[#FDFBF7] via-[#FAF4E8] to-[#F5EBD7] py-16 md:py-24">
          {/* Subtle golden background glow */}
          <div
            className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[1000px] -translate-x-1/2 opacity-60"
            style={{
              background: "radial-gradient(ellipse at top center, rgba(213,171,84,0.3) 0%, rgba(250,245,238,0) 70%)",
            }}
          />

          <div className="site-container relative z-10">
            {/* Breadcrumb */}
            <div className="mb-6 flex items-center justify-center gap-2 text-xs text-[#8C7A68]">
              <a href="/" className="hover:text-[#6D140E] transition-colors">Home</a>
              <ChevronRight className="size-3 text-[#C99435]" />
              <span className="font-semibold text-[#6D140E]">Events</span>
            </div>

            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#D5AB54]/50 bg-white/80 px-4 py-1.5 shadow-sm backdrop-blur">
                <Sparkles className="size-3.5 text-[#B58228]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#B58228]">
                  FIND THE EVENTS FOR CONSCIOUS AWAKENING
                </span>
              </div>

              <h1 className="mt-4 font-display text-[40px] font-semibold text-[#520F08] sm:text-[54px] md:leading-[1.1]">
                Upcoming Events &amp; Mahotsav
              </h1>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#594C3E] sm:text-lg">
                Join us at enriching events, where we seamlessly blend learning with inspiration, to foster growth and build lasting connections.
              </p>

              {/* Quick Info Badges */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-[#6D140E]">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3.5 py-1.5 shadow-sm border border-[#E5D4BE]">
                  <MapPin className="size-3.5 text-[#C99435]" /> Sakshi Dhaam, Ghaziabad
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3.5 py-1.5 shadow-sm border border-[#E5D4BE]">
                  <Heart className="size-3.5 text-[#C99435]" /> Free Registration &amp; Open to All
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3.5 py-1.5 shadow-sm border border-[#E5D4BE]">
                  <Sparkles className="size-3.5 text-[#C99435]" /> Sacred Bhojan Prasad Included
                </span>
              </div>

              {/* Search Box */}
              <div className="mx-auto mt-8 max-w-xl">
                <div className="relative flex items-center">
                  <Search className="absolute left-4 size-4 text-[#8C7A68]" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search events by title, keyword, or date..."
                    className="w-full rounded-full border border-[#D5AB54]/50 bg-white/95 py-3.5 pl-11 pr-10 text-sm text-[#42110D] placeholder:text-[#8C7A68]/70 shadow-sm focus:border-[#6D140E] focus:outline-none focus:ring-2 focus:ring-[#6D140E]/15"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3.5 rounded-full p-1 text-[#8C7A68] hover:text-[#6D140E]"
                    >
                      <X className="size-4" />
                    </button>
                  )}
                </div>
              </div>

              {/* Filter Tabs */}
              <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-[#D5AB54]/40 bg-white/90 p-1.5 shadow-sm backdrop-blur">
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
          </div>
        </section>

        {/* ── Events Cards Section ── */}
        <section className="py-14 md:py-20">
          <div className="site-container">
            {filteredEvents.length === 0 ? (
              <div className="mx-auto max-w-md rounded-2xl border border-[#E5D4BE] bg-white p-10 text-center shadow-sm">
                <Search className="mx-auto size-10 text-[#C99435]" />
                <h3 className="mt-4 font-display text-xl font-semibold text-[#520F08]">No events found</h3>
                <p className="mt-2 text-xs text-[#736353]">
                  No events match your current filter "{searchQuery}". Try searching with a different keyword or view All Events.
                </p>
                <Button
                  onClick={() => {
                    setFilter("all");
                    setSearchQuery("");
                  }}
                  className="mt-6 rounded-full bg-[#6D140E] text-xs text-white"
                >
                  Reset Filters
                </Button>
              </div>
            ) : (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredEvents.map((event) => (
                  <article
                    key={event.title}
                    className="group flex flex-col overflow-hidden rounded-[24px] border border-[#E5D4BE] bg-white shadow-[0_4px_20px_rgba(109,20,14,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#C4933F] hover:shadow-[0_20px_40px_rgba(109,20,14,0.12)]"
                  >
                    {/* Event Banner Photo */}
                    <div className="relative h-56 w-full overflow-hidden bg-[#FAF4E8]">
                      <img
                        src={event.image}
                        alt={event.title}
                        width={600}
                        height={360}
                        loading="lazy"
                        className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                      {/* Status Badge */}
                      <div className="absolute left-4 top-4">
                        {event.isCompleted ? (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-black/65 px-3 py-1 text-[11px] font-semibold text-white/90 backdrop-blur-md border border-white/20">
                            <CheckCircle className="size-3 text-[#D5AB54]" /> Completed
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-700/95 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-md shadow-md border border-emerald-400/40">
                            <span className="size-2 rounded-full bg-emerald-300 animate-ping" /> Available Now
                          </span>
                        )}
                      </div>

                      {/* Share / Copy Button */}
                      <div className="absolute right-4 top-4">
                        <button
                          onClick={() => handleShare(event)}
                          title="Share event"
                          aria-label="Share event"
                          className="flex size-8 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition-colors hover:bg-[#6D140E]"
                        >
                          {copiedLink === event.title ? (
                            <Check className="size-4 text-emerald-400" />
                          ) : (
                            <Share2 className="size-4" />
                          )}
                        </button>
                      </div>

                      {/* Date & Time Overlay */}
                      <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between text-xs font-medium text-white">
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

                    {/* Event Body */}
                    <div className="flex flex-1 flex-col p-6">
                      <h2 className="font-display text-[22px] font-semibold leading-snug text-[#520F08] transition-colors group-hover:text-[#B58228]">
                        {event.title}
                      </h2>

                      <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-[#594C3E]">
                        {event.desc}
                      </p>

                      {/* Venue Information */}
                      <div className="mt-5 border-t border-[#F0E4D0] pt-4">
                        <div className="flex items-start gap-2 text-xs text-[#736353]">
                          <MapPin className="size-4 shrink-0 text-[#C4933F] mt-0.5" />
                          <span className="line-clamp-2">{event.location}</span>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="mt-6 flex flex-col gap-2.5">
                        {event.isCompleted ? (
                          <a
                            href={event.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#D5AB54]/50 bg-[#FAF4E8] py-3 text-xs font-semibold text-[#6D140E] transition-colors hover:bg-[#D5AB54]/20"
                          >
                            <span>View Highlights &amp; Discourses</span>
                            <ExternalLink className="size-3.5 text-[#C4933F]" />
                          </a>
                        ) : (
                          <>
                            <button
                              onClick={() => setSelectedEventForRsvp(event)}
                              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#6D140E] to-[#911B13] py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:opacity-95 hover:shadow-lg"
                            >
                              <span>Register Free RSVP</span>
                              <ArrowRight className="size-3.5 text-[#F5D280]" />
                            </button>
                            <a
                              href={event.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex w-full items-center justify-center gap-1.5 py-1 text-center text-[11px] font-semibold text-[#8C7A68] hover:text-[#6D140E] transition-colors"
                            >
                              <span>Open Official Page</span>
                              <ExternalLink className="size-3" />
                            </a>
                          </>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ── Events Gallery Sub-Section ── */}
        <section className="border-t border-[#E5D4BE] bg-[#F8F2E6] py-16 md:py-24">
          <div className="site-container">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 text-[#B58228]">
                <div className="h-px w-10 bg-[#B58228]" />
                <p className="text-[11px] font-bold uppercase tracking-[0.24em]">
                  CAPTURED MOMENTS OF GRACE
                </p>
                <div className="h-px w-10 bg-[#B58228]" />
              </div>
              <h2 className="mt-2 font-display text-[36px] font-semibold text-[#520F08] sm:text-[44px]">
                Events Gallery
              </h2>
              <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-[#6B5E4F]">
                Glimpses of sacred retreats, children's meditation sessions, youth movements, and life-transforming satsangs across India.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {eventsGalleryData.map((item) => (
                <div
                  key={item.title}
                  onClick={() => setSelectedGalleryImage(item)}
                  className="group relative cursor-pointer overflow-hidden rounded-[22px] border border-[#E5D4BE] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
                  </div>
                  <div className="absolute bottom-4 left-5 right-5 text-white">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-[#F5D280]">
                      {item.subtitle}
                    </p>
                    <h3 className="mt-1 font-display text-[19px] font-semibold leading-snug">
                      {item.title}
                    </h3>
                  </div>
                  <div className="absolute right-4 top-4 rounded-full bg-black/40 p-2 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <Sparkles className="size-4 text-[#F5D280]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Venue & Visiting Information Box ── */}
        <section className="py-16 md:py-20">
          <div className="site-container">
            <div className="overflow-hidden rounded-[28px] border border-[#E5D4BE] bg-white shadow-[0_6px_30px_rgba(109,20,14,0.06)]">
              <div className="grid lg:grid-cols-2">
                {/* Left side details */}
                <div className="p-8 sm:p-12">
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#B58228]">
                    SACRED ASHRAM &amp; EVENT VENUE
                  </p>
                  <h3 className="mt-2 font-display text-[30px] font-semibold text-[#520F08] sm:text-[36px]">
                    Siddha Sudarshan Sakshi Dhaam
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#594C3E]">
                    Situated in Ghaziabad (Delhi NCR), Siddha Sudarshan Sakshi Dhaam is the divine abode of Sadguru Sakshi Shree. Thousands gather here for weekly meditation, spiritual counsel, and satsang.
                  </p>

                  <div className="mt-6 space-y-4 text-xs text-[#594C3E]">
                    <div className="flex items-start gap-3">
                      <MapPin className="size-4 shrink-0 text-[#C4933F] mt-0.5" />
                      <div>
                        <strong className="font-semibold text-[#520F08]">Address:</strong> 9, Avantika, Chiranjeev Vihar, Ghaziabad, Uttar Pradesh 201002
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="size-4 shrink-0 text-[#C4933F] mt-0.5" />
                      <div>
                        <strong className="font-semibold text-[#520F08]">Event Timings:</strong> Every Sunday Morning at 10:00 AM (Please arrive 15 minutes prior).
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Heart className="size-4 shrink-0 text-[#C4933F] mt-0.5" />
                      <div>
                        <strong className="font-semibold text-[#520F08]">Bhojan Prasad:</strong> Pure sattvic Mahaprasad is joyfully served to all attendees.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="size-4 shrink-0 text-[#C4933F] mt-0.5" />
                      <div>
                        <strong className="font-semibold text-[#520F08]">Helpline:</strong> +91 98100 00000 / +91 88000 11122
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href="https://maps.google.com/?q=Siddha+Sudarshan+Sakshi+Dhaam+Ghaziabad"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-[#6D140E] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-sm hover:bg-[#851912] transition-colors"
                    >
                      <MapPin className="size-3.5 text-[#F5D280]" /> Open in Google Maps
                    </a>
                    <a
                      href="tel:+919810000000"
                      className="inline-flex items-center gap-2 rounded-xl border border-[#D5AB54] bg-[#FAF5EE] px-6 py-3 text-xs font-semibold text-[#6D140E] hover:bg-[#D5AB54]/20 transition-colors"
                    >
                      <Phone className="size-3.5 text-[#C4933F]" /> Call Ashram
                    </a>
                  </div>
                </div>

                {/* Right side visual showcase */}
                <div className="relative min-h-[300px] overflow-hidden bg-[#FAF4E8] lg:min-h-full">
                  <img
                    src="/images/retreat-vrindavan.jpg"
                    alt="Siddha Sudarshan Sakshi Dhaam Retreat"
                    width={800}
                    height={600}
                    className="size-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="inline-block rounded-full bg-[#D5AB54]/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#4A1009]">
                      Spiritual Sanctuary
                    </span>
                    <p className="mt-2 font-display text-xl font-semibold">
                      "A space of silence, deep meditation, and timeless grace."
                    </p>
                    <p className="mt-1 text-xs text-white/80">— Sadguru Sakshi Shree</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ Section ── */}
        <section className="border-t border-[#E5D4BE] bg-white py-16">
          <div className="site-container max-w-3xl">
            <div className="text-center">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#B58228]">
                COMMONLY ASKED QUESTIONS
              </p>
              <h2 className="mt-1 font-display text-3xl font-semibold text-[#520F08]">
                Attending Science Divine Events
              </h2>
            </div>

            <div className="mt-10 space-y-4">
              {[
                {
                  q: "Is prior registration or ticket purchase required?",
                  a: "All Science Divine Sunday Mahotsav, Satsangs, and Meditation sessions are free of charge. We recommend registering online in advance so the Ashram seating and Bhojan Prasad arrangements can be managed smoothly.",
                },
                {
                  q: "What should I wear and bring with me?",
                  a: "Please dress in comfortable, modest traditional or formal casual clothing suitable for sitting in meditation. You do not need to bring meditation cushions as comfortable seating is arranged at the Dhaam.",
                },
                {
                  q: "Can I bring my family and children?",
                  a: "Yes, families and children of all ages are warmly welcomed. We also organize special 'Teach Meditation for Kids' and 'Young Mind Movement' sessions for younger seekers.",
                },
                {
                  q: "How can I seek personal guidance or problem resolution from Sakshi Shree?",
                  a: "During the Sunday session, devotees can submit questions for Sakshi Shree's problem resolution discourse. Personal darshan is also facilitated after the meditation session.",
                },
              ].map((faq, i) => (
                <div key={i} className="rounded-2xl border border-[#E5D4BE] bg-[#FFFDFA] p-6 shadow-sm">
                  <h3 className="font-display text-lg font-semibold text-[#520F08]">
                    {faq.q}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#594C3E]">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ── RSVP Modal / Dialog ── */}
      {selectedEventForRsvp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="relative w-full max-w-lg overflow-hidden rounded-[26px] border border-[#E5D4BE] bg-white shadow-2xl">
            {/* Header */}
            <div className="border-b border-[#F0E4D0] bg-[#FAF5EE] p-6">
              <button
                onClick={closeRsvpModal}
                className="absolute right-4 top-4 rounded-full p-1.5 text-[#8C7A68] hover:bg-[#EADBCE] hover:text-[#520F08] transition-colors"
                aria-label="Close"
              >
                <X className="size-5" />
              </button>
              <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#B58228]">
                <Sparkles className="size-3 text-[#B58228]" /> Event Registration
              </div>
              <h3 className="mt-1 font-display text-2xl font-semibold text-[#520F08] pr-6">
                {selectedEventForRsvp.title}
              </h3>
              <p className="mt-1 flex items-center gap-2 text-xs text-[#736353]">
                <Calendar className="size-3.5 text-[#C99435]" /> {selectedEventForRsvp.date} | {selectedEventForRsvp.time}
              </p>
            </div>

            {/* Content */}
            <div className="p-6">
              {rsvpSubmitted ? (
                <div className="text-center py-6">
                  <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <Check className="size-7" />
                  </div>
                  <h4 className="mt-4 font-display text-2xl font-semibold text-[#520F08]">
                    Registration Confirmed!
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-[#594C3E]">
                    🙏 May your inner journey be blessed with peace. We have received your registration for <strong>{fullName}</strong> ({attendees} attendee{attendees !== "1" ? "s" : ""}).
                  </p>
                  <div className="mt-4 rounded-xl bg-[#FAF5EE] p-3.5 text-xs text-[#6D140E]">
                    <strong>Venue:</strong> Siddha Sudarshan Sakshi Dhaam, 9, Avantika, Chiranjeev Vihar, Ghaziabad.
                  </div>
                  <div className="mt-6 flex flex-col gap-2">
                    <a
                      href={selectedEventForRsvp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#6D140E] py-3 text-xs font-bold uppercase tracking-wider text-white"
                    >
                      View on Official sciencedivine.org Page <ExternalLink className="size-3.5" />
                    </a>
                    <button
                      onClick={closeRsvpModal}
                      className="text-xs text-[#8C7A68] hover:text-[#520F08] py-2"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleRsvpSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#520F08]">
                      Full Name *
                    </label>
                    <div className="relative mt-1">
                      <User className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-[#8C7A68]" />
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Enter your name"
                        className="w-full rounded-xl border border-[#D5AB54]/50 py-2.5 pl-10 pr-3 text-xs focus:border-[#6D140E] focus:outline-none focus:ring-1 focus:ring-[#6D140E]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#520F08]">
                        WhatsApp / Mobile *
                      </label>
                      <div className="relative mt-1">
                        <Phone className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-[#8C7A68]" />
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+91 98..."
                          className="w-full rounded-xl border border-[#D5AB54]/50 py-2.5 pl-10 pr-3 text-xs focus:border-[#6D140E] focus:outline-none focus:ring-1 focus:ring-[#6D140E]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#520F08]">
                        City / Location
                      </label>
                      <div className="relative mt-1">
                        <MapPin className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-[#8C7A68]" />
                        <input
                          type="text"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          placeholder="Ghaziabad / Delhi..."
                          className="w-full rounded-xl border border-[#D5AB54]/50 py-2.5 pl-10 pr-3 text-xs focus:border-[#6D140E] focus:outline-none focus:ring-1 focus:ring-[#6D140E]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#520F08]">
                        Email (Optional)
                      </label>
                      <div className="relative mt-1">
                        <Mail className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-[#8C7A68]" />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="name@email.com"
                          className="w-full rounded-xl border border-[#D5AB54]/50 py-2.5 pl-10 pr-3 text-xs focus:border-[#6D140E] focus:outline-none focus:ring-1 focus:ring-[#6D140E]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#520F08]">
                        Attendees
                      </label>
                      <div className="relative mt-1">
                        <Users className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-[#8C7A68]" />
                        <select
                          value={attendees}
                          onChange={(e) => setAttendees(e.target.value)}
                          className="w-full rounded-xl border border-[#D5AB54]/50 py-2.5 pl-10 pr-3 text-xs focus:border-[#6D140E] focus:outline-none focus:ring-1 focus:ring-[#6D140E] bg-white"
                        >
                          <option value="1">1 Person</option>
                          <option value="2">2 Persons</option>
                          <option value="3">3 Persons</option>
                          <option value="4">4 Persons</option>
                          <option value="5+">5+ (Family/Group)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <p className="text-[11px] text-[#8C7A68] italic">
                    * Free entry &amp; Bhojan Prasad for all registered attendees.
                  </p>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      className="w-full rounded-xl bg-gradient-to-r from-[#6D140E] to-[#911B13] py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:opacity-95"
                    >
                      Confirm Free RSVP
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ── Gallery Zoom Lightbox Modal ── */}
      {selectedGalleryImage && (
        <div
          onClick={() => setSelectedGalleryImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl overflow-hidden rounded-2xl bg-black border border-white/20"
          >
            <button
              onClick={() => setSelectedGalleryImage(null)}
              className="absolute right-4 top-4 z-10 rounded-full bg-black/60 p-2 text-white hover:bg-white/20 transition-colors"
              aria-label="Close"
            >
              <X className="size-5" />
            </button>
            <img
              src={selectedGalleryImage.image}
              alt={selectedGalleryImage.title}
              className="max-h-[75vh] w-full object-contain"
            />
            <div className="bg-[#1a0f0a] p-5 text-white">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-[#F5D280]">
                {selectedGalleryImage.subtitle}
              </p>
              <h4 className="mt-1 font-display text-xl font-semibold">
                {selectedGalleryImage.title}
              </h4>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
