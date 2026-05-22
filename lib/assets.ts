// Centralized image assets — Next.js will hash and serve these
// from /_next/static. Source files live in /Screenshots and Videos.

import onboardingShare from "../Screenshots and Videos/IMG_1322.PNG";
import countdownAcute from "../Screenshots and Videos/IMG_1323.PNG";
import lockoutOverlay from "../Screenshots and Videos/IMG_1326.PNG";
import focusBlocked from "../Screenshots and Videos/IMG_1328.PNG";
import echoChat from "../Screenshots and Videos/IMG_1329.PNG";
import profileBrain from "../Screenshots and Videos/IMG_1331.PNG";
import lockoutFull from "../Screenshots and Videos/IMG_1335.jpg";
import countdownLater from "../Screenshots and Videos/IMG_1339.PNG";
import earnedToday from "../Screenshots and Videos/IMG_1341.jpg";
import monkMode from "../Screenshots and Videos/IMG_1342.jpg";
import countdownGif from "../Screenshots and Videos/download.gif";

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
