import React from "react";

import Heading from ".//components/Heading";
import TurisInfoCard from "./components/TurisInfoCard";
import Bookings from "./components/Bookings";
import Citys from "./data/Citys.json";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  let imagen = "https://image.flaticon.com/icons/svg/139/139899.svg";

  return (
    <div className="App">
      <Heading img={imagen} />
      <section className="App-section">
        {console.log(Citys[0].img)}
        {Citys.map((city, index) => {
          return (
            <TurisInfoCard
              key={index}
              img={city.img}
              cityName={city.cityName}
              description={city.description}
              href={city.href}
              btn="More Information"
            />
          );
        })}
      </section>
      <Bookings />
      <Footer />
    </div>
  );
};

export default App;
