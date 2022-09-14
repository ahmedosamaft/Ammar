import "./App.css";
import FAQ from "./components/FAQ";
import Teams from "./components/Teams";
import Review from "./components/Review";
import LastNews from "./components/LastNews";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <FAQ />
      <Teams />
      <Review />
      <LastNews />
      <Footer />
    </div>
  );
}

export default App;
