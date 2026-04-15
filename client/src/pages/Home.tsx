/*
 * Genera Software — Landing Page
 * Brand: Teal (#003E45), Gold (#FFA800), Poppins headings, Inter body
 * Hero with laptop dashboard mockup. Rolling "Used by" logo banner. Updated links.
 */
import { Link } from "wouter";
import {
  Users,
  CalendarCheck,
  CreditCard,
  MapPin,
  UserCog,
  HeadphonesIcon,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";

const LAPTOP_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663478487775/BxxxoQYbhf7FnKvPttwktS/laptop-desk-dashboard-final_e79e96d9.png";
const STORY_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663478487775/BxxxoQYbhf7FnKvPttwktS/duncans-woodland_6f11b5ea.jpg";

const APP_URL = "https://app.generasoftware.com/admin";
const DEMO_MAILTO =
  "mailto:info@duncansdogco.com?subject=I'd%20like%20to%20know%20more%20about%20Genera";

const painPoints = [
  {
    title: "Bookings from every direction",
    desc: "Texts, emails, Facebook messages, phone calls. All at once. All day. And somehow you are supposed to keep track of every single one without dropping the ball.",
  },
  {
    title: "Sunday evenings lost to invoicing",
    desc: "Instead of resting, you are hunched over a laptop, raising invoices one by one. Copy, paste, calculate, send. Repeat forty times. Every single week.",
  },
  {
    title: "Pickup logistics that make your head spin",
    desc: "Who is picking up which dog? In what order? Which driver is closest? One missed collection and you have got an unhappy client and a very confused spaniel.",
  },
];

const features = [
  {
    icon: Users,
    title: "Every pet. Every detail. One place.",
    desc: "Stop digging through notebooks and spreadsheets. Breed info, health records, vaccination dates, behavioural notes, emergency contacts. It is all here, instantly, for every pet and every client.",
    iconBg: "bg-gold/15 text-gold-dark",
  },
  {
    icon: CalendarCheck,
    title: "Bookings that run themselves",
    desc: "Your clients book online, 24/7, through their own portal. Recurring slots, capacity limits, and approval controls mean you stay in charge without being chained to your phone.",
    iconBg: "bg-forest/10 text-forest",
  },
  {
    icon: CreditCard,
    title: "Get paid without chasing anyone",
    desc: "Auto-charge cards. Bulk invoicing in one click. Weekly, fortnightly, or monthly billing cycles. Even cancellation charges are handled. No more Sunday evening invoice dread.",
    iconBg: "bg-gold/15 text-gold-dark",
  },
  {
    icon: MapPin,
    title: "Routes planned in minutes, not hours",
    desc: "Drag and drop your daily schedule. Optimise your team's routes. See every dog, every driver, and every stop at a glance. Pickups and drop-offs finally make sense.",
    iconBg: "bg-forest/10 text-forest",
  },
  {
    icon: UserCog,
    title: "Your team, sorted",
    desc: "Shift planning, holiday requests, sick day tracking, payroll-ready records. Managing staff should not be a second full-time job. Now it is not.",
    iconBg: "bg-gold/15 text-gold-dark",
  },
  {
    icon: HeadphonesIcon,
    title: "Support that actually understands",
    desc: "UK-based. GDPR and DEFRA compliant. Cloud-based and always on. We welcome feature requests because we are building this with you, not just for you.",
    iconBg: "bg-forest/10 text-forest",
  },
];

/* Fictional "Used by" logos — rendered as styled text badges */
const usedByLogos = [
  "Paws & Play",
  "Bark & Stride",
  "Wag Walkers",
  "Tail End Daycare",
  "The Dog Lodge",
  "Muddy Paws Co",
  "Happy Hounds HQ",
  "Fetch & Go",
  "Pawsitive Vibes",
  "Walkies Club",
  "Snout & About",
  "Good Boy Daycare",
];

export default function Home() {
  return (
    <Layout>
      {/* ─── HERO — Dark teal ─── */}
      <section className="relative overflow-hidden bg-forest">
        {/* Subtle decorative pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative container py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text */}
            <ScrollReveal direction="left">
              <div className="max-w-xl">
                <p
                  className="text-sm font-semibold text-gold uppercase tracking-widest mb-5"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Pet Business Software
                </p>
                <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.12] text-white">
                  The software that actually{" "}
                  <span className="text-gold">understands</span> your daycare.
                </h1>
                <p className="mt-6 text-lg text-white/70 leading-relaxed">
                  Built by the people behind Duncan's Dog Co. 15 years in the
                  industry, now helping small pet businesses run like they
                  should.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href={APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-7 py-3.5 bg-gold text-forest font-bold rounded-lg hover:bg-gold-dark transition-all duration-200 shadow-md hover:shadow-lg text-sm"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Start Your 3-Month Free Trial
                  </a>
                  <a
                    href={DEMO_MAILTO}
                    className="inline-flex items-center justify-center px-7 py-3.5 border-2 border-white/40 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200 text-sm"
                  >
                    Book a Demo
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Laptop with dashboard */}
            <ScrollReveal direction="right" delay={0.15}>
              <div className="relative">
                <img
                  src={LAPTOP_IMG}
                  alt="Genera Software dashboard on a laptop"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                  loading="eager"
                />
                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg px-5 py-3 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-gold-dark" />
                  </div>
                  <div>
                    <p className="text-xs text-charcoal/50 font-medium">
                      Trusted by
                    </p>
                    <p className="text-sm font-bold text-charcoal">
                      Pet businesses across the UK
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>



      {/* ─── PAIN SECTION ─── */}
      <section className="bg-light-grey">
        <div className="container py-20 lg:py-28">
          <ScrollReveal>
            <div className="max-w-2xl">
              <p
                className="text-sm font-semibold text-gold uppercase tracking-widest mb-3"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Sound familiar?
              </p>
              <h2 className="text-3xl sm:text-4xl text-charcoal leading-tight">
                Running a pet business is hard enough without fighting your own
                systems
              </h2>
              <p className="mt-4 text-charcoal/60 text-lg">
                You did not get into this to spend your evenings on admin. But
                here you are.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-14 grid md:grid-cols-3 gap-8 lg:gap-10">
            {painPoints.map((pain, i) => (
              <ScrollReveal key={i} delay={i * 0.12}>
                <div className="relative pl-6 border-l-2 border-gold/40">
                  <span className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center text-xs font-bold text-gold-dark">
                    {i + 1}
                  </span>
                  <h3 className="text-xl text-charcoal mt-1">{pain.title}</h3>
                  <p className="mt-3 text-charcoal/60 leading-relaxed text-[15px]">
                    {pain.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>



      {/* ─── FEATURES (6 cards) ─── */}
      <section className="bg-light-grey">
        <div className="container py-20 lg:py-28">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p
                className="text-sm font-semibold text-gold uppercase tracking-widest mb-3"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Features
              </p>
              <h2 className="text-3xl sm:text-4xl text-charcoal leading-tight">
                Everything you need to run your pet business
              </h2>
              <p className="mt-4 text-charcoal/60 text-lg">
                Six powerful tools. One simple platform. Zero headaches.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feat, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="group p-7 rounded-xl border border-border bg-white hover:shadow-lg hover:shadow-forest/5 transition-all duration-300 hover:-translate-y-1 h-full">
                  <div
                    className={`w-12 h-12 rounded-lg ${feat.iconBg} flex items-center justify-center mb-5`}
                  >
                    <feat.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl text-forest">{feat.title}</h3>
                  <p className="mt-3 text-charcoal/60 leading-relaxed text-[15px]">
                    {feat.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── USED BY — Animated rolling logo banner ─── */}
      <section className="bg-forest overflow-hidden">
        <div className="container py-14 lg:py-18">
          <ScrollReveal>
            <p
              className="text-center text-sm font-semibold text-gold uppercase tracking-widest mb-10"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Used by pet businesses across the UK
            </p>
          </ScrollReveal>

          {/* Infinite scrolling banner */}
          <div className="relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-forest to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-forest to-transparent z-10" />

            <div className="flex animate-scroll">
              {[...usedByLogos, ...usedByLogos].map((name, i) => (
                <div
                  key={i}
                  className="shrink-0 mx-6 flex items-center justify-center px-8 py-4 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm"
                >
                  <span
                    className="text-white/70 text-sm font-semibold whitespace-nowrap tracking-wide"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── STORY TEASER ─── */}
      <section className="bg-white">
        <div className="container py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="right" delay={0.1}>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={STORY_IMG}
                  alt="Dogs playing at a woodland daycare facility"
                  className="w-full h-auto object-cover"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left">
              <div className="max-w-lg">
                <p
                  className="text-sm font-semibold text-gold uppercase tracking-widest mb-3"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Our Story
                </p>
                <h2 className="text-3xl sm:text-4xl text-charcoal leading-tight">
                  From a dog walking round in South West London to software used
                  by pet businesses across the UK
                </h2>
                <p className="mt-5 text-charcoal/60 text-lg leading-relaxed">
                  Duncan and Jess started walking dogs in 2011. Over 15 years
                  they built one of the longest-standing, five-star licensed
                  doggy daycares in the country. The software they needed did not
                  exist. So they built it.
                </p>
                <Link
                  href="/our-story"
                  className="inline-flex items-center gap-2 mt-6 text-forest font-semibold text-sm hover:gap-3 transition-all duration-200"
                >
                  Read the full story <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA BAND — Dark teal ─── */}
      <section className="relative overflow-hidden bg-forest">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative container py-20 lg:py-24 text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white max-w-3xl mx-auto leading-tight">
              You got into this because you love dogs.{" "}
              <span className="text-gold">Let us handle the rest.</span>
            </h2>
            <p className="mt-5 text-white/70 text-lg max-w-xl mx-auto">
              Start your 3-month free trial today. No credit card required.
              No commitment. Just the tools you need to run your business.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-gold text-forest font-bold rounded-lg hover:bg-gold-dark transition-all duration-200 shadow-lg text-sm"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Start Your 3-Month Free Trial
              </a>
              <a
                href={DEMO_MAILTO}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/40 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200 text-sm"
              >
                Book a Demo
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
