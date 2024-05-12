import { BrowserRouter , Routes , Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/work" element={<Work/>}/>
      <Route path="/contact" element={<Contact/>}/>
     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
