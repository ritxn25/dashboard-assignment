import React from "react";
import Cards from "../cards/cards";
import LineandBar from "../charts/LineandBar";
import Doctable from "../Document/Doctable";


const Header = () => {
  return (
    <>
      <div>
        <div style={{  fontSize: "2rem", fontWeight: "bold" }}>
          Overview
        </div>
       
       
      </div>
    
      <Cards />
      <LineandBar />
      {/* <Doctable /> */}
      
      
      </>
    
  );
};

export default Header;
