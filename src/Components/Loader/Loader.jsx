import React from "react";
import MyLoader from "react-loader-spinner";

function Loader () {
 
    return (
      <MyLoader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    );
  }

export  default Loader;  


