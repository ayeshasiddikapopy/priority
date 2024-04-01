import React from 'react'
import HeroSlick from '../HeroSlick'

const Hero = () => {
  return (
    <>
        <div className='hero'>
            <div className="container">
              <div className="hero__contant">
                <h2 className='hero__subheader'>Discover the unique digital art of priority</h2>
                <p className='hero__para'>quickly aggretade global system before emerg model , professional service dismedeidia corporate delivared</p>
                <div className="hero__button">
                  <div className='hero__button--content'>
                    <button type='button'>explore</button>
                  </div>
                  <div className='hero__button--content'>
                    <button type='button'>works</button>
                  </div>
                </div>
              </div>
            </div>
            <HeroSlick/>
        </div>
    </>
  )
}

export default Hero