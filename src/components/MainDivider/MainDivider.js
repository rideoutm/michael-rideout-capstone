import { Link } from "react-router-dom";
import "./MainDivider.scss";

function MainDivider() {
  return (
    <div className="main-divider">
      <div className="main-divider__heading">
        Where every flavor tells a story.
      </div>
      <Link to="/reservations" className="main-divider__res-btn">
        Book A Table
      </Link>
    </div>
  );
}

export default MainDivider;
