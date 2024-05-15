import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner/Banner1/Banner";
import Banner2 from "./Components/Banner/Banner2/Banner2";
import Banner3 from "./Components/Banner/Banner3/Banner3";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Banner2/>
      <Banner3/>
    </div>
  );
}

export default App;
