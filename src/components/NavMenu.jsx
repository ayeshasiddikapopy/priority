import React, { useEffect, useRef, useState }  from "react";
import List from "./List";
import ListItem from "./ListItem";

const NavMenu = ({className}) => {
    const [active, setActive] = useState('home');
   
    const handleMenu = (item) => {
        setActive(item);
        // setActive(!active);
    };

   
    return(
        <div className={className}>
            <List className='Nav__listItem'>
                <ListItem className={`navList ${active === 'home' ? 'active' : ''}`} onClick={() => handleMenu('home')} title='home' />
                <ListItem className={`navList ${active === 'EXPLORE' ? 'active' : ''}`} onClick={() => handleMenu('EXPLORE')} title='EXPLORE'/>
                <ListItem className={`navList ${active === 'BLOG' ? 'active' : ''}`} onClick={() => handleMenu('BLOG')} title='BLOG'/>
                <ListItem className={`navList ${active === 'contact' ? 'active' : ''}`} onClick={() => handleMenu('contact')} title='contact'/>
            </List>   
        </div>
    )
}
export default NavMenu