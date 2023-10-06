import logo from "./logo.svg";
import "./App.css";
import Leftsidebar from "./Components/Left-sidebar/Leftsidebar";
import Mainsection from "./Components/Mainsection/Mainsection";
import Rightsection from "./Components/Rightsection/Rightsection";

function App() {
  return (
    <div className="appContainer">
      <Leftsidebar />
      <Mainsection />
      <Rightsection />
    </div>
  );
}

export default App;
