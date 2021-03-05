import React from 'react';
import { Navbar } from 'react-bootstrap';

function Footer() {
  return (
    <>
      <footer
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "3.5rem" /* Footer height */,
          backgroundColor: "#343a40",
        }}
      >
        <div>
          <p
            style={{
              textAlign: "center",
              color: "white",
              margin: "0",
              padding: "1rem",
            }}
          >
            This site is powered by React. Built by Aeijan Bajracharya and Stephen
            Oh
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;