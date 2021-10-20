import React from "react";
function ImageGalleryItem({ image }) {
  return (
    <li className="ImageGalleryItem">
      <img src={image.webformatURL} alt="" />
    </li>
  );
}
export default ImageGalleryItem;
