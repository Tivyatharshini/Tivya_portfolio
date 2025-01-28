import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "ML Engineer",
          "MERN Stack Developer",
         // "MERN Stack Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 40,
      }}
    />
  );
}

export default Type;
