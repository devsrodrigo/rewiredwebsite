import { Metadata } from "next";
import Link from "next/link";
import { SectionHeading, Badge } from "@/components/ui";
import { WaitlistForm } from "@/components/email/WaitlistForm";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { Calendar, Clock, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Long-form writing on phone addiction, dopamine, attention, and the protocol that fixes them.",
};

const blogPosts = [
  {
    slug: "are-app-blockers-worth-it",
    title: "Are app blockers worth paying for?",
    excerpt:
      "Free tools exist. Your time has a price. An honest cost-benefit of paid blockers, including when not to buy one.",
    category: "Product",
    readTime: "6 min read",
    date: "2026-06-09",
    featured: false,
  },
  {
    slug: "dopamine-detox-for-content-creators",
    title: "The content creator's guide to a 14-day detox.",
    excerpt:
      "You can't quit the apps; they're your job. Why a consumption detox is the highest-ROI move a creator can make.",
    category: "Tips",
    readTime: "6 min read",
    date: "2026-06-09",
    featured: false,
  },
  {
    slug: "why-you-cant-stop-scrolling",
    title: "Why you can't stop scrolling (and how to fix it).",
    excerpt:
      "The psychology behind infinite scroll and variable rewards, and what actually breaks the loop.",
    category: "Science",
    readTime: "8 min read",
    date: "2026-02-01",
    featured: true,
  },
  {
    slug: "dopamine-detox-myth",
    title: "The dopamine detox myth.",
    excerpt: "Dopamine detoxes are trending, but most of what's said about them is wrong.",
    category: "Science",
    readTime: "6 min read",
    date: "2026-01-28",
    featured: false,
  },
  {
    slug: "screen-time-vs-rewired",
    title: "Screen Time vs. LOCK IN.",
    excerpt: "Apple's built-in tool is a start. Here's why it isn't enough for real recovery.",
    category: "Product",
    readTime: "5 min read",
    date: "2026-01-25",
    featured: false,
  },
  {
    slug: "21-habits-to-replace-scrolling",
    title: "Twenty-one habits to replace scrolling.",
    excerpt: "Practical alternatives for the moment the urge hits, from two-minute fixes to bigger shifts.",
    category: "Tips",
    readTime: "10 min read",
    date: "2026-01-20",
    featured: false,
  },
  {
    slug: "telling-friends-quitting-instagram",
    title: "How to tell your friends you're quitting Instagram.",
    excerpt: "Social pressure is real. Here's how to navigate it without losing people.",
    category: "Personal",
    readTime: "7 min read",
    date: "2026-01-15",
    featured: false,
  },
  {
    slug: "science-of-urge-surfing",
    title: "The science of urge surfing.",
    excerpt: "The CBT technique that lets cravings come and go without acting on them.",
    category: "Science",
    readTime: "6 min read",
    date: "2026-01-10",
    featured: false,
  },
  {
    slug: "why-you-cant-put-your-phone-down",
    title: "Why you can't put your phone down (it's not willpower).",
    excerpt: "What you're feeling is engineering, not character.",
    category: "Science",
    readTime: "5 min read",
    date: "2026-02-25",
    featured: false,
  },
  {
    slug: "hard-dopamine-vs-easy-dopamine",
    title: "Hard dopamine vs. easy dopamine.",
    excerpt: "Why your brain feels dead after a three-hour scroll and what to do instead.",
    category: "Science",
    readTime: "6 min read",
    date: "2026-02-22",
    featured: false,
  },
  {
    slug: "what-happens-when-you-stop-scrolling",
    title: "What happens to your brain when you stop scrolling.",
    excerpt: "A day-by-day, research-grounded breakdown.",
    category: "Science",
    readTime: "8 min read",
    date: "2026-02-19",
    featured: false,
  },
  {
    slug: "5-types-of-phone-addiction",
    title: "The five types of phone addiction.",
    excerpt: "Phone addiction isn't one thing. Recognize which pattern is yours.",
    category: "Science",
    readTime: "7 min read",
    date: "2026-02-16",
    featured: false,
  },
  {
    slug: "the-willpower-myth",
    title: "The willpower myth.",
    excerpt: "Self-control isn't a tank that runs dry. It's a skill that grows.",
    category: "Science",
    readTime: "5 min read",
    date: "2026-02-13",
    featured: false,
  },
];

const categories = ["All", "Science", "Tips", "Personal", "Product"];

export default function BlogPage() {
  const featuredPost = blogPosts.find((p) => p.featured);
  const regularPosts = blogPosts.filter((p) => !p.featured);

  return (
    <div className="pt-28">
      <section className="py-16 md:py-24">
        <div className="container-app">
          <SectionHeading
            eyebrow="Journal"
            title="Long reads. No takes."
            subtitle="Slow writing on attention, dopamine, and the protocol behind the app."
            align="left"
          />
        </div>
      </section>

      {featuredPost && (
        <section className="border-t border-[color:var(--color-line)] py-12">
          <div className="container-app">
            <Link href={`/blog/${featuredPost.slug}`} className="block group">
              <article className="surface-elevated p-8 md:p-12 transition-colors hover:border-[color:var(--color-line-2)]">
                <div className="flex items-center gap-3 mb-5">
                  <Badge variant="success">Featured</Badge>
                  <span className="text-[12px] text-[color:var(--color-ink-4)] uppercase tracking-[0.14em]">
                    {featuredPost.category}
                  </span>
                </div>
                <h2 className="font-display text-[34px] md:text-[52px] font-semibold tracking-[-0.04em] text-white leading-[1.05] max-w-3xl">
                  {featuredPost.title}
                </h2>
                <p className="mt-4 text-[17px] text-[color:var(--color-ink-3)] leading-relaxed max-w-2xl">
                  {featuredPost.excerpt}
                </p>
                <div className="mt-6 flex items-center gap-4 text-[13px] text-[color:var(--color-ink-4)]">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(featuredPost.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-[color:var(--color-ink-5)]" />
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {featuredPost.readTime}
                  </span>
                </div>
                <ArrowUpRight className="absolute top-8 right-8 md:top-12 md:right-12 w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </article>
            </Link>
          </div>
        </section>
      )}

      <BlogGrid posts={regularPosts} categories={categories} />

      <section className="border-t border-[color:var(--color-line)] py-24 bg-[color:var(--color-bg-1)]">
        <div className="container-app max-w-xl text-center">
          <h2 className="font-display text-[32px] md:text-[42px] font-semibold tracking-[-0.03em] text-white mb-3">
            Get the weekly note.
          </h2>
          <p className="text-[15px] text-[color:var(--color-ink-3)] mb-8">
            One quiet email a week: long-form essays on attention, dopamine, and the protocol.
          </p>
          <WaitlistForm
            variant="large"
            submitText="Subscribe"
            successTitle="You're in."
            successMessage="A welcome note is on its way."
          />
        </div>
      </section>
    </div>
  );
}
