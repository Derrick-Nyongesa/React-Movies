import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Details from "./pages/detail/Details";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/:category" element={<Catalog></Catalog>}></Route>
          <Route path="/:category/:id" element={<Details></Details>}></Route>
          <Route
            path="/:category/search/:keyword"
            element={<Catalog></Catalog>}
          ></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
