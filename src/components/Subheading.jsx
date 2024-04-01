import React from 'react'

const Subheading = ({title,title_heading}) => {
  return (
    <>
        <div className='subheading'>
            <p className='subheading_item'>{title}</p>
            <h2 className='subheading_itemHeading'>{title_heading}</h2>
        </div>
    </>
  )
}

export default Subheading