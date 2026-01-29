// 이미지 프리로드 유틸리티

// 배경 이미지들 import
import bgLanding from "../assets/landing/bg_landing.webp";
import bgHome from "../assets/home/landing_02.webp";
import bgBackground from "../assets/background/background_background.webp";
import bgOverview from "../assets/overview_pastandpresent_background.webp";
import bgConduct from "../assets/conduct/bg_hangsildo.webp";

// 큰 이미지들 import - Landing
import landingDoorOpen from "../assets/landing/landing_01_open_row.png";
import landingDoorClose from "../assets/landing/landing_01_close.png";

// 큰 이미지들 import - Home
import homeDoorOpen from "../assets/home/landing_02_open.png";
import homeDoorGradation from "../assets/home/landing_02_open_gradation_row.png";

// 큰 이미지들 import - Conduct
import conductExplanation from "../assets/conduct/hangsildo_explanation.webp";
import conductCardDefault from "../assets/conduct/modal_images/card_default.png";
import conductCloud1 from "../assets/conduct/cloud1_hover.png";
import conductCloud2 from "../assets/conduct/cloud2_hover.png";
import conductCloud3 from "../assets/conduct/cloud3_hover.png";
import conductCloud4 from "../assets/conduct/cloud4_hover.png";

// 큰 이미지들 import - PastandPresent
import ppBookBg from "../assets/pastandpresent/referbook_past_background_row.png";
import ppPresentBg from "../assets/pastandpresent/present_background_row.png";
import ppQuizImage from "../assets/pastandpresent/quiz_image.png";

// 큰 이미지들 import - Background
import bgLetterText from "../assets/background/background_letter_text.png";
import bgLetter from "../assets/background/background_letter.png";

// 페이지별 배경 이미지 매핑
export const PAGE_BACKGROUNDS = {
  landing: bgLanding,
  home: bgHome,
  background: bgBackground,
  overview: bgOverview,
  conduct: bgConduct,
  pastandpresent: bgOverview,
};

// 페이지별 큰 이미지들 매핑
export const PAGE_LARGE_IMAGES = {
  landing: [landingDoorOpen, landingDoorClose],
  home: [homeDoorOpen, homeDoorGradation],
  conduct: [
    conductExplanation,
    conductCardDefault,
    conductCloud1,
    conductCloud2,
    conductCloud3,
    conductCloud4,
  ],
  pastandpresent: [ppBookBg, ppPresentBg, ppQuizImage],
  background: [bgLetterText, bgLetter],
  overview: [],
};

// 단일 이미지 프리로드
export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

// 여러 이미지 프리로드
export const preloadImages = (sources) => {
  return Promise.all(sources.map(preloadImage));
};

// 다음 페이지들의 배경 이미지 프리로드
export const preloadNextPages = (pageKeys) => {
  const sources = pageKeys.map((key) => PAGE_BACKGROUNDS[key]).filter(Boolean);
  return preloadImages(sources);
};

// 다음 페이지들의 배경 + 큰 이미지 모두 프리로드
export const preloadNextPagesAll = (pageKeys) => {
  const backgrounds = pageKeys
    .map((key) => PAGE_BACKGROUNDS[key])
    .filter(Boolean);

  const largeImages = pageKeys.flatMap((key) => PAGE_LARGE_IMAGES[key] || []);

  return preloadImages([...backgrounds, ...largeImages]);
};

// 모든 배경 이미지 프리로드
export const preloadAllBackgrounds = () => {
  return preloadImages(Object.values(PAGE_BACKGROUNDS));
};
