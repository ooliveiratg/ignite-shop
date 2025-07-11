import { HomeContainer, Product } from "../styles/pages/home";
import Image from "next/image";
import camisa1 from "../assets/camisetas/Shirt-1.png";
import camisa2 from "../assets/camisetas/Shirt-2.png";
import camisa3 from "../assets/camisetas/Shirt.png";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { stripe } from "../lib/stripe";
import { GetServerSideProps } from "next";

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });
  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={camisa1} width={520} height={480} alt={""} />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camisa2} width={520} height={480} alt={""} />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camisa3} width={520} height={480} alt={""} />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camisa3} width={520} height={480} alt={""} />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await stripe.products.list();
  console.log(response);
  return {
    props: {},
  };
};
