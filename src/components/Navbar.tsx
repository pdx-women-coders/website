import { Link } from "react-router-dom"

const Navbar =()=>{
      return (
            <div>
                  <Link to="/">Home</Link>
                  <Link to="/about">About</Link>
                  <Link to="https://www.meetup.com/pdx-women-coders/" target="_blank" rel="noopener noreferrer">Meetups</Link>
                  <Link to="/contact">Contact</Link>
            </div>
      )
}
export default Navbar;