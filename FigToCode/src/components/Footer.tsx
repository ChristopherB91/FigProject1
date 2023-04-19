import "../App.css";

interface Credits {
  Heading: string;
  Info1: string;
  Info2: string;
  Info3: string;
  Info4: string;
}
let End: Credits[] = [
  {
    Heading: "Online Alışveriş",
    Info1: "Müşteri Bilgilendirme",
    Info2: "Mesafeli Satış Sözleşmesi",
    Info3: "Güvenlik Bildirim Formu",
    Info4: "İade ve İptal Koşulları",
  },
  {
    Heading: "Hesabım",
    Info1: "Üyelik Bilgileri",
    Info2: "Kargolar Hakkında",
    Info3: "Hesap Numaralarımız",
    Info4: "İletişim Formu",
  },
  {
    Heading: "Müşteri Hizmetleri",
    Info1: "Sıkça Sorulan Sorular",
    Info2: "Ön Bilgilendirme Formu",
    Info3: "Hakkımızda",
    Info4: "İletişim Formu",
  },
  {
    Heading: "Yardım",
    Info1: "Sıkça Sorulan Sorular",
    Info2: "Ön Bilgilendirme Formu",
    Info3: "Hakkımızda",
    Info4: "İletişim Formu",
  },
];

export default function Footer() {
  return (
    <div>
      <footer>
        {End.map((ends) => {
          return (
            <div>
              <b className="end">{ends.Heading}</b>
              <div className="Info">
                <p>{ends.Info1}</p>
                <p>{ends.Info2}</p>
                <p>{ends.Info3}</p>
                <p>{ends.Info4}</p>
              </div>
            </div>
          );
        })}
      </footer>
      <hr />
      <p>
        <a target='_blank' href="https://www.figma.com/file/QkW4dDnnwtnUfM1IubMBZ0/E-commerce-Theme-(Community)?node-id=0%3A1&t=7gjhdiAswBRb2sWK-1">
          Link to the figma design I broguht to development
        </a>
      </p>
    </div>
  );
}
