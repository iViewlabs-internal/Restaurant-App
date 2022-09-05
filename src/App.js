import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./app/components/home/Home";
import Search from "./app/view/Search";
import Settings from "./app/pages/Settings";

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
