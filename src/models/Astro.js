import React, { useEffect, useMemo } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import gsap from "gsap";
import * as THREE from "three";
import { useFrame, useLoader } from "react-three-fiber";

export default () => {
  const { scene, animations } = useLoader(GLTFLoader, "../myastro.glb");
  const mixer = useMemo(() => new THREE.AnimationMixer(scene), [scene]);

  // Play animations after mount
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(".launch", 2, {
      opacity: 0,

      delay: 5,
      y: 500
    }).eventCallback("onComplete", () => {});
    animations.forEach(clip => mixer.clipAction(clip).play());
  }, []);

  // Update mixer every frame
  useFrame((state, delta) => mixer.update(delta));

  return <primitive object={scene} dispose={null} />;
};
