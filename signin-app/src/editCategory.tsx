import React, { useEffect, useState } from "react";

import { Formik, Form, Field } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import FetchData from "./fetch";

interface editCategory {
  id: string;
  category_name: string;
  description: string;
  is_active: boolean;
}

const editCategory = () => {
  const idparam = useParams();
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  const useEffect (() => {
    const fetchData = async () => { 
      const response = await FetchData(`https://library-crud-sample.vercel.app/api/category/${idparam}`,
       { headers: { "Content-Type": "application/json", Authorization: `Bearer ${localStorage.getItem("token")}`, }, }); 
       setCategory(response.data.category_name); setDescription(response.data.description); setIsActive(response.data.is_active); } 
       fetchData(); }, []);

  

      const handleSubmit = async (event: any) => {
    console.log("submitting");
    const newCategory: Create = {
      category_name: category,
      description: description,
      is_active: isActive,
    };

    const option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCategory),
    };

    
try {
    const response = await FetchData(
      "https://library-crud-sample.vercel.app/api/category/create",
      option
    );
    if (response.ok) {
      alert("Category created successfully");
      navigate("/insideLogin");
    }} catch (error) {
      console.error(error);
    }
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
          onchange={(e: any) => {
            setCategory(e.target.value);
          }}
        />

        <Field
          type="text"
          name="description"
          placeholder="Description"
          className="border border-gray-400 rounded-sm px-2 py-1 mr-2 text-black"
          onchange={(e: any) => {
            setDescription(e.target.value);
          }}
        />
        <Field
          type="checkbox"
          name="is_active"
          className="border border-gray-400 rounded-sm px-2 py-1 mr-2 text-black w-8 h-10"
          onchange={(e: any) => {
            setIsActive(e.target.value);
          }}
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
