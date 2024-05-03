import React, { useState } from "react";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import { Navigate, useNavigate } from "react-router-dom";

interface Create {
    category_name: string;
    description: string;
    is_active: boolean;
}

const Create = () => {
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [isActive, setIsActive] = useState(false || true);
    const navigate = useNavigate();

    const handleSubmit = async (values: Create) => {
        const { description, category_name } = values;
        const newCategory: Create = {
            category_name: category_name,
            description: description,
            is_active: isActive,
        };
        axios
            .post(
                "https://library-crud-sample.vercel.app/api/category/create",
                newCategory,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer 392d53b7-eb27-4735-a08a-10b157c5aac`,
                    },
                }
            )
            .then((response) => {
                console.log(response);
                navigate("/insideLogin");
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <Formik
            initialValues={{ category_name: "", description: "" }}
            onSubmit={(values: any, actions: any) => {
                handleSubmit(values);
                
                actions.resetForm();
            }}
        >
            <Form className="max-w mt-5 mb-5">
                <Field
                    type="text"
                    name="category_name"
                    placeholder="Category Name"
                    className="border border-gray-400 rounded-sm px-2 py-1 m-5 text-black"
                            />

                <Field
                    type="text"
                    name="description"
                    placeholder="Description"
                    className="border border-gray-400 rounded-sm px-2 py-1 mr-2 text-black"
                />
                <Field
                    type="checkbox"
                    name="is_active"
                    className="border border-gray-400 rounded-sm px-2 py-1 mr-2 text-black w-8 h-10"/>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-sm mt 2"
                >
                    Create
                </button>
            </Form>
        </Formik>
    );
};

export default Create;
