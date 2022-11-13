import { GetServerSideProps } from 'next';
import Image from 'next/image';

import { useKeenSlider } from 'keen-slider/react';
import Stripe from 'stripe';
import { stripe } from '../lib/stripe';

import { HomeContainer, Product } from '../styles/pages/home';

import camiseta1 from '../assets/Variant6.png';
import camiseta2 from '../assets/Variant7.png';
import camiseta3 from '../assets/Variant8.png';

import 'keen-slider/keen-slider.min.css';

interface Homeprops {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
  }[]
}

export default function Home({ products }: Homeprops) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  });

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map(product => {
        return (
          <Product key={product.id} className="keen-slider__slide">
            <Image src={product.imageUrl} alt="Camiseta 1" width={520} height={480} />

            <footer>
              <strong>{product.name}</strong>
              <span>{product.price / 100}</span>
            </footer>
          </Product>
        )
      })}

    </HomeContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  });

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount,
    }
  })

  return {
    props: {
      products,
    }
  }
}
