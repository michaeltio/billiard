import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  // ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

import { gsap } from "gsap";
import { SpeedInsights } from "@vercel/speed-insights/react";
// import { ScrollSmoother } from "gsap/ScrollSmoother";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { useRef } from "react";
import { useLocation } from "react-router";

export function Layout({ children }: { children: React.ReactNode }) {
  const main = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const smoother = useRef<ScrollSmoother | null>(null);

  useGSAP(
    async () => {
      // 1. Impor plugin secara dinamis HANYA di client-side
      const { ScrollSmoother } = await import("gsap/ScrollSmoother");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollTrigger);

      let skewSetter = gsap.quickTo("img", "skewY"),
        clamp = gsap.utils.clamp(-2, 2);

      smoother.current = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.5,
        effects: true,
        onUpdate: (self) => skewSetter(clamp(self.getVelocity() / -50)),
        onStop: () => skewSetter(0),
      });

      ScrollTrigger.create({
        trigger: ".nav-header",
        start: "top top",
        endTrigger: "footer",
        end: "bottom+=100vh bottom",
        pin: ".nav-header",
        pinType: "fixed",
        markers: true,
        pinReparent: true,
        pinSpacing: false,
      });
    },

    { scope: main }
  );

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-[#253872]">
        <div ref={main}>
          <div id="smooth-wrapper">
            <div id="smooth-content">{children}</div>
          </div>
        </div>
        <SpeedInsights />

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
