import React from "react";

const year = new Date();

function Footer() {
  return(
    <div className="footer">
      <p>Made by Mikko</p>
      <p>{year.getFullYear()}</p>
    </div>
  )
}

export default Footer;