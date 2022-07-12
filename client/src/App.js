import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/List";
import SingleHotel from "./pages/SingleHotel";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/list" element={<List/>}/>
      <Route path="/hotels/:id" element={<SingleHotel/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
