import "./App.css";
import LeftSidebar from "./Components/Left-sidebar/LeftSidebar";
import MainSection from "./Components/Mainsection/MainSection";
import RightSection from "./Components/Rightsection/RightSection";

function App() {
  return (
    <div className="appContainer">
      <LeftSidebar />
      <MainSection />
      <RightSection />
    </div>
  );
}

export default App;
