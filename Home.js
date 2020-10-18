import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div classNmae="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="457829374"
            title="The Lean Startup"
            price={2100}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={4}
          />
          <Product
            id="457829375"
            title="Kenwood kMix Stand Mixer"
            price={6999}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="457829376"
            title="The Fit Band"
            price={0.0}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            rating={4}
          />
          <Product
            id="457829377"
            title="The Amazon Echo"
            price={11999}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            rating={4}
          />
          <Product
            id="457829378"
            title="I-pad Pro"
            price={0.0}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L.AC_SX385_.jpg"
            rating={1}
          />
        </div>
        <div className="home__row">
          <Product
            id="457829379"
            title="Samsung 4k TV"
            price={45000}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
