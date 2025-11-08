import GitHub_Logo from "../assets/github_icon.svg";
import LikedIn_Logo from "../assets/linkedin_icon.svg";
import "./style/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>تم التطوير بواسطة ❤️ يوسف عادل</p>
      <div className="footer__social">
        <a
          href="https://www.linkedin.com/in/yosef-adel/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={LikedIn_Logo} alt="LinkedIn Logo" />
        </a>
        <a
          href="https://github.com/Yosef-Adel/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={GitHub_Logo} alt="GitHub Logo" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
