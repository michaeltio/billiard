import { cn } from "~/lib/utils";
import { Link } from "react-router";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [lastScrollY]);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsVisible(false);
      } else if (window.scrollY < lastScrollY) {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };
  return (
    <nav
      className={cn(
        "fixed top-4 left-1/2 transform -translate-x-1/2 z-50",
        "bg-[#374f7e] text-white px-6 py-3 rounded-full shadow-lg",
        "transition-all duration-300 ease-in-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
      )}
    >
      <ul className="flex space-x-6 md:space-x-8">
        <li>
          <a href="#gallery">Testing</a>
          <Link
            to="#hero"
            className="hover:text-gray-300 font-medium text-sm md:text-base"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="#gallery"
            className="hover:text-gray-300 font-medium text-sm md:text-base"
          >
            Gallery
          </Link>
        </li>
        <li>
          <Link
            to="#pricing"
            className="hover:text-gray-300 font-medium text-sm md:text-base"
          >
            Pricing
          </Link>
        </li>
        <li>
          <Link
            to="#faq"
            className="hover:text-gray-300 font-medium text-sm md:text-base"
          >
            FAQ
          </Link>
        </li>
      </ul>
    </nav>
  );
}
