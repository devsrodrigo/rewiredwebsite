#!/usr/bin/env bash
# Helper: stage, commit, and push the redesign.
# Run from the repo root:  bash commit-redesign.sh
set -euo pipefail

cd "$(dirname "$0")"

# Verify build still passes locally before pushing.
echo "→ Running production build…"
npm run build

echo
echo "→ Staging changes…"
git add -A

echo
echo "→ Committing…"
git commit -m "Redesign: Apple-grade visual system + real product screenshots

- New design tokens (pure neutrals, signal-green/warning-amber accents)
- Inter + Inter Tight typography, larger display scale, tighter tracking
- Removed decorative gradients (text + buttons); single accent ring kept
- Real iPhone-bezel screenshots wired through lib/assets.ts
- Animated detox countdown GIF used as the hero product visual
- Rebuilt Hero, Problem, Difference, HowItWorks, Features, SocialProof, CTA
- Restyled Features, How-it-works, Science, About, Download, Blog, Support,
  Privacy, Privacy-policy, Terms, 404, Navbar, Footer
- Added Phone primitive, reflowed Button/Card/Badge/StatCounter/SectionHeading
- Back-compat shims for any legacy class names" || echo "(nothing to commit)"

echo
echo "→ Pushing…"
git push

echo
echo "Done."
