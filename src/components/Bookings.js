import React, { useState, useEffect } from "react";
import Search from "./Search";
import SearchResults from "./SearchResults";
import CustomerProfile from "./CustomerProfile";
import Loading from "./Loading";
import Reservation from "./Reservation";
// import FakeBookings from "../data/fakeBookings.json";

const Bookings = () => {
  // state
  const [bookings, setBookings] = useState([]);
  const [idProfile, setIdProfile] = useState(null);
  // global variables
  const API = "https://cyf-react.glitch.me";
  const API_RETARDATION = "https://cyf-react.glitch.me/delayed";
  const API_ERROR = "https://cyf-react.glitch.me/error";

  // esta function recibe como paramtro el estado del compoent search
  const search = async searchVal => {
    let response = await fetch(API);
    let data = await response.json();

    // functions passed as props
    const filteredOut = obj => {
      let arraySearchVal = searchVal.split(" ");

      for (const prop in obj) {
        let lowerCaseObj =
          typeof obj[prop] === typeof "" ? obj[prop].toLowerCase() : obj[prop];

        if (
          arraySearchVal[0] === lowerCaseObj ||
          arraySearchVal[1] === lowerCaseObj
        ) {
          return searchVal;
        }
      }
    };
    let filterBookings = data.filter(filteredOut);
    // se debe reiniciar el estado el un array vacio para que pueda cargar la vista de loading
    setBookings([]);
    searchVal === "" ? setBookings(data) : setBookings(filterBookings);
  };
  // function para agregar una reserva
  const addReservation = objPerson => {
    setBookings([]);
    // setBookings(bookings.concat(objPerson))
    setTimeout(() => setBookings(bookings.concat(objPerson)), 10);
  };

  const searchId = id => {
    setIdProfile(id);
  };

  // hooks
  useEffect(() => {
    // Aqui puedes probar las diferentes APIS!!!
    fetch(API)
      .then(response => {
        if (!response.ok) {
          throw Error(response.status);
        } else {
          return response.json();
        }
      })
      .then(data => setBookings(data))
      .catch(error =>
        alert(`Error no se encontro lo que busca ${error} status`)
      );
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {bookings.length > 0 ? (
          <SearchResults searchId={searchId} results={bookings} />
        ) : (
          <Loading />
        )}
        {idProfile && (
          <CustomerProfile idProfile={idProfile} bookings={bookings} />
        )}
        <Reservation addReservation={addReservation} />
      </div>
    </div>
  );
};

export default Bookings;
