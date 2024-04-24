import './stylesheets/theme.css'
import './stylesheets/alignments.css'
import './stylesheets/custom-components.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./pages/common/login/login";
import Register from "./pages/common/register/register";
import "./index.css"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
