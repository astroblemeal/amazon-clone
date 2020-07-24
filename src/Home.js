import React from "react";
import Product from "./Product";
import './Home.css'



function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://www.techtalkthai.com/wp-content/uploads/2016/09/alexa-prize-banner.png"
       alt=""
     />

      <div className="home__row">
        <Product
          id="1"
          title="PRS-Silver Sky"
          price={1999.99}
          rating={5}

          image="https://www.reidys.com/images/prs-silver-sky-maple-fingerboard-tungsten-p6992-8858_zoom.jpg"
      />
        <Product
        id="2"
          title="iPhone SE"
          price={459.99}
          rating={3}
          image="https://images.iphonemod.net/wp-content/uploads/2018/04/iPhone8-iPhone8PLUS-PRODUCT-RED_angled-back_041018.jpg"

        />
        </div>

        <div className="home__row">
        <Product
          id="3"
          title="Furby"
          price={20}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/515Hv4-U-gL._AC_.jpg"
      />
        <Product
        id="4"
          title="Tamagotchi"
          price={11.99}
          rating={2}
          image="https://static.tvtropes.org/pmwiki/pub/images/tamagotchi.jpg"
        />
        <Product
        id="5"
          title="Sony MiniDisc Walkman"
          price={199.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/413NTVNS76L._AC_.jpg"
        />
        </div>



        <div className="home__row">
        <Product
        id="6"
          title="Big monitor"
          price={599.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/711GPszf6UL._AC_SL1500_.jpg"
        />
        </div>


  </div>
  );
}

export default Home;