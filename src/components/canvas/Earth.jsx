import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import styled from "styled-components";
import { useThemeContext } from "../../utils/ThemeContext";

const EarthContainer = styled.div`
  position: relative;
  opacity: ${({ isDarkMode }) => (isDarkMode ? "1" : "0.8")};
  width: 350px;
  height: 350px;
  margin: 0 auto;
`;

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");
  return (
    <primitive object={earth.scene} scale={2.2} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  const { isDarkMode } = useThemeContext();
  
  return (
    <EarthContainer isDarkMode={isDarkMode}>
      <Canvas
        shadows
        frameloop="demand"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
      >
        <Suspense fallback={null}>
          <OrbitControls
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <ambientLight intensity={isDarkMode ? 0.2 : 0.5} />
          <directionalLight position={[5, 5, 5]} intensity={isDarkMode ? 0.5 : 0.8} />
          <Earth />
          <Preload all />
        </Suspense>
      </Canvas>
    </EarthContainer>
  );
};

export default EarthCanvas;
