import React, { useState, useRef } from "react";
import preview from "../assets/images/preview.jpg";
const ProductGallery = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]);
  const galleryRef = useRef(null);

  const handleThumbnailClick = (index) => {
    setMainImage(images[index]);

    const gallery = galleryRef.current;
    const thumbnail = gallery.children[index];
    console.log(thumbnail);
    // Calculate the position to center the selected image
    const thumbnailWidth = thumbnail.clientWidth;
    const galleryWidth = gallery.clientWidth;
    console.log(
      thumbnailWidth,
      galleryWidth,
      thumbnail.offsetLeft,
      gallery.offsetLeft
    );
    const scrollPosition =
      thumbnail.offsetLeft -
      galleryWidth / 2 +
      thumbnailWidth / 2 -
      gallery.offsetLeft;

    // Ensure smooth scroll to the calculated position
    gallery.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
  };

  return (
    <section>
      {/* Main Image */}
      <img
        src={mainImage || preview}
        alt="main"
        className="w-full h-[500px] object-contain rounded-lg sm:h-[300px] md:h-[500px]"
      />

      {/* Thumbnail Gallery with mouse wheel scroll */}
      <div
        className="flex gap-4 mt-4 overflow-x-auto hide-scrollbar scroll-smooth"
        ref={galleryRef} // Reference to the gallery container
      >
        {images.map((image, index) => (
          <img
            src={image || preview}
            key={index}
            alt={image}
            onClick={() => handleThumbnailClick(index)} // Handle click to center the thumbnail
            className={`h-[100px] cursor-pointer rounded-lg sm:h-[50px] md:h-[75px] ${
              image === mainImage ? "border-2 border-golden" : ""
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductGallery;
