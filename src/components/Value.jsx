import React from "react";

export default function Value({ displayedValue, totalValue }){
    return(
        <div className="value-container">
            <span className="material-symbols-outlined settings-icon">
            settings
            </span>
            <p className="previous__value">{totalValue?totalValue:0}</p>
            <p className="current__value">{displayedValue?displayedValue:0}</p>
        </div>
    )
}