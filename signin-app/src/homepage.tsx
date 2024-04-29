// Import React and other necessary libraries
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Validation schema for the forms
const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
    repeatPassword: Yup.string()
        .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
        .required('Repeat Password is required'),
});

// Initial form values
const initialValues = {
    email: '',
    password: '',
    repeatPassword: '',
};

const LoginForm = () => {
    const handleSubmit = (values: any) => {
        // Handle login form submission
        console.log('Login form values:', values);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form className="w-full max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold mb-4">Login</h1>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
                    <Field type="email" id="email" name="email" className="border border-gray-300 rounded p-2 w-full text-black" />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-xs" />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">Password</label>
                    <Field type="password" id="password" name="password" className="border border-gray-300 rounded p-2 w-full text-black" />
                    <ErrorMessage name="password" component="div" className="text-red-500 text-xs" />
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-full">
                    Login
                </button>
            </Form>
        </Formik>
    );
};

const SignUpForm = () => {
    const handleSubmit = (values: any) => {
        // Handle sign-up form submission
        console.log('Sign-up form values:', values);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form className="w-full max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
                    <Field type="email" id="email" name="email" className="border border-gray-300 rounded p-2 w-full text-black" />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-xs" />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">Password</label>
                    <Field type="password" id="password" name="password" className="border border-gray-300 rounded p-2 w-full text-black" />
                    <ErrorMessage name="password" component="div" className="text-red-500 text-xs" />
                </div>
                <div className="mb-4">
                    <label htmlFor="repeatPassword" className="block text-gray-700 text-sm font-semibold mb-2">Repeat Password</label>
                    <Field type="password" id="repeatPassword" name="repeatPassword" className="border border-gray-300 rounded p-2 w-full text-black" />
                    <ErrorMessage name="repeatPassword" component="div" className="text-red-500 text-xs" />
                </div>
                <div className="flex justify-between">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-full mr-2">Sign Up</button>
                    <button type="button" className="bg-gray-500 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded w-full ml-2">Cancel</button>
                </div>
            </Form>
        </Formik>
    );
};

const HomePage = () => {
    return (
        <div className="flex justify-center">
            <div className="mt-8">
                <LoginForm/>
            </div>
            <div className="mt-8 ml-8">
                <SignUpForm/>
            </div>
        </div>
    );
};

export default HomePage;
