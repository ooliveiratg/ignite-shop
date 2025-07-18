import { useRouter } from "next/router";
import { ImageContainer, ProductContainer, ProductDetails } from "../product";

export default function Product() {
    const { query } = useRouter();

    return(
        <ProductContainer>
            <ImageContainer>

            </ImageContainer>
            <ProductDetails>
                <h1>Camiseta x</h1>
                <span>R$ 79,90</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>

                <button>Comprar Agora</button>

            </ProductDetails>
        </ProductContainer>
    )
}