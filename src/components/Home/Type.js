import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full-stack Developer & B2B SaaS Builder",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        delay: 75,
      }}
    />
  );
}

export default Type;
