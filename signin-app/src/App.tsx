import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { HomePage, About, Home, NotFound } from "./homepage";
import { BrowserRouter, Router, Route, Link, Routes } from "react-router-dom";
import Navigation from "./navigation";
import SignInForm from "./signIn";
import CreateAccount from "./newAccount";
import PrivateRoute from "./privateRouter";
import InsideLogin from "./insideLogin";

function App() {
  


  return (
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
          </Route>
        </Routes>
        <br />
        <HomePage />
      </header>
    </div>
  );
}

export default App;
