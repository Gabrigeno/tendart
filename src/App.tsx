
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Fanzine2 from "./pages/Fanzine_2";
import Library from "./pages/Library";
import Fanzine1 from "./pages/Fanzine_1";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/fanzine_1" element={<Fanzine1 />} />
        <Route path="/fanzine_2" element={<Fanzine2 />} />
        <Route path="/library" element={<Library />} />
      </Routes>
    </Router>
  );
}

export default App;
