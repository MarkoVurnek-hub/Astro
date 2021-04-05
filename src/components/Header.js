import React from "react";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="header-inner">
          <div className="title">Let's explore.</div>
          <div className="title-skills">Skills</div>
        </div>
        <div className="contact">
          <button
            className="linkedin"
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/marko-vurnek-a728861a2",
                "_blank"
              );
            }}
          >
            Say hi!
          </button>
        </div>
      </div>
    </>
  );
}
