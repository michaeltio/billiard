import { gallery } from "~/data/gallery";

export default function GallerySectionCustom() {
  return (
    <section className="max-w-screen-lg mx-auto pt-10" id="gallery">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-moxa">Our Gallery</h2>
        <p className="text-[#f5f6f3] text-lg max-w-2xl mx-auto">
          Explore our premium billiard facilities and memorable moments
        </p>
      </div>

      <div className="flex justify-center gap-5 overflow-hidden mt-5">
        <div data-speed="1" className="flex flex-col gap-5 w-1/3 relative">
          <img
            src={gallery[0].imageUrl}
            className="aspect-[9/16] object-cover "
          />
          <img
            src={gallery[1].imageUrl}
            alt=""
            className="aspect-[9/16] object-cover"
          />
          <img
            src={gallery[2].imageUrl}
            alt=""
            className="aspect-[9/16] object-cover"
          />
        </div>
        <div data-speed="0.8" className="flex flex-col relative gap-5 w-1/3">
          <img
            src={gallery[3].imageUrl}
            alt=""
            className="aspect-[9/16] object-cover"
          />
          <img
            src={gallery[4].imageUrl}
            alt=""
            className="aspect-[9/16] object-cover"
          />
          <img
            src={gallery[5].imageUrl}
            alt=""
            className="aspect-[9/16] object-cover"
          />
        </div>
        <div data-speed="0.5" className="flex flex-col gap-5 w-1/3">
          <img
            src={gallery[6].imageUrl}
            alt=""
            className="aspect-[9/16]  object-cover"
          />
          <img
            src={gallery[7].imageUrl}
            alt=""
            className="aspect-[9/16]  object-cover"
          />
          <img
            src={gallery[8].imageUrl}
            alt=""
            className="aspect-[9/16]  object-cover"
          />
        </div>
      </div>
    </section>
  );
}
