// import "./App.css";
import Header from "./Components/NavBar/Header";
import RoutesLayout from "./Layout/RoutesLayout";
import Footer from "./Utils/Footer";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <RoutesLayout />
      <Footer />
    </>
  );
};

export default App;
