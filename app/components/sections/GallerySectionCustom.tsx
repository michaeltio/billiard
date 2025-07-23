import { gallery } from "~/data/gallery";

export default function GallerySectionCustom() {
  return (
    <section
      className="py-20 bg-gray-50 container mx-auto bg-gray-50"
      id="gallery"
    >
      <div className="text-center mb-12  sticky top-0 z-10">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Gallery</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Explore our premium billiard facilities and memorable moments
        </p>
      </div>

      <div className="flex  justify-center gap-5 overflow-hidden">
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
