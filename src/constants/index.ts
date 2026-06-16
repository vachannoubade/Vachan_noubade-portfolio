export const SECTION_IDS = {
  TOP: "top",
  ABOUT: "about",
  WORK: "work",
  GALLERY: "gallery",
  CONTACT: "contact",
} as const;

export const SECTION_IDS_ARRAY = [
  SECTION_IDS.TOP,
  SECTION_IDS.ABOUT,
  SECTION_IDS.WORK,
  SECTION_IDS.GALLERY,
  SECTION_IDS.CONTACT,
] as const;

export const COLORS = {
  TEXT: "#dedede",
  TEXT_DIM: "rgba(222, 222, 222, 0.45)",
  TEXT_DIM_30: "rgba(222, 222, 222, 0.3)",
  TEXT_50: "rgba(222, 222, 222, 0.5)",
} as const;

export const SECTION_LABELS = {
  ABOUT: "— About —",
  SELECTED_WORK: "Selected Work",
  STUDIO_FEED: "Studio Feed",
  CONTACT: "— Contact —",
} as const;
