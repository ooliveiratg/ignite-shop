
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product";
import { GetStaticPaths, GetStaticProps } from "next";
import { stripe } from "@/src/lib/stripe";
import Image from "next/image";
import { Stripe } from "stripe";
interface ProductProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    description: string;
  }
}



export default function Product({ products }: ProductProps) {


    return(
        <ProductContainer>
            <ImageContainer>
                <Image src={products.imageUrl} width={520} height={480} alt="" />
            </ImageContainer>
            <ProductDetails>
                <h1>{products.name}</h1>
                <span>{products.price}</span>
                <p>{products.description}</p>

                <button>Comprar Agora</button>

            </ProductDetails>
        </ProductContainer>
    )
}

export const getStaticPaths:GetStaticPaths = async () => {
    return{
        paths:[
            { params: { id: "prod_N1a2b3c4d5e6f7g8h9i0" } }, // Example product ID
        ],
        fallback: false
    }
}


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getStaticProps:GetStaticProps<any, {id: string}> = async ({ params }) => {
    const productId = params?.id

    if (!productId) {
        return {
            notFound: true
        }
    }

    const products = await stripe.products.retrieve(productId, {
        expand: ["default_price"],
    });
    const price = products.default_price as Stripe.Price;
    return {
        props: {
            products: {
                id: products.id,
                name: products.name,
                imageUrl: products.images[0],
                price: price.unit_amount
                    ? new Intl.NumberFormat("pt-br", {
                        style: "currency",
                        currency: "BRL",
                    }).format(price.unit_amount / 100)
                    : "Preço indisponível",
                description: products.description,
            }
        }
    }
}