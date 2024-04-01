import React from 'react'
import {Link} from 'react-router-dom'

const ListItem = ({title,className, onClick, to,ref}) => {
  return (
    <>
        <li onClick={onClick} ref={ref}><Link to={to} className={className}>{title}</Link></li>
    </>
  )
}

export default ListItem