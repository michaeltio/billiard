import Masonry from "react-masonry-css";
import { json } from "node:stream/consumers";

import { useLoaderData } from "react-router";
import { gallery } from "~/data/gallery";

export default function GallerySection() {
  const breakpointColumnsObj = {
    default: 4, // Default 4 kolom
    1100: 3, // 3 kolom jika lebar layar <= 1100px
    700: 2, // 2 kolom jika lebar layar <= 700px
    500: 1, // 1 kolom jika lebar layar <= 500px
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Gallery</h2>
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
          {gallery.map((item) => (
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
  );
}
