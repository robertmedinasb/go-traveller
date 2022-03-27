import { FC } from "react";
import { CarouselImage } from "../../types/carousel_image";

const Home: FC<{ carouselImages: CarouselImage[] }> = ({ carouselImages }) => {
  return (
    <>
      <div>
        {carouselImages.map(({ imagen: { url, title, description } }, idx) => (
          <div key={idx}>
            <img src={url} alt={title} />
            <p>{description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
