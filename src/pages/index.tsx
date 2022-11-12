import Image from "next/image"
import { HomeContainer, Product } from "../styles/pages/home"

import camiseta1 from '../assets/Variant6.png';
import camiseta2 from '../assets/Variant7.png';
import camiseta3 from '../assets/Variant8.png';

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={camiseta1} alt="Camiseta 1" width={520} height={480} />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product>
        <Image src={camiseta1} alt="Camiseta 1" width={520} height={480} />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

    </HomeContainer>
  )
}
