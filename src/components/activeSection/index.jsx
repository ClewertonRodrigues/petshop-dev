import { useEffect, useState } from "react";

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const footer = document.querySelector("footer");

    function handleScroll() {
      const scrollPosition = window.scrollY + window.innerHeight * 0.5;

      if (footer) {
        const footerTop = footer.offsetTop;

        if (scrollPosition >= footerTop) {
          setActiveSection("");
          return;
        }
      }

      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;

        if (scrollPosition >= sectionTop) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return activeSection;
}