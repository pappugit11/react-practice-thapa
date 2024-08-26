import React, { useState } from "react";

const DerivedState = () => {
  const arr = ["Pappu", "Ram"];
  const totalStudents = arr.length;

  const [students, setStudents] = useState(arr);
  console.log(students);

  return (
    <>
      <section className="crd_sec py-5">
        <div className="container">
          <h2 className="text-center text-4xl font-bold mb-5">Derived State</h2>
          <div className="text-center max-w-[250px] mx-auto">
            <ul className="cmn_list mb-4">
              {students.map((currStudent, ind) => (
                <li key={ind}>Student Name: {currStudent}</li>
              ))}
            </ul>
            <p>{totalStudents}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default DerivedState;
