import React, {useState, useEffect} from 'react';
import logo from "../images/Artboard19.png";
import NavBtn from "./NavBtn"

export default function Header() {
    // Set Header movement
    const [stickyClass, setStickyClass] = useState('fixed');
    
    // scroll event for sticky top nav
    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);
        return () => window.removeEventListener('scroll', stickNavbar);
      }, []);

      const stickNavbar = () => {
        if (window !== undefined) {
          let windowHeight = window.scrollY;
          // window height changed for the demo
          windowHeight > 100 ? setStickyClass('sticky') : setStickyClass('fixed');
        }
      };

    // Nav Menu
    function NavMenu(props) {
        return (
          <nav className="navbar">
            <ul>
                <li className="nav-item"><a href="#intro" >Home</a></li>
                <li className="nav-item"><a href="#team" >Team</a></li>
                <li className="nav-item"><a href="#detail">Location</a></li>
                <li className="nav-item"><a href="#detail-booking">Booking</a></li>
            </ul>
          </nav>
        )
    }

    // add event listner to close the item

    // Header return
    return (
        <header>
            <div className={stickyClass} id="header">
                <img id="logo-img" src={logo} alt="Hair day Logo" />
                <NavMenu />
                <NavBtn />
            </div>
        </header>
    // end of NavBtn
    )
//end of Header
}

