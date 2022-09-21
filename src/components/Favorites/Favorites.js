import "./Favorites.scss";
import delfina from "../../assets/delfina-cocciardi.jpg";
import mathewReyes from "../../assets/matthew-reyes.jpg";

function Favorites() {
  return (
    <div className="favorites">
      <div className="favorites__img">
        <img className="favorites__img1" src={delfina} alt="food image one" />

        <img
          className="favorites__img2"
          src={mathewReyes}
          alt="food image two"
        />
      </div>
      <div className="favorites__text">
        <h2 className="favorites__text-header">Our Favorites</h2>
        <div className="favorites__text-sub-flex">
          <div className="favorites__left-col">
            <div className="favorites__food-item">
              <h4 className="favorites__food-item-header">
                New York Striploin $25
              </h4>{" "}
              12oz NY striploin, local seasonal vegetables, mashed potatos. Add
              on: Sautéed Mushrooms $5
            </div>
            <div className="favorites__food-item">
              <h4 className="favorites__food-item-header">
                Portobello Mushroom Chicken $26
              </h4>{" "}
              Vermicelli pasta, garlic creamy sauce, basil pesto, and seasonal
              vegetables.
            </div>
          </div>
          <div className="favorites__right-col">
            <div className="favorites__food-item">
              <h4 className="favorites__food-item-header">
                Brisket Sandwich $20
              </h4>{" "}
              Slow-smoked beef brisket sliced julienne, pickled okra, red
              onions, tomatoes, and ciabatta bread. Served with a side salad or
              fried potatoes.
            </div>
            <div className="favorites__food-item">
              <h4 className="favorites__food-item-header">
                Smoked WhiteFish $21
              </h4>{" "}
              Tartare with herb oil, served with fava beans, parsley, chives.
            </div>
          </div>
        </div>
        <button className="favorites__menu-btn">OUR MENU</button>
      </div>
    </div>
  );
}

export default Favorites;
