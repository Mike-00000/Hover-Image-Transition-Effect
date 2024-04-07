import { OrbitControls } from "@react-three/drei";
import { FadingImageDisplacement } from "./FadingImageDisplacement";
import { FadingImage } from "./FadingImage";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <FadingImageDisplacement position-x={1.5} position-z={-2}/>
      <FadingImage position-x={-1.5} />
    </>
  );
};
