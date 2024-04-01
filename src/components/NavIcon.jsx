import React, { useEffect, useRef, useState } from 'react'
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import Flex from './Flex';
import InputBox from './InputBox';

const NavIcon = ({className}) => {

    let [IsActiveIcon, setActiveIcon] = useState(false) 
    let [IsActiveIcon2, setActiveIcon2] = useState(false) 
    const [show, setShow] = useState(false);
    const [inputStyle, setInputStyle] = useState({
        width: '0',
        padding: '0'
    });

    // toggle searce bar
    useEffect(() => {
        if (show) {
            setInputStyle({
                width: '100%',
                padding: '10px',
                transition: 'width 0.4s ease-in-out, padding 0.4s ease-in-out'
            });
        } else {
            setInputStyle({
                width: '0',
                padding: '0',
                transition: 'width 0.4s ease-in-out, padding 0.4s ease-in-out'
            });
        }
       
    }, [show]);

    // input change
    const handleInputChange = () => {
       console.log('input')
    }
    // searce
    const handleIcon = () => {
        setShow(!show);
        setActiveIcon2(false)
        setActiveIcon(false)
    }
    // cart
    let handleIconItems = () => {
        setActiveIcon(!IsActiveIcon)
        setActiveIcon2(false)
        setShow(false)
    }

    //user
    let handleIconItems2 = () => {
        setActiveIcon2(!IsActiveIcon2)
        setActiveIcon(false)
        setShow(false)
    }
  return (
    <div className={className}>
        <Flex className='NavIcons '>
            {show &&        
                <InputBox type="text" style={inputStyle} className='NavInput' onChange={handleInputChange}/>
            }
            <div>
                <CiSearch onClick={handleIcon} className={`${show ? 'active': ''}`}/>
            </div>
            <div>
                <CiShoppingCart onClick={handleIconItems} className={`${IsActiveIcon ? 'active': ''}`}/>
            </div>
            <div>
                <CiUser onClick={handleIconItems2} className={`${IsActiveIcon2 ? 'active': ''}`}/>
            </div>
        </Flex>
    </div>
  ) 
}

export default NavIcon