import "./Menu.scss";
import downArrow from "../../assets/angle-down-solid.svg";
import menuPic1 from "../../assets/menupic1.jpg";
import menuPic2 from "../../assets/menupic2.jpg";
import { useState, useEffect } from "react";

function Menu({ scrollTo, scrollRef }) {
  const [menuAnim, setMenuAnim] = useState();
  const [menuMobiAnim, setMenuMobiAnim] = useState();

  useEffect(() => {
    if (!scrollRef?.current) return;
    const observer4 = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setMenuAnim(entry.isIntersecting);
        if (entry.isIntersecting) {
          observer4.unobserve(scrollRef.current);
        }
      },
      { threshold: 0.5 }
    );
    observer4.observe(scrollRef.current);
  }, []);

  useEffect(() => {
    if (!scrollRef?.current) return;
    const observerMobi = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setMenuMobiAnim(entry.isIntersecting);
        if (entry.isIntersecting) {
          observerMobi.unobserve(scrollRef.current);
        }
      },
      { threshold: 0.2 }
    );
    observerMobi.observe(scrollRef.current);
  }, []);

  return (
    <>
      <div className="reservation-page__header">
        <h1 className="reservation-page__heading">MENU</h1>
        <div className="hero__scroll-to" onClick={scrollTo}>
          <img
            className="hero__scroll-to-img"
            src={downArrow}
            alt="scroll to"
          />
        </div>
      </div>
      <div ref={scrollRef} className="menu">
        <div className="menu__cont">
          <div
            className={
              menuMobiAnim ? "menu__mobile-art" : "menu__mobile-art--blurred"
            }
          >
            <img
              className="menu__mobile-art-pic1"
              src={menuPic1}
              alt="mobile art pic one"
            />
            <img
              className="menu__mobile-art-pic2"
              src={menuPic2}
              alt="mobile art pic two"
            />
          </div>
          <div className="menu__left">
            <div className="menu__item">
              <h4 className="menu__item-title">Grilled Chicken Caesar $10</h4>
              Romaine, parmesan, and garlic croutons.
            </div>
            <div className="menu__item">
              <h4>New York Striploin $25</h4>
              12oz NY striploin, local seasonal vegetables, mashed potatos. Add
              on: Sautéed Mushrooms $5
            </div>
            <div className="menu__item">
              <h4 className="menu__item-title">BBQ Back Ribs $30</h4>
              Bourbon bbq sauce, sweet potato cajun fries, zesty dill avocado
              slaw.
            </div>
            <div className="menu__item">
              <h4 className="menu__item-title">Cajun Chicken $20</h4>
              Grilled chicken marinated with our in-house cajun sauce. Served
              with homemade baked potato chips and seasonal vegetables.
            </div>
            <div className="menu__item">
              <h4 className="menu__item-title">Seafood Sirloin $32</h4>
              8oz top sirloin, seasonal vegetables, deliciously roasted
              potatoes.
            </div>
            <div className="menu__item">
              <h4 className="menu__item-title">
                Portobello Mushroom Chicken $26
              </h4>
              Vermicelli pasta, garlic creamy sauce, basil pesto, and seasonal
              vegetables.
            </div>
          </div>
          <div className="menu__right">
            <div className="menu__item">
              <h4 className="menu__item-title">Wild Boar Shoulder $30</h4>
              Pan-seared wild boar, cracked peppercorns, and red wine glaze.
              Served with hot corn cakes and a side salad.
            </div>
            <div className="menu__item">
              <h4 className="menu__item-title">Bison Burger $20</h4>
              Kaiser bun, lettuce, tomato, red onions, and pepper jack cheese.
              Served with a side garden salad or fried potato wedges.
            </div>
            <div className="menu__item">
              <h4 className="menu__item-title">Lamb Stew $21</h4>
              Roma tomatoes, cannellini beans, fresh onion. $22
            </div>
            <div className="menu__item">
              <h4>Smoked WhiteFish $21</h4>
              Tartare with herb oil, served with fava beans, parsley, chives.
            </div>
            <div className="menu__item">
              <h4 className="menu__item-title">Brisket Sandwich $20</h4>
              Slow-smoked beef brisket sliced julienne, pickled okra, red
              onions, tomatoes, and ciabatta bread. Served with a side salad or
              fried potatoes.
            </div>
          </div>
        </div>
        <div className={menuAnim ? "menu__art" : "menu__art--blurred"}>
          <img className="menu__art-pic1" src={menuPic1} alt="menu picture" />
          <img
            className="menu__art-pic2"
            src={menuPic2}
            alt="menu picture two"
          />
        </div>
      </div>
    </>
  );
}

export default Menu;
