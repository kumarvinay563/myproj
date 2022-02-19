import './App.css';
import Header from './Components/Header';
import { Routes, Route, } from "react-router-dom";
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import Footer from './Components/Footer';
import Login from './Components/Login'



function App() {
  return (
    <div style={{backgroundColor: '#dbe1e2'}}>
    <Header  />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About/>} />
        <Route path="login" element={<Login />} />
        <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
