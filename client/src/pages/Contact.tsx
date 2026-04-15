/*
 * Genera Software — Book a Demo / Contact Page
 * Brand: Dark forest green (#0D4A3A), amber-gold (#E8A020), Poppins Bold headings, Inter body
 */
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Thanks! We will be in touch soon.");
  };

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
                Get in Touch
              </p>
              <h1 className="text-4xl sm:text-5xl text-white leading-[1.15]">
                Book a demo. Ask a question. Or just{" "}
                <span className="text-gold">say hello.</span>
              </h1>
              <p className="mt-5 text-lg text-white/70 leading-relaxed">
                We are a small team and we read every message. Whether you want
                a walkthrough of Genera, have a question about pricing, or just
                want to chat about running a pet business, we are here.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="bg-white">
        <div className="container py-16 lg:py-24">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                {submitted ? (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 rounded-full bg-gold/15 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-8 h-8 text-gold-dark" />
                    </div>
                    <h2 className="text-3xl text-charcoal">
                      Thanks for reaching out
                    </h2>
                    <p className="mt-4 text-charcoal/60 text-lg max-w-md mx-auto">
                      We have received your message and will get back to you
                      within one working day. Talk soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">
                          First name
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-border bg-white text-charcoal placeholder:text-charcoal/30 focus:ring-2 focus:ring-forest/20 focus:border-forest transition-colors text-sm"
                          placeholder="Duncan"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">
                          Last name
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-border bg-white text-charcoal placeholder:text-charcoal/30 focus:ring-2 focus:ring-forest/20 focus:border-forest transition-colors text-sm"
                          placeholder="Smith"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">
                        Email address
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-white text-charcoal placeholder:text-charcoal/30 focus:ring-2 focus:ring-forest/20 focus:border-forest transition-colors text-sm"
                        placeholder="duncan@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">
                        Business name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-white text-charcoal placeholder:text-charcoal/30 focus:ring-2 focus:ring-forest/20 focus:border-forest transition-colors text-sm"
                        placeholder="Duncan's Dog Co"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">
                        What type of business do you run?
                      </label>
                      <select
                        className="w-full px-4 py-3 rounded-lg border border-border bg-white text-charcoal focus:ring-2 focus:ring-forest/20 focus:border-forest transition-colors text-sm"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select one
                        </option>
                        <option>Dog daycare</option>
                        <option>Dog walking</option>
                        <option>Pet sitting</option>
                        <option>Kennels / boarding</option>
                        <option>Multiple services</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">
                        How can we help?
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-white text-charcoal placeholder:text-charcoal/30 focus:ring-2 focus:ring-forest/20 focus:border-forest transition-colors text-sm resize-none"
                        placeholder="Tell us a bit about your business and what you are looking for..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gold text-forest font-bold rounded-lg hover:bg-gold-dark transition-all duration-200 shadow-md hover:shadow-lg text-sm w-full sm:w-auto"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                  </form>
                )}
              </ScrollReveal>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <ScrollReveal delay={0.15}>
                <div className="bg-light-grey rounded-2xl p-8 lg:p-10 h-fit">
                  <h3 className="text-2xl text-forest mb-6">
                    Other ways to reach us
                  </h3>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gold/15 flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-gold-dark" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-charcoal">
                          Email
                        </p>
                        <p className="text-sm text-charcoal/60 mt-0.5">
                          info@duncansdogco.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-forest/10 flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-forest" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-charcoal">
                          Phone
                        </p>
                        <p className="text-sm text-charcoal/60 mt-0.5">
                          Available on request
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-forest/10 flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-forest" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-charcoal">
                          Location
                        </p>
                        <p className="text-sm text-charcoal/60 mt-0.5">
                          Surrey, United Kingdom
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-border">
                    <h4 className="text-sm font-semibold text-charcoal mb-3">
                      What happens next?
                    </h4>
                    <ol className="space-y-3">
                      {[
                        "We will reply within one working day",
                        "We will arrange a time for a quick call or demo",
                        "We will walk you through Genera, no pressure",
                      ].map((step, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-forest text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                            {i + 1}
                          </span>
                          <span className="text-sm text-charcoal/60">
                            {step}
                          </span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
