import "../App.css";
import Shoe1 from "../assets/ShoeImage.svg";
import Shoe2 from "../assets/ShoeImage2.svg";
import Shoe3 from "../assets/ShoeImage3.svg";
import Shoe4 from "../assets/ShoeImage4.svg";

let store: {
  name: string;
  price: number | string;
  type: string;
  image: string;
}[] = [
  {
    name: "Nike Blazer Young 2022",
    price: "1.250",
    type: "Günlük Ayakkabı",
    image: `${Shoe1}`,
  },
  {
    name: "Nike Blazer Young 2022",
    price: "1.250",
    type: "Günlük Ayakkabı",
    image: `${Shoe2}`,
  },
  {
    name: "Nike Blazer Young 2022",
    price: "1.250",
    type: "Günlük Ayakkabı",
    image: `${Shoe3}`,
  },
  {
    name: "Nike Blazer Young 2022",
    price: "1.250",
    type: "Günlük Ayakkabı",
    image: `${Shoe4}`,
  },
];

function Products() {
  return (
    <div>
      <div className="btndiv">
        <button className="BlkBtn" disabled>
          Kadin
        </button>
        <button className="YtBtn" disabled>
          Erkek
        </button>
      </div>
      <div className="Prod">
        {store.map((stores) => {
          return (
            <div className="ProdContainer">
              <img src={stores.image} alt="Pic of shoe" />
              <div className="ProdContent">
                <p>
                  {stores.name} <br />
                  {stores.type}
                </p>
                <p>{stores.price}₺</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
