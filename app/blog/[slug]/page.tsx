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
      "The psychology behind infinite scroll and variable rewards, and practical strategies to break the cycle.",
    category: "Science",
    readTime: "8 min read",
    date: "2026-02-01",
    author: "Rewired Team",
    content: `
## The Infinite Scroll Trap

You've experienced it. You open TikTok to watch "just one video" and suddenly it's 2 AM. Or you check Instagram "real quick" and 45 minutes disappear. This isn't a personal failing. It's by design.

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

Each unexpected reward triggers a small dopamine release in your brain's reward center. This isn't about pleasure. Dopamine is about anticipation and motivation. It's the "seeking" chemical that drives you to keep looking for more.

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

Your brain needs stimulation. That's not going to change. The key is finding healthier sources:
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

The deck is stacked against you, but understanding the game is the first step to winning it.
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

You've probably seen the videos: people spending 24 hours (or more) avoiding all stimulation. No phone, no music, no food beyond basics, sometimes no talking. The promise? "Reset" your dopamine system and feel better than ever.

There's just one problem: that's not how dopamine works.

## The Neuroscience Reality

### What Dopamine Actually Does

Dopamine isn't a "pleasure chemical." It's a motivation and learning signal. It helps your brain predict and seek rewards. You can't "deplete" it by having too much fun, and you can't "reset" it by being bored.

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

Social media, video games, and processed food are "supernormal stimuli," artificially concentrated rewards. Gradually reducing exposure (not eliminating entirely) helps recalibrate your reward system.

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

The irony? Many people film their dopamine detoxes for social media views, using the very platforms they claim to be detoxing from to farm dopamine from likes and comments.

Focus on sustainable change, not dramatic gestures.
    `,
  },
  "why-you-cant-put-your-phone-down": {
    title: "Why You Can't Put Your Phone Down (It's Not a Willpower Problem)",
    excerpt:
      "What you're experiencing isn't a character flaw. It's the result of one of the most sophisticated behavioral engineering systems ever built.",
    category: "Science",
    readTime: "5 min read",
    date: "2026-02-25",
    author: "Rewired Team",
    content: `
You've told yourself you'd stop scrolling at 10pm. It's now 1am.

You opened Instagram "just to check one thing." Forty minutes later, you're watching a stranger's vacation recap from 2021.

You know it's bad for you. You know you should stop. And yet, you don't.

Here's the thing most people get wrong: this isn't a character flaw. It's not laziness, weakness, or lack of discipline. What you're experiencing is the result of one of the most sophisticated behavioral engineering systems ever built, designed by some of the smartest people in the world, with one goal: keep you on the app as long as possible.

And your brain never stood a chance.

## The Machine Was Built to Win

Social media platforms aren't accidents. Every feature, the infinite scroll, the notification ping, the like count, the autoplay, was deliberately engineered to exploit how your brain processes reward.

The core mechanism is something called a variable-ratio reinforcement schedule. It sounds clinical, but you already know what it feels like. It's the reason slot machines are so addictive: you never know when the reward is coming, so you never stop pulling the lever.

Every time you open TikTok or Instagram, your brain doesn't know what it'll find. Maybe something hilarious. Maybe something that makes you feel seen. Maybe something boring. That unpredictability is the hook. Research from neuroscientist Wolfram Schultz shows that unpredictable rewards activate your brain's dopamine system more intensely than predictable ones, and they're far more resistant to extinction.

Translation: your brain is literally more addicted to checking your phone than it would be if every post was great. The randomness is the feature.

## Your Brain on Dopamine

Dopamine is your brain's "pursue this" chemical. It doesn't just make you feel good: it makes you want. It creates the craving, the anticipation, the itch you need to scratch.

When you hear a notification, dopamine spikes before you even check your phone. Your brain has learned that the sound predicts reward, so it starts the reward process early, training you to reach for your phone almost involuntarily. By the time you're consciously deciding whether to check it, your dopamine system has already made the call.

This is why it feels compulsive. Because neurologically, it is.

## The Tolerance Trap

Here's where it gets worse. The more you scroll, the less it satisfies you.

Heavy social media use has been linked to lower dopamine synthesis capacity in the brain, meaning your brain literally produces less dopamine over time. You need more stimulation to feel the same thing. Real-world experiences like conversation, nature, reading, and exercise start to feel flat and boring by comparison. Not because they've changed, but because your brain has recalibrated around a much higher baseline.

This is the same mechanism behind substance addiction. The drug didn't make you feel amazing forever. It made you feel normal only when you were on it, and hollow when you weren't.

Your phone has done the same thing, just slowly enough that you didn't notice.

## The Presence Tax

There's one more thing worth knowing, because it explains something most people experience but can't name.

A landmark study from the University of Texas found that the mere presence of your phone, even face-down, even powered off, significantly reduces your cognitive capacity. You're not just distracted when you're on your phone. You're cognitively impaired by its proximity. Willpower spent resisting the urge to check drains the same mental resources you need for focus, creativity, and decision-making.

So every hour your phone is on your desk is an hour you're operating at a fraction of your potential. Not because you're weak, because you're human, and your brain isn't built to resist a device engineered by thousands of engineers specifically to capture your attention.

## So What Actually Works?

Willpower alone doesn't cut it. Not because you don't have willpower, but because willpower is the wrong tool for this fight.

What works is changing the environment. Interrupting the cue before it becomes a craving. Replacing the routine with something that satisfies the same underlying need: novelty, connection, stimulation, or escape, through a source that builds you up instead of draining you.

That's the whole idea behind Rewired. Not "just stop using your phone." Not guilt, shame, or white-knuckling through withdrawal. A systematic rewiring of the loop: the cue, the routine, the reward.

Your brain got conditioned into this pattern over months and years. With the right approach, it can be conditioned out, and into something that actually serves you.

You're not weak. You were targeted. Now you know.
    `,
  },
  "hard-dopamine-vs-easy-dopamine": {
    title: "Hard Dopamine vs. Easy Dopamine: Why Your Brain Feels Dead After a 3-Hour Scroll",
    excerpt:
      "The difference between two fundamentally different types of dopamine, and understanding it might be the most important thing you learn this year.",
    category: "Science",
    readTime: "6 min read",
    date: "2026-02-22",
    author: "Rewired Team",
    content: `
You just spent three hours watching videos. You're not entertained. You're not relaxed. You're not happy.

You're empty.

Meanwhile, the last time you finished a hard run, lungs burning, legs done, you felt genuinely good. Not "stimulated" good. Actually good. Proud. Alive. Like you did something.

That contrast isn't a coincidence. It's the difference between two fundamentally different types of dopamine, and understanding it might be the most important thing you learn this year.

## Dopamine Isn't the Problem

Let's get this straight first: dopamine is not the enemy. It's not just the "pleasure chemical." It's the chemical of motivation, drive, and pursuit. Without dopamine, you wouldn't get out of bed. You wouldn't chase goals, fall in love, or care about anything.

The issue isn't dopamine. It's the source.

Think of it like food. Your body needs calories to function. You can get them from four slices of pizza or from grilled chicken, rice, and vegetables. Both hit your caloric need. But one leaves you sluggish, foggy, and craving more in an hour. The other gives you sustained energy, micronutrients, and something that compounds over time.

Dopamine works the same way.

## Easy Dopamine: Fast, Cheap, Depleting

Easy dopamine comes from sources engineered for maximum stimulation with minimum effort.

Scrolling through short-form video. Checking your follower count. Getting a like. Refreshing your messages. These activities deliver quick dopamine hits with zero cost: no effort, no skill, no growth. They're the neurochemical equivalent of junk food.

The problem isn't just that they feel good in the moment. It's what happens after. Every spike is followed by a crash. Your brain, working to maintain homeostasis, compensates for each pleasure peak with an equal dip into deficit. The higher the spike, the lower you go.

This is why you feel worse after scrolling than before you started. It's not guilt. It's not irrationality. It's your brain's dopamine balance tipping hard toward pain after you flooded it with cheap reward.

Do this repeatedly, every morning, every commute, every moment of boredom, and you shift your entire baseline downward. Real life starts to feel unbearably dull. Work feels impossible. Conversations feel boring. The world loses color, not because anything changed, but because your reward system has been recalibrated to a level that real life can never match.

## Hard Dopamine: Slow, Earned, Compounding

Hard dopamine is what you get from effort. From doing something difficult and finishing it. From showing up when you didn't feel like it.

Exercise. Deep work. Learning a skill. Having a hard conversation. Finishing something you started. Building something real.

These activities don't spike your dopamine instantly, and that's exactly the point. The dopamine comes after the effort, not before it. Your brain releases it as a signal: "that was worth it. Do that again."

Unlike easy dopamine, hard dopamine doesn't deplete your system. Research shows that challenging physical and cognitive activities actually increase dopamine synthesis capacity over time. They make your brain better at producing and processing dopamine, not worse. The reward grows the more you pursue it.

And here's the part that makes it feel like a cheat code: the harder the task, the bigger the dopamine release when you finish. Your brain doesn't reward mediocrity. It reserves its best chemistry for genuine accomplishment.

## The Baseline Problem

Most people who struggle to quit scrolling aren't lazy. They're neurochemically depleted.

When your dopamine system is constantly drained by easy sources, attempting hard things feels exponentially more difficult. Your prefrontal cortex, the part that helps you plan, delay gratification, and stay focused, runs on dopamine. When you're in deficit, it goes offline. Motivation collapses. Everything that requires effort feels pointless.

This is why you can intend to be productive and end up on your phone for four hours anyway. It's not a moral failure. It's a depleted brain defaulting to the path of least resistance.

You can't consistently perform at a high level while running on empty. The solution isn't more willpower, it's restoring the system.

## How to Actually Make the Switch

The shift from easy to hard dopamine isn't about white-knuckling through boredom. It's about making the transition gradual enough that your brain can adapt.

### Start before you're motivated

Motivation follows action, not the other way around. You don't need to feel like doing the hard thing. You just need to start it. Put on your shoes. Open the document. Get to the gym. The dopamine that rewards effort can't kick in until the effort begins.

### Protect the morning

The first dopamine hit of the day sets the tone for your entire nervous system. If it's your phone, you've already started from a deficit. If it's movement, sunlight, or focused work, you've started from a surplus.

### Replace, don't just remove

Your brain needs dopamine, that's not negotiable. If you remove easy sources without replacing them, the deficit becomes unbearable and you'll relapse. The goal is to build hard dopamine habits that can compete with the pull of your phone.

### Give it time

The first few days of switching feel terrible. That's real withdrawal: your brain recalibrating from artificial highs back to a natural baseline. Most people quit during this phase and conclude that the approach doesn't work. The opposite is true: the discomfort means it's working.

## What's on the Other Side

Here's what people who've made the switch consistently report: life gets more vivid.

Not because anything external changed. Because their reward system recalibrated. A conversation becomes genuinely interesting. A sunset actually registers. A workout produces real satisfaction instead of just checking a box.

You don't miss the scrolling. It starts to seem strange, like eating cotton candy for every meal and calling it a life.

Your brain is capable of generating extraordinary amounts of dopamine from real experience. It just needs the artificial sources turned down long enough to remember what it was designed for.

That's not a motivational slogan. It's neuroscience. And it's available to you.
    `,
  },
  "what-happens-when-you-stop-scrolling": {
    title: "What Actually Happens to Your Brain When You Stop Scrolling (A Day-by-Day Breakdown)",
    excerpt:
      "A realistic, science-based breakdown of what your brain goes through when you start reducing compulsive phone use.",
    category: "Science",
    readTime: "8 min read",
    date: "2026-02-19",
    author: "Rewired Team",
    content: `
Most people who try to quit scrolling last about two days.

Not because they're weak. Because nobody told them what to expect. They feel awful, assume it's not working, and go back to the thing that makes them feel okay again.

This is the guide that would have changed that. A realistic, science-based breakdown of what your brain goes through when you start reducing compulsive phone use, so you know what's coming, why it's happening, and why pushing through it is the most important thing you can do.

## First, Understand What You're Working With

When you use social media compulsively, your brain adapts. Dopamine receptors downregulate. Baseline dopamine production drops. Your entire nervous system recalibrates around a constant stream of artificial stimulation.

When you stop, or even significantly reduce, that stimulation, your brain has to recalibrate back. That process is neurologically identical to withdrawal. Not metaphorically. Literally the same mechanism as drug withdrawal, just milder in physical intensity.

Knowing this doesn't make the discomfort disappear. But it reframes it: every uncomfortable moment is evidence of recalibration, not failure.

## Days 1-3: The Acute Phase

### What you'll feel

Restlessness. Irritability. The overwhelming urge to check your phone. An inability to sit still or focus. Boredom so uncomfortable it almost feels physical. A vague, low-grade anxiety that follows you everywhere.

You'll also notice, probably for the first time, just how automatic your phone habits are. You'll reach for your phone before you're even conscious of doing it. You'll unlock it, then realize you don't know why. You'll feel phantom notification anxiety.

### What's happening

Your dopamine system is running on empty. The external source of stimulation has been removed, but your brain's internal production hasn't caught up yet. You're in genuine neurochemical deficit. Cortisol levels elevate. The brain's threat-response system activates because something that felt "necessary" has been removed.

### What to do

Keep your hands occupied. Keep your phone in another room. Have a plan for the moments you'd normally scroll: a book within reach, a walk you'll take, a task you'll start. Don't try to just resist; redirect. The urge will pass in about 15-20 minutes if you don't feed it.

Sleep may get worse before it gets better, especially if you're cutting out nighttime phone use. This is normal and temporary.

## Days 4-7: Peak Challenge

### What you'll feel

This is the hardest week. Emotional volatility spikes. Motivation for anything feels low. Your brain will generate extremely convincing rationalizations for why you should just check your phone: "I don't actually have a problem." "This is too extreme." "Just once won't set me back."

Don't trust these thoughts. They're not insights; they're withdrawal talking.

You'll also feel acutely aware of everyone else's phone use. Friends scrolling at dinner. Strangers staring down at screens. It might feel lonely or strange to be the one not doing it.

### What's happening

Cravings peak during this window as the brain mounts its most intense push to restore the old pattern. The dopamine system has learned that the phone equals relief, and it's fighting hard for that relief. Simultaneously, mood regulation is genuinely impaired because the neurochemical systems that regulate emotion are recalibrating.

### What to do

This is where your environment matters most. Make it structurally hard to relapse: use app blockers, keep your phone in a drawer, tell someone what you're doing so there's accountability.

Don't wait to feel motivated. Move your body. Even a 20-minute walk will have a measurable effect on your dopamine and cortisol levels. It's not a cure, but it's the closest thing to one at this stage.

If you have a streak going, protect it. The loss aversion you feel about breaking a streak is your ally right now. Use it.

## Days 8-14: Early Stabilization

### What you'll feel

A noticeable shift. Withdrawal symptoms start to ease. Mood begins to stabilize. You'll have brief windows, maybe 30 minutes at a time, where your head feels genuinely clear. Some people describe it as "remembering what it felt like to just exist."

You'll start finding conversations easier to sustain. Silence becomes less unbearable. Morning routine becomes less of a battle.

### What's happening

Dopamine production is beginning to normalize. Receptor sensitivity is gradually recovering. Your prefrontal cortex, the part responsible for focus, planning, and impulse control, is coming back online.

Observable changes: better sleep quality, improved morning alertness, reduced decision fatigue throughout the day. You might notice you're less reactive to small frustrations.

### What to do

This is when you start building, not just surviving. The habits you establish in this window, morning routines, goal completion, physical activity, will start to feel slightly more natural. Lock them in now, while the neural pathways are plastic and malleable.

Start noticing what you enjoy without your phone. Even small things. A good meal. A walk without headphones. A real conversation. These are the signals that your reward system is recovering.

## Days 15-30: Neural Rewiring Begins

### What you'll feel

Real dopamine from real things. This is when people report that the world starts to feel more vivid again, not dramatically, but noticeably. Books that would have felt boring now hold your attention. Exercise produces genuine satisfaction. You start appreciating things you'd stopped noticing.

Urge frequency drops significantly. They're still there, but they're easier to observe without acting on. You'll have more cognitive space to recognize a craving for what it is, rather than being swept up in it automatically.

### What's happening

New neural pathways are strengthening. Old compulsive loops are weakening from disuse. The habit loop, cue, routine, reward, is being rerouted toward behaviors that serve you rather than drain you. Stress hormones normalize. Parasympathetic nervous system function improves, meaning you can actually relax without needing constant stimulation.

### What to do

This is the phase to go deeper into the habits you've built. Push the duration of your focus sessions. Take on harder goals. The discomfort of doing difficult things feels more like challenge now and less like torture, that's your dopamine system recognizing effort as rewarding.

## Days 30-90: New Baseline

### What you'll feel

Your old patterns will start to feel foreign. Not universally, some urges linger, but the compulsion loses its grip. You'll use your phone intentionally: to message someone, look something up, navigate somewhere. Then you'll put it down. Not because you're white-knuckling it, but because you don't actually need it.

The things that used to feel boring, reading, sitting with your thoughts, being present in a conversation, now feel okay. Sometimes better than okay.

### What's happening

Your dopamine baseline has been reset. Natural reward sensitivity is restored. Your brain has formed genuine alternative habits with their own neural grooves. The old compulsive pathways haven't disappeared, but they've been weakened significantly, and new ones have been built around more sustainable rewards.

Many people in this phase report unexpected improvements: better relationships, more productive work, a general sense of agency that was absent before. These aren't coincidences. They're the downstream effects of a working dopamine system.

## The Honest Part

This timeline is real, but it's also an average. Your experience might be faster or slower depending on how long you've been using heavily, whether you have ADHD or anxiety, and what your environment looks like.

There will be setbacks. Days where you fall back into old patterns. That's not failure; that's the normal path of behavior change. What matters is what you do the next day.

The goal isn't perfection. It's a trajectory that's moving in the right direction.

And the direction is always the same: toward a brain that's yours again.
    `,
  },
  "5-types-of-phone-addiction": {
    title: "The 5 Types of Phone Addiction: Which One Are You?",
    excerpt:
      "Phone addiction isn't one thing. Research shows it's at least five distinct patterns, each driven by a different psychological need.",
    category: "Science",
    readTime: "7 min read",
    date: "2026-02-16",
    author: "Rewired Team",
    content: `
"Just put your phone down."

If that advice worked, you wouldn't be reading this.

The reason generic advice fails isn't that people lack motivation. It's that phone addiction isn't one thing. Research shows it's at least five distinct patterns, each driven by a different psychological need, each requiring a different approach to actually fix.

Most apps treat everyone the same. That's why most apps don't work.

Here's a breakdown of the five profiles, what drives each one, and what actually helps.

## 1. The Novelty-Seeker

### The core need

Constant stimulation. New input. Something happening.

If you switch apps every few minutes, watch videos at 2x speed, have 12 browser tabs open, and feel a specific kind of restless boredom that nothing seems to satisfy: this is you.

Novelty-seekers often have ADHD traits, or at least a brain that runs on higher stimulation than average. Your brain is always searching for something interesting enough to hold its attention. Infinite scroll was basically built for you, the algorithm never runs out of new content, the feed never repeats, there's always something slightly more interesting just below.

### Why "just stop" doesn't work

Simply removing the phone creates an unbearable stimulation vacuum. The underlying need for novelty doesn't disappear, it just has nowhere to go. Without a replacement, the psychological pressure to go back becomes overwhelming.

### What actually works

Redirect the novelty drive toward real-world sources that match the intensity. Varied physical activities (try a new sport, change your workout constantly). Learning new skills. Fast-paced environments. Creative projects. The key isn't to lower your stimulation needs, it's to meet them in ways that build rather than deplete.

## 2. The Anxiety Escapist

### The core need

Relief from discomfort. A way out of your own head.

You don't necessarily love your phone. You just hate the alternative, sitting with your thoughts, feeling the weight of anxiety, facing the thing you've been avoiding. Your phone is a trapdoor. Every time discomfort rises, you fall through it.

The cycle is vicious: using the phone to escape anxiety actually increases anxiety over time. Your nervous system learns that discomfort equals open the phone, so it never develops the capacity to tolerate uncomfortable feelings. The baseline anxiety rises. The phone becomes more necessary. Rinse, repeat.

### Why "just stop" doesn't work

Removing the phone without addressing the anxiety leaves you with a broken leg and no crutch. The underlying pain is still there, now you're just experiencing it without relief. That's not recovery. That's just suffering.

### What actually works

Treating the anxiety alongside reducing phone use. Building genuine alternative coping tools: breathing techniques, grounding exercises, movement, talking to someone real. Gradually introducing tolerance for discomfort through structured exposure. Rewired's approach with this profile is gentle, graduated, and always paired with skills to handle what the phone was covering up.

## 3. The Social Validator

### The core need

Connection. Belonging. Confirmation that you matter.

You check your phone to see who liked your post, who viewed your story, who messaged you, who's watching. The metrics are a proxy for something real: "Do people care about me? Am I included? Am I okay?"

This isn't shallow. It's deeply human. The need for social belonging is one of the most powerful drives in the brain. The problem is that algorithmic metrics are an incredibly unstable, anxiety-inducing, and ultimately hollow substitute for genuine connection. You can have 10,000 followers and feel profoundly alone.

FOMO (fear of missing out) sits at the center of this profile, the constant monitoring to make sure you're not being left out of something. Research shows FOMO directly mediates the relationship between anxiety and problematic smartphone use.

### Why "just stop" doesn't work

Reducing phone access feels like social abandonment. If the phone is your primary source of social connection and validation, restricting it feels genuinely threatening, not a preference, a survival response.

### What actually works

Transitioning the source of validation from digital metrics to real relationships. Deliberately investing in face-to-face connection that provides more stable, more meaningful reassurance than a like ever could. Building internal self-worth through accomplishment and skill, validation that doesn't depend on someone else's algorithm.

## 4. The Impulsivity-Challenged

### The core need

There isn't one, really. That's the point.

You don't open your phone because you want something. You open it because you couldn't not. A notification appeared and your thumb moved before your brain engaged. A moment of boredom hit and your hand was already in your pocket. You've put your phone across the room and found yourself holding it minutes later without knowing how you got there.

This profile isn't about psychological motivation, it's about neurological inhibition. The brain's ability to override automatic impulses (governed by the prefrontal cortex) is genuinely weaker here. It's not a moral failure. It's executive function deficit, often associated with ADHD.

### Why "just stop" doesn't work

Willpower-based approaches fail because the deficit is neurological, not motivational. Telling someone with impulsivity challenges to "just have more self-control" is like telling someone with poor eyesight to "just see better." The hardware isn't cooperating.

### What actually works

Removing the need for willpower altogether. Structural barriers: app blockers that make access genuinely difficult, physical phone placement that creates distance, notifications permanently disabled, high-friction approaches to problematic apps. When the environment makes impulsive phone use structurally hard, the impulse has nowhere to go. External structure does what internal inhibition can't.

## 5. The Ruminator

### The core need

Silence the loop. Stop the thoughts.

Your brain runs on repeat. You replay conversations, catastrophize futures, rehash past mistakes. It's exhausting. Your phone isn't entertainment; it's interruption. The content doesn't matter that much. What matters is that it stops the thought spiral, even temporarily.

This overlaps with the anxiety escapist but the mechanism is different. Escapists avoid emotions. Ruminators avoid thoughts. The phone is a cognitive override button, jamming the rumination frequency with enough external input to quiet the internal noise.

### Why "just stop" doesn't work

Removing the phone returns you to the thought spiral with no other way out. The alternative (your own head, uninterrupted) might feel worse than the compulsive phone use itself. It has to be replaced with something equally effective at interrupting rumination, not just a different distraction.

### What actually works

Addressing the rumination directly. Mindfulness practices that teach you to observe thoughts without engaging them. Scheduled "worry time" that contains the spiral to a specific window rather than letting it run all day. CBT techniques that challenge catastrophic thought patterns at their root. Combined with structured, engaging alternatives, reading, creative work, physical activity, that occupy the mind without perpetuating dependence.

## Most People Are a Mix

Read through those profiles and probably two or three resonated. That's normal. Most people have a primary driver with secondary patterns layered on top.

What matters is identifying which one is doing the most damage, because that's the one to address first, and the one that determines which approach will actually work for you.

Generic apps give everyone the same solution. A personalized approach starts with knowing who you actually are.

That's the whole premise behind Rewired. The assessment isn't just intake data, it's the difference between a plan that fits and a plan that fails.

Which profile is yours?
    `,
  },
  "the-willpower-myth": {
    title: "The Willpower Myth: Why Discipline Gets Easier the More You Use It",
    excerpt:
      "Everyone thinks willpower is a tank that runs dry. But the part this model is missing changes everything about how you should approach self-control.",
    category: "Science",
    readTime: "5 min read",
    date: "2026-02-13",
    author: "Rewired Team",
    content: `
Everyone thinks willpower is a tank that runs dry.

You wake up with a full supply. Every bad decision, every temptation resisted, every uncomfortable choice draws from the tank. By 10pm you're running on fumes, and that's when you end up ordering junk food, doomscrolling for two hours, and abandoning everything you said you'd do.

This model feels true. But it's incomplete, and the part it's missing changes everything about how you should approach self-control.

## The Muscle You Didn't Know You Had

Neuroscientists have identified a specific brain region called the anterior midcingulate cortex (aMCC). It sits at the intersection of cognition and emotion, and it governs what researchers describe as the capacity for tenacity: the ability to do things you don't want to do.

Here's what makes it remarkable: the aMCC physically grows when you regularly do things that are hard and uncomfortable. Not just hard in a general sense; specifically things you'd rather avoid. Elite athletes show larger aMCC volume than sedentary people. Healthy centenarians show greater volume than the average population. Individuals with depression and obesity consistently show reduced volume.

This isn't willpower as a resource that depletes. This is willpower as a muscle that strengthens.

And here's the part that reframes everything: the aMCC responds specifically to doing things you don't want to do. Not challenging activities you find enjoyable. Not hobbies that feel hard but satisfying. The specific trigger is voluntary engagement with discomfort, choosing difficulty when ease was available.

Every time you resist checking your phone. Every time you go to the gym when you'd rather stay on the couch. Every time you finish a task when your brain is begging you to stop. You're training this region. Making it physically larger and more capable.

## Why Discipline Transfers

Most people think self-control is domain-specific. You have gym discipline or diet discipline or work discipline. They seem separate, and building one doesn't obviously help the others.

But the aMCC doesn't work that way. Because it governs a single, general-purpose capacity for effortful self-regulation, strengthening it in one area makes it more available everywhere.

This is why people who develop serious exercise habits often find their diet improves without consciously trying. Why someone who quits scrolling often notices they're more productive at work, more patient in relationships, more willing to have hard conversations. The discipline isn't compartmentalized; it's the same neural infrastructure, now stronger.

This is also why starting with anything hard is better than trying to do everything at once. You're not building willpower for phone reduction specifically. You're building the neural structure that makes all self-directed behavior easier.

## The Discomfort You're Avoiding Is the Training

This changes the interpretation of discomfort entirely.

When you feel the urge to scroll and you don't, that discomfort isn't just the price you pay for progress. That discomfort is the progress. The resistance is the stimulus. The discomfort of not checking your phone, of finishing the workout, of sitting with boredom without reaching for relief, that specific experience is what causes the aMCC to develop.

People often wait for discipline to feel natural before doing hard things. But that's backwards. Discipline feels natural after you've done the hard thing enough times that the aMCC has grown to support it.

You don't wait to feel disciplined. You act disciplined, and then the feeling follows.

## The Compound Effect of Hard Choices

Discipline doesn't just get easier over time, it compounds.

The first week of reducing phone use is the hardest it will ever be. Not because you're bad at it, but because your aMCC is starting from wherever it is. Each day you push through, the structural capacity increases slightly. Each week that passes, you're operating with a marginally stronger willpower infrastructure.

Six weeks in, the same resistance that felt overwhelming in week one is manageable. Not because your circumstances changed. Because your brain changed.

The ancient observation, "hard choices, easy life; easy choices, hard life," is describing a real neurological dynamic. Every difficult choice you make slightly strengthens the system that makes future choices easier. Every easy choice you default to slightly atrophies it. Over months and years, the divergence becomes enormous.

This is the actual cost of chronic easy dopamine: not just what you're missing out on in the moment, but the gradual weakening of the very infrastructure you'd need to choose something better.

## What to Do With This

You don't need to overhaul your life tomorrow. The aMCC responds to any meaningful resistance, not just dramatic sacrifice.

Start with one uncomfortable thing per day that you'd otherwise avoid. The discomfort is the point. Not punishment, training.

It might be putting your phone in another room when you sit down to work. It might be going for a walk when every instinct says to lie down. It might be finishing a task you've been avoiding for three days.

The domain matters less than the consistency. Small, regular exposure to voluntary discomfort, the kind where you could easily take the easier option but don't, is what builds the infrastructure.

And here's the thing about Rewired's daily goal structure: it's not just about reducing screen time. Every goal you complete that felt hard to start is aMCC training. Every focus session you honor when your phone was pulling at you. Every day you keep the streak going when breaking it would have been easy.

You're not just managing a habit. You're building the version of yourself for whom managing that habit is natural.

The discomfort is the point. Always has been.
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
