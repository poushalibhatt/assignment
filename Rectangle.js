import React from "react";

let Rectangle = ({ color }) => {
    
  const screenWidth = window.screen.width / 2;
  const screenHeight = window.screen.height / 2;

  const styleObj = {
    backgroundColor: color,
    width: screenWidth,
    height: screenHeight,
  };

  return (
    <>
      <section style={styleObj} className='rectangle'></section>
    </>
  );
};

export default Rectangle;
