import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Details from "./pages/Details";
import PageContainers from "./containers/PageContainers";
import { useSelector } from "react-redux";
import Card from "./components/Card";


function App() {
  const {drawer}=useSelector(state => state.drawer);
  console.log(drawer)
  return (
    <div className="App">
      <PageContainers>
      <BrowserRouter >
        <Navbar/>
        <Routes>
          <Route index element={<Home/>} />  
          <Route path="detail" element={<Details/>} />  
        </Routes>
        {drawer && <Card/>}
        <Footer/>
      </BrowserRouter>
      </PageContainers>
    </div>
  );
}

export default App;
