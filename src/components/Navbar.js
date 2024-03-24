import React, { useState, useEffect } from "react";
import "../App.css";
import intersect from "./images/Intersect.png";

const Navbar = () => {
  const items = [
    "HOME",
    "ELECTRONICS",
    "BOOKS",
    "MUSIC",
    "MOVIES",
    "CLOTHING",
    "GAMES",
    "FURNITURE",
    "ELECTRONICS",
    "TRAVEL",
    "BOTANICAL",
    "CATEGORY NAME",
  ];

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [displayedItems, setDisplayedItems] = useState([]);
  const [dropdownItems, setDropdownItems] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    let numberOfItems = 12;

    numberOfItems = Math.max(
      Math.floor((windowWidth - (1200 - windowWidth)) / (13.5 * 16)),
      1
    );

    const slicedItems = items.slice(0, numberOfItems);
    setDisplayedItems(slicedItems);

    const remainingItems = items.slice(numberOfItems);
    setDropdownItems(remainingItems);
  }, [windowWidth]);

  return (
    <nav>
      <div className="navbar">
        <ul>
          <li class="head">
            <img className="cc" src={intersect} /> E-COMM
          </li>

          {displayedItems.map((item, index) => (
            <li key={index}>
              <a href="#">{item}</a>
            </li>
          ))}

          {dropdownItems.length > 0 && (
            <li className="dropdown">
              <button className="dropbtn">MORE ⇩</button>
              <div className="dropdown-content">
                {dropdownItems.map((item, index) => (
                  <a className="ditem" key={index} href="#">
                    {item}
                  </a>
                ))}
              </div>
            </li>
          )}

          <li className="search">
            <input
              className="bar"
              type="text"
              placeholder="🔍 Search Something"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
