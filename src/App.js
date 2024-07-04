import "./App.css"
import Home from "./component/Home/Home.js";
import Services from "./component/Services/Services.js"
import About from "./component/About/About.js"
import Cashback from "./component/Cashback/Cashback.js"
import Tariffs from "./component/Tariffs/Tariffs.js";
import Resource from "./component/Human/Resource";
import Contact from "./component/Contact/Contact.js"
import Faq from "./component/Faq/Faq.js"
import { Routes, Route } from "react-router-dom";
let App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/tariffs" element={<Tariffs />}/>
      <Route path="/services" element={<Services />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/resource" element={<Resource />}/>
      <Route path="/faq" element={<Faq />}/>
      <Route path="/cashback" element={<Cashback />}/>
    </Routes>
  );
}
export default App;
