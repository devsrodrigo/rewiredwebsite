// Centralized image assets — Next.js will hash and serve these
// from /_next/static. Source files live in /public/screenshots and /ScreenshotsandVideos.

import onboardingShare from "../public/screenshots/IMG_1322.png";
import countdownAcute from "../public/screenshots/IMG_1323.png";
import lockoutOverlay from "../public/screenshots/IMG_1326.png";
import focusBlocked from "../public/screenshots/IMG_1328.png";
import echoChat from "../public/screenshots/IMG_1329.png";
import profileBrain from "../public/screenshots/IMG_1331.png";
import lockoutFull from "../ScreenshotsandVideos/IMG_1335.jpg";
import countdownLater from "../public/screenshots/IMG_1339.png";
import earnedToday from "../ScreenshotsandVideos/IMG_1341.jpg";
import monkMode from "../ScreenshotsandVideos/IMG_1342.jpg";
import countdownGif from "../ScreenshotsandVideos/download.gif";

export const screenshots = {
  onboardingShare,
  countdownAcute,
  countdownLater,
  countdownGif,
  lockoutOverlay,
  lockoutFull,
  focusBlocked,
  echoChat,
  profileBrain,
  earnedToday,
  monkMode,
};

export type Screenshot = keyof typeof screenshots;
