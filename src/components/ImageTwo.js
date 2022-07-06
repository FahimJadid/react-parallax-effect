import { Parallax } from "react-parallax";
import spaceThree from "../images/space_3.jpg";

const ImageTwo = () => (
  <Parallax className="image" bgImage={spaceThree} strength={400}>
    <div className="content">
      <span className="img-txt">Taking to Earth</span>
    </div>
  </Parallax>
);

export default ImageTwo;
