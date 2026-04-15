/*
 * Genera Software — Pricing Page
 * Brand: Dark forest green (#0D4A3A), amber-gold (#E8A020), Poppins Bold headings, Inter body
 * Three tiers: Starter, Growth, Pro
 */
import { Link } from "wouter";
import { Check, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";

const tiers = [
  {
    name: "Starter",
    price: "29",
    desc: "For solo dog walkers and small pet sitters getting organised.",
    features: [
      "Up to 30 active pets",
      "Online booking portal",
      "Client and pet profiles",
      "Basic invoicing",
      "Email support",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "59",
    desc: "For growing daycares and walking businesses ready to scale.",
    features: [
      "Unlimited active pets",
      "Online booking portal",
      "Client and pet profiles",
      "Auto-billing and bulk invoicing",
      "Route planning and optimisation",
      "Staff management",
      "Priority UK support",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Pro",
    price: "99",
    desc: "For established businesses with multiple locations or large teams.",
    features: [
      "Everything in Growth",
      "Multi-location support",
      "Advanced reporting",
      "Custom integrations",
      "Dedicated account manager",
      "Onboarding and training",
      "Phone support",
    ],
    cta: "Book a Demo",
    highlighted: false,
  },
];

const faqs = [
  {
    q: "Is there a free trial?",
    a: "Yes. Every plan comes with a 14-day free trial. No credit card required. Just sign up and start using Genera straight away.",
  },
  {
    q: "Can I change plans later?",
    a: "Absolutely. You can upgrade or downgrade at any time. Changes take effect at the start of your next billing cycle.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit and debit cards. Invoicing is available for Pro plans.",
  },
  {
    q: "Is my data safe?",
    a: "Yes. Genera is fully GDPR compliant, cloud-based, and backed up daily. Your data is encrypted and stored securely in the UK.",
  },
  {
    q: "Do you offer discounts for annual billing?",
    a: "Yes. Annual plans come with two months free. Get in touch and we will set it up for you.",
  },
  {
    q: "What if I need help getting started?",
    a: "Our UK-based support team is here to help. We offer onboarding calls, documentation, and ongoing support to make sure you get the most out of Genera.",
  },
];

export default function Pricing() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-forest">
        <div className="container py-20 lg:py-28 text-center">
          <ScrollReveal>
            <p
              className="text-sm font-semibold text-gold uppercase tracking-widest mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Pricing
            </p>
            <h1 className="text-4xl sm:text-5xl text-white leading-[1.15] max-w-2xl mx-auto">
              Simple pricing. <span className="text-gold">No surprises.</span>
            </h1>
            <p className="mt-5 text-lg text-white/70 max-w-xl mx-auto leading-relaxed">
              Every plan includes a 14-day free trial. No credit card required.
              Pick the plan that fits your business and start saving time today.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="bg-white">
        <div className="container py-4 lg:py-8 -mt-8">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {tiers.map((tier, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div
                  className={`relative rounded-2xl p-8 h-full flex flex-col ${
                    tier.highlighted
                      ? "bg-forest text-white shadow-xl shadow-forest/20 ring-2 ring-gold"
                      : "bg-white border border-border shadow-sm"
                  }`}
                >
                  {tier.highlighted && (
                    <span
                      className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-forest text-xs font-bold px-4 py-1 rounded-full"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      Most Popular
                    </span>
                  )}
                  <div>
                    <h3
                      className={`text-lg font-bold ${
                        tier.highlighted ? "text-white" : "text-forest"
                      }`}
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {tier.name}
                    </h3>
                    <div className="mt-4 flex items-baseline gap-1">
                      <span className="text-sm font-medium opacity-70">
                        &pound;
                      </span>
                      <span
                        className={`text-5xl ${
                          tier.highlighted ? "text-white" : "text-forest"
                        }`}
                        style={{ fontFamily: "var(--font-heading)", fontWeight: 800 }}
                      >
                        {tier.price}
                      </span>
                      <span className="text-sm opacity-60">/month</span>
                    </div>
                    <p
                      className={`mt-3 text-sm leading-relaxed ${
                        tier.highlighted ? "text-white/70" : "text-charcoal/60"
                      }`}
                    >
                      {tier.desc}
                    </p>
                  </div>

                  <ul className="mt-8 space-y-3 flex-1">
                    {tier.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <Check
                          className={`w-4 h-4 mt-0.5 shrink-0 ${
                            tier.highlighted ? "text-gold" : "text-gold-dark"
                          }`}
                        />
                        <span
                          className={`text-sm ${
                            tier.highlighted
                              ? "text-white/90"
                              : "text-charcoal/70"
                          }`}
                        >
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`mt-8 inline-flex items-center justify-center w-full py-3 rounded-lg font-bold text-sm transition-all duration-200 ${
                      tier.highlighted
                        ? "bg-gold text-forest hover:bg-gold-dark shadow-md"
                        : "bg-forest text-white hover:bg-forest-light shadow-sm"
                    }`}
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {tier.cta}
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-light-grey">
        <div className="container py-20 lg:py-28">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p
                className="text-sm font-semibold text-gold uppercase tracking-widest mb-3"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                FAQ
              </p>
              <h2 className="text-3xl sm:text-4xl text-charcoal">
                Common questions
              </h2>
            </div>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto grid gap-6">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg text-forest">{faq.q}</h3>
                  <p className="mt-2 text-charcoal/60 text-[15px] leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest">
        <div className="container py-16 lg:py-20 text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl text-white max-w-2xl mx-auto leading-tight">
              Not sure which plan is right?
            </h2>
            <p className="mt-4 text-white/70 text-lg max-w-xl mx-auto">
              Book a quick call and we will help you figure it out. No pressure.
              No hard sell. Just honest advice.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-gold text-forest font-bold rounded-lg hover:bg-gold-dark transition-all duration-200 shadow-lg text-sm"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Book a Demo <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
