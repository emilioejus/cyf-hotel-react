import React from "react";

const Footer = () => {
  let arr = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <footer className="footer">
      <ul>
        {arr.map((element, index) => {
          return <li key={index}>{element}</li>;
        })}
      </ul>
    </footer>
  );
};

export default Footer;
