import Home from "../src/containers/Home";
import { getCarouselImages } from "../server/utils/contentful_api";

export default Home;

export const getStaticProps = async () => {
  const { data } = await getCarouselImages(false);
  return {
    props: {
      carouselImages: data.imagenesCarruselCollection.items,
    },
  };
};
