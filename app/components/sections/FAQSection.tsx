import { Button } from "~/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

export default function FAQSection() {
  return (
    <section className="py-20 bg-gray-50">
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
            <AccordionItem
              value="item-1"
              className="bg-white rounded-lg border shadow-sm"
              style={{ borderColor: "#374f7e" }}
            >
              <AccordionTrigger
                className="px-6 py-4 text-left font-semibold hover:no-underline"
                style={{ color: "#374f7e" }}
              >
                What are your operating hours?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                We are open 24/7! Our billiard hall operates around the clock to
                accommodate all schedules. However, please note that our happy
                hour pricing varies depending on the time and day of the week.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="bg-white rounded-lg border shadow-sm"
              style={{ borderColor: "#374f7e" }}
            >
              <AccordionTrigger
                className="px-6 py-4 text-left font-semibold hover:no-underline"
                style={{ color: "#374f7e" }}
              >
                Do I need to make a reservation?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                While walk-ins are welcome, we highly recommend making a
                reservation, especially during peak hours (evenings and
                weekends). You can book online or call us directly. Reservations
                ensure you get your preferred table and time slot.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="bg-white rounded-lg border shadow-sm"
              style={{ borderColor: "#374f7e" }}
            >
              <AccordionTrigger
                className="px-6 py-4 text-left font-semibold hover:no-underline"
                style={{ color: "#374f7e" }}
              >
                What equipment is provided?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                All table rentals include professional cue sticks, chalk, and
                billiard balls. We maintain our equipment to the highest
                standards. If you prefer to use your own cue stick, you're
                welcome to bring it. We also have premium cues available for
                rent.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="bg-white rounded-lg border shadow-sm"
              style={{ borderColor: "#374f7e" }}
            >
              <AccordionTrigger
                className="px-6 py-4 text-left font-semibold hover:no-underline"
                style={{ color: "#374f7e" }}
              >
                How does the solo training work?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Solo training is completely FREE from Monday to Friday, 12:00 -
                18:00. This is perfect for practicing your shots and improving
                your skills. Equipment is provided, and you'll have dedicated
                practice time without interruption. Just show up during these
                hours!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className="bg-white rounded-lg border shadow-sm"
              style={{ borderColor: "#374f7e" }}
            >
              <AccordionTrigger
                className="px-6 py-4 text-left font-semibold hover:no-underline"
                style={{ color: "#374f7e" }}
              >
                What payment methods do you accept?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                We accept cash, all major credit cards (Visa, MasterCard,
                American Express), debit cards, and popular digital payment
                methods like GoPay, OVO, and DANA. Payment is typically made
                after your session ends.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-6"
              className="bg-white rounded-lg border shadow-sm"
              style={{ borderColor: "#374f7e" }}
            >
              <AccordionTrigger
                className="px-6 py-4 text-left font-semibold hover:no-underline"
                style={{ color: "#374f7e" }}
              >
                Do you offer group discounts?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Yes! We offer special group discounts for parties of 4 or more
                people. The discount varies depending on group size and duration
                of play. Contact us for specific group pricing and to arrange
                your group booking.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-7"
              className="bg-white rounded-lg border shadow-sm"
              style={{ borderColor: "#374f7e" }}
            >
              <AccordionTrigger
                className="px-6 py-4 text-left font-semibold hover:no-underline"
                style={{ color: "#374f7e" }}
              >
                Is food and drinks allowed?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                We have a comfortable lounge area where you can enjoy snacks and
                beverages. Outside food and drinks are not permitted, but we
                offer a selection of refreshments, coffee, and light meals.
                Please keep food and drinks in the designated areas only.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-8"
              className="bg-white rounded-lg border shadow-sm"
              style={{ borderColor: "#374f7e" }}
            >
              <AccordionTrigger
                className="px-6 py-4 text-left font-semibold hover:no-underline"
                style={{ color: "#374f7e" }}
              >
                Do you host tournaments or events?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Absolutely! We regularly host tournaments and special events. We
                also offer private event bookings for birthday parties,
                corporate events, and competitions. Check our events calendar or
                contact us to discuss hosting your own tournament.
              </AccordionContent>
            </AccordionItem>
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
