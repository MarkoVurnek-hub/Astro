import TWEEN from "@tweenjs/tween.js";
import * as THREE from "three";
export default (coords, ref) => {
  new TWEEN.Tween(coords)
    .to({ x: -90, y: 50, z: 190 }, 5000)
    .easing(TWEEN.Easing.Linear.None)
    .onUpdate(function() {
      if (
        !Number.isNaN(coords.x) &&
        !Number.isNaN(coords.y) &&
        !Number.isNaN(coords.z)
      ) {
        ref.current.position.set(coords.x, coords.y, coords.z);
        ref.current.lookAt(new THREE.Vector3(5, 7, 0));
      }
    })
    .onComplete(() => {
      ref.current.lookAt(new THREE.Vector3(5, 7, 0));
    })
    .start();
};
