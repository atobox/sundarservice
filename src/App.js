import './App.css';
import logo from './Images/logo_a.png';
import About from './Components/about';
import Book from './Components/book';
import Store from './Components/store';
import Team from './Components/team';
import GoogleMapReact from 'google-map-react';

function App() {
  let vl = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  return (
    <div className="App">
      <div className="navbar">
        <div><img src={logo} alt="logo" /></div>
        <div><h1>SundarService<span className="in">.in</span></h1></div>
        <div>
          <ul>
            <li><a href="#about"><i className="fas fa-info"></i> About Us</a></li>
            <li><a href="#store"><i className="fas fa-store-alt"></i> Store</a></li>
            <li><a href="#team"><i className="fas fa-user-friends"></i> Team</a></li>            
            <li><a href="#book">Book Call <i className="fas fa-bell"></i></a></li>
          </ul>
        </div>        
      </div>     
      <Book />
      <About />
      <Store />
      <Team />
      <footer>
        <h3>SundarService<span className="in">.in</span></h3>
        <ul>
          <h3>Browse Links</h3>
          <li><a href="#book">Contact Us</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#store">Our Store</a></li>
          <li><a href="#team">Our Team</a></li>                    
        </ul>
        <div className="map">
        <GoogleMapReact        
        defaultCenter={vl.center}
        defaultZoom={vl.zoom}
        >
      </GoogleMapReact>
        </div>        
      </footer>
      <div className="sup_footer">
          <p>SundarService<span className="in" style={{background:"black"}}>.in</span> &copy; 2020</p>
          <div style={{
            width:"300px",
            lineHeight:"25px",
            position:"absolute",
            top:"5px",
            left: "300px",
            fontSize: "14px",
            fontWeight: "bold",
            letterSpacing: "1px",
          }}>
            <i className="fa fa-phone"></i> (+91) 76793 78165<br/>
            <i className="fa fa-envelope"></i> sundarservice@gmail.com
          </div>
          <span className="dcredit">Designed & developed by Anish Majumdar</span>
      </div>
    </div>
  );
}

export default App;
