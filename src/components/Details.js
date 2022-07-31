import React, { useState, useEffect } from "react";
import { useUsers } from "./ProviderContext";

/*Using the screen created in step 3, create a new screen that will display the details
 of a user (Id, Login, Profile URL and the date of the login creation).*/
export default function Details() {
  const { currentUser } = useUsers();

  const [usersRepo, setUsersRepo] = useState([]);
  useEffect(() => {
    async function getUsersRepo() {
      const response = await fetch(
        `https://api.github.com/users/${currentUser.login}/repos`
      );
      const data = await response.json();
      setUsersRepo(data);
    }
    getUsersRepo();
  }, []);

  return (
    <>
      <div className="container">
        <div className="cardUser">
          <div className="cardBox">
            <img src={currentUser.avatar_url} alt="Github profile" />
            <div className="text">{currentUser.html_url}</div>
            <div className="text">{currentUser.login}</div>
            <div className="text"> ID: {currentUser.id}</div>
          </div>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th className="tableText">Name</th>
            <th className="tableText">ID</th>
            <th className="tableText">Link</th>
          </tr>
        </thead>
        <tbody>
          {usersRepo.map((currElement) => (
            <tr>
              <td className="tableText tableSpace">{currElement.name}</td>
              <td className="tableText tableSpace">{currElement.id}</td>
              <td className="tableText tableSpace">{currElement.html_url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
