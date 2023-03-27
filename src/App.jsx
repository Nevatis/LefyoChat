import { useState } from "react";
import lefyo from "./lefyo.css";
import Login from "./sayfalar/Login";
import Navbar from "./components/Navbar";
import ChatRoom from "./sayfalar/ChatRoom";
import { PrivateRoute } from "./routes/PrivateRoute";
import { Route, Router, Routes, Link } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/chat"
          element={
            <PrivateRoute>
              <ChatRoom />
            </PrivateRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
