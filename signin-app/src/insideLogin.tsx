import { useEffect, useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Profile: React.FC = () => {
  const [user] = useState<string | null>(localStorage.getItem("user"));

  return (
    <div>
      <div>Profile</div>
      <h1>Hello {user}!</h1>
    </div>
  );
};

const InsideLogin: React.FC = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      console.log(data);
      setData(JSON.stringify(data));
    };

    fetchData();

    const timer = setInterval(fetchData, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [setData]);

  function logout() {
    localStorage.clear();
    navigate("/");
  }

  return (
    <div>
      <Profile />
      <>
        <h1>Inside Login</h1>
        <div>data: {data}</div>
      </>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod,
      </p>
      <br />
      <div>
        <button
          onClick={logout}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-sm"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default InsideLogin;
