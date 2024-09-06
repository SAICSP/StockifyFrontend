import './Navbar.css';
import { Link } from 'react-router-dom';
function Navbar() {
    return ( 
        <nav className="navbar navbar-expand-lg bg-body-tertiary  border-bottom" style={{height:"70px",backgroundColor:"#fff"}}>
            <div className="container-fluid">
                <Link to="/"><img src="public/media/images/logo.svg" alt="logo" className="mx-5" style={{width:"15%"}} /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/signup">Signup</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/products">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/pricing">Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/support">Support</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
 