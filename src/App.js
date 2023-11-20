import Adminpage from "./Adminpage";
import "./App.css";
import Sign_in from "./Sign_in";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Sign_in />} />
          <Route path="/" element={<Sign_in />} />
          <Route path="/:id" element={<Adminpage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
