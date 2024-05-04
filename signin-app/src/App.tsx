import React, { useEffect, useState } from "react";
import "./App.css";
import { HomePage, About, Home, NotFound } from "./homepage";
import { BrowserRouter, Router, Route, Link, Routes } from "react-router-dom";
import SignInForm from "./signIn";
import CreateAccount from "./newAccount";
import PrivateRoute from "./privateRouter";
import InsideLogin from "./insideLogin";
import { ProfileContext } from "./Profile";
import GlobalProfile from "./GlobalProfile";
import Create from "./newCategory";


function App() {
  const [userProfile, setUserProfile] = useState("Anonymous User");

  const changeUserProfile = (email: string) => {
    setUserProfile(email);
  };

  const thisContext: GlobalProfile = {
    email: userProfile,
    setemail: changeUserProfile,
  };

  return (
    <ProfileContext.Provider value={thisContext}>
      <div className="App">
        <header className="App-header">
          <h1>Happening Now...</h1>
          <hr />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/signin" element={<SignInForm />} />
            <Route path="/newaccount" element={<CreateAccount />} />
            <Route path="/" element={<PrivateRoute />}>
              <Route path="/insideLogin" element={<InsideLogin />} />
              <Route path="/newCategory" element={<Create />} />
            </Route>
          </Routes>
          <br />
          <HomePage />
        </header>
      </div>
    </ProfileContext.Provider>
  );
}

export default App;
