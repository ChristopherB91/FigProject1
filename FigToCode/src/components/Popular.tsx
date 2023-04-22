import Pop1 from "../assets/PopPic1.svg";
import Pop2 from "../assets/PopPic2.svg";
import "../App.css";

function Popular() {
  return (
    <b className="PopContainer">
      <p>Tüm Spor Ayakkabılarında Aradığın Tarz</p>
      <p>Sadece Burada.</p>
      <div>
        <img src={Pop1} alt="Picture 1" className="PopImg1" />
        <img src={Pop2} alt="Picture 2" className="PopImg2" />
      </div>
    </b>
  );
}

export default Popular;
