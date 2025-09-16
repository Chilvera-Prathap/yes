import React, { useState } from "react";
import "./style.css";

function Toggle_theme({ name, backgroundColor,textColor }) {
  return (
    <>
      <section style={{ backgroundColor, color: textColor }}>
        <section className="content">
          <h1>{name}</h1>
        </section>
      </section>
    </>
  );
}

export default Toggle_theme;
