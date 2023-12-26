import {
  ContactShadows,
  Environment,
  Float,
  OrbitControls,
} from "@react-three/drei";
import { MacbookPro } from "./Macbook";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <Float>
        <MacbookPro />
      </Float>
      <ContactShadows position-y={-0.5} opacity={0.4} blur={2} />
      <Environment preset="city" background blur={4} />
      {/* <mesh>
        <boxGeometry />
        <meshNormalMaterial />
        <Decal
          debug // Makes "bounding box" of the decal visible
          position={[0, 0, -0.5]} // Position of the decal
          rotation={[0, 0, 0]} // Rotation of the decal (can be a vector or a degree in radians)
          scale={[1, 0.5, 0.5]} // Scale of the decal
        >
          <meshBasicMaterial
            map={texture}
            polygonOffset
            polygonOffsetFactor={-1}
          />
        </Decal>
      </mesh> */}
    </>
  );
};
