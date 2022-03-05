import { FC } from "react";
import { HeaderNav } from "../../components/HeaderNav/HeaderNav";
import { Hero } from "../../components/Hero/Hero";

const Home: FC = () => {
  return (
    <>
      <HeaderNav />
      <Hero></Hero>
    </>
  );
};

export default Home;
