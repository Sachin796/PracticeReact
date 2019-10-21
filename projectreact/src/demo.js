import React from "react";

function Sayname() {
  const sayName = () => {
    alert("Name is sachin");
  };
  return (
    <div>
      <button onClick={sayName}>Click to say your name</button>
    </div>
  );
}

export default Sayname;
