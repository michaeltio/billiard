import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

import { gsap } from "gsap";
import { Button } from "~/components/ui/button";

// import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
// import { SplitText } from "gsap/SplitText";

import { faq } from "~/data/faq";

export default function FAQSection() {
  const faqSectionContainer = useRef<HTMLObjectElement>(null);

  // useGSAP(
  //   async () => {
  //     const { ScrollTrigger } = await import("gsap/ScrollTrigger");
  //     const { SplitText } = await import("gsap/SplitText");

  //     gsap.registerPlugin(ScrollTrigger, SplitText);

  //     const split = SplitText.create("[data-anim='faq-header-container']", {
  //       type: "words",
  //     });

  //     gsap.from(split.words, {
  //       scrollTrigger: {
  //         // markers: true,
  //         trigger: "[data-anim='faq-header-container']",
  //         start: "20px 75%",
  //         toggleActions: "play none none reverse",
  //       },
  //       y: 100,
  //       autoAlpha: 0,
  //       stagger: 0.05,
  //     });

  //     gsap.from("[data-anim='accordion-item']", {
  //       scrollTrigger: {
  //         // markers: true,
  //         trigger: "[data-anim='faq-header-container']",
  //         toggleActions: "play none none reverse",
  //         start: "20px 75%",
  //       },
  //       stagger: 0.05,
  //       autoAlpha: 0,
  //       xPercent: -100,
  //       duration: 0.7,
  //     });
  //   },
  //   { scope: faqSectionContainer }
  // );

  return (
    <section
      ref={faqSectionContainer}
      className="max-w-screen-lg mx-auto overflow-visible py-10"
      id="faq"
    >
      <div className="">
        <div data-anim="faq-header-container" className="text-center">
          <h2 className="text-4xl font-bold" style={{ color: "#374f7e" }}>
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg">
            Find answers to common questions about our billiard facilities and
            services
          </p>
        </div>
        <div className="mt-5">
          <Accordion type="single" collapsible className="space-y-4">
            {faq.map((item) => (
              <AccordionItem
                data-anim="accordion-item"
                value={item.id}
                key={item.id}
                className="bg-white rounded-lg border border-solid shadow-sm"
                style={{ borderColor: "#374f7e" }}
              >
                <AccordionTrigger
                  className="px-6 py-4 text-left font-semibold hover:no-underline"
                  style={{ color: "#374f7e" }}
                >
                  {item.header}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  {item.body}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        {/* Contact CTA */}
        {/* <div className="text-center mt-12" data-anim="accordion-item">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <Button
            variant="outline"
            size="lg"
            className="text-white px-8 py-3 rounded-full border-2 transition-all duration-300 bg-[#374f7e] border-[#374f7e]"
          >
            Contact Us
          </Button>
        </div> */}
      </div>
    </section>
  );
}
