export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#374f7e" }} className="pt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Elite Billiard Club
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Premium billiard experience with professional tables, comfortable
              atmosphere, and exceptional service. Your destination for the
              perfect game.
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
        <div className="border-t border-gray-500 mt-12 py-8">
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
      {/* <div className="mx-auto  px-6 py-4 text-center bg-blue-950 mt-12">
        <p className="text-base leading-7 text-gray-300">
          If you are interested in this website for your billiard place,
          <br />
          please email me at{" "}
          <a
            href="mailto:tio.michael2004@gmail.com"
            className="font-semibold text-blue-400 hover:text-blue-300"
          >
            tio.michael2004@gmail.com
          </a>
        </p>
      </div> */}
    </footer>
  );
}
