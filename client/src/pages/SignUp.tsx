/*
 * Genera Software — Sign Up Page
 * Brand: Teal (#003E45), Gold (#FFA800), Poppins headings, Inter body
 * Redirects to the app but also shows benefits
 */
import { ArrowRight, CheckCircle2, Zap, Shield, Users } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";

const APP_URL = "https://app.generasoftware.com/admin";

const benefits = [
  {
    icon: Zap,
    title: "Up and running in minutes",
    desc: "No complicated setup. No downloads. Just sign up and start using Genera straight away.",
  },
  {
    icon: Shield,
    title: "3 months free. No strings.",
    desc: "No credit card required. Full access to every feature for 3 months. Experience the platform before you commit to anything.",
  },
  {
    icon: Users,
    title: "Built by people like you",
    desc: "Genera was built inside a real pet business. Every feature exists because we needed it ourselves.",
  },
];

const included = [
  "Unlimited pets and clients",
  "Online booking portal",
  "Automated invoicing",
  "Route planning",
  "Staff management",
  "Client communication",
  "Pet health records",
  "DEFRA compliance tools",
  "UK-based support",
  "Regular feature updates",
];

export default function SignUp() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-forest">
        <div className="container py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="max-w-xl">
                <p
                  className="text-sm font-semibold text-gold uppercase tracking-widest mb-5"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Get Started
                </p>
                <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.12] text-white">
                  Start your{" "}
                  <span className="text-gold">3-month free trial</span> today
                </h1>
                <p className="mt-6 text-lg text-white/70 leading-relaxed">
                  No credit card required. No commitment. Sign up in under
                  two minutes and get 3 months of full access to every feature
                  Genera has to offer.
                </p>
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-gold text-forest font-bold rounded-lg hover:bg-gold-dark transition-all duration-200 shadow-lg text-sm"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Start Your 3-Month Free Trial <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.15}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-white/10">
                <h3 className="text-xl text-white mb-6">
                  Everything included, no limits
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {included.map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                      <span className="text-white/80 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white">
        <div className="container py-16 lg:py-24">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-3xl sm:text-4xl text-charcoal leading-tight">
                Why pet businesses choose Genera
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {benefits.map((b, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="text-center p-8">
                  <div className="w-14 h-14 rounded-xl bg-gold/15 flex items-center justify-center mx-auto mb-5">
                    <b.icon className="w-7 h-7 text-gold-dark" />
                  </div>
                  <h3 className="text-xl text-forest mb-3">{b.title}</h3>
                  <p className="text-charcoal/60 leading-relaxed text-[15px]">
                    {b.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-light-grey">
        <div className="container py-16 lg:py-20">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl text-charcoal leading-tight">
                Ready to get started?
              </h2>
              <p className="mt-4 text-charcoal/60 text-lg">
                It takes less than two minutes to start your 3-month free
                trial. No credit card, no commitment, no strings attached.
              </p>
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-gold text-forest font-bold rounded-lg hover:bg-gold-dark transition-all duration-200 shadow-md text-sm"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Start Free Trial <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
