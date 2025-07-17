import { Button } from "~/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

import { faq } from "~/data/faq";

export default function FAQSection() {
  return (
    <section className="py-20 bg-gray-50" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{ color: "#374f7e" }}>
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Find answers to common questions about our billiard facilities and
            services
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faq.map((item) => (
              <AccordionItem
                value={item.id}
                className="bg-white rounded-lg border shadow-sm"
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
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <Button
            variant="outline"
            size="lg"
            className="text-white px-8 py-3 rounded-full border-2 transition-all duration-300 bg-[#374f7e] border-[#374f7e]"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
