import "./Intro.scss";
import louisHanselFood from "../../assets/louis-hansel.jpg";
import louisHanselFood2 from "../../assets/louis-hansel2.jpg";
import { useRef, useState, useEffect } from "react";

function Intro({ refProp }) {
  const [firstImgAnim, setFirstImgAnim] = useState();

  const firstImage = useRef();

  useEffect(() => {
    const observer1 = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setFirstImgAnim(entry.isIntersecting);
        if (entry.isIntersecting) {
          observer1.unobserve(firstImage.current);
        }
      },
      { threshold: 1 }
    );

    observer1.observe(firstImage.current);
  }, [firstImage]);
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
        <div
          ref={firstImage}
          className={firstImgAnim ? "intro__img" : "intro__img--blurred"}
        >
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
