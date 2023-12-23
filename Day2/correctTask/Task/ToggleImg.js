import { useState } from "react";
import pizzaImage from "../DataImages/pizza.jpg";
import pastaImage from "../DataImages/pasta.jpg";

const ToggleImg = () => {
  const [imgData, setImgData] = useState({ imgPath: pizzaImage, imgName: "Pizza" });

  const toggleImage = () => {
    if (imgData.imgPath === pizzaImage) {
      setImgData({ imgPath: pastaImage, imgName: "Pasta" });
    } else {
      setImgData({ imgPath: pizzaImage, imgName: "Pizza" });
    }
  };

  return (
    <div>
      <img src={imgData.imgPath} alt={imgData.imgName} /> <br />
      <strong>{imgData.imgName}</strong>
      <br />
      <button type="button" onClick={toggleImage}>
        {imgData.imgName}
      </button>
    </div>
  );
};

export default ToggleImg;
