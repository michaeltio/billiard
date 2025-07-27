import { cn } from "~/lib/utils";
import { Link } from "react-router";
import { gsap } from "gsap";
import React from "react";
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";

export default function NavBar() {
  useGSAP(async () => {
    const { ScrollToPlugin } = await import("gsap/ScrollToPlugin");
    gsap.registerPlugin(ScrollToPlugin);
  });

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    event.preventDefault();

    gsap.to(window, {
      duration: 1.5,
      scrollTo: {
        y: targetId,
      },

      ease: "power3.inOut",
    });
  };

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-[#ff66b4] text-white px-6 py-3 rounded-full shadow-lg z-50">
      <ul className="flex space-x-6 md:space-x-8">
        <li>
          <Link
            to="#hero"
            onClick={(e) => {
              handleNavClick(e, "#hero");
            }}
            className="hover:text-gray-300 font-medium text-sm md:text-base"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="#gallery"
            onClick={(e) => {
              handleNavClick(e, "#gallery");
            }}
            className="hover:text-gray-300 font-medium text-sm md:text-base"
          >
            Gallery
          </Link>
        </li>
        <li>
          <Link
            to="#pricing"
            onClick={(e) => {
              handleNavClick(e, "#pricing");
            }}
            className="hover:text-gray-300 font-medium text-sm md:text-base"
          >
            Pricing
          </Link>
        </li>
        <li>
          <Link
            to="#faq"
            onClick={(e) => {
              handleNavClick(e, "#faq");
            }}
            className="hover:text-gray-300 font-medium text-sm md:text-base"
          >
            FAQ
          </Link>
        </li>
      </ul>
    </nav>
  );
}
