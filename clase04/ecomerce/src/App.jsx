import Title from "./components/Title";
import NavBar from "./components/NavBar";
import Header from "./components/Header";

export default function App() {
    return (
      <>
        <Header />
    
        <section class="products">
          <h1>Productos Destacados</h1>
          <div class="product-grid">
            <div class="product">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWj4_QrinB4Msvk2sRg60VWSdEySiGPmlylg&s"
                alt="Producto 1" />
              <h2>Producto 1</h2>
              <p>$10.00</p>
              <button>Añadir al carrito</button>
            </div>
            <div class="product">
              <img src="https://d22fxaf9t8d39k.cloudfront.net/31177e5345ac3dfec93652de8031a5f5bdf755ec9f8224f8c61c4b7b7aeccee9104532.webp"
                alt="Producto 2" />
              <h2>Producto 2</h2>
              <p>$20.00</p>
              <button>Añadir al carrito</button>
            </div>
            <div class="product">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjxXWTypp1bdoPyCYo7qdqyWvKj11OquEMGg&s"
                alt="Producto 3" />
              <h2>Producto 3</h2>
              <p>$30.00</p>
              <button>Añadir al carrito</button>
            </div>
          </div>
        </section>
      </>
    )
  
  }