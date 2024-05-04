import React, { useState } from "react";
import Category from "./category";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import FetchData from "./fetch";

const Create = () => {
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (values: any) => {
    try {
      console.log("submitting");
      const newCategory = {
        category_name: category,
        category_description: description,
        is_active: isActive,
      };

      const option = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(newCategory),
      };

      const response = await fetch(
        "https://library-crud-sample.vercel.app/api/category/create",
        option
      );

      if (response.ok) {
        alert("Category created successfully");
        navigate("/insideLogin");
      } else {
        // Handle errors for non-OK responses
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <Formik
      initialValues={{ category_name: "", description: "" }}
      onSubmit={(values, actions) => {
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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setCategory(e.target.value);
          }}
          value={category}
        />

        <Field
          type="text"
          name="description"
          placeholder="Description"
          className="border border-gray-400 rounded-sm px-2 py-1 mr-2 text-black"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setDescription(e.target.value);
          }}
          value={description}
        />
        <Field
          type="checkbox"
          name="is_active"
          className="border border-gray-400 rounded-sm px-2 py-1 mr-2 text-black w-8 h-10"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setIsActive(e.target.checked);
          }}
          checked={isActive}
        />
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
