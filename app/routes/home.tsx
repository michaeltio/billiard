import type { Route } from "./+types/home";
import { Button } from "~/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import Masonry from "react-masonry-css";
import { cn } from "~/lib/utils";
import { Link } from "react-router";
import { useState, useEffect } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Great Billiard" },
    { name: "description", content: "Billiard Place" },
  ];
}

export default function Home() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        // Scrolling down and past a certain threshold
        setIsVisible(false);
      } else if (window.scrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  const breakpointColumnsObj = {
    default: 4, // Default 4 kolom
    1100: 3, // 3 kolom jika lebar layar <= 1100px
    700: 2, // 2 kolom jika lebar layar <= 700px
    500: 1, // 1 kolom jika lebar layar <= 500px
  };

  const items = [
    {
      id: "123",
      title: "midnight",
      imageUrl:
        "https://whatsnewindonesia.com/sites/default/files/inline-images/outbreakpoolandbar.jpeg",
      description: "World",
    },
    {
      id: "123",
      title: "sky",
      imageUrl:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/YBgrLNa14WFVgB8a/img_1931-dWxypDaqbkIMppXv.jpeg",
      description: "World",
    },
    {
      id: "123",
      title: "midnight",
      imageUrl:
        "https://visitmineralwells.org/wp-content/uploads/2023/01/Legends-Pool-Hall-1200x600-1.jpg",
      description: "World",
    },
    {
      id: "123",
      title: "sky",
      imageUrl:
        "https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg",
      description: "World",
    },
    {
      id: "123",
      title: "sky",
      imageUrl:
        "https://www.thesaturdaypaper.com.au/sites/default/files/styles/article_large/public/images/sport_robby_foldvari_for_web.jpg?itok=FpwIrS_e",
      description: "World",
    },
    {
      id: "123",
      title: "midnight",
      imageUrl:
        "https://i.ytimg.com/vi/hBf7s2c5QaI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCJeNaTy7R0TQUVyjsjt3__uYF8bw",
      description: "World",
    },
    {
      id: "123",
      title: "sky",
      imageUrl:
        "https://avatars.mds.yandex.net/get-altay/9368060/2a00000188bfc10a5f6a3d1b3812baf2051a/L_height",
      description: "World",
    },
    {
      id: "123",
      title: "midnight",
      imageUrl:
        "https://images.pexels.com/photos/937980/pexels-photo-937980.jpeg",
      description: "World",
    },
    {
      id: "123",
      title: "sky",
      imageUrl:
        "https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg",
      description: "World",
    },
    {
      id: "123",
      title: "sky",
      imageUrl:
        "https://images.pexels.com/photos/848573/pexels-photo-848573.jpeg",
      description: "World",
    },
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [lastScrollY]); // Re-run effect when lastScrollY changes
  return (
    <main>
      <nav
        className={cn(
          "fixed top-4 left-1/2 transform -translate-x-1/2 z-50",
          "bg-[#374f7e] text-white px-6 py-3 rounded-full shadow-lg",
          "transition-all duration-300 ease-in-out",
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full"
        )}
      >
        <ul className="flex space-x-6 md:space-x-8">
          <li>
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
          <li>
            <Link
              to="#contact"
              className="hover:text-gray-300 font-medium text-sm md:text-base"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background GIF/Video Placeholder */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800 opacity-90">
            {/* Placeholder for billiard GIF - you can replace this with actual GIF */}
            <div className="absolute inset-0 bg-[url('https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZW4wbG1rbmRmYm8xeXBvdHZ4d2hwdDB5dTVsZHozNWJ0ZHNoYTMyeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l7epimG7ALYEa8QmLs/giphy.gif?height=1080&width=1920')] bg-cover bg-center opacity-30"></div>
          </div>
          <img
            src="/logo-white.png"
            className="absolute bottom-20 left-1/2 w-12 h-12  animate-bounce delay-100"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Quote */}
          <blockquote className="text-white mb-8">
            <p className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              {'"Every shot is a new opportunity"'}
            </p>
            <footer className="text-xl md:text-2xl text-white font-light">
              - Master the Table, Master the Game
            </footer>
          </blockquote>

          {/* Book Now Button */}
          <Button
            size="lg"
            className="bg-[#4a69aa] hover:bg-[#374f7e] text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Book Now
          </Button>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/50 to-transparent"></div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Gallery
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore our premium billiard facilities and memorable moments
            </p>
          </div>

          {/* Masonry Grid */}
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {items.map((item) => (
              <div key={item.id} className="item-card">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </Masonry>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold" style={{ color: "#374f7e" }}>
              Price List
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Affordable rates for every player, with special happy hour
              discounts
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Normal Price Card */}
            <div
              className="bg-white rounded-2xl p-8 shadow-lg border-2"
              style={{ borderColor: "#374f7e" }}
            >
              <div className="text-center mb-6">
                <h3
                  className="text-2xl font-bold mb-2"
                  style={{ color: "#374f7e" }}
                >
                  Normal Rate
                </h3>
                <div
                  className="text-4xl font-bold mb-2"
                  style={{ color: "#374f7e" }}
                >
                  Rp 50
                  <span className="text-lg font-normal text-gray-600">
                    /hour
                  </span>
                </div>
                <p className="text-gray-600">Standard pricing</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-gray-700">
                  <div
                    className="w-2 h-2 rounded-full mr-3"
                    style={{ backgroundColor: "#374f7e" }}
                  ></div>
                  <span>All days, all hours</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div
                    className="w-2 h-2 rounded-full mr-3"
                    style={{ backgroundColor: "#374f7e" }}
                  ></div>
                  <span>Premium table access</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div
                    className="w-2 h-2 rounded-full mr-3"
                    style={{ backgroundColor: "#374f7e" }}
                  ></div>
                  <span>Equipment included</span>
                </div>
              </div>
            </div>

            {/* Weekdays Happy Hour Card */}
            <div
              className="bg-white rounded-2xl p-8 shadow-lg border-2 relative overflow-hidden"
              style={{ borderColor: "#374f7e" }}
            >
              <div
                className="absolute top-0 right-0 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg"
                style={{ backgroundColor: "#374f7e" }}
              >
                POPULAR
              </div>
              <div className="text-center mb-6">
                <h3
                  className="text-2xl font-bold mb-2"
                  style={{ color: "#374f7e" }}
                >
                  Weekdays Special
                </h3>
                <p className="font-medium" style={{ color: "#374f7e" }}>
                  Monday - Thursday
                </p>
              </div>

              <div className="space-y-4">
                {/* 12:00 - 18:00 */}
                <div
                  className="bg-gray-50 rounded-lg p-4 border"
                  style={{ borderColor: "#374f7e" }}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <div
                        className="font-semibold"
                        style={{ color: "#374f7e" }}
                      >
                        12:00 - 18:00
                      </div>
                      <div className="text-sm text-gray-600">
                        Afternoon Happy Hour
                      </div>
                    </div>
                    <div
                      className="text-2xl font-bold"
                      style={{ color: "#374f7e" }}
                    >
                      Rp 35<span className="text-sm font-normal">/hr</span>
                    </div>
                  </div>
                </div>

                {/* 18:00 - 24:00 */}
                <div
                  className="bg-gray-50 rounded-lg p-4 border"
                  style={{ borderColor: "#374f7e" }}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <div
                        className="font-semibold"
                        style={{ color: "#374f7e" }}
                      >
                        18:00 - 24:00
                      </div>
                      <div className="text-sm text-gray-600">
                        Evening Happy Hour
                      </div>
                    </div>
                    <div
                      className="text-2xl font-bold"
                      style={{ color: "#374f7e" }}
                    >
                      Rp 45<span className="text-sm font-normal">/hr</span>
                    </div>
                  </div>
                </div>

                {/* 24:00 - 02:00 */}
                <div
                  className="bg-gray-50 rounded-lg p-4 border"
                  style={{ borderColor: "#374f7e" }}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <div
                        className="font-semibold"
                        style={{ color: "#374f7e" }}
                      >
                        24:00 - 02:00
                      </div>
                      <div className="text-sm text-gray-600">
                        Late Night Special
                      </div>
                    </div>
                    <div
                      className="text-2xl font-bold"
                      style={{ color: "#374f7e" }}
                    >
                      Rp 35<span className="text-sm font-normal">/hr</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Weekend Happy Hour Card */}
            <div
              className="bg-white rounded-2xl p-8 shadow-lg border"
              style={{ borderColor: "#374f7e" }}
            >
              <div className="text-center mb-6">
                <h3
                  className="text-2xl font-bold mb-2"
                  style={{ color: "#374f7e" }}
                >
                  Weekend Rates
                </h3>
                <p className="font-medium" style={{ color: "#374f7e" }}>
                  Friday - Sunday
                </p>
              </div>

              <div className="space-y-4">
                {/* 12:00 - 18:00 */}
                <div
                  className="bg-gray-50 rounded-lg p-4 border"
                  style={{ borderColor: "#374f7e" }}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <div
                        className="font-semibold"
                        style={{ color: "#374f7e" }}
                      >
                        12:00 - 18:00
                      </div>
                      <div className="text-sm text-gray-600">
                        Weekend Happy Hour
                      </div>
                    </div>
                    <div
                      className="text-2xl font-bold"
                      style={{ color: "#374f7e" }}
                    >
                      Rp 45<span className="text-sm font-normal">/hr</span>
                    </div>
                  </div>
                </div>

                {/* 24:00 - 02:00 */}
                <div
                  className="bg-gray-50 rounded-lg p-4 border"
                  style={{ borderColor: "#374f7e" }}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <div
                        className="font-semibold"
                        style={{ color: "#374f7e" }}
                      >
                        24:00 - 02:00
                      </div>
                      <div className="text-sm text-gray-600">
                        Late Night Weekend
                      </div>
                    </div>
                    <div
                      className="text-2xl font-bold"
                      style={{ color: "#374f7e" }}
                    >
                      Rp 45<span className="text-sm font-normal">/hr</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Solo Training Special Offer */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div
              className="rounded-2xl p-8 text-center shadow-xl relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #374f7e 0%, #2a3d66 100%)",
              }}
            >
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-2">
                  Solo Training
                </h3>
                <p className="text-white text-opacity-90 text-lg mb-4">
                  Perfect your skills with dedicated practice time
                </p>

                <div className="bg-gradient-to-br from-[#4a69aa] via-[#2a3d66] to-[#2a3d66] bg-opacity-20 rounded-xl p-6 backdrop-blur-sm">
                  <div className="text-white">
                    <div className="text-xl font-semibold mb-2">
                      Monday - Friday
                    </div>
                    <div className="text-lg mb-2">12:00 - 18:00</div>
                    <div className="text-4xl font-bold">
                      FREE
                      <span className="text-lg font-normal ml-2">
                        Solo Practice
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-bold mb-4"
              style={{ color: "#374f7e" }}
            >
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
                  We are open 24/7! Our billiard hall operates around the clock
                  to accommodate all schedules. However, please note that our
                  happy hour pricing varies depending on the time and day of the
                  week.
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
                  weekends). You can book online or call us directly.
                  Reservations ensure you get your preferred table and time
                  slot.
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
                  Solo training is completely FREE from Monday to Friday, 12:00
                  - 18:00. This is perfect for practicing your shots and
                  improving your skills. Equipment is provided, and you'll have
                  dedicated practice time without interruption. Just show up
                  during these hours!
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
                  people. The discount varies depending on group size and
                  duration of play. Contact us for specific group pricing and to
                  arrange your group booking.
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
                  We have a comfortable lounge area where you can enjoy snacks
                  and beverages. Outside food and drinks are not permitted, but
                  we offer a selection of refreshments, coffee, and light meals.
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
                  Absolutely! We regularly host tournaments and special events.
                  We also offer private event bookings for birthday parties,
                  corporate events, and competitions. Check our events calendar
                  or contact us to discuss hosting your own tournament.
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
      <footer style={{ backgroundColor: "#374f7e" }} className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Elite Billiard Club
              </h3>
              <p className="text-gray-300 mb-6 max-w-md">
                Premium billiard experience with professional tables,
                comfortable atmosphere, and exceptional service. Your
                destination for the perfect game.
              </p>

              {/* Address */}
              <div className="mb-6">
                <h4 className="font-semibold mb-2 text-white">Visit Us</h4>
                <p className="text-gray-300">
                  Jl. Sudirman No. 123
                  <br />
                  Menteng, Jakarta Pusat
                  <br />
                  DKI Jakarta 10310
                  <br />
                  Indonesia
                </p>
              </div>

              {/* Contact Info */}
              <div className="mb-6">
                <h4 className="font-semibold mb-2 text-white">Contact</h4>
                <p className="text-gray-300">
                  Phone: +62 21 1234 5678
                  <br />
                  Email: info@elitebilliard.com
                  <br />
                  WhatsApp: +62 812 3456 7890
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#gallery"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#booking"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Book Now
                  </a>
                </li>
                <li>
                  <a
                    href="#tournaments"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Tournaments
                  </a>
                </li>
              </ul>
            </div>

            {/* Services & Social Media */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Services</h4>
              <ul className="space-y-2 mb-6">
                <li className="text-gray-300">Table Rental</li>
                <li className="text-gray-300">Solo Training</li>
                <li className="text-gray-300">Group Events</li>
                <li className="text-gray-300">Tournaments</li>
                <li className="text-gray-300">Private Parties</li>
              </ul>

              {/* Social Media */}
              <div>
                <h4 className="font-semibold mb-4 text-white">Follow Us</h4>
                <div className="flex space-x-4">
                  {/* Instagram */}
                  <a
                    href="https://instagram.com/elitebilliardclub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-blue-800 w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>

                  {/* TikTok */}
                  <a
                    href="https://tiktok.com/@elitebilliardclub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-blue-800 w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                  </a>

                  {/* YouTube */}
                  <a
                    href="https://youtube.com/@elitebilliardclub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-blue-800 w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-500 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-300 text-sm mb-4 md:mb-0">
                © 2024 Elite Billiard Club. All rights reserved.
              </div>
              <div className="flex space-x-6 text-sm">
                <a
                  href="#privacy"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#terms"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
                <a
                  href="#sitemap"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
