import logo from "./logo.svg";
import "./App.css";
import Leftsidebar from "./Components/Left-sidebar/Leftsidebar";
import Mainsection from "./Components/Mainsection/Mainsection";

function App() {
  return (
    <div className="appContainer">
      <Leftsidebar />
      <Mainsection />
    </div>
  );
}

export default App;
