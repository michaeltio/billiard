import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap } from "gsap";
// import { SplitText } from "gsap/SplitText";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function PriceSection() {
  const priceSectionContainer = useRef<HTMLObjectElement>(null);
  useGSAP(
    async () => {
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      const { SplitText } = await import("gsap/SplitText");

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
      className="max-w-screen-lg mx-auto pt-10"
      id="pricing"
    >
      <div className="">
        <div data-anim="price-header-container" className="text-center ">
          <h2 className="text-4xl font-bold text-[#ff66b4]">Price List</h2>
          <p className="text-[#f5f6f3] text-lg max-w-2xl mx-auto">
            Affordable rates for every player, with special happy hour discounts
          </p>
        </div>

        {/* container */}
        <div
          data-anim="price-container"
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-5"
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
      </div>
    </section>
  );
}
