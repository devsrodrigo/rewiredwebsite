// Centralized image assets — Next.js will hash and serve these
// from /_next/static. Source files live in /public/screenshots and /ScreenshotsandVideos.

import pickHoldsYouBack from "../public/screenshots/Pickwhatholdsyouback.png";
import focusBlocked from "../public/screenshots/IMG_1328.png";
import echoChat from "../public/screenshots/IMG_1329.png";
import profileBrain from "../public/screenshots/IMG_1331.png";
import lockoutFull from "../public/screenshots/IMG_1335.jpg";
import countdownLater from "../public/screenshots/IMG_1339.png";
import earnedToday from "../ScreenshotsandVideos/IMG_1341.jpg";
import monkMode from "../ScreenshotsandVideos/IMG_1342.jpg";
import countdownGif from "../ScreenshotsandVideos/download.gif";

export const screenshots = {
  pickHoldsYouBack,
  countdownLater,
  countdownGif,
  lockoutFull,
  focusBlocked,
  echoChat,
  profileBrain,
  earnedToday,
  monkMode,
};

export type Screenshot = keyof typeof screenshots;
