import React, { useState, useEffect } from "react";
import { useUsers } from "./ProviderContext";

/*Using the screen created in step 3, create a new screen that will display the details
 of a user (Id, Login, Profile URL and the date of the login creation).*/
export default function Details() {
  const { currentUser } = useUsers();
  
  
  
  return (
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
  );
}
