import { Button } from "~/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      id="hero"
    >
      {/* Background GIF/Video Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800 opacity-90">
          {/* Placeholder for billiard GIF - you can replace this with actual GIF */}
          <div className="absolute inset-0 bg-[url('https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZW4wbG1rbmRmYm8xeXBvdHZ4d2hwdDB5dTVsZHozNWJ0ZHNoYTMyeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l7epimG7ALYEa8QmLs/giphy.gif?height=1080&width=1920')] bg-cover bg-center opacity-30"></div>
        </div>
        <div className="flex items-center justify-center">
          <Link to="#gallery">
            <div className="absolute bottom-20  animate-bounce delay-100">
              <div className="flex items-center justify-center">
                <img src="/logo-white.png" className=" w-12 h-12" />
              </div>
              <p className="text-white mt-2">Scroll to explore</p>
              <div className="flex items-center justify-center">
                <ChevronDown color="#ffffff" />
              </div>
            </div>
          </Link>
        </div>
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
  );
}
