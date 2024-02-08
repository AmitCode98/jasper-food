import React from "react";
import Landing from "./pages/Landing";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import Veg from "./pages/Veg";
import NonVeg from "./pages/NonVeg";




const App = () => {
  return (
    <>
    <Header />
      {/* <Landing /> */}
      {/* <AboutUs/> */}
      {/* <Veg/> */}
      <NonVeg/>
      <Footer/>
    </>
  );
};

export default App;
