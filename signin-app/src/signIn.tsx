import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import FetchData from "./fetch";
import axios from "axios";

interface SignInForm {
  email: string;
  password: string;
}

interface ResponseLogin {
  token: string;
}

export default function SignInForm() {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  const handleSubmit = async (values: SignInForm) => {
    console.log("trigger submit");
    const newLogin: SignInForm = {
      email: values.email,
      password: values.password,
    };

    try {
      const response = await fetch(
        `https://library-crud-sample.vercel.app/api/user/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newLogin),
        }
      );

      if (response) {
        const data: ResponseLogin = await response.json();
        localStorage.setItem("token", data.token);
        alert("success login!");
        navigate("/insideLogin");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col space-y-2">
          <div>
            <label
              htmlFor="email"
              className="text-white-700 font-bold text-base"
              style={{ fontSize: "20px", width: "100px" }}
            >
              Email
            </label>
            <br />
            <Field
              type="email"
              id="email"
              name="email"
              className="border border-gray-300 p-2 rounded-md text-black text-base"
              style={{ width: "200px" }}
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="text-white-700 font-bold text-base"
              style={{ fontSize: "calc(1rem + 5px)", width: "100px" }}
            >
              Password
            </label>
            <br />
            <Field
              type="password"
              id="password"
              name="password"
              className="border border-gray-300 p-2 rounded-md text-black text-base"
              style={{ width: "200px" }}
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <br />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
}
