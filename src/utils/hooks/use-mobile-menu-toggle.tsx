import { MOBILE_BREAKPOINT } from "@/sources/constants";
import { useState, useEffect } from "react";
import { useWindowSize } from "react-use";
import { useRef } from "react";

export const useMobileMenuToggle = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { width } = useWindowSize();
  const isMobile = width <= MOBILE_BREAKPOINT;
  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (isMenuOpen && isMobile) {
      document.body.classList.add("bodyBlock", "backdrop");
    } else {
      document.body.classList.remove("bodyBlock", "backdrop");
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobile &&
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.classList.remove("bodyBlock", "backdrop");
    };
  }, [isMenuOpen, isMobile]);

  const toggleMenu = () => {
    if (isMobile) {
      setIsMenuOpen(!isMenuOpen);
    }
  };

  const closeMenu = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  return { isMenuOpen, isMobile, toggleMenu, closeMenu, menuRef };
};
