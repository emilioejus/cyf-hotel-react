import React, { useState } from "react";
import Moment from "moment";

const SearchResult = ({ results }) => {
  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">FirsName</th>
          <th scope="col">SurName</th>
          <th scope="col">Email</th>
          <th scope="col">RoomId</th>
          <th scope="col">CheckInDate</th>
          <th scope="col">CheckOutDate</th>
          <th scope="col">Reservations</th>
        </tr>
      </thead>
      <tbody>
        {results.map((element, index) => {
          const [selector, setSelector] = useState(false);
          const hello = () => {
            selector ? setSelector(false) : setSelector(true);
          };
          let inDate = Moment(element.checkInDate.split("-"));
          let outDate = Moment(element.checkOutDate.split("-"));
          return (
            <tr onClick={hello}>
              <th scope="row">{element.id}</th>
              <td>{element.title}</td>
              <td>{element.firstName}</td>
              <td>{element.surname}</td>
              <td>{element.email}</td>
              <td>{element.roomId}</td>
              <td>{element.checkInDate}</td>
              <td>{element.checkOutDate}</td>

              {selector ? (
                <td className="reservation-blue">
                  {outDate.diff(inDate, "days")} noches
                </td>
              ) : (
                <td>{outDate.diff(inDate, "days")} noches</td>
              )}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResult;
