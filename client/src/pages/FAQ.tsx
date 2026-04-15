/*
 * Genera Software — FAQ Page
 * Brand: Teal (#003E45), Gold (#FFA800), Poppins headings, Inter body
 */
import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";

const APP_URL = "https://app.generasoftware.com/admin";
const DEMO_MAILTO =
  "mailto:info@duncansdogco.com?subject=I'd%20like%20to%20know%20more%20about%20Genera";

const faqs = [
  {
    q: "Is Genera really free?",
    a: "Genera offers a generous 3-month free trial with full access to every feature — no credit card required, no hidden charges. After your trial, pricing is simple and transparent. We believe every pet business deserves great software, and we want you to experience the full platform before you commit to anything.",
  },
  {
    q: "What features are included?",
    a: "Everything: bookings, client management, pet records, invoicing, route planning, staff management, and more. All features are included from the start — there are no locked tiers or premium upgrades. You get the full platform.",
  },
  {
    q: "Is my data safe?",
    a: "Absolutely. Genera is fully GDPR compliant and uses enterprise-grade encryption to protect your data. Everything is stored securely in the cloud with regular backups. We take data security as seriously as you take the dogs in your care.",
  },
  {
    q: "Can I import my existing data?",
    a: "Yes. We can help you migrate your existing client and pet data into Genera. Whether you are coming from spreadsheets, another system, or paper records, just get in touch and we will walk you through the process step by step.",
  },
  {
    q: "Do I need to download anything?",
    a: "No. Genera is fully cloud-based. You can access it from any device with a web browser — desktop, laptop, tablet, or phone. There is nothing to install, no updates to manage, and no compatibility issues to worry about.",
  },
  {
    q: "Is there a limit on how many pets or clients I can add?",
    a: "No limits at all. Add as many pets, clients, bookings, and staff members as you need. Whether you are a solo dog walker with 10 clients or a daycare with 200, Genera scales with you.",
  },
  {
    q: "What if I need help?",
    a: "Our UK-based support team is here for you. Email us anytime at info@duncansdogco.com and we will get back to you within one working day. We also welcome feature requests — we are building Genera with the industry, not just for it.",
  },
  {
    q: "How is Genera different from other pet business software?",
    a: "Genera was built inside a real pet business — Duncan's Dog Co — over 15 years. Every feature exists because we needed it ourselves. We are the only DEFRA-approved pet software in the UK, and we offer a generous 3-month free trial so you can experience the full platform before committing. No other platform can say that.",
  },
  {
    q: "Can my clients book online?",
    a: "Yes. Genera includes a client-facing booking portal where your customers can view availability, book sessions, and manage their own details — 24/7. You set the capacity limits and approval rules, so you stay in control.",
  },
  {
    q: "Does Genera handle invoicing?",
    a: "Yes. You can generate invoices in bulk, set up recurring billing cycles (weekly, fortnightly, or monthly), auto-charge cards, and send automatic payment reminders. No more Sunday evening invoice dread.",
  },
];

function FAQItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="text-lg font-semibold text-charcoal group-hover:text-forest transition-colors pr-4">
          {faq.q}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-charcoal/40 shrink-0 transition-transform duration-300 ${
            open ? "rotate-180 text-gold" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 pb-6" : "max-h-0"
        }`}
      >
        <p className="text-charcoal/60 leading-relaxed text-[15px] pr-8">
          {faq.a}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-forest">
        <div className="container py-20 lg:py-28">
          <ScrollReveal>
            <div className="max-w-2xl">
              <p
                className="text-sm font-semibold text-gold uppercase tracking-widest mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Frequently Asked Questions
              </p>
              <h1 className="text-4xl sm:text-5xl text-white leading-[1.15]">
                Everything you need to know about{" "}
                <span className="text-gold">Genera</span>
              </h1>
              <p className="mt-5 text-lg text-white/70 leading-relaxed">
                Got questions? We have got answers. If you cannot find what you
                are looking for, drop us an email and we will get back to you
                within one working day.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="bg-white">
        <div className="container py-16 lg:py-24">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="border border-border rounded-2xl px-8 lg:px-10">
                {faqs.map((faq, i) => (
                  <FAQItem key={i} faq={faq} index={i} />
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Still have questions CTA */}
      <section className="bg-light-grey">
        <div className="container py-16 lg:py-20">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl text-charcoal leading-tight">
                Still have questions?
              </h2>
              <p className="mt-4 text-charcoal/60 text-lg">
                We are a small team and we read every message. Get in touch and
                we will help you figure out if Genera is right for your
                business.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gold text-forest font-bold rounded-lg hover:bg-gold-dark transition-all duration-200 shadow-md text-sm"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Start 3-Month Free Trial
                </a>
                <a
                  href={DEMO_MAILTO}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-forest text-white font-semibold rounded-lg hover:bg-forest/90 transition-all duration-200 text-sm"
                >
                  Email Us <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
