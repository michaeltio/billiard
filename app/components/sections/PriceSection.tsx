import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function PriceSection() {
  const priceSectionContainer = useRef<HTMLObjectElement>(null);
  useGSAP(
    async () => {
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      gsap.registerPlugin(SplitText, ScrollTrigger);

      const split = SplitText.create("[data-anim='price-header-container']", {
        type: "words",
      });

      // const priceTimeline = gsap.timeline();

      gsap.from(split.words, {
        scrollTrigger: {
          trigger: "[data-anim='price-header-container']",
          start: "20px 75%",
          toggleActions: "play none none reverse",
        },
        y: 100,
        autoAlpha: 0,
        stagger: 0.05,
      });

      gsap.from("[data-anim='price-card']", {
        scrollTrigger: {
          trigger: "[data-anim='price-header-container']",
          start: "20px 75%",
          toggleActions: "play none none reverse",
        },
        yPercent: 100,
        stagger: 0.1,
        opacity: 0,
      });

      gsap.from("[data-anim='solo-card']", {
        scrollTrigger: {
          trigger: "[data-anim='solo-card']",
          start: "-200px 90%",
          toggleActions: "play none none reverse",
        },
        yPercent: 100,
        stagger: 0.1,
        opacity: 0,
      });
    },
    { scope: priceSectionContainer }
  );

  return (
    <section
      ref={priceSectionContainer}
      className="py-20 bg-gray-50"
      id="pricing"
    >
      <div className="container mx-auto px-4">
        <div data-anim="price-header-container" className="text-center mb-12">
          <h2 className="text-4xl font-bold" style={{ color: "#374f7e" }}>
            Price List
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Affordable rates for every player, with special happy hour discounts
          </p>
        </div>

        {/* container */}
        <div
          data-anim="price-container"
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {/* Normal Price Card */}
          <div
            data-anim="price-card"
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
                <span className="text-lg font-normal text-gray-600">/hour</span>
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
            data-anim="price-card"
            className="bg-white rounded-2xl p-8 shadow-lg border-2 relative overflow-hidden"
            style={{ borderColor: "#374f7e" }}
          >
            {/* <div
              className="absolute top-0 right-0 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg"
              style={{ backgroundColor: "#374f7e" }}
            >
              POPULAR
            </div> */}
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
                    <div className="font-semibold" style={{ color: "#374f7e" }}>
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
                    <div className="font-semibold" style={{ color: "#374f7e" }}>
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
                    <div className="font-semibold" style={{ color: "#374f7e" }}>
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
            data-anim="price-card"
            className="bg-white rounded-2xl p-8 shadow-lg border-2"
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
                    <div className="font-semibold" style={{ color: "#374f7e" }}>
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
                    <div className="font-semibold" style={{ color: "#374f7e" }}>
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
        <div data-anim="solo-card" className="mt-12 max-w-4xl mx-auto">
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
  );
}
