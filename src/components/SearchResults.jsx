import React, { useState } from "react";
import Moment from "moment";
import IdButton from "./IdButton";
import CustomerProfile from "./CustomerProfile";

const SearchResult = props => {
  const { results, searchId } = props;

  // state
  const [selector, setSelector] = useState(null);
  const [profiles, setProfiles] = useState(results);

  // fuction para seleccionar columna de reservations
  const selecRow = index => {
    selector === index ? setSelector(null) : setSelector(index);
  };

  // function para modificar de mayor a menor la tabla
  Array.prototype.orderByNumber = function(p, s) {
    if (s != -1 && s != 1) s = 1;
    this.sort(function(a, b) {
      return (a[p] - b[p]) * s;
    });
  };

  const majorMinor = profiles => {
    profiles[0].id === 1
      ? profiles.orderByNumber("id", -1)
      : profiles.orderByNumber("id", 1);
  };

  // const renderCustomer = (id)=> {
  //   return <CustomerProfile id={id}/>
  // }

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
        {profiles.map((element, index) => {
          let inDate = Moment(element.checkInDate.split("-"));
          let outDate = Moment(element.checkOutDate.split("-"));
          return (
            <tr key={index}>
              <th
                onClick={() => {
                  selecRow(index), majorMinor(profiles);
                }}
                scope="row"
              >
                {element.id}
              </th>
              <td
                onClick={() => {
                  selecRow(index), majorMinor(profiles);
                }}
              >
                {element.title}
              </td>
              <td
                onClick={() => {
                  selecRow(index), majorMinor(profiles);
                }}
              >
                {element.firstName}
              </td>
              <td
                onClick={() => {
                  selecRow(index), majorMinor(profiles);
                }}
              >
                {element.surname}
              </td>
              <td
                onClick={() => {
                  selecRow(index), majorMinor(profiles);
                }}
              >
                {element.email}
              </td>
              <td
                onClick={() => {
                  selecRow(index), majorMinor(profiles);
                }}
              >
                {element.roomId}
              </td>
              <td
                onClick={() => {
                  selecRow(index), majorMinor(profiles);
                }}
              >
                {element.checkInDate}
              </td>
              <td
                onClick={() => {
                  selecRow(index), majorMinor(profiles);
                }}
              >
                {element.checkOutDate}
              </td>

              {selector === index ? (
                <td
                  onClick={() => {
                    selecRow(index), majorMinor(profiles);
                  }}
                  className="reservation-blue"
                >
                  {outDate.diff(inDate, "days")} noches
                </td>
              ) : (
                <td
                  onClick={() => {
                    selecRow(index), majorMinor(profiles);
                  }}
                >
                  {outDate.diff(inDate, "days")} noches
                </td>
              )}
              <td>
                {" "}
                <IdButton logic={searchId} id={element.id} name="ShowProfile" />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResult;
