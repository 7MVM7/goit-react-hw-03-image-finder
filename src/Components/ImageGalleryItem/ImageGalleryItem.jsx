import React from "react";
import PropTypes from "prop-types";

function ImageGalleryItem({ webformatURL, largeImageURL, getLargeImageURL }) {
  return (
    <li className="ImageGalleryItem">
      <img
        src={webformatURL}
        alt=""
        onClick={() => getLargeImageURL(largeImageURL)}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    alt: PropTypes.string,
    getLargeImageURL: PropTypes.func.isRequired,
  }),
};

export default ImageGalleryItem;
