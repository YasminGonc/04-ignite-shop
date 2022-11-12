import Image from "next/image";

import { useKeenSlider } from 'keen-slider/react'; 

import { HomeContainer, Product } from "../styles/pages/home";

import camiseta1 from '../assets/Variant6.png';
import camiseta2 from '../assets/Variant7.png';
import camiseta3 from '../assets/Variant8.png';

import 'keen-slider/keen-slider.min.css';

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  });
  
  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={camiseta1} alt="Camiseta 1" width={520} height={480} />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camiseta2} alt="Camiseta 1" width={520} height={480} />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camiseta3} alt="Camiseta 1" width={520} height={480} />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camiseta3} alt="Camiseta 1" width={520} height={480} />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

    </HomeContainer>
  )
}
