import Experience from "./Experience";
import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <Canvas
    // orthographic
    // flat
    // dpr={[1, 2]}
    gl={
      {
        // antialias: false,
        // toneMapping: THREE.CineonToneMapping,
        // outputColorSpace: THREE.LinearEncoding,
      }
    }
    camera={{
      fov: 45,
      // zoom: 100,
      near: 0.1,
      far: 200,
      position: [3, 2, 6],
    }}
  >
    <Experience />
  </Canvas>
);
