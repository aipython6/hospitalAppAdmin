import { useBreakpoints } from '@vueuse/core'
export function openNewTab(url: string) {
  window.open(url)
}

export function useScreenPixel() {
  const breakpoints = useBreakpoints({
    sm: 640,
    md: 766,
    lg: 1024,
    xl: 1280,
    "2xl": 1536
  });
  const sm = breakpoints.smaller("sm");
  const md = breakpoints.between("sm", "md");
  const lg = breakpoints.between("md", "lg");
  const xl = breakpoints.between("lg", "xl");
  const xxl = breakpoints.between("xl", "2xl");
  const xxxl = breakpoints["2xl"];
  return {
    sm,
    md,
    lg,
    xl,
    xxl,
    xxxl
  };
}
