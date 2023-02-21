import React from "react";

function IdCard({ prop }) {
  return (
    <div className="id-card">
<div className="student-img">
      <img src={prop.picture} className="student-pic" alt="" />
</div>
<div className="text">
      <p ><b>First Name: </b>{prop.firstName} </p> 
      <p ><b>Last Name: </b> {prop.lastName}</p>
      <p ><b>Gender: </b>{prop.gender}</p>
      <p ><b>Height: </b>{prop.height}m</p>
      <p ><b>Birth: </b>{prop.birth}</p>
      </div>
    </div>
  );
}

export default IdCard;
