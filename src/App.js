import './App.css';
import { Routes, Route } from "react-router-dom";
import { Sidebar } from './Components/Sidebar';
import { Requests, OngoingStays, PreviousStays, Reports } from "./Pages";

function App() {
  return (
    <>
    <div className="flex">
      <div className="md:block hidden max-w-[240px] z-50 w-full relative min-h-[100vh]">
        <Sidebar/>
      </div>

      <div className="bg-back-gray w-full min-h-[100vh] px-2">
      <Routes>
        <Route path="/" element={<Requests/>}/>
        <Route path="/requests" element={<Requests/>}/>
        <Route path="/ongoingStays" element={<OngoingStays/>}/>
        <Route path="/previousStays" element={<PreviousStays/>}/>
        <Route path="/reports" element={<Reports/>}/>
      </Routes>
      </div>

    </div>
    </>
  );
}

export default App;
