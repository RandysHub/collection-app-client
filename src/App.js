import "./App.css";
import Header from "./components/Header";
import Books from "./components/Books";
import SignUp from "./components/Register";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./components/Register";
import LogIn from "./components/LogIn";
import Dashboard from "./components/Dashboard";

function App() {
  return (
        <div className="app">
          {/* <Header />
          <Books /> */}
    <Router>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  </div>
  );
}

export default App;
