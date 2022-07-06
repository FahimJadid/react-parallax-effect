import { Parallax } from "react-parallax";
import spaceFour from "../images/space_4.jpg";

const ImageThree = () => (
  <Parallax className="image" bgImage={spaceFour} strength={400}>
    <div className="content">
      <span className="img-txt">Taking to Earth</span>
    </div>
  </Parallax>
);

export default ImageThree;
