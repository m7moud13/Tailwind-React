import { About } from "./Components/About";
import { AllinOnesection } from "./Components/AllinOnesection";
import { Footer } from "./Components/Footer";
import { Landing } from "./Components/Landing";
import { Navbar } from "./Components/Navbar";
import { Price_Section } from "./Components/Price_Section";
import { Support } from "./Components/Support";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <About />
      <Support />
      <AllinOnesection />
      <Price_Section />
      <Footer />
    </div>
  );
}

export default App;
