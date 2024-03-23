import "./App.css";
import { Routes, Route } from "react-router-dom";
import TaskManager from "./components/TaskManager";
import Contacts from "./components/Contacts";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<TaskManager />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </>
  );
}

export default App;
