import { useState } from "react";

function LoginDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
      {isLoggedIn && <h4>Dashboard</h4>}
    </div>
  );
}

export default LoginDashboard;
