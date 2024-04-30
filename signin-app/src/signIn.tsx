import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'tailwindcss/tailwind.css';
import { BrowserRouter, Navigate } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

const SignInForm: React.FC = () => {
    const initialValues = {
        email: '',
        password: '',
    };

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().required('Password is required'),
    });

        const navigate = useNavigate();

        const handleSubmit = (values: any) => {
           localStorage.setItem('islogin', 'true');
            navigate('/insideLogin');
        };


    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form className="max-w-sm mx-auto">
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700">Email</label>
                    <Field type="email" id="email" name="email" className="mt-1 p-1 border border-gray-300 rounded-sm w-full text-black" />
                    <ErrorMessage name="email" component="div" className="text-red-500" />
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700">Password</label>
                    <Field type="password" id="password" name="password" className="mt-1 p-1 border border-gray-300 rounded-sm w-full text-black" />
                    <ErrorMessage name="password" component="div" className="text-red-500" />
                </div>

                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-sm">
                    Log In
                </button>
            </Form>
        </Formik>
    );
};

export default SignInForm;
