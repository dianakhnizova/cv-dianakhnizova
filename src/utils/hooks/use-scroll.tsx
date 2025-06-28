import { SCROLL_BREAKPOINT } from "@/sources/constants";
import { useWindowScroll } from "react-use";

export const useScroll = () => {
  const { y: scrollY } = useWindowScroll();

  const isScrolled = scrollY > SCROLL_BREAKPOINT;
  return { scrollY, isScrolled };
};
