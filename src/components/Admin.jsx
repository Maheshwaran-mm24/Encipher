 function Admin({ isAdmin }) {
  return <>{isAdmin && <p>Admin User</p>}</>;
}
export default Admin