import { Link } from "react-router-dom"
import '../App.css';

const Navbar =()=>{
      return (
            <nav className="Navbar">
                  <div className="Navbar-logo" />
                  <div className="Navbar-links">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="https://www.meetup.com/pdx-women-coders/" target="_blank" rel="noopener noreferrer">Meetups</Link>
                        <Link to="/contact">Contact</Link>
                  </div>
                  <div className="Navbar-cta" />
            </nav>
      )
}
export default Navbar;