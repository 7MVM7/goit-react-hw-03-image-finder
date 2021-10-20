import React from "react";
// import PropTypes from "prop-types";
import ImageGelleryItem from "../ImageGalleryItem/ImageGalleryItem";

function ImageGellery({ images, onSelect }) {
  return (
    <ul className="ImageGallery">
      {images.map((image, webformatURL, largeImageURL, tags, _id) => (
        <ImageGelleryItem
          image={image}
          key={image.id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          alt={tags}
          getLargeImageURL={onSelect}
        />
      ))}
    </ul>
  );
}
export default ImageGellery;

// ImageGallery.propTypes = {
//   images: PropTypes.array.isRequired,
//   onSelect: PropTypes.func.isRequired,
// };
