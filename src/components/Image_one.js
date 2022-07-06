import { Parallax } from "react-parallax";
import spaceTwo from "../images/space_2.jpg";

const ImageOne = () => (
  <Parallax className="image" bgImage={spaceTwo} strength={400}>
    <div className="content">
      <span className="img-txt">Taking to Earth</span>
    </div>
  </Parallax>
);

export default ImageOne;
