import Header from "./components/Header";
import Popular from "./components/Popular";
import Products from "./components/Products";
import Social from "./components/SocialMedia";
import SEO from "./components/SEO";
import Newsletter from './components/Newsletter'
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Popular />
      <Products />
      <Social />
      <SEO />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
