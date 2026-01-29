// 이미지 프리로드 유틸리티

// 배경 이미지들 import
import bgLanding from "../assets/landing/bg_landing.webp";
import bgHome from "../assets/home/landing_02.webp";
import bgBackground from "../assets/background/background_background.webp";
import bgOverview from "../assets/overview_pastandpresent_background.webp";
import bgConduct from "../assets/conduct/bg_hangsildo.webp";

// 페이지별 배경 이미지 매핑
export const PAGE_BACKGROUNDS = {
  landing: bgLanding,
  home: bgHome,
  background: bgBackground,
  overview: bgOverview,
  conduct: bgConduct,
  pastandpresent: bgOverview, // Overview와 동일한 배경 사용
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
  const sources = pageKeys
    .map((key) => PAGE_BACKGROUNDS[key])
    .filter(Boolean);
  return preloadImages(sources);
};

// 모든 배경 이미지 프리로드
export const preloadAllBackgrounds = () => {
  return preloadImages(Object.values(PAGE_BACKGROUNDS));
};
