import "./Intro.scss";
import louisHanselFood from "../../assets/louis-hansel.jpg";
import louisHanselFood2 from "../../assets/louis-hansel2.jpg";

function Intro({ refProp }) {
  return (
    <>
      <div ref={refProp} id="description" className="intro">
        <div className="intro__text">
          <h3 className="intro__welcome">Welcome</h3>
          <p>
            A collaboration between chef Michael Rideau and architect Raganhar
            Miazga, Restaurant Annabelle is a labour of love with a contemporary
            style. Here you can enjoy fine wine pairings with our robust and
            delicious menu, guaranteed to please even the most exacting of
            palates.
          </p>
        </div>
        <div className="intro__img">
          <img
            className="intro__img-back-layer"
            src={louisHanselFood}
            alt="Food image one"
          />
          <img
            className="intro__img-top-layer"
            src={louisHanselFood2}
            alt="food image two"
          />
        </div>
      </div>
    </>
  );
}

export default Intro;
