import React from "react";
import "./ContactButton.css";
import { Link } from "react-scroll";

function ContactButton() {
  return (
    <div>
      <button>Write to me</button>
      {/* <Link
          smooth={true}
          to="contacts"
          offset={-80}
          className="btn-main-offer"
          href="#"
        >
          Contact me
        </Link> */}
    </div>
  );
}

export default ContactButton;
