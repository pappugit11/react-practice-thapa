import { useState } from "react";
import "./App.css";
import DerivedState from "./components/DerivedState";
// import Practices from "./components/Practices";
// import Cards from "./netflix/Cards";
// import Todo from "./todo/Todo";
// import ToggleCheck from "./Toggle/ToggleCheck";

import NetflixSeries from "./netflix/NetflixSeries";
import Profile from "./components/Profile";

import "./netflix/Netflix.module.css";
import UserContextProvider from "./contexts/UserContextProvider";
import UseMemo from "./components/UseMemo";

function App() {
  return (
    <UserContextProvider>
      {/* <Todo /> */}
      {/* <ToggleCheck /> */}
      {/* <DerivedState /> */}
      {/* <Practices /> */}
      {/* <Profile /> */}
      {/* <NetflixSeries /> */}
      <UseMemo />
      {/* <h1 className="text-6xl text-red-500">Hi</h1> */}
    </UserContextProvider>
  );
}

export default App;
