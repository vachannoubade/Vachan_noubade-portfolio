export const SECTION_IDS = {
  TOP: "top",
  TEAM: "team",
  ABOUT: "about",
  WORK: "work",
  GALLERY: "gallery",
  CONTACT: "contact",
} as const;

export const SECTION_IDS_ARRAY = [
  SECTION_IDS.TOP,
  SECTION_IDS.TEAM,
  SECTION_IDS.WORK,
  SECTION_IDS.ABOUT,
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
  TEAM: "— Team —",
  ABOUT: "— About —",
  SELECTED_WORK: "Selected Work",
  STUDIO_FEED: "Studio Feed",
  CONTACT: "— Contact —",
} as const;
