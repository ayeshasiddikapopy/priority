import React from 'react'
import Flex from '../Flex'
import NavLogo from '../NavLogo'
import NavMenu from '../NavMenu'
import NavIcon from '../NavIcon'

const Navbar = () => {
  return (
    <>
      <div className='Navbar'>
        <div className="container">
          <Flex className='nav__content'>
            <NavLogo className='width' logoTexts={true} />
            <NavMenu className='width'/>
            <NavIcon className='width'/>
          </Flex>
        </div>
      </div>
    </>
  )
}

export default Navbar