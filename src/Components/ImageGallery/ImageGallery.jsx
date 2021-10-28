import React from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";


function ImageGallery({ images, onSelect })  {
  return (
    <ul className="ImageGallery">
      {images.map(({  webformatURL, largeImageURL, tags, id}) => (
        <ImageGalleryItem
          // image={image}
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          alt={tags}
          getLargeImageURL={onSelect}
        />
      ))}
    </ul>
  );
};


ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default ImageGallery;