import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

export default function CreateAccount() {
  const initialValues = { name: 'name', email: 'email', password: 'password' };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e:any) {
    e.preventDefault();
    const body = { "name": name, "email": email, "password": password };
    const response = await fetch("https://library-crud-sample.vercel.app/api/user/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    setTimeout(() => {
      if (response.ok) {
        console.log('Form submitted successfully');
        navigate('/insideLogin');
      } else {
        console.log('Form submission failed');
      }
    }, 500);
  }

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
              htmlFor="name"
              className="block font-medium text-sm"
              style={{ fontSize: '18px' }}
            >
              Name
            </label>
            <Field
              type="text"
              id="name"
              name="name"
              className="border border-gray-300 rounded-md p-2 w-full text-black text-sm"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block font-medium text-sm"
              style={{ fontSize: '18px' }}
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
              style={{ fontSize: '18px' }}
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
}