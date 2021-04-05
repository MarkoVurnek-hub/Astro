import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";
import { a } from "react-spring/three";
import { Html } from "drei";
//Models
import Astro from "../models/Astro";
import Earth from "../models/Earth";
import Moon from "../models/Moon";
export default () => {
  let meshSpaceman = useRef(null);
  let meshMoon = useRef(null);
  let meshEarth = useRef(null);

  let mov = 0;

  useFrame((state, delta) => {
    meshSpaceman.current.rotation.y -= 0.004;
    meshMoon.current.rotation.y -= 0.002;
    meshEarth.current.rotation.y += 0.002;

    mov += 0.009;
  });
  return (
    <>
      <a.mesh ref={meshEarth} position={[0, -40, 160]} scale={[10, 10, 10]}>
        <Earth />
      </a.mesh>
      <a.mesh ref={meshSpaceman} position={[-81, 44.85, 170]}>
        <Astro />
      </a.mesh>
      <a.mesh ref={meshMoon} position={[-80.5, 34, 170.5]}>
        <Moon />
        <Html
          center // Adds a -50%/-50% css transform (default: false)
          // Aligns to the upper-left corner, fills the screen (default:false)
          scaleFactor={10} // If set (default: undefined), children will be scaled by this factor, and also by distance to a PerspectiveCamera.
          zIndexRange={[100, 0]} // Z-order range (default=[16777271, 0])
        >
          <div className="skills">
            <div className="nodeLogo">
              <img src="./node.png" alt="nodejs" />
            </div>
            <div className="reactLogo">
              <img src="./react.png" alt="reactjs" />
            </div>
            <div className="mongoLogo">
              <img src="./mongodb.png" alt="mongodb" />
            </div>
          </div>
        </Html>
      </a.mesh>
    </>
  );
};
