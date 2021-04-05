import React, { useEffect, Suspense, useState } from "react";
import { ResizeObserver as polyfill } from "@juggle/resize-observer";

import "./App.scss";

import { Canvas } from "react-three-fiber";
import { OrbitControls, softShadows, Html } from "drei";

import IntroOverlay from "./components/introOverlay.js";
import Header from "./components/Header.js";

//Components
import Rocket from "./components/Rocket";

//Animations
import transition from "./animations/transition";
import overlay from "./animations/overlay";

//Scene
import Lights from "./scene/Lights";
import Camera from "./scene/Camera";
import Scene from "./scene/Scene";
import Stars from "./scene/Stars";
softShadows();

function App() {
  const [camera, setCamera] = useState([0, -20, 340]);
  const [update, setUpdate] = useState(false);
  const [controls, setControls] = useState(false);

  useEffect(() => {
    overlay();
  }, []);

  return (
    <>
      <IntroOverlay />

      <Header />
      <Canvas resize={{ polyfill }}>
        {controls && <OrbitControls target={[-80, 45, 170]} autoRotate />}
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
        <Camera position={camera} fov={60} state={update}>
          <Rocket update={setUpdate} controls={setControls} />
        </Camera>

        <Stars />
        <Suspense fallback={null}>
          <Lights />
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
