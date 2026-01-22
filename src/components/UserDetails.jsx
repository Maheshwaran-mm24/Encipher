function UserDetails({ user }) {
  return (
    <p>
      Name: {user.name}, Email: {user.email}
    </p>
  );
}
export default UserDetails