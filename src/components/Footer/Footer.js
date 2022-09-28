import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <h4 className="footer__title">Annabelle</h4>
      <div className="footer__socials">
        <a className="footer__socials-link" href="#">
          Facebook
        </a>{" "}
        |{" "}
        <a className="footer__socials-link" href="#">
          Instagram
        </a>{" "}
        |
        <a className="footer__socials-link" href="#">
          Twitter
        </a>
      </div>
      <p className="footer__details">
        Restaurant Annabelle &copy; 2020, All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer;
