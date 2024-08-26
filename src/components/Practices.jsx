import React from "react";

const Practices = () => {
  const students = [];
  return (
    <>
      <div className="container">
        <h2>Practices</h2>
        <p>{!students.length && "No Students Found"}</p>
        <p>{students.length}</p>
      </div>
    </>
  );
};

export default Practices;
