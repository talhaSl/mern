import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./components/Headers/Headers"
import Home from "./pages/Home/Home"
import Register from "./pages/Register/Register"
import Edit from "./pages/Edit/Edit"
import { Routes, Route } from "react-router-dom"
import Profile from "./pages/Profile/Profile"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='/userprofile/:id' element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
