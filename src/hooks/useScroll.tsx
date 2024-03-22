import { useEffect, useRef, useState } from "react";

export default function useScroll(selectedTabIndex: number, isMobile) {
  const [isOverflowing, setIsOverflowing] = useState(false);
  const scrollContainerRef: any = useRef(null);

  useEffect(() => {
    const element: any = scrollContainerRef.current;
    if (element) {
      setIsOverflowing(element.scrollWidth > element.clientWidth);
      scrollToSelectedTab();
    }
  }, [scrollContainerRef, selectedTabIndex, isMobile]);

  const scrollToSelectedTab = () => {
    const element = scrollContainerRef.current;
    if (element) {
      const children = Array.from(element.children);
      if (children.length > selectedTabIndex) {
        const selectedTabElement: any = children[selectedTabIndex];
        const scrollLeft = selectedTabElement.offsetLeft;
        element.scrollTo({
          left: scrollLeft,
          behavior: "smooth",
        });
      }
    }
  };

  const scrollToRight = () => {
    if (scrollContainerRef.current) {
      const { scrollWidth, clientWidth } = scrollContainerRef.current;
      const maxScrollLeft = scrollWidth - clientWidth;

      scrollContainerRef.current.scrollTo({
        left: maxScrollLeft,
        behavior: "smooth",
      });
    }
  };

  return { scrollContainerRef, isOverflowing, scrollToRight, scrollToSelectedTab };
}
