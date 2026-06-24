// Centralized image assets. Next.js will hash and serve these
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

// New, high-resolution product captures (ImagesforWebsite)
import homeCountdown from "../ScreenshotsandVideos/ImagesforWebsite/12.png";
import echoScreen from "../ScreenshotsandVideos/ImagesforWebsite/14.png";
import detoxDays from "../ScreenshotsandVideos/ImagesforWebsite/7.png";
import minutesSetup from "../ScreenshotsandVideos/ImagesforWebsite/8.png";
import appSelect from "../ScreenshotsandVideos/ImagesforWebsite/9.png";
import todaysUnlocks from "../ScreenshotsandVideos/ImagesforWebsite/10.png";
import profileWiring from "../ScreenshotsandVideos/ImagesforWebsite/11.png";
import bookReader from "../ScreenshotsandVideos/ImagesforWebsite/13.png";

// Dumb Phone Mode timer cards (nature backdrops)
import timer15 from "../ScreenshotsandVideos/ImagesforWebsite/1.png";
import timer25 from "../ScreenshotsandVideos/ImagesforWebsite/2.png";
import timer45 from "../ScreenshotsandVideos/ImagesforWebsite/3.png";
import timer60 from "../ScreenshotsandVideos/ImagesforWebsite/4.png";

// Schedule / routine cards
import routineMorning from "../ScreenshotsandVideos/ImagesforWebsite/5.png";
import routineNight from "../ScreenshotsandVideos/ImagesforWebsite/6.png";

// Transparent, free-floating elements (no background box)
import timer15t from "../ScreenshotsandVideos/TransparentNewElements/1.png";
import timer25t from "../ScreenshotsandVideos/TransparentNewElements/2.png";
import timer45t from "../ScreenshotsandVideos/TransparentNewElements/3.png";
import timer60t from "../ScreenshotsandVideos/TransparentNewElements/4.png";
import routineMorningT from "../ScreenshotsandVideos/TransparentNewElements/5.png";
import routineNightT from "../ScreenshotsandVideos/TransparentNewElements/6.png";
import echoMascotT from "../ScreenshotsandVideos/TransparentNewElements/15.png";
import heroShot from "../ScreenshotsandVideos/TransparentNewElements/NEWHeadlineImage.png";

export const screenshots = {
  // legacy
  pickHoldsYouBack,
  countdownLater,
  countdownGif,
  lockoutFull,
  focusBlocked,
  echoChat,
  profileBrain,
  earnedToday,
  monkMode,
  // new product captures
  homeCountdown,
  echoScreen,
  detoxDays,
  minutesSetup,
  appSelect,
  todaysUnlocks,
  profileWiring,
  bookReader,
  echoMascot: echoMascotT,
  heroShot,
};

export const timerCards = {
  "15": { src: timer15, label: "15m" },
  "25": { src: timer25, label: "25m" },
  "45": { src: timer45, label: "45m" },
  "60": { src: timer60, label: "60m" },
} as const;

export const routineCards = {
  morning: { src: routineMorning, label: "Morning", window: "9 AM – 6 PM" },
  night: { src: routineNight, label: "Night", window: "8 PM – 6 AM" },
} as const;

// Transparent (free-floating) variants for layered, JOMO-style clusters
export const floatingCards = {
  timer15: timer15t,
  timer25: timer25t,
  timer45: timer45t,
  timer60: timer60t,
  morning: routineMorningT,
  night: routineNightT,
};

export type Screenshot = keyof typeof screenshots;
