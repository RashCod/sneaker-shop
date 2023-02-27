import "./App.css";
import { Header } from "./Components/Header/Header";
import { Home } from "./Components/Home/Home";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { User } from "./Components/Home/User/User";
import { FullProduct } from "./Components/Products/FullProduct";

function App() {
  const [isCloseCart, setCloseCart] = React.useState(false);
  return (
    <div className="wrapper">
      <div className="container">
        <Header isCloseCart={isCloseCart} setCloseCart={setCloseCart} />
        <Routes>
          <Route
            path="/"
            element={
              <Home isCloseCart={isCloseCart} setCloseCart={setCloseCart} />
            }
          />
          <Route path="/product/:id" element={<FullProduct/>}/>
          <Route path="/user" element={<User />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
