import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      <img className="home__image" src='https://m.media-amazon.com/images/I/710WETSbtzL._SX3000_.jpg'/>
      <div className='home__row'>
      
        <Product 
          id="1234"
          title="Product 1"
          price={12}
          rating={5}
          image="https://static-01.daraz.lk/p/2d272a8a2d3e404c9f9a4eea7a7e6ff4.png"

        />

        <Product 
          id={12312}
          title="Natural Life Fda Approved Disinfectant Surface Sanitizer, Citrus 500 Ml (Pack Of 3)"
          price={710.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61jj-MeJbvL._SL1200_.jpg"

          />

      </div>

      <div className='home__row'>
      
        <Product 
          id={12312}
          title="Awestuffs LED Lights for Home Decoration (20 LED Photo Clip 3 Metre String (Warm White))"
          price={140.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/41EsI0Fsf1L.jpg"
        />

        <Product 
          id={12312}
          title="Pintola All Natural Peanut Butter (Crunchy) (2.5 kg) (Unsweetened, Non-GMO, Gluten Free, Vegan)"
          price={883.00}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81ghNg%2BDC9L._SL1500_.jpg"

          />

        <Product 
           id={12312}
           title="Mediweave 3 Ply Non-Woven Filter 20 GSM Face Mask-Pack of 50"
           price={199.00}
           rating={3}
           image="https://images-na.ssl-images-amazon.com/images/I/71SUSc-97RL._UL1280_.jpg"
          />

      </div>

      <div className='home__row'>
      
        <Product 
          id={12312}
          title="GSM Fitness Hex Dumbbell, 7.5 kgs, Pack of 2, Rubber Coatedo"
          price={4051.00}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/417wp10uSeL.jpg"

        />

      </div>
      
    </div>
  )
}

export default Home