import "./App.css";
import Banner from "./components/Banner/Banner";
import Estate from "./components/Estate/Estate";
import Map from "./components/Map/Map";
import NavBar from "./components/NavBar/NarBar";

function App() {
  return (
    <div className="h-screen font-sans">
      <NavBar />
      <Banner />
      <Map />
      <Estate />
    </div>
  );
}

export default App;
