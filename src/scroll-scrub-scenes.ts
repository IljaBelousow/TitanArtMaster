/** Optional scroll-scrub scene configuration. No scroll-scrub component is used by this site. */
export type ScrollScrubScene = never;
export type ScrollScrubTheme = { accent: string; background: string; ink: string; muted: string };
export const scrollScrubTheme: ScrollScrubTheme = { accent: "#c3a06e", background: "#151719", ink: "#f1f2f0", muted: "#a7aaa9" };
export const scrollScrubScenes: ScrollScrubScene[] = [];
