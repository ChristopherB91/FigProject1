import "../App.css";

export default function Newsletter() {
  return (
    <div className="News">
      <p>
        <b id='FormTxt'>
          ÜYE OL VE HEMEN <br />
          %35 İNDİRİM KAZAN!
        </b>
      </p>
      <form>
        <div style={{display: 'flex'}}>
          <input name='Email' placeholder="Email address" className="Email" required type="email"></input>
          <button type="submit">GÖNDER</button>
        </div>
        <div>
          <input name="check" id="check" type="checkbox" />
          <label htmlFor="check" style={{ color: "black" }}>
            Şartlar ve Koşullar ile ikas Gizlilik Politikası ve Kişisel Verilere
            İlişkin Bilgilendirme Belgesi'nı okudum, kabul ediyorum.
          </label>
        </div>
      </form>
    </div>
  );
}
