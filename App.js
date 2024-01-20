import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Booking from './components/Booking';
import Testimonials from './components/Testimonials';
function App() {
  

  return (
    <div className="App">
     <Navbar/>
     <Hero/>
     <About/>
     <Booking/>
     <Testimonials/>
    </div>
  );
}

export default App;
