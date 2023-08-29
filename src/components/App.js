{/* <p>Now I can render any React component on any DOM node I want using ReactDOM.render</p> */ }
import React, { useState } from "react";
import All from "./All.js";
import Breakfast from "./Breakfast.js";
import Lunch from "./Lunch.js";
import Shakes from "./Shakes.js";


let arr = [
  {
    id: 1,
    title: 'buttermilk pancakes',
    category: 'breakfast',
    price: 15.99,
    img: './images/item-1.jpeg',
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: 'diner double',
    category: 'lunch',
    price: 13.99,
    img: './images/item-2.jpeg',
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: 'godzilla milkshake',
    category: 'shakes',
    price: 6.99,
    img: './images/item-3.jpeg',
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: 'country delight',
    category: 'breakfast',
    price: 20.99,
    img: './images/item-4.jpeg',
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: 'egg attack',
    category: 'lunch',
    price: 22.99,
    img: './images/item-5.jpeg',
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: 'oreo dream',
    category: 'shakes',
    price: 18.99,
    img: './images/item-6.jpeg',
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: 'bacon overflow',
    category: 'breakfast',
    price: 8.99,
    img: './images/item-7.jpeg',
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: 'american classic',
    category: 'lunch',
    price: 12.99,
    img: './images/item-8.jpeg',
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: 'quarantine buddy',
    category: 'shakes',
    price: 16.99,
    img: './images/item-9.jpeg',
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
]

const App = () => {
  // console.log("Menu : ", arr);
  let [status1, setStatus1] = useState("All");

  return (
    <>
    <div id="main"> 

      <h1> Our Menu</h1>
      <ul>
        <li id="filter-btn-1" onClick={() => setStatus1("All")}>All</li>
        <li id="filter-btn-2" onClick={() => setStatus1("Breakfast")}>Breakfast</li>
        <li id="filter-btn-3" onClick={() => setStatus1("Lunch")}>Lunch</li>
        <li id="filter-btn-4" onClick={() => setStatus1("Shakes")}>Shakes</li>
      </ul>

        <div className="menu-item-all">
      {
        status1 === 'All' &&
            <All data={arr} />
        }
        </div>
        <div className="menu-item-breakfast">

      {
        status1 === 'Breakfast' &&
        <Breakfast data={arr} />
      }
      </div>
      <div className="menu-item-lunch">
      {
        status1 === 'Lunch' &&
        <Lunch data={arr} />
      } 
      </div>
      <div className="menu-item-shakes">
      {
        status1 === 'Shakes' &&
        <Shakes data={arr} />
      }
      </div>
      </div>
    </>
  )
}

export default App;