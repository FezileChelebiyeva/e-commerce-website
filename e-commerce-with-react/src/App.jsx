import "./App.scss";
import "./assets/sass/main.scss";
import Footer from "./layout/footer";
import Header from "./layout/header";
import HomePage from "./pages/home";
import Routing from "./routing";
function App() {
  return (
    <div className="App">
      <Header />
      <Routing />
      <Footer />
    </div>
  );
}

export default App;
