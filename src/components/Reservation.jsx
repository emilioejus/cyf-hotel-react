import React, { useState } from "react";

const Reservation = ({ addReservation }) => {
  // state
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [surName, setSurName] = useState("");
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");
  const [inDate, setInDate] = useState("");
  const [outDate, setOutDate] = useState("");

  const states = [
    setId,
    setTitle,
    setFirstName,
    setSurName,
    setEmail,
    setRoom,
    setInDate,
    setOutDate
  ];

  const handleSearchInput = event => {
    switch (event.target.name) {
      case "id":
        setId(event.target.value);
        break;
      case "title":
        setTitle(event.target.value);
        break;
      case "first":
        setFirstName(event.target.value);
        break;
      case "sur":
        setSurName(event.target.value);
        break;
      case "email":
        setEmail(event.target.value);
        break;
      case "room":
        setRoom(event.target.value);
        break;
      case "inDate":
        setInDate(event.target.value);
        break;
      case "outDate":
        setOutDate(event.target.value);
        break;
      default:
        "";
    }
  };

  const handleOnSubmit = event => {
    event.preventDefault();
    const person = {
      id: parseInt(id),
      title: title,
      firstName: firstName,
      surname: surName,
      email: email,
      roomId: room,
      checkInDate: inDate,
      checkOutDate: outDate
    };
    addReservation(person);
    states.forEach(state => {
      state("");
    });

    // Así logro agregar una reservación pero no tengo poder para limpiar los input
    // const person = {
    //     id: event.target.id.value,
    //     title: event.target.title.value,
    //     firstName: event.target.first.value,
    //     surname: event.target.sur.value,
    //     email: event.target.email.value,
    //     roomId: event.target.room.value,
    //     checkInDate: event.target.in.value,
    //     checkOutDate: event.target.out.value
    // }
    // console.log('hola');
    // console.log(event.target.inputId.value)
    // console.log(person)
  };

  return (
    <div className="form-all">
      <h2 className="">Resevation Form</h2>
      <hr />
      <div className="div-form">
        <form onSubmit={handleOnSubmit}>
          <div className="mb-3">
            <label className="form-label">Id</label>
            <input
              onChange={handleSearchInput}
              type="number"
              className="form-control"
              id="inputId"
              name="id"
              value={id}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              onChange={handleSearchInput}
              type="text"
              className="form-control"
              id="inputTitle"
              name="title"
              value={title}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">First name</label>
            <input
              onChange={handleSearchInput}
              type="text"
              className="form-control"
              id="inputFirstName"
              name="first"
              value={firstName}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Sur name</label>
            <input
              onChange={handleSearchInput}
              type="text"
              className="form-control"
              id="inputSurName"
              name="sur"
              value={surName}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              onChange={handleSearchInput}
              type="email"
              className="form-control"
              id="inputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={email}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Room id</label>
            <input
              onChange={handleSearchInput}
              type="text"
              className="form-control"
              id="inputRoomId"
              name="room"
              value={room}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Check in date</label>
            <input
              onChange={handleSearchInput}
              type="text"
              className="form-control"
              id="InputChackInDate"
              name="inDate"
              value={inDate}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Check out date</label>
            <input
              onChange={handleSearchInput}
              type="text"
              className="form-control"
              id="inputChackOutDate"
              name="outDate"
              value={outDate}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reservation;
