import Navbar from "./components/Navbar";
import "./styles/App.css"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/profile";
import Account from "./pages/account";
import Chat from "./pages/Chat";
import Payment from "./pages/Payment";
import Support from "./pages/Support";
import Service from "./pages/Service";
import { useEffect } from "react";

function App() {


  return (
    <BrowserRouter>
      <div className="page-container">
        <div className="not-footer">
          <Navbar />

          <main className="page-body">

            <Routes>

              <Route path="/" element={ <Home /> } />
              <Route path="/profile" element={ <Profile /> } />
              <Route path="/account" element={ <Account /> } />
              <Route path="/login" element={ <Login /> } />
              <Route path="/register" element={ <Register /> } />
              <Route path="/chat" element={ <Chat /> } />
              <Route path="/payment" element={ <Payment /> } />
              <Route path="/support-us" element={ <Support /> } />

              <Route path="/services/:serviceID" element={ <Service /> } />

            </Routes>

          </main>

        </div>

        <footer className="page-footer">

        </footer>
      </div>
    </BrowserRouter>
  );

}

export default App;
