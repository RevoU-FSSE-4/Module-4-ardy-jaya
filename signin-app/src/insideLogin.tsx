import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ProfileContext } from "./Profile";



interface Category {
  id: string;
  category_name: string;
  category_description: string;
  is_active: boolean;
}

interface ProfileContext{
  email: string;
  setEmail: (email: string) => void;
}

const InsideLogin: React.FC = () => {
  const { email } = useContext(ProfileContext);
  const navigate = useNavigate();
  const [data, setData] = useState<Category[]>([]);
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://library-crud-sample.vercel.app/api/category/",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []);
  
  


  const updateCategory = async (id: string) => {
    try {
      const response = await axios.put(
        `https://library-crud-sample.vercel.app/api/category/update/${id}`,
        {
          // Add the necessary data for updating the category
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(response.data);
      // Perform any additional logic with the result
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/");
  };

 

  return (
    <>
      <h1>Inside Login</h1>
      <h1>Email: {email}</h1>
      <button onClick={() => navigate("/newCategory")} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Add To Do
      </button>
    
      <ul className="mt-4">
        {data &&
          data.map((values: Category) => (
            <li key={values.id} className="text-sm mb-4">
              <b>Name:</b> {values.category_name}
              <b className="pl-2">Description:</b> {values.category_description}
              <b className="pl-2">Status:</b>{" "}
              {values.is_active ? "Active" : "Not Active"}
              <div className="mt-3">
                <button
                 onClick={() => navigate(`/editCategory/${values.id}`)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-sm mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => navigate(`/deleteCategory/${values.id}`)}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded-sm"
                >
               Delete
                </button>
              </div>
            </li>
          ))}
      </ul>

      <br />
      <div>
        <button
          onClick={logout}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded"
        >
          Log Out
        </button>
      </div>
    </>
  );
};

export default InsideLogin;
