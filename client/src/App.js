import './stylesheets/theme.css'
import './stylesheets/alignments.css'
import './stylesheets/custom-components.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./pages/common/login/login";
import Register from "./pages/common/register/register";
import "./index.css"
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./components/Home/home";
import Welcome from "./components/Home/Welcome";
import Exams from "./pages/admin/exams/exams";
import Reports from "./pages/admin/reports/reports";
import "./stylesheets/layout.css";
import AddEditExam from "./pages/admin/exams/addEditExam";
function App() {
  return (
    <BrowserRouter>
      <Routes>

          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />

        <Route path="/dashboard" element={<ProtectedRoute><Home/></ProtectedRoute>} />

        <Route path="/admin/exams" element={<ProtectedRoute><Exams/></ProtectedRoute>}></Route>
        <Route path="/admin/exams/add" element={<ProtectedRoute><AddEditExam/></ProtectedRoute>}></Route>
        <Route path="/admin/exams/edit/:id" element={<ProtectedRoute><AddEditExam/></ProtectedRoute>}></Route>
        <Route path="/admin/reports" element={<ProtectedRoute><Reports/></ProtectedRoute>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
