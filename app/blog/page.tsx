import { Metadata } from "next";
import Link from "next/link";
import { SectionHeading, Badge } from "@/components/ui";
import { WaitlistForm } from "@/components/email/WaitlistForm";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles, guides, and research on breaking free from social media addiction. Tips for digital wellness, dopamine detox, and building healthier habits.",
};

// This would typically come from a CMS or MDX files
const blogPosts = [
  {
    slug: "why-you-cant-stop-scrolling",
    title: "Why You Can't Stop Scrolling (And How to Fix It)",
    excerpt:
      "The psychology behind infinite scroll and variable rewards—and practical strategies to break the cycle.",
    category: "Science",
    readTime: "8 min read",
    date: "2026-02-01",
    featured: true,
  },
  {
    slug: "dopamine-detox-myth",
    title: "The Dopamine Detox Myth: What Actually Works",
    excerpt:
      "Dopamine detoxes are trending, but do they actually work? We break down the science and offer evidence-based alternatives.",
    category: "Science",
    readTime: "6 min read",
    date: "2026-01-28",
    featured: false,
  },
  {
    slug: "screen-time-vs-rewired",
    title: "Screen Time vs. Rewired: Understanding the Difference",
    excerpt:
      "Apple's built-in Screen Time is a good start, but here's why it's not enough for actual addiction recovery.",
    category: "Product",
    readTime: "5 min read",
    date: "2026-01-25",
    featured: false,
  },
  {
    slug: "21-habits-to-replace-scrolling",
    title: "21 Habits to Replace Social Media Scrolling",
    excerpt:
      "Practical alternatives for when you feel the urge to scroll. From 2-minute activities to life-changing habits.",
    category: "Tips",
    readTime: "10 min read",
    date: "2026-01-20",
    featured: false,
  },
  {
    slug: "telling-friends-quitting-instagram",
    title: "How to Tell Your Friends You're Quitting Instagram",
    excerpt:
      "Social pressure is real. Here's how to navigate friendships when you're stepping back from social media.",
    category: "Personal",
    readTime: "7 min read",
    date: "2026-01-15",
    featured: false,
  },
  {
    slug: "science-of-urge-surfing",
    title: "The Science of Urge Surfing",
    excerpt:
      "Learn the CBT technique that helps you ride out cravings without giving in. A step-by-step guide.",
    category: "Science",
    readTime: "6 min read",
    date: "2026-01-10",
    featured: false,
  },
];

const categories = ["All", "Science", "Tips", "Personal", "Product"];

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-end/10 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Resources"
            title="Learn to Break Free"
            subtitle="Articles, guides, and research to help you understand digital addiction and build a healthier relationship with technology."
          />
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 bg-background-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href={`/blog/${featuredPost.slug}`}>
              <div className="group relative p-8 md:p-12 rounded-2xl bg-gradient-to-br from-primary/10 to-primary-end/10 border border-primary/20 hover:border-primary/40 transition-all duration-300">
                <Badge variant="primary" className="mb-4">Featured</Badge>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-foreground-muted mb-6 max-w-2xl">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-foreground-muted">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(featuredPost.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </span>
                </div>
                <div className="absolute top-8 right-8 md:top-12 md:right-12">
                  <ArrowRight className="w-6 h-6 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8 bg-background border-b border-border sticky top-16 md:top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 -mb-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  category === "All"
                    ? "gradient-bg text-white"
                    : "bg-background-secondary text-foreground-muted hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article className="group h-full p-6 rounded-2xl bg-background-secondary border border-border hover:border-primary/50 transition-all duration-300">
                  <Badge variant="default" className="mb-4">
                    {post.category}
                  </Badge>
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-foreground-muted mb-6 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-foreground-muted mt-auto">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-background-secondary">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Get Digital Wellness Tips
          </h2>
          <p className="text-foreground-muted mb-8">
            Join our newsletter for weekly tips on breaking free from social media addiction.
          </p>
          <WaitlistForm variant="large" />
        </div>
      </section>
    </div>
  );
}
