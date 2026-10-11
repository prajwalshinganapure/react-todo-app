import React, { useState } from 'react';
import "./style.css";
import Menu from './MenuApi.js';
import Menucard from './Menucard.js';
import Navbar from './Navbar.js';


const uniqueList =[ 
 ...new Set
  (Menu.map((currElem) => {
      return currElem.category;
})
),
"All",
]

console.log(uniqueList);

const Restaurent = () => {
    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setmenuList] = useState(uniqueList);

    const filterItem = (category) => {
      if (category === "All"){
        setMenuData(Menu);
        return
      }
      const updatedList = Menu.filter((curElem) => {
        return curElem.category === category;
      })
      setMenuData(updatedList);
    }
  return (
    <>
    
    <Navbar filterItem= {filterItem}  menuList = {menuList}/>
    <Menucard menuData = {menuData} />
    </>
  )  
}
 
export default Restaurent
