import './App.css';
import logo from './Images/logo_a.png';
import About from './Components/about';
import Book from './Components/book';
import Store from './Components/store';
import Team from './Components/team';

function App() {
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
      <About />
    </div>
  );
}

export default App;
