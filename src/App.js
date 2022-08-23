import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./app/components/home/Home";
import Search from "./app/view/Search";
import Settings from "./app/pages/Settings";

const App = () => {
  const [login, setLogin] = useState(false);

  const loggedIn = () => {
    sessionStorage.setItem("timer", 5000);
    setLogin(true);
  };
  const logout = () => {
    sessionStorage.setItem("timer", 5000);
    setLogin(false);
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home loggedIn={loggedIn} login={login} />}
          />
          <Route path="search" element={<Search logout={logout} />} />
          <Route path="settings" element={<Settings logout={logout} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
