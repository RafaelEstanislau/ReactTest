import User from "./components/User";
import Details from "./components/Details";
import UsersProvider from "./components/ProviderContext";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <UsersProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </BrowserRouter>
    </UsersProvider>
  );
}
export default App;
