import React from "react";
import Product from "./Product";
import './Home.css'



function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="http://www.brandage.com/images/content/209B935-02298B6-1EE2E21.jpg"
       alt=""
     />

      <div className="home__row">

        <Product
          id="23232323"
          title="The Lean Startup"
          price={11.65}
          rating={5}
          image="https://source.unsplash.com/random"

      />



        <Product
        id="23232324"
          title="The Lean Startup"
          price={11.65}
          rating={5}
          image="https://source.unsplash.com/random"
        />
        </div>

        <div className="home__row">
        <Product
          id="23232324"
          title="The Lean Startup"
          price={11.65}
          rating={5}
          image="https://source.unsplash.com/random"

        />
       <div>

        <Product

        id="23232324"
          title="The Lean Startup"
          price={11.65}
          rating={5}
          image="https://source.unsplash.com/random"
        />
        </div>

        <Product
        id="23232324"
          title="The Lean Startup"
          price={11.65}
          rating={5}
          image="https://source.unsplash.com/random"
        />
        </div>

        <div className="home__row">
        <Product
        id="23232324"
          title="The Lean Startup"
          price={11.65}
          rating={5}
          image="https://source.unsplash.com/random"
        />

        </div>


  </div>
  );
}

export default Home;