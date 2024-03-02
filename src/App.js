import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Details from "./pages/Details";
import PageContainers from "./containers/PageContainers";


function App() {
  return (
    <div className="App">
      <PageContainers>
      <BrowserRouter >
        <Navbar/>
        <Routes>
          <Route index element={<Home/>} />  
          <Route path="detail" element={<Details/>} />  
        </Routes>
        <Footer/>
      </BrowserRouter>
      </PageContainers>
    </div>
  );
}

export default App;
