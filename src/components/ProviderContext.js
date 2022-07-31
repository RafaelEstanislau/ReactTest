import { useState, useMemo, createContext, useContext } from "react";

const UsersContext = createContext({});

export const useUsers = () => useContext(UsersContext);

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  const value = useMemo(() => {
    return {
      users,
      setUsers,
      currentUser,
      setCurrentUser,
    };
  }, [users, setUsers, currentUser, setCurrentUser]);

  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
};

export default UsersProvider;
