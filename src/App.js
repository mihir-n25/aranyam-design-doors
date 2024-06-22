import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <>
     <Router>
     {/* <AnimatePresence mode="wait"> */}
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/work" element={<Work/>}/>
      <Route path="/contact" element={<Contact/>}/>
     </Routes>
     {/* </AnimatePresence> */}
     </Router>
    </>
  );
}

export default App;
