import { Link } from 'react-router-dom'
import '../css/Navbar.css' // Assuming you have a CSS file for navbar styles

export default function Navbar() {
    return (
        <nav className="headerNavbar">
            <div className='headerNavbarLeft'>
                <Link className='nav-link' to="/">Home</Link>
                <Link className='nav-link' to="/dashboard">Dashboard</Link>
                <Link className='nav-link' to="/post">Post Ad</Link>
            </div>
            <div className='headerNavbarRight'>
                <Link className='nav-link' to="/login">Login</Link>
                <Link className='nav-link' to="/signup">Signup</Link>
            </div>
        </nav>
    )
}
