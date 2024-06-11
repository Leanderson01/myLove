import { useState, useEffect } from "react";
import ReactCardFlip from "react-card-flip";
import { imgs } from "./Data/data";

interface ImageData {
  image: string;
  message: string;
}

const CardFlip = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [imageData, setImageData] = useState<ImageData | null>(null);

  useEffect(() => {
    // Seleciona uma imagem aleatória da lista `imgs` ao carregar o componente
    const randomImage = imgs[Math.floor(Math.random() * imgs.length)];
    setImageData(randomImage);
  }, []);

  return (
    <div
      className="transition group w-80 perspective-1000 hover:scale-110 group-hover:opacity-100"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      {imageData && (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
          <div key="image" className="relative w-full h-full rounded-xl">
            <img
              className="object-cover w-full cursor-pointer rounded-3xl h-[400px] shadow-black/40 border-2 border-gradient-to-b from-[#A6C2E6] to-[#DAACC9] shadow-xl"
              src={imageData.image}
              alt=""
            />
          </div>
          <div
            key="back"
            className="relative cursor-pointer flex items-center justify-center w-full h-[400px] rounded-xl border-2 border-gradient-to-b from-[#A6C2E6] to-[#DAACC9]"
          >
            <p className="p-2 text-center">{imageData.message}</p>
          </div>
        </ReactCardFlip>
      )}
    </div>
  );
};

export default CardFlip;
