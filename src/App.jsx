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
import Title from "./components/Title";
import Button from "./components/Button";
import LoginStatus from "./components/LoginStatus";
import UserDetails from "./components/UserDetails";
import Skills from "./components/Skills";
import ReuseExample from "./components/ReuseExample";
import Card from "./components/Card";
import ChildOne from "./components/ChildOne";
import ChildTwo from "./components/ChildTwo";
import ChildButton from "./components/ChildButton";
import Content from "./components/Content";
import Footer from "./components/Footer";


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
      <Title title="React Props Example" />
      <Button label="Click Here" onClick={handleClick} />
      <LoginStatus isLoggedIn={true} />
      <UserDetails user={user} /><Skills skills={skills} />
      <ReuseExample />
      <Card title="Card 1" description="This is first card" />
      <Card title="Card 2" description="This is second card" />
      <Card title="Card 3" description="This is third card" />
      <ChildOne data="Hello Child One" />
      <ChildTwo data="Hello Child Two" />
      <ChildButton onClick={handleClick} />
      <Header message="App Header" />
      <Content message="App Content" />
      <Footer message="App Footer" />
      
    </div>
  );
}

