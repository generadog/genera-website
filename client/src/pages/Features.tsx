/*
 * Genera Software — Features Page
 * Brand: Teal #003E45, Gold #FFA800, Poppins headings, Inter body
 * Real product screenshots in browser chrome frames
 */
import {
  Users,
  CalendarCheck,
  CreditCard,
  MapPin,
  UserCog,
  HeadphonesIcon,
  ArrowRight,
  Check,
} from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import BrowserFrame from "@/components/BrowserFrame";

const DASHBOARD_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663478487775/BxxxoQYbhf7FnKvPttwktS/features-dashboard-6CAwNZSpm5Yo37rWiNEtJh.webp";

const SUPPORT_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663478487775/BxxxoQYbhf7FnKvPttwktS/support-compliance-JeKzKHpDAFGQbeaouDFgfh.webp";

/* Screenshot CDN URLs — unaltered originals */
const SCREENSHOTS: Record<string, { src: string; url: string }> = {
  "Client Management": {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663478487775/BxxxoQYbhf7FnKvPttwktS/feature-clients_86423985.webp",
    url: "app.generasoftware.com/pets",
  },
  Bookings: {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663478487775/BxxxoQYbhf7FnKvPttwktS/feature-bookings_0fc67412.webp",
    url: "app.generasoftware.com/bookings",
  },
  Billing: {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663478487775/BxxxoQYbhf7FnKvPttwktS/feature-billing_524653f0.webp",
    url: "app.generasoftware.com/finance",
  },
  Routing: {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663478487775/BxxxoQYbhf7FnKvPttwktS/feature-routing_9dc778bb.webp",
    url: "app.generasoftware.com/routes",
  },
  "Staff Management": {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663478487775/BxxxoQYbhf7FnKvPttwktS/feature-staff_d64b9a5b.webp",
    url: "app.generasoftware.com/team",
  },
};

const featureDetails = [
  {
    icon: Users,
    label: "Client Management",
    title: "Every pet. Every detail. Always at your fingertips.",
    desc: "No more flicking through notebooks or searching old emails. Genera gives every pet a complete profile: breed, weight, health records, vaccination status, behavioural notes, dietary needs, and emergency contacts. Client details sit right alongside. One search and you have everything you need before a dog even walks through the door.",
    bullets: [
      "Complete pet profiles with health and vaccination tracking",
      "Behavioural notes visible to all staff instantly",
      "Client contact details and communication history",
      "Custom fields for anything specific to your business",
    ],
    iconBg: "bg-gold/15 text-gold-dark",
    checkColor: "text-gold-dark",
  },
  {
    icon: CalendarCheck,
    label: "Bookings",
    title: "Bookings that run themselves. Clients that book themselves.",
    desc: "Your clients get their own online portal. They can see availability, book sessions, set up recurring slots, and manage their own schedule. You set the rules: capacity limits, approval controls, blackout dates. The system does the rest. No more texts at 10pm asking if there is space on Thursday.",
    bullets: [
      "24/7 online booking portal for your clients",
      "Recurring bookings with automatic scheduling",
      "Capacity limits and approval controls you set",
      "Instant notifications for new and changed bookings",
    ],
    iconBg: "bg-forest/10 text-forest",
    checkColor: "text-forest",
  },
  {
    icon: CreditCard,
    label: "Billing",
    title: "Get paid on time. Every time. Without lifting a finger.",
    desc: "Set up auto-charges and let Genera collect payments for you. Need to send invoices? Generate them in bulk with one click. Choose weekly, fortnightly, or monthly billing cycles. Handle cancellation charges, late fees, and credits without the spreadsheet gymnastics. Your Sunday evenings are yours again.",
    bullets: [
      "Auto-charge cards on file for seamless payments",
      "Bulk invoicing: dozens of invoices in one click",
      "Flexible billing cycles to match how you work",
      "Cancellation charge and credit management built in",
    ],
    iconBg: "bg-gold/15 text-gold-dark",
    checkColor: "text-gold-dark",
  },
  {
    icon: MapPin,
    label: "Routing",
    title: "Routes planned in minutes. Not scribbled on the back of an envelope.",
    desc: "Drag and drop to build your daily schedule. Genera optimises your team's routes so drivers take the most efficient path. See every dog, every driver, and every stop on a single screen. When plans change mid-morning (and they always do), adjusting is just a drag away.",
    bullets: [
      "Drag-and-drop daily schedule builder",
      "Route optimisation for your whole team",
      "Live overview of all dogs, drivers, and stops",
      "Quick adjustments when plans change on the fly",
    ],
    iconBg: "bg-forest/10 text-forest",
    checkColor: "text-forest",
  },
  {
    icon: UserCog,
    label: "Staff Management",
    title: "Your team, organised. Without the paper trail.",
    desc: "Plan shifts, approve holiday requests, track sick days, and keep payroll-ready records. All in one place. Your staff can see their schedules. You can see who is available. No more WhatsApp groups trying to figure out who is covering Tuesday.",
    bullets: [
      "Visual shift planning and rota management",
      "Holiday request and approval workflow",
      "Sick day tracking with automatic records",
      "Payroll-ready exports when you need them",
    ],
    iconBg: "bg-gold/15 text-gold-dark",
    checkColor: "text-gold-dark",
  },
  {
    icon: HeadphonesIcon,
    label: "Support & Compliance",
    title: "Real support from people who get it. Plus full compliance built in.",
    desc: "Our support team is UK-based and understands the pet care industry. We are fully GDPR and DEFRA compliant, so you can focus on your business without worrying about regulations. Genera is cloud-based, always on, and we actively welcome feature requests. This is software built with you, not just for you.",
    bullets: [
      "UK-based support team who understand your business",
      "Fully GDPR and DEFRA compliant",
      "Cloud-based: access from anywhere, always available",
      "Feature requests welcomed and regularly shipped",
    ],
    iconBg: "bg-forest/10 text-forest",
    checkColor: "text-forest",
  },
];

export default function Features() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-forest relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="container py-20 lg:py-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="left">
              <div className="max-w-xl">
                <p
                  className="text-sm font-semibold text-gold uppercase tracking-widest mb-4"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Features
                </p>
                <h1 className="text-4xl sm:text-5xl text-white leading-[1.15]">
                  Everything you need.{" "}
                  <span className="text-gold">Nothing you do not.</span>
                </h1>
                <p className="mt-6 text-lg text-white/70 leading-relaxed">
                  Genera was built inside a real pet business over many years.
                  Every feature exists because we needed it ourselves. No bloat.
                  No gimmicks. Just the tools that actually make your day easier.
                </p>
                <a
                  href="https://app.generasoftware.com/admin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center mt-8 px-7 py-3.5 bg-gold text-forest font-bold rounded-lg hover:bg-gold-dark transition-all duration-200 shadow-md text-sm"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Start 3-Month Free Trial
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.15}>
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/20">
                <img
                  src={DASHBOARD_IMG}
                  alt="Genera Software dashboard"
                  className="w-full h-auto object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Feature Details */}
      {featureDetails.map((feat, i) => {
        const isEven = i % 2 === 0;
        const screenshot = SCREENSHOTS[feat.label];
        const isSupport = feat.label === "Support & Compliance";

        return (
          <section
            key={i}
            className={i % 2 === 0 ? "bg-white" : "bg-light-grey"}
          >
            <div className="container py-20 lg:py-24">
              <div
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  !isEven ? "lg:[direction:rtl]" : ""
                }`}
              >
                {/* Content */}
                <ScrollReveal
                  direction={isEven ? "left" : "right"}
                  className={!isEven ? "lg:[direction:ltr]" : ""}
                >
                  <div className="max-w-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`w-10 h-10 rounded-lg ${feat.iconBg} flex items-center justify-center`}
                      >
                        <feat.icon className="w-5 h-5" />
                      </div>
                      <span
                        className="text-sm font-semibold text-gold uppercase tracking-widest"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {feat.label}
                      </span>
                    </div>
                    <h2 className="text-3xl sm:text-[2.1rem] text-forest leading-tight">
                      {feat.title}
                    </h2>
                    <p className="mt-5 text-charcoal/60 leading-relaxed">
                      {feat.desc}
                    </p>
                    <ul className="mt-6 space-y-3">
                      {feat.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <Check
                            className={`w-5 h-5 mt-0.5 shrink-0 ${feat.checkColor}`}
                          />
                          <span className="text-charcoal/70 text-[15px]">
                            {b}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>

                {/* Visual — Browser frame with real screenshot, or illustration for Support */}
                <ScrollReveal
                  direction={isEven ? "right" : "left"}
                  delay={0.1}
                  className={!isEven ? "lg:[direction:ltr]" : ""}
                >
                  {isSupport ? (
                    <div className="max-w-[680px] mx-auto">
                      <img
                        src={SUPPORT_IMG}
                        alt="Support and compliance illustration"
                        className="w-full h-auto rounded-2xl"
                        loading="lazy"
                      />
                    </div>
                  ) : screenshot ? (
                    <div className="max-w-[680px] mx-auto">
                      <BrowserFrame
                        src={screenshot.src}
                        alt={`${feat.label} — Genera Software`}
                        url={screenshot.url}
                      />
                    </div>
                  ) : null}
                </ScrollReveal>
              </div>
            </div>
          </section>
        );
      })}

      {/* Bottom CTA */}
      <section className="bg-forest relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="container py-16 lg:py-20 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl text-white max-w-2xl mx-auto leading-tight">
              Ready to see how Genera fits your business?
            </h2>
            <p className="mt-4 text-white/70 text-lg max-w-xl mx-auto">
              Start your 3-month free trial or book a walkthrough with our team.
              No pressure. No hard sell. Just a conversation.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="https://app.generasoftware.com/admin"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-gold text-forest font-bold rounded-lg hover:bg-gold-dark transition-all duration-200 shadow-lg text-sm"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Start 3-Month Free Trial
              </a>
              <a
                href="mailto:info@duncansdogco.com?subject=I'd%20like%20to%20know%20more%20about%20Genera"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/40 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200 text-sm"
              >
                Book a Demo <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
