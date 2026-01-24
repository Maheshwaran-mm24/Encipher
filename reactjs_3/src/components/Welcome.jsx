function Welcome({ isLoggedIn }) {
  return <h3>{isLoggedIn ? "Welcome User" : "Please Login"}</h3>;
}

export default Welcome;
