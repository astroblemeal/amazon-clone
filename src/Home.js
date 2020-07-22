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
          price={1999.65}
          rating={5}
          image="https://www.reidys.com/images/prs-silver-sky-maple-fingerboard-tungsten-p6992-8858_zoom.jpg"
      />
        <Product
        id="2"
          title="The Lean Startup"
          price={15541.65}
          rating={5}
          image="https://source.unsplash.com/random"
        />
        </div>


        <div className="home__row">
        <Product
          id="3"
          title="Cool product 112"
          price={1431.35}
          rating={3}
          image="https://source.unsplash.com/random"
      />
        <Product
        id="4"
          title="good stuff"
          price={11.15}
          rating={2}
          image="https://source.unsplash.com/random"
        />
        <Product
        id="5"
          title="it's wat u need"
          price={1331.65}
          rating={5}
          image="https://source.unsplash.com/random"
        />
        </div>



        <div className="home__row">
        <Product
        id="6"
          title="no lalala"
          price={1231.65}
          rating={5}
          image="https://source.unsplash.com/random"
        />
        </div>


  </div>
  );
}

export default Home;