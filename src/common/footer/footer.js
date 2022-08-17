import {
  YoutubeOutlined,
  TwitterOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <p>@2022 All Rights Reserved</p>
      <div className="social-media">
        <a>
          <YoutubeOutlined />
        </a>
        <a>
          <TwitterOutlined />
        </a>
        <a>
          <FacebookOutlined />
        </a>
      </div>
      <div className="footer-links">
        <a>Contact us</a>
        <a>Privacy Policies</a>
        <a>Help</a>
      </div>
    </footer>
  );
};

export default Footer;
