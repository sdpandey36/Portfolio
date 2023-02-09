import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Aboutme from './components/Aboutme';
import Service from './components/Service';
import Myportfolio from './components/Myportfolio';
import Testimonial from './components/Testimonial';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useRef } from 'react';

function App() {

  
  const home=useRef(null)
  const about=useRef(null)
  const services=useRef(null)
  const portfolio=useRef(null)
  const testimonial=useRef(null)
  const blog=useRef(null)
  const contact=useRef(null)


  return (
    <>
   <div className='app'>
    <Navbar ref={{
      ref1:home,
      ref2:about,
      ref3:services,
      ref4:portfolio,
      ref5:testimonial,
      ref6:blog,
      ref7:contact
    }} />
    
    <Home ref={home}/>
    <Aboutme ref={about} />
    <Service ref={services}  />
    <Myportfolio ref={portfolio}/>
    <Testimonial ref={testimonial}/>
    <Blog ref={blog}/>
    <Contact ref={contact}/>
    <Footer/>
   </div>
    </>
    
  );
}

export default App;
