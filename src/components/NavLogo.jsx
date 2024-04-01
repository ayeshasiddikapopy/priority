import React, { useState } from 'react'

const NavLogo = ({logoTexts, className}) => {

    let [logoText, setLogoTest] = useState(logoTexts)
  return (
    <div className={className}>
    {
        logoText 
        ?
        <h1 className='nav__logo-item'>pri<span>O</span>rity</h1>
        :
        <div>
            <img src="" alt="" />
        </div>
    }
    </div>
  )
}

export default NavLogo