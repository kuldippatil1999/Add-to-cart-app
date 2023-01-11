import React from "react";
import "../Style/navbar.css";
function Navbar({setShow,size}) {
  return (
    <div>
      <nav>
        <div className="nav_box">
          <span className="my_shop">
            <img
              src="https://png.pngitem.com/pimgs/s/399-3994654_delicious-png-transparent-png.png"
              alt="img not found" 
              style={{ height: "60px", cursor: "pointer" }}
              onClick={()=>setShow(true)}
            />
          </span>
          <a href="/">Home</a>
          <div className="cart">
            <span onClick={()=>setShow(false)}>Cart Item</span>
            <span>{size}</span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
