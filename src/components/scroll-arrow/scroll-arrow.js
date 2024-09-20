import React from "react";
import "./arrow.scss"

export const ScrollArrow = ({onClick}) => {

    return (
        <div onClick={onClick} style={{cursor: 'pointer'}}>
            <div className="arrow-container">
                <div className="arrow"></div>
                <div className="arrow"></div>
                <div className="arrow"></div>
            </div>
        </div>
    )
}