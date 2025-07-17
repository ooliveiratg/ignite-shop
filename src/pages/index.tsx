import { HomeContainer, Product } from "../styles/pages/home";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { stripe } from "../lib/stripe";
import { GetStaticProps } from "next";
import { Stripe } from "stripe";

interface HomeProps {
  products:{
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  }[]
}

export default function Home({products}: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });
  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
    {products.map(products => {
      return(
        <Product key={products.id} className="keen-slider__slide">
          <Image
            src={products.imageUrl} 
            width={520}
            height={480}
            alt=""
          />
          <footer>
            <strong>{products.name}</strong>
            <span> {products.price}</span>
          </footer>
          
        </Product>
      )
    })}
    </HomeContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  });
  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price;
    const unit_amount = price.unit_amount as number
    return{
    id: product.id,
    name: product.name,
    imageUrl: product.images[0],
    price: new Intl.NumberFormat('pt-br',{
      style: 'currency',
      currency:'BRL',
    }).format(unit_amount / 100) ,
}})
  console.log(response);
  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2,
  };
};
