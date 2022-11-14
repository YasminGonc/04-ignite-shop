import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product";

export default function Product() {
    return (
        <ProductContainer>
            <ImageContainer>
                
            </ImageContainer>

            <ProductDetails>
                <h1>Camiseta X</h1>
                <span>R$ 79,90</span>

                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur libero illum dolores exercitationem nobis architecto necessitatibus quaerat aliquid ratione, excepturi optio error possimus mollitia placeat. Sequi ex eveniet repudiandae consectetur.</p>

                <button>
                    Comprar agora
                </button>
            </ProductDetails>
        </ProductContainer>
    )
}