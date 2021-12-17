import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PurchaseService from './Pages/PurchaseService/PurchaseService';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/purchaseService/:id" element={
            <PurchaseService />
          } >
          </Route>
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;