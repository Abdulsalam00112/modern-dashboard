import react from "react";
import Sidebar from "./Components/Sidebar";
import Content from "./Components/Content";
import Profile from "./Components/Profile";
import "./App.css"
function App() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboardContent">
        <Content />
        <Profile />
        
      </div>
    </div>
  );
}

export default App;
