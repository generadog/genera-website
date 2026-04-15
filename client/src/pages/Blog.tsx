/*
 * Genera Software — Blog Page
 * Brand: Teal (#003E45), Gold (#FFA800), Poppins headings, Inter body
 */
import { Link } from "wouter";
import { ArrowRight, Clock, User } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";

const blogPosts = [
  {
    slug: "xero-integration",
    title: "Make Running Your Dog Daycare Easier with Xero Integration",
    excerpt:
      "Running a dog daycare or walking business is hard work. Between keeping every dog happy and managing the day-to-day jobs, there is not much time left for paperwork. If you are still doing invoices by hand, chasing payments, or trying to make sense of endless spreadsheets, there is an easier way.",
    author: "Jess",
    date: "Nov 28, 2025",
    readTime: "3 min read",
    category: "Integrations",
  },
  {
    slug: "non-live-booking-risk",
    title:
      "Never Forget a Dog Again: Why Non-Live Booking Systems Create Real Risk",
    excerpt:
      "Forgetting a dog does not usually come from neglect. It comes from bad systems. If your bookings are not live, if information sits in WhatsApp messages, if paper registers get lost — you are already working in a setup where human error is guaranteed.",
    author: "Jess",
    date: "Nov 27, 2025",
    readTime: "2 min read",
    category: "Industry",
  },
  {
    slug: "transport-times",
    title:
      "Recent Press Concerns Raise Important Questions About Dog Daycare Transport Times",
    excerpt:
      "Recent coverage in the media has highlighted concerns around dogs spending excessive time in vans before arriving at daycare. Long, inefficient, or poorly managed transport routes can compromise welfare. This conversation is important — and it is overdue.",
    author: "Jess",
    date: "Nov 24, 2025",
    readTime: "3 min read",
    category: "Welfare",
  },
  {
    slug: "crate-conversation",
    title: "The Crate Conversation the Dog World Needs to Have",
    excerpt:
      "Dog crates spark strong opinions — some see them as helpful tools, while others worry about cruelty. The key is how they are used. When done right, crates offer security and structure; when misused, they can cause stress.",
    author: "Jess",
    date: "Nov 21, 2025",
    readTime: "1 min read",
    category: "Welfare",
  },
];

export default function Blog() {
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
                Blog
              </p>
              <h1 className="text-4xl sm:text-5xl text-white leading-[1.15]">
                Insights from the{" "}
                <span className="text-gold">front line</span> of pet care
              </h1>
              <p className="mt-5 text-lg text-white/70 leading-relaxed">
                Practical advice, industry commentary, and lessons learned from
                15 years of running a real pet business.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="bg-white">
        <div className="container py-16 lg:py-24">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {blogPosts.map((post, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <Link href={`/blog/${post.slug}`}>
                  <article className="group h-full border border-border rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-forest/5 transition-all duration-300 hover:-translate-y-1 bg-white">
                    {/* Category bar */}
                    <div className="bg-forest px-6 py-3">
                      <span className="text-xs font-semibold text-gold uppercase tracking-wider">
                        {post.category}
                      </span>
                    </div>

                    <div className="p-7 lg:p-8 flex flex-col h-full">
                      <h2 className="text-xl lg:text-2xl text-charcoal group-hover:text-forest transition-colors leading-snug">
                        {post.title}
                      </h2>
                      <p className="mt-4 text-charcoal/60 leading-relaxed text-[15px] flex-1">
                        {post.excerpt}
                      </p>

                      <div className="mt-6 pt-5 border-t border-border flex items-center justify-between">
                        <div className="flex items-center gap-4 text-xs text-charcoal/50">
                          <span className="flex items-center gap-1.5">
                            <User className="w-3.5 h-3.5" />
                            {post.author}
                          </span>
                          <span>{post.date}</span>
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5" />
                            {post.readTime}
                          </span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </article>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-light-grey">
        <div className="container py-16 lg:py-20">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl text-charcoal leading-tight">
                Want to see Genera in action?
              </h2>
              <p className="mt-4 text-charcoal/60 text-lg">
                Start your 3-month free trial today and see how Genera can transform the
                way you run your pet business.
              </p>
              <a
                href="https://app.generasoftware.com/admin"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-gold text-forest font-bold rounded-lg hover:bg-gold-dark transition-all duration-200 shadow-md text-sm"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Start 3-Month Free Trial <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
