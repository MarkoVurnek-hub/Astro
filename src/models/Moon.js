import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import { useLoader } from "react-three-fiber";
export default () => {
  const model = useLoader(GLTFLoader, "/moon.glb");

  return (
    <>
      <primitive object={model.scene} dispose={null} />
    </>
  );
};
