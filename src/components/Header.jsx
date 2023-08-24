import React from "react";

export default function Header(){
    return(
        <div className="header">
            <h3 className="header__title">CALCULATOR</h3>
            <div className="theme">
                <p className="theme__text">THEME</p>
                <div className="theme__container">
                    <div className="theme__container--upper">
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                    </div>
                    <div className="theme__container--lower">
                        <button>O</button>
                    </div>
                </div>
            </div>
        </div>
    )
}