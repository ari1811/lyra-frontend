import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#0A192F' }}>
      <div className="container">
        <Link className="navbar-brand text-warning" href="/">Lyra</Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-light" href="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" href="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" href="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-warning text-dark ms-3" href="/signup">Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
