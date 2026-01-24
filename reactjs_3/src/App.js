import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Welcome from "./components/Welcome";
import ToggleMessage from "./components/ToggleMessage";
import LoginDashboard from "./components/LoginDashboard";
import FruitsList from "./components/FruitsList";
import StudentsList from "./components/StudentsList";
import ControlledInput from "./components/ControlledInput";
import UsernameForm from "./components/UsernameForm";
import Card from "./components/Card";

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <Welcome isLoggedIn={isLoggedIn} />
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        Toggle Login
      </button>

      <hr />
      <ToggleMessage />

      <hr />
      <LoginDashboard />

      <hr />
      <h4>Fruits</h4>
      <FruitsList />

      <hr />
      <h4>Students</h4>
      <StudentsList />

      <hr />
      <ControlledInput />

      <hr />
      <UsernameForm />
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About Page</h2>
      <Card />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
