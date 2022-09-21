
import React, {useState, useEffect, useRef} from 'react';
import {ReactComponent as IconMenu} from "../images/icon-menu.svg";
import {ReactComponent as CloseMenu} from "../images/icon-close-menu.svg";
    
  // collapssible btn
  export default function NavBtn() {
      const [toggle, setToggle] = useState(false);
      const sidebarRef = useRef(null);

      function handleToggle() {
        setToggle(prev => !prev)
      }

        useEffect(() => {
          function handleClickOutside(event) {
            if(sidebarRef.current && !sidebarRef.current.contains(event.target)) {
              console.log(sidebarRef)
              handleToggle()
            }
          }
          document.addEventListener("mousedown", handleClickOutside);
          return () => {
            document.removeEventListener("mousedown", handleClickOutside);
          };
        }, [sidebarRef])

      // Sidebar 
      function Sidebar(props) {
          return (
          <div className='sidebar' ref={sidebarRef}>
            <button id="side-btn" className="toggleBtn" title="Close Sidebar" onClick={props.toggle}><CloseMenu /></button>
            <ul className='sidebar-ul'>
                <li className="side-item"><a href="#intro" >Home</a></li>
                <li className="side-item"><a href="#team" >Team</a></li>
                <li className="side-item"><a href="#detail">Location</a></li>
                <li className="side-item"><a href="#detail-booking">Booking</a></li>
            </ul>
          </div>
          )
      }

      // sidebar return
      return (
        <div className="nav-sidebar">
          <button id="nav-btn" title="Open Sidebar" className="toggleBtn" onClick={handleToggle}><IconMenu /></button>
          {toggle && <Sidebar toggle={handleToggle} />}
        </div>
      )
    }