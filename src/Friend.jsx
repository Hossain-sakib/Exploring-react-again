import React from "react";

export default function Friend({ friend }) {
    const {id, name, email} = friend
  return (
    <div className="box">
        <h3>{id}</h3>
      <h4>Name: {name}</h4>
      <p>Email: {email}</p>
    </div>
  );
}
