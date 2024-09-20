import React from 'react';
import MenuListComposition from './menu';

export const Navbar = ({scrollToAbout, scrollToTop}) => {
    return (
        <div className="Navbar">
            <h1>GB.</h1>
            <div className="Menu">
                <MenuListComposition scrollToAbout={scrollToAbout} scrollToTop={scrollToTop} />
            </div>
        </div>
    );
}
