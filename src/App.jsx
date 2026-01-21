import Hello from "./components/Hello";
import Welcome from "./components/Welcome";
import Header from "./components/Header";
import TwoElements from "./components/TwoElements";
import MyName from "./components/MyName";
import GreetUser from "./components/GreetUser";
import Sum from "./components/Sum";
import Admin from "./components/Admin";
import User from "./components/User";
import Person from "./components/Person";



export default function App() {
  const user = { name: "Mahesh", email: "mahesh@example.com" };
  const skills = ["HTML", "CSS", "JavaScript", "React"];

  const handleClick = () => {
    alert("Button Clicked from Parent!");
  };

  return (
    <div>
      <Hello />
      <Welcome />
      <Header message="This is Header" />
      <TwoElements />
      <MyName />
      <GreetUser/>
      <Sum/>
      <Admin isAdmin={true} />
      <User name="Mahesh" />
      <Person name="Mahesh" age={22} />
    </div>
  );
}

