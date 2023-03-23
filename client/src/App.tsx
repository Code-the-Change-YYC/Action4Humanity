import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import trpc from "./trpc";

function App() {
  const hello = trpc.helloWorld.useQuery("chief keef");
  return (
    <>
      <div className="bg-purple min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
