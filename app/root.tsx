import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { useRef } from "react";
import { useLocation } from "react-router";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollTrigger);

export function Layout({ children }: { children: React.ReactNode }) {
  const main = useRef<HTMLDivElement>(null);
  const smoother = useRef<ScrollSmoother | null>(null);
  const location = useLocation();

  useGSAP(
    () => {
      smoother.current = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.5,
        effects: true,
      });

      const handleAnchorClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const link = target.closest('a[href^="#"]');

        if (link) {
          e.preventDefault();
          const hash = link.getAttribute("href");

          if (hash) {
            // --- GUNAKAN KODE ANDA DI SINI ---
            // GSAP akan otomatis menargetkan scroller yang benar
            // karena ScrollSmoother sudah mengaturnya.
            gsap.to(window, {
              duration: 1.5,
              scrollTo: { y: hash, offsetY: 80 }, // offsetY untuk memberi jarak dari atas (misal: untuk header)
              ease: "power2.inOut",
            });
          }
        }
      };

      document.addEventListener("click", handleAnchorClick);

      return () => {
        document.removeEventListener("click", handleAnchorClick);
      };
    },
    { scope: main }
  );

  useGSAP(
    () => {
      const timeout = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 200);

      return () => clearTimeout(timeout);
    },
    { dependencies: [location.pathname], scope: main }
  );

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div ref={main}>
          <div id="smooth-wrapper">
            <div id="smooth-content">{children}</div>
          </div>
        </div>

        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  { rel: "icon", href: "/logo-white.png" },
];
