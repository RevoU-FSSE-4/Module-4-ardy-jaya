import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const CreateAccount: React.FC = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  const handleSubmit = (values: any) => {
    // Handle form submission here
    console.log(values);
  };

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-4">Create Account</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block font-medium text-sm"
              style={{ fontSize: "18px" }}
            >
              Email
            </label>
            <Field
              type="email"
              id="email"
              name="email"
              className="border border-gray-300 rounded-md p-2 w-full text-black text-sm"
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
              className="block font-medium text-sm"
              style={{ fontSize: "18px" }}
            >
              Password
            </label>
            <Field
              type="password"
              id="password"
              name="password"
              className="border border-gray-300 rounded-md p-2 w-full text-black text-sm"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Create
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default CreateAccount;
