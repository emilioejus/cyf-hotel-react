import React, { useEffect, useState } from "react";

const CustomerProfile = props => {
  const { idProfile, bookings } = props;
  //state
  const [profileId, setProfileId] = useState(null);
  // global variables
  const API = `https://cyf-react.glitch.me/customers/${idProfile}`;

  // hooks
  useEffect(() => {
    // para buscarlo en el servidor por id!!!
    // (async function ProfileFech() {
    //     let response = await fetch(API);
    //     let data = await response.json();
    //     // console.log(data)
    //     setProfileId(data)
    // })();
    const profile = bookings.forEach(obj => {
      obj.id === idProfile && setProfileId(obj);
    });
  }, [idProfile]);
  return (
    profileId && (
      <div className="customer">
        <ul className="list-group">
          <li className="list-group-item active" aria-current="true">
            Customer {profileId.id} profile
          </li>
          <li className="list-group-item">Id: {profileId.id}</li>
          <li className="list-group-item">First name: {profileId.firstName}</li>
          <li className="list-group-item">Email: {profileId.email}</li>
          <li className="list-group-item">
            Vip: {profileId.vip ? "Yes!!!" : "No!!!"}
          </li>
          <li className="list-group-item">
            Phone number: {profileId.phoneNumber}
          </li>
        </ul>
      </div>
    )
  );
};

export default CustomerProfile;
