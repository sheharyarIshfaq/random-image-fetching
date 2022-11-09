import React, { useEffect, useState } from "react";

import "./ImageContainer.css";
import Button from "./Shared/Button";

const ImageContainer = () => {
  const [randomImage, setRandomImage] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const fetchImageHandler = async () => {
    setIsLoading(true);
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    setRandomImage(data.message);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchImageHandler();
  }, []);

  return (
    <div className="main-container">
      <div>
        <Button title="Fetch a random Image" onClick={fetchImageHandler} />
      </div>
      {isLoading && <h1>Loading...</h1>}
      {!isLoading && (
        <div className="img-container">
          <img src={randomImage} alt="" />
        </div>
      )}
    </div>
  );
};

export default ImageContainer;
