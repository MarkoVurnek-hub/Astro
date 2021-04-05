export default () => {
  return (
    <>
      {/* Ambient Light illuminates lights for all objects */}
      <ambientLight intensity={0.3} color="white" />
      {/* Diretion light */}
      <directionalLight
        castShadow
        position={[30, 30, 20]}
        intensity={1}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <pointLight
        position={[0, 0, -10]}
        intensity={1.5}
        color={0xffffff}
        distance={200}
      />
    </>
  );
};
