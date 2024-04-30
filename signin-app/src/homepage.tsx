// Import React and other necessary libraries
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { BrowserRouter, Router, Route, Link, Routes } from "react-router-dom";
import tailwind from "tailwindcss";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
};

const NotFound = () => {
  return (
    <div>
      <h1>404 - Not Found!</h1>
    </div>
  );
};

const HomePage = (): React.ReactElement => {
return (
    <>
        <img
            className="logoX"
            src="https://svgcosmos.com/cdn/shop/files/Twitter-X-Logo-vector-svg-cricut_600x600.jpg?v=1693944025"
            alt="Twitter Logo"
        />
        <br />
        <div>
            <button onClick={() => window.location.href = '/signin'} className="rounded-full bg-gray-500 text-white px-6 py-1 hover:bg-blue-500" style={{ display: 'inline-block', margin: '25px' }}>Sign In</button>
            <button onClick={() => window.location.href = '/newAccount'} className="rounded-full bg-gray-500 text-white px-6 py-1 hover:bg-blue-500" style={{ display: 'inline-block', margin: '25px' }}>Create Account</button>
        </div>
    </>
);
};

export { About, Home, HomePage, NotFound };
