/*
 * Genera Software — Our Story Page
 * Brand: Dark forest green (#0D4A3A), amber-gold (#E8A020), Poppins Bold headings, Inter body
 * Narrative scroll layout, warm first-person tone
 */
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";

const STORY_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663478487775/BxxxoQYbhf7FnKvPttwktS/duncans-woodland_6f11b5ea.jpg";
const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663478487775/BxxxoQYbhf7FnKvPttwktS/duncans-woodland_6f11b5ea.jpg";

const APP_URL = "https://app.generasoftware.com/admin";
const DEMO_MAILTO =
  "mailto:info@duncansdogco.com?subject=I'd%20like%20to%20know%20more%20about%20Genera";

export default function OurStory() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-forest">
        <div className="container py-20 lg:py-28">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p
                className="text-sm font-semibold text-gold uppercase tracking-widest mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                How It Started
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] text-white leading-[1.15]">
                We did not set out to build software. We set out to{" "}
                <span className="text-gold">walk dogs.</span>
              </h1>
              <p className="mt-6 text-lg text-white/70 leading-relaxed">
                The story of how a dog walking round in South West London turned
                into software used by pet businesses across the UK.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Story Image */}
      <section className="bg-white">
        <div className="container py-0">
          <ScrollReveal>
            <div className="rounded-2xl overflow-hidden shadow-xl -mt-4 lg:-mt-8">
              <img
                src={STORY_IMG}
                alt="Duncan's Dog Co woodland facility in Surrey"
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Story Content */}
      <section className="bg-white">
        <div className="container py-16 lg:py-24">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl text-forest mb-6">
                  It started with a handful of leads and a lot of heart
                </h2>
                <p className="text-charcoal/70 text-lg leading-[1.8] mb-6">
                  In 2011, Duncan and Jess started Duncan's Dog Co as a dog
                  walking service in South West London. It was just the two of
                  them and a growing list of dogs who needed looking
                  after during the day.
                </p>
                <p className="text-charcoal/70 text-lg leading-[1.8] mb-6">
                  The business grew quickly. What started as a handful of walks
                  turned into a full schedule. Then clients started asking about
                  daycare. Then boarding. Before long, Duncan and Jess were
                  running one of the busiest independent pet care businesses in
                  the area.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="my-12 lg:my-16 pl-6 border-l-4 border-gold/40">
                <p className="text-2xl sm:text-3xl text-forest leading-snug italic" style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>
                  "We were running everything on spreadsheets and manual
                  invoices. It worked until it did not."
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <h2 className="text-3xl text-forest mb-6">
                  Growing pains
                </h2>
                <p className="text-charcoal/70 text-lg leading-[1.8] mb-6">
                  Over the years, Duncan's Dog Co grew into one of the
                  longest-standing, five-star licensed doggy daycares in the UK.
                  They moved to a beautiful woodland facility in Surrey. The
                  team grew. The client list grew. And the admin grew with it.
                </p>
                <p className="text-charcoal/70 text-lg leading-[1.8] mb-6">
                  Bookings came in by text, email, phone, and Facebook. Invoices
                  were raised manually, one by one, every week. Routes were
                  planned on paper. Staff schedules lived in WhatsApp groups. It
                  all sort of worked. Until it did not.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="my-12 lg:my-16 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={HERO_IMG}
                  alt="Dogs playing in the woodland daycare"
                  className="w-full h-[250px] sm:h-[350px] object-cover"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <h2 className="text-3xl text-forest mb-6">
                  The missed booking
                </h2>
                <p className="text-charcoal/70 text-lg leading-[1.8] mb-6">
                  One day, a loyal customer's pickup was missed. A booking had
                  slipped through the cracks. It was the kind of thing that
                  happens when you are juggling too many systems and not enough
                  hours. It was embarrassing. It was avoidable. And it was the
                  moment everything changed.
                </p>
                <p className="text-charcoal/70 text-lg leading-[1.8] mb-6">
                  That customer happened to be a developer. Instead of leaving a
                  bad review, he said something unexpected: "I will build you
                  something."
                </p>
                <p className="text-charcoal/70 text-lg leading-[1.8] mb-6">
                  And he did.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="my-12 lg:my-16 pl-6 border-l-4 border-forest/30">
                <p className="text-2xl sm:text-3xl text-forest leading-snug italic" style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>
                  "Instead of leaving a bad review, he said: I will build you
                  something."
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <h2 className="text-3xl text-forest mb-6">
                  From prototype to platform
                </h2>
                <p className="text-charcoal/70 text-lg leading-[1.8] mb-6">
                  That first version was rough. But it worked. Bookings stopped
                  falling through. Invoices went out on time. Routes made sense.
                  Over the following years, the software was refined, rebuilt,
                  and improved. Every feature was tested in a real business,
                  every day, by real people.
                </p>
                <p className="text-charcoal/70 text-lg leading-[1.8] mb-6">
                  It was not built in a lab by people guessing what pet
                  businesses need. It was built in the mud, in the woods, at the
                  front desk, and on those late Sunday evenings that used to be
                  spent on invoices.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <h2 className="text-3xl text-forest mb-6">
                  Sharing it with the industry
                </h2>
                <p className="text-charcoal/70 text-lg leading-[1.8] mb-6">
                  After years of running Genera internally, Duncan and Jess
                  realised something. Every small pet business they spoke to was
                  fighting the same battles. The same spreadsheets. The same
                  missed messages. The same Sunday evening dread.
                </p>
                <p className="text-charcoal/70 text-lg leading-[1.8] mb-6">
                  They decided to share it. Not as some corporate product launch,
                  but as one small business helping others. That is why Genera
                  exists. It is software built by people who have been up
                  at 7am with muddy boots, chased late invoices, and stayed up
                  planning the next day's schedule.
                </p>
                <p className="text-charcoal/70 text-lg leading-[1.8] mb-6">
                  We have been where you are. And we built the thing we wish we
                  had from the start.
                </p>
              </div>
            </ScrollReveal>

            {/* Timeline */}
            <ScrollReveal>
              <div className="mt-16 lg:mt-20">
                <h2 className="text-3xl text-forest mb-10 text-center">
                  The journey so far
                </h2>
                <div className="relative">
                  <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-border sm:-translate-x-px" />
                  {[
                    {
                      year: "2011",
                      text: "Duncan and Jess start Duncan's Dog Co as a dog walking service in South West London.",
                    },
                    {
                      year: "2013",
                      text: "The business expands into full daycare services as demand grows.",
                    },
                    {
                      year: "2016",
                      text: "Move to a beautiful woodland facility in Surrey. The team grows significantly.",
                    },
                    {
                      year: "2018",
                      text: "The missed booking. A loyal customer (and developer) offers to build a solution.",
                    },
                    {
                      year: "2019",
                      text: "The first prototype of Genera goes live at Duncan's Dog Co.",
                    },
                    {
                      year: "2022",
                      text: "After years of refinement, Genera is opened up to other pet businesses.",
                    },
                    {
                      year: "Today",
                      text: "Genera is used by pet businesses across the UK. And we are just getting started.",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={`relative flex items-start gap-6 mb-10 last:mb-0 ${
                        i % 2 === 0
                          ? "sm:flex-row"
                          : "sm:flex-row-reverse sm:text-right"
                      }`}
                    >
                      <div className="hidden sm:block sm:w-1/2" />
                      <div className="absolute left-4 sm:left-1/2 w-3 h-3 rounded-full bg-gold border-2 border-white shadow-sm -translate-x-1.5 sm:-translate-x-1.5 mt-1.5" />
                      <div className="pl-10 sm:pl-0 sm:w-1/2 sm:px-8">
                        <span className="text-sm font-bold text-gold-dark">
                          {item.year}
                        </span>
                        <p className="mt-1 text-charcoal/70 text-[15px] leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest">
        <div className="container py-16 lg:py-20 text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl text-white max-w-2xl mx-auto leading-tight">
              We built Genera for businesses{" "}
              <span className="text-gold">like yours</span>
            </h2>
            <p className="mt-4 text-white/70 text-lg max-w-xl mx-auto">
              See how it can help you spend less time on admin and more time
              doing what you love.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-forest font-bold rounded-lg hover:bg-gold-dark transition-all duration-200 shadow-lg text-sm"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Start 3-Month Free Trial <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={DEMO_MAILTO}
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/40 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200 text-sm"
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
