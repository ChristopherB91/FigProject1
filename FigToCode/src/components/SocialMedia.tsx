import facebook from "../assets/Facebook.svg";
import twitter from "../assets/Twitter.svg";
import insta from "../assets/Instagram.svg";
import "../App.css";

export default function Social() {
  return (
    <div className="Social-BG">
      <p style={{ color: "white" }}>SOSYAL MEDYA</p>
      <p className="sub" style={{ color: "grey" }}>
        Sosyal medyada bizleri takip edin fırsatları kaçırmayın
      </p>
      <div className="Social-Imgs">
        <img src={twitter} alt="Twitter icon" />
        <img src={facebook} alt="Facebook icon" />
        <img src={insta} alt="Insta icon" />
      </div>
    </div>
  );
}
