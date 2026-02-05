import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { Button } from "@/components/ui";
import { CTASection } from "@/components/sections";

// This would typically come from a CMS or MDX files
const blogPosts: Record<string, {
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
}> = {
  "why-you-cant-stop-scrolling": {
    title: "Why You Can't Stop Scrolling (And How to Fix It)",
    excerpt:
      "The psychology behind infinite scroll and variable rewards—and practical strategies to break the cycle.",
    category: "Science",
    readTime: "8 min read",
    date: "2026-02-01",
    author: "Rewired Team",
    content: `
## The Infinite Scroll Trap

You've experienced it. You open TikTok to watch "just one video" and suddenly it's 2 AM. Or you check Instagram "real quick" and 45 minutes disappear. This isn't a personal failing—it's by design.

### The Psychology of Variable Rewards

In the 1950s, psychologist B.F. Skinner discovered something fascinating: rats pressed a lever more frequently when rewards came unpredictably than when they came every time. This "variable ratio reinforcement schedule" is the most powerful known method for creating persistent behaviors.

Social media apps have perfected this technique. Every scroll might bring:
- A hilarious video
- A boring ad
- A post from a friend you miss
- Content that makes you angry
- Something that goes viral

You never know what you'll get next, so you keep scrolling. Just like a slot machine.

### The Dopamine Connection

Each unexpected reward triggers a small dopamine release in your brain's reward center. This isn't about pleasure—dopamine is about anticipation and motivation. It's the "seeking" chemical that drives you to keep looking for more.

Over time, your brain adapts. It starts to anticipate the scroll itself, releasing dopamine before you even find anything interesting. The behavior becomes automatic.

## Breaking the Cycle

Understanding the mechanism is the first step. Here's how to actually break free:

### 1. Remove Infinite Scroll

Apps like TikTok and Instagram are designed without natural stopping points. Consider:
- Setting hard time limits that can't be bypassed
- Using apps that add friction (like Rewired)
- Switching to chronological feeds where possible

### 2. Recognize the Urge

When you feel the pull to scroll, pause and name it: "I'm feeling the urge to scroll." This simple awareness can interrupt the automatic behavior.

### 3. Find Replacement Rewards

Your brain needs stimulation—that's not going to change. The key is finding healthier sources:
- Physical activity (even a 5-minute walk)
- Social connection (texting a real friend)
- Learning something new
- Creative projects

### 4. Design Your Environment

Make scrolling harder and alternatives easier:
- Remove social apps from your home screen
- Use grayscale mode
- Keep a book by your bed instead of your phone
- Charge your phone outside your bedroom

## The Bottom Line

You're not weak for struggling with this. These apps are engineered by thousands of the smartest engineers in the world, with billions of dollars in resources, specifically to capture your attention. 

The deck is stacked against you—but understanding the game is the first step to winning it.
    `,
  },
  "dopamine-detox-myth": {
    title: "The Dopamine Detox Myth: What Actually Works",
    excerpt:
      "Dopamine detoxes are trending, but do they actually work? We break down the science and offer evidence-based alternatives.",
    category: "Science",
    readTime: "6 min read",
    date: "2026-01-28",
    author: "Rewired Team",
    content: `
## The Dopamine Detox Trend

You've probably seen the videos: people spending 24 hours (or more) avoiding all stimulation—no phone, no music, no food beyond basics, sometimes no talking. The promise? "Reset" your dopamine system and feel better than ever.

There's just one problem: that's not how dopamine works.

## The Neuroscience Reality

### What Dopamine Actually Does

Dopamine isn't a "pleasure chemical"—it's a motivation and learning signal. It helps your brain predict and seek rewards. You can't "deplete" it by having too much fun, and you can't "reset" it by being bored.

### What Actually Happens During a "Detox"

When people report feeling better after a dopamine detox, several things are actually happening:

1. **Reduced overstimulation**: Taking a break from constant notifications does reduce mental fatigue
2. **Increased appreciation**: Removing stimuli temporarily can make them feel more rewarding when reintroduced
3. **Behavioral insight**: Time away helps you notice automatic habits
4. **Placebo effect**: Believing something will help often does help

None of these require the pseudoscientific framing of "resetting dopamine."

## What Actually Works

Instead of extreme detoxes, try these evidence-based approaches:

### 1. Reduce Supernormal Stimuli

Social media, video games, and processed food are "supernormal stimuli"—artificially concentrated rewards. Gradually reducing exposure (not eliminating entirely) helps recalibrate your reward system.

### 2. Build Tolerance for Boredom

Start small: wait 5 minutes before checking your phone. Gradually increase. This builds the cognitive muscle of delayed gratification without requiring extreme measures.

### 3. Diversify Your Rewards

Don't put all your dopamine eggs in one basket. Cultivate multiple sources of satisfaction:
- Physical activity
- Social connection
- Creative expression
- Learning and mastery
- Nature exposure

### 4. Create Friction

Make high-stimulation activities harder to access:
- Delete apps (you can reinstall if needed)
- Use website blockers
- Keep your phone in another room
- Remove autoplay features

## The Bottom Line

You don't need to sit in a dark room for 24 hours to improve your relationship with technology. Sustainable change comes from gradual habit shifts, not extreme interventions.

The irony? Many people film their dopamine detoxes for social media views—using the very platforms they claim to be detoxing from to farm dopamine from likes and comments.

Focus on sustainable change, not dramatic gestures.
    `,
  },
};

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];
  
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  return (
    <div className="pt-20">
      {/* Article Header */}
      <section className="py-12 md:py-20 bg-background-secondary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-foreground-muted hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            {post.category}
          </span>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {post.title}
          </h1>

          <p className="text-xl text-foreground-muted mb-8">{post.excerpt}</p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-foreground-muted">
            <span>{post.author}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg prose-invert max-w-none">
            <div
              className="text-foreground-muted leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{
                __html: post.content
                  .split("\n")
                  .map((line) => {
                    if (line.startsWith("## ")) {
                      return `<h2 class="text-2xl font-bold text-foreground mt-12 mb-4">${line.slice(3)}</h2>`;
                    }
                    if (line.startsWith("### ")) {
                      return `<h3 class="text-xl font-semibold text-foreground mt-8 mb-3">${line.slice(4)}</h3>`;
                    }
                    if (line.startsWith("- ")) {
                      return `<li class="ml-4">${line.slice(2)}</li>`;
                    }
                    if (line.startsWith("1. ") || line.startsWith("2. ") || line.startsWith("3. ") || line.startsWith("4. ")) {
                      return `<li class="ml-4">${line.slice(3)}</li>`;
                    }
                    if (line.trim() === "") {
                      return "";
                    }
                    return `<p>${line}</p>`;
                  })
                  .join(""),
              }}
            />
          </article>

          {/* Share */}
          <div className="mt-12 pt-8 border-t border-border flex items-center justify-between">
            <span className="text-foreground-muted">Share this article</span>
            <Button variant="secondary" size="sm">
              <Share2 className="w-4 h-4" />
              Share
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}
