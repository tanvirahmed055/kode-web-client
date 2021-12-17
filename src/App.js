import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PurchaseService from './Pages/PurchaseService/PurchaseService';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import DashboardHome from './Pages/Dashboard/DashboardHome/DashboardHome';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/purchaseService/:id" element={
            <PrivateRoute>
              <PurchaseService />
            </PrivateRoute>

          } >
          </Route>

          <Route path="/dashboard" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } >
            <Route path="/dashboard" element={<DashboardHome />} />

          </Route>

        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;