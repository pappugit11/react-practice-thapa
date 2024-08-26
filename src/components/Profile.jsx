import React from "react";
// import ProfileCard from "./xx";

const Profile = () => {
  return (
    <>
      <div>
        <h1>Profile Crd Challange</h1>
        <ProfileCard
          name="Alice"
          age="50"
          greeting={
            <div>
              <strong>Hi Alice , have a wonderfull day</strong>
            </div>
          }
        >
          <p>Hobbies: Reading , Hicking</p>
          <button>Contact</button>
        </ProfileCard>

        <ProfileCard
          name="Bob"
          age="30"
          greeting={
            <div>
              <strong>Hi Bob , have a wonderfull day</strong>
            </div>
          }
        >
          <p>Hobbies: Reading , Hicking</p>
          <button>Contact</button>
        </ProfileCard>
      </div>
    </>
  );
};

export default Profile;

const ProfileCard = (props) => {
  console.log(props);
  return (
    <>
      <p>{props.name}</p>
      <p>{props.age}</p>
      <p>{props.greeting}</p>
      <p>{props.children}</p>
    </>
  );
};
