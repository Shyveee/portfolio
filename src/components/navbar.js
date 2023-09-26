import React from 'react'
import MenuListComposition from './menu';

export const Navbar = () => {
  return (
    <div className="Navbar">
        <h1>GB.</h1>
        <div className="Menu">
          <MenuListComposition/>
        </div>
        
    </div>
  )
}
