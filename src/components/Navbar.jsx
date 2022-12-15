import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import Logo from "./Logo";

const Navbar = () => {
    return (
        <header className="page-header">
            <nav>
                <ul className="links">
                    <li className="logo">
                        <Link to="/">
                            <Logo />
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <i className="fa-regular fa-compass"></i>
                            Explore
                        </Link>
                    </li>
                    <li>
                        <Link to="/auction">
                            <i className="fa-solid fa-gavel"></i>
                            auction
                        </Link>
                    </li>
                </ul>

                <div className="buttons">
                    <div className="search-button">
                        <a href="#0">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </a>
                    </div>

                    <div className="support-us">
                        <Link className="btn support" to="/support-us">
                            <i className="fa-solid fa-heart"></i>
                            Support us
                        </Link>
                    </div>

                    <div className="notifications">
                        <button>
                            <span className="badge">0</span>
                            <i className="fa-regular fa-bell"></i>
                        </button>
                    </div>

                    <div className="mail">
                        <Link to="/chat"><i className="fa-regular fa-envelope"></i></Link>
                    </div>

                    <div className="profile">
                        <Link to='/account'> <Avatar /> </Link>
                    </div>
                    {/* <div className="balance">
                         <input value="45.00" /> 
                    </div> */}
                    <div className="menus">
                        <button>
                            <i className="fa-solid fa-bars"></i>
                        </button>
                    </div>
                </div>

            </nav>



        </header >
    );
}

export default Navbar;

