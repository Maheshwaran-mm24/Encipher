function LoginStatus({ isLoggedIn }) {
  return <p>{isLoggedIn ? "Logged In" : "Logged Out"}</p>;
}
export default LoginStatus