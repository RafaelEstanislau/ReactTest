import React from "react";
import { useUsers } from "./ProviderContext";
import { useEffect } from "react";
import { Link } from "react-router-dom";
export default function User() {
  const { users, setUsers, setCurrentUser } = useUsers();

  useEffect(() => {
    async function getUserData() {
      const response = await fetch("https://api.github.com/users");

      const data = await response.json();

      setUsers(data);
    }

    getUserData();
  }, []);
  console.log(users);
  /*Create a screen that will list all users from GitHub and will display their Id and Login. 
    Remember, you can’t list all users at once you will have to use pagination.*/

  return (
    <div className="container">
      {users.map((currElement) => {
        return (
          <div className="cardUser">
            <div className="cardBox">
              <div className="cardContent">
                <img src={currElement.avatar_url} alt="Github profile" />
                <div className="text">{currElement.login}</div>
                <div className="text">ID: {currElement.id}</div>
                <Link to="/details">
                  <button
                    className="buttonText"
                    onClick={() => setCurrentUser(currElement)}
                  >
                    More Info
                  </button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
