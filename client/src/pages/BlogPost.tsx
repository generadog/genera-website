/*
 * Genera Software — Individual Blog Post Page
 * Brand: Teal (#003E45), Gold (#FFA800), Poppins headings, Inter body
 */
import { Link, useParams } from "wouter";
import { ArrowLeft, ArrowRight, Clock, User } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";

const APP_URL = "https://app.generasoftware.com/admin";

interface BlogData {
  title: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  content: string[];
}

const blogData: Record<string, BlogData> = {
  "xero-integration": {
    title: "Make Running Your Dog Daycare Easier with Xero Integration",
    author: "Jess",
    date: "Nov 28, 2025",
    readTime: "3 min read",
    category: "Integrations",
    content: [
      "Running a dog daycare or walking business is hard work. Between keeping every dog happy and managing the day-to-day jobs, there is not much time left for paperwork. If you are still doing invoices by hand, chasing payments, or trying to make sense of endless spreadsheets, there is an easier way.",
      "Xero can help you keep your finances in order without the stress. It links up with the tools you already use, sorts out your bookkeeping automatically, and gives you a clear picture of where your business stands — all in one place.",
      "## Why It Makes a Difference",
      "Most small dog daycares and walkers do not start their business because they love numbers. You do it because you love dogs. But staying on top of the money side is what keeps things running smoothly.",
      "Using Xero with a few simple integrations can save hours every week that you would usually spend on admin, stop errors from happening with automatic updates, show you exactly how your business is doing in real time, and help you plan ahead with proper financial insight.",
      "Once you have got things automated, you can spend less time in front of a screen and more time out with the dogs.",
      "## Easy Payments with Stripe or Square",
      "Taking payments should be quick and simple. By linking Xero with Stripe or Square, you can take payments online or in person and have everything recorded automatically. No more chasing invoices or typing things in twice. Every payment goes straight into your accounts, ready to be reconciled.",
      "You will get real-time tracking of what has been paid and what has not, automatic receipts and records, and fewer admin mistakes. If you sell extras like treats, accessories, or training sessions, it will handle those too.",
      "## Simple Invoicing and Reports",
      "Invoices are one of the biggest time-wasters for small businesses. With Xero, you can set them up once and let the system handle the rest. Set up repeat invoices for regular clients, send automatic reminders for late payments, and keep everything professional and consistent.",
      "You will also get reports that actually make sense — things like which services earn you the most, when your busiest months are, and how your cash flow looks. It is an easy way to see what is working and what might need a tweak.",
      "## Why It Is Worth Doing",
      "Xero is not just about fancy accounting. It is about giving you back your time. When things are automated, you get fewer evenings spent doing admin, a clearer view of what you are earning, more time with the dogs, and less stress about money and paperwork.",
      "Your business runs best when you can focus on the dogs, not the admin. Start small, get organised, and let the tech do the boring bits for you.",
    ],
  },
  "non-live-booking-risk": {
    title:
      "Never Forget a Dog Again: Why Non-Live Booking Systems Create Real Risk",
    author: "Jess",
    date: "Nov 27, 2025",
    readTime: "2 min read",
    category: "Industry",
    content: [
      "Forgetting a dog does not usually come from neglect. It comes from bad systems.",
      "If your bookings are not live. If information sits in WhatsApp messages. If paper registers get lost. If your routes are built on screenshots and memory — you are already working in a setup where human error is guaranteed. The danger is not the staff. It is the systems they are forced to use.",
      "## Where Mistakes Start",
      "Most problems happen because the information is not live or central: bookings sent in messages and not logged, cancellations lost in chats, last-minute changes not shared with the team, staff looking at outdated versions of registers, multiple lists for the same day, different apps holding different bits of information, routes built from memory instead of live data, and no real-time headcount to match the bookings.",
      "When information sits in separate places, the risk grows. You cannot work safely when the system relies on humans remembering everything.",
      "## The Real Cause: Disconnected Tools",
      "Daycares try to run operations with paper registers, WhatsApp groups, spreadsheets, notes on phones, individual staff remembering who is in today, paper route sheets, booking apps that do not update in real time, and systems that cannot sync staff, vans, or changes. This is where forgotten dogs happen.",
      "When bookings are not live, one missed update equals one missed dog.",
      "## What a Live System Prevents",
      "A real-time system removes the risk: live bookings, instant updates across all staff, cancelled dogs removed automatically, grooms and extras attached to the same booking, live route lists updated the second something changes, automatic check-in and check-out, visible headcounts all day, and alerts when a dog has not been collected or dropped off.",
      "When everything updates in the same place, human error drops to near zero.",
      "## The Bottom Line",
      "You stop forgetting dogs by fixing one thing: your information flow. Not by working harder. Not by adding more steps. Not by blaming staff. You remove risk when bookings are live, registers are live, routes are live, changes update instantly, everyone sees the same information, and nothing sits in messages or paper notes.",
      "Start by replacing one disconnected tool this week. You will feel the difference immediately.",
    ],
  },
  "transport-times": {
    title:
      "Recent Press Concerns Raise Important Questions About Dog Daycare Transport Times",
    author: "Jess",
    date: "Nov 24, 2025",
    readTime: "3 min read",
    category: "Welfare",
    content: [
      "Recent coverage in the media has highlighted concerns around dogs spending excessive time in vans before arriving at daycare. Without naming any business, the story made it clear: long, inefficient, or poorly managed transport routes can compromise welfare.",
      "This has put doggy daycares under growing scrutiny regarding transparency around collection routes, the number of dogs per van, how long dogs are in crates, vehicle ventilation and temperature, safe separation and supervision, and the balance between coverage area and welfare.",
      "This conversation is important — and it is overdue.",
      "## Why Travel Time Matters for Daycares",
      "Transport is not just about distance. It is about the order of pickups, traffic flow, school runs and rush hours, dog temperament and crate training, how many stops the driver makes, how quickly dogs load and settle, and whether dogs travel individually or in groups.",
      "Even a short distance can become a long journey with multiple stops. It is not about promising fast collections. It is about managing collections well.",
      "## What Well-Managed Transport Actually Looks Like",
      "A responsible daycare focuses on safe crate setup with ventilation, size, cleanliness, bedding, and separation. Realistic route planning that reflects the number of dogs, local roads, and the behaviour needs of the dogs being collected. Avoiding unnecessary delays so dogs are loaded calmly but efficiently. Monitoring welfare throughout the journey including heat, stress indicators, motion sickness, and noise levels. And transparent communication with owners — clear expectations, clear boundaries, clear collection windows.",
      "## How the Industry Is Adapting",
      "Across the UK, we are seeing more daycares reviewing their collection areas, reducing the number of dogs per route where needed, creating more structured pickup rounds, improving training for drivers and handlers, investing in better ventilated or temperature-controlled vehicles, shifting to smaller and smarter collection zones, and using technology to plan routes and reduce time in transit.",
      "The press has created a necessary push toward higher accountability. This is not about attacking daycares. It is about raising standards.",
      "## A Practical, Welfare-Focused Approach",
      "The most responsible message for any daycare is: we collect within a safe, manageable area so your dog is not travelling longer than necessary. A welfare-led approach means no rush, no cramming routes, no long waits in vans, no unrealistic promises, no extended confinement, and no one-size-fits-all route.",
      "## Conclusion",
      "The conversation around transport times is changing, and for good reason. Distance is not the issue. Welfare is. Well-planned routes, sensible coverage areas, and calm, efficient loading are the foundation of responsible transport. A daycare does not need to cover half the county to be excellent. It needs to provide safe, predictable, welfare-led journeys for the dogs in its care.",
    ],
  },
  "crate-conversation": {
    title: "The Crate Conversation the Dog World Needs to Have",
    author: "Jess",
    date: "Nov 21, 2025",
    readTime: "1 min read",
    category: "Welfare",
    content: [
      "Dog crates spark strong opinions — some see them as helpful tools, while others worry about cruelty. The key is how they are used. When done right, crates offer security and structure; when misused, they can cause stress.",
      "## The Benefits of Crates",
      "Crates help with house training, provide a safe space during travel, and prevent destructive behaviour. They also offer dogs a quiet retreat, much like a bedroom for humans. Used properly, they create a sense of comfort and routine.",
      "## The Concerns",
      "Critics argue crates are restrictive, potentially leading to stress or behavioural issues if dogs are left inside for too long. Organisations like PETA highlight risks such as muscle atrophy and anxiety from prolonged confinement. The issue is not the crate itself but how it is used.",
      "## Do Dogs Naturally Like Crates?",
      "Some claim crates mimic a dog's wolf ancestors' denning instincts. However, research suggests wolves only use dens for raising young, not daily life. The reality? Dogs can be trained to see crates as safe spaces.",
      "## When Crates Make Sense in Daycare",
      "Crates help with young puppies that need sleep, dogs that need short decompression breaks, dogs recovering from injury, and high-energy environments that benefit from structured downtime. Short, planned naps work. Long lock-ins do not.",
      "## The Bottom Line",
      "Crates are not inherently good or bad — it is all about responsible use. When introduced positively and used in moderation, they can be an effective tool for training and safety. At Duncan's Dog Co, our approach ensures crates enhance a dog's well-being rather than restrict it.",
    ],
  },
};

export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const post = blogData[params.slug || ""];

  if (!post) {
    return (
      <Layout>
        <section className="bg-forest">
          <div className="container py-20 lg:py-28 text-center">
            <h1 className="text-4xl text-white">Post not found</h1>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 mt-6 text-gold font-semibold hover:gap-3 transition-all"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-forest">
        <div className="container py-16 lg:py-24">
          <ScrollReveal>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
            <span className="inline-block text-xs font-semibold text-gold uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.15] max-w-4xl">
              {post.title}
            </h1>
            <div className="mt-6 flex items-center gap-5 text-sm text-white/50">
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                {post.author}
              </span>
              <span>{post.date}</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white">
        <div className="container py-16 lg:py-24">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <article className="prose prose-lg max-w-none">
                {post.content.map((block, i) => {
                  if (block.startsWith("## ")) {
                    return (
                      <h2
                        key={i}
                        className="text-2xl sm:text-3xl text-forest mt-12 mb-4"
                      >
                        {block.replace("## ", "")}
                      </h2>
                    );
                  }
                  return (
                    <p
                      key={i}
                      className="text-charcoal/70 leading-relaxed mb-5 text-[16px]"
                    >
                      {block}
                    </p>
                  );
                })}
              </article>
            </ScrollReveal>

            {/* CTA at bottom of post */}
            <ScrollReveal>
              <div className="mt-16 p-8 lg:p-10 bg-forest rounded-2xl text-center">
                <h3 className="text-2xl text-white">
                  Ready to simplify your pet business?
                </h3>
                <p className="mt-3 text-white/70">
                  Start your 3-month free trial today. No credit card required.
                </p>
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 px-8 py-4 bg-gold text-forest font-bold rounded-lg hover:bg-gold-dark transition-all duration-200 shadow-lg text-sm"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Start 3-Month Free Trial <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
}
