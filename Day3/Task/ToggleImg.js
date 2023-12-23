import { useState } from "react";
import Pizza from "../DataImages/pizza.jpg";
import Pasta from "../DataImages/pasta.jpg";

const ToggleImg = () => {
  const [imgData, setImgData] = useState({ imgPath: Pizza, imgName: "Pizza" });

  const toggleImage = () => {
    if (imgData.imgPath === Pizza) {
      setImgData({ imgPath: Pasta, imgName: "Pasta" });
    } else {
      setImgData({ imgPath: Pizza, imgName: "Pizza" });
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
