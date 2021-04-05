import { Html } from "drei";
import transition from "../animations/transition";
export default ({ update, controls }) => {
  return (
    <Html
      center
      scaleFactor={-20} // If set (default: undefined), children will be scaled by this factor, and also by distance to a PerspectiveCamera.
      zIndexRange={[0, 0]} // Z-order range (default=[16777271, 0])
    >
      <div className="launch">
        <div className="rocket">
          <div className="rocket-body">
            <div className="body"></div>
            <div className="fin fin-left"></div>
            <div className="fin fin-right"></div>
            <div className="window"></div>
          </div>
          <div className="exhaust-flame"></div>
          <div className="fire">
            <div className="fire-left">
              <div className="main-fire"></div>
              <div className="particle-fire"></div>
            </div>
            <div className="fire-main">
              <div className="main-fire"></div>
              <div className="particle-fire"></div>
            </div>
            <div className="fire-right">
              <div className="main-fire"></div>
              <div className="particle-fire"></div>
            </div>
            <div className="fire-bottom">
              <div className="main-fire"></div>
            </div>
          </div>
          <ul className="exhaust-fumes">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li>
              <div className="buttonContainer">
                <div className="buttonCenter">
                  <button
                    onClick={() => {
                      update(true);
                      transition(controls);
                      let audio = new Audio("/frank.mp3");

                      audio.play();
                    }}
                    className="launchButton"
                  >
                    LAUNCH
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Html>
  );
};
