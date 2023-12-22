import React from "react";

const ImageRow = ({ images }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Image ${index + 1}`}
          style={{ width: "20%" }}
        />
      ))}
    </div>
  );
};

export default ImageRow;
