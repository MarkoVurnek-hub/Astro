import TWEEN from "@tweenjs/tween.js";
import React, { useRef, useEffect } from "react";
import { useFrame, useThree } from "react-three-fiber";

import cameraTween from "../animations/cameraTween";
export default props => {
  const ref = useRef();
  const requestRef = useRef();
  const { setDefaultCamera } = useThree();
  if (props.state == true) {
    const coords = {
      x: ref.current.position.x,
      y: ref.current.position.y,
      z: ref.current.position.z
    };
    cameraTween(coords, ref);
  }
  const animate = time => {
    requestRef.current = requestAnimationFrame(animate);
    TWEEN.update(time);
  };
  useEffect(() => {
    setDefaultCamera(ref.current);

    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  useFrame(delta => {
    TWEEN.update(delta);
    ref.current.updateMatrixWorld();
  });

  return <perspectiveCamera ref={ref} {...props} />;
};
