import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./app/pages/home/Home";
import Search from "./app/pages/search/Search";
import Settings from "./app/pages/settings/Settings";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
